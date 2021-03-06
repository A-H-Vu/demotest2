library('optimx')


# Model function:

twoRateModel <- function(par, schedule) {
  
  # thse values should be zero at the start of the loop:
  Et <- 0 # previous error: none
  St <- 0 # state of the slow process: aligned
  Ft <- 0 # state of the fast process: aligned
  
  # we'll store what happens on each trial in these vectors:
  slow <- c()
  fast <- c()
  total <- c()
  
  # now we loop through the perturbations in the schedule:
  for (t in c(1:length(schedule))) {
    
    # first we calculate what the model does
    # this happens before we get visual feedback about potential errors
    St <- (par['Rs'] * St) - (par['Ls'] * Et)
    Ft <- (par['Rf'] * Ft) - (par['Lf'] * Et)
    Xt <- St + Ft
    
    # now we calculate what the previous error will be for the next trial:
    if (is.na(schedule[t])) {
      Et <- 0
    } else {
      Et <- Xt + schedule[t]
    }
    
    # at this point we save the states in our vectors:
    slow <- c(slow, St)
    fast <- c(fast, Ft)
    total <- c(total, Xt)
    
  }
  
  # after we loop through all trials, we return the model output:
  return(data.frame(slow,fast,total))
  
}


# Model error function:


twoRateMSE <- function(par, schedule, reaches) {
  
  # for parameter combinations that are not allowed, 
  # we need to return a large error, we use 
  # double the error of an intercept model
  # this is larger than any realistic fit will get,
  # but still a fairly normal number, so that solutions
  # close to impossible will still be found when optimal
  bigError <- mean(schedule^2, na.rm=TRUE) * 2
  
  # learning and retention rates of the fast and slow process are constrained:
  if (par['Ls'] > par['Lf']) {
    return(bigError)
  }
  if (par['Rs'] < par['Rf']) {
    return(bigError)
  }
  
  return( mean((twoRateModel(par, schedule)$total - reaches)^2, na.rm=TRUE) )
  
} 


# UNTESTED Grid search function:

twoRateGridSearch <- function(schedule, reaches, nval=7, nfits=10) {
  
  # we check certain values for each parameter:
  parvals <- seq(1/nvals/2,1-(1/nvals/2),1/nvals)
  
  # make search grid:
  searchgrid <- expand.grid('Ls'=parvals,
                            'Lf'=parvals,
                            'Rs'=parvals,
                            'Rf'=parvals)
  
  # evaluate starting positions:
  MSE <- apply(searchgrid, FUN=twoRateMSE, MARGIN=c(1), schedule=schedule, reaches=reaches)
  # run optimx on the best starting positions:
  allfits <- do.call("rbind",
                     apply( searchgrid[order(MSE)[1:nfits],],
                            MARGIN=c(1),
                            FUN=optimx,
                            fn=twoRateMSE,
                            method='L-BFGS-B',
                            lower=c(0,0,0,0),
                            upper=c(1,1,1,1),
                            schedule=schedule,
                            reaches=reaches ) )
  
  # pick the best fit:
  win <- allfits[order(allfits$value)[1],]
  
  # return the relevant info:
  par = unlist(win[,c(1:4)])
  MSE = unlist(win[,5])       # for now I technically only need the pars, right?
  
  #return( list('par'=par, MSE'=MSE) ) 
  return( par )
  
}