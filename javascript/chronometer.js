class Chronometer {
  constructor() {
    // ... your code goes here
  }

  start(callback) {
    // ... your code goes here
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


// Constructor

function Chronometer() {

  this.currentTime = 0
  this.intervalId = null
  this.minutes = 0
  this.seconds = 0
  this.milliseconds = 0
  
 }



 
Chronometer.prototype.startClick = function () {

  this.intervalId = setInterval(() => {
      
        this.currentTime += 1
        this.setTime();
        printTime()

  }, 10);

 };

 Chronometer.prototype.setMinutes = function () {

  return Math.floor(this.currentTime / 6000);

};

 Chronometer.prototype.setSeconds = function () {

  return Math.floor((this.currentTime % 6000)/ 100);

 };

 Chronometer.prototype.setMilliseconds = function () {

  return Math.floor(this.currentTime % 100);

 };

Chronometer.prototype.twoDigitsNumber = function (value) {

   var twoDigits = '' + value;

   if (value <= 9) {

      return twoDigits = '0' + twoDigits;

  }else{

      return value.toString();
  }

};

 Chronometer.prototype.setTime = function () {

  this.minutes = this.twoDigitsNumber(this.setMinutes())
  this.seconds = this.twoDigitsNumber(this.setSeconds())
  this.milliseconds = this.twoDigitsNumber(this.setMilliseconds())
 };


Chronometer.prototype.stopClick = function () {

  clearInterval(this.intervalId);

};

 Chronometer.prototype.resetClick = function () {

  this.currentTime = 0;
  this.setTime()

 };

 Chronometer.prototype.splitClick = function () {

 };
