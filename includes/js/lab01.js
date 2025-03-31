alert ("Hello World!");


const myName = prompt("Enter your name");
document.getElementById("hello").innerHTML = `Hello ${myName}... How many rooms do you want to book?`;


const dollarAmount = prompt("Enter your dollar amount");
document.getElementById("dollarAmount").innerHTML = "$" + parseFloat(dollarAmount).toFixed(2); //Dollar dollar with cents

const roomCount = prompt("Enter your number of desired rooms");
document.getElementById("roomCount").innerHTML = roomCount;

const taxRate = prompt("Enter your tax");
document.getElementById("taxRate").innerHTML = taxRate + "%";

totalAmount= parseInt(dollarAmount)*parseInt(roomCount)*(1+(parseInt(taxRate)/100)); //Make all ints and multiply WITH percentages as well

document.getElementById("totalAmount").innerHTML = "$" + parseFloat(totalAmount).toFixed(2);//Dollar dollar with cents





