const hotelData = [{
    img: `/images/Hotel1.jpg`,
    title: "Royal Orchid Sheraton Hotel & Towers",
    location: "Bankok, Thailand",
    price: "$60 per night"
},
{
    img: `/images/Hotel2.jpg`,
    title: "The Taj Palace",
    location: "New Delhi, India",
    price: "$100 per night"
},
{
    img: `/images/Hotel3.jpg`,
    title: "Lara Beach Hotel",
    location: "Antalya, Turkey",
    price: "$150 per night"
},
{
    img: `/images/Hotel4.webp`,
    title: "Disney's Contemporary Resort",
    location: "Florida, United States",
    price: "$120 per night"
},
{
    img: `/images/Hotel5.jpg`,
    title: "The Taj Hotel",
    location: "Mumbai, India",
    price: "$200 per night"
},
{
    img: `/images/Hotel6.jpg`,
    title: "The Claridge Hotel",
    location: "New Delhi, India",
    price: "$250 per night"
}];

const hotelItems = document.querySelectorAll('.hotel-items');
const showHotel = () => {

    let hotel = "";
    for (let i = 0; i < hotelData.length; i++) {
        let innerHTML = `
        <div class="hotel-card">
          <img src="${hotelData[i].img}">
            <div class="hotel-details">
              <h3>${hotelData[i].title}</h3>
              <p><b>Location: </b>${hotelData[i].location}</p>
              <p><b>Price: </b>${hotelData[i].price}</p>
              <a href="/">View Info</a>
            </div>
        </div>`;
        hotel += innerHTML;
    }
    hotelItems.forEach((element) => {
        element.innerHTML = hotel;
    });
}
showHotel();