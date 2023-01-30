const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

const grandInch = 144;
const grandFeet = grandInch / 12;
console.log(grandFeet);

const grannyInch = 56;
const grannyFeet = grannyInch / 12;
const grannyFixed = grannyFeet.toFixed(2);
const grannyInt = parseFloat(grannyFixed);
console.log(grannyInt);

function inchToFeet(inch) {
    const inputFeet = inch / 12
    const inputFixed = inputFeet.toFixed(2);
    const inputInt = parseFloat(inputFixed);
    return inputInt;
}

const showFeet = inchToFeet(144);
console.log(showFeet);


