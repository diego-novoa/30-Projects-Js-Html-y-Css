const monthNameElement = document.getElementById("month-name");
const dayNameElement = documet.getElementById("day-name");
const dayNumElement = document.getElementById("day-number");
const yearElement = document.getElementById("year");

const date = new Date();
const month= date.getMonth();

monthNameElement.innerText = date.toLocaleDateString("en",{
    month:"long"
})

dayNameElement.innerText = date.toLocaleDateString("en",{
    weekday:"long"
})

dayNumElement.innerText = date.getDate();
yearElement.innerText = date.getFullYear();