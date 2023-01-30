function getSumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    sum += element;
    console.log(index, element, sum);
  }
}

const myNumbers = [12, 33, 42, 53, 89];
getSumOfArray(myNumbers);
