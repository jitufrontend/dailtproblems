let num = "5555";
let sum = 0;
let arr = num.split("");
for(i=0;i<arr.length;i++){
    sum += Number(arr[i]);
}
console.log(sum);