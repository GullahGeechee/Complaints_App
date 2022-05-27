let input = " "
let bronx = document.getElementById('bronx')
let manhattan = document.getElementById('manhattan')
let brooklyn = document.getElementById('brooklyn')
let queens = document.getElementById('queens')
let statenIsland = document.getElementById('staten-island')
let num = document.querySelector('input')
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')


function clickbtn(){
    if (manhattan.onclick){
    input = "MANHATTAN" 
    console.log(manhattan);
}else if (brooklyn.onclick){
    input = "BROOKLYN" 
}else if (queens.onclick){
    input = "QUEENS"
}else if (statenIsland.onclick){
    input = "STATEN ISLAND" 
}else {
    input = "BRONX" 
}
}


function getData() {

  
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
                // p1.hidden =true
                p2.hidden =false
                div2.appendChild(p2)    //this has the resolution description
                container.append(div1)
                container2.append(div2)  
                //  container2.style.visibility='hidden'
                // btn.addEventListener('click',container2.style.visibility='visible')
            }
        })
        .catch(err => console.log(err)) // handle errors
}
function yesData(){
    let number = num.value || 10
fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?&$limit=${number}&city=${input}`)
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
        btnclick = document.createAttribute("onclick")
btnclick.value = "show()"

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
bronx.addEventListener('click', yesData)
manhattan.addEventListener('click', getData)
brooklyn.addEventListener('click', getData)
queens.addEventListener('click', getData)
statenIsland.addEventListener('click', getData)