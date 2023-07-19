
document.addEventListener('DOMContentLoaded', function () {
    var trips = JSON.parse(localStorage.getItem('flightTrip'));

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
