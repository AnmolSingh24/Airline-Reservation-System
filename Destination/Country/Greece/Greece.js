const citiesData = [{
    img: `/images/Greece1.jpg`,
    title: "Athens",
    info: "Known for its ancient ruins, including the iconic Parthenon"
},
{
    img: `/images/Greece2.jpg`,
    title: "Crete",
    info: "Famous for its beautiful beaches, rich mythology and the Palace of Knossos ."
},
{
    img: `/images/Greece3.jpg`,
    title: "Mykonos",
    info: " Renowned for its vibrant nightlife, picturesque windmills."
},
{
    img: `/images/Greece4.jpg`,
    title: "Rhodes",
    info: " Noted for its well-preserved medieval Old Town, ancient ruins."
},
{
    img: `/images/Greece5.jpg`,
    title: "Santorini",
    info: "Celebrated for its breathtaking sunsets, white-washed buildings."
},
{
    img: `/images/Greece6.jpg`,
    title: "Thessaloniki",
    info: "Known for diverse history, Byzantine monuments, lively culinary scene."
},
{
    img: `/images/Greece7.jpg`,
    title: "Corfu",
    info: "Famous for its lush greenery, architecture, coastal resorts."
},
{
    img: `/images/Greece8.jpeg`,
    title: "Delphi",
    info: "Renowned for its ancient oracle site, spectacular mountainous location."
},
{
    img: `/images/Greece9.jpg`,
    title: "Patras",
    info: "Noted for its annual carnival celebrations, Roman Odeon."
},
{
    img: `/images/Greece10.jpg`,
    title: "Zakynthos",
    info: " Celebrated for its stunning Navagio Beach, vibrant nightlife."
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