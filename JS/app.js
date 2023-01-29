const barBtn = document.getElementById("navbar-bars")
const navBar = document.getElementById("navbar-links")

barBtn.addEventListener("click", ()=>{
    navBar.classList.toggle("showNavbar")
})