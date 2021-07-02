var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");
var bild4 = document.getElementById("bild4");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");

var slide = 1;

function next()
{
    slide++; // slide = slide + 1

    
    if(slide == 2) // von slide 1 zu 2 wechseln
    {
        bild1.style.opacity = "0";
        bild2.style.opacity = "100%";

        text1.style.opacity = "0";
        text2.style.opacity = "100%";
    }
    else if(slide == 3) // von slide 2 zu 3 wechseln
    {
        bild2.style.opacity = "0";
        bild3.style.opacity = "100%";

        text2.style.opacity = "0";
        text3.style.opacity = "100%";
    }

    else if(slide == 4) // von slide 3 zu 4 wechseln
    {
        bild3.style.opacity = "0";
        bild4.style.opacity = "100%";

        text3.style.opacity = "0";
        text4.style.opacity = "100%";
    }
    else // von vorne anfangen, slide 4 zu 1 wechseln
    {
        bild4.style.opacity = "0";
        bild1.style.opacity = "100%";

        text4.style.opacity = "0";
        text1.style.opacity = "100%";

        slide = 1;
    }
}

function prev()
{
    slide--; // slide = slide - 1;

    if(slide == 0) // zurückspulen zum 4. Slide
    {
        bild1.style.opacity = "0";
        bild4.style.opacity = "100%";

        text1.style.opacity = "0";
        text4.style.opacity = "100%";

        slide = 4;
    }
    else if(slide == 1) // von slide 2 zu 1 wechseln
    {
        bild2.style.opacity = "0";
        bild1.style.opacity = "100%";

        text2.style.opacity = "0";
        text1.style.opacity = "100%";
    }
    else if(slide == 2) // von slide 3 zu 2 wechseln
    {
        bild3.style.opacity = "0";
        bild2.style.opacity = "100%";

        text3.style.opacity = "0";
        text2.style.opacity = "100%";
    }

    else if(slide == 3) // von slide 4 zu 3 wechseln
    {
        bild4.style.opacity = "0";
        bild3.style.opacity = "100%";

        text4.style.opacity = "0";
        text3.style.opacity = "100%";
    }

}














var input = document.getElementById("input");
var liste = document.getElementById("liste");

var zahl = [];


for(var i = 1; i < liste.length; i++)
{
  
}

function add()
{
    var div = document.createElement("div");
    var text = input.value;
    var span = document.createElement("span");

    span.innerHTML =  i + ". " + text;
    zahl[i] =i++;
    
    div.appendChild(span);
    liste.appendChild(div);
    

}