let ans = Number(document.getElementById("demo"));
let submit = document.getElementById("sub");

const pi = 3.14;


let calculate = () => {
    let num = Number(document.getElementById("num1").value);
    console.log(typeof num);
    console.log(pi * num * num);
}