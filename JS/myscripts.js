/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function toggleDropdown() {
    var topnav = document.querySelector('.topnav');
    topnav.classList.toggle('show');
}



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

