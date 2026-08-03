 /* ==========================================
   KARANMOREHUB
   FINAL SCRIPT.JS
   PART 1
========================================== */


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */


const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);



const revealObserver = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });


},
{
    threshold:0.15
});



revealElements.forEach(element=>{

    revealObserver.observe(element);

});





/* ==========================================
   COUNTER ANIMATION
========================================== */


const counters =
document.querySelectorAll(".counter");



const counterObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter =
entry.target;


const target =
Number(counter.dataset.target);



let count=0;



const updateCounter=()=>{


const increment =
Math.ceil(target/80);



if(count < target){


count += increment;


counter.innerText =
count;


requestAnimationFrame(updateCounter);


}

else{


counter.innerText =
target+"+";


}


};



updateCounter();



counterObserver.unobserve(counter);


}



});


},
{
threshold:.5
});



counters.forEach(counter=>{

counterObserver.observe(counter);

});





/* ==========================================
   MOBILE MENU
========================================== */


 const menuToggle =
document.getElementById("menuToggle");


 const mobileNavLinks =
document.querySelector(".nav-links");


 if(menuToggle && mobileNavLinks){

menuToggle.addEventListener(
"click",
()=>{

menuToggle.classList.toggle("active");

mobileNavLinks.classList.toggle("show-menu");

});

}

/* ==========================================
   LIVE SEARCH SYSTEM
========================================== */


const products = [

    {
        name:"Age Calculator",
        type:"Calculator",
        url:"/age-calculator/"
    },

    {
        name:"Typing Speed Test",
        type:"Productivity Tool",
        url:"/typing-speed-test/"
    },

    {
        name:"PDF Tools",
        type:"Utility",
        url:"#"
    },

    {
        name:"AI Tools",
        type:"Artificial Intelligence",
        url:"#"
    }

];



const searchInput =
document.getElementById("projectSearch");


const searchResults =
document.getElementById("searchResults");



if(searchInput){


searchInput.addEventListener(
"input",
()=>{


let value =
searchInput.value.toLowerCase();


searchResults.innerHTML="";



if(value==="") return;



let result =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);



result.forEach(item=>{


let card =
document.createElement("a");


card.href =
item.url;


card.className =
"search-result-card";



card.innerHTML=`

<h3>${item.name}</h3>

<p>${item.type}</p>

`;



searchResults.appendChild(card);



});


});


}






/* ==========================================
   THEME BUTTON
========================================== */


const themeButton =
document.getElementById("themeToggle");



if(themeButton){


themeButton.addEventListener(
"click",
()=>{


document.body
.classList
.toggle("dark-mode");



if(
document.body
.classList
.contains("dark-mode")
){

themeButton.innerHTML="☀️";


}

else{


themeButton.innerHTML="🌙";


}



});


}







/* ==========================================
   CURSOR GLOW EFFECT
========================================== */


const glow =
document.createElement("div");


glow.className =
"cursor-glow";


document.body.appendChild(glow);




document.addEventListener(
"mousemove",
(e)=>{


glow.style.left =
e.clientX+"px";


glow.style.top =
e.clientY+"px";



});







/* ==========================================
   3D CARD TILT EFFECT
========================================== */


const cards =
document.querySelectorAll(
".product-card, .service-card, .blog-card"
);



cards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const box =
card.getBoundingClientRect();



const x =
e.clientX - box.left;


const y =
e.clientY - box.top;



const centerX =
box.width/2;


const centerY =
box.height/2;



const rotateX =
(y-centerY)/18;


const rotateY =
(centerX-x)/18;



card.style.transform = `

perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;



});





card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});



});

/* ==========================================
   PAGE LOADER
========================================== */


window.addEventListener(
"load",
()=>{


const loader =
document.querySelector(".loader");



if(loader){


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);


}


});







/* ==========================================
   BACK TO TOP BUTTON
========================================== */


const topButton =
document.createElement("button");


topButton.className =
"top-button";


topButton.innerHTML =
"↑";


document.body.appendChild(topButton);




window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){


topButton.classList.add("show");


}

else{


topButton.classList.remove("show");


}


});





topButton.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});








/* ==========================================
   IMAGE LAZY LOADING
========================================== */


const lazyImages =
document.querySelectorAll(
"img[data-src]"
);



const imageObserver =
new IntersectionObserver(
(entries,observer)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const image =
entry.target;



image.src =
image.dataset.src;



image.removeAttribute(
"data-src"
);



observer.unobserve(image);



}



});


},
{
threshold:.2
});



lazyImages.forEach(image=>{


imageObserver.observe(image);


});







/* ==========================================
   SMOOTH PARALLAX EFFECT
========================================== */


const floatingElements =
document.querySelectorAll(
".float"
);



window.addEventListener(
"scroll",
()=>{


let scrollValue =
window.scrollY;



floatingElements.forEach(element=>{


element.style.transform =
`
translateY(${scrollValue * 0.04}px)
`;



});


});








 /* ==========================================
   ACTIVE NAVIGATION
========================================== */


const sections =
document.querySelectorAll(
"section[id]"
);


const navigationLinks =
document.querySelectorAll(
".nav-links a"
);



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}


});



navigationLinks.forEach(link=>{


link.classList.remove(
"active"
);



if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add(
"active"
);

}


});


});