'use strict';

//Constructor function
function Project (content) {
  this.image = content.image;
  this.title = content.title;
  this.subtitle = content.subtitle;
  this.githubUrl = content.githubUrl;
  this.liveUrl = content.liveUrl;
  this.dateCreated = content.dateCreated;
  this.dateFinished = content.dateFinished;
}

// Show/Hide hamburger list when clicked
$('.icon-menu').on('click',function(){
  $('.main-nav').slideToggle('slow',function(){
    console.log('works@!!!');
    $('.icon-menu').setAttribute('.rotate-right');
    $('.main-nav.li').show();
  })
});
