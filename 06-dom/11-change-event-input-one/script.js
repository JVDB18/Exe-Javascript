/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var password= document.getElementById('pass-one');
password.setAttribute('maxlength', 10);
var counter= document.getElementById('counter');
password.addEventListener('keyup', function(){
    var total=password.value.length;
    counter.innerHTML=total + '/10';
    
}, false);




    // your code here

})();
