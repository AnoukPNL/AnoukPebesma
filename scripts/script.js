// JavaScript Document
console.log("hi");

// ---- Nav ----
// haal de element op van html met var
var navbutton = document.querySelector("a:first-of-type");
var nav = document.querySelector("header nav:first-of-type");

// Luister als dit gebeurd voeg je toe
// Toggle ipv add - want dan blijft hij aanwezig en kun je er vaker op drukken.
navbutton.addEventListener("click", function(){
    nav.classList.toggle("open")
})

