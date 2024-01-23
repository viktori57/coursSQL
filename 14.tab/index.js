/*
Ecrire un script composé des fonctions suivante :

Une fonction qui remplit un tableau par des noms saisis par l'utilisateur  via une boite de dialogue , 
cette fonction sera appelée au  clic sur un bouton nommé "Ajouter nom".
    
Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur 
clique sur le  bouton "tirage au sort" .
*/
  


let listeNoms = [];


function ajouterNom() {
  
  const nouveauNomInput = document.getElementById("nouveauNom");
  const nouveauNom = nouveauNomInput.value.trim();


  if (nouveauNom !== "") {
    listeNoms.push(nouveauNom);
    afficherListeNoms();
    
    
    nouveauNomInput.value = "";
  }
}


function afficherListeNoms() {
  const listeNomsElement = document.getElementById("listeNoms");
  
  listeNomsElement.innerHTML = "";

  listeNoms.forEach((nom) => {
    const nouvelleLigne = document.createElement("tr");
    const nouvelleCellule = document.createElement("td");
    nouvelleCellule.textContent = nom;
    nouvelleLigne.appendChild(nouvelleCellule);
    listeNomsElement.appendChild(nouvelleLigne);
  });
}


function tirageAuSort() {
  
  if (listeNoms.length === 0) {
    alert("La liste des noms est vide. Ajoutez des noms avant de faire un tirage au sort.");
  } else {
    
    const indexGagnant = Math.floor(Math.random() * listeNoms.length);

  
    const nomGagnant = listeNoms[indexGagnant];

  
    alert(`Le gagnant est : ${nomGagnant}`);
  }
}

