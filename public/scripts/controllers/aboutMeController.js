'use strict';

(function(module){
  const aboutMe = {};

  aboutMe.init = () => {
    $('main > sections').hide();
    $('#about').show();
  }
  module.aboutMe = aboutMe;
})(window)
