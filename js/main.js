var  tarea = document.getElementById("tarea");
var  button = document.getElementById("agregar");
var lista = document.getElementById("lista");

button.addEventListener("click", clickAgregar);

function clickAgregar(event){
  if (tarea.value===""||!tarea.value){
      return false;
  }else{
      return addTarea();
  }
}
function addTarea(){
 
    var listItem= document.createElement("div");
    listItem.classList.add("tareas");
    
    var checkBox= document.createElement("input");
    checkBox.type= "checkbox";
    checkBox.classList.add("check");
        
    var borrar = document.createElement("span");
    borrar.innerHTML="<i class='fa fa-trash tachito'></i>";
    borrar.classList.add("tachito");
    
    var span = document.createElement("span");
    span.innerHTML = tarea.value;
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(borrar);
    lista.appendChild(listItem);
    tarea.value = "";
    tarea.focus();
    
    borrar.addEventListener('click',ondeleteItem);
    checkBox.addEventListener('click',checkStatus);
}
function ondeleteItem(evt){
    var lista = evt.target.parentNode.parentNode.parentNode;
    lista.removeChild( evt.target.parentNode.parentNode);   
}
function checkStatus(evt){
    var check = evt.target.parentNode;
    if(evt.target.checked){
        check.style.textDecoration="line-through";
    }else{
        check.style.textDecoration="none";
    }
}


