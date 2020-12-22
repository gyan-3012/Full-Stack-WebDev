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