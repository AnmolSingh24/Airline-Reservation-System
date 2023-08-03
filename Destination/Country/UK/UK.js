const citiesData = [{
    img: `/images/UK1.jpeg`,
    title: "Bath",
    info: "Known for well-preserved Roman-built baths, stunning Georgian architecture."
},
{
    img: `/images/UK2.jpg`,
    title: "Belfast",
    info: "The capital of Northern Ireland, famous for its shipbuilding history."
},
{
    img: `/images/UK3.jpg`,
    title: "Birmingham",
    info: "A vibrant city known for its industrial heritage, diverse cultural scene."
},
{
    img: `/images/UK4.jpeg`,
    title: "Brighton",
    info: "A popular seaside resort town known for its pebble beach, iconic Brighton Pier."
},
{
    img: `/images/UK5.jpg`,
    title: "Bristol",
    info: "Known for its creative arts scene, maritime history, the Clifton Suspension Bridge."
},
{
    img: `/images/UK6.webp`,
    title: "Cambridge",
    info: "A historic university city renowned for prestigious University of Cambridge."
},
{
    img: `/images/UK7.jpg`,
    title: "Cardiff",
    info: "The capital of Wales, famous for its Welsh culture, Cardiff Castle."
},
{
    img: `/images/UK8.jpg`,
    title: "Edinburg",
    info: " The capital of Scotland, renowned for its historic Edinburgh Castle."
},
{
    img: `/images/UK9.jpg`,
    title: "Glasgow",
    info: "Scotland's largest city, known for its arts scene, Victorian architecture."
},
{
    img: `/images/UK10.jpg`,
    title: "Liverpool",
    info: "Famous for its musical heritage as the birthplace of The Beatles."
},
{
    img: `/images/UK11.jpg`,
    title: "London",
    info: " The iconic capital city, celebrated for world-class museums, cultural diversity."
},
{
    img: `/images/UK12.jpg`,
    title: "Manchester",
    info: "Known for football teams, rich industrial heritage, and thriving music scene."
},
{
    img: `/images/UK13.jpg`,
    title: "Newcastle upon Tyne",
    info: "Known for vibrant nightlife, iconic Tyne Bridge, and friendly Geordie culture."
},
{
    img: `/images/UK14.jpg`,
    title: "Nottingham",
    info: "Famous for the legend of Robin Hood, medieval castle, historic Lace Market."
},
{
    img: `/images/UK15.jpg`,
    title: "Oxford",
    info: "A renowned university city with historic colleges, the Bodleian Library."
},
{
    img: `/images/UK16.jpg`,
    title: "Southampton",
    info: "Known for its maritime history, Titanic connection, and cruise ship terminals."
},
{
    img: `/images/UK17.jpg`,
    title: "York",
    info: " Famous for well-preserved medieval architecture, including York Minster."
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