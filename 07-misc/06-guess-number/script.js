/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
window.onload = random;
var random = Math.floor(Math.random()*100) -1;
var essai= 0;
console.log(random);


while(true){
    var input= prompt("Choisissez un chiffre entre 1 et 100")
if (input < random) {
    essai ++;
    alert("Try again. Plus grand"); 
    
}
else if (input > random){
    essai++;
    alert("Try again. Plus petit");
    
}
else {
    alert("GG noob!" + " Essai:" + essai);
    return false;
}
}

    


    // your code
    

})();
