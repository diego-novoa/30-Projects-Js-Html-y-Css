const StartElemet = document.getElementById("Start");
const StopElemet = document.getElementById("Stop");
const ResetElemet = document.getElementById("Reset");
const timerElemet = document.getElementById("timer");

let interval;
let timeLeft=1500;

function updatetimer(){
  let minutes = Math.floor(timeLeft / 60); 
  let seconds = timeLeft % 60;
  let formattedTime = minutes + ":" + seconds;

  timerElemet.innerHTML=formattedTime
}

function Starttimer(){

}

function Stoptimer(){

}

function Resettimer(){

}

StartElemet.addEventListener("click", Starttimer);
StopElemet.addEventListener("click", Stoptimer)
ResetElemet.addEventListener("click", Resettimer)