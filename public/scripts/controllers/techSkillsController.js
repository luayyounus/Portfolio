'use strict';

(function(module){
  const tech = {};

  tech.init = () => {
    Project.fetchAll();
    $('main > sections').hide();
    $('#tech-skills').show();
  }
  module.tech = tech;
})
