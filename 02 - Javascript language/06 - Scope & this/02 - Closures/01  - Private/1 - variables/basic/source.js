(function (ns){
  var modules = {};
  ns.addModule = function (keyModule, module) {
    modules[keyModule] = module;
  };
  ns.initModule = function (keyModule){
    modules[keyModule].init();
  }
}(window.angular ? window.angular : {}));