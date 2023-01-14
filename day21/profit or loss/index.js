let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let buy = Number(document.getElementById("num1").value);
  let sell = Number(document.getElementById("num2").value);
  let profitwala = document.querySelector(".profits");
  let sellwala = document.querySelector(".losses");

  if(buy == "" && sell == ""){
    alert("don't empty ")
  }
  if (buy < sell) {
    let p = sell - buy;
    let calc = (p / buy) * 100;
    console.log("your have profit", p);
    // console.log("your profit percentage", calc +"%");
    profitwala.innerHTML = "your profit percentage"+ calc +"%";
  } else {
    let l = sell - buy;
    let calc = (l/buy)*100;
    console.log("your have loss", l);
    // console.log("your sell percentage", calc +"%");
    sellwala.innerHTML = "your sell percentage"+ calc +"%";
  }
});
