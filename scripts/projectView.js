'use strict';

//jQuery to show the clicked tab in a single page
$('.main-nav').on('click','.tab',function(){
  $('main section').hide();
  if ($(this).data('content') === 'home') {
    $('main section').show();
  } else {
    $('#' + $(this).data('content')).fadeIn();
  }
});

// a constructor method that parse in locat storage to be rendered to the dom or stringify our data from json to local storage to avoid page reload and server traffic
Project.fetchAll = function(){
  if(localStorage.rawData){
    Project.loadAll(JSON.parse(localStorage.rawData));
    renderInstance(rawData);
  } else {
    $.getJSON('/data/prjectData.json')
    .then(function(data){
      localStorage.setItem('rawData', JSON.stringify(data));
      Project.loadAll(data);
      renderInstance(rawData);
    }, function(error){
      console.log('error',error);
    }
  )
}

//append our instances to HTML / render all the elements on the page
function renderInstance(rawData){
  instances.forEach(function(a) {
    $('#projects').append(a.toHtml());
  })
}
