const btnEl = document.querySelector(".btn");
const CloseIconEl = document.querySelector(".Close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video")

btnEl.addEventListener("click", ()=>{
  trailerContainerEl.classList.remove("active");
});

CloseIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});