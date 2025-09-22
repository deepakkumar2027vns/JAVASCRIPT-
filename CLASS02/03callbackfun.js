//backback function
function log1(){
    console.log("I am log 1")
}

function callback(fn){
    fn();
}
callback(log1)

