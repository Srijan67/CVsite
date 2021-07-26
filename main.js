let width = window.innerWidth;
let height = window.innerHeight;
var srijanDP = document.querySelector(".srijan-dp");
var frontDesign = document.querySelector(".design");
var frontText = document.querySelector(".front-text");
var polygon = document.querySelector(".polygon");
frontDesign.addEventListener("animationend", () => {
  srijanDP.style.visibility = "visible";
  frontText.style.visibility = "visible";
  polygon.style.visibility = "visible";
  frontText.classList.add("front-text-animation");
});
//Creating skill presentation animaiton after scroll view using inbuilt IntersectinoObserver api.
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    // var square = entry.target.querySelector("#polygon-1");
    if (entry.isIntersecting) {
      gsap.from(".pgon", {
        x: 0,
        y: 0,
        duration: 1.5,
        opacity: 0,
        stagger: 0.2,
      });
    }
  });
});
//animation on hover submenu **doubt**
// gsap.from(".links:hover", { opacity: 0, y: -100, ease: elastic, duration: 1 });

observer.observe(document.querySelector(".polygon"));
// Can also be included with a regular script tag
// import Typed from "typed.js";

var typed = new Typed(".auto-typer", {
  strings: [
    "PROTOTYPE.",
    "GSAP.",
    "ANIMATION.",
    "DESIGNER.",
    "DEVELOPER.",
    "EDITOR.",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  // smartBackspace: true,
  loopCount: Infinity,
  loop: true,
});
//Light MOde
// var light = document.querySelector(".switch input");
// console.log(light.value);
// function lightMode() {
//   if (light.value == "off") {
//     srijanDP.style.visibility = "hidden";
//   }
// }
// lightMode();

//ScrollTrigger
// const tl = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);
// tl.to(".contact", {
//   y: -950,
//   duration: 1,
// });
// ScrollTrigger.create({
//   animate: tl,
//   trigger: ".projects",
//   start: "center center",
//   end: "top end",
//   markers: true,
//   scrub: true,
//   pin: true,
// });
