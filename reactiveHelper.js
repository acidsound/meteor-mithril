reactive = function(controller) {
  return function() {
    var instance = {};
    var computation = Tracker.autorun(function() {
      m.startComputation();
      controller.call(instance);
      m.endComputation();
    });
    instance.onunload = function() {
      computation.stop();
    };
    return instance;
  };
};
