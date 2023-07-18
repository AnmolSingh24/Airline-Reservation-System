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
    console.log(trip);
    var holiday = [];
    var holiday = JSON.parse(localStorage.getItem("trip")) || [];
    console.log(JSON.stringify(holiday))
    holiday.push(trip);
    console.log(JSON.stringify(holiday));
    localStorage.setItem("trip", JSON.stringify(holiday));

    document.querySelector(".flight-status").style.visibility = "visible";
    setTimeout(() => {
        document.querySelector(".flight-status").style.visibility = "hidden";
    }, 4000);
    document.getElementById("booking-form")
        .insertAdjacentElement("beforeend", html);

    // reset form
    document.getElementById("booking-form").reset();
    return false;
}