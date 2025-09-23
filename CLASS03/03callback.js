function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}

function sumofsomething(a,b,fn){
    let val1=fn(a);
    let val2=fn(b);
    return val1+val2;
}

console.log(sumofsomething(2,3,square));
console.log(sumofsomething(2,3,cube));