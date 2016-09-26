/*
------------------------------------------------------------------------------
| Modulular function to call in necessary files on demand.
|
|
| THDModuleLoader.$inludeModule(ThisIsModulesName, dependency1, dependency2, dependency3,.....)
|	$ModuleName = Boolean($(".moduleTest").length);
|		if($ModuleName) {
|		$includeModule("testname", "cart", "certona");
|	}
|
|	$ModuleName2 = Boolean($(".moduleTest2").length);
|		if($ModuleName2) {
|		$includeModule("testname2", "cart", "gridx");
|	}
|
|	The Above would return
|
|	<script type="text/javascript" src="/library/scripts/cart.js"></script>
|	<script type="text/javascript" src="/library/scripts/certona.js"></script>
|	<link rel="stylesheet" href="/modules/styles/testname.css">
|	<script type="text/javascript" src="modules/scripts/testname.js"></script>
|	<script type="text/javascript" src="/library/scripts/gridx.js"></script>
|	<link rel="stylesheet" href="/modules/styles/testname2.css">
|	<script type="text/javascript" src="modules/scripts/testname2.js"></script>
|
------------------------------------------------------------------------------

# THDModuleLoader is deprecated. You should be using requirejs.

	The below scripts are dependencies of THDModule loader and need to be defined
	in your requirejs config with the below alias and correct paths

	'heroSlideShow': '../../node_modules/olt-global-scripts/desktop/widgets/heroSlideShow',
	'thdTheme': '../../node_modules/olt-global-scripts/desktop/widgets/thdTheme',
	'thdSlider': '../../node_modules/olt-global-scripts/desktop/widgets/thdSlider',
	'thdSliderV2': '../../node_modules/olt-global-scripts/desktop/widgets/thdSliderV2',
	'thd.sliderV3': '../../node_modules/olt-global-scripts/desktop/widgets/thd.sliderV3',
	'twentytwenty': '../../node_modules/olt-global-scripts/desktop/widgets/twentytwenty',
	'jquery.event.move': '../../node_modules/olt-global-scripts/desktop/lib/plugins/jquery.event.move',
	'thdSilo': '../../node_modules/olt-global-scripts/desktop/widgets/thdSilo',
	'relatedResourceWidget': '../../node_modules/olt-global-scripts/desktop/widgets/relatedResourceWidget',
	'simpleAccordion': '../../node_modules/olt-global-scripts/desktop/widgets/simpleAccordion',
	'thd.collapse': '../../node_modules/olt-global-scripts/desktop/widgets/thd.collapse',
	'thdSocialmedia': '../../node_modules/olt-global-scripts/desktop/widgets/thdSocialmedia',
	'thd.sbotd': '../../node_modules/olt-global-scripts/desktop/widgets/thd.sbotd',
	'muteYTVideo': '../../node_modules/olt-global-scripts/desktop/widgets/muteYTVideo',
*/
'use strict';
(function closure(root, factory) {
	if(typeof define === 'function' && define.amd) {
		define('thd.moduleLoader', [
			'jquery',
			'global.namespace',
			'global.logging',
			'global.utility'
		], function load($, THD, thdLogger, globalUtility) {
			return factory($, THD, thdLogger, globalUtility);
		});
	} else{
		/* eslint-disable*/
		root.THDModuleLoader = factory(jQuery, THD, THD, globalUtility);
		/*eslint-enable*/
	}
})(this, function factory($, THD, thdLogger, globalUtility) {
	var THDModuleLoader;
	var THDModuleDependencies = [];
	var loadBV;
	// var secureLLC;


	// check for URL type 'origin'
	function isURLTypeOrigin(urlSuffix) {
		return urlSuffix === 'origin';
	}

	// formats passed in urls
	function urlFormatter(urlParam, pathParam) {
		var path = (pathParam) ? pathParam : '';
		var url = (urlParam.indexOf('http://') === 0 || urlParam.indexOf('https://') === 0)
			? urlParam
			: path + urlParam;
		return url;
	}

	// Private: breaks down the host so we can apply logic based on LLC vs. Producion environment.
	function determineHost() {
		var sub = window.location.host;
		var secureDomain = (sub.indexOf('dev.') > -1)
			? 'secure.'
			: 'secure2.';
		var domains = {};
		var httpProtocol = window.location.protocol;
		/* sub = "t.hd-st71.homedepotdev.com";
		sub = "www.homedepot.com";
		sub = "hd-st71.homedepot.com";
		sub = "t.homedepot.com";
		sub = "secure2.homedepot.com";
		sub = "secure2.hd-st71.homedepotdev.com";
		sub = "t.secure2.homedepot.com";
		sub = "origin.hd-st71.homedepotdev.com";
		sub = "secure2.origin.hd-st71.homedepotdev.com";
		httProtocol = "https:";*/

		sub = sub.split('.');
		// checking to see if we are in and LLC
		try {
			domains.secure = (httpProtocol === 'https:') ? secureDomain : '';
			if(sub[0].length === 1) {
			/* tablet */
				domains.channel = sub[0] + '.';
				if (sub[2].indexOf('dev') > -1 || sub[1].indexOf('dev') > -1) {
					if (httpProtocol === 'https:') {
						domains.environment = '';
						domains.topLevel = sub[2] + '.com';
					} else {
						domains.environment = sub[1] + '.';
						domains.topLevel = sub[2] + '.com';
					}
				}else{
					if(httpProtocol === 'https:') {
						domains.environment = '';
						domains.topLevel = sub[2] + '.com';
					}else{
						domains.environment = '';
						domains.topLevel = sub[1] + '.com';
					}
				}
			} else {
				/* desktop*/
				domains.channel = '';

				if(sub[1].indexOf('dev') > -1 || sub[2].indexOf('dev') > -1 || (sub[3] && sub[3].indexOf('dev') > -1)) {
					if(httpProtocol === 'https:') {
						domains.environment = sub[1] + '.';
						domains.topLevel = isURLTypeOrigin(sub[1])
							? (sub[2] + '.' + sub[3] + '.com')
							: sub[2] + '.com';
					}else{
						domains.environment = sub[0] + '.';
						domains.topLevel = isURLTypeOrigin(sub[0])
							? (sub[1] + '.' + sub[2] + '.com')
							: (sub[1] + '.com');
					}
				} else {
					if (httpProtocol === 'https:') {
						domains.environment = '';
						domains.topLevel = sub[1] + '.com';
					}else{
						domains.environment = sub[0] + '.';
						domains.topLevel = sub[1] + '.com';
					}
				}
			}
		} catch (e) {
			THD.isLogging = true;
			thdLogger.log('Error: ' + e + ' - D\'OH! You\'re getting this error becasue you are running on localhost:XXXX. The workaround is for you to update your hosts file localhost domain (127.0.0.1 localhost) to a genric domain like, local.homedepot.com!  Don\'t know how to change your hosts file you say? Check out this article: http://bit.ly/1fueDGB.');
		}
		return domains;
	}

	// Private: sets the full path of the resource based on environment
	function getPath() {
		var basePath = '';
		var httpProto = window.location.protocol;
		var domains = determineHost();
		basePath = httpProto + '//' + domains.secure + domains.environment + domains.topLevel;
		return basePath;
	}

	/* private callback method used to envoke a given callback function
	--------------------------------------------------------------------
		args = {
			script: //the script object,
			callback: //callback method name
		}
	------------------------------------------------------------------*/
	function callThis(args) {
		if (typeof args.callBack === 'function') {
			args.script.onload = args.callBack.call(this);

			args.script.onreadystatechange = function readystatechange() {
				if(this.readyState === 'complete' || this.readyState === 'loaded') {
					args.script.call(this);
				}
			};
		}
	}

	THDModuleLoader = {
		$includeModule: function includeModule(moduleName) {
			var jsDependencyPath;
			var cssModulePath;
			var jsModulePath;
			var i;
			var _head = parent.document.getElementsByTagName('head')[0];
			var _body = parent.document.getElementsByTagName('body')[0];
			var newScript = parent.document.createElement('script');
			var newCSS = parent.document.createElement('link');
			var newDependency;
			var path = getPath();

			// paths to correct folders
			jsDependencyPath = path + '/HFApp/static/global/scripts/desktop/lib/';
			cssModulePath = path + '/HFApp/static/global/styles/desktop/widget/';
			jsModulePath = path + '/HFApp/static/global/scripts/desktop/widgets/';

			// set the source for each variable
			newScript.type = 'text/javascript';
			newScript.src = jsModulePath + moduleName + '.js';

			// set type for each new element
			newCSS.rel = 'stylesheet';
			newCSS.href = cssModulePath + moduleName + '.css';

			// check for dependencies and append accordingly
			for(i = 1; i < arguments.length; i += 1) {
				// check if dependency exist in the global array THDModuleDependencies
				// If it doesn not exist then add it to the page and update the array
				if($.inArray(arguments[i], THDModuleDependencies) === -1) {
					// console.log(arguments[i] + '.js has been added to the page');

					newDependency = document.createElement('script');
					newDependency.src = jsDependencyPath + arguments[i] + '.js';

					THDModuleDependencies.push(arguments[i]);

					_body.appendChild(newDependency);
				}
			}

			// append script and css for module
			_head.appendChild(newCSS);
			_body.appendChild(newScript);
		},

		$includeJS: function includeJS(urlParam, myCallBack) {
			var _body = parent.document.getElementsByTagName('body')[0];
			var newScript = parent.document.createElement('script');
			var url = urlFormatter(urlParam);

			newScript.type = 'text/javascript';
			newScript.src = url;
			_body.appendChild(newScript);

			// this envokes the callback passed in
			if(typeof myCallBack !== 'undefined') {
				callThis({
					callback: myCallBack,
					script: newScript
				});
			}
		},

		$includeCSS: function includeCSS(urlParam) {
			var _head = parent.document.getElementsByTagName('head')[0];
			var newCSS = parent.document.createElement('link');
			var url = urlFormatter(urlParam);
			newCSS.rel = 'stylesheet';
			newCSS.href = url;
			_head.appendChild(newCSS);
		},

		// if you want to use a $.defered method as a callback.  Note this wont work cross domain!!!
		$includeJSAjax: function includeJSAjax(urlParam) {
			var url = urlFormatter(urlParam);
			return $.getScript(url);
		}
	};

	function runBV(bvID) {
		window.$BV.ui('rr', 'show_reviews', {
			productId: bvID,
			onEvent: function onEvent(json) {
				if(json.eventSource === 'Display') {
					// @QUESTION where is this defined?
					showRatingsDisplayed(json.attributes.numReviews);
				}
			}
		});
	}

	function waitForBV(bvID) {
		if(typeof window.$BV !== 'undefined') {
			clearInterval(loadBV);
			runBV(bvID);
		}
	}

	function handleShowMoreButton(e) {
		var $this = $(e.target);
		var moreText = 'More';
		var lessText = 'Less';
		var lessClass = 'showLess';
		// To disable parent click handlers
		e.preventDefault();
		e.stopPropagation();

		if($this.hasClass(lessClass)) {
			$this.removeClass(lessClass);
			$this.html(moreText);
		} else {
			$this.addClass(lessClass);
			$this.html(lessText);
		}
		$this.prevAll().eq(1).toggle();
		$this.prev().toggle();
	}

	THDModuleLoader.init = function init() {
		if (THD.THDModuleLoader) {
			return this;
		}

		THD.THDModuleLoader = THDModuleLoader;
		$(function docReady() {
			var themeID;
			var $hasSlider;
			var $hasSliderV2;
			var $hasSliderV3;
			var $hasSplitImageContainer;
			// var $hasNegMargin;
			var $hasRelatedResourcesWidget;
			var $hasTHDSimpleAccordion;
			var $isGen1ContactUs;
			var $isFAQPageVisible;
			var $hasSocialResourcesWidget;
			var $hasSBOTDResourcesWidget;
			var $hasmuteVideo;
			var bcAPI;
			var $hasServiceRatingsReviews;
			var hostName;
			var isDevEnvironment;
			var bvID;
			var $hasMoreLink;

			// thdTheme
			themeID = $('#container').attr('data-thdtheme');
			if (themeID) {
				require(['thdTheme']);
			} else {
				// thdSlider
				$hasSlider = Boolean($('.slider').length);
				if ($hasSlider) {
					require(['thdSlider']);
				}
			}

			$hasSliderV2 = Boolean($('.sliderV2').length);
			if ($hasSliderV2) {
				require(['thdSliderV2']);
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/widget/thdSliderV2.css');
			}

			$hasSliderV3 = Boolean($('.sliderV3').length);
			if ($hasSliderV3) {
				require(['thd.sliderV3']);
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/widget/thd.sliderV3.css');
			}

			$hasSplitImageContainer = Boolean($('.twentytwenty-container').length);
			if ($hasSplitImageContainer) {
				// Include jquery move event https://github.com/stephband/jquery.event.move
				require(['jquery.event.move', 'twentytwenty']);
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/widget/twentytwenty.css');
			}

			// Related Resources
			$hasRelatedResourcesWidget = Boolean($('[data-widget=related-resource-widget]').length);
			if($hasRelatedResourcesWidget) {
				require(['relatedResourceWidget']);
			}

			// Simple Accordion
			$hasTHDSimpleAccordion = Boolean($('[data-action=accordion-trigger]').length);
			if($hasTHDSimpleAccordion) {
				require(['simpleAccordion']);
			}

			// Contact Us Page Hack
			$isGen1ContactUs = Boolean($('#contactFormWrapper').length);
			if($isGen1ContactUs) {
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/source/ContactUsPageGen1.css');
			}

			// FAQs page
			$isFAQPageVisible = Boolean($(".content > h4[data-toggle='collapse']").length);
			if($isFAQPageVisible) {
				require(['thd.collapse']);
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/widget/thd.collapse.css');
			}

			// THD Social Media Related Resources
			$hasSocialResourcesWidget = Boolean($('#socialWidgetTable').length);
			if($hasSocialResourcesWidget) {
				require(['thdSocialmedia']);
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/widget/thdSocialmedia.css');
			}

			// THD SBOTD Widget Related Resources
			$hasSBOTDResourcesWidget = Boolean($('#sbotd').length);
			if($hasSBOTDResourcesWidget) {
				require(['thd.sbotd']);
				// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/widget/thd.sbotd.css');
			}

			// Mute the Youtube Video Resources
			$hasmuteVideo = Boolean($('.muteYTVideo').length);
			if($hasmuteVideo) {
				require(['muteYTVideo']);
			}

			// Pull in the brightcove player, but only if it was not already called in.
			if(window.brightcove === undefined) {
				// Determine, if we need secure or not.
				bcAPI = (window.location.protocol === 'http:')
					? true
					: false;

				if (bcAPI) {
					require(['brightcove', 'videoPlayer']);
				}
			}


			// try{
			// 	// Determine if MCC throttle is on.
			// 	var MCC_OVERRIDE = readCookie("MCC_THROTTLE");
			// 	var devOverride = ((window.location.search.indexOf("mcc=true")>-1) ||
			// 							(window.location.search.indexOf("MCC=true")>-1));

			// 	if(MCC_OVERRIDE || devOverride) {
			// 		THDModuleLoader.$includeJS('/MCCCheckout/static/MCC/dist/mccFullsiteCore.js');
			// 		// Include CSS overrides for MCC
			// 		THDModuleLoader.$includeCSS('/MCCCheckout/static/MCC/dist/thd.mcc.atc.overlay.v1.css');
			// 	}
			// }catch(e){
			// 	console.log("Error loading MCC resources");
			// }


			// Pull in the BV RR, but only if it was not already called in.
			$hasServiceRatingsReviews = (Boolean($('#BVRRContainer').length) && (!Boolean($('#productinfo_ctn').length)));
			if(window.$BV === undefined && $hasServiceRatingsReviews) {
				hostName = globalUtility.getHostNameNonSecure();
				isDevEnvironment = (hostName.indexOf('homedepotdev') > -1 || hostName.indexOf('localhost') > -1);
				bvID = $('#BVRRContainer').attr('data-bv-id');

				// console.log(isDevEnvironment);

				// @TODO need to test this
				if (window.location.protocol === 'https:') {
					(!isDevEnvironment)
						? require(['https://homedepot.ugc.bazaarvoice.com/static/1999profiles/bvapi.js'])
						: require(['https://homedepot.ugc.bazaarvoice.com/bvstaging/static/1999profiles/bvapi.js']);
				} else {
					(!isDevEnvironment)
						? require(['http://homedepot.ugc.bazaarvoice.com/static/1999aa/bvapi.js'])
						: require(['http://homedepot.ugc.bazaarvoice.com/bvstaging/static/1999services/bvapi.js']);
				}


				loadBV = setInterval(function bv() {
					waitForBV(bvID);
				}, 1000);
			}

			// Handling More/Less Links on Text Widgets
			$hasMoreLink = Boolean($('.moreLink').length);
			// @QUESTIOM why is this here?
			if($hasMoreLink) {
				// Method to handle More Button click
				$('.moreLink').click(handleShowMoreButton);
			}
		});
		return this;
	};
	window.THDModuleLoader =  THDModuleLoader;

	THDModuleLoader.init();
	return THDModuleLoader;
});
