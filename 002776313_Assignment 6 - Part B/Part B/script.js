let [seconds, minutes, hours] = [0, 0, 0];

const timerDisplay = document.getElementById("time");
let timerInterval = null;

const displayTimer = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  setTimer();
};

const setTimer = () => {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.value = `${h}:${m}:${s}`;
  console.log(h, m, s);
};

document.getElementById("startTimer").addEventListener("click", () => {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(displayTimer, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(timerInterval);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  timerDisplay.value = "00:00:00";
  clearInterval(timerInterval);
  [seconds, minutes, hours] = [0, 0, 0];
});
