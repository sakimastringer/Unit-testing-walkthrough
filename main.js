// this the JS functionality separate from test cases
// given a number, determine if that number is even
function isEven(num) {
    return num % 2 == 0;
}

//modules.exports is maintained by node.js
//Modules.exports is going to be an object which exports functions we can access anywhere throughout the file structure.
//In this case we ware exporting the reference to our function isEven so that we can test within lesson.test.
module.exports = {
    isEven

}

// divides one number by another number
function divide(a, b) {
    return a / b;
}
function isPositive(num) {
    if(num > 0) return true

}

module.exports = {
    isEven,
    divide,
    isPositive
}