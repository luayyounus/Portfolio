'use strict';

(function(module){
  const aboutMe = {};

  aboutMe.init = () => {
    Project.fetchAll();
    $('main > sections').hide();
    $('#projects').show();
  }
  module.aboutMe = aboutMe;
})
