$(document).ready(function(){

  $('.navbar-btn').click(function(){

      $('.navbar-btn').toggleClass('active');
      $('.btn').toggleClass('close');

      $(".menu").toggleClass("active");

      if ($(".menu").hasClass("active")) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "");
      }
  })

});