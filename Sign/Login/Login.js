var users = JSON.parse(localStorage.getItem("userData")) || [];
console.log(users);

const login = (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById("username");
    const loginPassword = document.getElementById("password");
    const userFound = users?.find(user => user.username === loginUsername.value.trim() && user.password === loginPassword.value.trim());
    if (userFound) {

        var msg = document.getElementById("snackbar");
        msg.className = "show";
        setTimeout(() => {
            msg.className = msg.className.replace("show", "");
        }, 4000);

        window.location = "index.html"
    } else {
        alert("❌ Incorrect username or password");
    }
}

document.getElementById("login").addEventListener('click', login);