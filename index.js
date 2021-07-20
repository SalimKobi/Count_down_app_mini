// const startTiming = 20;
// let time = startTiming * 60;

// const count = document.getElementById("countdownTimer");
// setInterval(updateTimer, 1000);
// function updateTimer() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   //   seconds = seconds < 10 ? "0" + seconds : seconds;
//   count.innerHTML = `${minutes}:${seconds}`;
//   time--;
// }

const startTiming = 6;
let time = startTiming * 60 * 60;

const count = document.getElementById("countdownTimer");
setInterval(updateTimer, 1000);
function updateTimer() {
  const Hour = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60);
  if (minutes > 60) {
    n = Math.floor(minutes / 60);
    p = Math.floor(minutes % 60);
    minutes = p;
  } else if (minutes == 0) {
    Hour--;
    minutes = 60;
  }
  let seconds = time % 60;

  // seconds = seconds < 10 ? "0" + seconds : seconds;
  count.innerHTML = `${Hour}:${minutes}:${seconds}`;
  time--;
}

// //Give a starting time
// const StartTime = 6;
// let time = startTime * 60 * 60;
// const count = document.getElementById("countdownTimer");
// setInterval(updateTimer, 1000);

// //Create an update function
// function updateTimer() {
//   let Hours = StartTime;
//   let minutes = Math.floor(StartTime / 60);
//   let seconds = StartTime % 60;

//   if (seconds === 0) {
//     seconds = 60;
//     minutes--;
//   }
//   if (minutes === 0) {
//     seconds = 60;
//     Hours--;
//     3;
//   }
//   count.innerHTML = `${Hours}:${minutes}:${seconds}`;
// }

//when the seconds is 0, reduce minute by one and make seconds 60
//when the minutes is 0, reduce hour by one and make minutes 60

// const startTiming = 1;
// let HourTime = startTiming * 60 * 60;

// const count = document.getElementById("countdownTimer");
// setInterval(updateTimer, 1000);
// function updateTimer() {
//   const Hours = Math.floor(HourTime / 60 / 60);
//   let minutes = Math.floor(HourTime / 60);
//   let seconds = HourTime % 60;

//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   count.innerHTML = `${Hours}:${minutes}:${seconds}`;
//   time--;
// }
