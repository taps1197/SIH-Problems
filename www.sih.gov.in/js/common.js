/* BANNER----------------------------------------------- */
$('.carousel').carousel()


/* SCROLL TO TOP--------------------------------------- */
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('.scrollup').fadeIn(200);    // Fade in the arrow
  } else {
    $('.scrollup').fadeOut(200);   // Else fade out the arrow
  }
});

$('.scrollup').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, 600);
  return false;
});
/* ON SCROLL STICK HEADER------------------------------- */
window.onscroll = function() {
  stickHeader();
  //scrollToTop();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/*SCROLL TO TOP-----------------------------------------*/
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("return-to-top").style.display = "block";
  } else {
      document.getElementById("return-to-top").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* MULTIPLE ITEM CAROUSEL------------------------------- */
$('.multi-item-carousel').carousel({
    interval: false
});

$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

/*Youtube Player---------------------------------------------- */
  document.addEventListener("DOMContentLoaded",
					function() {
							var div, n,
									v = document.getElementsByClassName("youtube-player");
							for (n = 0; n < v.length; n++) {
									div = document.createElement("div");
									div.setAttribute("data-id", v[n].dataset.id);
									div.innerHTML = labnolThumb(v[n].dataset.id);
									div.onclick = labnolIframe;
									v[n].appendChild(div);
							}
			});

			function labnolThumb(id) {
					var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
							play = '<div class="play"></div>';
					return thumb.replace("ID", id) + play;
			}

			function labnolIframe() {
					var iframe = document.createElement("iframe");
					var embed = "https://www.youtube.com/embed/ID?autoplay=1";
					iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
					iframe.setAttribute("frameborder", "0");
					iframe.setAttribute("allowfullscreen", "1");
					this.parentNode.replaceChild(iframe, this);
      }
      

      $(document).ready(function () {

        loadGallery(true, 'a.eventImg');

        //This function disables buttons when needed
        function disableButtons(counter_max, counter_current) {
            $('#show-previous-image, #show-next-image').show();
            if (counter_max == counter_current) {
                $('#show-next-image').hide();
            } else if (counter_current == 1) {
                $('#show-previous-image').hide();
            }
        }

        /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */

        function loadGallery(setIDs, setClickAttr) {
            var current_image,
                selector,
                counter = 0;

            $('#show-next-image, #show-previous-image').click(function () {
                if ($(this).attr('id') == 'show-previous-image') {
                    current_image--;
                } else {
                    current_image++;
                }

                selector = $('[data-image-id="' + current_image + '"]');
                updateGallery(selector);
            });

            function updateGallery(selector) {
                var $sel = selector;
                current_image = $sel.data('image-id');
                $('#image-gallery-caption').text($sel.data('caption'));
                $('#image-gallery-title').text($sel.data('title'));
                $('#image-gallery-image').attr('src', $sel.data('image'));
                disableButtons(counter, $sel.data('image-id'));
            }

            if (setIDs == true) {
                $('[data-image-id]').each(function () {
                    counter++;
                    $(this).attr('data-image-id', counter);
                });
            }
            $(setClickAttr).on('click', function () {
                updateGallery($(this));
            });
        }
    });


    /************************************************** */
    /* THEME COMMITTEE OPEN CLOSE---------------------- */
    /************************************************** */
    $( document ).ready(function(e) {
        $( "[id^='hw-theme-']").css("display", "none");
    });   	
    function showCommetteeMember(id){
		$( "[id^='hw-theme-']").css("display", "none");
		//$( "[class^='hardware-themes-"+ id+"]").css("box-shadow", "0 1px 1px 0 #919191");

		if($( "[id^='hw-theme-" +id +"']").is(':visible'))
			$( "[id^='hw-theme-" +id +"']").css("display", "none");
		else
			$( "[id^='hw-theme-" +id +"']").css("display", "block");
	}     

	function closetheme(id){
		$( "[id^='hw-theme-" +id +"']").css("display", "none");
	}
