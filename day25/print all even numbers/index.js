let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let num = +document.getElementById("num1").value;
  let demo = document.getElementById("demo");

  for (i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      demo.innerHTML = i;
    }
  }
});
