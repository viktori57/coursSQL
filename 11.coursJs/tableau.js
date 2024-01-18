// Vous devrez créer un tableau avec dix éléments. Ce tableau devra être stocké dans une variable intitulée MonTableau. 
// Les éléments du tableau peuvent être n'importe quoi vos plats ou vos groupes de musique préférés

// Ensuite, modifiez les deux premiers éléments du tableau en utilisant ce que vous voulais
// Puis ajoutez un nouvel élément au début du tableau et un autre en fin de tableau.






let MonTableau = [
    "Pizza",
    "Tacos",
    12345,
    "tupac",
    "nate dog",
    "boss",
    12,
    23,
    34, 
    5762588
]

MonTableau[0] = "Sushi"
MonTableau[1] = "Curry"

MonTableau.push("Budget")
MonTableau[MonTableau.length] = 2589574

MonTableau.unshift("Vegetables")

console.log(MonTableau)

// const Paye = parseInt(readline());
// const Heure = parseInt(readline());
// const Loyer = parseInt(readline());

// if (Paye * Heure > Loyer) {
//     console.log("YES")
// } else if (Paye * Heure == Loyer) {
//     console.log("BARELY")
// } else {
//     console.log("NO")
// }

// if (nombre % 2) {
//     console.log('[ ] ' + nombre)
// } else {
//     console.log('[x] ' + nombre)
// }

// console.log((nombre % 2 == 0 ? '[ ] ' : '[x] ') + nombre)

// var x = ''
// if (nombre % 2 == 0) {
//     x = '[ ] '
// } else {
//     x = '[x] '
// }
// console.log(x + nombre)


var Phrase = "I feel good to go !"

console.log(('*').repeat(Phrase.length+4))
console.log('* ' + Phrase + ' *')
console.log(('*').repeat(Phrase.length+4))


const length = 3
const width = 4
const height = 5

// 2 × ( (3 × 4) + (3 × 5) + (5 × 4) ) 

console.log(2 * ( (length * width ) + ( length * height ) + ( height * width )));

// Écrivez une fonction pour inverser un tableau. 
// Attention: N’utilisez pas la méthode intégrée reverse();

// Exemple:
// reverseTab([1, 2, 3]) ➞ [3, 2, 1]

// reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]

function reverseTab(tab) {
    let newTab = []

    for(var i = tab.length - 1; i >= 0; i--) {
        newTab.push(tab[i])
    }
    return newTab
}

console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

// Écrivez une fonction qui prend un tableau d’éléments et ne renvoie que les entiers.
// Exemple : 

// getInt([1, 2, "3", "4", "5", 6]) ➞ [1, 2, 6]

// getInt(["Vache", 20, "Cheval", 1, "Poule", 50]) ➞ [20, 1, 1]

// getInt(["Str", false, 5.56, 6]) ➞ [6]

function getInt(tab) {
    // Première façon de faire l'exercice
    let NewTab = []
    for (let i = 0; i < tab.length; i++) {
        if (Number.isInteger(tab[i])) {
            NewTab.push(tab[i])
        }
    }    
    return NewTab

    // Deuxième façon de faire l'éxercice
    return tab.filter(Number.isInteger)
}

console.log(getInt([1, 2, "3", "4", "5", 6]));
console.log(getInt(["Vache", 20, "Cheval", 1, "Poule", 50]));
console.log(getInt(["Str", false, 5.56, 6]));