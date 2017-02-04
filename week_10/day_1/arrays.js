var guitars = ["fender", "gibson", "gretsch"];
console.log("guitars: ", guitars);

var drums = new Array();

drums.push("sonor");
drums.push("premier");
console.log("drums: "+ drums);

console.log(guitars[100]);
console.log(drums[1]);

drums[1] = "zildijan";
console.log(drums);
drums[10] = "boom!";
console.log(drums);
console.log(drums[6]);
console.log(drums.length);

var last = guitars.pop();
console.log("guitars: ", guitars);

var first = drums.shift();
console.log(drums);


