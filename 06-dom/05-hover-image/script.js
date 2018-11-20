/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
var image= document.getElementsByTagName("img")[0];
var imagesrc= image.getAttribute("src");
var imagehover= image.getAttribute("data-hover");
function setimagesrc()
{
    image.setAttribute("src", imagesrc);
};
function setimagehover()
{
    image.setAttribute("src", imagehover);
};
image.addEventListener("mouseover", setimagehover);
image.addEventListener("mouseleave", setimagesrc);
})();
