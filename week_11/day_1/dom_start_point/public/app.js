window.onload =function() {

  var addQuote = function(quote, author){
      var article = createArticle(quote);
      return article;
    };
    var createArticle = function(quote){
      var quoteArticle = document.createElement('article');
      quoteArticle.innerText = quote;
      return quoteArticle;
    };
    addQuote("Same as everyone else", "C7");
    addQuote("Same as everyone else again", "C8")


  var append = function(article, quoteArticle) {
    addQuote(quote, author).appendChild(author);


  }

  //1. Create the parent container
 

  // var quoteArticle = document.createElement('article');
  // quoteArticle.classList.add('quote');

  //2. create the first child

  

  var blockquote = document.createElement('blockquote');
  blockquote.innerText = "Same as everyone else";

  //3. Create cite element
 
  // var cite = document.createElement('cite');
  // cite.innerText = " Cohort 7";

  //4. append the cite to blockquote

  blockquote.appendChild(cite);

  // blockquote.appendChild(cite);

  //.5 append blockquote to the article
  quoteArticle.appendChild(blockquote);

  //6. Add everything to the quotes list
var quotes = document.querySelector('#quotes'); //id in css is #
quotes.append(quoteArticle);











//   var element = document.getElementById('tagline');
//   console.log(element);

//   var quotes = document.getElementsByClassName('quote');
//   console.log(quotes[0]);
//   quotes[0].innerHTML = "Another quote";

//   var pTags = document.getElementsByTagName('p');
//   console.log(pTags);

//   var citeTags = document.getElementsByTagName('cite');
//   console.log(citeTags);

//   var quoteOftheDay = document.getElementById("quote-of-the-day");

//   var allQuotes = document.querySelector('.quote');

//   var signUp = document.querySelector('#sign-up');

//   var children = signUp.children;
//   console.log(children);
//   for (var i = 0; i < children.length; i++) {
//     console.log(children[i]);
//   }

//   quotes[0].className = 'red-quote';

//   element.style.backgroundColor = "yellow";

// //to hide quote of the day
//   quoteOftheDay.hidden = true;
//   // quoteOftheDay.style.display = 'none';
//   // quoteOftheDay.style.visibility = "hidden";

// //to make backgound blue of articles
// var articles = document.querySelectorAll('.quote');
//   // var articles = document.getElementsByTagName('article');
//   // for (var i = 0; i < articles.length; i++) {
//   //   articles[i].style.backgroundColor = "DodgerBlue";

// var articleArray = Array.prototype.slice.call(articles);
// console.log(articles);
// console.log(articleArray);


//   }
}