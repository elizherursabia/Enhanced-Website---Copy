$(document).ready(function () {
    $(".already-user").click(function () {
        console.log("Already user button clicked");
        window.location.href = "login-user.html";
    });

    $(".get-started").click(function () {
        console.log("Get started button clicked");
        window.location.href = "register-user.html";
    });

    $(".login-btn").click(function () {
        console.log("Login button clicked");
        window.location.href = "login-user.html";
    })
});