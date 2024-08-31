
    document.addEventListener("DOMContentLoaded", function () {
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
    });

    document.querySelectorAll('.navselect li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust offset if needed
            behavior: 'smooth'
        });
    });
});

