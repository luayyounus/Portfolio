//jQuery to show the clicked tab


$.getJSON('/data/prjectData.json')
  .then(function(rawData){
    if(localStorage.rawData){
      Project.loadProjects(JSON.parse(localStorage.rawData));
      renderInstance();
    } else {
      function(rawData){
        localStorage.setItem('rawData',JSON.stringify(rawData));
        Project.loadProjects(rawData);
        renderInstance();
      }
    }
  }


//append to Html
function renderInstance(){
  instances.forEach(function(a) {
    $('#projects').append(a.toHtml());
  });
}

$('.main-nav').on('click','.tab',function(){
  $('main section').hide();
  if ($(this).data('content') === 'home') {
    $('main section').show();
  } else {
    $('#' + $(this).data('content')).fadeIn();
  }
});
