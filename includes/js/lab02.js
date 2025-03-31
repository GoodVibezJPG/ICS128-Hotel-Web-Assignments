//Caleb Irvine | C0522047 | Lab02

document.getElementById("calculateRoomPrices").addEventListener("click", calculateRoomCosts);

document.getElementById("calculateHotelOccupancy").addEventListener("click", calculateHotelOccupancy);

document.getElementById("calculateIteration").addEventListener("click", calculateIteration);

document.getElementById("calculateFastest").addEventListener("click", calculateFastest);


function calculateRoomCosts() {
    let roomCost1 = parseInt(prompt("What is the cost of room one?"));
    let roomCost2 = parseInt(prompt("What is the cost of room two?"));
    let roomCost3 = parseInt(prompt("What is the cost of room three?"));

    let roomCosts = [roomCost1, roomCost2, roomCost3];
    roomCosts.sort(function (a, b) { //sort from lowest to highest number
        return a - b
    });

    let medianRoomCost = roomCosts[1];
    if (medianRoomCost % 2 === 0) { //If even then style is red, else just ignore
        document.getElementById("medianRoomCost").style.color = "red";
    }
    let meanRoomCost = (roomCost1 + roomCost2 + roomCost3) / 3;

    document.getElementById("roomPrices").innerText = `$${roomCost1}, $${roomCost2}, $${roomCost3}`;
    document.getElementById("medianRoomCost").innerText = `$${medianRoomCost}`;
    document.getElementById("meanRoomCost").innerText = `$${meanRoomCost}`;
}

function calculateHotelOccupancy() {
    let Occupancy = parseInt(document.getElementById("FullPercentage").value); //Get .value

    switch(true) { //Switch instead of a bunch of if else
        case Occupancy === 100:  //FULL!
            document.getElementById("OccupancyNumber").innerHTML = `${Occupancy}% `;
            document.getElementById("OccupancyNumber").style.color = "blue";
            document.getElementById("OccupancyText").innerHTML = "THE HOTEL IS FULL!";
            break;
        case Occupancy >= 90 && Occupancy < 100:
            document.getElementById("OccupancyNumber").innerHTML = `${Occupancy}%`;
            document.getElementById("OccupancyNumber").style.color = "blue";
            document.getElementById("OccupancyText").innerHTML = "booked!";
            break;
        case Occupancy >= 80 && Occupancy <= 89:
            document.getElementById("OccupancyNumber").innerHTML = `${Occupancy}%`;
            document.getElementById("OccupancyNumber").style.color = "green";
            document.getElementById("OccupancyText").innerHTML = "booked!";

            break;
        case Occupancy >= 65 && Occupancy <= 79:
            document.getElementById("OccupancyNumber").innerHTML = `${Occupancy}%`;
            document.getElementById("OccupancyNumber").style.color = "yellow";
            document.getElementById("OccupancyText").innerHTML = "booked!";
            break;
        case Occupancy >= 51 && Occupancy <= 64:
            document.getElementById("OccupancyNumber").innerHTML = `${Occupancy}%`;
            document.getElementById("OccupancyNumber").style.color = "orange";
            document.getElementById("OccupancyText").innerHTML = "booked!";
            break;
        case Occupancy >= 0 && Occupancy <= 50:
            document.getElementById("OccupancyNumber").innerHTML = `${Occupancy}%`;
            document.getElementById("OccupancyNumber").style.color = "red";
            document.getElementById("OccupancyText").innerHTML = "booked!";
            break;
        default: //Not within 0-100
            document.getElementById("OccupancyText").innerHTML = `Incorrect - not between 0-100`;
    }
}

function calculateIteration(){
    let iterationValue = document.getElementById("iterationValue").value;
    let iterationCount = parseInt(iterationValue); //set For loop count.

    //If statement to account for isNan (Is Not a Number), it will default to five times input...
    if (iterationCount > 5 || isNaN(parseInt(iterationValue))){
        iterationCount = 5;
    }

    let output = ""; //Create string value
    // Ascending Triangle
    for (let i = 1; i <= iterationCount; i++) {
        for (let j = 1; j <= i; j++) {
            output += iterationValue; //Outputting whatever value user entered for text input
        }
        output += "<br>"; //Line break so It can start new row
    }
    // descending Triangle
    for (let i = iterationCount - 1; i >= 1; i--) { //iterationValue - 1, so we have a middle longest
        for (let j = 1; j <= i; j++) {
            output += iterationValue;
        }
        output += "<br>"; //Line break so It can start new row
    }
    document.getElementById("iterationText").style.color = "blue"; //Joe's is blue
    document.getElementById("iterationText").innerHTML = output;
}

function calculateFastest() {
    let alexaSpeed = parseInt(document.getElementById("alexaSpeed").value);
    let siriSpeed = parseInt(document.getElementById("siriSpeed").value);

    document.getElementById("alexaMaxSpeed").innerHTML = `${alexaSpeed}`;
    document.getElementById("alexaMaxSpeed").style.color = "blue";

    document.getElementById("siriMaxSpeed").innerHTML = `${siriSpeed}`;
    document.getElementById("siriMaxSpeed").style.color = "purple";

    if (alexaSpeed === siriSpeed){
        document.getElementById("raceResult").innerHTML = "It's a tie!";
        document.getElementById("raceResult").style.color = "red";
    } else if (alexaSpeed > siriSpeed){
        document.getElementById("raceWinner").style.color = "blue";
        document.getElementById("raceWinner").innerHTML = "Alexa ";
        document.getElementById("raceResult").innerHTML = "Wins 📦! Tim Cook has fainted... ";
    } else {
        document.getElementById("raceWinner").style.color = "purple";
        document.getElementById("raceWinner").innerHTML = "Siri ";
        document.getElementById("raceResult").innerHTML = "Wins 🍎! Jeff Bezos has fainted...";
    }
}


