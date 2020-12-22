// this function call will not show any error because the concept of hoisting get applied here
console.log(beta())

function alpha () {
    return 'A'
}

function beta () {
    return 'B'
}

let gamma = function (){
    return "C"
}

console.log(gamma()) 

function area(height, width) {
    // if (typeof width == 'undefined'){
    //     return Math.PI * height * height
    // }
    if (!width){
        return Math.PI * height * height
    }
    return height*width
}

console.log('area 3,4 ', area(3, 4))
console.log('area 4 ', area(4))

function hello() {
    console.log('hello world' + arguments[0] +arguments[1])
}

hello(1, 2)
hello('gyan', 'prakash')