/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
 
var div= document.getElementById("target");
var table= document.createElement("table");
var tablebody= document.createElement("tbody");
table.appendChild(tablebody);

for (var t=0; t<10; t++) 
{
    var tr = document.createElement('tr');
    tablebody.appendChild(tr);
    for (var r= 0; r<1; r++)
    {
        var td=document.createElement('td');
        tr.appendChild(td);

    }
}
       
div.appendChild(table);
})();
