// NAVBAR

$(document).ready(function () { 

    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
      });

});


// ANIMATE QUALIFICATIONS

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


// ANIMATE PICTURES FADE IN ON SCROLL

function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos ) {
          $(this).addClass("fadeIn");
      }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
  showImages('.fadein-on-scroll');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.fadein-on-scroll');
});

// Hover Contact 

$(".whatsapp-icon").hover(function(){
  $(".footer-numbers").slideDown("1000");
})

$(".whatsapp-icon").mouseleave(function() {
  $(".footer-numbers").slideUp("1000");
})

$(".email-icon").hover(function(){
  $(".email-hover").slideDown("1000");

});

$(".email-icon").mouseleave(function() {
  $(".email-hover").slideUp("1000");
})


// YEAR 

const year = new Date().getFullYear();

$(".year").text(year);


