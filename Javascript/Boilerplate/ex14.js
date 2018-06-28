// JavaScript source code

let timer = setInterval(show, 1000);
let compteur = 0;
function show() {
    console.log('coucou'); 
    compteur++;
    if (compteur >= 3) {
        clearInterval(timer);
    }
}




