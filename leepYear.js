function leepYear(year) {
    if (year % 4 === 0) {
        return `${year} this year Leep year`;
    }

    return `${year} this year Not Leep year`;

}

const years = 2015;
const showLeepYear = leepYear(years);
console.log(showLeepYear);


function leepYear2(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return `${year} this year Leep year`;
    }

    return `${year} this year Not Leep year`;

}

const dears = 20001;
const showLeepDear = leepYear2(dears);
console.log(showLeepDear);