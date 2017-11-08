// script to toggle content for snip cs63 | toplist collapse

jQuery(document).ready(function($) {
        $("#toggle-content").click(
          function() {
            $(".toggle-paragraph").toggleClass('active');
            $(this).toggleClass('active');
          }
        );
      });


// flip carets upside down on accordion collapse panels
$(document).ready(function(){
  $("#terms-collapse").on("hide.bs.collapse", function(){
    $(".more-terms").html('Read More <i class="fa fa-caret-down"></i> ');
  });
  $("#terms-collapse").on("show.bs.collapse", function(){
    $(".more-terms").html('Show Less <i class="fa fa-caret-up"></i> ');
  });

  $("#live-dealer-collapse").on("hide.bs.collapse", function(){
    $(".more-dealer").html('Read More <i class="fa fa-caret-down"></i> ');
  });
  $("#live-dealer-collapse").on("show.bs.collapse", function(){
    $(".more-dealer").html('Show Less <i class="fa fa-caret-up"></i> ');
  });

  $("#tech-collapse-1").on("hide.bs.collapse", function(){
    $("#more-1").html('<i class="fa fa-caret-down pull-right"></i> ');
  });
  $("#tech-collapse-1").on("show.bs.collapse", function(){
    $("#more-1").html('<i class="fa fa-caret-up pull-right"></i> ');
  });

  $("#tech-collapse-2").on("hide.bs.collapse", function(){
    $("#more-2").html('<i class="fa fa-caret-down pull-right"></i> ');
  });
  $("#tech-collapse-2").on("show.bs.collapse", function(){
    $("#more-2").html('<i class="fa fa-caret-up pull-right"></i> ');
  });

  $("#tech-collapse-3").on("hide.bs.collapse", function(){
    $("#more-3").html('<i class="fa fa-caret-down pull-right"></i> ');
  });
  $("#tech-collapse-3").on("show.bs.collapse", function(){
    $("#more-3").html('<i class="fa fa-caret-up pull-right"></i> ');
  });

  $("#tech-collapse-4").on("hide.bs.collapse", function(){
    $("#more-4").html('<i class="fa fa-caret-down pull-right"></i> ');
  });
  $("#tech-collapse-4").on("show.bs.collapse", function(){
    $("#more-4").html('<i class="fa fa-caret-up pull-right"></i> ');
  });

  $("#tech-collapse-5").on("hide.bs.collapse", function(){
    $("#more-5").html('<i class="fa fa-caret-down pull-right"></i> ');
  });
  $("#tech-collapse-5").on("show.bs.collapse", function(){
    $("#more-5").html('<i class="fa fa-caret-up pull-right"></i> ');
  });

  $("#tech-collapse-6").on("hide.bs.collapse", function(){
    $("#more-6").html('<i class="fa fa-caret-down pull-right"></i> ');
  });
  $("#tech-collapse-6").on("show.bs.collapse", function(){
    $("#more-6").html('<i class="fa fa-caret-up pull-right"></i> ');
  });
});

$(document).ready(function() {

  // cs34 thumbnail-content height of buttons
  $(".thumbnail-content").each(function() {
    var thumbnailHoverHeight = $(this).height();
    if (thumbnailHoverHeight < 96) {
      $(this).css('top', 'calc(50% - 24px)')
    }
  });

  // toplist_option_more_info_flip
  $('.flip .card .flip-anchor').click(function(){
	   $(this).parent().parent().parent().parent().find('.card').toggleClass('flipped');
	});


  var scrollLink = $('.scroll');
  var backTop = $('.back-to-top')

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top //- 50
    }, 1000 );
  });
  backTop.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  })

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 20;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

    // Show "back to top" button on scroll
    var screenHeight = screen.height;
    var customOffset = screenHeight - 100;

    if (scrollbarLocation > screenHeight) {
      $('#back-to-top-v1').css('display', 'block')

    } else {
      $('#back-to-top-v1').css('display', 'none')
    }
  })
})

//prevent the text slider from scrolling automatically
$('#item-text-slider').carousel({
    interval: false
});




$('main-content').scrollspy({target: "#sticky-menu"})
