// Generated by CoffeeScript 1.12.7
(function() {
  var Adapter, LiveScript, W,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Adapter = require('../../adapter_base');

  W = require('when');

  LiveScript = (function(superClass) {
    var compile;

    extend(LiveScript, superClass);

    function LiveScript() {
      return LiveScript.__super__.constructor.apply(this, arguments);
    }

    LiveScript.prototype.name = 'LiveScript';

    LiveScript.prototype.extensions = ['ls'];

    LiveScript.prototype.output = 'js';

    LiveScript.prototype.isolated = true;

    LiveScript.prototype._render = function(str, options) {
      return compile((function(_this) {
        return function() {
          return _this.engine.compile(str, options);
        };
      })(this));
    };

    compile = function(fn) {
      var err, res;
      try {
        res = fn();
      } catch (error) {
        err = error;
        return W.reject(err);
      }
      return W.resolve({
        result: res
      });
    };

    return LiveScript;

  })(Adapter);

  module.exports = LiveScript;

}).call(this);
