'use strict';

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

//toHtml method
Project.prototype.toHtml = function() {

}



// Show/Hide hamburger list when clicked

// $('.logo-icon').animate({
//   rotate: '40deg'
// },0);
// console.log('hiii');
// $('.site-header').on('click',function(){
//
// });
// 'slow',function(){
//   console.log('works@!!!');
//   $('.icon-menu').setAttribute('.rotate-right');
//   $('.main-nav.li').show();
