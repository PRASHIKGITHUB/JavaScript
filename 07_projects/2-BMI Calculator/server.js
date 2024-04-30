const form =document.querySelector("form")
const result=document.querySelector("#results")
form.addEventListener('submit',function(e){
    e.preventDefault();
    let height=parseInt(document.querySelector("#height").value)
    let weight=parseInt(document.querySelector("#weight").value)
    let bmi=((weight*10000)/(height*height)).toFixed(2)
    if(height=== '' || height<0 || isNaN(height)){
        result.innerHTML=`please give a valid weight ${height}`
    }
    else if(weight=== '' || weight<0 || isNaN(weight)){
        result.innerHTML=`please give a valid height ${weight}`
    }
    else{
        console.log(bmi);
        result.innerHTML=`<span>${bmi}<span/>`
    }
    const div = document.createElement('div')
    div.className = "main"
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    div.style.borderRadius="10px"
    result.appendChild(div)
    if(bmi<18.6){
        div.innerText = "under weight"
        // const addText = document.createTextNode("Chai aur code")
        // div.appendChild(addText)

    }
    else if(bmi>=18.6 && bmi<24.9 ){
        div.innerText="Normal Range"
    }
    else{
        div.innerText="Overweight"
    }
    
})