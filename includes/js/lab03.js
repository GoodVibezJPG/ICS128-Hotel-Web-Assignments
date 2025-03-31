// /For this lab assignment, you will be writing some small pieces of JavaScript code.

// The focus will be on the material from week 3, namely functions, scope, built-in methods,
// and error handling.Each completed task must be included as part of your submission.

function counter(string, char){
    if (char === null) {
        //The char is null, so lets count white spaces in string instead
        //count the number of white spaces in the string
        let whiteSpaces = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                whiteSpaces++;
            }
        }
        //return the count as a string
        return whiteSpaces.toString();
    } else {
        //Oh hey theres a letter, lets count the letters in the name now
        //Count the number of given char in the string
        string = string.toUpperCase();
        let letterCount = 0;
        for (let i = 0; i < string.length; i++) {
            //Check to see if little char and OR lowerCase Char.... this is probably a trick so made sure it's here
            // originally had it as a || or string[i].toUpperCase() == char, but that seems less efficient
            if (string[i] === char) {
                letterCount++;
            }
        }
        //return the count as a string
        return letterCount.toString();
    }
}

//On button click arrow function...
document.getElementById("findValueName").addEventListener("click", ()=>{
    //Hard Code for Given Letter
    let charLetter = 'F' //Set F (UpperCASE) as Char to be counted. This because its the easiest for me to spam adsfasdf
    document.getElementById("nameLetter").innerHTML = charLetter;

    //Get user input
    //No trim so we count ALL the white spaces trailing
    let whiteCountName = document.getElementById("spaceInName").value; //Get value of user input for white in name
    let letterInName = document.getElementById("letterInName").value; //Get value of user input for letter in name

    //null char because we aren't looking for one
    document.getElementById("nameSpaceResult").innerHTML = counter(whiteCountName,null);
    document.getElementById("nameSpaceResult").style.color = "red";

    document.getElementById("nameLetterResult").innerHTML = counter(letterInName,charLetter);
    document.getElementById("nameLetterResult").style.color = "red";
});

//Exercise 1.2 -- Using Javascript Built-in Date Functions
// var labDay = new Date(2022, 2,1);
// console.log(`Lab day is ${labDay}`);
// console.log(labDay.toDateString());
// console.log(labDay.toTimeString());
// console.log(labDay.getDate() + " / " + labDay.getMonth() + " / " + labDay.getFullYear());
// console.log(labDay.getHours() + " : " + labDay.getMinutes());
//
// var now = Date.now();
// console.log(now);
//
// var errorDate = new Date(2016, 33, 1);
// console.log(errorDate);
//
// //String literal invalid date
// var invalidDate = new Date("Funuary 3, 2018");
// console.log(invalidDate);
//
// var options = { weekday: 'long' , year: 'numeric', month: 'long', day: 'numeric' };
// //German Locale Date
// console.log(labDay.toLocaleString('de-DE', options));
//
// //Calculates Milliseconds in a day? Pretty sure this is what Joe wants...
// var msDay = ()=>{
//     let day = 24;
//     let hour = 60;
//     let minute = 60;
//
//     let seconds = day*hour*minute;
//     return seconds * 1000;
// }
//
// var msLabDay = now;
// labDay = new Date(msLabDay + msDay);


//Pulling It Together - Payroll for weekdays in a month
//Joe's Days in a month function
function daysInMonth(year, month){//Use 1 for Jan, 2 for Feb, etc.
    return new Date(year, month, 0).getDate();
}

function workDaysInMonth(year,month) {
    let workDaysInMonth = 0; //Initialize working days count
    let totalDays = daysInMonth(year,month); //Find the total days in the given month, calling daysInMonth method

    //For each day in total days, if the current day of the week is NOT a Sun(0) or SAT(6) then add to counter
    for (let day = 1; day <= totalDays; day++) {
        //currentDate as our base to check each of the days of the week
        let currentDate = new Date(year, month, day);
        let dayOfWeek = currentDate.getDay();

        //As long as it's not Sunday(0) start of week, or saturday, then up the count
        if (dayOfWeek !== 0 && dayOfWeek !== 6){
            workDaysInMonth++;
        }
    }
    //return count, representing workdays in month
    return workDaysInMonth;
}

//The BC Min Wage for a given decade span, right? Or did he just want the bc min wage to hard 17.50. . . whatever
function BCMinWage(year) {
    //"?" ternary for shorthand if else statement, this is so cool, i originally had a switch, but this looks much cleaner
    return (
        year >= 2025 ? 17.40 :
        year > 2014 ? 10.25 :
        year > 2004 ? 8.00 :
        year > 1994 ? 6.00 :
        year > 1984 ? 3.65 :
        year > 1975 ? 2.50 :
        0.15
    ).toFixed(2);
}

function calculateMonthlySalary(year,month){
    let wage = (workDaysInMonth(year,month) * 8) * BCMinWage(year);
    //only two decimal numbers please
    return wage.toFixed(2);
}

//Long arrow function with other functions in it
document.getElementById("calculateDays").addEventListener("click",()=>{
    const dateInput = new Date(document.getElementById("dateInput").value);

    let year = dateInput.getFullYear();
    //Accounting for zero index month start
    let month = dateInput.getMonth() + 1;
    //Accounting for zero index day start
    let day = dateInput.getDate();

    //Run the other methods and innerHTML them
    document.getElementById("currentDate").innerHTML = `${year} / ${month} / ${day}`;
    document.getElementById("dayInMonth").innerHTML = `${daysInMonth(year,month)}`;
    document.getElementById("workDaysInMonth").innerHTML = `${workDaysInMonth(year,month)}`;
    document.getElementById("minWageForYear").innerHTML = `$${BCMinWage(year)}`;
    document.getElementById("salaryForMonth").innerHTML = `$${calculateMonthlySalary(year,month)}`;

    //Whole lotta red, jeos is red
    document.getElementById("currentDate").style.color = "red";
    document.getElementById("dayInMonth").style.color = "red";
    document.getElementById("workDaysInMonth").style.color = "red";
    document.getElementById("minWageForYear").style.color = "red";
    document.getElementById("salaryForMonth").style.color = "red";
})

function isItInRange(value) {
    // Switch to evaluate each case as a boolean expression, whether it is T or F

    //Always show value from input
    document.getElementById("numValue").innerHTML = value;
    try {
        //Differentiate NumberValue from possible NaN values
        var numValue = parseInt(value);
        //no strings, throws error
        if (isNaN(parseInt(value))){
            throw new Error(`Please enter a valid number: ${value} is NOT valid`);
        } else {
            switch (true) {
                //must be greater than two or will throw an error
                case numValue <= 0:
                    throw new Error(`ERROR - Your Number ${numValue} must be greater than Zero 💀`);
                case numValue <= 2:
                    throw new Error("ERROR - The numValue is less than or equal to 2 🫤");
                //Correct INPUTS
                case numValue > 2 && numValue <= 4:
                    //Eh, is orange
                    document.getElementById("numGreaterThan").innerHTML = 'Your Number is GREATER than 2, but not the correct range: ';
                    document.getElementById("rangeValidation").style.color = "orange";
                    document.getElementById("rangeValidation").innerHTML = `The Value is over 2 🙂`;
                    document.getElementById("numResult").innerHTML = `${numValue}`;
                    document.getElementById("numResult").style.color = "orange";
                    break;

                // numValue > 4
                default:
                    //Greater than two, correct range! Good is green
                    document.getElementById("numGreaterThan").innerHTML = 'Your Number is GREATER than 2: ';
                    document.getElementById("numResult").innerHTML = `${numValue}`;
                    document.getElementById("numResult").style.color = "green";

                    document.getElementById("rangeValidation").innerHTML = "Your Number is in the correct range 🥳";
                    document.getElementById("rangeValidation").style.color = "green";
                    break;
            }
        }
    } catch (error) {
        //Error is Red
        document.getElementById("numGreaterThan").innerHTML = 'Your Number is less than  2: ';
        document.getElementById("numResult").innerHTML = `${value}`;
        document.getElementById("numResult").style.color = "red";

        // Display the error message
        document.getElementById("rangeValidation").innerHTML = error.message;
        document.getElementById("rangeValidation").style.color = "red";
    }
}

document.getElementById("calculateGreaterThan").addEventListener("click", () => {
    //arrow calls range function
    isItInRange(document.getElementById("numInput").value);
});



