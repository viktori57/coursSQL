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
    if (note <7){ 
        return "Hideux"
    }
    else if (note >=7 && note<10){
    return "Moche"
    }
    else if (note >=10 && note<15){
        return "Nice"
    }
    else if (note >=15 && note==20){
        return "GG"
    }
    else {return "BUG"}
}
console.log (aprec(note))