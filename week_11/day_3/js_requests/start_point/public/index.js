var app = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
//create a new xmlhttprequest
var request = new XMLHttpRequest();
//open request tell it what method we want to use (get)
request.open("GET", url);
//set the call back we want it to run when it is complete
request.onload = callback;
//send the request
request.send();

}

var requestComplete = function() {
  console.log("success");
  if (this.status !== 200) return;

  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  populateList(countries);

}

var populateList = function(countries) {
  var ul = document.getElementById('country-list');
  for(country of countries) {
    var li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li)
  };
  
  

}

window.onload = app;