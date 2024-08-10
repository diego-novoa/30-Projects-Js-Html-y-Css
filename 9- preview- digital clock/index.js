const HourElement = document.getElementById("Hour");
const MinutesElement = document.getElementById("Minutes");
const SecondsElement = document.getElementById("Seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();
  let ampm = "AM";

  if (H > 12) {
    H = H - 12;
    ampm = "PM";
  }

  H = H < 10 ? "0" + H : H;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;

  HourElement.innerText = H;
  MinutesElement.innerText = M;
  SecondsElement.innerText = S;
  ampmElement.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();