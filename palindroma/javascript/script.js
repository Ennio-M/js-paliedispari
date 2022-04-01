// Inizializzazione variabili
const app = document.getElementById("app");
const input = document.getElementById("userWord");
const check = document.getElementById("enter");
const reset = document.getElementById("reset");
const label = document.getElementById("label");

// Impostazione iniziale pagina
input.focus();

// Creazione elemento di output
const h2 = document.createElement("h2");
app.append(h2);

// Eventi
check.addEventListener("click", reverse);
reset.addEventListener("click", resetFunction);

// Funzioni
// Inversione parola e output
function reverse() {
    const userWord = input.value.toLowerCase();
    if(userWord.includes(" ")) {
        hideFunction()
        h2.innerHTML = "Hai inserito più di una parola";
    } else {
        const reversedWord = wordsReverser(userWord);
        if(userWord === reversedWord) {
            hideFunction()
            h2.innerHTML = `${capitalizeFirstLetter(userWord)} è una parola palindroma!`;
        } else {
            hideFunction()
            h2.innerHTML = `${capitalizeFirstLetter(userWord)} non è una parola palindroma`;
        }
    }
}
// Reset
function resetFunction() {
    label.classList.remove("hide");
    input.classList.remove("hide");
    enter.classList.remove("hide");
    reset.classList.add("hide");
    h2.innerHTML = "";
    input.focus();
}
// Rimozione elementi dalla pagina
function hideFunction() {
    label.classList.add("hide");
    input.classList.add("hide");
    check.classList.add("hide");
    reset.classList.remove("hide");
}

// Funzioni generali
// Inversione parola
function wordsReverser(word) {
    const letters = word.split("");
    let reversed = "";
    for(let i = letters.length - 1; i >= 0; i--) {
        reversed += letters[i]
    }
    return reversed;
}
// Prima lettera maiuscola
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }