var fs = require('fs');

const name = 'Simon';
var array;

startTimeStamp();
readPuzzleInput();
calculatePuzzleResult();
outputPuzzleResult();
endTimeStamp();

function startTimeStamp() {
    timeStamp = Date.now();
    dateTime = new Date(timeStamp);
    console.log(`OK ${name}, let's win some stars!`)
    console.log(`Start date/time: ` + dateTimeToString(dateTime));
}

function endTimeStamp() {
    timeStamp = Date.now();
    dateTime = new Date(timeStamp);
    console.log(`End date/time: ` + dateTimeToString(dateTime));
}

function dateTimeToString(dateTime) {
    return dateTime.getDate() + "/" + dateTime.getMonth() + "/" + dateTime.getFullYear() + " " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds() + "." + dateTime.getMilliseconds();
}

function readPuzzleInput() {
    array = fs.readFileSync('./resources/puzzleInput.txt').toString().split(',').map(Number);
}

function calculatePuzzleResult() {
    for(var i = 0; i < array.length; i += 4) {
        if (array[i] === 99) {
            break;
        } else if (array[i] === 1) {
            addedValues = array[array[i+1]] + array[array[i+2]];
            array[array[i+3]] = addedValues;
        } else if (array[i] === 2) {
            multipliedValues = array[array[i+1]] * array[array[i+2]];
            array[array[i+3]] = multipliedValues;
        }
    }
}

function outputPuzzleResult() {
    console.log(`Result = ` + array[0]);
}
