// Loops
// Loops are used to execute a block of code multiple times, either a known or unknown number of times.

// 1. For loop (best when you know how many times to loop)
// syntax:
/* 
for (initialization; condition; increment/decrement) {
        // code to execute
 }
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. while loop – use when the condition is checked before executing
// syntax

/* 
    while (condition) {
  // code runs as long as condition is true
    }
 */

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// 3. do...while loop – like while, but it runs at least once.
// syntax:

/* 
    do {
  // code block
} while (condition);

*/

let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);
