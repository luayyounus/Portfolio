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
  rawData.map(a => {
    $('#projects').append(a.toHtml());
  })
};

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
