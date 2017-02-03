var taskList =[]
function onButtonClick(){
    var element =document.getElementById("tarea").value;
    if(element===""){
        return false;
    }else{
    taskList.push({text:element,isDone:false});
    return drawTaskList();
    }
}
function drawTaskList(){
    var list = document.getElementById("lista");
    lista.innerHTML ="";
    
   for(var i in taskList){
      var html = "<li class='tareas' id='tasks'><input id='check'onclick='onCheckedList("+i+")' type='checkbox' "+(taskList[i].isDone?"checked":"")+">" + "<span>"+ taskList[i].text +"</span><i class='fa fa-trash tachito' onclick='deleteList("+i+")'style='font-size:25px;'></i></li>";
        lista.innerHTML+=html;}
}
function onCheckedList(_checkBox){
    var list = document.getElementById("lista");
    if (taskList[_checkBox].isDone==false){
        taskList[_checkBox].isDone=true;
        list.childNodes[_checkBox].childNodes[1].style.textDecoration="line-through";
    }else{
        taskList[_checkBox].isDone=false;
        list.childNodes[_checkBox].childNodes[1].style.textDecoration="none";}
}
function deleteList(_checkBox){ 
    taskList.splice(_checkBox,1)
    drawTaskList();
}
/*********************************************************NOTES******************************************************/
/*var taskList=[
    {nombre:"hola", isDone:true},
];
//funciones ternarias taskList[i][1]
//SOLO SE HACEN LAS FUNCIONES TERNARIAS CUANDO LOS VALORES SON BOOLEANOS, es decir, solo cuando se escoje entre dos opciones.
//Ternary functions just work with booleans, can choose between 2 options: false or true.
function drawTaskList(){
    var lista=document.getElementById("lista");
    for(var i in taskList){
        var html = "<li>< input type='checkbox' "+(taskList[i].isDone?"checked":"")+ "></input>" + taskList[1].nombre+ "</li>";
        lista.innerHTML += html; 
    }
}
/*****************************************OTHER METHOD - CREATING NODES******************************************************/
/*var  tarea = document.getElementById("tarea");
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

function checkStatus(evt){
    var check = evt.target.parentNode;
    if(evt.target.checked){
        check.style.textDecoration="line-through";
    }else{
        check.style.textDecoration="none";
    }
}
*/

