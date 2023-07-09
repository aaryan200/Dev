const toggleButton = document.getElementsByClassName('navbar-toggle-button')[0];
const navbarLinks = document.getElementsByClassName('toggle-navbar')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});