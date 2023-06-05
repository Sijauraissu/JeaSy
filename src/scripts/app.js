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
//Set up de la position du scroll à 0
let oldScrollY = 0;
//Set up du décalage vertical pour activer la nav
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


//SLIDER DES RANKS
//Selection des images des ranks
var IMGTransition = document.querySelectorAll(".fonctionalitydoc__rank");


//Création d'un if afin de savoir si il y a bien des images dans la page et ne pas faire d'erreur console
if (IMGTransition) {
    //Création d'une timeline en Gsap qui tourne à l'infini (-1)
    var tlIMG = new gsap.timeline({repeat: -1});

    tlIMG
    //1ère étape de l'animation, commence avec une opacité 0 à -100px de sa position initiale avec une durée de 1 seconde
    .to(IMGTransition[0], { opacity: 0, duration: 1,x : -100 }, ">")
    //2e étape de l'animation, opacité 1 à 0px de sa position initiale avec une durée de 2 secondes
    .to(IMGTransition[0], { opacity: 1, duration: 2, x : 0 }, ">")
    //3e étape de l'animation, opacité 0 à +100px de sa position initiale avec une durée de 1 seconde et un delai de 1,5 seconde
    .to(IMGTransition[0], { opacity: 0, duration: 1, x : 100 }, "+=1.5")

    .to(IMGTransition[1], { opacity: 0, duration: 1, x : -100}, ">")
    .to(IMGTransition[1], { opacity: 1, duration: 2, x : 0 }, ">")
    .to(IMGTransition[1], { opacity: 0, duration: 1, x : 100 }, "+=1.5")

    .to(IMGTransition[2], { opacity: 0, duration: 1, x : -100 }, ">")
    .to(IMGTransition[2], { opacity: 1, duration: 2, x : 0 }, ">")
    .to(IMGTransition[2], { opacity: 0, duration: 1, x : 100 }, "+=1.5")
    
    .to(IMGTransition[3], { opacity: 0, duration: 1, x : -100 }, ">")
    .to(IMGTransition[3], { opacity: 1, duration: 2, x : 0 }, ">")
    .to(IMGTransition[3], { opacity: 0, duration: 1, x : 100 }, "+=1.5")
    
    .to(IMGTransition[4], { opacity: 0, duration: 1, x : -100 }, ">")
    .to(IMGTransition[4], { opacity: 1, duration: 2, x : 0 }, ">")
    .to(IMGTransition[4], { opacity: 0, duration: 1, x : 100 }, "+=1.5")

    .to(IMGTransition[5], { opacity: 0, duration: 1, x : -100 }, ">")
    .to(IMGTransition[5], { opacity: 1, duration: 2, x : 0 }, ">")
    .to(IMGTransition[5], { opacity: 0, duration: 1, x : 100 }, "+=1.5")

    .to(IMGTransition[6], { opacity: 0, duration: 1, x : -100 }, ">")
    .to(IMGTransition[6], { opacity: 1, duration: 2, x : 0 }, ">")
    .to(IMGTransition[6], { opacity: 0, duration: 1, x : 100 }, "+=1.5")

    //Lancement de l'animation GSAP
    tlIMG.play();
}

//CHANGEMENT DE COULEUR DE BACKGROUND

// const container = document.querySelector(".colorchange");
// const body = document.querySelector(".container");
// const presentation = document.querySelector(".presentationdoc");

// var bgColor = "red";
// var fontColor = "#110803";
// var reversebgColor = "green";
// var reversefontColor = "#FCF3EE";

// const test1 = {
//     section :document.querySelector(".colorchange"),
//     bgColor: bgColor,
//     fontColor: fontColor,
// }

// const test2 = {
//     section :document.querySelector(".presentation"),
//     bgColor: reversebgColor,
//     fontColor: reversefontColor,
// }

// function setColors(curr, next) {
//     let tl = gsap.timeline({ease: 'power2.in'});
//     tl.to(container, {
//         duration: 1,
//         background: next.bgColor,
//         color: next.fontColor,
//         delay: -1
//     });
// }

// gsap.set(body, {
//     backgroundColor: bgColor,
//     color: fontColor
// });

// gsap.to(body, {
//     duration: 1,
//     scrollTrigger: {
//         trigger: container,
//         markers: true,
//         start: "top 70%",
//         end: presentation,
//         onEnter: () => setColors(test1, test2),
//         onLeaveBack: () => setColors(test2, test1)
//     }
// });

// const colorchange = document.querySelector(".studydoc__subtitle"); //trigger
// const body = document.querySelector(".container"); //truc qui doit changer de couleur
// const presentation = document.querySelector(".presentationdoc");

// var bgColor = "yellow";
// var fontColor ="green";
// var bgColorReverse = "pink";
// var fontColorReverse = "blue";

// const main = {
//     fonctionnalité : document.querySelector(".fonctionalitydoc"),
//     bgColor : bgColor,
//     fontColor : fontColor,
// }

// const reverse = {
//     colorchange : document.querySelector(".colorchange"),
//     bgColor : bgColorReverse,
//     fontColor : fontColorReverse,
// }

// const end = {
//    end : document.querySelector(".presentationdoc"),
//     bgColor : bgColor,
//     fontColor : fontColor,
// }

// function setColors (curr, next) {
//         let tl = gsap.timeline({ease: 'power2.in'});

//         tl.to(colorchange, {
//         duration: 1,
//         background: next.bgColor,
//         color: next.fontColor,
//         delay: -1
//     });
// }

// gsap.set(body, {
//     backgroundColor: main.bgColor,
//     color: main.fontColor
// });

// gsap.to(reverse, {
//     duration: 1,
//     scrollTrigger: {
//       trigger: reverse.section,
//       markers: true,
//       start: "top 70%",
//       end: '+=100',
//       onEnter: () => setColors(main, reverse),
//       onLeaveBack: () => setColors(reverse, main)
//     }
// });

// gsap.to(end.section, {
//     duration: 1,
//     scrollTrigger: {
//       trigger: end.section,
//       markers: true,
//       start: "top 70%",
//       end: '+=100',
//       onEnter: () => setColors(reverse, end),
//       onLeaveBack: () => setColors(end, reverse)
//     }
// });
// const trigger = document.querySelector(".studydoc");
// const main = document.querySelector(".container");

// gsap.fromTo( main, {
// 	backgroundColor: gsap.getProperty("main", "--dark")
// }, {
// 	scrollTrigger: {
// 		trigger: trigger,
// 		scrub: true,
//         start: "top bottom",
// 		end: "center bottom",
//         markers: true,
// 	},
// 	backgroundColor: gsap.getProperty("main", "--light")
// });

// gsap.utils.toArray('section').forEach((section, i) => {
// 	var bgColor = section.dataset.color;

// 	gsap.from('.container', {
// 		scrollTrigger: {
// 			markers: true,
// 			trigger: section,
// 			start: 'top 10%',
// 			end: 'bottom 10%',
// 			// toggleActions: 'play reset play reset',
// 		},
// 		backgroundColor: `rgba(${bgColor}, 0.80)`,
//         // backgroundColor: "red",
// 		duration: 0.5,
// 		onComplete:function() {
// 		     console.log( bgColor );
// 		}
// 	});
// });

// gsap.to(".container", {
//     scrollTrigger: ".colorchange",
//     backgroundColor: "red"
// });

// window.addEventListener("load", function () {
//     const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
//     scrollColorElems.forEach((colorSection, i) => {
//       const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
//       const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
  
//       ScrollTrigger.create({
//         trigger: colorSection,
//         scroller: ".container",
//         start: "top 50%",
//         onEnter: () =>
//           gsap.to("body", {
//             backgroundColor: colorSection.dataset.bgcolor,
//             color: colorSection.dataset.textcolor,
//             overwrite: "auto"
//           }),
//         onLeaveBack: () =>
//           gsap.to("body", {
//             backgroundColor: prevBg,
//             color: prevText,
//             overwrite: "auto"
//           })
//       });
//     });
//   });

window.addEventListener ("load", () => {
    gsap.utils.toArray(".colorchange").forEach(function(el) {

        var color = el.getAttribute("data-color");
        var font = el.getAttribute("data-font");
        
        ScrollTrigger.create({
          trigger: el,
          start:'top center',
          end:'bottom center',
          onEnter: () => gsap.to('main', {backgroundColor:color}, {color:font}), 

          onLeave: () => gsap.to('main', {backgroundColor:color}, {color:font}),

          onLeaveBack: () => gsap.to('main', {backgroundColor:color}, {color:font}),
          
          onEnterBack: () => gsap.to('main', {backgroundColor:color}, {color:font}), 

          markers:true
        });

        ScrollTrigger.create({
            trigger: el,
            start:'top center',
            end:'bottom center',
            onEnter: () => gsap.to('main, h2, h3', {color:font}), 
  
            onLeave: () => gsap.to('main, h2, h3', {color:font}), 

            onEnterBack: () => gsap.to('main, h2, h3', {color:font}), 
  
            onLeaveBack: () => gsap.to('main, h2, h3', {color:font}),
 
            markers:true
        });
      
    });
});

