var fs = require("fs");

fs.readFile( "animals.txt", function(err, data){ //this function is the callback
  if (err) {
    console.log("ERROR", err);
    return;
  }
  else{
    var bufferString = data.toString();
    console.log('bufferString', bufferString);
    var numberOfAnimals = bufferString.split("\n").length;
    console.log("There are " + numberOfAnimals + " animals");
  }
});



console.log("something at the bottom");

//when u run this "something at the bottom" will print first