document.addEventListener("DOMContentLoaded",()=>{
  emailjs.init({

publicKey:"2zKZUOSxMiSxO73re"

});



const preloader = document.querySelector(".preloader");


if(preloader){


setTimeout(()=>{


preloader.classList.add("hide");


},1500);


}




const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){

header?.classList.add("active");

}else{

header?.classList.remove("active");

}


});





const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");


if(burger && mobileMenu){


burger.addEventListener("click",()=>{


burger.classList.toggle("active");

mobileMenu.classList.toggle("active");


});


mobileMenu.querySelectorAll("a").forEach(link=>{


link.addEventListener("click",()=>{


burger.classList.remove("active");

mobileMenu.classList.remove("active");


});


});


}






const glow = document.querySelector(".cursor-glow");


if(glow && window.innerWidth > 900){


document.addEventListener("mousemove",(e)=>{


glow.style.left = e.clientX+"px";

glow.style.top = e.clientY+"px";


});


}





const revealElements = document.querySelectorAll(
`
section,
.project,
.skill,
.service-card,
.why-card,
.review-card,
.timeline-item,
.about-card,
.contact-form
`
);



revealElements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=
"opacity .8s ease, transform .8s ease";


});



const revealObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


revealObserver.unobserve(entry.target);


}


});


},
{

threshold:.15

});



revealElements.forEach(el=>{

revealObserver.observe(el);

});





const skills = document.querySelectorAll(".fill");


const skillObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.width =
entry.target.dataset.width ||
getComputedStyle(entry.target).width;


skillObserver.unobserve(entry.target);


}


});


},
{

threshold:.7

});



skills.forEach(skill=>{

skillObserver.observe(skill);

});




const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


const button =
item.querySelector(".faq-question");


const answer =
item.querySelector(".faq-answer");



if(!button || !answer) return;



button.addEventListener("click",()=>{


const opened =
item.classList.contains("active");



faqItems.forEach(other=>{


other.classList.remove("active");


const otherAnswer =
other.querySelector(".faq-answer");


if(otherAnswer){

otherAnswer.style.maxHeight=null;

}


});



if(!opened){


item.classList.add("active");


answer.style.maxHeight =
answer.scrollHeight+"px";


}



});


});




const scrollTop =
document.querySelector(".scroll-top");



if(scrollTop){


window.addEventListener("scroll",()=>{


if(window.scrollY > 600){


scrollTop.classList.add("active");


}else{


scrollTop.classList.remove("active");


}


});



scrollTop.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}




document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",(e)=>{


const target =
document.querySelector(anchor.getAttribute("href"));



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth",

block:"start"

});


}


});


});





const tiltCards =
document.querySelectorAll(
".project-window,.project,.service-card"
);



if(window.innerWidth > 900){



tiltCards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


const rect =
card.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



const rotateX =
(y - rect.height/2) / 25;


const rotateY =
(rect.width/2 - x) / 25;



card.style.transform =
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



});



card.addEventListener("mouseleave",()=>{


card.style.transform="";


});



});


}





const year =
document.querySelector(".year");


if(year){

year.textContent =
new Date().getFullYear();

}



const contactForm = document.querySelector("#contactForm");


if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();


emailjs.sendForm(

"service_pq0rpel",

"template_ly9c2mp",

contactForm

)

.then(()=>{


alert("🔥 Заявка отправлена! Я свяжусь с вами.");


contactForm.reset();


})


.catch((error)=>{


console.log(error);

alert("Ошибка отправки. Попробуйте ещё раз.");


});


});


}

  
});
