var fs = require('fs');

const name = 'Simon';
var tally = 0;
var array;

startTimeStamp();
readPuzzleInput();
calculatePuzzle();
outputResult();
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
    array = fs.readFileSync('./resources/puzzleInput.txt').toString().split('\n');
}

function calculatePuzzle() {
    for(i in array) {
        x = parseInt(array[i]);
        x = Math.floor(x / 3) - 2;
        tally = tally + x;
    }
}

function outputResult() {
    console.log(`Result = ` + tally);
}
