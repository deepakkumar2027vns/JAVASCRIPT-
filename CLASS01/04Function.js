function sum(a,b){
    return a + b;
}

function multiply(a,b){
    return a * b;
}

const value1 = (sum(5, 10));
const value2 = (multiply(5, 10));

console.log("Sum: " + value1);
console.log("Multiply: " + value2);

function  calculate(a, b, operation) {
   return operation(a, b);
}
function sum(a, b){
    return a + b;
} 
function multiply(a, b){
    return a * b;
}
function subtract(a, b){
    return a - b;
}
const value =calculate(10, 5, multiply);
console.log("Result: " + value); 