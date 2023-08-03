const citiesData = [{
    img: `/images/USA1.jpg`,
    title: "Las Vegas, Neveda",
    info: "he Entertainment Capital of the World, famous for its dazzling casinos."
},
{
    img: `/images/USA2.jpeg`,
    title: "Los Angeles",
    info: " Known as the City of Angels and the epicenter of the entertainment industry."
},
{
    img: `/images/USA3.jpeg`,
    title: "Miami, Florida",
    info: "A vibrant coastal city known for its beautiful beaches, Art Deco architecture."
},
{
    img: `/images/USA4.jpg`,
    title: "New Orleans",
    info: "Famous for its unique Creole culture, jazz music, Mardi Gras celebrations."
},
{
    img: `/images/USA5.jpg`,
    title: "New York",
    info: "The Big Apple, renowned for its iconic landmarks like Times Square."
},
{
    img: `/images/USA6.jpeg`,
    title: "Orlando, Florida",
    info: "A major tourist destination for world-famous theme parks."
},
{
    img: `/images/USA7.jpg`,
    title: "San Francisco",
    info: "Known for its Golden Gate Bridge, cable cars, and diverse neighborhoods."
},
{
    img: `/images/USA8.webp`,
    title: "Seattle, Washington",
    info: " Famous for its coffee culture, iconic Space Needle, natural landscapes."
},
{
    img: `/images/USA9.jpg`,
    title: "Washington, D.C",
    info: "The nation's capital, home to iconic landmarks like the White House."
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