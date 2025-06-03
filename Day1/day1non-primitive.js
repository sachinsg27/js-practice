// Objects
// A collection of key-value pairs, used to represent structured data.
const obj = {
  name: "Arun",
  age: 15,
};
console.log(obj.name); // Output : Arun

// Arrays
// An ordered list of values. Technically a special kind of object with numeric keys.

const arr = [1, 2, 3, 4, 5];
console.log(arr[1]); // Output: 2

// Functions
// A callable object. Functions are first-class citizens in JavaScript (can be stored in variables, passed, and returned).

function greet() {
  console.log("Hello World!!");
}
greet();

// Date
// A built-in object to work with dates and times.
const today = new Date();
console.log(today.toDateString()); // e.g., "Sun Jun 01 2025"

// Map
// An object-like structure that allows any type of key (not just strings).

const map = new Map();
map.set("name", "Ravi");
map.set(1, "One"); // for both lines it will create one obj and push key, value pair inside it
console.log(map); // Output : Map(2) { 'name' => 'Ravi', 1 => 'One' }

// Set
// A collection of unique values.

const ids = new Set([1, 2, 2, 3, 3, 4]);
console.log(ids); // OutPut :  { 1, 2, 3, 4 }
