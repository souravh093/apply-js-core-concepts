function factorial(number) {
    let result = 1;
    let i = 1;
    while (i <= number) {
        result *= i;
        console.log(i, result);
        i++
    }
    return result;
}

const factorialInput = 9;
const fact = factorial(factorialInput);
console.log(fact); 