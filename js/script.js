document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".listitem li a");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
