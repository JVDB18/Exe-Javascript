/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById('run').addEventListener('click', function()
{
    var password= document.getElementById('pass-one');
    var confirm= document.getElementById('pass-two');

    if (password.value === confirm.value)
    {
        return true;
    }
    else {
        confirm.style.borderColor='red';
        password.style.borderColor='red';
    }
    
});


    // your code here

})();
