const citiesData = [{
    img: `/images/cities1.avif`,
    title: "Agra",
    info: "Home to the iconic Taj Mahal, one of the Seven Wonders of the World."
},
{
    img: `/images/cities2.jpg`,
    title: "Amritsar",
    info: "Home to the Golden Temple, the holiest shrine of Sikhism."
},
{
    img: `/images/cities3.jpg`,
    title: "Bengaluru",
    info: "India's tech hub known for its pleasant climate, parks, and vibrant nightlife."
},
{
    img: `/images/cities4.jpg`,
    title: "Chennai",
    info: "A major cultural and economic center with beautiful beaches."
},
{
    img: `/images/cities5.png`,
    title: "Darjeeling",
    info: "Famous for its tea plantations and stunning views of Kanchenjunga."
},
{
    img: `/images/cities6.jpg`,
    title: "Delhi",
    info: "The capital city, known for its historical landmarks, bustling markets."
},
{
    img: `/images/cities7.jpg`,
    title: "Gangtok",
    info: "Renowned for its captivating views of the Himalayas."
},
{
    img: `/images/cities8.jpg`,
    title: "Goa",
    info: "A coastal state known for its beautiful beaches, vibrant nightlife."
},
{
    img: `/images/cities9.webp`,
    title: "Haridwar",
    info: "A sacred city on the banks of the Ganges, famous for the Ganga Aarti."
},
{
    img: `/images/cities10.jpg`,
    title: "Hyderabad",
    info: "Famous for its historic monuments, delicious biryani, and IT industry."
},
{
    img: `/images/cities11.jpeg`,
    title: "Jaipur",
    info: "The Pink City known for its magnificent palaces, forts, and rich culture."
},
{
    img: `/images/cities12.jpg`,
    title: "Jaisalmer",
    info: "The Golden City known for its sand dunes, forts, and camel safaris."
},
{
    img: `/images/cities13.jpg`,
    title: "Kochi",
    info: "A coastal city in Kerala known for its backwaters, spice markets."
},
{
    img: `/images/cities14.jpg`,
    title: "Kolkata",
    info: "Formerly known as Calcutta, a city famous for Durga Puja"
},
{
    img: `/images/cities15.jpg`,
    title: "Leh",
    info: "The Ladakh, offers stunning landscapes and Tibetan-Buddhist culture."
},
{
    img: `/images/cities16.jpg`,
    title: "Manali",
    info: "A popular hill station and gateway to adventure activities in the Himalayas."
},
{
    img: `/images/cities17.jpg`,
    title: "Mumbai",
    info: " India's financial capital, famous for Bollywood, vibrant nightlife."
},
{
    img: `/images/cities18.jpg`,
    title: "Ooty",
    info: "A popular hill station in Tamil Nadu with scenic beauty."
},
{
    img: `/images/cities19.jpg`,
    title: "Rameshwaram",
    info: "A pilgrimage destination and home to Ramanathaswamy Temple."
},
{
    img: `/images/cities20.avif`,
    title: "Rishikesh",
    info: "A popular destination for spirituality, located on the banks of the Ganges River."
},
{
    img: `/images/cities21.webp`,
    title: "Shimla",
    info: "A hill station known for its pleasant climate and colonial-era architecture."
},
{
    img: `/images/cities22.jpg`,
    title: "Srinagar",
    info: " The summer capital of Jammu and Kashmir, known for its beautiful."
},
{
    img: `/images/cities23.jpg`,
    title: "Udaipur",
    info: " Known as the `City of Lakes` with stunning palaces, picturesque lakes."
},
{
    img: `/images/cities24.jpg`,
    title: "Varanasi",
    info: "One of the oldest cities in the world, known for its ghats and religious belief."
},
{
    img: `/images/cities25.jpg`,
    title: "Warangal",
    info: "Known for rich historic heritage, for the impressive Thousand Pillar Temple."
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