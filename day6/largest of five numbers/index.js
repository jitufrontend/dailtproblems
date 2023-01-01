let a = [2, 215, 65, 32, 39,89 ,45, 21, 365, 95, 31, 97];

let b = a.sort((a,b)=>{
      return b-a;
})
let lastFiveNumber = b.slice(0,5);

let convertString = lastFiveNumber.join();
console.log(convertString);

