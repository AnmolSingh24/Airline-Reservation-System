const destinationData = [{
    img: `/images/Destination-Img1.jpg`,
    title: "India",
    info: "India has many customs and rituals that may seem bizarre to anyone.",
    url: `/Destination/Country/India/India.html`
},
{
    img: `/images/Destination-Img2.jpeg`,
    title: "South Korea",
    info: " Known for its technological advancements, K-pop culture, and historic sites.",
    url: `/Destination/Country/South-Korea/SouthKorea.html`
},
{
    img: `/images/Destination-Img3.jpg`,
    title: "UAE",
    info: "Known for its modern skyscrapers,iconic landmarks like Burj Khalifa.",
    url: `/Destination/Country/UAE/UAE.html`
},
{
    img: `/images/Destination-Img4.jpg`,
    title: "Greece",
    info: "Know for its ancient history, picturesque island and santorini's sunsets.",
    url: `/Destination/Country/South-Korea/SouthKorea.html`
},
{
    img: `/images/Destination-Img5.jpg`,
    title: "USA",
    info: "Experience the bustling metropolis and rich cultural heritage.",
    url: `/Destination/Country/USA/USA.html`
},
{
    img: `/images/Destination-Img6.webp`,
    title: "Netherlands",
    info: "Known for its tulip fields, charming canals, and cultural landmarks.",
    url: `/Destination/Country/Netherlands/Netherlands.html`
},
{
    img: `/images/Destination-Img7.jpg`,
    title: "China",
    info: "China is a great country with great Chinese culture by fascinating people.",
    url: `/Destination/Country/China/China.html`
},
{
    img: `/images/Destination-Img8.jpg`,
    title: "Thailand",
    info: "Having never taken a decent holiday before, then visit on a trip to Thailand.",
    url: `/Destination/Country/Thailand/Thailand.html`
},
{
    img: `/images/Destination-Img9.avif`,
    title: "Japan",
    info: "Famous for its advanced technology, unique pop culture, and traditional arts.",
    url: `/Destination/Country/Japan/Japan.html`
},
{
    img: `/images/Destination-Img10.jpg`,
    title: "United Kingdom",
    info: "Known for its historic castles, royal heritage, and contributions to literature.",
    url: `/Destination/Country/UK/UK.html`
},
{
    img: `/images/Destination-Img11.jpg`,
    title: "France",
    info: "Famous for its exquisite cuisine, art museums, and romantic ambiance.",
    url: `/Destination/Country/France/France.html`
},
{
    img: `/images/Destination-Img13.jpg`,
    title: "Italy",
    info: "Known for its rich history, ancient ruins, and delicious pasta and pizza.",
    url: `/Destination/Country/Italy/Italy.html`
},
{
    img: `/images/Destination-Img12.jpg`,
    title: "Germany",
    info: "Famous for its engineering prowess, Oktoberfest celebrations, and fairy-tale.",
    url: `/Destination/Country/Germany/Germany.html`
},
{
    img: `/images/Destination-Img14.jpeg`,
    title: "Canada",
    info: "Known for its stunning natural landscapes, friendly people and cities.",
    url: `/Destination/Country/Canada/Canada.html`
},
{
    img: `/images/Destination-Img15.jpg`,
    title: "Australia",
    info: "Famous for its unique wildlife, beautiful beaches, and outdoor lifestyle.",
    url: `/Destination/Country/Australia/Australia.html`
},
{
    img: `/images/Destination-Img16.jpg`,
    title: "Brazil",
    info: "Known for its vibrant Carnival festival, soccer passion, Amazon forest.",
    url: `/Destination/Country/Brazil/Brazil.html`
},
{
    img: `/images/Destination-Img17.jpg`,
    title: "Russia",
    info: "Famous for its vast size, rich cultural heritage, iconic landmarks like Kremlin.",
    url: `/Destination/Country/Russia/Russia.html`
},
{
    img: `/images/Destination-Img18.jpg`,
    title: "Spain",
    info: "Famous for its vibrant festivals, flamenco music and dance, architecture.",
    url: `/Destination/Country/Spain/Spain.html`
},
{
    img: `/images/Destination-Img19.jpg`,
    title: "Mexico",
    info: "Known for its ancient Mayan and Aztec ruins, colorful traditions, cuisine."
},
{
    img: `/images/Destination-Img20.jpg`,
    title: "New Zealand",
    info: "Famous for its stunning landscapes, adventure sports, Maori culture.",
    url: `/Destination/Country/New-Zealand/New-Zealand.html`
}]

destinationData.sort((a, b) => a.title.localeCompare(b.title));

const place = document.querySelectorAll('.destination-grid');
const showPlace = () => {

    let destination = "";
    for (let i = 0; i < destinationData.length; i++) {
        let innerHTML = `
        <div class="destination-card">
            <img src="${destinationData[i].img}">            
            <h3>${destinationData[i].title}</h3>
            <p>${destinationData[i].info}</p>
            <a href=${destinationData[i].url}>View Cities</a>
        </div>`;

        destination += innerHTML;
    }
    place.forEach((element) => {
        element.innerHTML = destination;
    });
}
showPlace();