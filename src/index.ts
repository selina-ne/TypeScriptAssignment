//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

import { helloWorld, Beispiel } from "./myModule";
import { alertMe } from "./myOtherModule";

var images: string[] = ["Bilder/avocado.png", "Bilder/blume.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/einhorn.png","Bilder/lama.png",  
                        //"Bilder/loewe.png","Bilder/muffin.png","Bilder/palme.png","Bilder/pilz.png","Bilder/pistole.png","Bilder/schmetterling.png",
                        //"Bilder/sonne.png","Bilder/teddy.png",

                        "Bilder/avocado.png", "Bilder/blume.png", "Bilder/dino.png", "Bilder/drink.png", "Bilder/einhorn.png","Bilder/lama.png",
                        //"Bilder/loewe.png", "Bilder/muffin.png", "Bilder/palme.png","Bilder/pilz.png","Bilder/pistole.png","Bilder/schmetterling.png",
                        //"Bilder/sonne.png","Bilder/teddy.png"
                      ];

const grid = document.querySelector<HTMLInputElement>("#grid");
var counter: number = 0;
var canClick: boolean = true;
var cardsCollected = 0;
var card1: HTMLImageElement;
var card2: HTMLImageElement;

startGame();

function startGame() {
  //https://flaviocopes.com/how-to-shuffle-array-javascript/
  images.sort((): number => Math.random() - 0.5);

  for(let i = 0; i < images.length; i++)
  {
    const img = document.createElement("img");
    img.setAttribute("src", "Bilder/hintergrund.png");

    // Bildindex speichern fuer später als string
    img.setAttribute("card-id", String(i));
    img.setAttribute("width", "150px");
    img.setAttribute("height", "150px");
    img.addEventListener("click", cardClicked);
    grid?.appendChild(img);
  }
}

function cardClicked(e: UIEvent) {
  const val = e.target as HTMLImageElement;
  if(canClick === true) {
    const cardId = val.getAttribute("card-id");

    // cardId wieder in Zahl umwandeln
    const id = parseInt(cardId!);
    val.setAttribute("src", images[id]);

    if(counter === 0) {
      card1 = val;
    } else if (counter === 1) {
      card2 = val;
    }
    counter = counter + 1;

    if(counter == 2) {
      counter = 0;
      canClick = false;
      setTimeout(check, 800);
    }
  }
}

function check() {
  if(card1.getAttribute("src") === card2.getAttribute("src")) {
    card1.setAttribute("src", "Bilder/karteweg.jpg");
    card2.setAttribute("src", "Bilder/karteweg.jpg");

    // verhindert, dass karte nochmal geklickt werden kann
    card1.removeEventListener("click", cardClicked);
    card2.removeEventListener("click", cardClicked);

    cardsCollected += 2;
    
    // erst sichtbar wenn gewonnen
    if(cardsCollected === images.length) {
        console.log("Du hast gewonnen!");
        var gameover = document.querySelector<HTMLImageElement>("#gameover");
        gameover?.classList.toggle("hidden-element");

        var playagain = document.querySelector<HTMLButtonElement>("#playAgain");
        playagain?.classList.toggle("hidden-element");

        grid?.classList.toggle("hidden-element");
    }
  } else {
    card1.setAttribute("src", "Bilder/hintergrund.png");
    card2.setAttribute("src", "Bilder/hintergrund.png");
  }

  canClick = true;
}

function reset() {
  startGame();
}

