if (!Function.prototype.bind) {
  Function.prototype.bind = function (that) {
    const fn = this;
    const args = arguments;
    return function () {
      return fn.apply(that, arguments);
    };
  };
}
