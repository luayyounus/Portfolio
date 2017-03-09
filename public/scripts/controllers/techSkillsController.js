'use strict';

(function(module){
  const tech = {};

  tech.init = () => {
    Project.fetchAll();
    $('main > sections').hide();
    $('#tech').show();
  }
  module.tech = tech;
})(window)
