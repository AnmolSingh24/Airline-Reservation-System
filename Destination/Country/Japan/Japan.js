const citiesData = [{
    img: `/images/Japan1.jpg`,
    title: "Kyoto",
    info: "Known for its beautiful temples, traditional culture, stunning cherry blossoms."
},
{
    img: `/images/Japan2.jpg`,
    title: "Osaka",
    info: "Famous for its vibrant street food scene, modern architecture."
},
{
    img: `/images/Japan3.jpg`,
    title: "Tokyo",
    info: " Recognized for its historical significance as the target of the atomic bombing."
},
{
    img: `/images/Japan4.jpeg`,
    title: "Hiroshima",
    info: " Recognized for its historical significance as the target of the atomic bombing."
},
{
    img: `/images/Japan5.jpg`,
    title: "Nagoya",
    info: " Home to the iconic Nagoya Castle and Toyota Motor Corporation."
},
{
    img: `/images/Japan6.jpg`,
    title: "Sapporo",
    info: "Known for its annual Sapporo Snow Festival and delicious seafood cuisine."
},
{
    img: `/images/Japan7.jpg`,
    title: "Yokohama",
    info: "Renowned for its scenic waterfront, Minato Mirai district."
},
{
    img: `/images/Japan8.webp`,
    title: "Nara",
    info: " Famous for its ancient temples, including Todai-ji with the Great Buddha."
},
{
    img: `/images/Japan9.jpg`,
    title: "Fukuoka",
    info: "Celebrated for its lively Hakata district, rich culinary scene."
},
{
    img: `/images/Japan10.jpeg`,
    title: "Okinawa",
    info: "Prized for its stunning tropical islands, crystal-clear waters."
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