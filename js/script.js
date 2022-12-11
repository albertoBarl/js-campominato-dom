// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// 1.Creare un collegamento col bottone "Play"
// 2.Generare una griglia 10x10 collegata la bottone "Play"
// 3."Numerare" ogni cella
// 3.Al click di una cella, essa si colora di azzurro, resituendo il numero di cella in console

// JS-CAMPOMINATO-GRID (v2.1)
let play_button = document.getElementById("play-button");

const grid = document.createElement("div");
grid.classList.add("c-square");

let level = document.getElementById("Livello");

// function which create a square
function sqCreator() {
  let element = document.createElement("div");
  element.classList.add("sq");

  return element;
}

// function which create a grid
function gridCreator(sqQuantity, sqRow) {
  grid.innerHTML = "";
  grid.style.width = `calc(50px * ${sqRow})`;

  let array = createBombsArray(1, sqQuantity);
  function areBombs(array, confrontElement) {
    let i = 0;
    while (i < 16) {
      if (array[i] == confrontElement) {
        return true;
      }
      i++;
    }
    return false;
  }
  // ========================================
  for (let i = 0; i < sqQuantity; i++) {
    let square = sqCreator(sqQuantity);
    square.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    grid.appendChild(square);

    // function 'click' on the created square
    square.addEventListener("click", function () {
      this.innerText = i + 1;
      this.classList.add("sq-aqua");
      if (areBombs(array, this.innerText)) {
        this.classList.add("bomb");
        alert("DAMN! YOU EXPLODED!!!");
      }
      console.log(this.innerText);
    });
  }

  // ==================================================
  document.getElementById("main-c").appendChild(grid);
}

play_button.addEventListener("click", function () {
  difficultySelector();
});

// function which select the difficulty

function difficultySelector() {
  let difficulty = level.value;

  let sqQuantity;
  let sqRow;

  switch (difficulty) {
    case "Level_1":
      sqQuantity = 100;
      sqRow = 10;
      break;
    case "Level_2":
      sqQuantity = 81;
      sqRow = 9;
      break;
    case "Level_3":
      sqQuantity = 49;
      sqRow = 7;
      break;
    default:
      sqQuantity = 100;
      sqRow = 10;
      break;
  }
  gridCreator(sqQuantity, sqRow);
}

// JS-CAMPOMINATO-DOM
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

function createBombsArray(min, max) {
  let bombs = [];
  let i = 0;
  while (i < 16) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!bombs.includes(number)) {
      //se number non è incluso (!arrayBombs) nell'arrayBombs
      bombs.push(number);
      i++;
    }
  }
  console.log(bombs);
  return bombs;
}
