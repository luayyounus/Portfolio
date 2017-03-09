'use strict';

(function(module){
  const tech = {};

  tech.init = () => {
    $('main > sections').hide();
    $('#tech').show();
  }
  module.tech = tech;
})(window)
