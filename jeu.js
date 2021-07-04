const boutonRules = document.querySelector(".boutonRules");
const popupRules = document.querySelector(".popupRules");
const boutonClose = document.querySelector(".boutonClose");
const blocResultat = document.querySelector(".blocChoixJoueurs");
const boutonsJeu = document.querySelector(".boutonCentral");
const triangleJeu = document.querySelector(".imageTriangle");
const boutonRejouer = document.querySelector(".boutonRejouer");
const boutonPierre = document.querySelector(".Pierre");
const boutonFeuille = document.querySelector(".Feuille");
const boutonCiseaux = document.querySelector(".Ciseaux");
const chiffreScore = document.querySelector(".chiffreScore");
const resultatJoueurPierre = document.querySelector(".resultatJoueurPierre");
const resultatJoueurFeuille = document.querySelector(".resultatJoueurFeuille");
const resultatJoueurCiseaux = document.querySelector(".resultatJoueurCiseaux");
const resultatPcPierre = document.querySelector(".resultatPcPierre");
const resultatPcFeuille = document.querySelector(".resultatPcFeuille");
const resultatPcCiseaux = document.querySelector(".resultatPcCiseaux");
const texteResultat = document.querySelector(".texteResultat");

let score = 0;

chiffreScore.innerHTML = score;


boutonRules.addEventListener("click" , () => {
	popupRules.style.visibility = "visible";
}) 


boutonClose.addEventListener("click" , () => {
	popupRules.style.visibility = "hidden";
}) 


boutonPierre.addEventListener("click" , () => {
	jeu("Pierre");
})


boutonFeuille.addEventListener("click" , () =>{
	jeu("Feuille"); //appelle la fonction jeu avec le paramètre feuille

})


boutonCiseaux.addEventListener("click" , () =>{
	jeu("Ciseaux");
})


boutonRejouer.addEventListener("click" , () => {
	//Afficher de nouveau les boutons pour jouer
	boutonsJeu.style.display = "block";
	triangleJeu.style.display = "block";

	//Cacher le bloc de resultat
	blocResultat.style.display = "none";

	//Reset des images de résultat
	resultatJoueurPierre.style.display = "none";
	resultatJoueurFeuille.style.display = "none";
	resultatJoueurCiseaux.style.display = "none";
	resultatPcPierre.style.display = "none";
	resultatPcFeuille.style.display = "none";
	resultatPcCiseaux.style.display = "none";
})


function jeu(actionJoueur) {
	let actionPc=aleatoire();
	console.log("Action joueur : " + actionJoueur);
	console.log("Action PC : " + actionPc);

	let resultat;

	if (actionJoueur==="Pierre"){
		if (actionPc==="Pierre"){
			joueurEgalite();
			resultat="Egalite";
		}
		else if (actionPc==="Feuille"){
			joueurPerd();
			resultat="Perdu";
		}
		else{
			joueurGagne();
			resultat="Gagne";
		}
	}

	else if (actionJoueur==="Feuille"){
		if (actionPc==="Pierre"){
			joueurGagne();
			resultat="Gagne";
		}
		else if (actionPc==="Feuille"){
			joueurEgalite();
			resultat="Egalite";
		}
		else{
			joueurPerd();
			resultat="Perdu";
		}
	}

	else if (actionJoueur==="Ciseaux"){
		if (actionPc==="Pierre"){
			joueurPerd();
			resultat="Perdu";
		}
		else if (actionPc==="Feuille"){
			joueurGagne();
			resultat="Gagne";
		}
		else{
			joueurEgalite();
			resultat="Egalite";
		}
	}
	afficherResultat(actionJoueur, actionPc, resultat);
}


function getRandomInt(max) {							//max : permet une intervalle de 0 à max 
  return Math.floor(Math.random() * max); //floor : permet d'arrondir à l'inférieur
}

function aleatoire() {
	let nombreAleatoire=getRandomInt(3);

	if (nombreAleatoire === 0){
		actionRobot="Pierre";
	}

	else if (nombreAleatoire ===1){
		actionRobot="Feuille";
	}

	else {
		actionRobot="Ciseaux";
	}

	return actionRobot;
}


function joueurGagne(){
	console.log("Vous avez gagné");
	score=score+1;
	console.log(score);
	chiffreScore.innerHTML = score;
}

function joueurPerd(){
	console.log("Vous avez perdu");
}

function joueurEgalite(){
	console.log("Egalité");
}


function afficherResultat(actionJoueur, actionPc, resultat){
	//Cacher les boutons de jeu
	boutonsJeu.style.display="none";
	triangleJeu.style.display="none";

	//Afficher la page de resultat
	blocResultat.style.display= "block";
	
	//Gerer affichage bouton Joueur
	if(actionJoueur==="Pierre"){
		resultatJoueurPierre.style.display="block";
	}
	else if(actionJoueur==="Feuille"){
		resultatJoueurFeuille.style.display="block";
	}
	else{
		resultatJoueurCiseaux.style.display="block";
	}

	//Gerer affichage bouton PC
	if(actionPc==="Pierre"){
		resultatPcPierre.style.display="block";
	}
	else if(actionPc==="Feuille"){
		resultatPcFeuille.style.display="block";
	}
	else{
		resultatPcCiseaux.style.display="block";
	}

	//Gerer affichage phrase resultat
	if(resultat==="Gagne"){
		texteResultat.innerHTML="Vous avez gagné";
	}

	else if(resultat==="Perdu"){
		texteResultat.innerHTML="Vous avez perdu";
	}

	else{
		texteResultat.innerHTML="Vous êtes à égalité";
	}

}
