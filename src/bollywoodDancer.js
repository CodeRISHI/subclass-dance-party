var BollywoodDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BollywoodDancer.prototype = Object.create(Dancer.prototype);
BollywoodDancer.prototype.constructor = BollywoodDancer;

BollywoodDancer.prototype.oldStep = Dancer.prototype.step;

BollywoodDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};