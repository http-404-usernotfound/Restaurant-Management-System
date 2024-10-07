document.getElementById("submit").onclick = function() {
    if(document.getElementById("user").value == "admin" && document.getElementById("pass").value == "admin") {
        document.getElementById("error").style.visibility = "hidden";
        window.location.href="views/home.html";
    }

    else
        document.getElementById("error").style.visibility = "visible";
}