let sum = 0;
let n = 66666;
let lastDigit = 0 ; 

while(n!=0){
    lastDigit = n % 10; // 5
    sum = sum + lastDigit; // 0+5 =  5
    n = Math.floor(n / 10); // 45454
}
console.log(sum);