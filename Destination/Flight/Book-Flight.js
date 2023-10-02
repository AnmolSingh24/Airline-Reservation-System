document.getElementById('booking-form').addEventListener('submit', showFlightResults);
// Take values from the user
const ticketInputs = document.getElementsByName("way");
const departureDate = document.getElementById('departure-date').value;
const returnDate = document.getElementById('return-date');
const from = document.getElementById('from').value;
const to = document.getElementById('to').value;

for (let ticket of ticketInputs) {
    ticket.addEventListener("change", (e) => {
        if (e.target.checked && e.target.value === "roundTrip") {
            returnDate.disabled = false;
        } else {
            returnDate.disabled = true;
        }
    })
}

function showFlightResults(e) {
    e.preventDefault();

    // Add the selected way to the flightTrip object
    const flightTrip = {
        departureDate: departureDate,
        returnDate: returnDate,
        from: from,
        to: to,
    };

    // Store flightTrip in localStorage
    var flights = JSON.parse(localStorage.getItem("flights")) || [];
    flights.push(flightTrip);
    localStorage.setItem("flights", JSON.stringify(flights));

    // Reset form
    document.getElementById("booking-form").reset();
}

//Hide the flight result until the user searches for the flights
function handleSearchClick() {
    const flightResult = document.getElementsByClassName("flight-result");
    flightResult[0].innerText = "";
}

// Checking whether the use has clicked on search-btn or not
const searchButton = document.getElementById("search-btn");
if (!searchButton) {
    searchButton.remove();
}
handleSearchClick();

// fetch the flight API
async function flightAvailability(departureDate, returnDate, from, to, adult, child, flightClass, currency) {
    // Construct the URL for flight availability
    const url = `https://flight-fare-search.p.rapidapi.com/v2/flights/?from=${from}&to=${to}&date=${departureDate}&date=${returnDate.value}&adult=${adult}&child=${child}&type=${flightClass}&currency=${currency}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "90880c466fmsh55535d16857aaa7p10537djsn1cf53640d53f",
            "X-RapidAPI-Host": "flight-fare-search.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

// Get flight details from the user through the form
const getFlightDetails = () => {
    var departureDate = document.getElementById("departure-date").value;
    var returnDate = document.getElementById("return-date").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var adult = document.getElementById("adult").value;
    var child = document.getElementById("child").value;
    var flightClass = document.getElementById("flight-class").value;
    return flightAvailability(departureDate, returnDate, from, to, adult, child, flightClass, "INR");
};

if (adult > 1 || child > 1) {
    price *= 2; // Double the price for more than one adult or child
}

// Show flight availability
const showAvailability = async () => {
    const result = await getFlightDetails();
    let index = "";
    const flightItems = document.querySelector('.flight-result');
    result.map((flight) => {
        const {
            flight_name,
            flight_code,
            departureAirport: { code: departureCode },
            departureAirport: { time: departureTime },
            duration: { text },
            stops,
            stopSummary: { 0: { airport } = {} },
            arrivalAirport: { code: arrivalCode },
            arrivalAirport: { time: arrivalTime },
            totals: { total }
        } = flight;

        // Input time departure time string
        var inputTime = (departureTime);
        // Extract the hour and minute
        var departTime = inputTime.split('T')[1].slice(0, 5);

        //Input time arrival time string
        var arriveTime = (arrivalTime);
        // Extract the hour and minute
        var arrTime = arriveTime.split('T')[1].slice(0, 5);

        //converting flight price from float to integer
        const price = parseInt(total);

        //console the object destructuring
        console.log(flight_name, flight_code, departureCode, departTime, text, stops, airport, arrivalCode, arrivalTime, price);

        // Generate HTML for each flight
        let innerHTML = `
        <div class="flight-data">
            <div class="flight-info-logo">
                <img src="/images/BlueWingAirwaysLogo.png" alt="Flight-img">
                <div class="flight-logo-name">
                    <p>Blue Wing Airways</p>
                    <p>${flight_code}</p>
                </div>
            </div>
            <div class="flight-info">
                <b>${departureCode}</b>
                <h4>${departTime}</h4>
            </div>
            <div class="flight-info">
                <p>${text}</p>
                <p>${stops} - ${airport}</p>
            </div>
            <div class="flight-info">
                <b>${arrivalCode}</b>
                <h4>${arrTime}</h4>
            </div>
            <div class="flight-info">
                <h3>₹ ${price}</h3>
            </div>
            <div class="flight-info">
            <a href="/"><button>Book</button></a>
               
            </div>
        </div>`;
        index += innerHTML; // Append the HTML to the string
    });
    flightItems.innerHTML = index; // Set the flight results in the .flight-data div
};
