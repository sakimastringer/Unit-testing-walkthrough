//Import our functions from main.js
const { default: test } = require('node:test')
const modules = require('./main')
// console.log(modules)
constisEven = modules.isEven
const divide = modules.divide
constIsPositive = modules.isPositive

//this is where all of our test cases belong
//This is the test case for isEveen
test("It should return true when called with an even number", () => {
    expect(isEven(4)).toBe(true);

}),

// Test case for divide
test("It should return a number when called", () => {
    expect(typeof divide(4, 0)).toBe("number");

}),

test("It should return true when passed a positive number and 0", () => {
    expect(isPositive(3)).toBe(true);

    expect(isPositive(0).toBe(true);

}),

test("It should return false when passed a negative number", () => {
    expect(isPositive(-3)).toBe(true)

}) 