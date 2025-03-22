timeline(document.querySelectorAll('.timeline'));
jQuery('.timeline').timeline();


document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
