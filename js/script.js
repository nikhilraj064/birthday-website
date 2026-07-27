// ======================================
// Happy Birthday SOWJU
// script.js (Part 1)
// ======================================

// Elements
const hero = document.getElementById("hero");
const giftSection = document.getElementById("giftSection");
const letterSection = document.getElementById("letterSection");
const gallerySection = document.getElementById("gallerySection");
const finalSection = document.getElementById("finalSection");

const startBtn = document.getElementById("startBtn");
const giftBox = document.querySelector(".gift-box");
const letterText = document.getElementById("letterText");

// ======================================
// Initial State
// ======================================

giftSection.style.display = "none";
letterSection.style.display = "none";
gallerySection.style.display = "none";
finalSection.style.display = "none";

// ======================================
// Hero Animation
// ======================================

window.addEventListener("load", () => {

    gsap.from(".glass-card",{
        y:80,
        opacity:0,
        duration:1.3,
        ease:"power3.out"
    });

    gsap.from(".tag",{
        opacity:0,
        y:-20,
        delay:.3,
        duration:.8
    });

    gsap.from("h1",{
        opacity:0,
        y:-40,
        delay:.5,
        duration:1
    });

    gsap.from("h2",{
        opacity:0,
        scale:.8,
        delay:.8,
        duration:1
    });

    gsap.from(".age",{
        opacity:0,
        scale:0,
        delay:1.1,
        duration:.8,
        ease:"back.out(1.7)"
    });

    gsap.from(".quote",{
        opacity:0,
        y:30,
        delay:1.4,
        duration:.8
    });

    gsap.from("#startBtn",{
        opacity:0,
        y:40,
        delay:1.7,
        duration:.8
    });

});

// ======================================
// Open Surprise Button
// ======================================

startBtn.addEventListener("click",()=>{

    gsap.to(".glass-card",{

        scale:.8,
        opacity:0,
        duration:.7

    });

    gsap.to("#hero",{

        opacity:0,
        duration:1,

        onComplete:()=>{

            hero.style.display="none";

            giftSection.style.display="flex";

            gsap.from("#giftSection",{

                opacity:0,
                duration:1

            });

        }

    });

});

// ======================================
// Gift Animation
// ======================================

gsap.to(".gift-box",{

    y:-20,

    repeat:-1,

    yoyo:true,

    duration:1.2,

    ease:"power1.inOut"

});

giftBox.addEventListener("mouseenter",()=>{

    gsap.to(giftBox,{

        scale:1.15,

        rotation:8,

        duration:.3

    });

});

giftBox.addEventListener("mouseleave",()=>{

    gsap.to(giftBox,{

        scale:1,

        rotation:0,

        duration:.3

    });

});

// ======================================
// Gift Click → Letter
// ======================================

const birthdayLetter = `Hello Sowju ❤️,

By the time you're reading this, you'll probably be with your family, celebrating your birthday.

I really wanted you to be here with me for this birthday, but it would have been so selfish of me to keep you away from celebrating with your twin sister and your family.

So today, consider this more of a thank-you letter than a birthday note.

Thank you for coming into my life.

Thank you for showing me a way when I couldn't see one.

Thank you for standing beside me during my toughest times.

Thank you for staying with me when I felt like I was nothing.

Thank you for motivating me to become a better person.

Thank you for criticizing me whenever I was wrong.

Thank you for becoming my comfort zone.

Thank you for making me realize that even I deserve to be loved.

Thank you for tolerating all my nonsense.

Thank you for believing in me even when I couldn't believe in myself.

And finally...

Thank you for making my life colourful.

I hope next year we celebrate your birthday together.

Happy Birthday...
~~Sowju~~
My Sowju. ❤️`;

giftBox.addEventListener("click", () => {

    gsap.to(giftBox, {

        scale:0,
        rotation:720,
        duration:1,

        ease:"back.in(1.7)",

        onComplete:()=>{

            giftSection.style.display="none";

            letterSection.style.display="flex";

            gsap.from(".letter-card",{

                y:100,
                opacity:0,
                duration:1

            });

            typeLetter();

        }

    });

});

// ======================================
// Typewriter Effect
// ======================================

let index = 0;

function typeLetter(){

    const oldBtn = document.getElementById("continueBtn");
    if(oldBtn){
        oldBtn.remove();
    }
    letterText.innerHTML="";

    index=0;

    const timer = setInterval(()=>{

        if(index < birthdayLetter.length){

            letterText.innerHTML += birthdayLetter.charAt(index);

            index++;

        }else{

            clearInterval(timer);

            showContinueButton();

        }

    },35);

}

// ======================================
// Continue Button
// ======================================

function showContinueButton(){

    // Don't create another button if it already exists
    if(document.getElementById("continueBtn")) return;

    const btn = document.createElement("button");

    btn.id = "continueBtn";
    btn.innerText = "Continue ❤️";
    btn.style.marginTop = "40px";

    document.querySelector(".letter-card").appendChild(btn);

    gsap.from(btn,{
        opacity:0,
        y:30,
        duration:.8
    });

    btn.addEventListener("click",()=>{

        gsap.to(".letter-card",{

            opacity:0,
            y:-60,
            duration:.8,

            onComplete:()=>{

                letterSection.style.display="none";
                gallerySection.style.display="flex";

                gsap.from("#gallerySection",{
                    opacity:0,
                    duration:1
                });

            }

        });

    });

}

const photos=[

"assets/images/photo1.jpg",
"assets/images/photo2.jpg",
"assets/images/photo3.jpg",
"assets/images/photo4.jpg",
"assets/images/photo5.jpg",
"assets/images/photo6.jpg",
"assets/images/photo7.jpg",
"assets/images/photo8.jpg",
"assets/images/photo9.jpg"

];

const captions=[

"Every moment with you is my favourite memory ❤️",

"You make ordinary days magical ✨",

"Your smile is my favourite place 😊",

"I'm grateful for every second with you ❤️",

"You are my peace and happiness 🌸",

"Life became beautiful after meeting you 💖",

"Thank you for being you 🥰",

"I'll always cherish these memories ❤️",

"Happy Birthday, my beautiful girl 🎂❤️"

];

let currentMemory=0;

const memoryImage=document.getElementById("memoryImage");

const memoryCaption=document.getElementById("memoryCaption");

const nextMemory=document.getElementById("nextMemory");

nextMemory.addEventListener("click",()=>{

    currentMemory++;

    if(currentMemory<photos.length){

        gsap.to(memoryImage,{

            opacity:0,
            scale:.9,
            duration:.4,

            onComplete:()=>{

                memoryImage.src=photos[currentMemory];

                memoryCaption.innerText=captions[currentMemory];

                gsap.to(memoryImage,{

                    opacity:1,
                    scale:1,
                    duration:.5

                });

            }

        });

    }

    else{

        gallerySection.style.display="none";

        finalSection.style.display="flex";

        gsap.from(".final-card",{

            opacity:0,
            scale:.8,
            duration:1

        });

    }

});
// ======================================

const galleryImages = document.querySelectorAll(".gallery img");

let viewedImages = 0;
let finalUnlocked = false;

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        // Prevent duplicate counting
        if (img.dataset.viewed === "true") return;

        img.dataset.viewed = "true";
        viewedImages++;

        gsap.to(img,{
            scale:1.08,
            duration:.25,
            yoyo:true,
            repeat:1
        });

        // After all 9 images are clicked
        if(viewedImages === galleryImages.length && !finalUnlocked){

            finalUnlocked = true;

            setTimeout(showFinalSection,700);

        }

    });

});

// ======================================
// Show Final Section
// ======================================

function showFinalSection(){

    gsap.to("#gallerySection",{

        opacity:0,
        duration:.8,

        onComplete:()=>{

            gallerySection.style.display="none";

            finalSection.style.display="flex";

            gsap.from(".final-card",{

                opacity:0,
                scale:.8,
                y:80,
                duration:1

            });

        }

    });

}

// ======================================
// Celebrate Button
// ======================================

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click",()=>{

    celebrateBtn.innerHTML="🎉 Happy Birthday SOWJU ❤️ 🎉";

    launchConfetti();

});

// ======================================
// Simple Confetti
// ======================================

function launchConfetti(){

    for(let i=0;i<180;i++){

        createConfetti();

    }

}

function createConfetti(){

    const confetti=document.createElement("div");

    confetti.className="confetti";

    confetti.style.left=Math.random()*100+"vw";

    confetti.style.top="-20px";

    confetti.style.width=(6+Math.random()*8)+"px";

    confetti.style.height=(6+Math.random()*8)+"px";

    confetti.style.position="fixed";

    confetti.style.borderRadius="50%";

    confetti.style.pointerEvents="none";

    confetti.style.zIndex="9999";

    const colors=[
        "#ff4fa0",
        "#ffd700",
        "#00d4ff",
        "#7cff6b",
        "#ffffff",
        "#ff7b54",
        "#b388ff"
    ];

    confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

    document.body.appendChild(confetti);

    gsap.to(confetti,{

        y:window.innerHeight+100,

        x:(Math.random()-0.5)*400,

        rotation:Math.random()*720,

        duration:3+Math.random()*2,

        ease:"power1.out",

        onComplete:()=>{

            confetti.remove();

        }

    });

}

// ======================================
// Fade-in on Scroll
// ======================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

},{
    threshold:0.2
});

[
    giftSection,
    letterSection,
    gallerySection,
    finalSection
].forEach(section=>{

    observer.observe(section);

});

// ======================================
// End of script.js
// ======================================
