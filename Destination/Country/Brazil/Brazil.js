const citiesData = [{
    img: `/images/Brazil1.jpg`,
    title: "Belo Horizonte",
    info: "The capital of the state of Minas Gerais, Known for its welcoming atmosphere."
},
{
    img: `/images/Brazil2.jpeg`,
    title: "Brasilia",
    info: "The capital city of Brazil, Brasília is renowned for its modernist architecture ."
},
{
    img: `/images/Brazil3.jpg`,
    title: "Florianopolis",
    info: "Situated in Western Brazil, known for its breathtaking Cable Beach."
},
{
    img: `/images/Brazil4.webp`,
    title: "Fortaleza",
    info: "Another coastal gem in northeastern Brazil, It offers beautiful beaches."
},
{
    img: `/images/Brazil5.jpg`,
    title: "Manus",
    info: "Manaus, a gateway to the breathtaking Amazon Rainforest."
},
{
    img: `/images/Brazil6.jpg`,
    title: "Porto Alegre",
    info: "The capital of Rio Grande do Sul, Porto Alegre is a city."
},
{
    img: `/images/Brazil7.jpeg`,
    title: "Recife",
    info: "This coastal city in Pernambuco is famous for its historic sites."
},
{
    img: `/images/Brazil8.jpg`,
    title: "Rio de Janeiro",
    info: "Known for its iconic beaches, particularly Copacabana and Ipanema."
},
{
    img: `/images/Brazil9.jpg`,
    title: "Salvador",
    info: "Salvador, a city steeped in Afro-Brazilian heritage and colorful history."
},
{
    img: `/images/Brazil10.jpeg`,
    title: "Sao Paulo",
    info: "São Paulo, the largest city in Brazil, offers a vibrant blend of culture."
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