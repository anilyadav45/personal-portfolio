//SOME COOLS FEATURES 

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    }); 
});