const myNumbers = [12, 33, 42, 53, 89, 88, 93, 87];


function getSumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum += element;
    // console.log(index, element, sum);
  }
  return sum;
}

function getOddOfArray(numbers2) {
  let oddNumber = []; // why this variable only return other variable why not
  for (let i = 0; i < numbers2.length; i++) {
    const index = i;
    const element = numbers2[index];
    if (element % 2 !== 0) {
      // console.log(index, element);
      oddNumber.push(element);
    }
  }
  return oddNumber;
}
const oddNumbers = getOddOfArray(myNumbers);
console.log(oddNumbers);

const oddNumbersSum = getSumOfArray(myNumbers);
console.log(oddNumbersSum);


