"use strict";

//TRANSITION DE PAGE
//Création d'une constante pour stocker la div de la transition
const transition = document.querySelector(".transition")

const containeranimation = document.querySelector(".container");
//Lors de la détection du chargement de la page :
window.addEventListener("load", () => {
    //Ajout de l"animation "slide" au chargement de la page
    transition.classList.add("slide");
    //Détection de la fin d'animation de la transition
    transition.addEventListener ("animationend", () => {
        //Ajout de l'animation sur le main (rend le site blanc lors de la transition entre les pages)
        containeranimation.classList.add("bodyanimation");  
    })
    //Suppression de l'animation "slide" après 1,5s
    setTimeout(() => {
        transition.classList.remove("slide");
    }, 1500);
})

//BURGER MENU
//Création d'une constante pour stocker les liens de la navigation
const navLink = document.querySelectorAll('.navigation__link');
//Création d'une constante pour stocker le burger menu
const burger = document.querySelector(".navigation__burger");
//Création d'une constante pour stocker la liste des liens
const navMenu = document.querySelector(".navigation__list");
//Lors de la détection du click sur le bouton burger : 
burger.addEventListener("click", () => {
    //Ajout de la classe activeNav sur le Burger Menu
    burger.classList.toggle("activeBurger");
    //Ajout de la classe activeNav sur la Navigation
    navMenu.classList.toggle("activeNav");
});
//Selection des liens de la Nav
document.querySelectorAll(".navigation__link").forEach((link) =>
    //Lors de la détection du click sur l'un des liens de la navigation: 
    link.addEventListener("click", () => {
        //Suppression de la classe Burger Menu lors du clic sur la croix du Burger Menu
        burger.classList.remove("activeBurger");
        //Suppression de la classe Burger Menu lors du clic sur un lien de la navigation
        navMenu.classList.remove("activeNav");
    })
);

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


//NAVIGATION INTERACTIVE
//Set up de la variable de scroll à 0
let oldScrollY = 0;
let offsetY = 250;
//Création d'un let pour stocker la navigation
let navigation = document.querySelector(".navigation");
//Utilisation d'un if pour savoir s'il y a ou non la navigation
if (navigation){
    //Vérification du scroll sur le site
    window.addEventListener('scroll', function(e) {
  });
  //Selection de toutes les id des sections
  const sections = document.querySelectorAll("section[id]");
    //Activation au scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        //Scroll vertical
        let scrollY = window.pageYOffset;
        //Pour chacune des sections 
        sections.forEach(current => {
            //Création d'une constante avec la taille 
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute("id");
            //Condition d'ajout de la class activesection
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(".navigation__container a[href*=" + sectionId + "]").classList.add("activesection");
            } else {
                document.querySelector(".navigation__container a[href*=" + sectionId + "]").classList.remove("activesection");
            }
        });
    }
}
