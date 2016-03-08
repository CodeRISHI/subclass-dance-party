var TribalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('tribal');
};

TribalDancer.prototype = Object.create(Dancer.prototype);
TribalDancer.prototype.constructor = TribalDancer;

TribalDancer.prototype.oldStep = Dancer.prototype.step;

TribalDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};