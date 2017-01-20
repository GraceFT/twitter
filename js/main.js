var totalItems = 0;
var button = document.getElementById("agregar");
button.onclick= function(){
    var tarea= document.getElementById("tarea").value;
    addtarea(document.getElementById("lista"),tarea);}

function addtarea(lista,tarea){
    totalItems++;
    if (tarea==="" ||!tarea){
        return false;
    }else{
        var listItem= document.createElement("li");
        listItem.id="element"+totalItems;
        listItem.classList.add("col-md-10");
        
        var checkBox= document.createElement("input");
        checkBox.type= "checkbox";
        checkBox.id = "box";
        checkBox.onclick= checkedStatus;
        
        var span = document.createElement("span");
        span.id="item"+ totalItems;
        span.innerHTML = tarea;
        
        var icon = document.createElement("button");
        icon.innerHTML="Aun";
        icon.style.float="right";
        icon.onclick= deleteText;
        
        listItem.appendChild(icon);
        listItem.appendChild(checkBox);
        listItem.appendChild(span);
        lista.appendChild(listItem);
    }
}
function checkedStatus(){
    var box = this.id.replace("box","");
    var tarea=document.getElementById("item"+ box);
    
    if (this.checked){
        tarea.style.textDecoration="line-through";
        tarea.style.color= "#bf1a1a";
        tarea.style.fontWeight="bold";
        
    }else{
        tarea.style.textDecoration="none";
        tarea.style.color= "#000";
        tarea.style.fontWeight="100";
    }
}
function deleteText(){
    var toDelete = this.id.replace("item","")
		document.getElementById("element" + toDelete).style.display="none";
}
