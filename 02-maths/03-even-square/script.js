/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var i = 2;
        var result = '';
        for (i; i <= 21; i++) {
               if (i % 2 === 0)
               { 
                   result+= (i*i) + "\n";
               }
       
        }
        alert(result);
    });

})();