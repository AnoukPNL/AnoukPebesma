// JavaScript Document
console.log("hi");

// ---- Nav ----
// haal de element op van html met var
var navbutton = document.querySelector("a:first-of-type");
var nav = document.querySelector("header nav:first-of-type");

// Luister als dit gebeurd voeg je toe
// Toggle ipv add - want dan blijft hij aanwezig en kun je er vaker op drukken.
navbutton.addEventListener("click", function(){
    nav.classList.toggle("open");
});


// Thema switch
var themaswitchelement = document.querySelector("footer button");

function themaswitch(){
    document.documentElement.classList.toggle("newtheme");
}

themaswitchelement.addEventListener("click",themaswitch);



// Audio op de animatie bron: https://www.sitepoint.com/community/t/play-sound-on-hover-or-click-diffferent-audio-for-different-images/99391
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
