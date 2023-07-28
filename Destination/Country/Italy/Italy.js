const citiesData = [{
    img: `/images/Italy1.jpg`,
    title: "Florence",
    info: "Renowned for Renaissance art and architecture of Leonardo da Vinci."
},
{
    img: `/images/Italy2.jpg`,
    title: "Milan",
    info: "Famous for its fashion industry and stunning Milan Cathedral."
},
{
    img: `/images/Italy3.avif`,
    title: "Naples",
    info: "Celebrated for Neapolitan pizza and historic sites like Pompeii."
},
{
    img: `/images/Italy4.jpg`,
    title: "Pisa",
    info: "Known for the iconic Leaning Tower and Piazza dei Miracoli."
},
{
    img: `/images/Italy5.webp`,
    title: "Rome",
    info: " The capital city known for ancient history, the Colosseum, Vatican City."
},
{
    img: `/images/Italy6.jpg`,
    title: "Turin",
    info: " Noted for its baroque architecture and being the home of Shroud of Turin."
},
{
    img: `/images/Italy7.jpg`,
    title: "Venice",
    info: " Famous for its canals, gondola rides, and St. Mark's Square."
},
{
    img: `/images/Italy8.jpg`,
    title: "Verona",
    info: "Renowned as the setting of `Romeo and Juliet` and its Roman amphitheater."
},
{
    img: `/images/Italy9.jpg`,
    title: "Bologna",
    info: "Celebrated for its historic university and delicious Bolognese cuisine."
},
{
    img: `/images/Italy10.jpg`,
    title: "Genoa",
    info: "Known for its maritime history and charming old town."
},
{
    img: `/images/Italy11.jpg`,
    title: "Palermo",
    info: "amous for its rich history, vibrant street markets, and Norman architecture."
},
{
    img: `/images/Italy12.webp`,
    title: "Siena",
    info: "Celebrated for its medieval cityscape and the annual Palio horse race."
},
{
    img: `/images/Italy13.jpg`,
    title: "Sorrento",
    info: "A picturesque coastal town known for its views of the Bay of Naples."
},
{
    img: `/images/Italy14.jpeg`,
    title: "Taormina",
    info: "Renowned for its stunning cliffside location, ancient Greek Theater."
},
{
    img: `/images/Italy15.jpg`,
    title: "Trieste",
    info: " Known for its unique location at the crossroads of Italian, Austrian."
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