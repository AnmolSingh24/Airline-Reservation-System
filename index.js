$(document).ready(function () {
    $('.carousel').carousel({
        interval: 1500
    })
});

// Select ways (onw way or round trip)
const radioButtons = document.getElementsByName("way");

for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        console.log("Selected way: " + radioButton.value);
        break; // Exit the loop since only one can be checked
    }
}