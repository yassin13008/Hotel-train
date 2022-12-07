//  Test des fonctions pour tableau

var tabPersonnages = [
    {nom: "Zeus", puissance : 300, prix : 10000},
    {nom: "Hades", puissance : 200, prix : 6000},
    {nom: "Poseidon", puissance : 175, prix : 5000},
    {nom: "Achille", puissance : 150, prix : 4500},
    {nom: "Cyclope", puissance : 100, prix : 3000},
    {nom: "Titan", puissance : 250, prix : 8000},
    {nom: "Dragon Noir", puissance : 220, prix : 6800},
    {nom: "Chevalier", puissance : 65, prix : 1800},
]

// ************************* FOR EACH *********************

// La fonction foreach() : permet de parcourir un tableau sans faire de boucle

// tabPersonnages.forEach(element => {
//      perso = element.nom;
//      console.log(perso);

// });

// ************************** MAP *********************

// la fonction map() permet de crée un tableau de part un tableau et en modifier ses valeurs 
//  Ici on s'est crée un tableau de nom selon le tableau d'objet d'au dessus dont les objets ont pour propriété nom

// let persos = tabPersonnages.map(element => {
//     return element.nom;
// })

// console.log(persos)

// ************************* FILTER ******************

// filter permet de filtrer un tableau selon une certaine condition. Si la condition vaut vraie, alors l'élément actuellement inspecté dans le tableau se retrouvera dans le tableau final filtré, sinon non.

// var power = tabPersonnages.filter(element => {
//     return element.puissance <= 150;
//     // Ici il va me crée un tableau d'objet ayant une puissance inférieur a 150
// })

// console.log(power)

// ************************** FIND ************************

