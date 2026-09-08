function login() {

    let username =
        document.getElementById("username").value.trim();

    let password =
        document.getElementById("password").value;

    let role =
        document.getElementById("role").value;

    let message =
        document.getElementById("message");


    // Empty field check

    if (username === "" || password === "") {

        message.style.color = "red";

        message.innerText =
            "Please enter username and password.";

        return;
    }


    // Inspector Login

    if (
        role === "inspector" &&
        username === "inspector" &&
        password === "1234"
    ) {

        message.style.color = "green";

        message.innerText =
            "Inspector Login Successful!";

        localStorage.setItem("userRole", "inspector");

        setTimeout(function () {

            window.location.href =
                "inspector.html";

        }, 800);

        return;
    }


    // Admin Login

    if (
        role === "admin" &&
        username === "admin" &&
        password === "1234"
    ) {

        message.style.color = "green";

        message.innerText =
            "Admin Login Successful!";

        localStorage.setItem("userRole", "admin");

        setTimeout(function () {

            window.location.href =
                "admin.html";

        }, 800);

        return;
    }


    // Wrong login

    message.style.color = "red";

    message.innerText =
        "Invalid username or password.";
}
