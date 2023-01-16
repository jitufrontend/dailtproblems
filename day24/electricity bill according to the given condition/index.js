// input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


function bills() {

  let units = document.getElementById("num1").value;
  let ans = document.getElementById("demo");
  let bill;

  if (units <= 50) {
    bill = units * 0.5;
  } else if (units <= 150) {
    bill = (50 * 0.5) + (units - 50) * 0.75;
  } else if (units <= 250) {
    bill = (50 * 0.5) + (100 * 0.75) + ((units - 150) * 1.2);
  } else {
    bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + ((units - 250) * 1.5);
  }

  let surcharge = bill * 0.2;
  let total = surcharge + bill;
  ans.innerHTML = total;
}
