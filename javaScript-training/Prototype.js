
let myheros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.hello=function(){  //set hello function in Object prototype
    console.log("hello from object");
}

heroPower.hello(); //call hello function from Object prototype

myheros.hello();   //prototype chaining Array->Object

const User={
   name:"user",
   email:"email@email.com"
}

const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    __proto__:TeachingSupport  //inheritence
}

//inheritence
Teacher.__proto__=User
Object.setPrototypeOf(TeachingSupport,Teacher); //modern syntex
console.log(TASupport.name);

