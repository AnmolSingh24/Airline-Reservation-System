// document.getElementById('booking-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     var fullname = document.getElementById('fullname').value;
//     var email = document.getElementById('email').value;
//     var departureDate = document.getElementById('departure-date').value;
//     var returnDate = document.getElementById('return-date').value;
//     var from = document.getElementById('from').value;
//     var to = document.getElementById('to').value;
//     var adult = document.getElementById('adult').value;
//     var child = document.getElementById('child').value;

//     console.log({ departureDate, returnDate });

//     var trip = {
//         fullname: fullname,
//         email: email,
//         departureDate: departureDate,
//         returnDate: returnDate,
//         from: from,
//         to: to,
//         adult: adult,
//         child: child
//     };
//     console.log(trip);
//     if (isDateValid(departureDate, returnDate)) {
//         addTrip(trip);
//         clearForm();
//         redirectToBlueWingAirways();
//     } else {
//         alert('Invalid dates! Please make sure the departure date is before the return date.');
//     }
// });

// function addTrip(trip) {
//     var tripsContainer = document.getElementById('trips-container');
//     var tripElement = document.createElement('div');
//     tripElement.classList.add('trip');

//     var fullnameElement = document.createElement('h3');
//     fullnameElement.textContent = 'Fullname: ' + trip.fullname;

//     var emailElement = document.createElement('b');
//     emailElement.textContent = 'Email: ' + trip.email;

//     var departureDateElement = document.createElement('p');
//     departureDateElement.textContent = 'Departure Date: ' + trip.departureDate;

//     var returnDateElement = document.createElement('p');
//     returnDateElement.textContent = 'Return Date: ' + trip.returnDate;

//     var fromElement = document.createElement('p');
//     fromElement.textContent = 'From: ' + trip.from;

//     var toElement = document.createElement('p');
//     toElement.textContent = 'To: ' + trip.to;

//     tripElement.appendChild(fullnameElement);
//     tripElement.appendChild(emailElement);
//     tripElement.appendChild(departureDateElement);
//     tripElement.appendChild(returnDateElement);
//     tripElement.appendChild(fromElement);
//     tripElement.appendChild(toElement);

//     tripsContainer.appendChild(tripElement);
// }

// function clearForm() {
//     document.getElementById('fullname').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('departure-date').value = '';
//     document.getElementById('return-date').value = '';
//     document.getElementById('from').value = '';
//     document.getElementById('to').value = '';
// }

// function isDateValid(departureDate, returnDate) {
//     return departureDate < returnDate;
// }

// function redirectToBlueWingAirways() {
//     window.location.href = "/My-Trips/Trips.html";
// }



document.getElementById('booking-form').addEventListener('submit', addTrip)
function addTrip(e) {
    e.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var departureDate = document.getElementById('departure-date').value;
    var returnDate = document.getElementById('return-date').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var adult = document.getElementById('adult').value;
    var child = document.getElementById('child').value;

    const trip = {
        fullname: fullname,
        email: email,
        departureDate: departureDate,
        returnDate: returnDate,
        from: from,
        to: to,
        adult: adult,
        child: child
    }

    var holiday = [];
    var holiday = JSON.parse(localStorage.getItem("trip")) || [];
    console.log(JSON.stringify(holiday))
    holiday.push(trip);
    console.log(JSON.stringify(holiday));
    localStorage.setItem("trip", JSON.stringify(holiday));
    alert("Flight Booked Successfully!");
    window.location = "/My-Trips/Trips.html"
}

function showTrips() {
    var trips = JSON.parse(localStorage.getItem("trip")) || [];
    console.log("trips");
    for (let i = 0; i < trips.length; i++) {
        console.log(trips[i]);
        var item = document.createElement("div");
        item.innerHTML = "<br> <br>" + trips[i].fullname;
    }
}