function inputHour(hour) {
    const inputMinutes = hour * 60;
    return inputMinutes;
}

const showMinutes = inputHour(2);
console.log(`${showMinutes} minutes`);

function inputMinutes(minutes) {
    const inputSeconds = minutes * 60;
    return inputSeconds;
}

const showSeconds = inputHour(7);
console.log(`${showSeconds} seconds`);