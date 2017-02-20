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


Project.loadProjects = function(rawData){
  // Sort by Date
  instances.sort(function(a,b) {
    return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
  });

  //creating the instances of my projects using forEach
  rawData.forEach(function(a) {
    instances.push(new Project(a));
  });
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
