var assert = require("assert");
var robot = require("./robot"); //gets back whatever you chose to export in the robot file

describe("Robot", function(){
  it("should welcome me", function(){
    assert.equal("Hello Jay", robot.welcome() )
  });
});