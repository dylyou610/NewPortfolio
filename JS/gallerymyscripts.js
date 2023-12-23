// Fade in
window.addEventListener('scroll', reveal);

function reveal() {
    const revealElements = document.querySelectorAll('.reveal');
    const revealpoint = 150;
    const windowheight = window.innerHeight;

    revealElements.forEach(element => {
        const revealtop = element.getBoundingClientRect().top;

        element.classList.toggle('active', revealtop < windowheight - revealpoint);
    });
}

document.querySelectorAll('.reveal').forEach(element => {
    element.addEventListener('mouseenter', () => element.classList.add('active'));
    element.addEventListener('mouseleave', () => element.classList.remove('active'));
});