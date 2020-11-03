$(document).ready(function(){
  var mql = window.matchMedia("screen and (max-width: 640px)");
  
  if (mql.matches) {
  
    var profileDiv = $('.main_txt h3');
  var containerDiv = $('.txt_container h3');
  $('.aducation').slideDown();
  $('.career h3').next().slideUp();
  $('.license h3').next().slideUp();
  profileDiv.on('click', function(){
    containerDiv.next().slideUp();
    $(this).next().stop().slideDown();
  })
  containerDiv.on('click',function(){
    containerDiv.next().slideUp();
    $(this).next().stop().slideDown();
  })
  };
})