# Quiz

1. What does DOM stand for?
Document Object Model

2. What is the name of the object we can use to get information about the browser enviroment?

window

3. What is the name of the object that we can use to get access to the DOM representation of the page?

document

4. What type of files might we see in the Network tab for in Chrome devTools?
css, js, img

5. What version of HTML is document.querySelector from?
5

6. Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload?

window.onload

7. We use window.createElement to make new DOM elements, true or false?

false


8. List two ways to get all the elements by class 'cat'
var cats = document.querySelectorAll('.cat');
var cats2 = document.getElementsByClassName('cat');


9. List two ways to retrieve the element with id "goat"
var goat = document.getElementById('goat');
var goat = document.querySelector('#goat');

10. List two ways to get all the li elements

var li = document.getElementsByTagName('li');
  
var liTag = document.querySelector('.cat');
var children = liTag.children;
for (var i = 0; i < children.length; i++) {
    console.log(children[0]);
    console.log(children[1]);
  }

  document.querySelectorAll('li');

11. List two ways to get the first li element

var children = liTag.children;
for (var i = 0; i < children.length; i++) {
    console.log(children[0]);
  }

  var li = document.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
        console.log(li[0]);
      }


12. How can we set the a given element to be hidden?

cats.hidden = true;
cats.style.visibility = "hidden";
