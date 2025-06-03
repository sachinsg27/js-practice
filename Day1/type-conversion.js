// Type Conversion

// Implicit
console.log("5" + 5); // "55" [+ is used for both math & string concatination so when there is string it will convert num=>string & concatinate them]
console.log("5" - 3); // 2 [- & others are used for math operations only so string=>num]
console.log("5" * "5"); // 25
console.log("5" * 5); // 25
console.log("5" / 5); //1

// Explicit

// String Conversion
String(123); // "123"
(123).toString(); //"123"
String(true); // "true"

// Number Conversion
Number("123"); // 123
Number(abc); //NAN

// Boolean [Falsy Values => false, null, undefined, NaN, 0 "" Truthy Values=> Other than these]

Boolean(0); // false
Boolean(""); // false
Boolean(NaN); // false
Boolean(1); // true
Boolean("Hello"); // true
