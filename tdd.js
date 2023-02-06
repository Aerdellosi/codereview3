// Describe: calculateTotalSum()

// Test: Assign constant values to three variables
// Code:
// Expected output:
// const A = 1.07
// const B = 0.99
// const C = 12.3

// Test: assign a random value to a variable
// Code:
// Expected output:
// const A = 1.07
// const B = 0.99
// const C = 12.3

// let randVar = Math.random();
// Test: assign a random value to a variable between 1 and 10
// Code:
// Expected output:
// const A = 1.07
// const B = 0.99
// const C = 12.3

// let randVar = ((Math.random() * 9) + 1);
// Test: sum the three original values together
// Code:
// Expected output:
// const A = 1.07
// const B = 0.99
// const C = 12.3

// let randVar = ((Math.random() * 9) + 1);

// let sum = A + B + C;
// console.log(sum);

// Test: sum the product of the three variables multiplied by three random
// numbers between 1 and 10, respectively
// Code:
// Expected output:

// const A = 1.07
// const B = 0.99
// const C = 12.3
// const array = [A, B, C];

// function calculateTotalSum(arrayToSum) {
//     array.forEach(constantValue => {
//         sum = constantValue * ((Math.random() * 9) + 1);
//     })
//     return sum;
// }

// console.log(calculateTotalSum(array));


//describe: roundFloatTo3Dec();
//Test: round these numbers to two decimal places
// Code:
// Expected output:

function roundFloatTo3Dec(float) {
    const roundedFloat = Math.round(float * 100) / 100;
    return roundedFloat;
}

const A = 1.07
const B = 0.99
const C = 12.3
const array = [A, B, C];

function calculateTotalSum(arrayToSum) {
    array.forEach(constantValue => {
        sum = constantValue * ((Math.random() * 9) + 1);
    })
    sum = roundFloatTo3Dec(sum);
    return sum;
}

console.log(calculateTotalSum(array));
