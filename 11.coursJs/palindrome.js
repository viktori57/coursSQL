function isPalindrome(str) {
    // Convertir la chaîne en minuscules pour rendre la vérification insensible à la casse
    str = str.toLowerCase();
    
    // Inverser la chaîne et la comparer avec la chaîne d'origine
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("NON"));      // ➞ true
console.log(isPalindrome("TOTO"));     // ➞ false
console.log(isPalindrome("SOS"));      // ➞ true
console.log(isPalindrome("SELLES"));   // ➞ true

/*
Créez une fonction qui prend une chaîne de caractère et renvoie une chaîne avec des espaces entre tous les caractères.

addSpace("waytolearnx") ➞ "w a y t o l e a r n x"

addSpace("Hello BoB") ➞ "H e l l o  B o B"

addSpace("Thank you") ➞ "T h a n k  y o u"

*/

function addSpace(str) {
    return str.split('').join(' ')
   // return [...str].join(' ') deuxieme solution
}


console.log(addSpace("waytolearnx"));
console.log(addSpace("Hello BoB"));
console.log(addSpace("Thank you"));