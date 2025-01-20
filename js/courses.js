// for menu button
const menuToggle = document.getElementById("menuToggle");
const pagesLinks = document.querySelector(".pages_links");
const socialIcons = document.querySelector(".social_icon");

menuToggle.addEventListener("click",() => {
    pagesLinks.classList.toggle("active");
    socialIcons.classList.toggle("active");
});

       // load more and show less

document.getElementById("load_more").addEventListener("click",function () {
    // select all cards
    const allCards = document.querySelectorAll(".card");
    //select hidden cards
    const hiddenCards = document.querySelectorAll(".card.hidden");

    if(this.textContent === "Load More"){
          // show 3 hidden cards
        let count = 0;
        hiddenCards.forEach(card => {
            if(count < 3){
                card.classList.remove("hidden");
                count++;
            }
        });

        // if no more cards change text into show less
        if(document.querySelectorAll(".card.hidden").length === 0){
            this.textContent = "Show Less";
        }    
    }
    else{
        // hide all cards except the first 6
        allCards.forEach((card,index) => {
            if(index >= 6){
                card.classList.add("hidden");
            }
        });

        // change button text back to load more
        this.textContent = "Load More";
    }
});