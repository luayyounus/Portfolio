'use strict';

(function(module){
  const home = {};
  home.init = () => {
    $('main > sections').show();
  }
  module.home = home;
})(window)
