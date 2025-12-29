document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling per i link interni
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Effetto "Blinking" opzionale sull'ASCII art o titoli
    const title = document.querySelector('.title');
    setInterval(() => {
        if(title.style.opacity == 0) title.style.opacity = 1;
        else title.style.opacity = 0; // Blink effect del cursore
    }, 500); // Ma qui ho messo blink del titolo del terminale, più soft.
});
