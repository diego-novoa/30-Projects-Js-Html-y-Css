const containerElement = document.querySelector(".container");
const careers = ["youtube","Web Developer","Freelancer","Instructor"];

let careersIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
  characterIndex++;
  containerElement.innerHTML =`
  <h1> I am ${careers[careersIndex].slice(0,1)=== "I" ? "an":"a"} ${careers[careersIndex].slice(0,characterIndex)} </h1>
  `;
  if(characterIndex === careers[careersIndex].length){
    careersIndex++;
	  characterIndex = 0;
  }
  if(careersIndex === careers.length){
    careersIndex = 0;
  }
		setTimeout(updateText,400);
}

