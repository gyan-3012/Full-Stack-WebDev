function outer(arg1) {
    let var1 = 10
    let x = 10
    console.log(arguments[0])

    function inner(arg2) {
        let var2 = 20
        let x = 20

        console.log(arg1, var1, arg2, var2, x)
        console.log(arguments)
    }
    return inner
}

let x = outer('param1')

//typeof x = 'function'

//scope of arg1 and var1 are from lines 2 to 10

x('param2',"gyan")