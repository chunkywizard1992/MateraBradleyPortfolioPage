document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.cast-carousel');
    let index = 0;
    const items = carousel.querySelectorAll('.cast-member');
    const totalItems = items.length;
    function cycleCarousel() {
        items.forEach(item => {
            item.style.transform = 'translateX(100%)';
            item.style.display = 'none';
        });

        items[index].style.display = 'block';
        items[index].style.transform = 'translateX(0)';
        
        index = (index + 1) % totalItems;
    }

    setInterval(cycleCarousel, 6800); 
    cycleCarousel(); 
});
