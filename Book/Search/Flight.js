document.getElementById('flightSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var origin = document.getElementById('origin').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;

    // Call API or perform search logic
    // Here you can make an AJAX request to a server-side script or API to search for flights based on the form inputs

    var flights = [
        {
            origin: 'New York',
            destination: 'Los Angeles',
            date: '2023-07-20',
            time: '12:00 PM',
            price: 200
        },
        {
            origin: 'New York',
            destination: 'San Francisco',
            date: '2023-07-20',
            time: '2:00 PM',
            price: 250
        },
        {
            origin: 'New York',
            destination: 'Chicago',
            date: '2023-07-20',
            time: '4:00 PM',
            price: 150
        },
        {
            origin: 'New York',
            destination: 'Miami',
            date: '2023-07-20',
            time: '6:00 PM',
            price: 180
        }
    ];

    // Filter flights based on search criteria
    var filteredFlights = flights.filter((flight) => {
        return flight.origin.toLowerCase() === origin.toLowerCase() &&
            flight.destination.toLowerCase() === destination.toLowerCase() &&
            flight.date === date;
    });

    // Display flight results
    var flightResultsDiv = document.getElementById('flightResults');
    flightResultsDiv.innerHTML = '';
    if (filteredFlights.length > 0) {
        var ul = document.createElement('ul');
        filteredFlights.forEach(function (flight) {
            var li = document.createElement('li');
            li.textContent = flight.origin + ' to ' + flight.destination + ', ' +
                'Date: ' + flight.date + ', ' +
                'Time: ' + flight.time + ', ' +
                'Price: $' + flight.price;
            ul.appendChild(li);
        });
        flightResultsDiv.appendChild(ul);
    } else {
        flightResultsDiv.textContent = 'No flights found.';
    }
});
