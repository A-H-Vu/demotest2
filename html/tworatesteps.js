﻿/********************* 
 * Tworatesteps Test *
 *********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'tworatesteps';  // from the Builder filename that created this script
let expInfo = {'participant': 'test', 'taskVer': '1'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const taskLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(taskLoopLoopBegin, taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [{name: 'taskConds.xlsx', path: './resources/taskConds.xlsx'}, {name: 'famConds.xlsx', path: './resources/famConds.xlsx'}, {name: 'mainConds.xlsx', path: './resources/famConds.xlsx'}]

  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var setupText;
var setupResp;
var thisExp;
var win;
var event;
var shuffle;
var pi;
var sin;
var cos;
var sqrt;
var taskVer;
var trialNum;
var orderChoice;
var rotationChoice;
var targetChoice;
var order;
var rotation;
var targetAngles;
var trialnums;
var targetangle_deg;
var rotations_deg;
var instructionClock;
var instructionText;
var instructionResp;
var taskCounter;
var trialClock;
var trialMouse;
var trialCounter;
var ang;
var rtd;
var previousTaskTrials;
var totalExperimentTrials;
var trialTarget;
var trialHome;
var trialCursor;
var trialText;
var testSkip;
var showAngle;
var endClock;
var endText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  setupText = new visual.TextStim({
    win: psychoJS.window,
    name: 'setupText',
    text: 'Use Mouse. Space continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  setupResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  sqrt = Math.sqrt;
  taskVer = Number.parseInt(expInfo["taskVer"]);
  if (Number.isNaN(taskVer)) {
      taskVer = 0
  }
  trialNum = 0;
  orderChoice = (taskVer % 6);
  rotationChoice = (Math.floor((taskVer / 12)) % 2);
  targetChoice = (Math.floor((taskVer / 6)) % 2);
  order = [0, 1, 2];
  if ((orderChoice === 0)) {
      order = [0, 1, 2];
  } else {
      if ((orderChoice === 1)) {
          order = [0, 1, 3];
      } else {
          if ((orderChoice === 2)) {
              order = [0, 2, 1];
          } else {
              if ((orderChoice === 3)) {
                  order = [0, 2, 3];
              } else {
                  if ((orderChoice === 4)) {
                      order = [0, 3, 1];
                  } else {
                      if ((orderChoice === 5)) {
                          order = [0, 3, 2];
                      }
                  }
              }
          }
      }
  }
  rotation = [1, (- 1)];
  if ((rotationChoice === 0)) {
      rotation = [1, (- 1)];
  } else {
      if ((rotationChoice === 1)) {
          rotation = [(- 1), 1];
      }
  }
  
  targetAngles = [[40, 50, 130, 140], [40, 50], [130, 140]];
  if ((targetChoice === 0)) {
      targetAngles = [[40, 50, 130, 140], [40, 50], [130, 140]];
  } else {
      if ((targetChoice === 1)) {
          targetAngles = [[40, 50, 130, 140], [130, 140], [40, 50]];
      }
  }
  
  // Vector containing number of trials
  trialnums = [24, 160, 160];
  targetangle_deg = [];
  
  var tasktargets, taskangles, nblocks;
  
  for (var taskno = 0; taskno < 3; taskno++) {
      var tasktargets, taskangles, nblocks;
      tasktargets = [];
      taskangles = targetAngles[taskno];
      nblocks = trialnums[taskno] / taskangles.length;
      for (var blockno = 0; blockno < nblocks; blockno++) {
          var blockangles = taskangles.slice(0);
          util.shuffle(blockangles);
          tasktargets.push.apply(tasktargets, blockangles);
      }
      targetangle_deg[taskno] = tasktargets;
  }
  
  rotations_deg = [];
  
  var taskrotations, tasktype, modifier, phasetrials, phaserotations, taskrotations;
  for (var taskno = 0; taskno < 3; taskno++) {
      var taskrotations, tasktype, trialno;
      taskrotations = [];
      tasktype = order[taskno];
      if (tasktype == 0) {
          for (var trialno = 0; trialno < 12; trialno++) {
              taskrotations.push(0);
          }
          for (var trialno = 0; trialno < 12; trialno++) {
              taskrotations.push(NaN);
          }
      }
  /* abrupt */
      if (tasktype == 1) {
          modifier = rotation[taskno-1];
          phasetrials = [32,96, 8, 24];
          phaserotations = [0, 30, -30, NaN];
          for (var phaseno = 0; phaseno < phasetrials.length; phaseno++) {
              for (var trialno = 0; trialno < phasetrials[phaseno]; trialno++) {
                  taskrotations.push(phaserotations[phaseno] * modifier);
              }
          }
      }
  /* ramped */
      if (tasktype == 2) {
          modifier = rotation[taskno-1];
          phasetrials = [32,48, 48, 8, 24];
          phaserotations = [0, NaN, 30, -30, NaN];
          for (var phaseno = 0; phaseno < phasetrials.length; phaseno++) {
              if (phaseno == 1) {
                  for (var trialno = 0; trialno < phasetrials[phaseno]; trialno++) {
                      taskrotations.push((trialno + 1) * 0.625 * modifier);
                  }
              } else {
                  for (trialno = 0; trialno < phasetrials[phaseno]; trialno++) {
                      taskrotations.push(phaserotations[phaseno] * modifier);
                  }
              }
          }
      }
  /* stepped */
      if (tasktype == 3) {
          modifier = rotation[taskno-1];
          phasetrials = [32,24,24,24,24, 8, 24];
          phaserotations = [0, 7.5,15,22.5,30, -30, NaN];
          for (var phaseno = 0; phaseno < phasetrials.length; phaseno++) {
              for (var trialno = 0; trialno < phasetrials[phaseno]; trialno++) {
                  taskrotations.push(phaserotations[phaseno] * modifier);
              }
          }
      }
      rotations_deg[taskno] = taskrotations;
  }
  
  console.log(rotations_deg);
  console.log(targetangle_deg);
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  instructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionText',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructionResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  taskCounter = -1;
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialMouse.mouseClock = new util.Clock();
  trialCounter = -1;
  ang = NaN;
  rtd = NaN;
  console.log("begin experiment");
  
  previousTaskTrials = 0;
  if (taskCounter > 0) {
      for (taskno = 0; taskno < taskCounter; taskno++) {
          
          previousTaskTrials += targetAngles[taskCounter].length;
          
      }
  }
  totalExperimentTrials = 24 + 160 + 160;
  trialTarget = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTarget', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  trialHome = new visual.Polygon ({
    win: psychoJS.window, name: 'trialHome', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trialCursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trialCursor', 
    edges: 180, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  testSkip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  showAngle = new visual.TextStim({
    win: psychoJS.window,
    name: 'showAngle',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), 0.3], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'thank you',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _setupResp_allKeys;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    setupResp.keys = undefined;
    setupResp.rt = undefined;
    _setupResp_allKeys = [];
    // keep track of which components have finished
    setupComponents = [];
    setupComponents.push(setupText);
    setupComponents.push(setupResp);
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *setupText* updates
    if (t >= 0.0 && setupText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setupText.tStart = t;  // (not accounting for frame time here)
      setupText.frameNStart = frameN;  // exact frame index
      
      setupText.setAutoDraw(true);
    }

    
    // *setupResp* updates
    if (t >= 0.0 && setupResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setupResp.tStart = t;  // (not accounting for frame time here)
      setupResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { setupResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { setupResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { setupResp.clearEvents(); });
    }

    if (setupResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = setupResp.getKeys({keyList: ['space'], waitRelease: false});
      _setupResp_allKeys = _setupResp_allKeys.concat(theseKeys);
      if (_setupResp_allKeys.length > 0) {
        setupResp.keys = _setupResp_allKeys[_setupResp_allKeys.length - 1].name;  // just the last key pressed
        setupResp.rt = _setupResp_allKeys[_setupResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taskLoop;
var currentLoop;
function taskLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  taskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'taskConds.xlsx', order),
    seed: undefined, name: 'taskLoop'
  });
  psychoJS.experiment.addLoop(taskLoop); // add the loop to the experiment
  currentLoop = taskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTaskLoop of taskLoop) {
    const snapshot = taskLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instructionRoutineBegin(snapshot));
    thisScheduler.add(instructionRoutineEachFrame(snapshot));
    thisScheduler.add(instructionRoutineEnd(snapshot));
    const trialsLoopLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopLoopBegin, trialsLoopLoopScheduler);
    thisScheduler.add(trialsLoopLoopScheduler);
    thisScheduler.add(trialsLoopLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trialsLoop;
function trialsLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: condsFile,
    seed: undefined, name: 'trialsLoop'
  });
  psychoJS.experiment.addLoop(trialsLoop); // add the loop to the experiment
  currentLoop = trialsLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialsLoop of trialsLoop) {
    const snapshot = trialsLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopLoopEnd() {
  psychoJS.experiment.removeLoop(trialsLoop);

  return Scheduler.Event.NEXT;
}


function taskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(taskLoop);

  return Scheduler.Event.NEXT;
}


var _instructionResp_allKeys;
var trialCounter_task;
var instructionComponents;
function instructionRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructionText.setText(taskVersion);
    instructionResp.keys = undefined;
    instructionResp.rt = undefined;
    _instructionResp_allKeys = [];
    taskCounter++;
    trialCounter_task = 0;
    console.log(taskCounter);
    console.log(trialCounter_task);
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(instructionText);
    instructionComponents.push(instructionResp);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instructionRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instruction'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructionText* updates
    if (t >= 0.0 && instructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionText.tStart = t;  // (not accounting for frame time here)
      instructionText.frameNStart = frameN;  // exact frame index
      
      instructionText.setAutoDraw(true);
    }

    
    // *instructionResp* updates
    if (t >= 0.0 && instructionResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionResp.tStart = t;  // (not accounting for frame time here)
      instructionResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructionResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructionResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructionResp.clearEvents(); });
    }

    if (instructionResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructionResp.getKeys({keyList: ['space'], waitRelease: false});
      _instructionResp_allKeys = _instructionResp_allKeys.concat(theseKeys);
      if (_instructionResp_allKeys.length > 0) {
        instructionResp.keys = _instructionResp_allKeys[_instructionResp_allKeys.length - 1].name;  // just the last key pressed
        instructionResp.rt = _instructionResp_allKeys[_instructionResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    
    
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var screen_width;
var screen_height;
var short_side;
var trimmed_width;
var trimmed_height;
var home_target_distance;
var cursor_radius;
var homepos;
var homex;
var homey;
var cursorx_rel;
var cursory_rel;
var targetangle;
var targetangle_rad;
var targetPos;
var targetOpacity;
var homeOpacity;
var cursorOpacity;
var homeStart;
var reachOut;
var trialStep;
var steps;
var cursorPosX;
var cursorPosY;
var trials_left;
var _testSkip_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trialMouse
    // current position of the mouse:
    trialMouse.x = [];
    trialMouse.y = [];
    trialMouse.leftButton = [];
    trialMouse.midButton = [];
    trialMouse.rightButton = [];
    trialMouse.time = [];
    gotValidClick = false; // until a click is received
    trialMouse.mouseClock.reset();
    /* set up workspace on each trial */
    
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    // scale so shortest side == 1
    short_side = Math.min(screen_width, screen_height);
    screen_width  = screen_width / short_side;
    screen_height = screen_height / short_side;
    
    trimmed_width = (2/3) * screen_width;
    trimmed_height = (2/3) * screen_height;
    
    if ((trimmed_height*2) < trimmed_width) {
            trimmed_width = trimmed_height*2;
    } else {
            trimmed_height = trimmed_width/2;
    }
    
    home_target_distance = trimmed_height;
    cursor_radius = trimmed_height * 0.025; // or whatever was used
    homepos = [0, -0.35 * trimmed_height];
    
    homex = homepos[0];
    homey = homepos[1];
    
    /* end set up workspace */
    
    win.mouseVisible = false;
    console.log("begin routine");
    
    cursorx_rel = [];
    cursory_rel = [];
    trialCounter++;
    
    targetangle = targetAngles[taskCounter][(trialCounter)];
    // maybe only when targetangle !isNaN ?
    targetangle_rad = (pi * (targetangle / 180));
    targetPos = [(cos(targetangle_rad) * home_target_distance), (sin(targetangle_rad) * home_target_distance)];
    
    
    //homePos = [0, 0];
    targetOpacity = 0;
    homeOpacity = 0;
    cursorOpacity = 1;
    
    trialCursor.pos = [1.5, 1.5];
    trialMouse.pos = [1.5, 1.5]; // why both?
    
    homeStart = false;
    reachOut = false;
    trialStep = 1;
    steps = [];
    
    /* marius messed up until here */
    // not sure if the rest is needed:
    
    cursorPosX = trialMouse.getPos()[0];
    cursorPosY = trialMouse.getPos()[1];
    
    //theta = 0;
    
    trials_left = totalExperimentTrials - previousTaskTrials - trialCounter;
    trialText.text = (trials_left).toString();
    
    
    targetangle = targetAngles[taskCounter][trialCounter_task];
    targetangle_rad = (pi * (targetangle / 180));
    
    
    
    testSkip.keys = undefined;
    testSkip.rt = undefined;
    _testSkip_allKeys = [];
    showAngle.setText(ang);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialMouse);
    trialComponents.push(trialTarget);
    trialComponents.push(trialHome);
    trialComponents.push(trialCursor);
    trialComponents.push(trialText);
    trialComponents.push(testSkip);
    trialComponents.push(showAngle);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var CursorTargetDistance;
var CursorHomeDistance;
var step;
var mpx;
var mpy;
var theta;
var rx;
var ry;
var radius;
var frameRemains;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trialMouse* updates
    if (t >= 0.0 && trialMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialMouse.tStart = t;  // (not accounting for frame time here)
      trialMouse.frameNStart = frameN;  // exact frame index
      
      trialMouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trialMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trialMouse.getPressed();
      const xys = trialMouse.getPos();
      trialMouse.x.push(xys[0]);
      trialMouse.y.push(xys[1]);
      trialMouse.leftButton.push(buttons[0]);
      trialMouse.midButton.push(buttons[1]);
      trialMouse.rightButton.push(buttons[2]);
      trialMouse.time.push(trialMouse.mouseClock.getTime());
    }
    /* if we run this on every frame of the trial routine, things *should* work out:
    calculate distances to determine step */
    
    CursorTargetDistance = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTarget.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTarget.pos[1]), 2)));
    CursorHomeDistance = Math.sqrt((Math.pow((trialCursor.pos[0] - trialHome.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialHome.pos[1]), 2)));
    steps.append(trialStep);
    
    //on Each Frame, we do this:
    cursorx_rel.append((trialCursor.pos[0] - homex) / home_target_distance);
    cursory_rel.append((trialCursor.pos[1] - homey) / home_target_distance);
    
    /* determine step and opacity of home and target */
    
    if ((! homeStart)) {
        homeOpacity = 1;
        targetOpacity = 0;
        step = 1;
        if ((CursorHomeDistance < cursor_radius)) {
            homeStart = true;
            //console.log(((("end step 1" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (((! reachOut) && homeStart)) {
        homeOpacity = 0;
        targetOpacity = 1;
        step = 2;
        if ((CursorTargetDistance < cursor_radius)) {
            reachOut = true;
            //console.log(((("end step 2" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if (reachOut) {
        homeOpacity = 1;
        targetOpacity = 0;
        step = 3;
        if ((CursorHomeDistance < cursor_radius)) {
            //console.log(((("end step 3" + " (") + globalClock.getTime().toString()) + ")"));
            continueRoutine = false;
        }
    }
    
    /* determine the cursor size, position and opacity */
    
    mpx = trialMouse.getPos()[0];
    mpy = trialMouse.getPos()[1];
    
    // if the rotation is NaN, we need to give error-clamped feedback:
    
    if (isNaN(targetangle)) {
    
        if (step == 2) {
            theta = targetangle_rad;
            rx = (CursorHomeDistance * cos(targetangle_rad)) + homepos[0];
            ry = (CursorHomeDistance * sin(targetangle_rad)) + homepos[1];
            radius = cursor_radius;
            cursorOpacity = 1.0;
        } else { // STEP == 1 | STEP  == 3
            if (CursorHomeDistance > (0.20 * target_home_distance)) {
                rx = homex;
                ry = homey;
                radius = CursorHomeDistance;
                cursorOpacity = 0.2;
            } else {
                rx = mpx;
                ry = mpy;
                radius = cursor_radius;
                cursorOpacity = 1.0;
             }
        }
    } else {
        rx = (mpx * cos(targetangle_rad)) - (mpy * sin(targetangle_rad));
        ry = (mpx * sin(targetangle_rad)) + (mpy * cos(targetangle_rad));
        radius = cursor_radius;
        cursorOpacity = 1.0;
    };
    
    // *trialTarget* updates
    if (t >= 0.0 && trialTarget.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTarget.tStart = t;  // (not accounting for frame time here)
      trialTarget.frameNStart = frameN;  // exact frame index
      
      trialTarget.setAutoDraw(true);
    }

    
    if (trialTarget.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTarget.setOpacity(targetOpacity);
      trialTarget.setPos(targetPos);
    }
    
    // *trialHome* updates
    if (t >= 0.0 && trialHome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialHome.tStart = t;  // (not accounting for frame time here)
      trialHome.frameNStart = frameN;  // exact frame index
      
      trialHome.setAutoDraw(true);
    }

    
    if (trialHome.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialHome.setOpacity(homeOpacity);
      trialHome.setPos([0, 0]);
    }
    
    // *trialCursor* updates
    if (t >= 0.0 && trialCursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCursor.tStart = t;  // (not accounting for frame time here)
      trialCursor.frameNStart = frameN;  // exact frame index
      
      trialCursor.setAutoDraw(true);
    }

    
    if (trialCursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialCursor.setOpacity(cursorOpacity);
      trialCursor.setPos([mpx, mpy]);
    }
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
    }

    
    // *testSkip* updates
    if (t >= 0.0 && testSkip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testSkip.tStart = t;  // (not accounting for frame time here)
      testSkip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { testSkip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { testSkip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { testSkip.clearEvents(); });
    }

    if (testSkip.status === PsychoJS.Status.STARTED) {
      let theseKeys = testSkip.getKeys({keyList: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'], waitRelease: false});
      _testSkip_allKeys = _testSkip_allKeys.concat(theseKeys);
      if (_testSkip_allKeys.length > 0) {
        testSkip.keys = _testSkip_allKeys[_testSkip_allKeys.length - 1].name;  // just the last key pressed
        testSkip.rt = _testSkip_allKeys[_testSkip_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *showAngle* updates
    if (t >= 0.0 && showAngle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      showAngle.tStart = t;  // (not accounting for frame time here)
      showAngle.frameNStart = frameN;  // exact frame index
      
      showAngle.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (showAngle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      showAngle.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialMouse.x', trialMouse.x);
    psychoJS.experiment.addData('trialMouse.y', trialMouse.y);
    psychoJS.experiment.addData('trialMouse.leftButton', trialMouse.leftButton);
    psychoJS.experiment.addData('trialMouse.midButton', trialMouse.midButton);
    psychoJS.experiment.addData('trialMouse.rightButton', trialMouse.rightButton);
    psychoJS.experiment.addData('trialMouse.time', trialMouse.time);
    
    thisExp.addData("step", steps);
    thisExp.addData("targetangle_deg", targetangle);
    thisExp.addData("rotation", rotations_deg);
    thisExp.addData("task", taskCounter);
    thisExp.addData("trialNum", trialCounter);
    
    console.log("end routine");
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(endText);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (endText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      endText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  document.documentElement.style.cursor = 'auto';
  
  
  
  
  
  
  console.log("end experiment");
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
