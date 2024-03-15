//TC1: Can't use ==, must use ===
const test1 = 1;
const test2 = 1;
if (test1 == test2) {
  console.log('hello world');
}

//TC2: Must use single quotes
const greeting = "Hello, world!";

//TC3: Don't need to use semicolon at the end of line
let name = 'John Doe';

//TC4: If you use if in an else condition, must use else if
let score = 50;
if (score > 90) {
  console.log('Excellent');
} else {
  if (score > 60) {
    console.log('Good');
  }
}

//TC5: Don't allow to use duplicate conditions in else if
let age = 25;
if (age > 18) {
  console.log('Adult');
} else if (age > 18) {
  console.log('Still an adult');
}

//TC6: Declare but not use
const unusedVar = 5;

//TC7: Must be defined before use
console.log(beforeDefined);
let beforeDefined = 'Defined now';

//TC8: Don't allow to import duplicates (Assuming we're in a module or environment where imports are allowed)
import { something } from 'some-module';
import { somethingElse } from 'some-module'; // Assume somethingElse is actually something, thus a duplicate

//TC9: Don't allow to use constant in condition (true, false, 1===1)
if (true) {
  console.log('This is always true');
}

//TC10: Don't allow ',' before element in an array
let sparseArray = [,'Element 1'];

//TC11: Don't allow undef value
if (undefinedVar === something) {
  console.log('This is not defined');
}

//TC12: Don't allow to use var to declare value
var oldSchoolVar = 'I am old school';

//TC13: Don't allow comments with specific terms
// TODO: This needs to be fixed

//TC14: Don't allow to use useless return
function uselessReturn() {
  return;
}

//TC15: Don't allow to get attribute of an object with ["attribute"]
let person = {name: 'John'};
console.log(person['name']);

//TC16: Don't allow to omit curly braces for the if statements
if (person.name === 'John')
  console.log('Hello, John');

//TC17: Must name variables in camelCase or another similar convention
let first_name = 'John';

//TC18: Variable names must be longer than a specified minimum
let a = 10;

//TC19: Functions must not have more than a specified number of parameters
function tooManyParams(a, b, c, d) {
  console.log(a, b, c, d);
}

//TC20: Not allow to declare empty functions
function emptyFunction() {}
