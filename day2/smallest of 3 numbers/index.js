// smallest of three number

let form = document.getElementById("frm");
let answer = document.querySelector("span");

form.addEventListener('submit',function(e){
    
    e.preventDefault();
    let val1 = Number(document.getElementById("txt1").value);
    let val2 = Number(document.getElementById("txt2").value);
    let val3 = Number(document.getElementById("txt3").value);
  
    if(val1 < val2 && val1 < val3){
        answer.innerHTML = val1;
    }
    else if(val2 < val1 && val2 < val3){
        answer.innerHTML = val2;
    }
    else if(val3 < val1 && val3 < val2){
        answer.innerHTML = val3;
    }
    
});


