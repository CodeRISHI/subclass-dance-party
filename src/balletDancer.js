var BalletDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('ballet');
};

BalletDancer.prototype = Object.create(Dancer.prototype);
BalletDancer.prototype.constructor = BalletDancer;

BalletDancer.prototype.oldStep = Dancer.prototype.step;

BalletDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};