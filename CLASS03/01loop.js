let ans=0;
for(let i=1;i<=50;i++){
    ans=ans+i;
}
console.log(ans)


function square(num){
    return num*num;
}
function cube(num){
    return num*num*num;
}

function gettable(num,logic){
    let val1=logic(num);
    let val2=logic(num*2);
    let val3=logic(num*3);
}

gettable(5,square);

gettable(3,cube);
gettable(4,function(num){
    return num*num*num;
}
);