function sumOfNumber(numbers) {
  let sum = 0;
  for (let i = 1; i <= numbers; i++) {
    sum += i;
    console.log(i, sum);
  }
  return sum;
}

sumOfNumber(50);
