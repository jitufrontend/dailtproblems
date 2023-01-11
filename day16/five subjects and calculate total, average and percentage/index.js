
let form = document.querySelector("form");
let text = document.getElementById("demo");
form.addEventListener('submit',function(e){
  e.preventDefault();
  let hindi = Number(document.getElementById("hindi").value);
  let marathi = Number(document.getElementById("marathi").value);
  let english = Number(document.getElementById("english").value);
  let science = Number(document.getElementById("science").value);
  let maths = Number(document.getElementById("maths").value);
  let total = hindi + marathi + english + science + maths;
  let final = (total /500)*100;
  text.innerHTML = final + "%";
})

