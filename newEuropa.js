window.addEventListener("load", function() {

    
//////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////////////////SCROLL DOWN

//I consider the entirety of this code to be UI logic
    

    function getHeaderScrollButtons() {
        const menuButton = document.getElementById("menuButton");
        const psychorderButton = document.getElementById("psychorderButton");
        const headerButtonArray = [menuButton, psychorderButton];
        return headerButtonArray;
    }

    function scrollToOnClick() {
        window.scrollTo({
            left: 0, 
            top: 100000, 
            behavior: "smooth"
        });
    }

    const headerButtonArrayGlobal = getHeaderScrollButtons();

    headerButtonArrayGlobal[0].addEventListener("click", e => {
        e.preventDefault();
        scrollToOnClick();
    });

    headerButtonArrayGlobal[1].addEventListener("click", e => {
        e.preventDefault();
        scrollToOnClick();
    });

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    /////////////////////////////////////////SET EMAIL

    //UI Logic --> Come back to later, for some reason
    //it isn't working

    // const hrefEmail = this.document.getElementById("addHrefEmail");

    // hrefEmail.addEventListener("click", e => {
    //     window.location.href="mailto:johnhanifin.webdev@gmail.com";
    // })

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////CAROUSEL

    //I consider the entirety of this code to be UI logic

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
    setTimeout(carousel, 4700); // Change image every 4.7 seconds


}


window.addEventListener("load", function() {
    
    function getHeaderScrollButtons() {
        const menuButton = document.getElementById("menuButton");
        const psychorderButton = document.getElementById("psychorderButton");
        const headerButtonArray = [menuButton, psychorderButton];
        return headerButtonArray;
    }

    let test = getHeaderScrollButtons;
    console.log(test);
    console.log(getHeaderScrollButtons());
    console.log("test");

    

});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
////////////////////////PRE-MADE SCROLL & POPULATE

//UI Logic

//Business Logic


//////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////CALCULATE PRICES IN REAL TIME

//UI Logic

//Business Logic

//////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////HOW PRICES ARE CALCULATED










});