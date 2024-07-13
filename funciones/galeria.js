document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalImg = document.querySelector(".modal-image");
    const close = document.querySelector(".close");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const images = document.querySelectorAll(".grid-wrapper img");
    let currentIndex;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            currentIndex = index;
        });
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImg.src = images[currentIndex].src;
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = images[currentIndex].src;
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
