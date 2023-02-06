class MenuPrices {
    constructor() {
        this.sauces = {
            rhodium: 1.5,
            palladium: 1.79,
            gold: 1.21,
            eridium: 1.99,
        }
        this.toppings = {
            diamonds: 1.12,
            emeralds: 1.01,
            pinkDiamonds: 1.2,
            taaffeite: 1.9,
            painite: 1.79
        }
        this.protein = {
            anthrorodentia: 9.4,
            koaladropp: 2.1,
            lumberingGecko: 0.5,
            spincattle: 1.2,
            kuslolm: 1.212,
            senpaiSauce: 2.34
        }
        this.cheese = {
            zebraWormShavings: 1.8,
            nettleweb: 1.9,
            monkeygakk: 1.101
        }
    }
    updateDynamicMenu(reference) {
        let randomNum = Math.ceil(Math.random() * 10);
        for (let menuItem in this.sauces) {
            this.sauces.rhodium = reference.sauces.rhodium * randomNum;
            this.sauces.palladium = reference.sauces.palladium * randomNum;
            this.sauces.gold = reference.sauces.gold * randomNum;
            this.sauces.eridium = reference.sauces.eridium * randomNum;
        }
        for (let menuItem in this.sauces) {
            this.toppings.diamonds = reference.toppings.diamonds * randomNum;
            this.toppings.emeralds = reference.toppings.emeralds * randomNum;
            this.toppings.pinkDiamonds = reference.toppings.pinkDiamonds * randomNum;
            this.toppings.taaffeite = reference.toppings.taaffeite * randomNum;
            this.toppings.painite = reference.toppings.painite * randomNum;
        }
        for (let menuItem in this.sauces) {
            this.protein.anthrorodentia = reference.protein.anthrorodentia * randomNum;
            this.protein.koaladropp = reference.protein.koaladropp * randomNum;
            this.protein.lumberingGecko = reference.protein.lumberingGecko * randomNum;
            this.protein.spincattle = reference.protein.spincattle * randomNum;
            this.protein.kuslolm = reference.protein.kuslolm * randomNum;
            this.protein.senpaiSauce = reference.protein.senpaiSauce * randomNum;
        }
        for (let menuItem in this.sauces) {
            this.cheese.zebraWormShavings = reference.cheese.zebraWormShavings * randomNum;
            this.cheese.nettleweb = reference.cheese.nettleweb * randomNum;
            this.cheese.monkeygakk = reference.cheese.monkeygakk * randomNum;
        }
    }
    onInterval(reference) {
        setInterval(this.updateDynamicMenu(reference), 500);
    }
}

window.addEventListener("load", function() {

    
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    ///////////////////////////////////////SCROLL DOWN

    //I consider the entirety of this code to be UI logic
    
    
    // menuDynamic.onInterval(menuReference, 500);
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

    

    function carousel() {
        console.log("hello");
        let counterPrices = 0;
        let counterCarousel = 0;
        let imagesForCarousel = document.getElementsByClassName("images");
        console.log(counterPrices);
        counterCarousel++;
        counterPrices++;
        if (counterPrices === 3) {
            const menuReference = new MenuPrices;
            const menuDynamic = new MenuPrices;
            menuDynamic.updateDynamicMenu(menuReference);
            document.getElementsByClassName("saucesRhodium").innerText = menuDynamic.sauces.rhodium;
            counterPrices = 0;
        }
        if (counterCarousel === 47) {
            counterCarousel = 0;
            for (let i = 0; i < imagesForCarousel.length; i++) {
                imagesForCarousel[i].style.display = "none";
            }
            let slideIndex = 0;
            slideIndex++;
            if (slideIndex > imagesForCarousel.length) {
            slideIndex = 1
            }
            imagesForCarousel[slideIndex-1].style.display = "block";
            
        }
        
        
    }
    setTimeout(carousel(), 100); // Change image every 4.7 seconds
    

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

    //UI Logic
    const orderForm = document.getElementById("orderForm");
    orderForm.addEventListener("submit", e => {
        e.preventDefault();
        const arrayOfBoxValues = document.getElementsByClassName("checkbox");
        const checkedValues = filterForChecked(arrayOfBoxValues);
        const sumBTC = calculateTotalSum(checkedValues);
        console.log(sumBTC);
        


        //Business Logic

        function roundFloatTo3Dec(float) {
            const roundedFloat = Math.round(float * 100) / 100;
            return roundedFloat;
        }

        function calculateTotalSum(arrayToSum) {
            arrayToSum.forEach(constantValue => {
                sum = sum + (parseFloat(constantValue) * ((Math.random() * 9) + 1));
            })
            sum = roundFloatTo3Dec(sum);
            return sum;
        }

        function filterForChecked(unfilteredArray) {
            const arrayOfCheckedValues = [];
            for (let i = 0; i < unfilteredArray.length; i++) {
                if (unfilteredArray[i].checked) {
                    arrayOfCheckedValues.push(unfilteredArray[i].value);
                }
            }
            return arrayOfCheckedValues;
        }

    });

    //console.log(calculateTotalSum(array));



});