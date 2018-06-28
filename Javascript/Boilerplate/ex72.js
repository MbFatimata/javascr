// JavaScript source code
var auj = new Date();
var jour = auj.getDate();
var mois = auj.getMonth() + 1; //+1 car les mois commence à 0
var an = auj.getFullYear();
console.log("Nous sommes le ", jour, "/", mois, "/", an, ".");
console.log(`Nous sommes le ${jour}/ ${mois}/ ${an} .`);
console.log(auj.toLocaleDateString());

