const btnElemnt = document.querySelector(".btn");

btnElemnt.addEventListener("mouseover",()=>{
  const x = (event.pageX - btnElemnt.offsetLeft); 
	const y = (event.pageY - btnElemnt.offsetTop);   

	btnElemnt.style.setProperty("--xPos", x + "px");
	btnElemnt.style.setProperty("--yPos", y + "px");
});
