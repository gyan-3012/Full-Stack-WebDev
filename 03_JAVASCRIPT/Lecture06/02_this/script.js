function checkThis() {
    console.log(this)
}

let obj = {
    a: 10,
    b: 'infei',
    c: true,
    d: function () {
        console.log(this)
    },
    e: {
        l: 32, 
        m: 'gyan',
        n: function () {
            console.log(this)
        }
    }
}