document.getElementById('booking-form').addEventListener('submit', bookHotel)
function bookHotel(e) {
    e.preventDefault();

    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var checkInDate = document.getElementById('check-in-date').value;
    var checkOutDate = document.getElementById('check-out-date').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var numGuests = document.getElementById('num-guests').value;
    var roomType = document.getElementById('room-type').value;

    const book = {
        firstName: firstName,
        lastName: lastName,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        from: from,
        to: to,
        numGuests: numGuests,
        roomType: roomType
    }

    console.log(book);
    var hotel = [];
    var hotel = JSON.parse(localStorage.getItem("book")) || [];
    console.log(JSON.stringify(hotel));
    hotel.push(book);
    console.log(JSON.stringify(hotel));
    localStorage.setItem("book", JSON.stringify(hotel));

    // reset form
    document.getElementById('booking-form').reset();

    var msg = document.getElementById("snackbar");
    msg.className = "show";
    setTimeout(() => {
        msg.className = msg.className.replace("show", "");
    }, 4000);

    return false;
}