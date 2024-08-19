const StartElemet = document.getElementById("Start");
const StopElemet = document.getElementById("Stop");
const ResetElemet = document.getElementById("Reset");
const TimerElemet = document.getElementById("Timer");

let interval;
let timeLeft=1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
}

function StartTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function StopTimer() {
  clearInterval(interval);
}
function ResetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}
StartElemet.addEventListener("click", StartTimer);
StopElemet.addEventListener("click", StopTimer)
ResetElemet.addEventListener("click", ResetTimer)