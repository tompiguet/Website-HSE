/*---------------------------------------------------------- TIMER ----------------------------------------------------*/


// Création de la constante qui va fixer le temps zero, c'est a dire le temps exact de la connexion
const timezero = new Date().getTime();

// Incrémentation du compteur 'x' toutes les secondes
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = now - timezero;  // on soustrait le temps actuel au temps zero

    // Calcul du temps pour les secondes, minutes et heures
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    // on fait en sorte que l'affichage soit de la forme xx:xx:xx et non x:x:x
    if (h < 10) { h = '0' + h; };
    if (m < 10) { m = '0' + m; };
    if (s < 10) { s = '0' + s; };

    // On affiche le résultat dans l'élément à l'ID "timer"
    document.getElementById("timer").innerHTML = h + " : " + m + " : " + s;

    // Quand le timer dépasse 1000*86400(nombre secondes dans la journée) 23h59:59, on écrit du texte à la place
    if (distance > 86400000) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Déjà une journée de passée !";
    }
});



window.addEventListener("DOMContentLoaded", () => {       // permet de faire lancer le compteur au lancement de la page.
    
    /*Utilisation des fonctions intervalles pour incrémenter les compteurs.*/
    /* Les AT Simples */
    document.getElementById("atSimple").innerHTML = 0;
    var i = 1;
    setInterval(function(){ 
        var count1 = i++;
        document.getElementById("atSimple").innerHTML = count1; 
    }, 50000);

    /* Les AT Graves */
    document.getElementById("atGrave").innerHTML = 0;
    var j = 1;
    setInterval(function(){ 
        var count2 = j++;
        document.getElementById("atGrave").innerHTML = count2; 
    }, 900000);

    /* Les AT Mortels */
    document.getElementById("atMortel").innerHTML = 0;
    var k = 1;
    setInterval(function(){ 
        var count3 = k++;
        document.getElementById("atMortel").innerHTML = count3; 
    }, 61200000);

});