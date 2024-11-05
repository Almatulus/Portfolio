document.querySelectorAll('[data-target').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        const targetId = this.getAttribute('data-target'); 
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавно скроллим к секции
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}