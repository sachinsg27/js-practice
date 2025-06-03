// Scope

function testscope() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }
  console.log(a); // output : 1
  console.log(b); // output : ReferenceError (block scoped)
  console.log(c); // output : ReferenceError (block scoped)
}
// console.log(a); output : a is not defined
testscope();

// var is a function scoped variable
// let & const are block scoped variables
// here var a called inside a function scope thats why its accesible but if it was called outside function scope then it is not accesible

//  Reassignment and Mutability

// var & let can be reassign and mutable
// const is mutable(update) but cant reassign

var a = 10;
a = 15; // reassignment allowed

let a = 10;
a = 15; // reassignment allowed

const a = 10;
a = 15; // not allowed

// For objects and Arrays

var obj1 = {
  name: "Virat",
};
obj1.name = " Rohit"; // mutation allowed
obj1 = { name: "Rohit" }; // reassignment  allowed

let obj1 = { name: "Virat" };
obj1.name = "Rohit"; // mutation allowed
obj1 = { name: "Rohit" }; // reassignment allowed

const obj1 = { name: "Virat" };
obj1.name = "Rohit"; // mutation allowed
obj1 = { name: "Rohit" }; // reassignment not allowed
