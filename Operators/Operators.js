// 👉 Types of Operators

// 👉 Arithmetic Operators
// 👉 Assignment Operators
// 👉 String Operators
// 👉 Comparison Operators
// 👉 Logical Operators
// 👉 Conditional Operators
// 👉 Bitwise Operators

// 👉 Arithmetic Operators
var x = 10;
var y = 5;

document.write("Addition = "+(x+y)+"<br>"); // 15

document.write("Subtraction = "+(x-y)+"<br>"); // 5

document.write("Multiplication = "+(x*y)+"<br>"); // 50

document.write("Division = "+(x/y)+"<br>"); // 2

document.write("Modulus = "+(x%y)+"<br>"); // 0

document.write("Increment = "+(x++)+"<br>"); // 10

document.write("Decrement = "+(x--)+"<br>"); // 11


// 👉 Assignment Operators
var x = 10;
var y = 5;

console.log(x);                // Returns the value of x.

console.log(x+=y);             // Returns x = x+y

console.log(x-=y);             // Returns x = x-y

console.log(x*=y);             // Returns x = x*y

console.log(x/=y);             // Returns x = x/y

console.log(x%=y);             // Returns x = x%y

console.log(x^=y);             // Returns x = x^y

console.log(x|=y);             // Returns x = x|y

console.log(x**=y);            // Returns x = x**y


// 👉 String Operators
var x =  "Hello";         // Variable x with string value
var y = "World";          // Variable y with string value

document.write(x+y+"<br>")     // (+) operator will concatenate both the strings

document.write(x += "Everyone"); // (+=) operator will add "Everyone" to the existing String

// 👉 Comparison Operators
var x = 5;  // Declaring variable x

//comparing c with different values

console.log(x==8);      // Return False (x<8)

console.log(x===5);     // Return True 

console.log(x!=8);      // Return True (x!=8)

console.log(x!==5);      // Returns False

console.log(x>8);       // Returns false (x<8)

console.log(x<8);       // Returns true because x = 5 

console.log(x>=5);      // Returns True (x = 5)

console.log(x<=8);      // Returns True (x < 8)


// 👉 Logical Operators
// Logical Operators are of three different types:
// Logical And
// Logical Or
// Logical Not

// 👉 Logical And Operators
var x = 5;  // Declaring variable x
var y = 8;

document.write(x > 4 && y > 7)      // Return True Because both the conditions are True

document.write("<br>");//  Using <BR> for space.

document.write(x < 7 && y > 8);    // Return False because y is not greater than 8

// 👉 Logical Or Operators
var x = 5;  // Declaring variable x
var y = 8;

document.write(x > 6 || y > 9); // Return False because both the conditions are False

document.write("<br>");//Using<BR>for space.

document.write(x < 7 || y > 8);    // Return true because one condition holds true

// 👉 Logical Not Operators

//The not operator checks if the value variable x is holding equals that of variable y. It will return true if the values are not equal.
var x = 5;  // Declaring variable x
var y = 8;

document.write(!(x==y));  // Return True because x is not equal to y.