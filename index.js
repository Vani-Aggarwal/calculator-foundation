const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");


numbers.forEach((number) => {
    number.addEventListener('click' , () => {
    display.textContent = number.innerHTML;
    console.log(number.textContent)})
})
clear.addEventListener('click' , ()=>{
    display.textContent = 0;
})