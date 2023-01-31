// reverse factorial

// function reverseFactorial(number) {
//     let reverseMultiple = 1;
//     for (let i = number; i >= 1; i++) {
//       reverseMultiple *= i;
//       console.log(i, reverseMultiple);
//     }
  
//     return reverseMultiple;
//   }
  
//   reverseFactorial(20);


function reverseFactorial(number) {
    let reverseMultiple = 1;
    for (let i = number; i >= 1; i--) {
      reverseMultiple = reverseMultiple * i;
      console.log(i, reverseMultiple);
    }
  
    return reverseMultiple;
  }
  
  const fact = reverseFactorial(9);
  console.log(fact);
  