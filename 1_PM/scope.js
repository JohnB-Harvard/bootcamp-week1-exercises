/**
 * Part 1:
 *    What will print and why?
 *      1 2 undefined prints because initally it prints a (defined as 1) then it moves to the function y()
 *      which defines a as 2 and prints it then it executes x() which just declares an a (with no value) and prints it.
 *    What will change if we delete line 15? Why?
 *      It seems like nothing but the linter gets mad so I assume something was supposed to. I guess you are supposed to have
 *      an empty line before declaring a new function.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  console.log(a);
}

const y = () => {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
