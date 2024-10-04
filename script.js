let menuIcon = document.querySelector('#menu-icon'); // Corrected this line
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // This toggles the icon to show an 'X'
    navbar.classList.toggle('active'); // This shows/hides the navbar
};
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
