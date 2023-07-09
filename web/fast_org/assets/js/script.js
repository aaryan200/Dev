const toggleButton = document.getElementsByClassName('fast__navbar-toggle-button')[0];
const navbarLinks = document.getElementsByClassName('fast__navbar_menu')[0];

// toggleButton.addEventListener('click', (e) => {
//     e.preventDefault();
// });

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

var swiper = new Swiper(".fast__slide-content", {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide: 'true',
    fade: 'true',
    // grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        }
    },
});