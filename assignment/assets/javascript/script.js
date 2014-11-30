$(document).ready(function() {


  // QUESTION 8
  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function() {
    var marginLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (marginLeft == -3840) {
      return false;
    } else {
      $("#carousel").css("margin-left", marginLeft - 960);
    }
  });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $("#carousel-prev").click(function() {
      var marginLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if(marginLeft == 0) {
        return false;
      } else {
        $("#carousel").css("margin-left", marginLeft + 960);
      }
    });

    $(".text").hover(function() {
      $('.hidden').show(500)
    }, function () {
      $('.hidden').hide(500)
    });

    $("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#name-section").offset().top
    }, 2000);
  });

    $("#interests").click(function() {
    $('html, body').animate({
        scrollTop: $("#major-section").offset().top
    }, 2000);
  });

    $("#navcarousel").click(function() {
    $('html, body').animate({
        scrollTop: $('carousel-section').offset().top
    }, 2000);
  

});
});