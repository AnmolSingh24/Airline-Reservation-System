const citiesData = [{
    img: `/images/Thailand1.jpg`,
    title: "Barcelona",
    info: "The vibrant capital city known for its bustling street life, ornate temples."
},
{
    img: `/images/Thailand2.jpg`,
    title: "Chiang Mai",
    info: " Cultural hub in the north, famous for ancient temples, traditional festivals."
},
{
    img: `/images/Thailand3.jpg`,
    title: "Krabi",
    info: "A paradise for beach lovers and adventurers, renowned for stunning limestone cliffs."
},
{
    img: `/images/Thailand4.jpg`,
    title: "Pattaya",
    info: "  A bustling beach resort city known for its lively nightlife, water sports."
},
{
    img: `/images/Thailand5.jpg`,
    title: "Phuket",
    info: "Thailand's largest island, celebrated for its beautiful beaches."
},
{
    img: `/images/Thailand6.jpeg`,
    title: "Sukhothai",
    info: "A historical city, home to the UNESCO-listed Sukhothai Historical Park."
},
{
    img: `/images/Thailand7.jpeg`,
    title: "Ayutthaya",
    info: "Another historical gem with UNESCO World Heritage sites."
},
{
    img: `/images/Thailand8.webp`,
    title: "Hua Hin",
    info: " A beachside resort town popular for its relaxed atmosphere, golf courses."
},
{
    img: `/images/Thailand9.jpeg`,
    title: "Pai",
    info: "A laid-back town nestled in the mountains, attracting travelers with hippie vibe."
},
{
    img: `/images/Thailand10.jpeg`,
    title: "Phi Phi Islands",
    info: "An archipelago known for its breathtaking beaches, crystal-clear waters."
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