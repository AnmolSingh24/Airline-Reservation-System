const citiesData = [{
    img: `/images/Russia1.jpg`,
    title: "Moscow",
    info: " The capital and cultural hub known for iconic landmarks like Kremlin, Red Square."
},
{
    img: `/images/Russia2.jpg`,
    title: "Saint Petersburg",
    info: "Renowned for its elegant architecture, the State Hermitage Museum."
},
{
    img: `/images/Russia3.jpg`,
    title: "Kazan",
    info: "A vibrant city with a unique blend of Russian and Tatar cultures."
},
{
    img: `/images/Russia4.jpg`,
    title: "Novosibirsk",
    info: "Known for being Siberia's largest city and a major scientific, industrial center."
},
{
    img: `/images/Russia5.jpg`,
    title: "Yekaterinburg",
    info: "Famous as the city where the last Russian Emperor, Nicholas II."
},
{
    img: `/images/Russia6.jpg`,
    title: "Vladivostok",
    info: "A significant Pacific port city, marking the end point of Trans-Siberian Railway."
},
{
    img: `/images/Russia7.jpg`,
    title: "Sochi",
    info: "A popular resort city on the Black Sea coast, hosting the 2014 Winter Olympics."
},
{
    img: `/images/Russia8.jpg`,
    title: "Nizhny Novgorod",
    info: " Known for its well-preserved Kremlin and as a major cultural, economic."
},
{
    img: `/images/Russia9.jpg`,
    title: "Kaliningrad",
    info: "A unique exclave located between Poland and Lithuania."
},
{
    img: `/images/Russia10.jpg`,
    title: "Rostov-on-Don",
    info: "Celebrated for its lively nightlife, Cossack heritage, location on the Don River."
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