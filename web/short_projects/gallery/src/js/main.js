const images = document.querySelectorAll('.gallery-image');

let imgSrc;
let selectedImage;

const modal = document.querySelector('.modal');
const modalItem = document.querySelector('.modal-item');

const clickedImage = document.createElement('img');

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        imgSrc = e.target.src;
        selectedImage = imgSrc;
        modal.style.display = "initial";
        clickedImage.setAttribute("src", `${selectedImage}`);
        clickedImage.setAttribute("class", "modal-image");

        modalItem.appendChild(clickedImage);

        // disable scroll
        document.body.style.overflow = "hidden";
    });
});

// close button
const close = document.querySelector(".modal-close");
const modalClose = () => {
    modal.style.display = "none";
    clickedImage.removeAttribute("src");
    // enable scroll
    document.body.style.overflow = "initial";
};

close.addEventListener("click", modalClose);

// close when clicked outside

window.onclick = function (e) {
    if (e.target === modal) modalClose();
}