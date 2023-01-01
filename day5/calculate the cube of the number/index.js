document.getElementById("frm").addEventListener("keyup",(e)=>{
    e.preventDefault();
    let number = document.getElementById("num1").value;
    let ans = document.getElementById("ans");
    let cubeNumber = 3;
    function cube(number,cubeNumber) {
        let result = number ** cubeNumber;
       ans.innerHTML=result;
    }
    cube(number,cubeNumber);
})



