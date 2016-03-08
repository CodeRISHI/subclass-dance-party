var TribalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('tribal');

  // this.$node = $('<img src="images/drake-gif-5.gif" style="width:200px;height:200px;">');
};

TribalDancer.prototype = Object.create(Dancer.prototype);
TribalDancer.prototype.constructor = TribalDancer;

TribalDancer.prototype.oldStep = Dancer.prototype.step;

TribalDancer.prototype.step = function() {
  // this.oldStep();
  this.$node.toggle();
};