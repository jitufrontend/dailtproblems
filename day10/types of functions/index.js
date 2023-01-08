// declaration function
 function addDeclaration(num1,num2){
    return num1 + num2;
 }
 console.log(addDeclaration(10,10));

// expression function
 let addExpression=function(num1,num2){
    return num1 + num2;
 }
 console.log(addExpression(10,20));

// arrow function
 let addArrow = (num1,num2)=>  num1 + num2;
 console.log(addArrow(10,30));