'use strict';

(function(module){
  const repos = {};
  repos.array = [];
  repos.githubData = () => {
    $.ajax({
      url:'https://api.github.com/user/repos',
      method:'GET',
      headers: {Authorization: `Token ${gitHubToken}`}
    })
    //getting repos from Github and pushing them to new array so we can access it somewhere else, .then is Asynchronus and can't be accessed from the outside without affectig the overall performance
    .then(data => {
      data.forEach(repo => {
        repos.array.push(repo);
      })
    }),
    (err) => {
      console.error(err);
    }
  }
  module.repos = repos;
})(window)
