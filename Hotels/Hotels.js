const hotelData = [{
    img: `/images/Hotel1.jpg`,
    title: "Royal Orchid Sheraton Hotel & Towers",
    location: "Location: Bankok, Thailand",
    price: "Price: $60 per night"
},
{
    img: `/images/Hotel2.jpg`,
    title: "The Taj Palace",
    location: "Location: New Delhi, India",
    price: "Price: $100 per night"
},
{
    img: `/images/Hotel3.jpg`,
    title: "Lara Beach Hotel",
    location: "Location: Antalya, Turkey",
    price: "Price: $150 per night"
},
{
    img: `/images/Hotel4.webp`,
    title: "Disney's Contemporary Resort",
    location: "Location: Florida, United States",
    price: "Price: $120 per night"
},
{
    img: `/images/Hotel5.jpg`,
    title: "The Taj Hotel",
    location: "Location: Mumbai, India",
    price: "Price: $200 per night"
},
{
    img: `/images/Hotel6.jpg`,
    title: "The Claridge Hotel",
    location: "Location: New Delhi, India",
    price: "Price: $250 per night"
}];

const hotelContainer = document.querySelector('.hotelItems');
const showHotel = () => {

    let hotel = "";
    for (let i = 0; i < hotelData.length; i++) {
        let innerHTML = `<div class="hotelItems">
        <img src="${hotelData[i].img}">
        <div class="hotel-details">
            <h3>${hotelData[i].title}</h3>
            <p>${hotelData[i].location}</p>
            <p>${hotelData[i].price}</p>
            <a href="/Hotels/BookHotel/Book-Hotel.html">Learn More</a>
        </div>
    </div>`;
        hotel += innerHTML;
    }
    hotelContainer.innerHTML = hotel;
}
showHotel();