const alluser = [
    { id: 1, firstname: "John", lastname: "Doe", age: 25 },
    { id: 2, firstname: "Jane", lastname: "Doe", age: 28 },
    {
        id: 3,
        firstname: "Alice",
        lastname: "Smith",
        age: 30,
        metadata: { hobby: "reading" }
    }
];

for (let i = 0; i < alluser.length; i++) {
    if (alluser[i].metadata && alluser[i].metadata.hobby === "reading") {
        console.log(alluser[i]);
    } else if (alluser[i].age < 26) {
        console.log("age is less than 26");
    }
}
// Output the user with hobby "reading" and users with age less than 26
// Expected output:
// { id: 3, firstname: 'Alice', lastname: 'Smith', age: 30, metadata: { hobby: 'reading' } }
// age is less than 26
for(let i=0; i<alluser.length; i++){
    if(alluser[i].age < 26){
        console.log("age is less than 26");
    }
    
}