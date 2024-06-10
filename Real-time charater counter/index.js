const textareaElement = document.getElementById("textarea");
const TotalcounterElement = document.getElementById("Total-counter");
const RemainingcounterElement = document.getElementById("Remaining-counter");


textareaElement.addEventListener("keyup", ()=>{
  updateCouter()
})

updateCouter();

 function updateCouter(){
	TotalcounterElement.innerText = textareaElement.value.length
	RemainingcounterElement.innerText = textareaElement.getAttribute("maxLength")
	-textareaElement.value.length;
}
