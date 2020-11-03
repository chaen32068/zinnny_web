$(document).ready(function () {

	$('#top-btn').on('click', function () {
		$('body').stop().animate({
			scrollTop: 0
		}, 500)
	})
	//top button

	$('body').scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('#top-btn').addClass('on');
		} else {
			$('#top-btn').removeClass('on');
		}
	});
	//top button animation

	

	$(document).ready(function () {
		var $scene = $('.js-scene');

		$(window).on("mousewheel DOMMouseScroll touchmove", function (e) {
			var scrollingDown = (function () {
				var delta,
					compareEvent;

				if (e.type === 'touchmove') {
					compareEvent = 'touchmove';
				} else {
					compareEvent = 'DOMMouseScroll';
				}

				delta = e.type === compareEvent ?
					e.originalEvent.detail * -40 :
					e.originalEvent.wheelDelta;

				return delta > 0 ? 0 : 1;
			}());

			if (scrollingDown) {
				$scene.addClass('is-over');
			}
			/*else {
				$scene.removeClass('is-over');
			}*/
		});
	}); //doc.ready()
	//chart

	var skill_area = $('.skill_area'),
		offset = 100,
		skill_areaOST = skill_area.offset().top - offset;

	$('body').scroll(function () {
		if ($('body').scrollTop() > skill_areaOST) {
			$('.chart__bar').addClass('on');
		};
	})
	//chart


 var swiper = new Swiper('.swiper-container', {
	 loop: true,
	 autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
	 
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//portpolio
  

  






});
