const citiesData = [{
    img: `/images/SouthKorea1.jpg`,
    title: "Busan",
    info: "Known for its beautiful beaches and vibrant seafood markets."
},
{
    img: `/images/SouthKorea2.jpg`,
    title: "Daegu",
    info: " Famous for its traditional culture and annual colorful lantern festival."
},
{
    img: `/images/SouthKorea3.jpg`,
    title: "Gwangju",
    info: "Renowned for its rich historical heritage and progressive art scene."
},
{
    img: `/images/SouthKorea4.jpg`,
    title: "Incheon",
    info: "Notable for its modern architecture and bustling international airport hub."
},
{
    img: `/images/SouthKorea5.jpg`,
    title: "Jeju Island ",
    info: "A picturesque island destination celebrated for its natural landscapes."
},
{
    img: `/images/SouthKorea6.jpeg`,
    title: "Seoul",
    info: "South Korea's capital city, renowned for its dynamic blend of ancient palaces."
},
{
    img: `/images/SouthKorea7.jpg`,
    title: "Ulsan",
    info: "Known for its industrial significance as the country's major industrial hub."
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