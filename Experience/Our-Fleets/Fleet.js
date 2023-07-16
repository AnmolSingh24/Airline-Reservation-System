const flightContent = [{
    img: `/images/flight1.jpeg`,
    title: "A12"
},
{
    img: `/images/flight2.jpg`,
    title: "D412"
},
{
    img: `/images/flight3.webp`,
    title: "G90213"
},
{
    img: `/images/flight4.jpg`,
    title: "S87248"
}];

const flightResult = document.querySelector('.fleets');

const showFlight = () => {

    console.log("Hello Javascript");
    let flight = "";
    for (let i = 0; i < flightContent.length; i++) {
        let innerHTML = `<div class="fleets">
        <div>
            <img src="${flightContent[i].img}">
            <p>${flightContent[i].title}</p>
        </div>
    </div>`;
        flight += innerHTML;
    }
    flightResult.innerHTML = flight;
}
showFlight();