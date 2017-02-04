
var app = function() {
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var inputBox = document.querySelector('input');
  inputBox.onkeyup = handleKeyPress;

  var selectBox = document.querySelector('select');
  selectBox.onchange = handleSelectChanged;
}

  var handleSelectChanged = function(e) { //e is the event handler
    console.log(e.target); //this will show whats in the selectBox
    var ptag = document.querySelector('#select-result');
    ptag.innerText = this.value;
  }


  var handleKeyPress = function(){
    var ptag = document.querySelector('#text-result');
    console.log(this.value);
    ptag.innerText = this.value;
    // var input = document.querySelector('input');
    // console.log(input.value);
    // ptag.innerText = input.value; //input is user input
  }



  var counter = 0;
  var handleButtonClick = function(){
    var ptag = document.querySelector('#button-result'); //#gets id
    counter ++;
    ptag.innerText = "Woah dude! I totally got clicked " + counter + " times!";
  
}

window.onload = app;
