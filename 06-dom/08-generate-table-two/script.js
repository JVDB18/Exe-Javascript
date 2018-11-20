/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var div= document.getElementById("target");
    var table= document.createElement("table");
    var tablebody= document.createElement("tbody");
    table.appendChild(tablebody);
    
    for (var t=1; t<11; t++) 
    {
        var tr = document.createElement('tr');
        tablebody.appendChild(tr);
        
        for (var r= 1; r<11; r++)
        {
            var td=document.createElement('td');
            var text= document.createTextNode(t*r);
            tr.appendChild(td);
            td.appendChild(text);
    
        }
    }
           
    div.appendChild(table);
    // your code here

})();
