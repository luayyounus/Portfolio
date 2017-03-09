'use strict';

(function(module){
  const projs = {};

  projs.init = () => {
    $('main > sections').hide();
    $('#projects').show();
  }
  module.projs = projs;
})(window)
