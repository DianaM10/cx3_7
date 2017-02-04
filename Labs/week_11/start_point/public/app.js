

var init = function(){
 // var saved = localStorage.getItem(todoList);
 // var todoListObject = JSON.parse(saved);
 var todoListObject = ["Alan", "Batman", "Claudia", "Diana", "Euan"];
 var button = document.querySelector('button');
 button.onclick = handleClick;
 var todoListElement = document.querySelector('#todo-list');
 populate(todoListElement, todoListObject);
}

var populate = function(list, state){
 for (listItem of state){
   var itemLi = document.createElement('li');
   itemLi.innerText = listItem;    
   addItem(list, itemLi);
 }
}

var addItem = function(list, item){
 list.appendChild( item );
}

var handleClick = function(){
 //get the value of the input box
 var input = document.querySelector('#todo-list');
 input.innerText = this.value;

 //get the "todo-list" element from the DOM
 // var todoList = document.querySelector('#todo-list');
 //invoke addItem
 //invoke save

}

var save = function(item){
  var saved = localStorage.selection;
  SetSpanText(saved);
  var json = JSON.stringify(saved);
  //save the item to localStorage 
  //NOTE You'll have to use JSON.stringify
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
