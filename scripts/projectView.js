'use strict';

//jQuery to show the clicked tab

$('.main-nav').on('click','.tab',function(){
  $('main section').hide();
  if ($(this).data('content') === 'home') {
    $('main section').show();
  } else {
    $('#' + $(this).data('content')).fadeIn();
  }
});

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

//append to Html
function renderInstance(rawData){
  instances.forEach(function(a) {
    $('#projects').append(a.toHtml());
  })
}
