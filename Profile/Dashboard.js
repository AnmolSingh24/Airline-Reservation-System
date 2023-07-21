//User Details
document.addEventListener('DOMContentLoaded', () => {
    var details = JSON.parse(localStorage.getItem('userData'));
    console.log(details);

    for (let i = 0; i < details.length; i++) {
        console.log(details[i]);
        var user = document.createElement("div");
        user.innerHTML = "";
    }

    if (details) {
        document.getElementById('username').innerHTML = details[0].username;
        document.getElementById('email').innerHTML = details[0].email;

        console.log(details);
        console.log(details[i]);
    } else {
        document.getElementById('username').innerHTML = 'Username: N/A';
        document.getElementById('email').innerHTML = 'Email: N/A';
    }
});