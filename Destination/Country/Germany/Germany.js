const citiesData = [{
    img: `/images/Germany1.jpeg`,
    title: "Berlin",
    info: "Known for its historical significance, art scene, and vibrant nightlife."
},
{
    img: `/images/Germany2.webp`,
    title: "Cologne",
    info: "Famous for its magnificent Cologne Cathedral, vibrant carnival celebrations."
},
{
    img: `/images/Germany3.jpeg`,
    title: "Dresden",
    info: "Renowned for its stunning Baroque architecture and beautiful Elbe River setting."
},
{
    img: `/images/Germany4.jpeg`,
    title: "Frankfurt",
    info: "Noted for its futuristic skyline, international finance hub, and trade fairs."
},
{
    img: `/images/Germany5.jpg`,
    title: "Hamburg",
    info: " Celebrated for its bustling port, maritime heritage, and lively entertainment."
},
{
    img: `/images/Germany6.jpg`,
    title: "Munich",
    info: "Famous for its Oktoberfest celebrations, beer gardens, and rich cultural heritage."
},
{
    img: `/images/Germany7.jpg`,
    title: "Nuremberg",
    info: "Known for its medieval architecture, Christmas markets."
},
{
    img: `/images/Germany8.jpg`,
    title: "Stuttgart",
    info: "Renowned for its automotive industry, lush parks, wine-growing region."
}]

const city = document.querySelectorAll('.cities-grid');
const showCity = () => {

    let cities = "";
    for (let i = 0; i < citiesData.length; i++) {
        let innerHTML = `
        <div class="cities-card">
            <img src="${citiesData[i].img}">            
            <h3>${citiesData[i].title}</h3>
            <p>${citiesData[i].info}</p>
            <a href="/Destination/Flight/Book-Flight.html">Book Flight</a>
        </div>`;
        cities += innerHTML;
    }
    city.forEach((element) => {
        element.innerHTML = cities;
    });
}
showCity();