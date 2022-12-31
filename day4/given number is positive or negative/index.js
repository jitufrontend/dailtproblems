// number is positive or negative
let form = document.getElementById("frm");
let number = document.getElementById("num").value;
let result = document.querySelector(".result");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(number >= 0){  
        result.innerHTML = "number is positive";
    }
    else if(number < 0){  
        result.innerHTML = "number is negative";
    }
})


