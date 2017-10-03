// script to toggle content for snip cs63 | toplist collapse

jQuery(document).ready(function($) {
        $("#toggle-content").click(
          function() {
            $(".toggle-paragraph").toggleClass('active');
            $(this).toggleClass('active');
          }
        );
      });
