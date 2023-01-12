let a= [10,35,8,98,65,659,98,65,98];
let c = a.filter((ele,index,arr)=> arr.indexOf(ele) !== index)
console.log(c);