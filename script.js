const niveauFacile = document.getElementById("nivFacile");
const niveauMoyen = document.getElementById("nivMoyen");
const niveauDifficile = document.getElementById("nivDifficile");
const Valider = document.getElementById("valider");
const reponse = document.getElementById("Reponse");
const input = document.getElementById("input");
const gagner = document.getElementById("gagner");

let valeurChiffre;

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

/*ecoute btn valider, 
 change la couleur du chiffre sous la reponse, 
 affiche le chiffre,
controle si le chiffre entré et identique au chiffre random*/

function chiffreAletoire() {
  alea = Math.round(Math.random() * (10 - 1) + 1);
  console.log(alea);
  return alea;
}

Valider.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(valeurChiffre);
  console.log(alea);

  compareNb(valeurChiffre, alea);
  reponse.style.color = "white";
  reponse.textContent = valeurChiffre;

  //   if( valeurChiffre === alea  ){
  //     gagner.textContent = "bravo!!!!!";
  //   }
  //   else{ gagner.textContent = "perdu";}

  //   console.log(valeurChiffre);
  //   console.log(alea);
});

/*ecoute du chiffre et mise en memoire */

input.addEventListener("input", function (e) {
  valeurChiffre = e.target.value;
});

function compareNb(valeurChiffre, alea) {
  if (valeurChiffre === alea) {
    gagner.textContent = "bravo!!!!!";
    console.log("gagner");
  } 
  else {
    gagner.textContent = "perdu";
    console.log("perdu");
  }
}

chiffreAletoire();
