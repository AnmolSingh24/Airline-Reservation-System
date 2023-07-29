const citiesData = [{
    img: `/images/Spain1.webp`,
    title: "Barcelona",
    info: "Famous for its unique Gaudí architecture, street life, beautiful beaches."
},
{
    img: `/images/Spain2.webp`,
    title: "Madrid",
    info: "Spain's capital, known for its world-class art museums, lively nightlife."
},
{
    img: `/images/Spain3.jpg`,
    title: "Malaga",
    info: "Renowned for its sunny climate, being the birthplace of Pablo Picasso."
},
{
    img: `/images/Spain4.webp`,
    title: "Seville",
    info: " Celebrated for its stunning Moorish architecture, lively flamenco scene."
},
{
    img: `/images/Spain5.webp`,
    title: "Valencia",
    info: "Known for its futuristic City of Arts and Sciences complex, paella cuisine."
},
{
    img: `/images/Spain6.webp`,
    title: "Bilbao",
    info: "Notable for the Guggenheim Museum Bilbao, contemporary art."
},
{
    img: `/images/Spain7.webp`,
    title: "Granada",
    info: "A city with the world-famous Alhambra palace complex, mauntain views."
},
{
    img: `/images/Spain8.jpg`,
    title: "Cordoba",
    info: "Renowned for the Mezquita (Great Mosque), ancient Roman bridge."
},
{
    img: `/images/Spain9.jpg`,
    title: "Toledo",
    info: "Famous for its medieval architecture,and UNESCO World Heritage site."
},
{
    img: `/images/Spain10.webp`,
    title: "Ibiza",
    info: "A top destination for its world-class nightlife, beautiful beaches."
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