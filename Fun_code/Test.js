// 👉 Factorial with if else
let num = Number(prompt('Enter the number'))
if(num < 0){
    console.log('Error! Factorial for negative number does not exist.');
}
else if (num === 0){
    console.log(`The factorial of ${num} is 1`);
}
else{
    let fact = 1
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
}



// 👉 Factorial with function
let n = Number(prompt('Enter the number'))
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);



// 👉 Palindrome using conditional operator and Arrow function
let input = prompt('Enter the Word')
const Palindrome = () => input === input.split('').reverse('').join('')
console.log(Palindrome());



// 👉 Prime Number
let w = Number(prompt('Enter the number'))
let flag = true
for(let i=2; i<w; i++)
{
if(w%i !=  0)
{
flag=false

} 
}
if(flag)
{
    console.log(`${w} is a prime`);
}
else{
    console.log(`${w} is not a prime`);
}



// 👉 Second Largest Number with Arrow function
var array = []
var size = Number(prompt('Enter the Size'))
for(var i=0; i<size; i++){
array[i] = prompt('Enter Element ' + (i+1));
}
console.log(array);
array.sort(l =(a,b)=> b - a);
console.log(` Second Largest number ${array[1]}`);

// 👉 Stack
var stack = []
stack.push(prompt());
console.log(stack);





//JavaScript program to remove specified elements from the left of a given array of elements.
let arr12 = [1,5,2,4,3]
const shift = arr12.shift()
console.log(shift)
console.log(arr12);


//SwapCase
var swapCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++)
    {
        if(letters[i] === letters[i].toLowerCase())
        {
            newLetters += letters[i].toUpperCase();
        }
        else{
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters; 
}

var text = prompt();
var swappedText = swapCase(text);


//Area of Triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

const s = (side1 + side2 + side3) / 2;

const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3) //Heron’s Formula
).toFixed(2);

console.log(
  `The area of the triangle is ${areaValue}`
);


// integers in range (x, y)

function number() {
    let x = prompt('First Number')
    let y = prompt('Last Number')
    for(let i = 0; i<y ; i++) {
        if(i>x) {
            console.log(i);
        }
    }
}
number()

// filter
[1,2,3,4,5,6].filter(num => num <4)

// 
let sun = Math.random() * 3
console.log(sun);
re = Math.ceil(sun)
console.log(re);

//
let ar = prompt()
for(let i = 0 ; i < ar.length ; i++)
{
    if(ar === ar.toUpperCase()){
     console.log(ar.toLowerCase());
    }
    else{
        console.log('el');
    }
}

// 👉 Quick Sort
let sortArr = (arr) => arr.sort((a, b) => a - b);
sortArr([1,-5,0,10,3,6,-8 ])



function quicksort (array) {
    if (array.length <= 1) {
      return array;
    }  
    // var pivot = Math.floor(Math.random() * array.length)   
    var pivot = array[0] 
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
    if(array[i] < pivot ){
    left.push(array[i])
    }
    else{
    right.push(array[i])
    }     
    }
    return quicksort(left).concat(pivot, quicksort(right));
  };
  
  var unsorted = [23, 45, 16, 37, 3, -99, 22];
  var sorted = quicksort(unsorted);
  console.log('Sorted array', sorted);

  
  // 👉 Bubble Sort

  const bubbleSort = (inputArr) => {
  const len = inputArr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }

  return inputArr;
};

const numbers = [50, 30, 10, 40, 60];

console.log(bubbleSort(numbers));


// 👉 Random Array

const random =(fruit)=>{
  const newrandom =  Math.floor( Math.random() * fruit.length)
  return fruit[newrandom]
}
let fruit = ['🍎','🍌','🥭','🍪','🍫']
console.log(random(fruit));


// 👉 string is blank or not
const check_string = (str) => {
    if(str == ""){
       console.log('string is blank'); 
    }
    else{
        console.log(str); 
    }
}
check_string(prompt())


// 👉 remove HTML/XML tags from string
const remove = (tag)=>{
    return tag.replace(/(<([^>]+)>)/gi, "");
}
remove(`<div><p>Hey this is <span>Siya</span></p></div>`)



// 👉 truncate a string
const truncate_string = (str,num) =>{
if(num < str.length){
 return str.slice(0,num) + ".."
}
}
const str = "Hi this is siya"
truncate_string(str,10)



// 👉 most frequent character in a given string
const letterfrequency = (word) => {
    let freq = {}
    freq.f=2
    for(const l of word)
    {
        if(l in freq)
        {
            freq[l]++ 
        }
        else{
            freq[l] = 1
        }
    }
    return freq
    }  
     
console.log(letterfrequency('hello this is siya')); 


// 👉 sum of arrays
var array = [1,2,3,4,5]
var sum = 0
for(i=0;i<array.length;i++){
    sum += array[i]
}
console.log(sum);


// 👉 Reduce Methods
let b = [1,2,3,4,5]
let c = b.reduce((accumulator,currentValue) => accumulator + currentValue)
console.log(c);



  
  

let hl = prompt('Enter the Word')
const nxtt = () => {
 let rr = hl.split('').fromCharCode(char.charCodeAt(0) + 1).join('')}
console.log(nxtt());

let char = String.fromCharCode(55);
console.log(char);





// else if (x[x.length-1] == "#") {
//     x += " "

function number() {
    let x = prompt('First Number')
    let y = prompt('Sec Number')
    for(let i = 1; i<=x ; i++) {
        if(i<=x) {
            document.write("#");
            // console.log("#");
        }
    }
}
number()











