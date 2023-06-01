"use strict";

//TRANSITION DE PAGE
//Création d'une constante pour stocker la div de la transition
const transition = document.querySelector(".transition")

const containeranimation = document.querySelector(".container");
//Détection du chargement de la page
window.addEventListener("load", () => {
    //Ajout de l"animation "slide" au chargement de la page
    transition.classList.add("slide");
    transition.addEventListener ("animationend", () => {
        containeranimation.classList.add("bodyanimation");  
    })
    //Suppression de l'animation "slide" après 1,5s
    setTimeout(() => {
        transition.classList.remove("slide");
    }, 1500);
})


//TIMER
//Création de la date de fin
var deadline = new Date ("jun 9, 2023 23:59:59").getTime();
//Fonction pour rafraîchir le timer toutes les secondes
setInterval(() => {
    //Récupération de la date actuelle
    var now = new Date().getTime();
    //Calculer la différence entre la date d'aujourd'hui et celle de rendu
    var presentation = deadline - now;
    //Calculer le jour, l'heure, la minute et la seconde
    var day = Math.floor(presentation / (1000 * 60 * 60 * 24));
    var hour = Math.floor((presentation%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minute = Math.floor((presentation % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((presentation % (1000 * 60)) / 1000);
    //Création d'un tableau pour stocker les variables de la date
    var arraydate = [];
    //Remplissage du tableau avec les variables de la date
    arraydate.push (day, hour, minute, second);
    //Séléctionner dans l'html les éléments
    var number = document.querySelectorAll(".timer__number");
    //Boucle pour écrire dans l'htlm les valeurs du timer
    for (let i=0; i<number.length; i++){
        number[i].innerHTML = arraydate[i];
    }
}, 1000);
