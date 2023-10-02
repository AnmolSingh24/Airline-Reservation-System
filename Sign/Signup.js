document.getElementById("form").addEventListener('submit', SignUpRegister)

function SignUpRegister(e) {
    e.preventDefault();

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    const userData = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    }

    // if (username.length > 4 && username.length < 10) {
    //     document.getElementById("username-error").innerHTML = "Username must be 5 to 10 characters long.";
    //     return false;
    // }

    // document.querySelector("#username-error").style.visibility = "visible";
    // setTimeout(() => {
    //     document.querySelector("#username-error").style.visibility = "hidden";
    // }, 3000);

    // if (password.length < 8) {
    //     document.getElementById("password-error").innerHTML = "Password must be at least 8 characters long.";
    //     return false;
    // }

    // document.querySelector("#password-error").style.visibility = "visible";
    // setTimeout(() => {
    //     document.querySelector("#password-error").style.visibility = "hidden";
    // }, 3000);


    // if (confirmPassword.length < 8) {
    //     document.getElementById("confirm-password-error").innerHTML = "Confirm Password must be same as Password.";
    //     return false;
    // } else if (confirmPassword !== password) {
    //     document.getElementById("confirm-password-error").innerHTML = "Password does not match";
    //     return false;
    // }

    // document.querySelector("#confirm-password-error").style.visibility = "visible";
    // setTimeout(() => {
    //     document.querySelector("#confirm-password-error").style.visibility = "hidden";
    // }, 3000);

    console.log(userData);
    var sign2 = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(JSON.stringify(sign2))
    sign2.push(userData);
    console.log(JSON.stringify(sign2));
    localStorage.setItem("userData", JSON.stringify(sign2));

    //Redirect user to login page
    window.location = "/Sign/Login/Login.html"

    // reset form
    document.getElementById("form").reset();

    var msg = document.getElementById("snackbar");
    msg.className = "show";
    setTimeout(() => {
        msg.className = msg.className.replace("show", "");
    }, 4000);
}
