
document.addEventListener('DOMContentLoaded', function () {
    var trips = JSON.parse(localStorage.getItem('trip'));
    // console.log(trips);

    for (let i = 0; i < trips.length; i++) {
        console.log(trips[i]);
        var tripItem = document.createElement("div");
        tripItem.innerHTML = "<br>" + trips[i].fullname;
        // tripItem.innerHTML = "Fullname: " + trips[i].fullname + ", Email: " + trips[i].email + ", Departure Date: " + trips[i].departureDate + ", Return Date: " + trips[i].returnDate + ", From: " + trips[i].from + ", To: " + trips[i].to + ", Adult: " + trips[i].adult + ", Email: " + trips[i].child;
    //     tripItem.innerHTML =  `
    //     <h2>My Trips:</h2>
    //     <p><strong>Destination:</strong> ${fullname}</p>
    //     <p><strong>Departure Date:</strong> ${departureDate.toDateString()}</p>
    //     <p><strong>Return Date:</strong> ${returnDate.toDateString()}</p>
    //   `;
    }

    if (trips) {
        document.getElementById('fullname').textContent = 'Fullname: ' + trips.fullname;
        document.getElementById('email').textContent = 'Email: ' + trips.email;
        document.getElementById('departure-date').textContent = 'Departure Date: ' + trips.departureDate;
        document.getElementById('return-date').textContent = 'Return Date: ' + trips.returnDate;
        document.getElementById('from').textContent = 'From: ' + trips.from;
        document.getElementById('to').textContent = 'To: ' + trips.to;
        document.getElementById('adult').textContent = 'Adult: ' + trips.adult;
        document.getElementById('child').textContent = 'Child: ' + trips.child;
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
