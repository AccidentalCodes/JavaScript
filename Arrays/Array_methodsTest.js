
// 👉 forEach() - loop over the array
let arr1 = [1,2,3,4,5]
arr1.forEach((i,r,t) => {console.log(t)})

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


