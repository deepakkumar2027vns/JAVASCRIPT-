const obj={
    key1:"value1",
    key2:"value2",
    key3:"value3"

}
objectmethode(obj)
function objectmethode(obj){
    console.log("original object:",obj);

    let keys=Object.keys(obj);
    console.log("after object keys:",keys);

    let entries=Object.entries(obj);
    console.log("after object entries:",entries);

    let values=Object.values(obj);
    console.log("after object values:",values);

    let hasProp= obj.hasOwnProperty();
}