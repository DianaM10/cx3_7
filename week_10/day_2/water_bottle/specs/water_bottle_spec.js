var bottle = require('../water_bottle');
var assert = require("assert");

describe('Water bottle', function(){
  it('should be empty at start', function(){
    assert.equal(0, bottle.volume);
  })

  it("should go to 100 when filled", function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  })

  it("should go down by 10 when drank", function(){
    bottle.drink();
    assert.equal(90, bottle.volume);
  })

  it("should go to 0 when emptied", function() {
    bottle.empty();
    assert.equal(0, bottle.volume);
  })

  it("should not go below 0", function() {
    bottle.volume = 6;
    bottle.drink();
    assert.equal(0, bottle.volume);
  })
});

