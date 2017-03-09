'use strict';

(function(module){
  const aboutMe = {};

  aboutMe.init = () => {
    Project.fetchAll();
    $('main > sections').hide();
    $('#about').show();
  }
  module.aboutMe = aboutMe;
})(window)
