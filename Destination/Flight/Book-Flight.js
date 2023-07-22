document.getElementById('booking-form').addEventListener('submit', addFlight)
function addFlight(e) {
    e.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var departureDate = document.getElementById('departure-date').value;
    var returnDate = document.getElementById('return-date').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var adult = document.getElementById('adult').value;
    var child = document.getElementById('child').value;

    const flightTrip = {
        fullname: fullname,
        email: email,
        departureDate: departureDate,
        returnDate: returnDate,
        from: from,
        to: to,
        adult: adult,
        child: child
    }
    console.log(flightTrip);
    var holiday = [];
    var holiday = JSON.parse(localStorage.getItem("flightTrip")) || [];
    console.log(JSON.stringify(holiday))
    holiday.push(flightTrip);
    console.log(JSON.stringify(holiday));
    localStorage.setItem("flightTrip", JSON.stringify(holiday));

    // reset form
    document.getElementById("booking-form").reset();

    var msg = document.getElementById("snackbar");
    msg.className = "show";
    setTimeout(() => {
        msg.className = msg.className.replace("show", "");
    }, 4000);

    return false;
}