const citiesData = [{
    img: `/images/UAE1.jpeg`,
    title: "Abu Dhabi",
    info: "The capital city known for its modern architecture, luxury shopping."
},
{
    img: `/images/UAE2.jpg`,
    title: "Ajman",
    info: "A charming city with a relaxed atmosphere, known for its traditional souks."
},
{
    img: `/images/UAE3.jpeg`,
    title: "Dubai",
    info: "A global metropolis known for its iconic skyscrapers, extravagant malls."
},
{
    img: `/images/UAE4.jpg`,
    title: "Fujairah",
    info: "A coastal city on the east coast, famous for beautiful beaches, historic forts."
},
{
    img: `/images/UAE5.jpg`,
    title: "Ras Al Khaimah",
    info: "Known for its stunning natural landscapes, including Hajar Mountains."
},
{
    img: `/images/UAE6.jpg`,
    title: "Sharjah",
    info: "A cultural hub with numerous museums, art galleries, a rich heritage."
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