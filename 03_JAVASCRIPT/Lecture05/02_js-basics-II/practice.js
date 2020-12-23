console.log('Hello World')
let a = 10;
console.log(a);
let b=[1,2,3,4];
console.log(b);

//javascript 
// Variables, Arrays, Functions, Loops, Classes, Objects

//1. Variables in Javascript
c = 20; //Global Variable
var d =30; //Funtion Scope
let e =50;  //Block Scope




//2. Functions in Javascript 
function fun() {
    let a = 5;
    if(a==5){
        f = 100; //let has a bolck scope, var has a function scope
        console.log("Inside",f)
    }
    console.log("Outside", f);
}

fun();
console.log(f)

square_root(10);

//Function Declaration
function square_root(n) {
    console.log("In first sqrt function")
    // console.log(Math.sqrt(n));
    return;
}

//Function Hoisting
//Function Expression
var sqrt_n = function(){
    console.log("In second sqrt function")
    return;
}

sqrt_n(10);



//3. Arrays in Javascript
let arr = ["Apple", "Mango", "Guava"];
console.log(arr);

for(let i=0; i<=5; i++){
    console.log(arr[i]);
}

//Operatios in Arrays
//lengh of the array
arr.length
arr["length"]

//Adding elements in the last 
arr.push("Banana");

//remove and return last element of the array
arr.pop()

//find the index of a particular element 
arr.indexOf("Mango")

// remove element from the front
arr.shift();

//add element to the front
arr.unshift('Kiwi');

if(a[0]=="Apple"){
    console.log("It's Apple");
}
else{
    console.log("No, It's",arr[0]);
}

console.log(arr);
