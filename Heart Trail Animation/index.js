const bodyElemet = document.querySelector("body")
bodyElemet.addEventListener("mausemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsety;
    const spanElemet = document.createElement("span");
    bodyElemet.appendChild("spanElemet");
})