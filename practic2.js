// let findLeapYear = [2023, 2024, 2025, 2028, 2030];

// function getLeapYear(years) {
//     let leapYear = []
//     if (years % 4 === 0 && ) {

//         const itLeapYear =  leapYear.push(years);
//     } else {
//         console.log(`${years} not Leap year`);
//     }

//     return leapYear;

// }

// const showLeapYear = getLeapYear(1951);
// console.log(showLeapYear);

let findLeapYear = [2023, 2024, 2025, 2028, 2030, 2042, 2052, 2019, 2016, 1920, 1952];

function getLeapYear() {
    let leapYear = [];
    for (let i = 0; i < findLeapYear.length; i++) {
        const element = findLeapYear[i];
        if (element % 4 === 0) {
            leapYear.push(element);
        }
        
    }
    return leapYear;
}

const showLeapYear = getLeapYear()
console.log(showLeapYear);



