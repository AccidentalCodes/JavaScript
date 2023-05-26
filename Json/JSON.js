
// 👉 JSON

//JSON stands for JavaScript Object Notation
//JSON is a text format for storing and transporting data
//JSON is "self-describing" and easy to understand



// JSON.stringify() method to convert a JavaScript object into a JSON string:
const obj1 = { name: 'John', age: 30, city: 'New York' };
const json1String = JSON.stringify(obj1);
console.log(json1String); 
// '{"name":"John","age":30,"city":"New York"}'


//  JSON.parse() method to parse a JSON string and convert it into a JavaScript object:
const json2String = '{"name":"John", "age":30, "city":"New York"}';
const obj2 = JSON.parse(json2String);
console.log(obj2.name); 
// "John"

var arr = [{
    id: 1,
    name: 'bill'
  }, {
    id: 2,
    name: 'ted',
    d:[{
        ff:12
    }]
  }]

 
  arr.map((x)=>console.log(x.d))
  
//   var result = arr.map(person => ({ value: person.id, text: person.name }));
//   console.log(result)