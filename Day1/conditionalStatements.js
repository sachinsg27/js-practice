// if, else if, else
// e.g. 1)
let age = 18;

if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age <= 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// e.g. 2)
let marks = 35;

if (marks < 35) {
  console.log("Fail");
} else if (marks >= 35 && marks <= 50) {
  console.log("pass Grade-C");
} else if (marks >= 51 && marks <= 80) {
  console.log("Pass Grade-B");
} else if (marks >= 81 && marks <= 100) {
  console.log("Pass Grade-A");
} else {
  console.log("Better Luck Next Time!!");
}

// Switch Staterments

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Starting of week");
    break;
  case "Sunday":
    console.log("Weekend");
    break;
  case "Friday":
    console.log("Weekend Comming");
    break;
  default:
    console.log("Work bro Work");
}

// Practice Questions
// 1) print positive is greater than 0 print negative if less than 0 print zero if 0

let num = 1;

if (num == 0) {
  console.log("Zero");
} else if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Invalid Input");
}

// 2) switch problem (Traffic Lights)

let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Maa Chudao");
}
