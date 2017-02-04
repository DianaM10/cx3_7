//use capital for constructor
var House = function(sqFeet, bathrooms, bedrooms) {
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
}

var house1 = new House(2000, 2, 3);
var house2 = new House(8000, 4, 6);
var house3 = new House(1000, 1, 1);

console.log("house1", house1 );
console.log("house2", house2 );
console.log("house3", house3 );

//office constructor - desks, meeting rooms

var Office = function(desks, meetingRooms) {
  this.desks = desks;
  this.meetingRooms = meetingRooms;
  this.averageDesks = function() {
     return this.desks/this.meetingRooms;
  }
}

var office1  = new Office(100, 5);
var office2  = new Office(200, 30);
var office3  = new Office(5, 1);

console.log("office1", office1 );
console.log("office2", office2 );
console.log("office2", office3 );
console.log(office1.averageDesks());













// var house1 = {
//   sqFeet: 2000,
//   bathrooms: 2,
//   bedrooms: 3

// };

// var house2 = {
//   sqFeet: 8000,
//   bathrooms: 4,
//   bedrooms: 6
// };

// var house3 = {
//   sqFeet: 1000,
//   bathrooms: 1,
//   bedrooms: 1
// };







// var myObject = {
//   shape: "Circle",
//   raduis: 10,
//   talk: function() { console.log("hello") }

// }