"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Darwin Pena Cabrera
      Date: 04/02/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// function for the timer object
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// run or pause for the timer prototype
timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(function() {
      if(timer.seconds > 0) {
        timer.seconds--;
      } else if (timer.minutes > 0) {
        timer.minutes--;
        timer.seconds = 59;
      } else {
        // Timer reached the 0 mark
        window.clearInterval(timer.timeID);
        timer.timeID=null;
      }
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
    }, 1000); //time will run every second
  }
};






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

// update the time when the minutes or the second change

minBox.onchange = function() {
  myTimer.minutes = parseInt(this.value);
};

secBox.onchange = function() {
  myTimer.seconds = parseInt(this.value);
};

// start or pause the timer when clicking runPauseButton
runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};