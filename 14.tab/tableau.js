/*
Créez une fonction qui prend un tableau associatif comme argument et renvoie 
une chaîne de caractère qui représente une personne. 
Les attributs de la personne devront être extraits des trois 
propriétés du tableau :

nom
age
adresse

La chaîne doit avoir le format suivant: 

X a Y ans. Il habite à Z. 
(où X est le nom de la personne, Y est l’age et Z est l’adresse).

Exemple : 
let Tab = {
    "nom": "Thomas", 
    "age": "25", 
    "adresse": "Paris"
}
formatPrs(Tab)
➞ "Thomas a 25 ans. Il habite à Paris."

Tab = {
    "nom": "Emily", 
    "age": "22", 
    "adresse": "Nantes"
}
formatPrs(Tab)
➞ "Emily a 22 ans. Il habite à Nantes."
*/
function formatPrs(personne) {
    // 3 façons de faire
    // return `${personne.nom} a ${personne.age} ans. Il habite à ${personne.adresse}`
    // return `${personne['nom']} a ${personne['age']} ans. Il habite à ${personne['adresse']}`
    const { nom, age, adresse } = personne;
    return `${nom} a ${age} ans. Il (elle) habite à ${adresse}.`;
  }
  
  
  let Tab = {
    "nom": "Thomas",
    "age": "25",
    "adresse": "Paris"
  };
  console.log(formatPrs(Tab));
  
 Tab = {
    "nom": "Emily",
    "age": "22",
    "adresse": "Nantes"
  };
  
  console.log(formatPrs(Tab)); 
   