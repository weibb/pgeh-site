$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".intro").css("transform","translateY(" +  (scroll/-2)  + "px)");
});
