//wrap in call back function so it runs when dom is ready
console.log("first log");

// window.onload  =function()    {
var init = function() { 
  var tag = document.getElementById('intro');
  tag.innerHTML = "Hackzzzzzors!";
  console.log("second log");
}

console.log("third log");

window.onload = init; //not calling it, assigning it to window.onload so doesn't need function brackets
