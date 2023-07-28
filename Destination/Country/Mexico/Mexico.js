const citiesData = [{
    img: `/images/Mexico1.jpg`,
    title: "Cancun",
    info: " Known for its stunning beaches and vibrant nightlife."
},
{
    img: `/images/Mexico2.webp`,
    title: "Guadalajara",
    info: "Renowned for its rich culture, tequila production, and mariachi music."
},
{
    img: `/images/Mexico3.jpg`,
    title: "Mexico City",
    info: "The bustling capital city famous for its historic sites, diverse cuisine."
},
{
    img: `/images/Mexico4.jpg`,
    title: "Monterrey",
    info: "A modern metropolis with a thriving business district, beautiful mountain."
},
{
    img: `/images/Mexico5.jpg`,
    title: "Oaxaca",
    info: "Celebrated for its indigenous, traditional crafts, delicious cuisine."
},
{
    img: `/images/Mexico6.jpeg`,
    title: "Playa del Carmen",
    info: " A trendy coastal town known for its upscale resorts, beach clubs."
},
{
    img: `/images/Mexico7.jpg`,
    title: "Puebla",
    info: " Famous for the birthplace of the delectable dish, chiles en nogada."
},
{
    img: `/images/Mexico8.jpg`,
    title: "Puerto Vallarta",
    info: "A picturesque resort city known for its beautiful beaches, LGBTQ+ scene."
},
{
    img: `/images/Mexico9.jpg`,
    title: "San Miguel de Allende",
    info: "A charming town with cobblestone streets, stunning architecture."
},
{
    img: `/images/Mexico10.webp`,
    title: "Tulum",
    info: "Prized for its bohemian vibe, eco-friendly resorts, and Mayan ruins perched."
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