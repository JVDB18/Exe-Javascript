/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
        switch(operation) {
            case "addition": var result= parseInt(document.getElementById("op-one").value) + parseInt(document.getElementById("op-two").value);
            alert(result);
            break;
            case "substraction": var result= parseInt(document.getElementById("op-one").value) - parseInt(document.getElementById("op-two").value);
            alert(result);
            break;
            case "multiplication": var result= parseInt(document.getElementById("op-one").value) * parseInt(document.getElementById("op-two").value);
            alert(result);
            break;
            case "division": var result= parseInt(document.getElementById("op-one").value) / parseInt(document.getElementById("op-two").value);
            alert(result);
            break;
        default: alert("brbrbr");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
