// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let salary = +(document.getElementById("num1").value);
  let result = document.getElementById("demo");

  if (salary <= 10000) {
    let house = salary * 0.2;
    let dearness = salary * 0.8;
    let gross = house + dearness + salary;
    result.innerHTML = gross.toLocaleString('en-IN')+"₹";
  } else if (salary <= 20000) {
    let house = salary * 0.25;
    let dearness = salary * 0.9;
    let gross = house + dearness + salary;
    result.innerHTML = gross.toLocaleString('en-IN')+"₹";
  } else if (salary >= 20000) {
    let house = salary * 0.3;
    let dearness = salary * 0.95;
    let gross = house + dearness + salary;
    result.innerHTML = gross.toLocaleString('en-IN')+"₹";
  }
});
