document.addEventListener("DOMContentLoaded", function() {
    var cardHeaders = document.querySelectorAll(".card-header");
  
    cardHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
        var thisCard = header.closest(".card");
        var allCards = document.querySelectorAll(".card");
  
        allCards.forEach(function(card) {
          if (card !== thisCard) {
            card.querySelector(".card-header button").classList.add("collapsed");
            card.querySelector(".collapse").classList.remove("show");
          }
        });
  
        header.querySelector("button").classList.toggle("collapsed");
        document.querySelector(header.querySelector("button").getAttribute("data-bs-target")).classList.toggle("show");
      });
    });
  });
  