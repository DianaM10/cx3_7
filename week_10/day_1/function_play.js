// var add = function(a,b) {
//   return a + b;
// }

// var wow = function(functionToInvoke) {
//   console.log(functionToInvoke(2,1));
// }

// wow(add);




// var greatest = function(a,b) {
//   if (a > b) {
//     console.log( a + " is greater than " + b);
//   } else  
//   console.log( b + " is greater than " + a);
// }

// greatest(1,2);



// var add = function(a,b) {
//   return a+b;
// }

// console.log("the return value is " + add(1,2));

// function() {
//   console.log("hello");
// }




// var hello = function() {
//   console.log("hello");
// }

// hello();













function sum() {
  var i = 0;
  var total = 0;
  for (i; i < arguments.length; i ++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1,2,3,4));
console.log(sum(2,4));




// function mood(name, mood) {
//   console.log(name + " you are: " + mood);
// }

// mood("Alan", "chilled");


// function add(a,b) {
//   return a + b;
// }

// console.log("the return value is " + add(1,2));

// function hello() {
//   console.log("hello everybody!");
// }

// hello();