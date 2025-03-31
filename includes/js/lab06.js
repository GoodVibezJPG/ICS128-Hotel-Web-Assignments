//The base properties of this hotel are:
//     name (string) - the name of the hotel(for example, "Marriott")
//     City (string)
//     rooms (number) - number of rooms in the hotel (for example, 40)
//     booked (number) - number of rooms that have been booked (for example, 25)
//     gym (boolean) - does the hotel have a gym? (for example, true)

//Hotel class
class Hotel{
    constructor(_name, _city, _rooms, _booked, _gym) {
        this._name = _name;
        this._city = _city;
        this._rooms = _rooms;
        this._booked = _booked;
        this._gym = _gym;
    }

    get name() {
        return this._name;
    }
    get city() {
        return this._city;
    }
    get room() {
        return this._rooms;
    }
    get booked() {
        return this._booked;
    }
    get gym(){
        return this._gym;
    }

    set name (_name) {
        this._name = _name;
    }
    set city (_city) {
        this._city = _city;
    }
    set rooms (_rooms) {
        this._rooms = _rooms;
    }
    set booked (_booked) {
        this._booked = _booked;
    }
    set gym (boolean) {
        this._gym = boolean;
    }

    //Additional Methods
    bookRoom() {
        this.booked += 1;
        let vacantRooms = this._rooms - this._booked;
        return `The room has booked successfully... There are ${vacantRooms} rooms remaining for booking`
    }
    cancelRoom(){
        this.booked -= 1;
        let vacantRooms = this._rooms - this._booked;
        return `The room has cancelled successfully... There are ${vacantRooms} rooms remaining for booking`
    }

}

//Then create an instance of a class called "hotel"
const hotel = new Hotel("Kale Hotel","Detroit", 4, 2, true);
//then add all the extra stuff...
hotel._roomTypes = ["twin","double", "suite"];
hotel._location = "Detroit, Michigan, USA";
hotel._swimmingPool = false;
hotel._airportShuttle = true;
hotel._restaurants = new Map([["McDonald's", "American 🍔"],["Panda Express", "Chinese 🥡"], ["Taco Bell", "'Mexican' 🌮"]]);

//resort instance

//Resort inheritance 😱
class Resort extends Hotel{
    constructor(_name, _city, _rooms, _booked, _gym, _resortType, _beachFront, _kidsClub, _resortBar) {
        super(_name, _city, _rooms, _booked, _gym);
        this._resortType = _resortType;
        this._beachFront = _beachFront;
        this._kidsClub = _kidsClub;
        this._resortBar = _resortBar;
    }

    get resortType() {
        return this._resortType;
    }
    get beachFront() {
        return this._beachFront;
    }
    get kidsClub() {
        return this._kidsClub;
    }
    get resortBar() {
        return this._resortBar;
    }

    set resortType (_resortType) {
        this._resortType = _resortType;
    }
    set beachFront (boolean) {
        this._beachFront = boolean;
    }
    set kidsClub (boolean) {
        this._kidsClub = boolean;
    }
    set resortBar (boolean) {
        this._resortBar = boolean;
    }
}

const resort = new Resort("Salad Lovers Resort", "Detroit", 3,1,true, "Couples ❤️",true, false, false);
resort._location = "Detroit, Michigan, USA";

//Html time 😈
//Display using any object called
function displayHotelCardInfo(object){
    document.getElementById("hotelName").textContent = object._name;
    document.getElementById("hotelLocation").textContent = object._location;
    //room types with a .join for formatting
    document.getElementById("hotelRoomTypes").textContent = object._roomTypes.join(", ");
    // shuttle availability with terinary
    document.getElementById("hotelShuttle").textContent = object._airportShuttle ? "✅" : "❌";
    // swimming pool availability with terinary
    document.getElementById("hotelPool").textContent = object._swimmingPool ? "✅" : "❌";

    //hotel Restaurants / .size for map since .length is only for arrays
    document.getElementById("hotelRestaurantCount").textContent = object._restaurants.size.toString();
    //Clear my HTML restauranets for when change to card happens
    document.getElementById("hotelRestaurants").innerHTML = '';
    for (let [name,type] of object._restaurants) {
        document.getElementById("hotelRestaurants").innerHTML += `
        <li class="list-group-item fw-bold ">${name} <span class="fw-normal fst-italic">/ Type / </span> ${type}</li>   
    `;
    }

    // Update room availability
    let totalRooms = object._rooms;
    let roomAvailability = totalRooms- object._booked;
    let hotelAvailability = document.getElementById("hotelAvailability");

    if (roomAvailability === 0) {
        hotelAvailability.textContent = "STOP!!! THERE ARE NO ROOMS LEFT! 😡";
        hotelAvailability.classList.add("text-danger");
        //Hide book room btn
        document.getElementById("bookHotelRoom").style.display = "none";
    } else if (roomAvailability >= object._rooms) {
        //Hide cancel room btn
        hotelAvailability.textContent = `All ${roomAvailability} rooms are empty. You cannot cancel more.`;
        document.getElementById("cancelHotelRoom").style.display = "none";
    } else {
        //normal functionality
        hotelAvailability.classList.remove("text-danger");
        hotelAvailability.classList.add("text-success");
        hotelAvailability.textContent = `Rooms available: ${roomAvailability} | ${totalRooms}`;
        //bring back buttons
        document.getElementById("bookHotelRoom").style.display = "inline-block";
        document.getElementById("cancelHotelRoom").style.display = "inline-block";
    }

}

function displayResortCardInfo(object){
    document.getElementById("resortName").textContent = object._name;
    document.getElementById("resortType").textContent = object._resortType;
    document.getElementById("resortLocation").textContent = object._location;
    document.getElementById("resortBeach").textContent = object._beachFront ? "✅" : "❌";
    document.getElementById("resortKidsClub").textContent = object._kidsClub ? "✅" : "❌";
    document.getElementById("resortBar").textContent = object._resortBar ? "✅" : "❌";
    //NEWS New Resort bar in the works...
    object._resortBar = true;
    document.getElementById("resortBarNEW").textContent = object._resortBar ? "✅" : "❌";
    //So My first bar doesnt get overridden
    object._resortBar = false;

    // Update room availability
    let totalRooms = object._rooms;
    let roomAvailability = totalRooms - object._booked;
    let resortAvailability = document.getElementById("resortAvailability");

    if (roomAvailability === 0) {
        resortAvailability.textContent = "STOP!!! THERE ARE NO ROOMS LEFT! 😡";
        resortAvailability.classList.add("text-danger");
        //Hide book room btn
        document.getElementById("bookResortRoom").style.display = "none";
    } else if (roomAvailability >= object._rooms) {
        //Hide cancel room btn
        resortAvailability.textContent = `All ${roomAvailability} rooms are empty. You cannot cancel more.`;
        document.getElementById("cancelResortRoom").style.display = "none";
    } else {
        //normal functionality
        resortAvailability.classList.remove("text-danger");
        resortAvailability.classList.add("text-success");
        resortAvailability.textContent = `Rooms available: ${roomAvailability} | ${totalRooms}`;
        //bring back buttons
        document.getElementById("bookResortRoom").style.display = "inline-block";
        document.getElementById("cancelResortRoom").style.display = "inline-block";
    }
}

// Event Listeners for Hotel
document.getElementById("bookHotelRoom").addEventListener("click", () => {
    let message = hotel.bookRoom();
    document.getElementById("roomChangeModal").textContent = message;
    //Hotel card ui reset
    displayHotelCardInfo(hotel);
});
document.getElementById("cancelHotelRoom").addEventListener("click", () => {
    let message = hotel.cancelRoom();
    document.getElementById("roomChangeModal").textContent = message;
    // Refresh hotel UI
    displayHotelCardInfo(hotel);
});

// Event Listeners for Resort
document.getElementById("bookResortRoom").addEventListener("click", () => {
    let message = resort.bookRoom();
    document.getElementById("resortRoomChangeModal").textContent = message;
    // Refresh resort UI
    displayResortCardInfo(resort);
});
document.getElementById("cancelResortRoom").addEventListener("click", () => {
    let message = resort.cancelRoom();
    document.getElementById("resortRoomChangeModal").textContent = message;
    // Refresh resort UI
    displayResortCardInfo(resort);
});

//Display The Finished Cards
displayHotelCardInfo(hotel);
displayResortCardInfo(resort);





