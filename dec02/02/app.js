var fs = require('fs');

const name = 'Simon';
var array;
var resultToMatch = 19690720;
var noun;
var verb;
var puzzleResult;

startTimeStamp();
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
    loop1:
    for(noun = 0; noun < 99; noun += 1) {
        loop2:
        for(verb = 0; verb < 99; verb += 1) {
            readPuzzleInput();
            if (attemptPuzzleWithNounAndVerb(noun,verb) === resultToMatch) {
                break loop1;
            }
        }
    }

    puzzleResult = (100 * noun) + verb;
}

function attemptPuzzleWithNounAndVerb(noun, verb) {
    array[1] = noun;
    array[2] = verb;
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
    return array[0];
}

function outputPuzzleResult() {
    console.log(`Result = ` + puzzleResult);
}
