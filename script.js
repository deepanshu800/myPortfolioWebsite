
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}
function closemenu() {
    sideMenu.style.right = "-200px";
}

const scriptURL =
    "https://script.google.com/macros/s/AKfycbwcE7A25xBh-5bmLR_qj8oyqJRj9jl0TFN4FFKxqI6hMIk3U2jsY3DTIZA9FR8rzf4fSA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});

function sent() {
    document.getElementById("msg").innerHTML = "Message sent successfully";
}


const tap = document.getElementById("about");
tap.onclick = function () {
    console.log("i m done")
}