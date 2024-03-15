//TC1: Use === instead of ==
const test1 = 1
const test2 = 1
if (test1 === test2) {
  console.log('hello world')
}

//TC2: Use single quotes for strings
// eslint-disable-next-line no-unused-vars
const greeting = 'Hello, world!'

//TC3: Omit semicolons at the end of lines
// eslint-disable-next-line no-unused-vars
let name = 'John Doe'

//TC4: Use else if for conditional blocks instead of nested if
let score = 50
if (score > 90) {
  console.log('Excellent')
} else if (score > 60) {
  console.log('Good')
}

//TC5: Avoid duplicate conditions in else if
let age = 25
if (age > 18) {
  console.log('Adult')
} else if (age <= 18) {
  // Changed condition for illustration
  console.log('Minor')
}

//TC6: Use declared variables
const usedVar = 5
console.log(usedVar)

//TC7: Define variables before using them
let definedBeforeUse = 'Defined now'
console.log(definedBeforeUse)

//TC8: Avoid duplicate imports (Assuming pseudo code for illustrative purposes)
// Correct approach: import { something, somethingElse } from 'some-module'

//TC9: Avoid using constant conditions
let dynamicCondition = false
if (dynamicCondition) {
  console.log('This condition is not constant')
}

//TC10: Avoid creating sparse arrays
// eslint-disable-next-line no-unused-vars
let denseArray = ['Element 1', 'Element 2']

//TC11: Avoid using undefined variables
let definedVar = 'I exist'
if (definedVar === 'I exist') {
  console.log('This variable is defined')
}

//TC12: Use let or const instead of var
// eslint-disable-next-line no-unused-vars
let newSchoolVar = 'I am modern'

//TC13: Avoid specific terms in comments
// This is a compliant comment

//TC14: Avoid useless returns
// eslint-disable-next-line no-unused-vars
function usefulReturn() {
  return 'This is useful'
}

//TC15: Access object attributes using dot notation
// eslint-disable-next-line no-unused-vars
let person = { name: 'John' }
console.log(person.name)

//TC16: Use curly braces for blocks, even if they are single-line
if (person.name === 'John') {
  console.log('Hello, John')
}

//TC17: Use camelCase for naming
// eslint-disable-next-line no-unused-vars
let firstName = 'John'

//TC18: Use variable names longer than a specified minimum
// eslint-disable-next-line no-unused-vars
let ageOfUser = 10

//TC19: Limit the number of parameters in functions
// eslint-disable-next-line no-unused-vars
function appropriateParams(first, second, third) {
  console.log(first, second, third)
}

//TC20: Avoid declaring empty functions
// eslint-disable-next-line no-unused-vars
function nonEmptyFunction() {
  console.log('This function is not empty')
}
