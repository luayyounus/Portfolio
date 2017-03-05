'use strict';

let instances = [];
// Constructor function
function Project (content) {
  this.image = content.image;
  this.title = content.title;
  this.subtitle = content.subtitle;
  this.githubUrl = content.githubUrl;
  this.liveUrl = content.liveUrl;
  this.dateCreated = content.dateCreated;
  this.dateFinished = content.dateFinished;
}

// bring the template and clone
Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#articles-handlebars').html());
  console.log(template);
  return template(this);
}


Project.loadAll = function(rawData){
  // Sort by Date
  instances.sort(function(a,b) {
    return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
  });

  //creating the instances of my projects using forEach
  rawData.forEach(function(data) {
    instances.push(new Project(data));
  })
}

Project.fetchAll = function(){
  if(localStorage.rawData){
    Project.loadAll(JSON.parse(localStorage.getItem('rawData')));
    renderInstance(instances);
  } else {
    $.getJSON('../data/projectData.json')
    .then(function(data){
      localStorage.setItem('rawData', JSON.stringify(data));
      Project.loadAll(data)
    })
    .then(function() {
      renderInstance(instances);
    })
    .catch(err => console.log(err));
  }
};

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


//append to Html
function renderInstance(rawData){
  console.log(rawData, 'rawdata');
  rawData.map(function(a) {
    console.log(a, 'a');
    $('#projects').append(a.toHtml());
  })
}


// Show/Hide hamburger list when clicked
//
// $('.icon-menu').on('click',function(){
//   $('.main-nav').toggle();
//
// });

// 'slow',function(){
//   console.log('works@!!!');
//   $('.icon-menu').setAttribute('.rotate-right');
//   $('.li').show();
