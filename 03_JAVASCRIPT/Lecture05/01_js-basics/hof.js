function greet(name) {
    console.log('Hello', name)
}

function createGreater(greeting) {
    // here we treat as if name is function
    function greet(name) {
        console.log(greeting, name())
    }
    return greet
}

function getName() {
    return document.getElementById('namebox').value
}

let g1 = createGreater('Good Morning')
let g2 = createGreater('Good Evening')

console.log(typeof g1)

// console.log(g1('Gyan'))
// console.log(g2("Gyan"))

console.log(greet('Gyan'))