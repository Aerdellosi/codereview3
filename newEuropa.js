window.addEventListener("load", function() {
    let slideIndex = 0;
    carousel();

    function carousel() {
        let imagesForCarousel = document.getElementsByClassName("images");
        for (let i = 0; i < imagesForCarousel.length; i++) {
        imagesForCarousel[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > imagesForCarousel.length) {
        slideIndex = 1
    }

    imagesForCarousel[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4700); // Change image every 2 seconds
}

this.window.addEventListener("load", function() {




});











});