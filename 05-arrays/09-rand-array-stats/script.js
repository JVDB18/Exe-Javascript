/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById("run").addEventListener("click", function()
{
    var array= [];
    for (var i = 1; i < 11; i++)
    {
        var random = document.getElementById("n-"+i).innerHTML = Math.floor(Math.random()* 100) +1;
        
        array.push(random);
        console.log(random);
        console.log(array);
    };
    var min= document.getElementById("min").innerHTML= Math.min(...array);
    var max= document.getElementById("max").innerHTML=Math.max(...array);
    var somme= document.getElementById("sum").innerHTML=array.reduce((a,b) => a + b, 0);
    var moyenne= document.getElementById("average").innerHTML=array.reduce((a,b)=> a + b, 0 ) / array.length;
    console.log(min, max, somme, moyenne);
    

})
    // your code here

})();
