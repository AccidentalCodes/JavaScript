
// 👉 Class and Function are same


// 👉 Basic Function
function name() {
    s = "siya"
    console.log(s)
}
name()

// 👉 Object are instance of class
// 👉 Class name always start with uppercase

let News1 = function() {  // 👉 Class
    s = "siya"
    // function i(){
        console.log(s);
    // }
}
const y1 = new News1() // 👉 Object


// 👉 New Way of Creating a class

class News2 {
    s = "siya"
    i(){
       return this.s
    }
}
const y2 = new News2() 
console.log(y2.i());




let Ner = function(et) {  // 👉 Class
    this.s = et
    function i(){
        console.log(this.s);
    }
}
const o = new Ner("siya") // 👉 Object



let v = prompt()
let s = prompt()

if(v==10){
    if(s==11){
        console.log(o);
    }
    else if(s==12){
        console.log("boy men");
    }
} else{
    if(s==13){
        console.log("girl kid");
    }
    else if(s==14){
        console.log("girl women");
    }
}