//Hotel Room Objects
let Standard = {
    roomType: "Standard",
    roomDescription: "<ul class='caret-right'><li>🛏️ Double Bed</li><li>🚿 Standing Shower</li><li>📶 Free Wifi</li></ul>",
    roomPrice: 159,
}

let Double = {
    roomType: "Double",
    roomDescription: "<ul class='caret-right'><li>🛏️🛏️ Two Double Beds</li><li>🛁 Bathtub</li><li>🌅 Private Terrace</li></ul>",
    roomPrice: 229,
}

let Suite = {
    roomType: "Penthouse",
    roomDescription: "<ul class='caret-right'><li>🛏️ King Size Bed</li><li>🛀 Jacuzzi</li><li>🌅 Private Terrace</li></ul>",
    roomPrice: 359,
}

//Hotel Room Array
let hotelRooms = [Standard, Double, Suite];

//Display Rooms Function
displayRooms();
function displayRooms() {
    //Loop through the hotelRooms object array and display the rooms, where i is the  current index of the room in the array
    for (let i = 0; i < hotelRooms.length; i++) {
        //InnerHTML to insert cards into the hotelRooms div
        document.getElementById("hotelRooms").innerHTML += `
            <div class="card mb-3" style="max-width: 100%;">
                <div class="row">
                    <div class="col-md-4">
<!-- Display the room image from the given name src-->
                        <img src="../includes/images/lab04/${hotelRooms[i].roomType}.jpg" class="img-fluid rounded-start" alt="Room Image of ${hotelRooms[i].roomType}"  style="width: 100%; height: 100%;">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body lh-lg">
                            <h5 id="roomType${hotelRooms[i].roomType}" class="card-title h3 text-start font-monospace bg-dark rounded text-warning p-2 px-3" style="width: fit-content;">${hotelRooms[i].roomType} Room</h5>
                            <hr>
                            <p class="card-text">${hotelRooms[i].roomDescription}</p>
                            <p class="card-text fs-4 fw-medium">$${hotelRooms[i].roomPrice}</p>
                            <button id="bookRoomButton${i}" class="btn btn-dark mt-3">Book Room</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }
    // Add an event listener for each button created from the loop, I originally had a onclick function but this is better for manuplating multiple events
    //So it loops through all the buttons created and adds a respective event listener to each one
    for (let i = 0; i < hotelRooms.length; i++) {
        document.getElementById(`bookRoomButton${i}`).addEventListener(`click`, () => {
            //Alert they have booked the room, passing the room object index
            bookRoom(i);
        });
    }
}

//Book a room function
function bookRoom(roomType) {
    alert(`You have booked the ${hotelRooms[roomType].roomType} room. The price is $${hotelRooms[roomType].roomPrice}`);
}

//Javascript Table Rows Collection
document.getElementById("addRowButton").addEventListener(`click`, () => {
    //Get the number of rows in the table
    let rowCount = document.getElementById("part0201").rows.length;
    //Insert a row into the table
    let newRow = document.getElementById("part0201").insertRow();
    //Insert cells into the new row
    newRow.insertCell(0).innerHTML = `Row${rowCount + 1} cell1`;
    newRow.insertCell(1).innerHTML = `Row${rowCount + 1} cell2`;
});




