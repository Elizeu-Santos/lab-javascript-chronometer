const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printSeconds()
  printMinutes()
  printMilliseconds() 
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.minutes[1];
  minDec.innerHTML = chronometer.minutes[0];

}

function printSeconds() {
  // ... your code goes here
  secUni.innerHTML = chronometer.seconds[1];
  secDec.innerHTML = chronometer.seconds[0];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milUni.innerHTML = chronometer.milliseconds[1];
  milDec.innerHTML = chronometer.milliseconds[0];
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (btnLeft.innerHTML === "START") {
      btnLeft.innerHTML = "STOP";
      btnRight.innerHTML = "SPLIT";
      btnLeft.setAttribute("class", "btn stop");
      btnRight.setAttribute("class", "btn split");
      chronometer.startClick();
    } else if (btnLeft.innerHTML === "STOP") {
      btnLeft.innerHTML = "START";
      btnRight.innerHTML = "RESET";
      btnLeft.setAttribute("class", "btn start");
      btnRight.setAttribute("class", "btn reset");
      chronometer.stopClick();
    }

});


// Reset/Split Button
btnRight.addEventListener('click', function () {

  const newLi = document.createElement("li")
  const list = document.querySelector("#splits")
  const allLi = document.getElementsByTagName("ol")
  if (btnRight.innerHTML === "SPLIT") {
    list.appendChild(newLi)
    newLi.innerHTML = chronometer.minutes + ":" + chronometer.seconds;
  } else if (btnRight.innerHTML === "RESET") {
    console.log('TEST');
    chronometer.resetClick();
    chronometer.printTime()
  }
});
