const citiesData = [{
    img: `/images/Netherlands1.jpg`,
    title: "Amsterdam",
    info: "The vibrant capital city famous for its picturesque canals, historic architecture."
},
{
    img: `/images/Netherlands2.jpg`,
    title: "Delft",
    info: " Renowned for its iconic blue and white Delftware pottery."
},
{
    img: `/images/Netherlands3.jpg`,
    title: "Eindhoven",
    info: "A modern city known for its innovation and design, and home."
},
{
    img: `/images/Netherlands4.jpg`,
    title: "Groningen",
    info: " A lively university town with a thriving arts scene and a bicycle-friendly atmosphere."
},
{
    img: `/images/Netherlands5.jpg`,
    title: "The Hague",
    info: "The political capital and home to the Dutch government."
},
{
    img: `/images/Netherlands6.jpg`,
    title: "Maastricht",
    info: "Celebrated for its picturesque old town, vibrant culinary scene."
},
{
    img: `/images/Netherlands7.jpg`,
    title: "Rotterdam",
    info: "A dynamic port city with impressive modern architecture."
},
{
    img: `/images/Netherlands8.jpg`,
    title: "Utrecht",
    info: "Known for its historic canals, bustling cafes, and the iconic Dom Tower."
},
{
    img: `/images/Netherlands9.jpg`,
    title: "Leiden",
    info: "A charming city famous for its esteemed university, historical significance."
},
{
    img: `/images/Netherlands10.jpg`,
    title: "Volendam",
    info: "A traditional fishing village beloved for its distinctive Dutch culture."
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