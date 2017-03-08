'use strict';

(function(module){
  const projs = {};

  projs.init = () => {
    Project.fetchAll();
    $('main > sections').hide();
    $('#projects').show();
  }
  module.projs = projs;
})
