const niveauFacile = document.getElementById("nivFacile");
const niveauMoyen = document.getElementById("nivMoyen");
const niveauDifficile = document.getElementById("nivDifficile");
const Valider = document.getElementById("valider");
const reponse = document.getElementById("Reponse");
const input = document.getElementById("input");
const Resultat = document.getElementById("Resultat");
const boite = document.getElementById("boite");
const Essai = document.getElementById("Essai");


let valeurChiffre;
let NbEssai = 1;
let Valeur = 3;



/*ecoute btn niveau*/

niveauFacile.addEventListener("click", function () {
  alert("btn facile");
});
niveauMoyen.addEventListener("click", function () {
  alert("btn moyen");
});
niveauDifficile.addEventListener("click", function () {
  alert("btn difficile");
});

function chiffreAletoire(mini , max) {
  alea = Math.round(Math.random() * (max - mini) + mini);
  console.log(alea);
  return alea;
}



// function Limite() {
  
//   if (Valeur <= NbEssai) {
//     Essai.textContent = `fin de partie`;
//   }
//   else{ Essai.textContent = "continuer"}
  
// }


function compareNb(nbInput, alea, Valeur) {
 
  if (Valeur > NbEssai) {

  if (nbInput > alea)  {
    Resultat.textContent = "c'est moins";
    console.log("perdu");
    setTimeout(function () {
      Resultat.textContent = "";
    }, 3000);
  } else if (nbInput < alea ) {
    Resultat.textContent = "c'est plus";
    console.log("perdu");
    setTimeout(function () {
      Resultat.textContent = "";
    }, 3000);
  }
  else   {
    Resultat.textContent = `Gagner!!! Vous avez trouvé le chiffre en ${NbEssai} tentatives.`;
    console.log("gagné");
    
   }
  }
  else{Essai.textContent = `fin de partie`}
}


chiffreAletoire( 1 ,10);
   

input.addEventListener("input", function (e) {
  valeurChiffre = e.target.value;
});



Valider.addEventListener("click", function () {
 
  compareNb(valeurChiffre, alea, Valeur);
  //Limite(Valeur);
  console.log(alea);
   
 console.log("valeur: "+ Valeur);

 
  console.log("Nombre d'essai " + NbEssai);
  NbEssai++;
  reponse.style.color = "white";
  reponse.textContent = valeurChiffre;
});
