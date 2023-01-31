function factorial(number) {
    let result = 1;
    let i = number;
    while(i>=1) {
        result *= i;
        console.log(i, result);
        i--;
    }
    return result
}

const fact = factorial(8);
console.log(fact);