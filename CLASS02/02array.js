const initialarray=[1,2,3,4,5,6,7,8,9]
initialarray.push(10)
console.log(initialarray)

initialarray.pop()
console.log(initialarray)

initialarray.shift()
console.log(initialarray)

initialarray.unshift(0)
console.log(initialarray)

console.log(initialarray.indexOf(5))

console.log(initialarray.lastIndexOf(5))

console.log(initialarray.includes(5))

const secondarray=[11,12,13,14,15]
console.log(initialarray.concat(secondarray))

function logthink(){
    console.log("I am thinking")
}

initialarray.forEach(logthink)