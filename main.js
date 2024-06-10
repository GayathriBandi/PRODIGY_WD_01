document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.nav-link[href^="#"]');

    for (const link of scrollLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
});
