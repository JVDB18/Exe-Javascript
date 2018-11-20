/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   
    const clicker= document.getElementById("increment");
    const tar= document.getElementById("target");
    const storage = window.localStorage;

    
        if (!localStorage.getItem('counter')){
            localStorage.setItem('counter', Number(tar.innerHTML))
            tar.innerHTML=count;
        }
        var count=localStorage.getItem('counter');
        tar.innerHTML= count;
        
    
    
    clicker.addEventListener('click', function(){
        count++;
        storage.setItem('counter', count);
        tar.innerHTML=count;
    });
    console.log(localStorage); 


    // your code here

})();
