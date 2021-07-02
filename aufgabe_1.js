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