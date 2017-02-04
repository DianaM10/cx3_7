var athlete = {
  hydrationLevel: 100,
  distanceCovered: 0,
  run: function() {
    if (this.hydrationLevel >= 10) {
     this.hydrationLevel -= 10;
     this.distanceCovered += 10;
    } else if ( this.hydrationLevel < 10) {
    this.distanceCovered += this.hydrationLevel;
    this.hydrationLevel = 0;
      }
    },
    drink: function(bottle) {
      bottle.drink();
      this.hydrationLevel += 10;
    }
   
  

};


module.exports = athlete;