const testimonials =[
  {
		name:"Claris G",
		photoUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Text:"With apple, communication between all ofus is farmore efficient. A game changer.",
  },

	{
		name:"Loais S",
		photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Text:"I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!",
  },


	{
		name:"Cristin M",
		photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Text:"apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money.",
  },
]

const imgElement = document.querySelector("img");
const textElement = document.querySelector(".text");
const usernameElement = document.querySelector(".username");

let idx =0;

updateTestimonials();

function updateTestimonial(){
	const{name,photoUrl,text}= testimonials[idx];
	imgElement.src =photoUrl;
	textElement.innerText = text;
	usernameElement.innerText = name;
	idx++;
	if(idx === testimonials.length){
		idx = 0;
	}
	setTimeout(() =>{
		updateTestimonials();
	}, 10000);
}