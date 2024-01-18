// Créez une fonction nommée aprec qui :

//     prend une note sur 20 en argument
//     renvoie Hideux si la note est entre 0 et 7 exclus
//     renvoie Moche si la note entre 7 et 10 exclus
//     renvoie Nice si la note entre 10 et 15 exclus
//     renvoie GG si la note entre 15 et 20 inclus
//     renvoie BUG si la note n'est pas correcte

/**
 * si la note <7 hideux
 * sinon si note >=7 && <10 moche
 * sinon si note >=10 && <15 nice
 * sinon si note >15 && <20 gg
 * else note bug
 */
var note = 10
function aprec(note) {
    if (note < 7){ 
        return "Hideux"
    }
    else if (note >= 7 && note < 10){
    return "Moche"
    }
    else if (note >= 10 && note < 15){
        return "Nice"
    }
    else if (note >= 15 && note == 20){
        return "GG"
    }
    else {return "BUG"}
}
console.log (aprec(note))

// Vous disposez d'un tableau contenant des nombres aléatoires et 
// vous devez créer une fonction sortNumbers(tInit, tInf, tSup) qui va ranger :

//     tous les éléments de tInit inférieurs à 10 dans le tableau tInf
//     et tous les éléments de tInit supérieurs ou égaux à 10 dans le 
//      tableau tSup

// 💡 la fonction doit fonctionner quel que soit le tableau tInit

var tab = [
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*50),
    Math.floor(Math.random()*20),
    Math.floor(Math.random()*20),
]
console.log(tab)

// Faire une boucle qui affiche 10, 20, 30, ...., 100

for (let i = 10; i <= 100; i += 10) {
    console.log(i);
}

function Remarque(note) {
    if (note < 7) {
        return "Hideux"
    } else if (note >= 7 && note < 10) {
        return "Moche"
    } else if (note >= 10 && note < 15) {
        return "Nice"
    } else if (note >= 15 && note <= 20) {
        return "GG"
    }
    return "BUG"
}
console.log(Remarque(11))

// Faire une boucle qui affiche 10, 20, 30, ...., 100
for (let i = 10; i <= 100; i += 10) {
    console.log(i)
}

// Créer une fonction qui renvoie les 100 premier nombres premiers et ensuite leur somme 


function NombrePremier() {
    let nombrePremiers = []
    let somme = 0
    var IsFirstNumber = true
    // J'ai ma boucle pour tester chaque nombre jusqu'a temps que la taille du tableau soit égal à 100
    for (let nombreTester = 2; nombrePremiers.length < 100; nombreTester++) {
        IsFirstNumber = true

        // J'imbrique une boucle dans une autre boucle
        // Cette boucle va tester le nombreTester avec une valeur incrémentante pour vérifier si son nombre
        // et divisible par un autre, si il est divisible par un autre la boucle s'arrete et modifie une variable IsFirstNumber en faux puisqu'un nombre
        // premier n'est divisible que par lui meme et 1 donc je regarde si la variable IsFirstNumber est vrai si elle est vrai j'insert dans le tableau
        // Le modulo (%) est un opérateur mathématique qui sert à récupérer le reste d'une division euclidienne par exemple 4 divié par 3 sa fait 1.33... mais 4 modulo de 3 sa fait 1
        for (let ValeurIncrementante = 2; ValeurIncrementante < nombreTester; ValeurIncrementante++) {
            if (nombreTester % ValeurIncrementante === 0) {
                IsFirstNumber = false
                break
            }
        }
        if (IsFirstNumber) {
            somme = somme + nombreTester
            // Push pousse une valeur dans le tableau
            nombrePremiers.push(nombreTester)
        }
    }
    return {nombrePremiers, somme}
}

let Nombre = NombrePremier()

console.log(Nombre.nombrePremiers.join(" / "))
document.getElementById('nombre').innerHTML = Nombre.nombrePremiers.join(' / ')

