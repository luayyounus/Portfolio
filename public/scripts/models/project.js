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
      let dataFromJSON = JSON.parse(localStorage.getItem('rawData'));
      Project.loadAll(dataFromJSON);
      renderInstance(instances);
    } else {
      $.getJSON('../data/projectData.json')
      //calling the github repos in githubRepos.js with Ajax
      .then(repos.githubData())
      .then(function(data){
        repos.array.forEach(githubRepo => {
          data.forEach(proj => {
            if(proj.name === githubRepo.name){
              proj.dateCreated = githubRepo.created_at;
              proj.dateCreated = proj.dateCreated.slice(0,10);
            }
          })
        })
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
