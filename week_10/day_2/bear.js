var bear ={
  type: "big",
  name: "Bob",
  belly: [],
  eat: function(food) {
    this.belly.push(food)
  }
}

bear.eat("chips cheese and gravy");
bear.eat("lasagne");
bear.eat("fish and chips");
console.log(bear);