// 👉  concat()  	
// Use to join the text of two or more strings.
let e = 'hello this is'
let w = 'siya'
let q = e.concat(" ",w)
console.log(q);

// 👉  replace()
// Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
let qq = "Hello this is siya";
console.log(qq);
let ee = qq.replace("siya", "SIYA");
console.log(ee);

// 👉  replaceAll()
let qqe = "Hello this is siya";
console.log(qqe);
let eee = qqe.replaceAll("s", "S");
console.log(eee);


// 👉  split()
// Use to split a string object into an array of string.
let qq1 = "Hello this is siya";
console.log(qq1);
let ee1 = qq1.split(' ');
console.log(ee1);




// 👉  search()
// It searches a word in the string and returns its index. It returns -1 when no match is  found.
let qq2 = "Hello this is siya";
console.log(qq2);
let ee2 = qq2.search('s');
console.log(ee2);

// 👉  length()
// It returns the length of a string, for an empty string, the length is zero.
let qq3 = "Hello this is siya";
console.log(qq3);
let ee3 = qq3.length
console.log(ee3);

// 👉  substring()
// The substring() method is used to extract a part from a specified string between two given indices.
let qq4 = "Hello this is siya";
console.log(qq4);
let ee4 = qq4.substring(0,10)
console.log(ee4);

// 👉  slice()
let qq5 = "Hello this is siya";
console.log(qq5);
let ee5 = qq4.slice(0,5)
console.log(ee5);

// 👉  raw()
// path without escaping the backslashes
const filePath = String.raw`C:\Development\profile\aboutme.html`;
console.log(`The file was uploaded from: ${filePath}`);

// 👉  repeat()

const chorus = 'Hello';
console.log(`version: ${chorus.repeat(20)}`)