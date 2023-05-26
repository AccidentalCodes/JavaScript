// 👉  Objects {}
const person = { 
    Name: "Siya", 
    roll: "Developer"
 };
console.log(person);
 
// 👉 access object: dot notation vs bracket notation
console.log(person.Name);
console.log(person.roll);

// 👉 bracket notation
console.log(person['Name']);

// 👉 assign object
person.phone = '123456789'
console.log(person.phone);

console.log(person);

// es6 arrow function
// 2 argument
// created object
// template literals 
const introducer = (name,shirt) =>{
let person = {
    name: name,
    shirt: shirt,
    asset:100000,
    liabilites:50000
}
 const intro = `Hi! my name is ${name} and my color of shirt ${shirt} and my networth is $${person.asset - person.liabilites}` 
 return intro 
}
console.log(introducer('Siya','Black'));

// 👉 Methods
// A method is a property containing a function defition

const introducer1 = (name,shirt) => {
    let person = {
        name: name,
        shirt: shirt,
        asset:100000,
        liabilites:50000,
        networth : function() {
            return this.asset - this.liabilites
        }
    }
     const intro = `Hi! my name is ${name} and my color of shirt ${shirt} and my networth is $${person.networth()}` 
     return intro 
    }
    console.log(introducer1('Siya','Black'));