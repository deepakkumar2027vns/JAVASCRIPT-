//approach wrap in fn fuction
function fn(fn1,duration){
    setTimeout(fn1,duration);
}
fn(function(){
    console.log("Hello after 2 seconds")

},2000)

//promisifying

// function fn2(fn3,duration)
// {
//     setTimeout(function(){
//         fn3();
//     },duration);
//     }

// fn2(function(){
// }

function fn1(duration){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();

        } ,duration);
    });
    return p;
}

let ans= fn1(3000);

console.log(ans);

ans.then(function(){
    console.log("hello after 3 seconds");
})

// do a network call 
// sleep /  waait for some Time
// read a file 
// database call
  


// promis then 
function fn2(){
    let p = new Promise(function(resolve){
        resolve("hello");
    });
    return p;
}
function main(){
    fn2().then(function(data){
        console.log(data);
    });
}

//  sync / await sytenx

// some synnc task 
//wnat my work which async return
// some other sync task 

function someSyncTask1(){
    console.log("some sync task 1");
}
function someSyncTask2(){
    console.log("some sync task 2");
}

setTimeout(function(data){
    console.log("async task is completed");
    someSyncTask2(data);
},2000);
someSyncTask1();

