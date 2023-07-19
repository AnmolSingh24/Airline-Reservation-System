//Flight Details
document.addEventListener('DOMContentLoaded', () => {
    var trips = JSON.parse(localStorage.getItem('flightTrip'));
    console.log(trips);

    for (let i = 0; i < trips.length; i++) {
        console.log(trips[i]);
        var tripItem = document.createElement("div");
        tripItem.innerHTML = "<br>" + trips[i].fullname;
    }

    if (trips) {
        document.getElementById('fullname').innerHTML = '<b>Fullname : </b>' + trips[0].fullname;
        document.getElementById('email').innerHTML = '<b>Email : </b>' + trips[0].email;
        document.getElementById('departure-date').innerHTML = '<b>Departure Date : </b>' + trips[0].departureDate;
        document.getElementById('return-date').innerHTML = '<b>Return Date : </b>' + trips[0].returnDate;
        document.getElementById('from').innerHTML = '<b>From : </b>' + trips[0].from;
        document.getElementById('to').innerHTML = '<b>To : </b>' + trips[0].to;
        document.getElementById('adult').innerHTML = '<b>Adult : </b>' + trips[0].adult;
        document.getElementById('child').innerHTML = '<b>Child : </b>' + trips[0].child;
        console.log(trips);
        console.log(trips[i]);
    } else {
        document.getElementById('fullname').innerHTML = 'Fullname: N/A';
        document.getElementById('email').innerHTML = 'Email: N/A';
        document.getElementById('departure-date').innerHTML = 'Departure Date: N/A';
        document.getElementById('return-date').innerHTML = 'Return Date: N/A';
        document.getElementById('from').innerHTML = 'From: N/A';
        document.getElementById('to').innerHTML = 'To: N/A';
        document.getElementById('adult').innerHTML = 'Adult: N/A';
        document.getElementById('child').innerHTML = 'Child: N/A';
    }
});


//  Hotel Details
document.addEventListener('DOMContentLoaded', () => {
    var hotel = JSON.parse(localStorage.getItem('bookHotel'));
    console.log(hotel);

    for (let i = 0; i < hotel.length; i++) {
        console.log(hotel[i]);
        var hotelItem = document.createElement("div");
        hotelItem.innerHTML = "<br>" + hotel[i].firstname;
    }

    if (book) {
        document.getElementById('fullname').innerHTML = '<b>Fullname : </b>' + hotel[0].firstname;
        document.getElementById('lastname').innerHTML = '<b>Lastname : </b>' + hotel[0].lastname;
        document.getElementById('check-in-date').innerHTML = '<b>Check-In-Date : </b>' + hotel[0].checkInDate;
        document.getElementById('check-out-date').innerHTML = '<b>Check-Out-Date : </b>' + trips[0].checkOutDate;
        document.getElementById('from').innerHTML = '<b>From : </b>' + hotel[0].from;
        document.getElementById('to').innerHTML = '<b>To : </b>' + hotel[0].to;
        document.getElementById('num-guests').innerHTML = '<b>Number of Guests : </b>' + hotel[0].numGuests;
        document.getElementById('room-type').innerHTML = '<b>Room Type : </b>' + hotel[0].roomType;
        // console.log(hotel);
        // console.log(hotel[i]);
    } else {
        document.getElementById('fullname').innerHTML = 'Firstname: N/A';
        document.getElementById('lastname').innerHTML = 'Lastname: N/A';
        document.getElementById('check-in-date').innerHTML = 'Check-In-Date: N/A';
        document.getElementById('check-out-date').innerHTML = 'Check-Out-Date: N/A';
        document.getElementById('from').innerHTML = 'From: N/A';
        document.getElementById('to').innerHTML = 'To: N/A';
        document.getElementById('num-guests').innerHTML = 'Number of Guests: N/A';
        document.getElementById('room-type').innerHTML = 'Room Type: N/A';
    }
});
