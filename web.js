function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.backgroundImage =
      "url('./assets/images/logo_img.png')";
  } else {
    document.getElementById("logo").style.backgroundImage =
      "url('./assets/images/logo.png')";
  }
}

//jumping to content at specific height
const navheight = document.getElementById("navigation").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  navheight - 1 + "px"
);

//text animation
let index = 0,
  interval = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

let timeouts = [],
  intervals = [];

const magic = document.querySelector(".magic");

magic.onmouseenter = () => {
  let index = 1;

  for (const star of document.getElementsByClassName("magic-star")) {
    timeouts.push(
      setTimeout(() => {
        animate(star);

        intervals.push(setInterval(() => animate(star), 1000));
      }, index++ * 300)
    );
  }
};

magic.onmouseleave = onMouseLeave = () => {
  for (const t of timeouts) clearTimeout(t);
  for (const i of intervals) clearInterval(i);

  timeouts = [];
  intervals = [];
};

//roadmap animation
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//subheadings animation
function intro() {
  let intro = document.querySelectorAll(".intro");

  for (let i = 0; i < intro.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = intro[i].getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      intro[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", intro);
//product animation

function marketplace() {
  let marketplace = document.querySelectorAll(".marketplace");

  for (let i = 0; i < marketplace.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = marketplace[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      marketplace[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", marketplace);

function lending() {
  let lending = document.querySelectorAll(".lending");

  for (let i = 0; i < lending.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = lending[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      lending[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", lending);

function game() {
  let game = document.querySelectorAll(".game-guild");

  for (let i = 0; i < game.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = game[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      game[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", game);

function bridge() {
  let bridge = document.querySelectorAll(".bridge");

  for (let i = 0; i < bridge.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = bridge[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      bridge[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", bridge);

function launchpad() {
  let launchpad = document.querySelectorAll(".launchpad");

  for (let i = 0; i < launchpad.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = launchpad[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      launchpad[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", launchpad);

//bottom arrow: back to top
myID = document.getElementById("myID");

let myScrollFunc = function () {
  let y = window.scrollY;
  if (y >= 800) {
    myID.className = "bottomMenu show";
  } else {
    myID.className = "bottomMenu hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
const slides = document.querySelector(".slider-inner-container").children;

// let index = 0;
function autoPlay(){
  nextSlide();
  updateDotIndicator();
}
function nextSlide(){
  if (index == slides.length - 1) {
     index = 0;
  }
  else{
     index++;
  }
  changeSlide();
}
function changeSlide(){
  for(let i=0; i < slides.length; i++){
     slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
let timer = setInterval(autoPlay, 5000);
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
function prevSlide(){
if (index == 0) {
index = slides.length - 1;
}
else{
index--;
}
changeSlide();
}
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 5000);
}
const indicator = document.querySelector(".indicator");
prev.addEventListener("click", function(){
prevSlide();
updateDotIndicator();
resetTimer();
})
next.addEventListener("click", function(){
nextSlide();
updateDotIndicator();
resetTimer();
})
function resetTimer(){
clearInterval(timer);
timer = setInterval(autoPlay, 5000);
}
dotIndicator();
function dotIndicator(){
for(let i=0; i < slides.length; i++){
const div = document.createElement("div");
div.setAttribute("onclick", "indicateSlide(this)");
div.id = i;
if(i == 0){
div.className = "active";
}
indicator.appendChild(div);
}
}
function indicateSlide(element){
index = element.id;
changeSlide();
updateDotIndicator();
resetTimer();
}
function updateDotIndicator(){
for(let i=0; i < indicator.children.length; i++){
indicator.children[i].classList.remove("active");
}
indicator.children[index].classList.add("active");
}
