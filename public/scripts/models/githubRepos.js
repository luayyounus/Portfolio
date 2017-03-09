'use strict';

(function(module){
  const repos = {};
  repos.githubData = () => {
    $.ajax({
      url:'https://api.github.com/user/repos',
      method:'GET',
      headers: {
        Authorization: `Token`
      }
    })
    .then(console.log)
  }
  module.repos = repos;
})(window)
