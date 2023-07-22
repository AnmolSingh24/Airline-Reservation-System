const destinationData = [{
    img: `/images/Destination-Img1.jpg`,
    title: "India",
    info: "India has many customs and rituals that may seem bizarre to anyone."
},
{
    img: `/images/Destination-Img2.jpg`,
    title: "New York",
    info: "Experience the vibrant atmosphere of the Big Apple."
},
{
    img: `/images/Destination-Img3.jpg`,
    title: "London",
    info: "Discover the historic landmarks and cultural treasures of London."
},
{
    img: `/images/Destination-Img4.webp`,
    title: "Paris",
    info: "Indulge in the romantic ambiance and artistic delights of Paris."
},
{
    img: `/images/Destination-Img5.jpg`,
    title: "USA",
    info: "Experience the bustling metropolis and rich cultural heritage."
},
{
    img: `/images/Destination-Img6.avif`,
    title: "Dubai",
    info: "Dubai is a destination that mixes modern culture with history."
},
{
    img: `/images/Destination-Img7.jpg`,
    title: "China",
    info: "China is a great country with great Chinese culture by fascinating people."
},
{
    img: `/images/Destination-Img8.jpg`,
    title: "Thailand",
    info: "Having never taken a decent holiday before, then visit on a trip to Thailand."
},
{
    img: `/images/Destination-Img9.avif`,
    title: "Japan",
    info: "Famous for its advanced technology, unique pop culture, and traditional arts."
},
{
    img: `/images/Destination-Img10.jpg`,
    title: "United Kingdom",
    info: "Known for its historic castles, royal heritage, and contributions to literature."
},
{
    img: `/images/Destination-Img11.jpg`,
    title: "France",
    info: "Famous for its exquisite cuisine, art museums, and romantic ambiance."
},
{
    img: `/images/Destination-Img13.jpg`,
    title: "Italy",
    info: "Known for its rich history, ancient ruins, and delicious pasta and pizza."
},
{
    img: `/images/Destination-Img12.jpg`,
    title: "Germany",
    info: "Famous for its engineering prowess, Oktoberfest celebrations, and fairy-tale."
},
{
    img: `/images/Destination-Img14.jpeg`,
    title: "Canada",
    info: "Known for its stunning natural landscapes, friendly people and cities."
},
{
    img: `/images/Destination-Img15.jpg`,
    title: "Australia",
    info: "Famous for its unique wildlife, beautiful beaches, and outdoor lifestyle."
},
{
    img: `/images/Destination-Img16.jpg`,
    title: "Brazil",
    info: "Known for its vibrant Carnival festival, soccer passion, Amazon forest."
},
{
    img: `/images/Destination-Img17.jpg`,
    title: "Russia",
    info: "Famous for its vast size, rich cultural heritage, iconic landmarks like Kremlin."
},
{
    img: `/images/Destination-Img18.jpg`,
    title: "Spain",
    info: "Famous for its vibrant festivals, flamenco music and dance, architecture."
},
{
    img: `/images/Destination-Img19.jpg`,
    title: "Mexico",
    info: "Known for its ancient Mayan and Aztec ruins, colorful traditions, cuisine."
},
{
    img: `/images/Destination-Img20.jpg`,
    title: "New Zealand",
    info: "Famous for its stunning landscapes, adventure sports, Maori culture."
}]

const place = document.querySelectorAll('.destination-grid');
const showPlace = () => {

    let destination = "";
    for (let i = 0; i < destinationData.length; i++) {
        let innerHTML = `
        <div class="destination-card">
            <img src="${destinationData[i].img}">            
            <h3>${destinationData[i].title}</h3>
            <p>${destinationData[i].info}</p>
            <button>View Cities</button>
        </div>`;

        destination += innerHTML;
    }
    place.forEach((element) => {
        element.innerHTML = destination;
    });
}
showPlace();