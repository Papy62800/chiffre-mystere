const niveauFacile = document.getElementById("nivFacile");
const niveauMoyen = document.getElementById("nivMoyen");
const niveauDifficile = document.getElementById("nivDifficile");
const Valider = document.getElementById("valider");
const reponse = document.getElementById("Reponse");
const input = document.getElementById("input");
const gagner = document.getElementById("gagner");
const boite = document.getElementById("boite");

let valeurChiffre;
let NbEssai = 0;


/* genere un chiffre aleatoire*/
let min = 1;
let max = 10;
// let alea =  Math.round(Math.random()* (max - min ) + min);

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

function chiffreAletoire() {
  alea = Math.round(Math.random() * (10 - 1) + 1);
  console.log(alea);
  return alea;
}

/*ecoute du chiffre et mise en memoire */

function compareNb(nbInput, alea) {
  if (nbInput > alea) {
    gagner.textContent = "c'est moins";
    console.log("perdu");
    setTimeout(function () {
      gagner.textContent = "";
    }, 1000);
  } else if (nbInput < alea) {
    gagner.textContent = "c'est plus";
    console.log("perdu");
    setTimeout(function () {
      gagner.textContent = "";
    }, 1000);
  } else {
    gagner.textContent = ` Gagner!!! Vous avez trouvé le chiffre en ${NbEssai} tentatives.`;
    // gagner.textContent = "gagné";
    console.log("gagné");
    setTimeout(function () {
      gagner.textContent = "";
    }, 5000);
  }
}

chiffreAletoire();

input.addEventListener("input", function (e) {
  valeurChiffre = e.target.value;
});

Valider.addEventListener("click", function () {
  console.log(valeurChiffre);
  console.log(alea);
  NbEssai++;
  console.log(NbEssai);
  compareNb(valeurChiffre, alea);
  reponse.style.color = "white";
  reponse.textContent = valeurChiffre;
});
