
// 👉 forEach() - loop over the array
let arr1 = [1,2,3,4,5]
arr1.forEach((i,r,t) => {console.log(t)})
// (value,index,array)


// Output : 
// 1
// 2
// 3
// 4
// 5


// 👉 Sort() - ascending or descending
// Type - 1 

// Ascending
let arr2 = [1,5,2,4,3]
arr2.sort((a,b)=>(a-b))
console.log(arr1.sort((a, b) => a - b));

// descending
console.log(arr1.sort((a, b) => b - a));

// Type - 2
// arr1.sort((a, b) => a - b);
// {
//     console.log(arr1);
// }

// 👉 Length() - length of array
let arr3 = [1,5,2,4,3]
console.log(arr3.length);

// 👉 map() - access each element of array in same time
// type - 1
let arr4 = [1,5,2,4,3]
const map = arr4.map(x => x + 2)
console.log(map);

const mapp = arr4.map(x => { return  x + 2} )


// type - 2
// arr4.map(x => {console.log(x + 2);})

let ar = [1,5,2,4,3]
ar.map(x => console.log(x * x))


// 👉 filter() - print only filter element
let arr5 = [1,5,2,4,3]
const filter = arr5.filter(x => x < 3)
console.log(filter);

// 👉 some() - check the item {atleast one} , return true either false
let arr6 = [1,5,2,4,3]
const some = arr6.some(x => x < 3)
console.log(some);

// 👉 Every() - check the item {all} , return true either false
let arr7 = [1,5,2,4,3]
const every = arr7.every(x => x < 3)
console.log(every);

// 👉 Find() - print only first element
let arr8 = [1,5,2,4,3]
const find = arr8.find(x => x < 3)
console.log(find);

// 👉 indexOf() - display the position of element
let arr9 = [1,5,2,4,3]
const indexOf = arr9.indexOf(1)
console.log(indexOf);

// 👉 findlast() - ?
let arr11 = [1,5,2,4,3]
const findlast = arr11.findlast((element) => element > 3)
console.log(findlast);

// 👉 Unshift() - add item in first position
let arr10 = [1,5,2,4,3]
const Unshift = arr10.unshift(6,7)
console.log(Unshift)
console.log(arr10);

// 👉 Shift() - remove the first element of array
let arr12 = [1,5,2,4,3]
const shift = arr12.shift()
console.log(shift)
console.log(arr12);

// 👉 Reverse() - print in reverse order
let lettery = ['one','two','three','four']
const reverse = lettery.reverse()
console.log(reverse);

// 👉 Split() - split the word
let lettery1 = 'one two three four'
const Split = lettery1.split(' ')
console.log(Split);

// 👉 At()
let letter2 = ['one','two','three','four']
let index1 = 2
console.log(`Hello ${index} is not equal ${letter2.at(index)}`);

// 👉 flat() - create the new array
let arr13 = [1,5,2,[4],3,[5]]
const flat = arr13.flat()
console.log(flat)

// 👉 fill()
let letter3 = ['one','two','three','four']
let index = letter3.fill("new",2)
console.log(index);




// 👉 Map example
function process(x){
    // return x * 2     // 👉 Multiple
    return x.toString(2)  // 👉 binary
}
let arri = [1,5,2,4,3]
const output = arri.map(process)
console.log(output);

// 👉 Filter example
function isfilter(x){
    // return x % 2 // 👉 Find out odd number
    return x % 2 === 0 // 👉 Find out even number
}
let arri1 = [1,5,2,4,3]
const output1 = arri1.filter(isfilter)
console.log(output1);

// 👉 Reduce example
let arri2 = [1,5,2,4,3]
const f = arri2.reduce(function(acc,curr){
    acc = acc + curr  // 👉 Add
    return acc
},0)
console.log(f);

 // 👉 find max in array using Reduce Methods
 let arri3 = [1,5,2,4,3] 
 const g = arri3.reduce(function(max,curr){
    if(curr > max){
        max = curr   // 👉 Find max value
    }
    return max
 },0)
console.log(g);

// let arri4 = [1,5,2,4,3] 
// function maxx (arrr,currr){
//     if(arrr > currr){
//         currr = arrr
//     }
//     return arrr
// }

// const p = arri4.reduce(maxx)
// console.log(p);


 // 👉 Age count using Reduce Methods
let myArr = [
    { studenName: "jack",age: 20,studenSection: "a" },
    { studenName: "tom",age: 16,Section: "c" },
    { studenName: "john",age: 16,studenSection: "b" }
];

const b = myArr.reduce(function(arr,curr){
if(arr[curr.age]){
    arr[curr.age] = ++ arr[curr.age]
}
else{
    arr[curr.age] = 1
}
return arr;
},{})

console.log(b);

const q = myArr.filter(x => x.age < 18)
console.log(q);

 // 👉 Output {16:2,20:1}
