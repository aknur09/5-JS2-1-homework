
const get=document.querySelector('button')
const input=document.querySelector('input')
const root=document.querySelector('#root')

const _baseUrl='https://restcountries.com/v3.1/all'
const url='https://restcountries.com/v3.1/name/'

function getCountries(){
    fetch(_baseUrl)
        .then(joop=>joop.json())  //.json - переводчик 
        .then(maalymat=>{
          
            showCountries(maalymat )
          
        })
}


get.onclick=()=>{
    getCountries()
}


function showCountries(arr) {
    root.innerHTML=''
    for (const obj of arr) {
        root.innerHTML+=`
        <h5>${obj.name.common}
       <br>
        <img width='20%' src=${obj.flags.png} /> 
        <br>
        <img width='30%' src=${obj.coatOfArms.png} />
        </h5>
        `
    }
}


function getCountry(name){
    fetch(url+name)
        .then(joop=>joop.json()) 
        .then(data=>{
          console.log(data);
            showCountry(data )
          
        })
}
  
input.onchange=()=>{
    getCountry(input.value)
}



function showCountry(arr) {
    root.innerHTML=''
    for (const obj of arr) {
        root.innerHTML+=`
        <h5>${obj.name.common}
       <br>
        <img width='20%' src=${obj.flags.png} /> 
        <br>
        <img width='30%' src=${obj.coatOfArms.png} />
        </h5>
        `
    }
}

        
 


   
   
  