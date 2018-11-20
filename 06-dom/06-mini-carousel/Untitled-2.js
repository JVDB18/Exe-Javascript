var classA= [
    {nom: 'Marine',
    moyenne: 12
    },
    {
        nom: 'Jean',
        moyenne: 4
    },
    {
        nom: 'Joseph',
        moyenne: 10,
    }
];
var classB=[
    {nom: 'Josephine',
    moyenne: 2,
    },
    {nom: 'Jeanne',
    moyenne: 15},
    {nom: 'Marin',
    moyenne: 18,}
];
function afficheQuiALaMoyenne(eleves) {
for (i= 0; i<eleves.length; i++){
if (eleves[i].moyenne >= 10){
    console.log(eleves[i].nom + 'a la moyenne');
}
}
};
afficheQuiALaMoyenne(classA);
afficheQuiALaMoyenne(classB);

var pikachu = {
    crier: function (){
        console.log("PIKACHU");
    }
};
pikachu.crier();

Math.round(33.54);

var phrase= "Returns true if the provided predicate function returns true for all elements in a collection false otherwise";
var frequence= function(phrase){
    var mots= phrase.toLowerCase().split(" ");
    for (var i = 0; i < mots.length; i++){
        var mot= mots[i];
        var compteur= {};
        if (compteur[mot] === undefined) {
            compteur[mot] = 1
        }
        else {
            compteur[mot]++
        }
    }
    return compteur
}

var a = "salut";
function () {
    a= "le monde"
    console.log(a);
}
console.log(a);