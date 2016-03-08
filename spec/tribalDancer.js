var tribalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

tribalDancer.prototype = Object.create(Dancer.prototype);
tribalDancer.prototype.constructor = tribalDancer;

tribalDancer.prototype.oldStep = Dancer.prototype.step;

tribalDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};