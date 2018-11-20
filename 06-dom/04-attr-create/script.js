/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
//v1:
//var value= document.getElementById('source');
//var target = document.getElementById('target');
//target.innerHTML= "<img src=\""+ value.getAttribute("data-image")+ "\">";
//value.remove();
//v2:
var value= document.getElementById('source');
var inter= value.getAttribute("data-image");
var image= document.createElement("img");
image.setAttribute("src",inter);
document.getElementById("target").appendChild(image);
value.remove();
})();
