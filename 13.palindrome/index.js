function isPalindrome(str) {
    return [...str].reverse().join('') == str
}

function TestePalindrome() {
    let Input = document.getElementById("input").value;
    let Affichage = document.getElementById('texte')

    if (Input.length <= 0) {
        Affichage.textContent = ""
        return
    }
    if (isPalindrome(Input)) { 

        Affichage.style.color = "green"
        Affichage.textContent = "L'entrée est un palindrome."
        return

    } else {

        Affichage.style.color = "red"
        Affichage.textContent = "L'entrée n'est pas un palindrome."
        return

    }
}