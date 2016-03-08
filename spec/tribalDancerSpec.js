describe('tribalDancer', function() {

  var tribalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    tribalDancer = new tribalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(tribalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(tribalDancer.$node, 'toggle');
    tribalDancer.step();
    expect(tribalDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(tribalDancer, 'step');
      expect(tribalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(tribalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(tribalDancer.step.callCount).to.be.equal(2);
    });
  });
});
