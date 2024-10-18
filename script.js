document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.cards').classList.add('visible');
            } else {
                entry.target.querySelector('.cards').classList.remove('visible'); 
            }
        });
    }, { threshold: 0.5 }); //treshold kliatan

    const cardContainers = document.querySelectorAll('.cards-container');
    cardContainers.forEach(container => {
        observer.observe(container);
    });
});

window.addEventListener('scroll', function() {
    var navigation = document.querySelector('.navigation');
    if (window.scrollY > 0) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
    });

