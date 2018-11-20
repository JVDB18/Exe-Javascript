/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', function()
    {
        var password= document.getElementById('pass-one');
        var confirm= document.getElementById('pass-two');
        var input= document.getElementsByTagName('input');
    
        if (password.value === confirm.value)
        {
            return true;
            
        }
        else {
          confirm.className= 'error';
          
        }
        
    });
})();
