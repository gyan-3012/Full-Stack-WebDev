let obj1 = {
    a: 10, 
    b: 20, 
    c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'gyan'
obj2.q = 'vishal'
obj2.r = 'shiv'

let obj3 = Object.create(obj2)

//obj3.__proto__ == obj2
//obj3.proto.__proto__.__proto__ == obj1

/*
    obj.a -> it will try to find a in obj2
        -> if not found,
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on ...
        -> till __proto__ becomes null
*/    