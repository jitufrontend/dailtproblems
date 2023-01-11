
let form = document.querySelector("form");
let text = document.getElementById("demo");
let days = document.getElementById("days");
let weeks = document.getElementById("weeks");

days.addEventListener("input", function () {
  let a = this.value;
  weeks.value = a/7;
});
