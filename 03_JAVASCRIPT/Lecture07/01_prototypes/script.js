let str = 'gyan'                                // 3 levels from null
let num = 342                                   // 3 levels from null
let bool = true                                 // 3 levels from null
let arr = [342, 544, 435, 54]                   // 3 levels from null
let obj = {a: 10, b: 'sdfewk'}                  // 2 levels from null
let fun = function () { console.log('yay!')}    // 3 levels from null

// if x and y are not primitive
// x == y : true <- what does this mean 
// this mean they are reference to same object in memory

console.log('====== types ======')
console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)

console.log('====== proto chain ======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)
// Everything indirectly inherits from same thing
// thar obj is inherited from
// i.e. in Javascript, everythig is essentially an Object

console.log('====== prototypes ======')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits from Object.prototype

// If __proto__ of two items are same then this doesn't means that typeof both items will be same
let x = Object.create(Boolean.prototype)
console.log(x.__proto__ == bool.__proto__)  //true
console.log(typeof x)                       //object
console.log(typeof bool)                    //boolean

