/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var tar = document.getElementById('target');
var result= tar.innerHTML;
var timer= 300;

function random (a, b) {
    return (Math.random() * (a - b)) + a;
}

function hugoWaving(){
    var smith= " ";
    for (var i=0; i < result.length; i++){
        smith += "<span style=\"font-size: " + random(20, 25) + "px\">" + result[i] + "</span>";
        }
        tar.innerHTML= smith;
    };

console.log(random);
setInterval(hugoWaving, timer);

    // your code here

})();
