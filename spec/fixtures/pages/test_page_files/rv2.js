/* RV2.js
 * This JS is mainly for RV2 products (show more)
 *
*/
'use strict';
(function closure(root, factory) {
	if(typeof define === 'function' && define.amd) {
		define('rv2', [
			'jquery',
			'cookie-utils',
			'certona.helpers',
			'utils.userInfo',
			'global.utility',
			'utils.url',
			'global.logging',
			'mustache',
			'global.namespace',
			'thd.moduleLoader',
			'thdSliderV2'
		],
		function load($, cookieUtils, certonaHelpers, userInfo, globalUtilty, utilsUrl, thdLogger, Mustache, THD, THDModuleLoader) {
			return factory($, cookieUtils, certonaHelpers, userInfo, globalUtilty, utilsUrl, thdLogger, Mustache, THD, THDModuleLoader);
		});
	} else{
		// For non-AMD module, expose this to global (will also be useful for test cases)
		/* eslint-disable*/
		factory(jQuery, cookieUtils, certonaHelpers, userInfo, globalUtilty, utilsUrl, Mustache, THD, THDModuleLoader);
		/*eslint-enable*/
	}
})(this, function factory($, cookieUtils, certonaHelpers, userInfo, globalUtilty, utilsUrl, thdLogger, Mustache, THD, THDModuleLoader) {
	var defaults = {
		sliderPodsPerRow: 4,
		showMorePodsPerRow: 6,
		showATC: true,
		isCart: false,
		maxTitleLength: 40,
		maxDescriptionLength: 20,
		showMoreButton: false,
		apiKey: 'xsCGRApF2OyytV2Lf3PihBfFLXvz3tkX',
		callback: function cb() {return true;},

		/* API INPUT DEFAULTS*/
		levels: '',
		'storeId': '',
		'trackingId': '',
		'sessionId': '',
		'customerId': '',
		'appId': 'homedepot01',
		'certonaSchema': '',
		'exItems': '',
		'maxProducts': 18,
		'products': ''

		/* END INPUT DEFAULTS*/

	};

	var savedData = {
		'pageId': '',
		'trackingId': '',
		'parentItemName': '',
		'parentItemID': '',
		'parentShowMore': '',
		'rv2Schema': '',
		'resxLinks': ''
	};


	var baseTemplatePath = '/HFApp/static/global/scripts/desktop/thirdparty/certona/templates/';
	var rv2Listings = {};
	// var counter = 0;
	var certonaSchemaData = '';
	var schemeTemplate = '';
	var rv2ContainerID = '';
	/* showMoreButtonPosition = '',*/
	// var showMoreButton = '';
	// THDModuleLoader.$includeCSS('/HFApp/static/global/styles/desktop/thirdparty/rv2.css');
	function getAPIKey() {
		return defaults.apiKey;
	}

	function getRV2CookieData() {
		defaults.sessionId = cookieUtils.readCookie('RES_SESSIONID');
		defaults.trackingId = cookieUtils.readCookie('RES_TRACKINGID');
		defaults.customerId = certonaHelpers.getWCUserIdFromCookies();

		if(defaults.storeId === '') {
			defaults.storeId = userInfo.getTHDStoreNo();
		}

		if(defaults.storeId === '0') {
			defaults.storeId = '8119';
		}
	}

	function getRV2Host() {
		var hostName = certonaHelpers.getDomain();
		var protocol = window.location.protocol + '//';
		var isBeta = cookieUtils.readCookie('HD_DC') === 'beta';
		var isProdBeta = (hostName.indexOf('ps71') < 0);
		var apiPrefix = protocol + 'origin.api';
		var betaHost = '';

		if(isBeta) {
			betaHost = (isProdBeta)
				? '-beta'
				: 'beta.';
		}

		apiPrefix = (hostName.indexOf('homedepotdev') > -1) ? apiPrefix + '.' : apiPrefix;

		hostName = hostName.replace('http://', apiPrefix + betaHost).replace('secure2', '');
		hostName = hostName.replace('www.', '.');

		return hostName;
	}


	function toggleNoProductsArrow(args) {
		$('[data-itemid="' + args.itemId + '"]')
			.parents('.content')
			.toggleClass('noProductsParent', args.flag);
	}

	function updateResx() {
		resx.event = 'showmore';
		resx.itemid = $('#' + rv2ContainerID).data('itemid');
		resx.links = $('#' + rv2ContainerID).data('resxlinks');
		resx.customerid = defaults.customerId;
		resx.pageid = $('#' + rv2ContainerID).data('pageid');

		certonaResx.run();
	}


	function renderScheme() {
		var rv2HTML = '';

		rv2HTML = Mustache.to_html(schemeTemplate, rv2Listings);

		$("[id^='rv_']").after(rv2HTML);

		$('#' + rv2Listings.schemaItemId).removeClass('hide');

		if (rv2Listings.noProductsFlag === true) {
			$('#' + rv2Listings.schemaItemId).addClass('noProductsListed');
			toggleNoProductsArrow({
				flag: true,
				itemId: rv2Listings.schemaItemId.split('_')[3]
			});
		}

		$('#' + rv2Listings.schemaItemId + ' .showMoreV2:first').thdSliderV2();

		updateResx();

		$('.close-rv2').on('click', function click(e) {
			var closeClick = $(this);
			var rv2ContainerIDLocal = closeClick.attr('data-showMoreID');
			e.preventDefault();
			$('.show-more-btn-container').removeClass('hide');
			$('#' + rv2ContainerIDLocal).addClass('hide');
			$('.show-more-btn-arrow').addClass('hide');
			savedData.resxLinks = '';
			$("[id^='rv_']").removeClass('noProductsParent');
		});

		$("[id^='rv_'] .prev, [id^='rv_'] .next, .slide-left, .slide-right").on('click', function click() {
			$('.show-more-btn-container').removeClass('hide');
			$('.show-more-btn-arrow, .rv2ShowMore').addClass('hide');
			$("[id^='rv_']").removeClass('noProductsParent');
		});
	}

	function processRV2Data(certonaData) {
		var productsData = certonaData.schemas;
		var products = productsData[0].products;
		/* i = products.length, */
		// var productsTitle = productsData[0].title;
		var productsSchemaId = productsData[0].schemaId;
		var podLimit = defaults.showMorePodsPerRow;
		var imageDimension = '100';/* (defaults.isCart) ? "100" : "145",*/
		var baseImageUrl = '/catalog/productImages/' + imageDimension + '/';
		var i;
		var isRowStart;
		var isRowEnd;
		var dollarOff;
		var discountFlag;
		// var productImage;

		if (products === undefined || products === null) {
			rv2Listings.schemaItemId = defaults.certonaSchema + '_' + savedData.parentItemID;
			rv2Listings.noProductsFlag = true;
			rv2Listings.productsFlag = false;
			savedData.pageId = certonaData.pageId;
			savedData.resxLinks = '';
		} else {
			i = products.length;
			while(i--) {
				isRowStart = (i % podLimit === 0);
				isRowEnd = ((i % podLimit) * podLimit === (podLimit - 1) * podLimit);
				dollarOff = products[i].dollarOff;
				discountFlag = (dollarOff !== 0) && (typeof dollarOff !== 'undefined');

				products[i].configurableFlag = (products[i].itemType === 'CONFIGURABLE_BLINDS');
				products[i].merchFlag = (products[i].itemType === 'MERCHANDISE');
				products[i].applianceFlag = (products[i].itemType === 'MAJOR_APPLIANCE');
				products[i].canonicalURL = certonaHelpers
					.getDomain()
					.replace('secure2.', '') + products[i].canonicalURL;

				products[i].isRowStart = isRowStart;

				if (products[i].guid !== 'No_Image') {
					products[i].productImage = baseImageUrl + products[i].guid.substring(0, 2) + '/' + products[i].guid + '_' + imageDimension + '.jpg';
				} else {
					products[i].productImage = '/static/images/no-image-available.jpeg';
				}

				products[i].originalPrice = (typeof products[i].originalPrice !== 'undefined')
					? products[i].originalPrice.toFixed(2)
					: '';
				products[i].price = (typeof products[i].price !== 'undefined')
					? products[i].price.toFixed(2)
					: '';
				products[i].productNameShorten = certonaHelpers.rv2trimDescription(products[i].productName, 'description', defaults);
				products[i].ratingPercentage = (products[i].rating / 5 * 100);
				products[i].imageDimension = imageDimension;
				products[i].recomendingOMSID = (defaults.products.indexOf(',') === -1 && savedData.parentItemID !== '')
					? savedData.parentItemID
					: 'NA';
				products[i].discountFlag = (products[i].configurableFlag) ? false : discountFlag;
				products[i].schemaId = productsSchemaId;
				products[i].showATCFlag = defaults.showATC;

				/*
					MAP Pricing:
					if "mapAboveOriginalPrice" does not appear on the API response, then clients shall continue with the normal pricing display treatment.
					If "mapAboveOriginalPrice" value is true, then clients shall not show original and special price - and only show the message
					If "mapAboveOriginalPrice" value is false, then clients shall show original price with a strike through but do not show the special price - and show the message
				*/

				products[i].MAPFlag = products[i].hasOwnProperty('mapAboveOriginalPrice');

				if(products[i].MAPFlag) {
					products[i].hideMAPPrice = products[i].mapAboveOriginalPrice === true;
				}

				products[i].MSTFlag = products[i].hasOwnProperty('specialBuyPrice')
					? products[i].MSTFlag
					: '';

				if (savedData.resxLinks === '' || typeof savedData.resxLinks === null || typeof savedData.resxLink === undefined) {
					savedData.resxLinks = products[i].productId + '|' + products[i].schemaId + ';';
				} else {
					savedData.resxLinks = savedData.resxLinks + ';' + products[i].productId + '|' + products[i].schemaId;
				}

				products[i].isRowEnd = isRowEnd;
			}

			rv2Listings.product = products;
			rv2Listings.productsFlag = true;
			rv2Listings.noProductsFlag = false;
			rv2Listings.title = 'MORE LIKE ' + certonaHelpers.rv2trimDescription(savedData.parentItemName, 'title', defaults);
			rv2Listings.schemaItemId = defaults.certonaSchema + '_' + savedData.parentItemID;
			rv2Listings.pageId = savedData.pageid;
			rv2Listings.trackingId = certonaData.trackingId;
			rv2Listings.resxLinks = savedData.resxLinks;
			rv2Listings.origianlProduct = savedData.parentItemID;

			// savedData.pageId = certonaData.pageId;
		}

		savedData.resxLinks = '';

		renderScheme(rv2Listings);
	}

	function getRV2SchemeData(/* certonaSchema */) {
		var basePath = '/ProductServices/v2/products/recommendation';
		var host = getRV2Host();
		var stringData;
		var requestUrl;
		getRV2CookieData();
		stringData = JSON.stringify({
			levels: defaults.levels,
			storeId: '',
			trackingId: defaults.trackingId,
			sessionId: defaults.sessionId,
			customerId: '',
			appId: defaults.appId,
			pageId: resx.pageid,
			certonaSchema: defaults.certonaSchema,
			exItems: '',
			maxProducts: defaults.maxProducts,
			products: savedData.parentItemID
		});
		requestUrl = utilsUrl.set({
			setParms: {
				type: 'json',
				key: getAPIKey()
			},
			url: host + basePath
		});

		// setCertonaHostProperty(host);

		$.ajax({
			url: requestUrl,
			type: 'POST',
			contentType: 'application/json',
			timeout: 2000,
			data: stringData
		}).done(function done(data) {
			certonaSchemaData = data;
			processRV2Data(certonaSchemaData);
		}).fail(function fail(data) {
			thdLogger.log('Load failed. Response: ', data);
		});
	}

	function loadTemplate(templateName) {
		var path = baseTemplatePath + templateName;
		$.ajax({
			url: path,
		}).done(function done(data) {
			schemeTemplate = data;
		}).fail(function fail() {
			thdLogger.log('Could not load: ' + path);
		});
	}

	function getTemplateData(templateName) {
		loadTemplate(templateName);
	}

	THD.Utility.Namespace.createNamespace('THD.Thirdparty.RecentlyV2');
	return {
		init: function init() {
			$(document).on('click', '.show-more-btn', function click(e) {
				var divIDParentExist;
				var showMoreButton = $(this);
				// var showMoreButtonPosition;
				// var certonaData;
				// var processCertonaData;
				// var divClassParentExist;
				var dataDeferred = $.Deferred();
				// var dataPromise = dataDeferred.promise();

				e.stopImmediatePropagation();
				e.preventDefault();

				savedData.parentItemID = $(this).parent().attr('data-itemId');
				savedData.parentItemName = $(this).parent().attr('data-itemName');
				rv2ContainerID = defaults.certonaSchema + '_' + savedData.parentItemID;
				divIDParentExist = document.getElementById(rv2ContainerID);
				/* showMoreButtonPosition = {
					"x": showMoreButton[0].offsetLeft + 36 + "px",
					"y": showMoreButton[0].offsetTop + 24 + "px"
				};*/

				defaults.levels = $.trim($('#headerCrumb li:last-child a').html());

				if (divIDParentExist === null) {
					$('.rv2ShowMore, .show-more-btn-arrow').addClass('hide');
					$('.show-more-btn-container').removeClass('hide');

					dataDeferred.resolve(getRV2SchemeData(savedData.parentShowMore));
					showMoreButton.parent().addClass('hide');
					showMoreButton.parent().siblings('.show-more-btn-arrow').removeClass('hide');
				} else {
					$('.rv2ShowMore, .show-more-btn-arrow').addClass('hide');
					$('.show-more-btn-container').removeClass('hide');

					showMoreButton.parent().addClass('hide');
					showMoreButton.parent().siblings('.show-more-btn-arrow').removeClass('hide');
					$('#' + rv2ContainerID).removeClass('hide');
					if ( $('#' + rv2ContainerID).data('productsFalg') === true) {
						$('#' + rv2Listings.schemaItemId).addClass('noProductsListed');
					}

					updateResx();
				}

				return false;
			});

			/* shows the "show more" button if the "data-showmore" is true */
			$(document).ready(function ready() {
				var onHomePage = $('#con1_home_rr').length;
				defaults.certonaSchema = $("[id^='rv_']").data('showmore');

				getTemplateData('rv2.tmpl');

				savedData.pageid = window.resx.pageid;

				$('.RV_container_rr').parent().css('display', 'block');

				if (!defaults.certonaSchema) {
					$('.show-more-btn-container').css('visibility', 'hidden');
				} else {
					if (onHomePage === 0) {
						$('.show-more-btn').first().trigger('click');
					}
				}
			});
		}
	};
});
