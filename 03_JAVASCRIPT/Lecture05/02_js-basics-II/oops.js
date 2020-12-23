//Object Oriented Programming in Javascript

//allows to create objects without definig the class

//Another way
function Fruit(taste,color){
    this.color = color;
    this.taste = taste;
}

//new keyword
let mango = new Fruit("sweet","yellow");
let orange = new Fruit("sour","orange");

//One way
var apple = {
    taste:"sweet",
    color:"red",
}

//Class Keyword (ECMAScript 2015)
//Class Declaration(Not Hoisted)
class FruitClass{
    constructor(taste,color){
        this.taste = taste;
        this.color = color;
    }
};

//Function - Declaration, Function - Expression

let Kiwi = new FruitClass("sour","green");

//Class Expression(Not Hoisted)
let FruitClass2 = class{
    constructor(taste,color){
        this.taste = taste;
        this.color = color;
    }
};

let Kiwi2 = new FruitClass2("sour","green");


//One of creating Javascript Object (JSON) - Javascript Object Notation
var bird = {
    x:100, 
    y:20,
    color:"blue",
    eggs:["one","two","three"],

    fly:function(){
        console.log("Bird is flying",this.x,this.y);
    }
};

//for loop
for (let i=0; i<bird.eggs.length; i++){
    console.log(bird.eggs[i]);
}

//for each loop
bird.eggs.forEach(function(val,idx){
    console.log(val,idx);
});

