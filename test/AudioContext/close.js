(function() {
  "use strict";

  require("../bootstrap");
  require("../../src/AudioContext/close");

  describe("AudioContext.prototype.close", function() {
    var context = global.getShimType(global.AudioContext.prototype.close);

    describe.skip(context, function() {
      describe("(): Promise<void>", function() {
        it("should return a Promise", function() {
        });
      });
    });
  });

})();
