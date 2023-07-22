const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', removeUserData);

function removeUserData() {
    // e.preventDefault();

    //Remove user and clear the local storage
    localStorage.removeItem('details');

    // Redirect user to the dashboard page
    window.location = "/index.html";
}