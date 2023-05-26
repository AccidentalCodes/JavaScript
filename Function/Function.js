// 👉 Function without Arguments
// Function is a block of code desinged to perform a particular task & is executed when "something" call it.
function SayMyName(){
    console.log('SIYA');
}
SayMyName()

// 👉 Function with Arguments
//Function arguments are the values received by the function when it is called, they behave as variables, however they only live within the function and cannot be accessed outside.
function SayMyName(name){
    console.log(name);
}
SayMyName('siya')

// 👉 String Concatenation vs Template Literals

// 👉 String Concatenation
function greeting(name){
    console.log('Hi '+ name + ' How are you?');
}

greeting('siya')

// 👉 Template Literals
function greeting(name){
   greet = `Hi ${name}, How are you?`
   console.log(greet);
}

greeting('siya')

// 👉 Return
//The return statement stop the execution of a function and return a value
function sum(a,b)
{
    return a + b
}
num1 = sum(1,2)
console.log(num1);

// 👉 Creating Calculator using function
function CalculateTipandFood (food,tip){
    let tippercentage = tip /100
    let tipamount = food * tippercentage
    let total =  food + tipamount
    return total
}

CalculateTipandFood(100,20)

// 👉 ES6
// 👉  Arrow Function =>
// Arrow function allow us to write shorter function snytax
let sumarrow = (a,b) => {
    return a + b
}

// 👉  Arrow Function with implicit function
let sum1 = (a,b) => a + b 
sum1(1,3)