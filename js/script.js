// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
// Ogni cella ha un numero progressivo, da 1 a 100. 
// Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// 1.Creare un collegamento col bottone "Play"
// 2.Generare una griglia 10x10 collegata la bottone "Play"
// 3."Numerare" ogni cella
// 3.Al click di una cella, essa si colora di azzurro, resituendo il numero di cella in console

let play_button = document.getElementById('play-button');
let level = document.getElementById('Livello');
const container = document.querySelector('div.c-square');

play_button.addEventListener('click', function(){

    document.querySelector('.c-square').innerHTML = ''
    // LIVELLO 3, GRIGLIA 10X10
    if(level.value == 'Level_3'){
        for(let i=0; i<100; i++){
            let square= document.createElement('button');
            square.classList.add('sq', 'sq-red3', 'd-flex', 'justify-content-center', 'align-items-center');
            container.appendChild(square);
            
            // funzione 'click' a griglia creata
            square.addEventListener('click', function(){
                this.classList.add('sq-aqua');
                this.innerText= i+1;
                console.log(this.innerText);
            })
        }
    }

    // LIVELLO 2, GRIGLIA 9X9
    else if(level.value == 'Level_2'){
        for(let i=0; i<81; i++){
            let square= document.createElement('button');
            square.classList.add('sq', 'sq-red2', 'd-flex', 'justify-content-center', 'align-items-center');
            container.appendChild(square);
            
            // funzione 'click' a griglia creata
            square.addEventListener('click', function(){
                this.classList.add('sq-aqua', 'text-dark');
                this.innerText= i+1;
                console.log(this.innerText);
            })
        }
    }

    // LIVELLO 1, GRIGLIA 7X7
    else if(level.value == 'Level_1'){
        for(let i=0; i<49; i++){
            let square= document.createElement('button');
            square.classList.add('sq', 'sq-red1', 'd-flex', 'justify-content-center', 'align-items-center');
            container.appendChild(square);
            
            // funzione 'click' a griglia creata
            square.addEventListener('click', function(){
                this.classList.add('sq-aqua', 'text-dark');
                this.innerText= i+1;
                console.log(this.innerText);
            })
        }
    }
    else{
        alert('Scegli un livello di difficoltà');
    }
})







