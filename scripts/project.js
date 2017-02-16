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
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('img').attr('src',this.image);
  $newProject.find('header h1').text(this.title);
  $newProject.find('.subtitle').text(this.subtitle);

  $newProject.find('.icon-github').attr('href',this.githubUrl);

  $newProject.find('.live-url').text('Click to view the main page!');
  $newProject.find('.live-url').attr('href',this.liveUrl);

  $newProject.find('time[startDate]').text(this.dateCreated);
  $newProject.find('time[endDate]').text(this.dateFinished);

  return $newProject;
}

// Sort by Date
instances.sort(function(a,b) {
  return (new Date(b.dateCreated)) - (new Date(a.dateCreated));
});

//creating the instances of my projects using forEach
rawData.forEach(function(a) {
  instances.push(new Project(a));
});

//append to Html
instances.forEach(function(a) {
  $('#articles').append(a.toHtml());
});






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
