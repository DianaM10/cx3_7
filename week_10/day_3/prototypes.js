var Fish = function(name, colour) {
  this.name = name;
  this.colour = colour;
};


//moved swim method from above, as the protype will have methods that all fish 
Fish.prototype = {
  swim:function() {
    console.log(" splash splash " + this.name);
  }
}

var myFish = new Fish("nemo", "orange");
myFish.swim();

console.log(Object.getPrototypeOf( myFish ) )






// var wisePerson = {
//   wisdom: function() {
//     console.log("commit often");
//   }
// };

// var myPerson = Object.create( wisePerson ); //this gives them a prototype, somthing they can fall back on
// //var myPerson = {};

// myPerson.walk = function() {console.log("left right left right")};

// myPerson.walk();
// myPerson.wisdom();