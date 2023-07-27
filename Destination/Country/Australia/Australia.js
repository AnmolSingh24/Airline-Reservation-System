const citiesData = [{
    img: `/images/Australia1.jpg`,
    title: "Adelaide",
    info: "Known for its wine regions, especially the nearby Barossa Valley."
},
{
    img: `/images/Australia2.jpg`,
    title: "Alice Springs",
    info: "Located in the heart of the Australian Outback, landscapes of Red Centre."
},
{
    img: `/images/Australia3.jpg`,
    title: "Brisbane",
    info: "The capital of Queensland, offering laid-back atmosphere, parks."
},
{
    img: `/images/Australia4.jpg`,
    title: "Broome",
    info: "Situated in Western Australia, known for its breathtaking Cable Beach."
},
{
    img: `/images/Australia5.jpg`,
    title: "Byron Bay",
    info: "A coastal town in New South Wales known for its stunning beaches."
},
{
    img: `/images/Australia6.jpg`,
    title: "Cairns",
    info: " A gateway to the Great Barrier Reef and the Daintree Rainforest."
},
{
    img: `/images/Australia7.jpg`,
    title: "Canberra",
    info: "Australia's capital city, home to important national institutions and museums"
},
{
    img: `/images/Australia8.jpg`,
    title: "Darwin",
    info: "The capital of the Northern Territory, known for unique wildlife."
},
{
    img: `/images/Australia9.jpg`,
    title: "Gold Coast",
    info: "Famous for its theme parks, beautiful beaches, and vibrant nightlife."
},
{
    img: `/images/Australia10.avif`,
    title: "Hobart",
    info: "Located in Tasmania, known for its historic buildings, arts scene."
},
{
    img: `/images/Australia11.webp`,
    title: "Melbourne",
    info: "A cultural hub with a thriving arts scene, famous for its laneways."
},
{
    img: `/images/Australia12.jpg`,
    title: "New Castle",
    info: "Known for its beautiful beaches, surfing spots, and thriving arts."
},
{
    img: `/images/Australia13.jpg`,
    title: "Perth",
    info: " Located on the west coast, Perth boasts beaches, a relaxed lifestyle"
},
{
    img: `/images/Australia14.webp`,
    title: "Sydney",
    info: " Australia's largest city, known for landmarks like the Sydney Opera House "
},
{
    img: `/images/Australia15.jpg`,
    title: "Wollongong",
    info: "It has vibrant coastal city located in South Wales, known for its beaches."
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