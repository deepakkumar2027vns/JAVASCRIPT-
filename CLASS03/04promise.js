//approach wrap in fn fuction
function fn(fn1,duration){
    setTimeout(fn1,duration);
}
fn(function(){
    console.log("Hello after 2 seconds")

},2000)

//callback hell aproach 
