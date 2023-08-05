const login = (e) => {
    e.preventDefault();
    var users = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(users);
    const loginUsername = document.getElementById("username");
    const loginPassword = document.getElementById("password");
    let userFound;
    let size = users.length;
    for (let i = 0; i < size; i++) {
        let user = users[i];
        if (user.username === loginUsername.value.trim() && user.password === loginPassword.value.trim()) {
            userFound = user; break;
        }
    }
    console.log(userFound);
    if (userFound) {

        var msg = document.getElementById("snackbar");
        msg.className = "show";
        setTimeout(() => {
            msg.className = msg.className.replace("show", "");
        }, 4000);
        return;
    }
    if (loginUsername !== userFound && loginPassword !== userFound) {
        var errorMsg = document.getElementById("errorSnackbar");
        errorMsg.className = "showError";
        setTimeout(() => {
            msg.className = errorMsg.className.replace("showError", "");
        }, 4000);
        return;
    }

    alert("❌ Incorrect username or password");

}

document.getElementById("login").addEventListener('click', login);