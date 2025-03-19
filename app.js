var redl=document.getElementById("red");
var yellowl=document.getElementById("yellow");
var greenl=document.getElementById("green");

function resetlight(){
redl.classList.remove("redchange");
yellowl.classList.remove("yellowchange");
greenl.classList.remove("greenchange");
}


function redch(){
    resetlight();
    redl.classList.add("redchange");
}

function yellowch(){
    resetlight();
    yellowl.classList.add("yellowchange");
}

function greench(){
    resetlight();
    greenl.classList.add("greenchange");
}