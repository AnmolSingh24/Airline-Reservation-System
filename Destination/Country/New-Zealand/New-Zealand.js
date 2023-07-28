const citiesData = [{
    img: `/images/NewZealand1.jpg`,
    title: "Auckland",
    info: "New Zealand's largest city known for its stunning harbors, diverse cuisine."
},
{
    img: `/images/NewZealand2.webp`,
    title: "Christchurch",
    info: "Renowned for its English heritage, beautiful gardens, post-earthquake rebuild."
},
{
    img: `/images/NewZealand3.webp`,
    title: "Dunedin",
    info: " A university town celebrated for its Scottish influence, unique wildlife."
},
{
    img: `/images/NewZealand4.jpg`,
    title: "Hamilton",
    info: "Known for its beautiful gardens, the mighty Waikato River."
},
{
    img: `/images/NewZealand5.jpg`,
    title: "Nelson",
    info: " Beloved for its sunny climate, access to the Abel Tasman National Park."
},
{
    img: `/images/NewZealand6.jpg`,
    title: "Queenstown",
    info: "The adventure capital of the world, famed for its adrenaline-pumping."
},
{
    img: `/images/NewZealand7.webp`,
    title: "Rotorua",
    info: "A geothermal wonderland, popular for its bubbling mud pools, hot springs."
},
{
    img: `/images/NewZealand8.jpg`,
    title: "Taupo",
    info: " A picturesque lakeside town with the stunning Lake Taupo, volcanic mountains."
},
{
    img: `/images/NewZealand9.webp`,
    title: "Wellington",
    info: "The capital city renowned for its vibrant arts scene, coffee culture."
},
{
    img: `/images/NewZealand10.webp`,
    title: "Whangarei",
    info: "Known for its scenic coastal location, subtropical climate."
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