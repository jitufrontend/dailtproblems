// let cm = 200;
// let km = cm/100;
// console.log("km:", km);

let form = document.querySelector("form");
let num = document.getElementById("num1");
let ans =document.getElementById("demo");
num.addEventListener("keyup",function(e){
    this.value = this.value.replace(/[^0-9]/g, '');

});