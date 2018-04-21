
// nb tentative affiche, init de l'affichage
var mot = "papa";
var motCache = "";
var nbTentative = 4;
var button = document.getElementById("button");
var champtexte = document.getElementById("input");
//var faute = document.getElementById("bad");
/**
 * 
 * Appel de la fonction init
 */
init();

/**
 *  Cette fonction, verifie si le caractère contenu dans le champ 
 *  texte existe dans le mot
 * 
 * 
 */
function verification() {
   // var champtexte = document.getElementById("input");
    var lettre = champtexte.value;
    var isexist = false;
    

    for (var i = 0; i < mot.length; i++) {
        if (lettre === mot[i]) {
            isexist = true;
            replace(lettre, i);
        }

    }
    
    if(isexist === false){
        tentative();
        document.getElementById("bad").innerHTML += lettre;
        console.log(lettre);
    }
    document.getElementById("input").value="";
    
    endGame();                                           
    affichageMot();
    vieRestantes();
}



/**
 * 
 * Cette fonction va initialiser l'interface graphique
 */
function init() {
    
    for (var i = 0; i < mot.length; i++) {
        motCache = motCache + "_";
    }
    affichageMot();
    vieRestantes();
    
}
// Cette fonction affiche le mot caché en le formatant (met des espaces entre le _ )
function affichageMot() {

    var result = document.getElementById("resultat");
    var nbCaractere = motCache.length;
    var message = "";

    for (var i = 0; i < nbCaractere; i++) {
        message = message + motCache[i] + " ";
    }
    result.innerHTML = message;

}

function replace(caractere, index) {
    var tempo = "";
    for (var i = 0; i < motCache.length; i++) {
        
        if (index === i) {
            tempo = tempo + caractere;
        
        } else {
            tempo = tempo + motCache[i];
        }
    }
    motCache = tempo;

}

function tentative(){
    nbTentative --;
}

function vieRestantes(){
    var vieRestantes=document.getElementById("lifes");
    
    if (nbTentative !== 0){
        vieRestantes.innerHTML=nbTentative;
    }  
}

function endGame (){
    if(nbTentative === 0){
        alert("vous avez perdu et vous êtes mort !");
        champtexte.disabled=true;
        document.getElementById("button").disabled=true;
    }else if (mot===motCache){
        alert("Bravo vous avez gagné");
        champtexte.disabled=true;
        document.getElementById("button").disabled=true;
    }
    
}



//
//
////var mot="developpeur";
//var motCache="";
//var nbTentatives = 2;
//
///**
// * appel de la fonction init
// * 
// */
//init();
//
//
///**
// * cette fonction verifie si le caractère contenu dans le champ texte existe dans le mot
// * 
// */
//function verification(){
//    var champtexte= document.getElementById("input");
//    var lettre = champtexte.value;
//    var isexist = false;
//   
//    for (var i=0;i<mot.length;i++){
//       if (lettre === mot[i] ){
//           replace(lettre,i);
//           isexist=true;                                // si la lettre est juste, la valeur devient vrai
//       }
//       
//   }
//   if (isexist===false){
//       tentative();
//   }
//   affichageMot();
////    if (isexist){
////       alert("le caractère est présent");
////    }else{
////   alert("le caractère n'est pas présent");
//    }
//
//
///**
// * cette fonction va initialiser l'interface graphique
// */
//
//function init(){
//    for (var i=0;i<mot.length;i++){
//    motCache = motCache + "_";
//    }
//    affichageMot();
//
//}
//
///**
// * cette fonction ne fait qu'une chose : elle affiche le mot cachaé en le formatant (met des espaces entre les "_"
// * 
// */
//function affichageMot(){
//
//    var result = document.getElementById("resultat"); // accède à la balise "résultat"
//    
//    var nbCaractere = motCache.length;                  // le nb de caractères
//    
//    var message ="";
//    
//    for (var i=0;i<nbCaractere;i++){
//        message = message + motCache[i] + " ";
//    }
//    result.innerHTML=message;
//}
//
///**
// * "replace" va prendre 2 arguments : le caractère à insérer et l'index où il doit prendre sa place
// * 
// */
//function replace(caractere,index){
//    
//    var temp="";
//    
//    for (var i=0;i<motCache.length;i++){
//        if (index === i){
//            temp = temp + caractere;
//            
//        }else{
//            temp = temp + motCache[i];
//        }
//    }
//    motCache=temp;
//}
//
//function tentative(){
//    nbTentative--;
//    if (nbTentative===0){
//        alert("vous avez perdu et vous êtes MORT");
//    }
//}