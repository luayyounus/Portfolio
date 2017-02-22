'use strict';

(function(module){
  let viewProjects = {};

  //jQuery to show the clicked tab in a single page, by hiding and showing parts of the rendered function
  viewProjects.tabClick = function(){
    $('.main-nav').on('click','.tab',function(){
      $('main section').hide();
      if ($(this).data('content') === 'home') {
        $('main section').show();
      } else {
        $('#' + $(this).data('content')).fadeIn();
      }
    })
  };

  //append our instances to HTML / render all the elements on the page
  viewProjects.renderInstance = function (){
    instances.map(function(a) {
      $('#projects').append(a.toHtml());
    })
  }
  module.viewProjects = viewProjects;
})(window);
