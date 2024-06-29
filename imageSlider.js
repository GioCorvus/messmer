document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.character-image img');
    let currentIndex = 0;

    function changeImage(step) {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + step + images.length) % images.length;
        images[currentIndex].classList.add('active');
    }

    document.querySelector('.left-arrow').addEventListener('click', () => changeImage(-1));
    document.querySelector('.right-arrow').addEventListener('click', () => changeImage(1));
});
