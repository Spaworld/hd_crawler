// DXC Updates to this plugin. General Clean Up and performance tweaks
(function closure(root, factory) {
	if(typeof define === 'function' && define.amd) {
		define(['jquery', 'jquery-imagesloaded'], function load(jQuery) {
			return factory(jQuery);
		});
	} else{
		/*eslint-disable*/
		factory(jQuery);
		/*eslint-enable*/
	}
})(this, function factory($) {
	if ($.fn.thdSliderV2) {
		return $.fn.thdSliderV2;
	}

	$.fn.thdSliderV2 = function thdSliderV2(opts) {
		var $this = $(this);
		var $sliderWindow = $this.find('.slider_window');
		var $slide = $sliderWindow.children('.row');

		// SLIDER OPTIONS JUST ADD CLASS TO .slider
		var defaults = {
			sliderName: $this.attr('data-sliderName') || 'sliderV2',
			initialLoad: true,
			playSlides: 0,
			slideNum: 0,
			SlideTimer: parseInt($this.attr('rel') * 1000, 10) || 9000,
			SlideSpeed: parseInt($sliderWindow.attr('rel') * 100, 10) || 900,
			carouselOn: Boolean($this.attr('data-carousel')), // for all Boolean values only return true, false will also evaluate to true "" will evaluate to false.
			showPagination: Boolean($this.attr('data-show-pagination')),
			paginationType: $this.attr('data-pagination-type') || 'dots',
			recentlyViewed: Boolean($this.attr('data-recently-viewed')),
			showControls: Boolean($this.attr('data-show-controls')),
			controlPosition: $this.attr('data-controls-position') || 'inset',
			sliderType: $this.attr('data-slider-type') || 'horizontal', // options horizontal, vertical, fade
			autoStart: Boolean($this.attr('data-auto-start')),
			sliderParentWidth: $this.width(),
			sliderParentHeight: $slide.height(),
			numberOfSlides: $slide.length,
			templates: {
				controls: {
					next: '<a class="next"></a>',
					previous: '<a class="prev"></a>'
				}
			}
		};
		var options = $.extend({}, defaults, opts);
		var $Controls;

		// BUILD & ASSIGN CONTROLS FROM DOM ELEMENTS
		var buildControls = function buildControls() {
			var $nextButton = options.templates.controls.next;
			var $prevButton = options.templates.controls.previous;
			if (options.controlPosition === 'inset') {
				$this.append('<div class="clear"></div><div class="slider_controls">' + $nextButton + $prevButton + '<ul class="slider_pagination"></ul></div>');
			} else {
				$this.after('<div class="clear"></div><div class="slider_controls">' + $nextButton + $prevButton + '<ul class="slider_pagination"></ul></div>');
			}
		};

		var $NextSlideButton;
		var $PrevSlideButton;
		var $PaginationHolder;
		var $PageControl;

		// var $slideMax;

		var i;

		$this.css('overflow', 'hidden');
		$this.height($slide.height());


		options.sliderWindowWidth = (options.sliderParentWidth * options.numberOfSlides);
		options.sliderWindowHeight = options.sliderParentHeight;

		if (options.sliderType === 'vertical') {
			$this.addClass('vert');
		}

		buildControls();


		if (options.controlPosition === 'inset') {
			$Controls = $this.find('.slider_controls');
		} else {
			$Controls = $this.next().next('.slider_controls');
		}

		$NextSlideButton = $Controls.find('a.next');
		$PrevSlideButton = $Controls.find('a.prev');
		$PaginationHolder = $Controls.find('.slider_pagination');
		// $slideMax = Math.round(options.sliderParentWidth / 30 - 4);

		if(options.recentlyViewed) {
			$NextSlideButton.attr('cm_sp', 'd-recently_viewed-right_arrow');
			$PrevSlideButton.attr('cm_sp', 'd-recently_viewed-left_arrow');
		}
		// Hide Controls
		$Controls.hide();

		if (options.numberOfSlides > options.SlideMax) {
			options.showPagination = false;
		}

		// DYNAMICALLY BUILD PAGINATION AND ATTACH REL FOR POSITIONING
		if (options.showPagination) {
			for (i = 1; i <= options.numberOfSlides; i++) {
				$PaginationHolder.append('<li class="pagination_control" rel="' + i + '"></li>');
			}
		}
		// builds the initial text for the Text pagination
		if (options.paginationType === 'pageNumbers') {
			$PaginationHolder.html('1 of ' + options.numberOfSlides).addClass('pagination_text b large');
		}

		// CACHE PAGEINATION BUTTONS
		$PageControl = $Controls.find('.pagination_control');

		// Jump to first slide after landing on clone
		function jumpToFirst() {
			if (options.sliderType === 'vertical') {
				$sliderWindow.animate({
					marginTop: '0px'
				}, 0);
			} else if (options.sliderType === 'horizontal') {
				$sliderWindow.animate({right: '0px'}, 0);
			}
		}
		// Jump to last slide after landing on clone
		function jumpToLast() {
			if (options.sliderType === 'vertical') {
				$sliderWindow.animate({
					marginTop: - ((options.sliderParentHeight * (options.numberOfSlides - 1)))
				}, 0);
			} else if (options.sliderType === 'horizontal') {
				$sliderWindow.animate({
					right: (options.sliderWindowWidth - options.sliderParentWidth)
				}, 0);
			}
		}

		// added an additional class to give more flexibility on the buttons controls when disabled
		function showHideArrow() {
			if (options.slideNum === options.numberOfSlides - 1) {
				$NextSlideButton.addClass('disable-btn');
			} else {
				$NextSlideButton.removeClass('disable-btn');
			}

			if (options.slideNum === 0) {
				$PrevSlideButton.addClass('disable-btn');
			} else {
				$PrevSlideButton.removeClass('disable-btn');
			}
		}

		function stopRotateSlides() {
			clearInterval(options.playSlides);
		}

		// Set Auto Rotate
		function rotateSlides() {
			stopRotateSlides();
			if (options.autoStart) {
				options.playSlides = setInterval(function interval() {
					options.slideNum ++;
					slideTo();
				}, options.SlideTimer);
			} else {
				stopRotateSlides();
			}
		}

		function slideVert() {
			stopRotateSlides();
			options.sliderWindowPosition = (options.sliderParentHeight * options.slideNum);
			$sliderWindow.animate({
				marginTop: - options.sliderWindowPosition
			}, {
				duration: options.slideSpeed,
				complete: function complete() {
					rotateSlides();
				}
			});
		}

		function slideFade() {
			stopRotateSlides();
			$slide.css({position: 'relative'}).fadeOut(options.slideSpeed);
			setTimeout(function to() {
				options.PageNum = parseInt(options.slideNum, 10); // Gets rel of next active $PageControl
				$sliderWindow
					.find($slide[options.PageNum])
					.css({position: 'relative'})
					.fadeIn(options.slideSpeed, function fadeIn() {
						rotateSlides();
					});
			}, options.slideSpeed);
		}

		function slideHoriz() {
			stopRotateSlides();
			$sliderWindow.width(options.sliderWindowWidth);
			options.sliderWindowPosition = (options.sliderParentWidth * options.slideNum);
			$sliderWindow.animate({
				right: options.sliderWindowPosition
			}, {
				duration: options.slideSpeed,
				complete: function complete() {
					rotateSlides();
				}
			});
		}

		function slideTo() {
			$PageControl.removeClass('active');
			if (!options.carouselOn) {
				showHideArrow();
			}
			if (options.sliderType === 'vertical') {
				slideVert();
			} else if (options.sliderType === 'fade') {
				slideFade();
			} else {
				slideHoriz();
			}

			if (options.slideNum === options.numberOfSlides) {
				jumpToFirst();
				options.slideNum = 0;
			} else if (options.slideNum < 0) {
				jumpToLast();
				options.slideNum = options.numberOfSlides - 1;
			}
			// Gets rel of next active $PageControl
			options.PageNum = parseInt(options.slideNum, 10);
			// Indicator for pagination
			$PaginationHolder.find($PageControl[options.PageNum]).addClass('active');

			if (options.paginationType === 'pageNumbers') {
				$PaginationHolder.html(options.PageNum + 1 + ' of ' + options.numberOfSlides);
			}
		}

		function controlOptions() {
			// Hide dots
			if (!options.showPagination) {
				$PaginationHolder.hide();
			}
			// MAKE FIRST PAGINATION ITEM ACTIVE
			$PageControl.first().addClass('active');
			// ON PAGINATION CLICK
			$PageControl.click(function click() {
				options.slideNum = $(this).attr('rel') - 1;
				slideTo();
				options.autoStart = false;
			});
			// Control click functions
			$NextSlideButton.click(function click() {
				if (!$(this).hasClass('disable-btn') ) {
					options.slideNum ++;
					slideTo();
					options.autoStart = false;
				}
			});
			$PrevSlideButton.click(function click() {
				if ( !$(this).hasClass('disable-btn') ) {
					options.slideNum --;
					slideTo();
					options.autoStart = false;
				}
			});
			// hover and hover off
			$this.hover(function hover() {
				stopRotateSlides();
			}, function hoveroff() {
				rotateSlides();
			});
		}

		// Trigger the event by updating hidden input field with the page you'd like to show: $('element').find('.pageNum').val(value).trigger('change');
		function customControls() {
			if (options.initialLoad) {
				$this.append('<input class="pageNum" type="hidden" value="' + options.slideNum + '">');
			}
			$this.find('.pageNum').change(function change() {
				options.slideNum = parseInt($(this).val(), 10) - 1;
				slideTo();
				options.autoStart = false;
			});
		}
		// Show Slider Controls Default
		function showControls() {
			if (options.showControls) {
				if (!options.carouselOn) {
					showHideArrow();
				}
				$Controls.fadeIn();
			} else {
				$this.hover(function hover() {
					// Show Slider conntrols on hover
					$Controls.fadeIn();
				}, function hoverout() {
					$Controls.fadeOut();
				});
			}
		}
		// Cloning first and last slides
		function cloneSlide() {
			var $FirstSlide = $slide.first().clone();
			var $LastSlide = $slide.last().clone();
			if (options.sliderType === 'vertical') {
				$sliderWindow.prepend($LastSlide.css({
					position: 'relative',
					marginTop: - (options.sliderParentHeight)
				}));
				$sliderWindow.append($FirstSlide);
			} else if (options.sliderType === 'horizontal') {
				$sliderWindow.append($FirstSlide.css({
					position: 'absolute',
					left: options.sliderWindowWidth,
					width: '100%'
				}));
				$sliderWindow.prepend($LastSlide.css({
					position: 'absolute',
					left: - options.sliderParentWidth
				}));
			}
		}

		function loadSlides() {
			// Var to Check if ajax URL is good
			var checkURL = true;
			var n;
			var $AjaxSlide;
			// Loads Content
			if ($slide.length > 1) {
				showControls();
				customControls();
				if (options.carouselOn) {
					cloneSlide();
				}
				controlOptions();
				rotateSlides();
				for (n = 1; n < $slide.length; n++) {
					$AjaxSlide = $(this).attr('data-ajaxSlide');
					if ($AjaxSlide && i > 1){
						$(this).find('.pod').load($AjaxSlide, function(response, status, xhr){
							if (status === "success"){
									if (i === options.numberOfSlides && checkURL === true){
										showControls();
										if(options.carouselOn){
											cloneSlide();
										}
										controlOptions();
										rotateSlides();
									}
							} else if (status === 'error') {
								checkURL = false;
							}
						});
					}
				}
			}
			options.initialLoad = false;
		}


		// $(window).load(function(){loadSlides();});
		loadSlides();
		// returns the jQuery object to allow for chainability.
		$this.removeClass(options.sliderName);
		$this.addClass('sliderDone');

		return this;  
	};

	$(function docReady() {
		$('.sliderV2').each(function ea(){
			$(this).imagesLoaded(function imagesLoaded() {
				$(this).thdSliderV2();
			});
		});
	});

	return $.fn.thdSliderV2;
});
