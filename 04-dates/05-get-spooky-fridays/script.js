/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var button= document.getElementById("run");
button.addEventListener('click', function()
{
    var mois = new Array();
    var annee = document.getElementById("year").value;
    var date;
    for(var i = 0; i < 12; i++) {
        date = new Date(i + ' ' + 13 + ', ' + annee + ' 00:00:00');
        console.log(date);
        if(date.getDay() === 5) mois.push(date.getMonth() + 1);
    }
    alert(mois);
    
})

    // your code here

})();
