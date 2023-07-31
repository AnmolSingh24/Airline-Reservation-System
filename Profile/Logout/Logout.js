const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', removeUserData);

function removeUserData(e) {
    e.preventDefault();

    //Remove user and clear the local storage
    localStorage.removeItem('userData');

    // Redirect user to the dashboard page
    window.location = "/Profile/Redirect/Page.html";
}