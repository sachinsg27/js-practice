// 1) Arithmatic
// Used for basic math

let a = 10,
  b = 5;

// Addition
console.log(a + b); // 15

// Subtraction
console.log(a - b); // 5

// Multiplication
console.log(a * b); // 50

// Division
console.log(a / b); // 2

// Modulo (Reminder)
console.log(a % b); // 0

// Exponentiation (power)
console.log(a ** b); // 10^5 = 1000000

// Incriment & Decrement

console.log(++a); // Pre-incriment => 11 (first increment then return)
console.log(a++); // post-increment => 10 (first return then increment 11)
console.log(--a); // pre-decrement => 9 (first decremrnt then return )
console.log(a--); // post-decrement => 10 (first return then decrement 9)

// 2) Logical Operators

let isSuccesful = false;
let isDemotivated = true;

// AND Operator
console.log(isSuccesful && isDemotivated); // false => both coditions should be true if not then returns false
// OR Operator
console.log(isSuccesful || isDemotivated); // true => either one of them should be true then returns true
// NOT Operator
console.log(!isSuccesful); // true => returns opposite of statement

// 3) Assignment Operators

let x = 5;

x += 2;
console.log(x); // 5
x -= 1;
console.log(x); // 4
x *= 2;
console.log(x); // 12
x /= 4;
console.log(x); // 3
x %= 2;
console.log(x); // 1

// 4) Comparison Operator

console.log(5 == "5"); // true (loose)
console.log(5 === "5"); // false (strong)
console.log(5 > 4); // true
console.log(5 < 4); // false
console.log(5 >= 4); // true
console.log(5 <= 4); //false

// 5) String Operator

let firstName = Virat,
  lastName = Kohli;
console.log(firstName + " " + lastName); // Virat Kohli

// 6) Type Operator

console.log(typeof 5); //number
console.log(typeof "Hello"); //string
console.log(typeof true); //boolean

// 7) Ternery Operator

let age = 18;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message); // Adult

// 8) Spread & Rest

//Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1,2,3,4,5,6]

// Rest Operator
// gathers remaining values

const [first, ...others] = [1, 2, 3, 4, 5];
console.log(first); // [1]
console.log(others); // [2,3,4,5]
