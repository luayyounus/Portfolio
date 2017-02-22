'use strict';

(function(module){
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
    let template = Handlebars.compile($('#project-handlebars').html());
    console.log(template);
    return template(this);
  }

  // a function method to fire when the data is being retrieved from .json DataBase
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

  // a constructor method that parse in local storage to be rendered to the dom or stringify our data from json to local storage to avoid page reload and server traffic
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

  module.Project = Project;
})(window);

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
