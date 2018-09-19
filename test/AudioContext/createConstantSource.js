(function() {
  "use strict";

  describe("AudioContext.prototype.createConstantSource", function() {
    describe("(): AudioNode", function() {
      it("should return an AudioNode as ConstantSourceNode", function() {
        var node = audioContext.createConstantSource();

        assert(node instanceof global.AudioNode);
        assert(node.offset instanceof global.AudioParam);
        assert(node.start instanceof Function);
        assert(node.stop instanceof Function);
      });
    });
  });
})();
