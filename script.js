document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('no-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, { threshold: 0.5 });


    const elementsToObserve = document.querySelectorAll('.cards, .text, .cards-container');
    elementsToObserve.forEach(element => {
        observer.observe(element);
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
