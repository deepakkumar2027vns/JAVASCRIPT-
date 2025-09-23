//syncronous function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

//asyncronous function

function addAsync(a, b) {
    console.log("Inside async function")
    console.log(a + b);
    
}
setTimeout(addAsync, 2000, 2, 3)
console.log("Before calling async function")

