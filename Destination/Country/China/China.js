const citiesData = [{
    img: `/images/China1.jpg`,
    title: "Beijing",
    info: " The capital city of China, known for Great Wall of China."
},
{
    img: `/images/China2.jpg`,
    title: "Chengdu",
    info: "Famous for its spicy Sichuan cuisine, It is also home to the Giant Panda."
},
{
    img: `/images/China3.jpeg`,
    title: "Guilin",
    info: " Renowned for its stunning karst landscape,It offers landscapes of mountains."
},
{
    img: `/images/China4.jpg`,
    title: "Hangzhou",
    info: "Hangzhou is celebrated for its natural beauty, tea culture, historic temples."
},
{
    img: `/images/China5.jpeg`,
    title: "Hong Kong",
    info: "A vibrant global financial hub, Hong Kong boasts a stunning skyline."
},
{
    img: `/images/China6.jpg`,
    title: "Jiuzhaigou Valley ",
    info: "Located in Sichuan province, It is a UNESCO World Heritage site."
},
{
    img: `/images/China7.jpg`,
    title: "Lhasa",
    info: "As the capital of Tibet, Lhasa is famous for its rich Tibetan Buddhist culture."
},
{
    img: `/images/China8.jpg`,
    title: "Macau",
    info: "Often called the Las Vegas of Asia, It is famous for its world-class casino."
},
{
    img: `/images/China9.jpg`,
    title: "Shanghai",
    info: "One of China's most modern cities, It is known for its futuristic skyline."
},
{
    img: `/images/China10.jpg`,
    title: "Suzhou",
    info: "Suzhou is known for its classical Chinese gardens, traditional water towns."
},
{
    img: `/images/China11.jpg`,
    title: "Terracotta Army",
    info: "Located in Xi'an, this is a collection of life-size clay soldiers and horses."
},
{
    img: `/images/China12.webp`,
    title: "The Great Wall of China",
    info: "The Great Wall stretches over thousands of km."
},
{
    img: `/images/China13.jpeg`,
    title: "Yangshuo",
    info: "A small town near Guilin, It is famous for its, karst mountains."
},
{
    img: `/images/China14.jpg`,
    title: "Yunnan Province",
    info: "Yunnan is a diverse province in southwestern China."
},
{
    img: `/images/China15.jpg`,
    title: "Zhangjiajie",
    info: "Known for its unique sandstone pillars, Zhangjiajie National Forest."
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