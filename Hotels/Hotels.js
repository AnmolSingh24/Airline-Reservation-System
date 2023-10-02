const hotelData = [];

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

async function hotelSearch1() {
    const url = 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?sort_order=REVIEW&locale=en_GB&checkin_date=2023-09-26&adults_number=1&domain=AE&region_id=2872&checkout_date=2023-09-27&payment_type=PAY_LATER%2CFREE_CANCELLATION&price_min=10&guest_rating_min=8&meal_plan=FREE_BREAKFAST&page_number=1&available_filter=SHOW_AVAILABLE_ONLY&children_ages=4%2C0%2C15&star_rating_ids=3%2C4%2C5&price_max=500&amenities=WIFI%2CPARKING&lodging_type=HOTEL%2CHOSTEL%2CAPART_HOTEL';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '59f66912aemshc9f0db0d32e7ebfp15542ajsna3f41fe29ff6',
            'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.properties;
    } catch (error) {
        console.error(error);
    }
}


const showResult = async () => {
    const result = await hotelSearch1();
    console.log(result);
    let index = "";
    for (const hotel of result) {
        const {
            name,
            price: { lead: { formatted } },
            propertyImage: { image: { url } },
            star
        } = hotel;
        console.log({ name, formatted, url, star });

        // Loop through the result array
        for (let i = 0; i < result.length; i++) {
            // Generate HTML for each object in the array
            let innerHTML = `
              <div class="hotel-card">
                <img src="${result[i].propertyImage.image.url}">
                <div class="hotel-details">
                  <h3>${result[i].name}</h3>
                  <p><b>Price: </b>${result[i].price.lead.formatted} per night</p>
                  <p><b>Ratings: </b>${result[i].star}/5</p>
                  <a href="/">View Info</a>
                </div>
              </div>`;

            index += innerHTML; // Append the HTML to the string
        }
    };
    hotelItems.forEach((e) => {
        e.innerHTML = index;
    });
}
showResult();


// async function hotelSearch2() {
//     const url = 'https://airbnb-search.p.rapidapi.com/property/search?query=New%20York%2C%20NY';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '59f66912aemshc9f0db0d32e7ebfp15542ajsna3f41fe29ff6',
//             'X-RapidAPI-Host': 'airbnb-search.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function hotelSearch3() {
//     const url = 'https://countriesnow.space/api/v0.1/countries';
//     const options = {
//         method: 'GET',
//         // headers: {
//         //     'X-RapidAPI-Key': '59f66912aemshc9f0db0d32e7ebfp15542ajsna3f41fe29ff6',
//         //     'X-RapidAPI-Host': 'hotels-com-provider.p.rapidapi.com'
//         // }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// }
// hotelSearch3();