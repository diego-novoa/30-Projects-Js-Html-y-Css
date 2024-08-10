const bodyElemet = document.querySelector("body");
bodyElemet.addEventListener("mousemove",(event)=>{
  const xPos = event.offsetX;
  const yPos = event.offsety;
  const spanElemet = document.createElement("span");
  spanElemet.style.left = xPos + "px";
  spanElemet.style.top = yPos + "px";
	const size = Math.random() *100;
	spanElemet.style.width = size + "px";
	spanElemet.style.height = size + "px";
  bodyElemet.appendChild("spanElemet");
  setTimeout(()=>{
		spanElemet.remove();
  }, 3000);
});
