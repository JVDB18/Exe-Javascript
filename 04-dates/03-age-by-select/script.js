/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
       
    var button= document.getElementById("run");
    button.addEventListener("click", function() {
        var date= new Date ();
        var ageday= document.getElementById("dob-day").value;
        var agemonth= document.getElementById("dob-month").value;
        var ageyear= document.getElementById("dob-year").value;
            
            console.log(ageday);
            console.log(agemonth);
            console.log(ageyear);

        var year= date.getFullYear();
        var month= date.getMonth() +1;
        var day= date.getDate();
        var age = year - ageyear;
            
            if (agemonth > month)
            {
                 age--
            };

            if (agemonth == month &&  ageday > day)
            { 
                 age--
            };
            
        alert(age);  
           
           console.log(year);
           console.log(month);
           console.log(day);
           console.log(age); 
        });
       
       
        
    

})();
