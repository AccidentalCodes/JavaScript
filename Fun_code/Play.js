// 👉 String as arguments & increment each letter to next letter
// 👉 Without function
let rty = prompt()
for(let c of rty){
    document.write(String.fromCharCode(c.charCodeAt() + 1));
}

// 👉 With Arrow function
const newway = (rty) => {
for(let c of rty){
    document.write(String.fromCharCode(c.charCodeAt(0) + 1));
}
}
console.log(newway(prompt()));


// 3
let ad = (a,b) => {
    return a ** b
}
console.log(ad(prompt(),prompt()));


// 5

for ( let r = 1; r <= 8; r++) {
document.write("#")  
for ( let c = 1; c <=8; c++) {
document.write("#")
}
document.write("<br>")
}  

// 5 prompt()
let i = prompt()
let j = i
for ( let r = 1; r < i; r++) {
document.write("#")  
for ( let c = 1; c < j; c++) {
document.write("#")
}
document.write("<br>")
}  

 // 4
 var array = []
 var size = Number(prompt('Enter the Size'))
 for(var t=0; t<size; t++){
    array[t] = prompt('Enter Element ' + (t+1));
    }
console.log(array);
// var array = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3], 
unique = array.filter((i) => array.indexOf(i) === array.lastIndexOf(i));
console.log(unique);       



// chess board
document.write("<table border='1' width='200' height='200'>");
    for(var d=1; d<=8; d++)
    {
    document.write("<tr>");
    for(var f=1; f<=8; f++)
    {
    if((d+f)%2!=0)
    {
    document.write("<td bgcolor='white'></td>");
    }
    else
    {
    document.write("<td bgcolor='black'></td>");
    }
    }
    document.write("</tr>");
    }
    document.write("</table>");
      

// 2

const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
  ];

  const groupByCategory = products.map(product => {
    return  product.category;
  });
  console.log(groupByCategory); 



  let a = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  for(let i of a){
    console.log(i.name);
  }

// const map = inn.map(({ type }) => type)
// console.log(map);




function groupBy(json, groupKey) {
let result = {};
for (let item of json) {
let groupValue = item[groupKey];
if (!result[groupValue]) {
result[groupValue] = [];
}
result[groupValue].push(item);
}
return result;
}

const json = [
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 1", Value: "Value 5" },
  { Phase: "Phase 1", Step: "Step 1", Task: "Task 2", Value: "Value 10" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 1", Value: "Value 15" },
  { Phase: "Phase 1", Step: "Step 2", Task: "Task 2", Value: "Value 20" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 1", Value: "Value 25" },
  { Phase: "Phase 2", Step: "Step 1", Task: "Task 2", Value: "Value 30" },

];

const grouped = groupBy(json, "Phase");
console.log(grouped);


