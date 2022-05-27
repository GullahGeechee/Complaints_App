// console.log('testing')

// let input='BRONX'
// let number=10

// let bronx=document.getElementById('bronx')
// let manhattan=document.getElementById('manhattan')
// let brooklyn=document.getElementById('brooklyn')
// let queens=document.getElementById('queens')
// let statenIsland=document.getElementById('staten-island')
// function getData(number, input){
//     fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=nypd&$limit=10`)
//     .then(response => response.json()) //parsing the res to json
//     .then(nypd => {
    
//         // const borough=nypd.filter(item=>item.city===input) 
//         // for (let i=0;i<number;i++){
//         //      console.log(borough[i].borough)
//         //      let Boro=borough[i].borough
//         //      console.log(Boro)
//             // console.log(borough[i].descriptor)
//             // console.log(borough[i].resolution_description )
//         nypd.descriptor.append(result.descriptor)
//         nypd.resolution_description
//         //}
     
    
//     })
//     .catch(err => console.log(err)) // handle errors
// }



// bronx.addEventListener('click',getData(number, "BRONX"))












let input = " "
let bronx = document.getElementById('bronx')
let manhattan = document.getElementById('manhattan')
let brooklyn = document.getElementById('brooklyn')
let queens = document.getElementById('queens')
let statenIsland = document.getElementById('staten-island')
let num = document.querySelector('input')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')
function getData() {

    if (manhattan.clicked===false){
        input = "MANHATTAN" 
    }else if (brooklyn.clicked===true){
        input = "BROOKLYN" 
    }else if (queens.clicked===true){
        input = "QUEENS"
    }else if (statenIsland.clicked===true){
        input = "STATEN ISLAND" 
    }else {
        input = "BRONX" 
    }

    let number = num.value || 10
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${number}&borough=${input}`)
        .then(response => response.json()) //parsing the res to json
        .then(result => {
            console.log(result)
            for (let i = 0; i < number; i++) {
                 console.log(result[i].descriptor)
                const div1 = document.createElement('div')
                const div2=document.createElement('div')
                const p1 = document.createElement('p')
                const p2 = document.createElement('p')
                const btn = document.createElement('button')
                p1.textContent = result[i].descriptor
                p2.textContent = result[i].resolution_description
                btn.textContent = "WHAT DID THE POLICE DO?"
                p1.appendChild(btn)
                div1.appendChild(p1)
                div2.appendChild(p2)    //this has the resolution description
                container.append(div1)
                container2.append(div2)  
                //  container2.style.visibility='hidden'
                // btn.addEventListener('click',container2.style.visibility='visible')
            }
        })
        .catch(err => console.log(err)) // handle errors
}
// btn.addEventListener('click',container2.style.visibility='visible')
bronx.addEventListener('click', getData)
manhattan.addEventListener('click', getData)
brooklyn.addEventListener('click', getData)
queens.addEventListener('click', getData)
statenIsland.addEventListener('click', getData)