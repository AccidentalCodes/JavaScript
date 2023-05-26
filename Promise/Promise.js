// 👉 Promise
// JavaScript Promise allows execution of a block of code asynchronously and handle the result when it is ready or handle error for failure. Let's learn JavaScript promises.


// 👉 Syntax

let promise = new Promise(function(resolve,reject){
 resolve("Hello resolve")
 reject("Hello reject")
})

// 👉 Using then and catch

// promise.then((value)=>{
//     console.log(value);
// })

// promise.catch((value)=>{
//     console.log(value);
// })


// 👉 Using async (try and catch)

const getout = async ()=> {
try {
const data = await promise;
console.log(data);
}
catch (err){
console.log(err);
}
}

getout()