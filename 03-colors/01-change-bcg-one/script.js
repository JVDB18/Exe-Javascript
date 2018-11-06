/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var bred= document.getElementById("red");
    bred.addEventListener("click", function()
    {
        document.documentElement.style.backgroundColor = "red";
    }
    );
    var bgreen= document.getElementById("green");
    bgreen.addEventListener("click", function()
    {
        document.documentElement.style.backgroundColor = "green";
    }
    );
    var byellow= document.getElementById("yellow");
    byellow.addEventListener("click", function()
    {
        document.documentElement.style.backgroundColor = "yellow";
    }
    );
    var bblue= document.getElementById("blue");
    bblue.addEventListener("click", function()
    {
        document.documentElement.style.backgroundColor = "blue";
    }
    );
})();
