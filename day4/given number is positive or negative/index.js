// number is positive or negative
let form = document.getElementById("frm");
let result = document.querySelector(".result");
form.addEventListener("keyup",(e)=>{
    e.preventDefault();
    let number = document.getElementById("num").value;
    if(number > 0){  
        result.innerHTML = "positive number";
    }
    else if(number < 0){  
        result.innerHTML = "negative number";
    }
    else if(number.length ==0){
        result.innerHTML = "";
    }
})


