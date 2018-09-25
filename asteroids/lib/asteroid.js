const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");
const Asteroid = function (...options) {
   MovingObject.call(this,options);
  //super();
};
Util.inherits(Asteroid,MovingObject);
module.exports = Asteroid;
