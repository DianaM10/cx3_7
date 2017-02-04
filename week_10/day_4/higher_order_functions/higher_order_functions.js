var thingWeWantToHappenLater = function() {
  console.log( "I waited to run" );
};

setTimeout( thingWeWantToHappenLater, 1000 ) //takes in millisecs
console.log("a log at bottom of the file")




//this is an example of writing a higher order function, passing a function into another function
// var myFunction = function( aFunction ) {
// aFunction( 99 );
// };

// var anotherFunction = function( number ) {
//   console.log( number );
// };

// myFunction( anotherFunction );