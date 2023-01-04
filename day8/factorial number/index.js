let num = 7;
function fact(num){
  if(num == 0 || num == 1){
    return 1;
  }
  else {
    return num * fact(num -1);
  }
}
let result = fact(num);
console.log(result);