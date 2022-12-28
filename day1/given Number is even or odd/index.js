// Program whether the given Number is even or odd
let inputValue = document.getElementById("data").value;
let result = document.querySelector(".result");
let form =document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(Number(inputValue %2 == 0)){
        result.innerHTML = "even number";
    }
    else{
        result.innerHTML = "odd number";
    }
})

let reset = document.getElementById("reset");
reset.addEventListener('click',function(){
    result.innerHTML="";
})

