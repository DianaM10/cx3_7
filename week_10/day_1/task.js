var person = function(name, surname) {
  console.log("Howdy, I am " + name + " " + surname);
}

person("homer", "simpson");


var multiply = function(a,b) {
  return a*b;
}

console.log(multiply(2,4));




var numbers = [5, 4, 3, 2, 1];

var first = function(array) {
  return array[0];
}

console.log(first(numbers));




var names = ["Paul", "Tom", "Pavlos"]

var print = function(names) {
    for (var name of names) {
      console.log(name);
    }
}

print(names);



function addAnimalToFarm(animal, farmArray) {
  farmArray.push(animal);
  console.log("the animals in your farm are now "); 
    print(farmArray);
}

animals = ["pig", "cow", "sheep", "duck", "chicken"];

addAnimalToFarm("goat", animals);










