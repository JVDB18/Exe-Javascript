/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
var str= document.getElementById("target").innerHTML;
var i = 0;
var timer = 200;
document.getElementById('target').innerHTML= " ";
console.log(str);
function typing() {
    if (i < str.length) {
        document.getElementById('target').innerHTML += str[i];
        i++;
        setTimeout(typing, timer);
    }

}
setTimeout(typing, timer);
})();
