// const { response } = require("express")

// const { response } = require("express")

// console.log('testing')
const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')
const btn4 = document.querySelector('.button4')
const btn5 = document.querySelector('.button5')
const data = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json'
const agent = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD'
const boxinfo = document.getElementById('.box-info')



function getData(){
 fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
.then(response => response.json()) 
.then(data => console.log(data))
.catch(err => console.log(data)) 

}
   getData()

let click1 = btn1.addEventListener('click', getData)
  let click2 =  btn2.addEventListener('click', getData)
  let click3 =  btn3.addEventListener('click', getData)
  let click4 = btn4.addEventListener('click', getData)
  let click5 = btn5.addEventListener('click', getData)

  const filter = data.filter(item === item.borough === Manhattan)

   const div = document.createElement('div')
const body = document.getElementById('body')
div.innerHTML ='data'
body.appendChild(div)

console.log(div);
   

   function source(){
    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD')
    .then(response => response.json()) 
    .then(agent => console.log(agent))
    .catch(err => console.log(agent))  
   }
   source()
  

   