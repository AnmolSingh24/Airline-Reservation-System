
document.addEventListener('DOMContentLoaded', function () {
    var trips = JSON.parse(localStorage.getItem('trip'));
    console.log(trips);

    for (let i = 0; i < trips.length; i++) {
        console.log(trips[i]);
        var tripItem = document.createElement("div");
        tripItem.innerHTML = "<br>" + trips[i].fullname;
    }

    if (trips) {
        document.getElementById('fullname').textContent = 'Fullname: ' + trips[0].fullname;
        document.getElementById('email').textContent = 'Email: ' + trips[0].email;
        document.getElementById('departure-date').textContent = 'Departure Date: ' + trips[0].departureDate;
        document.getElementById('return-date').textContent = 'Return Date: ' + trips[0].returnDate;
        document.getElementById('from').textContent = 'From: ' + trips[0].from;
        document.getElementById('to').textContent = 'To: ' + trips[0].to;
        document.getElementById('adult').textContent = 'Adult: ' + trips[0].adult;
        document.getElementById('child').textContent = 'Child: ' + trips[0].child;
        console.log(trips);
        console.log(trips[i]);
    } else {
        document.getElementById('fullname').textContent = 'Fullname: N/A';
        document.getElementById('email').textContent = 'Email: N/A';
        document.getElementById('departure-date').textContent = 'Departure Date: N/A';
        document.getElementById('return-date').textContent = 'Return Date: N/A';
        document.getElementById('from').textContent = 'From: N/A';
        document.getElementById('to').textContent = 'To: N/A';
        document.getElementById('adult').textContent = 'Adult: N/A';
        document.getElementById('child').textContent = 'Child: N/A';
    }
});
