var testArray = [1,2,3,4];

//this is the .reduce method which adds up the every element of the array
var sum =testArray.reduce(function(accumulator, item){ 
  return accumulator + item 
}, 0); 

console.log("sum", sum);


//this is a map
var doubledArray = testArray.map(function(item) { 
return item * 2;
});

console.log( 'doubledArray', doubledArray);



// var outForEach = function(array, callOnItem) {
//   for(var item of array) {
//      callOnItem( item );
//   }

// };

// var callOnItem = function( arrayItem) {
//   console.log(arrayItem);
// };

// outForEach(testArray, callOnItem);


//outForEach( testArray, console.log )







//these 2 below do same thing, bottom is for loop, top is enumeration block

// testArray.forEach(function(item){ 
//   console.log('item', item)
// });

// for(var item of testArray) {
//   console.log('item', item);
// }