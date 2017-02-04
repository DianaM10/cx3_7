use codeclan;

db.students.insert(
  [
    {
      name: "John",
      favouriteFood: "Pizza"
    },
    {
      name: "Ross",
      favouriteFood: "Apples"
    }
  ]
 );

db.instructors.insert([
  {
    name: "Sian",
    favouriteFood: "Soup"
  },
  {
    name: "Alan",
    favouriteFood: "Beer"
  },
  {
    name: "Darren",
    favouriteFood: "Potatoes"
  }
]);

show collections;

db.students.distinct("name"); //return array of student names
db.students.findOne({name:"Ross"})._id.getTimestamp();

db.students.find();

db.dropDatabase();