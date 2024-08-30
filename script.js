document.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const navItems = document.querySelectorAll(".navselect li");

    if (window.scrollY > 0) {
        header.classList.add("scrolled");
        navItems.forEach(item => item.classList.add("scrolled"));
    } else {
        header.classList.remove("scrolled");
        navItems.forEach(item => item.classList.remove("scrolled"));
    }
});