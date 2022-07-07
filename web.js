

function scrollFunction() { 
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { 
    document.getElementById("logo").style.backgroundImage = "url('./assets/images/logo_img.png')"; 
  } else { 
    document.getElementById("logo").style.backgroundImage = "url('./assets/images/logo.png')"; 
  } 
}

//jumping to content at specific height
const navheight = document.getElementById('navigation').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navheight - 1 + "px")

//text animation
let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

let timeouts = [],
    intervals = [];

const magic = document.querySelector(".magic");

magic.onmouseenter = () => {
  let index = 1;
  
  for(const star of document.getElementsByClassName("magic-star")) {
    timeouts.push(setTimeout(() => {  
      animate(star);
      
      intervals.push(setInterval(() => animate(star), 1000));
    }, index++ * 300));
  };
}

magic.onmouseleave = onMouseLeave = () => {
  for(const t of timeouts) clearTimeout(t);  
  for(const i of intervals) clearInterval(i);
  
  timeouts = [];
  intervals = [];
}

//roadmap animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

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
  var intro = document.querySelectorAll(".intro");

  for (var i = 0; i < intro.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = intro[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      intro[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", intro);
//product animation


function marketplace() {
  var marketplace = document.querySelectorAll(".marketplace");

  for (var i = 0; i < marketplace.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = marketplace[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      marketplace[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", marketplace);

function lending() {
  var lending = document.querySelectorAll(".lending");

  for (var i = 0; i < lending.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = lending[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      lending[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", lending);

function game() {
  var game = document.querySelectorAll(".game-guild");

  for (var i = 0; i < game.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = game[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      game[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", game);

function bridge() {
  var bridge = document.querySelectorAll(".bridge");

  for (var i = 0; i < bridge.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = bridge[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      bridge[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", bridge);

function launchpad() {
  var launchpad = document.querySelectorAll(".launchpad");

  for (var i = 0; i < launchpad.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = launchpad[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      launchpad[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", launchpad);

