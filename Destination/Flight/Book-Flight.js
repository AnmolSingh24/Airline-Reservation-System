document.getElementById('booking-form').addEventListener('submit', addTrip)
function addTrip(e) {
    e.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var departureDate = new Date(document.getElementById('departure-date').value);
    var returnDate = new Date(document.getElementById('return-date').value);
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
    alert("✅ Flight Booked Successfully!");
    window.location = "/index.html"
}

// function showTrips() {
//     var trips = JSON.parse(localStorage.getItem("trip")) || [];
//     console.log(trips);
//     for (let i = 0; i < trips.length; i++) {
//         console.log(trips[i]);
//         var tripItem = document.createElement("div");
//         tripItem.innerHTML = "<br> <br>" + trips[i].fullname;
//     }
// }