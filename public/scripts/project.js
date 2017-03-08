'use strict';

(function(module){
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

  let instances = [];


  // bring the template and clone
  Project.prototype.toHtml = function() {
    var template = Handlebars.compile($('#project-handlebars').html());
    console.log('temp',template);
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
      console.log('from locaaaal');
    } else {
      $.getJSON('../data/projectData.json')
      .then(function(data){
        localStorage.setItem('rawData', JSON.stringify(data));
        Project.loadAll(data);
      })
      .then(function() {
        renderInstance(instances);
      })
      .catch(err => console.log(err));
    }
  };
  module.Project = Project;
})(window);
