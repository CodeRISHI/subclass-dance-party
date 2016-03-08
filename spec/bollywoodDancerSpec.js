describe('bollywoodDancer', function() {

  var bollywoodDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bollywoodDancer = new BollywoodDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bollywoodDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(bollywoodDancer.$node, 'toggle');
    bollywoodDancer.step();
    expect(bollywoodDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bollywoodDancer, 'step');
      expect(bollywoodDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bollywoodDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bollywoodDancer.step.callCount).to.be.equal(2);
    });
  });
});
