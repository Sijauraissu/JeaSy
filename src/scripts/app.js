"use strict";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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
//Création d'une constante pour stocker le burger menu
const burger = document.querySelector(".navigation__burger");
//Création d'une constante pour stocker la liste des liens
const navMenu = document.querySelector(".navigation__container");
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

var scrollpos = 0;
//NAVIGATION INTERACTIVE
//Set up de la position du scroll à 0
let oldScrollY = 0;
//Set up du décalage vertical pour activer la nav
let offsetY = 250;
//Création d'un let pour stocker la navigation
let navigation = document.querySelector(".navigation");
//Utilisation d'un if pour savoir s'il y a ou non la navigation
const scrollsections = document.querySelectorAll("section[id]");
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


//SLIDER DES RANKS
//Selection des images des ranks
var IMGTransition = document.querySelectorAll(".fonctionalitydoc__rank");


//Création d'un if afin de savoir si il y a bien des images dans la page et ne pas faire d'erreur console
if (IMGTransition) {
    //Création d'une timeline en Gsap qui tourne à l'infini (-1)
    var tlIMG = new gsap.timeline({repeat: -1});

    //Boucle pour mettre l'animation sur toutes les images de mon slider
    for (let i = 0; i < IMGTransition.length; i++) {
        tlIMG
        //1ère étape de l'animation, commence avec une opacité 0 à -100px de sa position initiale avec une durée de 1 seconde
        .to(IMGTransition[i], { opacity: 0, duration: 1, x : -100}, ">")
        //2e étape de l'animation, opacité 1 à 0px de sa position initiale avec une durée de 2 secondes
        .to(IMGTransition[i], { opacity: 1, duration: 2, x : 0 }, ">")
        //3e étape de l'animation, opacité 0 à +100px de sa position initiale avec une durée de 1 seconde et un delai de 1,5 seconde
        .to(IMGTransition[i], { opacity: 0, duration: 1, x : 100 }, "+=1.5")
    }
    //Lancement de l'animation GSAP
    tlIMG.play();
}

// CHANGEMENT DE COULEURS
//Check sur la page pour charger l'animation après le DOM
window.addEventListener ("load", () => {
    //Création d'un tableau avec les différentes sections "colorchange"
    gsap.utils.toArray(".colorchange").forEach(function(el) {

        //Création d'une variale pour stocker les data-colors (couleur du background) dans l'html
        var color = el.getAttribute("data-color");
        //Création d'une variale pour stocker les data-fonts (couleur de la police) dans l'html
        var font = el.getAttribute("data-font");
        
        //Création d'un scroll trigger
        ScrollTrigger.create({

            trigger: el,
            start:'top center',
            end:'bottom center',
            onEnter: () => gsap.to('main', {backgroundColor:color, duration:1}), 

            onLeave: () => gsap.to('main', {backgroundColor:color, duration:1}),

          onLeaveBack: () => gsap.to('main', {backgroundColor:color,duration:1}),
          
          onEnterBack: () => gsap.to('main', {backgroundColor:color, duration:1}), 

          markers:false
        });

        ScrollTrigger.create({
            trigger: el,
            start:'top center',
            end:'bottom center',
            onEnter: () => gsap.to('main, h2, h3', {color:font, duration:1}), 
  
            onLeave: () => gsap.to('main, h2, h3', {color:font, duration:1}), 

            onEnterBack: () => gsap.to('main, h2, h3', {color:font, duration:1}), 
  
            onLeaveBack: () => gsap.to('main, h2, h3', {color:font, duration:1}),
 
            markers:false
        });
      
    });
});


var linkanimation = document.querySelectorAll(".link");

linkanimation.forEach ((links)=>{
    let bubble = links.querySelector(".bubble");

    let test = gsap.timeline()
    test.pause();

    test.to(bubble,{ width: "calc(100% + 1.3em)", ease: "Elastic.easeOut(0.25)", duration: 0.4 },">")
    test.to(bubble,{ width: "2em", left: "calc(100% - 1.45em)", ease: "Elastic.easeOut(0.4)", duration: 0.6 },">")

    links.addEventListener("mouseenter", (e) => {
        test.play();
    })

    links.addEventListener("mouseleave", (e) => {
        test.reverse();
    })
})



var btnUp = document.querySelector(".scrollbtn__up");
var btnDown = document.querySelector(".scrollbtn__down");



function scroll(i) {
    scrollsections[i].scrollIntoView();
}

btnUp.addEventListener("click", function() {
    scrollpos++;
    console.log(scrollpos);
    if(scrollpos >= scrollsections.length ) {
        scrollpos = 0;
    }
    // scrollsections[scrollpos].classList.add("active");

    // showvalue.innerHTML = tab_input[scrollpos];
    scroll(scrollpos);
});


// btnDown.addEventListener("click", function() {
//     scrollpos--;
//     console.log(scrollpos);
//     if(scrollpos < 0 ) {
//         scrollpos = scrollsections.length - 1;
//     }

//     // scrollsections[scrollpos].classList.add("active");

//     // showvalue.innerHTML = tab_input[scrollpos];
// });

// document.querySelector('#section_user').scrollIntoView();