var globalVariable = 99;

var separateFunction = function() {
  var separateA = 2;
};

var outerFunction = function() {
  var outerA = 1;
  var innerFunction = function() {
    console.log('outerA ', outerA);
    console.log('globalVariable', globalVariable)
    // console.log('separateA ', separateA);
  };

  innerFunction()
};

outerFunction()




// var greet = function( isHappy ) {
//   var text = "";
//   if ( isHappy ){
//     text = "hello my friend";
//   } else{
//     text = "go away";
//   }
//   var displayText = function() {
//     console.log( text ) ;
//   }
//   displayText();
// };

// greet( true );
  


// var name = "Jay" //global variable

// var talk = function() {
//   name = "Rick"; //local variable
//   console.log("My name is " + name);
// }

// // var walk =function() {
// //   console.log( name )
// // }

// // walk();
// talk();
// console.log( "global name is " + name);