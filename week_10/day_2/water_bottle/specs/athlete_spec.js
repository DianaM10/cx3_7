var athlete = require('../athlete');
var bottle = require('../water_bottle');
var assert = require("assert");

describe('Athlete', function(){
  beforeEach(function() {
    athlete.hydrationLevel = 100;
    athlete.distanceCovered = 0;
  });

  it('should have hydration attribute of 100', function(){
    assert.equal(100, athlete.hydrationLevel);
  });

  it('should have a distance covered attribute starts at 0', function(){
    assert.equal(0, athlete.distanceCovered);
  });

  it('should be able to run', function(){
    athlete.run();
    assert.equal(90, athlete.hydrationLevel);
    assert.equal(10, athlete.distanceCovered);
  });

  it('should be not move when dehydrated', function(){
    athlete.hydrationLevel = 0;
    athlete.distanceCovered = 0;
    athlete.run();
    assert.equal(0, athlete.distanceCovered);
  });

  it('should be able to hydrate by drinking water', function(){
    athlete.hydrationLevel = 0;
    athlete.drink(bottle);
    assert.equal(10, athlete.hydrationLevel);
  });




  });