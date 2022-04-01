// Inizializzazione variabili
const app = document.getElementById("app");
const scegli = document.getElementById("scegli");
const even = document.getElementById("even");
const odd = document.getElementById("odd");
const input = document.getElementById("userNumber");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
const label = document.getElementById("label");
const form = document.getElementById("form");
let playerChoice = "";

// Impostazione iniziale pagina
form.classList.add("hide");

// Creazione elemento di output
const h2 = document.createElement("h2");
app.append(h2);

// Eventi
even.addEventListener("click", continueEven);
odd.addEventListener("click", continueOdd);
play.addEventListener("click", playFunction);
reset.addEventListener("click", resetFunction);

// Funzioni
// Scelta pari
function continueEven() {
    playerChoice = "e";
    continueFunction();
    input.focus();
}
// Scelta dispari
function continueOdd() {
    playerChoice = "o";
    continueFunction();
    input.focus();
}
// Gioca
function playFunction() {
    const userNumber = parseInt(input.value);
    console.log(userNumber);
    if(userNumber > 5) {
        h2.innerHTML = "Devi inserire un numero tra 1 e 5, riprova";
        input.focus();
    } else {
        console.log(userNumber);
        const pcNumber = generateRandom(1, 5);
        const tot = userNumber + pcNumber;
        const result = evenOdd(tot);
        console.log(result);
        if(result == playerChoice) {
            h2.innerHTML = `Il tuo numero: ${userNumber} <br>Il numero del computer: ${pcNumber} <br>Totale: ${tot} <br>Hai vinto!!`
        } else {
            h2.innerHTML = `Il tuo numero: ${userNumber} <br>Il numero del computer: ${pcNumber} <br>Totale: ${tot} <br>Ritenta!`
        }
        hideFunction();
    }
}
// Reset
function resetFunction() {
    label.classList.remove("hide");
    input.classList.remove("hide");
    play.classList.remove("hide");
    scegli.classList.remove("hide");
    even.classList.remove("hide");
    odd.classList.remove("hide");
    form.classList.add("hide");
    reset.classList.add("hide");
    h2.innerHTML = "";
    input.focus();
}
// Rimozione elementi dalla pagina
function hideFunction() {
    label.classList.add("hide");
    input.classList.add("hide");
    play.classList.add("hide");
    reset.classList.remove("hide");
}
// Rimozione menu pari o dispari
function continueFunction() {
    scegli.classList.add("hide");
    even.classList.add("hide");
    odd.classList.add("hide");
    form.classList.remove("hide");
}

// Funzioni generali
// Generazione numero casuale
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Numero pari o dispari
function evenOdd(num) {
    let result = "";
    if((num % 2) != 0){
        result = "o";
    } else {
        result = "e";
    }
    return result;
}