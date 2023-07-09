const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // this will access the value of the attribute data-carousel-button. data-* attribute is used in html
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        // button.closest("[data-carousel]") retrieves the closest ancestor element of the button that has the attribute data-carousel
        // the closest method searches the DOM tree upwards until it finds an element with the specified selector.
        // querySelector then search for an element with attribute data-slides in children of the element found with closest method.
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        // [...slides.children] is an array of children of slides
        let len = slides.children.length
        // continous loop of images
        let newIndex = ([...slides.children].indexOf(activeSlide) + offset + len) % (len);
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
});