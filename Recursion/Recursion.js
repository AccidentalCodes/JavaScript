// 👉 Recursion 

// 👉 a function that calls itself until your program achieves the desired result.

// 👉 Syntax 

function recursion(){
    recursion()
}
recursion()

let a = 0
function abc(){
 console.log("Hi",a);
 a++
 if(a<=100)
 abc()
}
abc()