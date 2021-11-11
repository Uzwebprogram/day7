const foot = 3.6;
const bicycle = 20.1;
const car = 70; 
const plane = 800;


let elForm = document.querySelector('#form');
let elInput = document.querySelector('#input');

let foots = document.querySelector('#foot');
let bicycles = document.querySelector('#bicycle')
let cars = document.querySelector('#car');
let planes = document.querySelector('#plane');
let piElement = document.querySelector('.text');

elForm.addEventListener('submit', (e) =>{
   e.preventDefault();

  function speed(){
    if(!isNaN(elInput.value)){
        if(elInput.value > 0){

            foots.innerHTML = `${Math.floor(elInput.value / foot)} soat ${(((elInput.value / foot).toFixed(1) - Math.floor(elInput.value / foot)) * 60).toFixed(0)} min`;

            bicycles.innerHTML = `${Math.floor(elInput.value / bicycle)} soat ${(((elInput.value / bicycle).toFixed(1) - Math.floor(elInput.value / bicycle)) * 60).toFixed(0)} min`; 

            cars.innerHTML = `${Math.floor(elInput.value / car)} soat ${(((elInput.value / car).toFixed(1) - Math.floor(elInput.value / car)) * 60).toFixed(0)} min`; 
            
            planes.innerHTML = `${Math.floor(elInput.value / plane)} soat ${(((elInput.value / plane).toFixed(1) - Math.floor(elInput.value / plane)) * 60).toFixed(1)} min`;   
        } 
    } 
  }
   speed()
})