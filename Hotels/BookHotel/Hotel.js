function bookHotel(event) {
    event.preventDefault();

    // Retrieve form values
    var firstname = document.getElementById('Firstname').value;
    var lastName = document.getElementById('Lastname').value;
    var checkInDate = document.getElementById('check-in-date').value;
    var checkOutDate = document.getElementById('check-out-date').value;
    var from = document.getElementById('From').value;
    var to = document.getElementById('To').value;
    var numGuests = document.getElementById('num-guests').value;
    var roomType = document.getElementById('room-type').value;

    // Perform booking logic here (e.g., send data to a server, update database, etc.)

    // Display success message
    alert('Hotel booked successfully!');

    // Reset form
    document.getElementById('booking-form').reset();
    return false;
}