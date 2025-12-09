document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal for elements with 'fade-in-up' class
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all animated elements
    // Note: The CSS defines the initial state, JS triggers the final state if needed
    // However, the current CSS uses animation keyframes which run on load. 
    // This JS snippet is for scroll-triggered animations if you add more content down the page.
    
    // Optional: Add a subtle parallax effect to the hero text
    const heroText = document.querySelector('.hero h1');
    if(heroText) {
        window.addEventListener('scroll', () => {
            let scrolled = window.pageYOffset;
            heroText.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroText.style.opacity = 1 - (scrolled / 500);
        });
    }
});