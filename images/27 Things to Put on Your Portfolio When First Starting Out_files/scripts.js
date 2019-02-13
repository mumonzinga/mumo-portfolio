
// social sharing links, side of single-post
jQuery(document).ready(function() {
  jQuery(window).scroll(function() {
    var _arbitrary = 100;
    var _scrolled = jQuery(window).scrollTop();
    var _header_bottom = jQuery("#content-header").outerHeight(true);
    try {
      var _footer_top = jQuery(".trending-posts").offset().top;
    } catch(err) {
      return;
    }
    if( _scrolled > _header_bottom + _arbitrary && _scrolled < _footer_top ) {
        jQuery(".share_box").addClass("visible");
    } else {
      jQuery(".share_box").removeClass("visible");
    }
  });
  if( jQuery(window).scrollTop() > 0 ) {
    jQuery(".share_box").addClass("visible");
  }
  // nav 
  jQuery(".searchNav i").click(function() {
    jQuery(".searchNav").toggleClass("active");
  })
});

jQuery(document).ready(function() {
  jQuery(".searchIcon").click(function(event) {
    event.preventDefault();
    jQuery(".navbarSearchForm").toggleClass("hidden");
    if (!jQuery(".searchInputField").hasClass("hidden")) {
      jQuery(".searchInputField").focus();
    }
  });
  jQuery(window).scroll(function() {
    jQuery(".navbarSearchForm").addClass("hidden");

  });
});

jQuery(document).ready(function() {
 
  jQuery("#content-header").headroom({
      // vertical offset in px before element is first unpinned
      offset : 100,
      // scroll tolerance in px before state changes
      tolerance : 0,
      // or you can specify tolerance individually for up/down scroll
      tolerance : {
          up : 5,
          down : 0
      },
      // css classes to apply
      classes : {
          // when element is initialised
          initial : "headroom",
          // when scrolling up
          pinned : "headroom--pinned",
          // when scrolling down
          unpinned : "headroom--unpinned",
          // when above offset
          top : "headroom--top",
          // when below offset
          notTop : "headroom--not-top"
      },
      // callback when above offset, `this` is headroom object
      onTop : function() {
        jQuery('.hide-when-scrolling').fadeIn();
      },
      // callback when below offset, `this` is headroom object
      onNotTop : function() {
        jQuery('.hide-when-scrolling').fadeOut();
      },
  });
});

// affix
jQuery(document).ready(function() {
  jQuery('#theAffix').affix({
    offset: {
      top: 0,
      bottom: function () {
        return (this.bottom = jQuery('.main-footer').outerHeight(true))
      }
    }
  });
});


// function hasInput() {
//   console.log("is anyone there ?");
//   if(document.getElementById('search').value.length) {
//     jQuery(".btn-search-no-text").removeClass("inactive");
//   } else {
//     jQuery(".btn-search-no-text").addClass("inactive");
//   }
// }

