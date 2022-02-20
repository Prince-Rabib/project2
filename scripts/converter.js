const from = document.getElementById('from');
const to = document.getElementById('to');
const gonow = document.getElementById('convert');
const InputSection = document.getElementById('InputSection');
const convertSection = document.getElementById('convertSection');


console.log("working")
const go = ()=>{
     
    if(InputSection.value === "Pound" && convertSection.value === "Kilo"){
        to.value = Number(from.value) * .4536;
    }
        
    else if(InputSection.value === "Pound" && convertSection.value === "Pound" ){
        to.value = from.value;
    }

        else if(InputSection.value === "Kilo" && convertSection.value === "Pound" ){
        to.value = Number(from.value) * 2.2046;
    }


    else if(InputSection.value === "Kilo" && convertSection.value === "Kilo" ){
        to.value = from.value;
    }
}

//Button event listener
gonow.addEventListener('click', go);