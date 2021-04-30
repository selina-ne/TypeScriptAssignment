(function () {
  'use strict';

  //THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
  const images12 = ["Bilder/avocado.png", "Bilder/ufo.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/pistole.png", "Bilder/schmetterling.png",
      "Bilder/avocado.png", "Bilder/ufo.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/pistole.png", "Bilder/schmetterling.png",
  ];
  const images24 = ["Bilder/avocado.png", "Bilder/ufo.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/pistole.png", "Bilder/schmetterling.png",
      "Bilder/loewe.png", "Bilder/diamant.png", "Bilder/palme.png", "Bilder/pilz.png", "Bilder/einhorn.png", "Bilder/lama.png",
      "Bilder/avocado.png", "Bilder/ufo.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/pistole.png", "Bilder/schmetterling.png",
      "Bilder/loewe.png", "Bilder/diamant.png", "Bilder/palme.png", "Bilder/pilz.png", "Bilder/einhorn.png", "Bilder/lama.png",
  ];
  const images36 = ["Bilder/avocado.png", "Bilder/blume.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/einhorn.png", "Bilder/lama.png",
      "Bilder/loewe.png", "Bilder/muffin.png", "Bilder/palme.png", "Bilder/pilz.png", "Bilder/pistole.png", "Bilder/schmetterling.png",
      "Bilder/sonne.png", "Bilder/teddy.png", "Bilder/diamant.png", "Bilder/klee.png", "Bilder/ufo.png", "Bilder/krone.png",
      "Bilder/avocado.png", "Bilder/blume.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/einhorn.png", "Bilder/schmetterling.png",
      "Bilder/loewe.png", "Bilder/muffin.png", "Bilder/palme.png", "Bilder/pilz.png", "Bilder/pistole.png", "Bilder/lama.png",
      "Bilder/sonne.png", "Bilder/teddy.png", "Bilder/diamant.png", "Bilder/klee.png", "Bilder/ufo.png", "Bilder/krone.png",
  ];
  const grid = document.querySelector("#grid");
  var counter = 0;
  var canClick = true;
  var cardsCollected = 0;
  var card1;
  var card2;
  var size = "24";
  var images;
  let homeBtn = document.getElementById("home");
  startGame();
  function startGame() {
      size = window.localStorage.getItem("size");
      // console.log(size);
      //size = "24";
      if (size === "12") {
          images = images12;
          grid === null || grid === void 0 ? void 0 : grid.classList.toggle("grid12");
      }
      else if (size === "24") {
          images = images24;
          grid === null || grid === void 0 ? void 0 : grid.classList.toggle("grid24");
      }
      else if (size === "36") {
          images = images36;
          grid === null || grid === void 0 ? void 0 : grid.classList.toggle("grid36");
      }
      homeBtn.addEventListener("click", home);
      //https://flaviocopes.com/how-to-shuffle-array-javascript/
      images.sort(() => Math.random() - 0.5);
      for (let i = 0; i < images.length; i++) {
          const img = document.createElement("img");
          img.setAttribute("src", "Bilder/hintergrund.png");
          // Bildindex speichern fuer später als string
          img.setAttribute("card-id", String(i));
          if (size === "12") {
              img.setAttribute("width", "150px");
              img.setAttribute("height", "150px");
          }
          else if (size === "24") {
              img.setAttribute("width", "115px");
              img.setAttribute("height", "115px");
          }
          else if (size === "36") {
              img.setAttribute("width", "100px");
              img.setAttribute("height", "100px");
          }
          img.addEventListener("click", cardClicked);
          grid === null || grid === void 0 ? void 0 : grid.appendChild(img);
      }
  }
  function cardClicked(e) {
      //Radio-Button status checking
      const val = e.target;
      if (canClick === true) {
          const cardId = val.getAttribute("card-id");
          // cardId wieder in Zahl umwandeln
          const id = parseInt(cardId);
          val.setAttribute("src", images[id]);
          if (counter === 0) {
              card1 = val;
          }
          else if (counter === 1) {
              card2 = val;
          }
          counter = counter + 1;
          if (counter == 2) {
              counter = 0;
              canClick = false;
              setTimeout(check, 800);
          }
      }
  }
  function check() {
      if (card1.getAttribute("src") === card2.getAttribute("src")) {
          card1.setAttribute("src", "Bilder/karteweg.jpg");
          card2.setAttribute("src", "Bilder/karteweg.jpg");
          // verhindert, dass karte nochmal geklickt werden kann
          card1.removeEventListener("click", cardClicked);
          card2.removeEventListener("click", cardClicked);
          cardsCollected += 2;
          // erst sichtbar wenn gewonnen
          if (cardsCollected === images.length) {
              console.log("Du hast gewonnen!");
              var gameover = document.querySelector("#gameover");
              gameover === null || gameover === void 0 ? void 0 : gameover.classList.toggle("hidden-element");
              grid === null || grid === void 0 ? void 0 : grid.classList.toggle("hidden-element");
          }
      }
      else {
          card1.setAttribute("src", "Bilder/hintergrund.png");
          card2.setAttribute("src", "Bilder/hintergrund.png");
      }
      canClick = true;
  }
  //kommt man auf startseite
  function home(e) {
      window.location.href = "index.html";
  }

}());
