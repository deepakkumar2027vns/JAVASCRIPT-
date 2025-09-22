function getlengthstring(str){
    console.log("Sring:",str)
    console.log("string length:",str.length)
    
}
getlengthstring("hello deepak")

function findindexof(str,target){
    console.log("original str:",str)
    console.log("index of :",str.lastIndexOf(target))
}

findindexof("hellow i am deepak","deepak")


function getslice(str,start, end){
    console.log(str)
    console.log(str.slice(start,end))
}
getslice("hello i am the best",0,5)
const ans = "hello i am ayush".slice(0,5);
console.log(ans)
const ans1 = "hello i am ayush".slice(17,0);
console.log(ans1)

function getsubstring(str,start,end){
    console.log(str)
    console.log(str.substring(start,end))
}
getsubstring("hello i am ayush",4,8)

function getreplace(str,old,newstr){
    console.log(str)
    console.log(str.replace(old,newstr))
}
getreplace("hello i am ayush","ayush","deepak")

function getsplit(str,sep){
    console.log(str)
    console.log(str.split(sep))
}
getsplit("hello i am ayush"," ")//array

function gettrim(str){
    console.log(str)
    console.log(str.trim())
}
gettrim("     hello i am ayush     ")

function getlowercase(str){
    console.log(str)
    console.log(str.toLowerCase())
}
getlowercase("HELLO I AM AYUSH")

console.log(parseInt("100.56987kjhgf"))//100
