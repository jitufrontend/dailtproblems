//composite or prime
let n = 1;
let a = 0;
for (let i = 2; i < n - 1; i++) {
  if (n % i == 0) {
    a = 1;
    break;
  }
}
if(n==1){
  console.log("1 is not prime or composite");
}
else if (a == 0) {
  console.log("the number is prime");
} else {
  console.log("the number is composite");
}
