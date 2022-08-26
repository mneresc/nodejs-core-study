"use strict";

// Immediately Invoked Function Expression - use a wraper to avoid polluting the global namespace
var result = (function () {
  var result = 0;
  for (var i = 0; i < 5; i++) {
    var sqrt = Math.sqrt(i);
    result += sqrt;
  }
  return result;
})();
console.log(result);
