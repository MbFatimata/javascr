// JavaScript source code
//1 correction
function show() {
    console.log('coucou');
}
setInterval(show, 1000);

//2
//setInterval(function () {
//    console.log('coucou methode anonyme');
//}, 1000);

//3
//setInterval(() => {
//    console.log('coucou arrow function ES6');
//}, 1000);


// fonctionne aussi
//function show(param) {
//    console.log(param);
//    setInterval(show(param), 1000);
//}
//show('coucou');