const niveauFacile = document.getElementById("nivFacile");
const niveauMoyen = document.getElementById("nivMoyen");
const niveauDifficile = document.getElementById("nivDifficile");
const Valider = document.getElementById("valider");
const reponse = document.getElementById("Reponse");
const input = document.getElementById("input");
const Resultat = document.getElementById("Resultat");
const boite = document.getElementById("boite");
const Essai = document.getElementById("Essai");
const nombreNiveau = document.getElementById("nombreNiveau");
const chance = document.getElementById("chance");
const info= document.getElementById("info");
const Rejouer = document.getElementById("rejouer");


let valeurChiffre;
let NbEssai = 0;
let Valeur = 0;
let min = 0 ;
let max = 0;


/***************************************************************************** */


niveauFacile.addEventListener("click", function () {
  info.style.display = "none";
  niveauFacile.style.color ="white";
  niveauMoyen.style.color ="black";
  niveauDifficile.style.color ="black";
  Valider.style.display = "block";
  Resultat.textContent ="";
  Essai.textContent = "";
 // alert("niveau facile 3 chances chiffre entre 1 et 10");
nombreNiveau.textContent= (" entre 1 et  10");
chance.textContent= (" vous avez 3 chances");
 NbEssai = 0;
 Valeur = 3;
 min = 0;
 max = 10;
chiffreAletoire( min , max);
});

niveauMoyen.addEventListener("click", function () {
  info.style.display = "none";
  niveauMoyen.style.color ="white";
  niveauFacile.style.color ="black";
  niveauDifficile.style.color ="black";
  Valider.style.display = "block";
  Resultat.textContent ="";
  Essai.textContent = "";
 // alert("niveau facile 7 chances chiffre entre 1 et 50");
  nombreNiveau.textContent= (" entre 1 et  50");
  chance.textContent= (" vous avez 7 chances");


 NbEssai = 0;
 Valeur = 7;
 min = 0;
 max = 50;
chiffreAletoire( min , max);
});

niveauDifficile.addEventListener("click", function () {
  info.style.display = "none";
  niveauDifficile.style.color ="white";
  niveauFacile.style.color ="black";
  niveauMoyen.style.color ="black";
  Valider.style.display = "block";
   Resultat.textContent ="";
  Essai.textContent = "";
 // alert("niveau facile 10 chances chiffre entre 1 et 100");
  nombreNiveau.textContent= (" entre 1 et 100");
  chance.textContent= (" vous avez 10 chances");
 NbEssai = 0;
 Valeur = 10;
 min = 0;
 max = 100;
chiffreAletoire( min , max);
});



/************************************************************************** */
function chiffreAletoire(mini , max) {
  alea = Math.round(Math.random() * (max - mini) + mini);
  return alea;
}

/**************************************************************************** */
  function compareNb(nbInput, alea, Valeur) {  

  if (nbInput != "") {

  if (nbInput > alea && Valeur > NbEssai)  {
    Resultat.style.color = "rgb(0,255,26)";
    Resultat.textContent = "c'est moins";
    setTimeout(function () {
      Resultat.textContent = "";
    }, 3000);
  } else if (nbInput < alea && Valeur > NbEssai ) {
    Resultat.style.color = "rgb(0,255,26)";
    Resultat.textContent = "c'est plus";
    setTimeout(function () {
      Resultat.textContent = "";
    }, 3000);
  }
  else if ( nbInput == alea && Valeur +1 > NbEssai)   {
    Resultat.style.color = "rgb(0,255,26)";
    Valider.style.display = "none";
    Resultat.textContent = `Gagner!!! Vous avez trouvé le chiffre en ${NbEssai } tentatives.`;
    alert("vous avez Gagné!! ")
    
    
   }

  else{
    Resultat.style.color = "rgb(0,255,26)";
    Essai.textContent = `fin de la partie le chiffre était: ${alea}`;
    Valider.style.display = "none";

  }
}


else{
  Essai.style.color ="red";
  Essai.style.fontSize = "20px"
  Essai.textContent =" veuillez rentrer un chiffre ";
  NbEssai --;
}
}
  

/**************************************************************************** */
   

input.addEventListener("input", function (e) {
  valeurChiffre = e.target.value;
});


/****************************************************************************** */
Valider.addEventListener("click", function () {
 NbEssai++;
  compareNb(valeurChiffre, alea, Valeur);

  reponse.style.color = "white";
  reponse.textContent = valeurChiffre;
});
/***************************************************************************/
Rejouer.addEventListener("click", function () {
 location.reload();

});

