const containerElement = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const containerElement = document.createElement("div");
  containerElement.classList.add("color-container");
  containerElement.appendChild(containerElement);
}

const colorContainerElement = document.querySelectorAll(".color-container");
function generaterColors(){
  colorContainerElement.forEach((colorContainerElement)=>{
    const newColorCode = randomColor()
    colorContainerElement.style.backgrouncolor = "#" + newColorCode;
    colorContainerElement.innerText = "#" + newColorCode;
  })  
}

function randomColor(){
  const chars = "0123456789abcdf"
  const colorCodeLehgth = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLehgth; index++) {
    const randomNum = Math.floor(Math.random()*chars.length);
    colorCode += chars.substring(randomNum,randomNum + 1);
  }
  return colorCode;
}