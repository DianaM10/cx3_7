var lodash = require('lodash');//to import and use things from lodash

var robot = {
  welcome: function() {
    return "Hello Jay";
  }
};

module.exports = robot; //need this so robot_spec can see this