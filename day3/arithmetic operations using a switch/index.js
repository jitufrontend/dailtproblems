//arithmatic operation

let form = document.querySelector("form");



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let val1 = Number(document.getElementById("val1").value);
    let opeartor = (document.getElementById("operator").value);
    let val3 = Number(document.getElementById("val3").value);
    
    switch(opeartor){
        case '+':
        console.log(val1 + val3);
        break;

        case '-':
        console.log(val1 - val3);
        break;

        case '*':
        console.log(val1 * val3);
        break;

        case '/':
        console.log(val1 / val3);
        break;

        default:
        console.log("this is not valid");

    }


})