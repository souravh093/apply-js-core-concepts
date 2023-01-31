function factorial(number) {
  let multiple = 1;
  for (let i = 1; i <= number; i++) {
    multiple *= i;
    console.log(i, multiple);
  }
  return multiple;
}

factorial(4);


