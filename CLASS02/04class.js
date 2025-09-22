function printstr(animal){
    console.log("animal:"+ animal["name"]+" "+animal["speak"])
}

const dog = {
    name:"dog",
    speak:"bark"
}

const cat = {
    name:"cat",
    speak:"meow"
}

printstr(dog)
printstr(cat)

class Animal{
    constructor(name,legcount,speak){
        this.name=name;
        this.legcount=legcount;
        this.speak=speak;

    }
}

dog1 = new Animal("dog",4,"bark");
cat1 = new Animal("cat",4,"meow");
spider1 = new Animal("spider",8,"hiss");

console.log(dog1)
console.log(cat1)
console.log(spider1)