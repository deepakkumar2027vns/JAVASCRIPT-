const user='{"name":"John", "age":30, "city":"New York"}';

const obj = JSON.parse(user);
console.log(obj);
console.log(obj.name)

const user1={
    name:"deepak",
    age:22,
    city:"bangalore"
}

const obj1=JSON.stringify(user1);

console.log(obj1);