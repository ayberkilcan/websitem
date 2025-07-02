let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {  
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

const params = new URLSearchParams(window.location.search);
if (params.get("success") === "true") {
  const message = document.getElementById("success-message");
  if (message) {
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 5000);
    const newURL = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newURL);
  }
}
