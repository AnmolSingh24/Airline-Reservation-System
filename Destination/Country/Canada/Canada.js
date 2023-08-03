const citiesData = [{
    img: `/images/Canada1.jpg`,
    title: "Banff",
    info: "The capital of the state of Minas Gerais, Known for its welcoming atmosphere."
},
{
    img: `/images/Canada2.jpg`,
    title: "Calgary",
    info: "The capital city of Canada, Brasília is renowned for its modernist architecture ."
},
{
    img: `/images/Canada3.jpeg`,
    title: "Edmonton",
    info: "Situated in Western Canada, known for its breathtaking Cable Beach."
},
{
    img: `/images/Canada4.avif`,
    title: "Halifax",
    info: "Another coastal gem in northeastern Canada, It offers beautiful beaches."
},
{
    img: `/images/Canada5.jpg`,
    title: "Montreal",
    info: "Manaus, a gateway to the breathtaking Amazon Rainforest."
},
{
    img: `/images/Canada6.jpeg`,
    title: "Ottawa",
    info: "The capital of Rio Grande do Sul, Porto Alegre is a city."
},
{
    img: `/images/Canada7.jpg`,
    title: "Quebec City",
    info: "This coastal city in Pernambuco is famous for its historic sites."
},
{
    img: `/images/Canada8.jpg`,
    title: "Toronto",
    info: "Known for its iconic beaches, particularly Copacabana and Ipanema."
},
{
    img: `/images/Canada9.jpeg`,
    title: "Vancouver",
    info: "Salvador, a city steeped in Afro-Canadaian heritage and colorful history."
},
{
    img: `/images/Canada10.jpg`,
    title: "Victoria",
    info: "São Paulo, the largest city in Canada, offers a vibrant blend of culture."
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