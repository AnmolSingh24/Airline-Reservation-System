const citiesData = [{
    img: `/images/France1.jpg`,
    title: "Avigon",
    info: "Known for its historic medieval bridge, the Pont Saint-Bénézet."
},
{
    img: `/images/France2.jpg`,
    title: "Bordeaux",
    info: "Renowned for its world-class wine production and picturesque vineyards."
},
{
    img: `/images/France3.webp`,
    title: "Cannes",
    info: "Famous for its prestigious international film festival, attracting celebrities."
},
{
    img: `/images/France4.jpg`,
    title: "Chamonix-Mont-Blanc",
    info: "Known for its stunning alpine landscapes, mountaineering enthusiasts."
},
{
    img: `/images/France5.jpg`,
    title: "Dijon",
    info: "Renowned for its mustard production and former capital of Duchy of Burgundy."
},
{
    img: `/images/France6.jpg`,
    title: "French Riveria",
    info: "A glamorous coastal region known for its lxury resorts, beautiful beaches."
},
{
    img: `/images/France7.webp`,
    title: "Lourdes",
    info: "A major Catholic pilgrimage site known for its supposed healing properties."
},
{
    img: `/images/France8.avif`,
    title: "Lyon",
    info: "Famous for its gastronomy and traditional Lyonnaise cuisine."
},
{
    img: `/images/France9.jpg`,
    title: "Marseille",
    info: "France's second-largest city, known for its vibrant culture."
},
{
    img: `/images/France10.webp`,
    title: "Mont Saint-Michel ",
    info: "An iconic island commune with a medieval abbey, situated on a rocky outcrop."
},
{
    img: `/images/France11.jpg`,
    title: "Nice",
    info: "Famous for its stunning seafront promenade, the Promenade des Anglais."
},
{
    img: `/images/France12.jpg`,
    title: "Paris",
    info: "The capital city of France and a global cultural hub, known for Eiffel Tower."
},
{
    img: `/images/France13.jpg`,
    title: "Provence",
    info: "A region known for its picturesque lavender fields, charming villages."
},
{
    img: `/images/France14.jpg`,
    title: "Saint-Tropez",
    info: "A chic coastal town on the French Riviera, famous for its glamorous lifestyle ."
},
{
    img: `/images/France15.jpg`,
    title: "Strasbourg",
    info: "Renowned for its beautiful half-timbered houses, stunning Gothic cathedral."
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

$(document).ready(function () {
    animateCardsOnLoad();

    $(window).on("scroll", function () {
        animateCardsOnScroll();
    });
});

function animateCardsOnLoad() {
    $(".cities-card").each(function (index) {
        $(this).delay(200 * index).animate({
            opacity: 1,
            transform: "translateY(0)"
        }, 400);
    });
}

function animateCardsOnScroll() {
    $(".cities-card").each(function () {
        const cardTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        if (cardTop < windowBottom) {
            $(this).animate({
                opacity: 1,
                transform: "translateY(0)"
            }, 400);
        }
    });
}