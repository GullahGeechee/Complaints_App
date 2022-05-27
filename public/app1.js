let input='BRONX'
let number=10

let bronx=document.getElementById('bronx')
let manhattan=document.getElementById('manhattan')
let brooklyn=document.getElementById('brooklyn')
let queens=document.getElementById('queens')
let statenIsland=document.getElementById('staten-island')

function getData(){
  fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD')
.then(response => response.json()) 
.then(data => console.log(data))
.catch(err => console.log(data)) 


    
        // const borough=nypd.filter(item=>item.city===input) 
        // for (let i=0;i<number;i++){
        //      console.log(borough[i].borough)
        //      let Boro=borough[i].borough
        //      console.log(borough)
        //     // console.log(borough[i].descriptor)
        //     // console.log(borough[i].resolution_description )
        
        // }
     
    
    }
    getData()



bronx.addEventListener('click', getData)
manhattan.addEventListener('click', getData)
// bronx.addEventListener('click', getData)
// bronx.addEventListener('click', getData)
// bronx.addEventListener('click', getData)
