


let form = document.querySelector("form");
let ans = document.getElementById("demo");

form.addEventListener("submit",function(e){
  e.preventDefault();
  let number = document.getElementById("num1").value;
  if(number < 0){
    let numbers = number * (-1);
    ans.innerHTML = numbers;
  }
  else{
    ans.innerHTML = "already positive value";
  }
})