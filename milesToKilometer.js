function mileToKilometer(miles) {
    const inputKilometer = miles * 1.60934;
    const inputFixed = inputKilometer.toFixed(2);
    const inputInt = parseFloat(inputFixed);
    return inputInt; 
}

const inputMiles = 7;
const showMiles = mileToKilometer(inputMiles);
console.log(showMiles);