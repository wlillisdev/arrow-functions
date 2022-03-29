/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}
let sum = addTwoNumbers(3,4);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers4 = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbers4 (3,4);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething ("HELLO THERE");

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    </p>`
    )
    console.log(returnMultipleLines());
