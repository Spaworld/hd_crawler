/* mcc.js
 Built: Thu Aug 25 2016 13:42:51 GMT-0500 (Central Daylight Time)*/
window.console = window.console || { log: function () {}, error: function() {}, debug: function() {}, warn: function() {} };
if(typeof Handlebars !== "undefined"){
console.warn("Prevented duplicate load of Handlebars");}else{
/*!

 handlebars v1.1.2

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
var Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){"use strict";function a(){for(var a=Error.prototype.constructor.apply(this,arguments),b=0;b<c.length;b++)this[c[b]]=a[c[b]]}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new Error("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.1.2";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new Error("No environment passed to template");var c;c=b.compile?function(a,c,d,e,f,g){var i=h.apply(this,arguments);if(i)return i;var j={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,j)}:function(a,b){var c=h.apply(this,arguments);if(c)return c;throw new l("The partial "+b+" could not be compiled when running in runtime-only mode")};var e={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:f,noop:i,compilerInfo:null};return function(c,f){f=f||{};var g,h,i=f.partial?f:b;f.partial||(g=f.helpers,h=f.partials);var j=a.call(e,i,c,g,h,f.data);return f.partial||d(e.compilerInfo),j}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e);return f}();
};
define("handlebars", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Handlebars;
    };
}(this)));

/*
 * A common way to detect the browser
 */
define('shared/utils/BrowserDetector', 
	[], 
	function(){
		
	    /**
	     * Searches a user agent string 
	     * @param {Array} an array of browsers
	     * @return returns a browser identity
	     */
		function _searchString(data) {
		    for(var i = 0; i < data.length; i++) {
		        var dataString = data[i].string;
		        var dataProp = data[i].prop;
		        this.version_searchString = data[i].versionSearch || data[i].identity;
		        if(dataString) {
		            if(dataString.indexOf(data[i].subString) != -1)
		                return data[i].identity;
		        } else if(dataProp)
		            return data[i].identity;
		    }
		};
		
	    /**
	     * Searches a user agent string for a browser version
	     * @param {String} a user agent string
	     * @return {Number} returns a numeric value that represents the browser version
	     */
		function _searchVersion(dataString) {
		    var index = dataString.indexOf(this.version_searchString);
		    if(index == -1) return;
		    return parseFloat(dataString.substring(index + this.version_searchString.length + 1));
		};
	
		// An array of maps of operating system data
		var dataOS = [{
		    string: navigator.platform,
		    subString: "Win",
		    identity: "Windows"
		}, {
		    string: navigator.platform,
		    subString: "Mac",
		    identity: "Mac"
		}, {
		    string: navigator.userAgent,
		    subString: "iPhone",
		    identity: "iPhone/iPod"
		}, {
		    string: navigator.platform,
		    subString: "Linux",
		    identity: "Linux"
		}];
	
		// An array of maps of browser data
		var dataBrowser = [{
		    string: navigator.userAgent,
		    subString: "Chrome",
		    identity: "Chrome"
		}, {
		    string: navigator.userAgent,
		    subString: "OmniWeb",
		    versionSearch: "OmniWeb/",
		    identity: "OmniWeb"
		}, {
		    string: navigator.vendor,
		    subString: "Apple",
		    identity: "Safari",
		    versionSearch: "Version"
		}, {
		    prop: window.opera,
		    identity: "Opera",
		    versionSearch: "Version"
		}, {
		    string: navigator.vendor,
		    subString: "iCab",
		    identity: "iCab"
		}, {
		    string: navigator.vendor,
		    subString: "KDE",
		    identity: "Konqueror"
		}, {
		    string: navigator.userAgent,
		    subString: "Firefox",
		    identity: "Firefox"
		}, {
		    string: navigator.vendor,
		    subString: "Camino",
		    identity: "Camino"
		}, { // for newer Netscapes (6+)
		    string: navigator.userAgent,
		    subString: "Netscape",
		    identity: "Netscape"
		}, {
		    string: navigator.userAgent,
		    subString: "MSIE",
		    identity: "Explorer",
		    versionSearch: "MSIE"
		}, {
		    string: navigator.userAgent,
		    subString: "Gecko",
		    identity: "Mozilla",
		    versionSearch: "rv"
		}, { // for older Netscapes (4-)
		    string: navigator.userAgent,
		    subString: "Mozilla",
		    identity: "Netscape",
		    versionSearch: "Mozilla"
		}];
	
		/*
		 * Returns a map that contains browser, version, and os
		 */
		return {
		    // core browser attributes
			browser: _searchString(dataBrowser) || "An unknown browser",
		    version: _searchVersion(navigator.userAgent) || _searchVersion(navigator.appVersion) || "an unknown version",
		    os: _searchString(dataOS) || "an unknown OS",
		    
		    // custom getters
		    isIE9: function() {
		    	return (this.browser === "Explorer" && this.version === 9) ? true : false;
		    }
		};

});
/**
 * Global environment details:
 *	e.g. hostname, channel, etc.
 */

define('cart/env',
	[	'jquery',
	 	'shared/utils/BrowserDetector',
	 	'cookie-utils'
	], 
function($, browserDetector,cookieUtils){
	
	var env = {};
	
	//set channel globals, if undefined
	if(typeof IS_TABLET ==="undefined"){
		window.IS_TABLET=(typeof THD_TOUCH_GLOBALS !== "undefined");
		window.IS_DESKTOP=!window.IS_TABLET;
	}

	env.host = window.location.host;

	//remove secure/secure2 from url to get root
	env.host = env.host.replace("secure.", "");
	env.host = env.host.replace("secure2.", "");

	var isProd = (env.host.indexOf("homedepot.com")>-1);

	var http = "http://";
	var https = isProd ? "https://secure2." : "https://secure.";
	var httpsOrigin = "https://";
	
	if(window.location.hostname.indexOf("local")>-1){
		console.warn("Detected localhost, running all services as http");
		https=http;
	}

	

	//Current protocol
	env.protocol = ((window.location.protocol==="http:")?http:https);

	//do not use secure2/secure for origin urls
	env.protocolOrigin = ((window.location.protocol==="http:")?http:httpsOrigin);

	env.host = _normalizeHostForTandWWW(env.host);
	
	env.protocolAndSubdomain = (browserDetector.isIE9()) ? "" : https + env.host;
	
	//dynamic host name used for product API calls 
	env.hostProdAPI=_getHostProdAPI(env.host);

	env.localStoreId = 			"0123";
	env.blinds = 				't.blinds.homedepot.com';
	env.ofaq = 					http + env.host + "/c/FAQ";
	
	env.url = {};
	env.url.cart = 	 		  	env.protocolAndSubdomain + "/TouchWebServices/v2/Cart";	
	env.url.cartRemove = 	  	env.protocolAndSubdomain + "/TouchWebServices/v2/Cart/delete";
	env.url.cartUpdate = 	  	env.protocolAndSubdomain + "/TouchWebServices/v2/Cart/update";
	env.url.applyPromotion =  	env.protocolAndSubdomain + "/TouchWebServices/v2/Cart/promotion/add";
	env.url.removePromotion = 	env.protocolAndSubdomain + "/TouchWebServices/v2/Cart/promotion/delete";
	env.url.partsandservices = 	env.protocolAndSubdomain + "/TouchWebServices/item/v2/partsandservices"; //  /itemId?zipCode=30062
	env.url.viewCustomBlinds = 	env.protocolAndSubdomain + "/TouchWebServices/cart/blindscustom";
	env.url.orangeLog = 		env.protocolAndSubdomain + "/TouchWebServices/v2/util/logger";
	env.url.validateSession = 	env.protocolAndSubdomain + "/TouchWebServices/v2/user/validateSession";
	
	// the feature switch request relative to align with the host protocol
	env.url.features = 			"/TouchWebServices/v2/util/feature";

	env.url.login = 			https + env.host + "/TouchWebServices/v2/user/login";

	env.url.paypal = 			https + env.host + "/MCCCheckout/Checkout/PaypalInit.do?fromPage=shoppingCart";
	env.url.atcPaypal = 		https + env.host + "/MCCCheckout/Checkout/PaypalInit.do?fromPage=addToCart";

	//MCC MAML URLs
	env.url.logout = 			https + env.host + "/MCCAccount/User/Logout";
	env.url.register = 			https + env.host + "/MCCAccount/User/Register";
	env.url.orderHistory = 		https + env.host + "/MCCAccount/Order/orderhistory?action=receipt";
	env.url.account = 			https + env.host + "/MCCAccount/User/AccountInfo";
	env.url.myLists = 			https + env.host + "/MCCAccount/MyList/ListAll";
	env.url.findList = 			https + env.host + "/MCCAccount/MyList/ListAll";
	env.url.creditCenter = 		https + env.host + "/MCCAccount/Auth/CreditCenter";

	// ViewCart.do and Checkout.do urls
	env.url.viewCart = 			http  + env.host + "/MCCCheckout/Cart/ViewCart.do";
	env.url.checkout = 		  	https + env.host + "/MCCCheckout/Checkout.do";
	
	//use http
	env.url.delivery = "/wcs/resources/api/v1/tools/deliveryAvailability";
	env.url.originURL = env.protocolOrigin + "origin.api" + env.hostProdAPI;
	env.url.productURL = "/ProductAPI/v2/products/sku?itemId=";
	env.url.productInfoParams = "&type=JSON&show=info,media,shipping,promotions,pricing&key=XZG1XWUGO90KKnt6Jb9Mc8Jce5Nb8Adj";

	env.url.atcURLParams = [
	    "/webapp/wcs/stores/servlet/OrderItemAdd?storeId=10051&langId=-1&catalogId=10053&catEntryId=",
	    "&quantity=1&contractId=2081191&addToCartConfirmation=true&nickName=APPLIANCE+DELIVERY+-+",
	    "&zipCode="
	];

	if (env.host.indexOf('hd-st') > -1) {
	    env.blinds = IS_TABLET ? "t.dev-blinds." + env.host : "dev-blinds." + env.host;
	} else if (env.host.indexOf('hd-qa') > -1) {
	    env.blinds = IS_TABLET ? "t.qa-blinds." + env.host : "qa-blinds." + env.host;
	} else if (env.host.indexOf('hd-qp') > -1) {
	    env.blinds = IS_TABLET ? "t.stage-blinds." + env.host : "stage-blinds." + env.host;
	} else if (env.host.indexOf('homedepot.com') > -1) {
	    env.blinds = IS_TABLET ? "t.blinds.homedepot.com" : "blinds.homedepot.com";
	}


	function _normalizeHostForTandWWW(url) {
	    //remove "t." if present
	    if (url.indexOf("t.") === 0) {
	        url = url.substr(2);
	    } else if (url.indexOf("www.") === 0) {
	        url = url.substr(4);
	    }
	    return url;
	}
	//expose for use in automated tests
	env._normalizeHostForTandWWW = _normalizeHostForTandWWW;

	//get host name productAPICall
	function _getHostProdAPI(url) {
	    var isPrBeta = false;
	    if (
	        (typeof cookieUtils.readCookie === "function") &&
	        (typeof cookieUtils.cookieManager !== "undefined") &&
	        (cookieUtils.cookieManager !== null)
	    ) {
	        isPrBeta = (cookieUtils.readCookie('HD_DC') === 'beta');
	    } else {
	        console.warn("!!! Trying to read cookie 'HD_DC', but cookieManager not initialized. Investigate this!");
	        //TODO: env.js is getting loaded with mccTablet/FullsiteCore files, this is happening before cookiemgr is
	        //		initialized. Look at when this is actually needed and update accordingly (always access by function?)
	    }

	    if (url.indexOf("www") === 0 || url.indexOf("secure2") === 0 || url.indexOf("homedepot.") === 0) {
	        if (isPrBeta) {
	            url = '-beta.homedepot.com';
	        } else {
	            url = ".homedepot.com";
	        }
	    } else if (url.indexOf("secure") === 0 || url.indexOf("hd") === 0) {
	        url = url.replace("secure.", "").replace("hd", "");
	    }
	    return url;
	}

	//allow override for testing
	env._getHostProdAPI = _getHostProdAPI;

	/**
	 * Load feature switch values.
	 */
	featureSwitchPromise = new $.Deferred();

	function _loadFeatureSwitchValues() {
	    //Create global map of feature switch values
	    window.featureSwitchMap = {
	        MCCMerchATCCertonaServicesFeature: false,
	        MCCApplATCCertonaAPIServiceFeature: false,
	        MCCCartCertonaServicesFeature: false,
	        MCCOrdConfirmCertonaFeature: false,
	        MCCTabletFeatureSwitch: false,
	        MCCFullSiteFeatureSwitch: false,
	        VoltageWebFeature: false,
	        VoltageTabletFeature: false,
	        TestCreditCardNumber: false,
	        TaxExemptKill: false,
	        CybersourceFingerprintIdFeature: false,
	        EnableStoreCredit: false,
	        StoreCreditProgramCode: false,
	        IntlBillingFeatureSwitch: false,
	        AddressTypeAhead_PERM: false,
			ReCaptchaFeatureSwitch_TEMP:false,
			PromotionOnRightRailFeature_TEMP:false,
			OPCFeature_TEMP: false,
			MCMListDesktopFeature:false
	    };

	    try {
	        //call feature switch registry service
	        // http://hd-st71.homedepotdev.com/TouchWebServices/v2/util/feature?featureId=TabletWebThrottle
	        //build url
	        var featureParams = "?";
	        for (var key in featureSwitchMap) {
	            featureParams = featureParams + "featureId=" + key + "&";
	        }
	        var url = env.url.features + featureParams;

	        $.ajax({
	            url: url,
	            timeout: 8000,
	            xhrFields: {
	                withCredentials: true
	            },
	            headers: {
	                "Accept": "application/json"
	            }
	        }).done(function(resp) {
	            //get flag value from response
	            // //{"FeatureResponse":{"featureSwitch":[{"featureName":"MCCTabletFeatureSwitch","intValue":-1}]}}
	            var featureList = resp.FeatureResponse.featureSwitch;
	            $.each(featureList, function(index, feature) {
	                featureSwitchMap[feature.featureName] = (feature.intValue > 0);
	                //set globals
	                window[feature.featureName] = (feature.intValue > 0);
	                if (feature.stringValue) {
	                    featureSwitchMap[feature.featureName] = feature.stringValue;
	                }

	            });
	            featureSwitchPromise.resolve(featureSwitchMap);
	        }).fail(function(e) {
	            console.error("Unable to get feature switch values", e);
	            for (var key in featureSwitchMap) {
	                window[key] = false;
	            }
	            featureSwitchPromise.reject([e]);
	        });
	    } catch (e) {
	        console.error("Error determining loading feature switch values", e);
	    }
	}

	env.getFeatureSwitch = function(key, callback, onError) {
	    featureSwitchPromise.done(function(featureSwitchMap) {
	        callback(key ? featureSwitchMap[key] : featureSwitchMap);
	    });
	    if (typeof onError === "function") {
	        featureSwitchPromise.fail(onError);
	    }
	};

	if (typeof window.featureSwitchMap === "undefined") {
	    _loadFeatureSwitchValues();
	} else {
	    featureSwitchPromise.resolve(window.featureSwitchMap);
	}


	/**
	 * Return map of parameters, or empty object
	 */
	env.getParams = function(url) {
	    var paramMap = {};
	    url = url || document.location.search; //use provide url, or get from current location
	    if (url.indexOf("?") > -1) {
	        var query = url.substr(url.indexOf("?") + 1); //Get query - everything after "?"
	        query.split("&").forEach(function(n) {
	            n = n.split("=");
	            paramMap[n[0]] = n[1];
	        });
	    }
	    return paramMap;
	};

	//Allows channel (tablet|desktop) to be past in as URL param
	//dev-only
	env.channel = env.getParams().channel;
	//default to tablet if no channel provided
	env.tablet = ((env.channel === "tablet") || (!env.channel));
	env.desktop = (env.channel === "desktop");


	return env;	
});


define('cart/hdpp',
    [ 'jquery',
      'cart/env'
    ],
function(
    $, 
    env) {

    return {
      isEligible : function(warrantyLineItems) {
        return typeof warrantyLineItems != 'undefined' 
                  && warrantyLineItems.lineItem 
                  && warrantyLineItems.lineItem[0].lineItemType == "Merchandize" 
                  && warrantyLineItems.lineItem[0].quantity === "0";
      },
      hasWarrantyAssociation : function(warrantyLineItems) {
        return typeof warrantyLineItems != 'undefined' 
                  && warrantyLineItems.lineItem 
                  && warrantyLineItems.lineItem[0].lineItemType === "Merchandize" 
                  && warrantyLineItems.lineItem[0].quantity > "0";
      }
    };
});
/*--------------------- */
define('shared/cartMessageModel', ["jquery"],
    function($) {
                var idRelatedMsg = {};
        return {                
            setMessageModal : function(cartModel) {
                if(!cartModel.messagesModel){
                    return;
               }
                var messages = cartModel.messagesModel;                
                $.each(messages, function(i, msgs) {
                    if (msgs.correlationType === "lineItem") {
                        idRelatedMsg[msgs.correlationId] = msgs.shortDescription;
                    }
                });

                if(cartModel.itemModels){
                	$.each(cartModel.itemModels, function(i, item) {
                        if (item.lineItemId in idRelatedMsg) {
                            item.itemMsg = idRelatedMsg[item.lineItemId];
                        }
                    });
                }
                
            },
            clearIRMessages : function(){
               idRelatedMsg = {};
            }
        }
    });
/**
 * Shared view of the CartModel.
 * - Allows central location for any modifications that need to be made to original model.
 * - Convenience functions
 */

define('cart/CartModel',
	[	"jquery",
		"cart/env",
		"cart/hdpp",
		"shared/cartMessageModel"
	], 
function(
	$, 
	env,
	hdpp,
	cartMessageModel
	){

	var cartModel = {};
	var CART_MODEL;
	
	/**
	 * Set cart model
	 */
	cartModel.setModel = function(rawCartModel){
		cartModel.ofaqs = env.ofaq;
		CART_MODEL = rawCartModel.CartModel || rawCartModel; //dereference CartModel

		//perform any mods to cart here
		//map promotions to items for templating purposes
		if(CART_MODEL.promotionsModel){
			_setPromotionsToItem();
		}
		if(CART_MODEL.messagesModel){
			cartMessageModel.setMessageModal(CART_MODEL)
		}
		
		
		//Perform model adjustments as needed
	    var autoOrderComp = CART_MODEL.automatedOrderCompletion;
	    CART_MODEL.applianceDeliverySection = (!autoOrderComp || (autoOrderComp && autoOrderComp === "N" && !CART_MODEL.applianceDeliveryCharge)) ? false : true;

		if(CART_MODEL.itemModels){
			$.each(CART_MODEL.itemModels, function(i,item){
				//setting Blinds HOST name 
				item.blindsHOST = env.blinds;
				item.host = env.host;

				//preserve/restore product details (these do not always come back with response)
				_handleMissingProductInfo(item);

				try{				
					//setting deliveryZip code from cookie, if not seen in the cartModel.
					if(item.lineItemType==="Buy Online Deliver From Store"){
						$.each(item.fulfillmentModel,function(i,option){
							//THD_SESSION - C41 Crumb Cookie is the latest one
							var zipCodeFromCookie = thdOnlineCommon.cookie.channel.getCookieCrumb(thdOnlineCommon.cookie.channel.getCookie("THD_SESSION"),"C41");
							if(option.fulfillmentMethod === "DeliverFromStore" && option.selected){
								// Adding this || condition as per the comments from defect#52353. Session cookie's Zipcode seems to be the latest. API change is needed to get the same corrected in cartmodel.
								if( (!option.deliveryZipCode) || (zipCodeFromCookie && (zipCodeFromCookie !== option.deliveryZipCode)) ){									
									option.deliveryZipCode=zipCodeFromCookie;
								}
									
							}
						});
					}
					if(item.lineItemType==="Appliance" && item.warrantyLineItems && item.warrantyLineItems.message){
						var shortMsg = item.warrantyLineItems.message.shortDescription;
						if(typeof shortMsg !== "undefined"){
							shortMsg = shortMsg.replace("included in the price","");
							item.warrantyLineItems.message.shortDescription = shortMsg;
						}
					}
				
				if (item.configurationModel) {
					_setConfigAttributeModel(item);
				}


					//add correlated error message for BOPIS items
					if(CART_MODEL.errorModel && (CART_MODEL.errorModel[0].errorCode==="CART_ERR_301") ){
						//we have an inventory issue
						var errorCode = CART_MODEL.errorModel[0].errorCode;
						$.each(item.fulfillmentModel, function(index, fm){
							if(fm.fulfillmentMethod==="BOPIS" && 
								fm.inventoryStatus==="NAVL" &&
								 fm.selected){

								//check that error is not already added
								var noItemError=true;
								$.each(CART_MODEL.errorModel, function(index2, error){
									if(error.correlationId===item.lineItemId){
										noItemError=false;
									}
								});
								if(noItemError){
									CART_MODEL.errorModel.push({
									errorCode: errorCode,
									description: "Please reduce the quantity of this item.",
									correlationId: item.lineItemId
								});	
								}

							}
						});
					}
				}catch(e){
					console.error("Unable to apply line item errors for unavailable items", e);
				}
				
				if (item.configurationModel) {
					_setConfigAttributeModel(item);
				}
				
				// hdpp eligible check
				item = cartModel.hdppEligibleCheck(item);
			});
		}

		_setFulfillmentLocation(CART_MODEL);


		return CART_MODEL;
	};

	cartModel.getModel = function(){
		return CART_MODEL;
	};
	
	cartModel.getOrderSummary = function(){
		var _cartModel = $.extend({}, CART_MODEL);
		delete _cartModel.itemModels;
		delete _cartModel.promotionModels;
		delete _cartModel.messagesModels;
		if(CART_MODEL.promotionsModel){
			_cartModel.promotionsModel = cartModel.getOrderLevelPromotions();
		}
		if(CART_MODEL.merchandiseItemsGrandTotal || CART_MODEL.applianceItemsSubTotal){
			_cartModel.subTotal = (CART_MODEL.merchandiseItemsGrandTotal?Number(CART_MODEL.merchandiseItemsGrandTotal):0.00) +
								  (CART_MODEL.applianceItemsGrandTotal?Number(CART_MODEL.applianceItemsGrandTotal):0.00);
			_cartModel.subTotal = _cartModel.subTotal.toFixed(2);
		}
		return _cartModel;
	};
	
	//filter ORDER_LEVEL promotions
	cartModel.getOrderLevelPromotions = function(){
		var orderLevelPromos = [];
		if(CART_MODEL.promotionsModel){
			$.each(CART_MODEL.promotionsModel, function(i,promo){
				if(promo.promotionType === "Order Level" || (promo.promoCode && promo.attached) ){
					promo.isFreeShipPromo = (promo.promotionSubType === "Shipping" )? true:false;
					orderLevelPromos.push(promo);
				}
			});
		}		
		return orderLevelPromos;
	};
	
	//Check if Order has FREE SHIPPING PROMO - This function is not been used anywhere.
	cartModel.ifOrderhasFreeShipPromo = function(promotionsModel){
		var hasFreeShipPromo = false;		
		$.each(promotionsModel, function(i,promo){
			if(promo.promotionSubType === "Shipping" ) {
				hasFreeShipPromo = true;
				return false;
			}
		});
	
		return hasFreeShipPromo;
	};
	
	var PRODUCT_INFO_INDEX = {};
	function _handleMissingProductInfo(item){
		//create item index for item if necessary
		if(!PRODUCT_INFO_INDEX[item.lineItemId]){
			PRODUCT_INFO_INDEX[item.lineItemId]={};
		}

        var prodInfoFields = [
        	"image",
        	"modelNumber",
        	"partNumber",
        	"brandName",
        	"productLabel",
        	"canonicalUrl",
        	"shipType",
        	"quantityLimit"
        ];

		//load values from model to index
		$.each(prodInfoFields, function(index, field){
			var savedValue = PRODUCT_INFO_INDEX[item.lineItemId][field];
			var newValue = item[field];
			if(savedValue && !newValue){
				item[field]=savedValue;
			}else{
				PRODUCT_INFO_INDEX[item.lineItemId][field]=newValue;
			}	
		});
	}

	function _setPromotionsToItem(){
		var itemModels = CART_MODEL.itemModels;
		var promotionsModel = CART_MODEL.promotionsModel;
		var ItemPromoRelation = {};
		$.each(promotionsModel,function(i,promo){			
			if(promo.lineItemPromotion){
				var promotion = {
						"promoCode":promo.promoCode?promo.promoCode:promo.description,
						"promotionType": promo.promotionType,
						"description": promo.description,
						"longDescription": promo.longDescription
				};
				$.each(promo.lineItemPromotion,function(i,lineItem){
					if(!(lineItem.appliedOn in ItemPromoRelation)){
						ItemPromoRelation[lineItem.appliedOn] = {lineItem: lineItem.appliedOn, promos: []};		                    
	                }
					ItemPromoRelation[lineItem.appliedOn].promos.push(promotion);
				});
			}
		});
		
		$.each(itemModels,function(i,item){			
			$.each(ItemPromoRelation, function(i,itemRel){
				if(itemRel.lineItem === item.lineItemId ){
					item.promotions = [];
					item.promotions = itemRel.promos;
				}
			});
		});
	}

	

	/**
	 * _setConfigAttributeModel
	 */
	function _setConfigAttributeModel(item) {
		console.debug("_setConfigAttributeModel()");
		var configModel = item.configurationModel,
			defaults = [{'name': 'Window Name', 'value': '----'}, {'name': 'Width', 'value': '----'}, {'name': 'Height', 'value': '----'}, {'name': 'Color', 'value': '----'}],
			attribModel,
			assignedDefault = false,
			modelDetailsName = "";
		if (configModel && !configModel.attributeModel) {
			configModel['attributeModel'] = defaults;
			configModel['defaults'] = true;
		}
		attribModel = configModel.attributeModel;
		if (!configModel['defaults']) {
			$.each(attribModel, function(index, modelDetails) {
				if(modelDetails.name !== defaults[index].name) {
					attribModel.splice(index, 0, defaults[index]);
				}
			});
		}
		$.each(attribModel, function(index, modelDetails) {
			modelDetailsName = modelDetails.name;
			if (modelDetailsName && (modelDetailsName.toLowerCase() === "height" || modelDetailsName.toLowerCase() === "width")) {
				attribModel[index].value = modelDetails.value.replace(' 0/0', 'in');
			}
		});
	}
	
	/**
	 * Set the fulfillment location based on the fulfillment model and available fields
	 * BOSS/BOPIS 		-> pickUpStore
	 * Appliance/BODFS 	-> deliveryZip
	 * ShipToHome 		-> "DirectShip"
	 */
  	function _setFulfillmentLocation(cartModel){
  		try{
  			if(cartModel.itemModels && cartModel.itemModels.length>0){
  				var fulfillmentLocation = function(ffm) {
  					if(ffm.pickUpStore){
						ffm.fulfillmentLocation=ffm.pickUpStore;
					}else if(ffm.pickUpStoreAddress){
						ffm.fulfillmentLocation=ffm.pickUpStoreAddress.split("#")[1];
					}else if(ffm.deliveryZipCode || ffm.fulfillmentMethod == "DeliverFromStore"){
						ffm.fulfillmentLocation=ffm.deliveryZipCode ? ffm.deliveryZipCode : "00000";
					}else if(ffm.fulfillmentMethod === "ShipToHome"){
						ffm.fulfillmentLocation="DirectShip";
					}
  				};
  		  		$.each(cartModel.itemModels, function(index, item){
	  				item.optionHidden = (item.fulfillmentModel && item.fulfillmentModel.length === 1) ? true : false;
  		  			$.each(item.fulfillmentModel, function(index, ffm){
  		  				fulfillmentLocation(ffm);
  		  				if(hdpp.hasWarrantyAssociation(item.warrantyLineItems)) {
  		  					if(item.warrantyLineItems.lineItem[0].fulfillmentModel) {
  		  						fulfillmentLocation(item.warrantyLineItems.lineItem[0].fulfillmentModel[0]);
  		  					}
  		  				}
  		  			});
  		  		});
  	  		}
  		}catch(e){
  			console.error("_setFulfillmentLocation:" + e);
  		}
  	}

  	cartModel.addError = function(error){
  		//TODO: Need to figure out how to add new errors, remove no-longer valid errors,
  		//		and keep valid errors when the responses to update operations only contain
  		//		the new error

  		if(!CART_MODEL.errorModel){
  			CART_MODEL.errorModel=[];
  		}
  		CART_MODEL.errorModel.push(error);
  	};

	cartModel.getItem = function(lineItemId){
		var itemMatch,
			_cartModel = $.extend({}, CART_MODEL);
		$.each(_cartModel.itemModels, function(index, item){
			if(lineItemId===item.lineItemId){
				itemMatch=item;
			}
			if(item.warrantyLineItems && item.warrantyLineItems.lineItem) {
				$.each(item.warrantyLineItems.lineItem, function (i, warrantyLineItem) {
					if(lineItemId === warrantyLineItem.lineItemId) {
						itemMatch=warrantyLineItem;
					}
				});
			}
		});
		return itemMatch;
	};
	
	cartModel.setQuantityForItem = function(lineItemId, quantity){
		$.each(CART_MODEL.itemModels, function(index, item){
			if(lineItemId===item.lineItemId){
				item.quantity=quantity;
			}
		});
	};

	cartModel.getApplianceItemsNeedingConfiguration = function(){
		var unconfiguredItems = [];
		$.each(CART_MODEL.itemModels, function(index, item){
			if(item.lineItemType==="Appliance" && !item.configured && !item.configurePrompted && item.shipType!="30" ){
				unconfiguredItems.push(item);
			}
		});
		return unconfiguredItems;
	};

	cartModel.getBODFSitems = function(){
		var BODFSitems = [];
		$.each(CART_MODEL.itemModels, function(index, item){
			if(item.lineItemType==="Buy Online Deliver From Store"){
				BODFSitems.push(item);
			}
		});
		return BODFSitems;
	};

	function _getCurrentFullfillmentSelection(lineItemId){
		var item = cartModel.getItem(lineItemId);
		var currentSelection;
		if(item && item.fulfillmentModel){
			$.each(item.fulfillmentModel, function(index, fm){
				if(fm.selected && fm.selected!=="false"){
					currentSelection=fm;
				}
			});
		}		
		return currentSelection;
	}
	cartModel.getCurrentFullfillmentSelection=_getCurrentFullfillmentSelection;

	/**
	 * Returns current cart lineItemIds as comma delimited string
	 * "1234, 4232, 2322, 2323"
	 */
	cartModel.getLineItemIdsCommaDelimited = function(){
		var list = "";
		try{
			var items = CART_MODEL.itemModels;
			$.each(CART_MODEL.itemModels, function(index, item){
				list+=item.lineItemId;
				if(index<(items.length-1)){
					list+=",";
				}
			});
		}catch(e){
			console.error("Error getting line item id list string", e);
		}
		return list;
	};

	/**
	 * Returns current cart fulfillmentMethods as comma delimited string
	 * "ShipToHome, ShipToHome, ShipToStore, DirectDelivery"
	 */
	cartModel.getLineItemFulfillmentMethodsCommaDelimited = function(){
		var list = "";
		try{
			var items = CART_MODEL.itemModels;
			$.each(CART_MODEL.itemModels, function(index, item){
				var ffm = _getCurrentFullfillmentSelection(item.lineItemId).fulfillmentMethod;
				list+=ffm;
				if(index<(items.length-1)){
					list+=",";
				}
			});
		}catch(e){
			console.error("Error getting item fulfillmentMethod list string", e);
		}
		return list;
	};

	/**
	 * Returns current cart fulfillmentLocations as comma delimited string
	 * "ShipToHome, ShipToHome, ShipToStore, DirectDelivery"
	 */
	cartModel.getLineItemFulfillmentLocationsCommaDelimited = function(){
		var list = "";
		try{
			var items = CART_MODEL.itemModels;
			$.each(CART_MODEL.itemModels, function(index, item){
				var ffl = _getCurrentFullfillmentSelection(item.lineItemId).fulfillmentLocation;
				list+=ffl;
				if(index<(items.length-1)){
					list+=",";
				}
			});
		}catch(e){
			console.error("Error getting item fulfillmentLocation list string", e);
		}
		return list;
	};

	cartModel.hdppEligibleCheck = function(item) {
		try {
			if(item && item.warrantyLineItems)	{
				item.hdppEligible			=	(hdpp.isEligible(item.warrantyLineItems) || hdpp.hasWarrantyAssociation(item.warrantyLineItems));
				item.showConfirmation	=	hdpp.hasWarrantyAssociation(item.warrantyLineItems);
				item.showHDPPErrCntr  = false;
			}
		} catch(e) {
			console.error("Error getting item hdppEligibleCheck - ", e);
		}
        return item;
	};
	cartModel.checkoutParams = function(model,checkoutType){
		return params = {
				// fulfillmentLocation: "DirectShip", //doesn't appear to change with item type
				cartId: model.orderId,
				orderId: model.orderId,
				paymentType: checkoutType,
				//populate with a list of comma-delimited lineItemId's
				//"id1, id2, id3"
				lineItemId: cartModel.getLineItemIdsCommaDelimited(),
				//"STH, BODFS, id3"
				fulfillmentMethod: cartModel.getLineItemFulfillmentMethodsCommaDelimited(),
				//need this for the rules to show promo in right rail in checkout pages
				cartVisited: model.isATC?"false":"true", //(typeof model.coProceed !== "undefined" && model.coProceed)?"false":"true",
				//The rest appear to be un-used but are left in to avoid breakage
				quantity: "",
				quantityChanged: "",
				price: "",
				itemId: "",
				fulfillmentLocation: cartModel.getLineItemFulfillmentLocationsCommaDelimited(),
				assembleItemAtStore: "",
				LOCAL_STORE_ID: "",
				zipCodeCheckBODFS: "",
				cartItemType: "Merchandize",
				doSmartStoresUpdate: "yes",
				doPickUpOptionsUpdate: "yes",
				currentPage: "shoppingCart",
				itemCount: cartModel.getModel().totalItemCount
				}
	};
	
	return cartModel;
});


/**
 * Provides a loading indicator and semi-transparent coverup for a specific element/area
 * - allows a specific area of the app to indicate loading
 * - allows configuration of indicator and style
 * - does not have external style dependencies
 */
define('shared/utils/LoadingCoverUp',['jquery'], function($){

	/**
	 * Inject style for loading indicator
	 */
	var loadingStyle = 
		".containerLoading.loader-image span{" + 
			"position: relative;"+
		  	"top: 50%;"+
		  	"transform: translateY(-50%);"+
		"}" + 
		".containerLoading.loader-image span {" + 
			"background: white;" + 
			"width: 15px;" + 
			"height: 15px;" + 
			"margin: 0 5px;" + 
			"border: 2px solid #f96302;" + 
			"display: inline-block;" + 
			"-webkit-animation: loader-image 1s linear infinite;" + 
			"animation: loader-image 1s linear infinite;" + 
		"}" + 
		".containerLoading.loader-image span:nth-child(1) {" + 
			"-webkit-animation-delay: 0.3s;" + 
			"animation-delay: 0.3s;" + 
		"}" + 
		".containerLoading.loader-image span:nth-child(2) {" + 
			"-webkit-animation-delay: 0.5s;" + 
			"animation-delay: 0.5s;" + 
		"}" + 
		".containerLoading.loader-image span:nth-child(3) {" + 
			"-webkit-animation-delay: 0.9s;" + 
			"animation-delay: 0.9s;" + 
		"}" + 
		"@-webkit-keyframes loader-image{" + 
			"0% {}" + 
			"50% { background: #f96302; }" + 
			"100% {}" + 
		"}" + 
		
		"@keyframes loader-image {" + 
			"0% {}" + 
			"50% { background: #f96302; }" + 
			"100% {}" + 
		"}" + 

		".containerLoading {" + 
		    "position: fixed;" + 
		    "text-align: center;" +
		    "top: 0;" + 
		    "left: 0;" + 
		    "bottom: 0;" + 
		    "right: 0;" + 
		    "color: #000000;" + 
		    "opacity: .5;" +
		    "background: #ffffff center center no-repeat;" + 
		    "z-index: 10003;" + 
		"}";

$("<style>" + loadingStyle + "</style>" ).appendTo("head");

return {

	/**
	 * Apply loading indicator and cover-up to element.
	 * @param element (optional) - Element over which to loader and cover-up are applied. If not provide, entire window is
	 *								covered up.
	 * @param setWidth - boolean - Sometimes need to set width and left position of cover-up, still need
	 *								to determine how to do this generically across all elements
	 */
	start: function(element, setWidth){
		var loadingImage = "<div class='loader-image'><span></span><span></span><span></span></div>";
		var loadingContainer = $("<div class='containerLoading loader-image'><span></span><span></span><span></span></div>");	
		$(loadingContainer).css("height", ($(document).height())+"px");
		$(loadingContainer).find("span").css("top", ($(window).height())/2);
		$("body").append(loadingContainer);
		return {stop: function(){loadingContainer.remove();}};
	},

	/**
	 * Remove loading indicator
	 */
	stop: function(element){
		if(element){
			$(element).find(".containerLoading").remove();
		}else{
			$(".containerLoading").remove();	
		}		
	}
	

};//end return

})//end of Loading Cover Up;
/**
 * MCC Add-To-Cart(ATC) Overlay Modal Controller
 * - manages modal interactions for MCC ATC
 *
 */
define('shared/atc/thd.mcc.atcOverlayModal', [ 	
		'jquery',
	  	'cart/env',
	  	'shared/utils/LoadingCoverUp',
		'cart/CartModel'
	],
	function(
		$, 
		env,
		loading,
		cartModel
	){
	
	var MCC_ATC_MODAL;    
	function _getMccAtcModal(){
		if(!MCC_ATC_MODAL){

		    var settings = 
		    	 {
		        	trigger: 'click',
			        htmlContent: '',
			        url: '',
			        title: 'Added to Cart',
			        size: 'md-modal-wide',
			        callback: '',
			        template: ''
		    	 };

			    //create wrapper if no modal exists
			    overlayHtmlWrapper = [
			            '<div class="md-modal-atc md-modal md-effect-1 ' + settings.size + '">',
			                '<div class="md-content"><h3><span class="md-title"><i class="icon-checkmark-success text-success xlarge m-right-xsmall hide"></i>'+ settings.title +
			                	'</span><button class="md-close"></button></h3>',
			                '<div class="ajax-loader flex-vcenter hide"><span></span><span></span><span></span><span></span></div>',
			                '<div class="ajax-loader-error flex-vcenter hide"><h2>There was a problem adding your item. Please try again.</h2></div>',
			                '<div class="md-body"></div></div>',
			            '</div>'
			     ].join('');
			    
				$('body').append($(overlayHtmlWrapper));
				$('.md-effect-7, #modal-overlay, .md-background').remove();
				$("<div/>",{"id":"modal-overlay","class":"md-overlay"}).appendTo($("body"));

			    MCC_ATC_MODAL = $(".md-modal-atc");
				_bindCloseButton(MCC_ATC_MODAL);
			}
		return MCC_ATC_MODAL;
	}
	
    function _getMessageFromErrorModel(errorModel){
        var msg = null;
        //only handle first error
        var error = errorModel[0];
        if( error.errorCode==="ORD_ERR_2008" || 
            error.errorCode==="CART_ERR_139" ||
            error.errorCode==="CART_ERR_152" ||
            error.errorCode==="CART_ERR_136"){
                msg=error.description;
        }else if(error.errorCode==="CART_ERR_108"){
            msg="There was a problem with the chosen fulfillment. Please try again, or try another option.";
        }else if(error.errorCode==="CART_ERR_169"){
          msg="There are not enough items available to meet your order. Please reduce the number of items you are requesting or select another item.";
        }
        return msg;
    }
    
    function _bindCloseButton(modal) {
    	$(modal).find(".md-close, .md-cancel").on("click", function(e) {
        	console.debug("close atc overlay...");
            e.preventDefault();
            $(modal).removeClass("md-show");
            $(modal).find('.md-body').empty().removeClass('ajax-loaded-content');
            $('body').removeClass('new-modal body-frame');
            //destroy modal
            $(modal).remove();
            MCC_ATC_MODAL = null;
            
            $.event.trigger("ATC_MODAL_CLOSED");
    	});

       // TRIGGER THE CLOSE FUNCTION FROM ANOTHER BUTTON
        /*$(document).on('click', '#continueBtn', function() {
            $('.md-close').trigger('click');
        });*/
		
		// TRIGGER THE CLOSE FUNCTION FROM 'CONTINUE SHOPPING LINK'
        $(document).on('click', '#atc-continue-shopping', function() {
            $('.md-close').trigger('click');
        });
	}

	function launchModal(){
		var atcModal = _getMccAtcModal();
		loading.start();
		atcModal.find('.ajax-loader').removeClass('hide');
	    atcModal.find('.ajax-loader-error').addClass('hide');
	    return atcModal;
	}
	
	function customPositionModal() {
        var mdModal = $('.md-modal.md-show'),
        	closeSpacing = 30,
	 	 	atcModalHeight = 680,
	 	 	leftPosition = 0;
        
        var activeWindowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        activeWindowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
	 	modalHeight = (mdModal.hasClass("md-modal-atc") ? atcModalHeight : mdModal.height()) + closeSpacing,
	 	modalWidth = mdModal.width() + closeSpacing;
        
        // modal height/width smaller than viewport apply no inline styles
	 	if ((modalHeight < activeWindowHeight) && (modalWidth < activeWindowWidth)) {
	 		mdModal.attr("style", "");
	 	} else {
	 		$(window).scrollTop(0);
	 		// if modal height is GREATER THAN viewport size
	 		if ((modalHeight > activeWindowHeight) && (modalWidth < activeWindowWidth)) {
	 			mdModal.attr("style", "").css({'position': 'absolute', 'top': closeSpacing + "px", 'transform': "translateX(-50%) translateZ(0)"});
	 		// if modal width is GREATER THAN viewport size
	 		} else if ((modalWidth > activeWindowWidth) && (modalHeight < activeWindowHeight)) {
	 			mdModal.attr("style", "").css({'position': 'absolute', 'left': '2px', 'transform': "translateY(-50%) translateZ(0)"});
	 		// if modal height/width is LESS THAN viewport size
	 		} else if ((modalHeight > activeWindowHeight) && (modalWidth > activeWindowWidth)) {
	 			mdModal.attr("style", "").css({'position': 'absolute', 'top': closeSpacing + "px", 'left': '2px', 'transform': "none"});
	 		}
	 	}
	}
	
	$(window).resize(function (){
		if ($('.md-show').length > 0) {
			customPositionModal();
		}
	});

	function loadModalContent(html, title){
		var atcModal = _getMccAtcModal();			
        atcModal.find('.ajax-loader').addClass('hide');
        atcModal.find('.ajax-loader-error').addClass('hide');
		atcModal.find('.md-body').empty().append(html).addClass('ajax-loaded-content');
        if(title){
        	atcModal.find('.md-title').html('<i class="icon-checkmark-success text-success xlarge m-right-xsmall hide"></i>'+title);
			// this class only exist in GM overlay so it is an identifier for it. The 'Continue Shopping' link will only be added in GM overlay, not appliance ATC modal.
			if($('.cartModelProductModelMCC').length>0){
				atcModal.find('.md-title').parent().append('<a id="atc-continue-shopping" class="right add-plan">Continue Shopping</a>');
			}
		}
	    //wire up Edit Cart buttons	 
		var model = cartModel.getModel()
        if(model && typeof model.coProceed !== "undefined" && model.coProceed){
			$('#editCartBtn').on("click", function(evt){
				evt.preventDefault();
				// analytics - checkout button event
				$.event.trigger("ANALYTICS_BUTTON_EVENT", ['regularCheckout']);
				
				var params = cartModel.checkoutParams(model, "regularCheckout");
				params.referrer=atcModal;
				var $form = $("<form method='POST'>").attr("action", env.url.checkout);
				$.each(params, function(name, value) {
					$("<input type='hidden'>").attr("name", name).attr("value", value).appendTo($form)
				});
				$form.appendTo("body");
				$form.submit();
			});
		}
		else{
			$('#editCartBtn').attr("href", env.url.viewCart+"?referrer=atcModal").on("click", function() { 
				// analytics - checkout button event
				$.event.trigger("ANALYTICS_BUTTON_EVENT", ['regularCheckout']);	
            });
		}
		// analytics - paypal button event
        $("#atcCheckoutPP").on("click", function() { 
			$.event.trigger("ANALYTICS_BUTTON_EVENT", ['paypalCheckout']);	
        });
		(function() {
			if ($('.md-show').length === 0) {
				loading.stop();
				atcModal.addClass('md-show');
		    	$('body').addClass('new-modal body-frame');
		    	$('#tabletWindow').addClass('overlay-open');
			}
		})();
	    return atcModal;
	}

	function setModalTitle(title){
		if(title){
			$(".md-modal-atc").find('.md-title').text(title);
		}
	}

	/**
	 * Handle/display error
	 * @param errorModel (optional)
	 */
	function showModalError(errorDisplayMessage){
		var atcModal = _getMccAtcModal();
		loading.stop();
		
		if ($('.md-show').length === 0) {
		    atcModal.find('.ajax-loader').addClass('hide');
		    atcModal.find('.ajax-loader-error').removeClass('hide');
		    atcModal.find('.md-title').html('<i class="icon-error text-danger xlarge m-right-xsmall"></i>Error');
			atcModal.find('.md-body').empty();
			atcModal.addClass('md-show');
		    if(errorDisplayMessage){
		    	atcModal.find('.ajax-loader-error h2').text(errorDisplayMessage);
		    }
		} 
		// handle Certona errors
		else if (('.md-show #ma_atcmodal_rr').length > 0) {
			if(errorDisplayMessage){
				$("#mccCertonaApplError").removeClass("hide");
				$("#mccCertonaApplError span").text(_getMessageFromErrorModel(errorDisplayMessage));
		    }
		}
		// analytics - primary error capture
		$.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [errorDisplayMessage]);
	    return atcModal;
	}

	
	/**
	 * custom function to trigger the DOM update for handling the MAP. 
	 * As we don't have enough info in JSON, we are taking the base page values from PIP to populate the MAP 
	 */
	function updateMAPPricingATCModal() {
		var $addToCartActive = $('.plp-grid.addToCartActive'),
			$pricingContainer,
			$valuePrice = $('<p />').addClass('value-price').html('See Final price In Cart'),
			$vpInfo = $('<div />').addClass('map-price m-bottom-small custom-map-price').html($valuePrice),
			$specialBuy,
			appendContainer;
		if ($addToCartActive.length > 0) {
			$pricingContainer = $addToCartActive.find('.item_pricing_wrapper');
			appendContainer = $pricingContainer.find('.promo-price-container .normal:contains("Special Buy")');
			$specialBuy = $('<div />').addClass('custom-special-buy');
			$specialBuy.html(appendContainer.clone().removeClass('normal'))
				.append(appendContainer.next().clone().removeClass('normal'));
		} else {
			$pricingContainer = $('.product_containerprice .pricingReg');
			$specialBuy = $pricingContainer.find('.pricingStrikeThru:contains("Special Buy")');
		}
		if ($specialBuy.length > 0) {
			$('.was-unit-price').after($specialBuy.clone());
		}
		if ($pricingContainer.find('#mapMessage, .map_message').length > 0 && $('.map-price .value-price').length === 0) {
			$('.atc-price-info-section').append($vpInfo);
			$('.was-unit-price .text-success, .current-special-price').remove();
		}
	}
	
	// determines whether there is a scroll bar or not
	var hasVerticalScrollBar = function() {
		if (window.innerWidth > document.documentElement.clientWidth) {
			return true;
		}
		return false;
	}

	// To hide/show HDPP section based on eligibility  
	Handlebars.registerHelper('isItemEligibleForHDPP', function (resp, options) {
		var warrntyLineItems=resp.warrantyLineItems;
		if(warrntyLineItems!=undefined && warrntyLineItems.lineItem[0]!=undefined){
			var  warrntyLineItem= warrntyLineItems.lineItem[0];
			//If no warranty added or less warranty added compared to the added item quantity
			//then show the HDPP section in the ATC overlay otherwise hide 
			if(warrntyLineItem.quantity==="0" || (warrntyLineItem.quantity<resp.quantity)){
				return options.fn(this);
			}else{
				return options.inverse(this);
			}
		}
		else{
			return options.inverse(this);
		}
	});

	//Custom if condition to compare strings and return equals or not
	//TODO: Rename to ifEqual
	Handlebars.registerHelper('ifCond', function(value1, value2, options) {
		if(value1 == value2) {
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});
	//Check to see if the element is empty . ifIsEmpty checks array object. This would check on the propery itself.
	Handlebars.registerHelper('IfEmptyElement', function(elem1, options) {
		if (elem1 && elem1 !== "")  {
			return options.inverse(this);
		} else {
			return options.fn(this);
		}
	});
	
	Handlebars.registerHelper( "removeNegativeDiscount", function ( amount ){
	    return (amount)?Number(amount.replace(/^(-)+/g,'')).toFixed(2):0.00;
	});
	
	Handlebars.registerHelper('replaceNumberWithCommasFixed', function (amount, options) {
		if(amount){
			var commaAmount= Number(amount).toFixed(2).toString().split(".");
		    //Comma-fies the first part
			commaAmount[0] = commaAmount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    //Combines the two sections
		    return commaAmount.join(".");
		}
	});
	

	return{
		launchModal: launchModal,
		loadModalContent: loadModalContent,
		showModalError: showModalError,
		setModalTitle: setModalTitle,
		updateMapAtcModal: updateMAPPricingATCModal,
		customPositionModal: customPositionModal
	};
});
	/**
	 * MCC Add-To-Cart(ATC) Overlay Services
	 * - Centralized point to invoke ATC and related services
	 */
	define('shared/atc/thd.mcc.atc.Services',
	[ 'jquery',
	  'cart/env'
	],
	function(
		$, 
		env
	){	

	var atcService = {};
	/**
	 * Call MMC ATC Service and return promise
	 *
	 *  data = {
	 *          "CartRequest":
	 *              {
	 *               "itemDetails": [
	 *  				{
	 *  				 itemId: 
	 *  				 quantity: 	 	 
	 *  				 fulfillmentMethod:
	 *  				 fulfillmentLocation:
	 *  	 	 	 }]
	 *              }
	 *         };
	 */
	atcService.addToCart = function(data, supressCartRefresh){
		
		data = _validateATCRequest(data);

		return _callService({
					url: env.url.cart,
					data: JSON.stringify(data)
				}).done(function(resp){
	       			if(resp && resp.CartModel && !resp.CartModel.errorModel){
	       				if(!supressCartRefresh){
	       					//refresh cart, unless flag set to suppress (e.g. BOSS/BOPIS update batch)
	       					$.event.trigger('CART_RELOAD_CART_CONTENT');
	       				}
	       			}
	       		});
	};

	/**
	 * Call update service
	 *  - call reload cart if no remaining items
	 */
	atcService.updateItem = function(item){
		var data = {CartRequest: {itemDetails: [item]}};
		if(typeof item.configurationId !== "undefined"){
			if(item.configurationId){
				data.CartRequest.copyGUIDRequired="true";	
			}else{
				delete item.configurationId;
			}
		}
		return _callService({
					url: env.url.cartUpdate,
					data: JSON.stringify(data)
				});		
	};


	/**
	 * Single point of entry to Ajax service calls. Allows us to orchestrate behavior
	 *
	 */
	function _callService(_options){
		var wrapperPromise = new $.Deferred();

		var options = $.extend({
				type: "POST", 		  //default, if not provided
				// url: env.url.cart, //required
				// data: data,		  //optional
				timeout: 60000,
				xhrFields: { withCredentials: true },
				headers: { 
		        	"Accept" : "application/json; charset=utf-8",
		        	"Content-Type" : "application/json"
		       	}	
    	}, _options);


		var promise = $.ajax(options);

		
		promise.then(function(resp){
			//check for retry needed
			if(_shouldRetryServiceCall(resp)){
				console.warn("Error in Cart service call. Retry once.", resp);

				options = _fixInvalidFulfillmentRequest(options, resp);

				$.ajax(options).then(function(resp2){
					wrapperPromise.resolve(resp2);
				}).fail(function(e){
					wrapperPromise.reject(e);
				});
			}else{
				wrapperPromise.resolve(resp);
			}
		}).fail(function(e){
			wrapperPromise.reject(e);
		});


		return wrapperPromise;
	}

	/**
	 * If fulfillmentMethod or fulfillmentLocation is not valid, remove them so backend can
	 * assign an available fulfillment
	 */
	function _validateATCRequest(data, forceFulfillmentRemoval){
		try{
			$.each(data.CartRequest.itemDetails, function(index, item){
				if(
					(item.fulfillmentMethod && !item.fulfillmentLocation) ||
					(item.fulfillmentLocation && !item.fulfillmentMethod) ||
					forceFulfillmentRemoval
				  )
				{
					console.warn("Incomplete/incorrect ATC fulfillment details. Removing fulfillmentMethod and fulfillmentLocation", 
									item.fulfillmentMethod, item.fulfillmentLocation);
					delete item.fulfillmentMethod;
					delete item.fulfillmentLocation;
				}
			});
		}catch(e){
			console.error("Error validating ATC Request", e);
		}
		return data;
	}

	/**
	 * If we get an error with the fulfillment method, remove fulfillment info and retry
	 */
	function _fixInvalidFulfillmentRequest(options, resp){
		try{
			if(resp && resp.CartModel){
				var model = resp.CartModel;
				if(model.errorModel && model.errorModel.length>0){
					var errorCode = model.errorModel[0].errorCode;
					if(errorCode==="CART_ERR_168"){
						var data = JSON.parse(options.data);
						data = _validateATCRequest(data, true);
						options.data = JSON.stringify(data);
					}
				}
			}
		}catch(e){
			console.error("Error fixing invalid fulfillment request", e);
		}

		return options;
	}

	/**
	 * Retry if no model or if one of the listed error codes exists
	 */
	function _shouldRetryServiceCall(resp){
		try{
			var model = resp.CartModel;
			var errorCode;
			if(model.errorModel && model.errorModel.length>0){
				errorCode = model.errorModel[0].errorCode;
			}

			return ( !model || 
				  	( errorCode && 
					  	//The following errors will trigger a retry:
					  	errorCode==="CART_GEN_ERR" ||
					  	errorCode==="AUTH_ERR_112" ||
					  	errorCode==="AUTH_ERR_212" ||
					  	errorCode==="AUTH_ERR_106" ||
					  	errorCode==="CART_ERR_168"
				  	)
				  );
		}catch(e){
			console.error("Error evaluating response for retry, go ahead with retry", e);
			return true;
		}		
	}


	atcService.getMccAtcServiceURL = function(){
	    //get URL for add to cart service 
	    return env.url.cart; //global var set in MCC cart/env.js
	};

	/**
	 * Used by appliance ATC to get details before ATC call (zip avail. check)
	 */
	atcService.getProductDetails = function(itemId){
		var productUrl = env.url.originURL + env.url.productURL + itemId + env.url.productInfoParams;
		return $.ajax({
		            dataType: "jsonp", //possibly html? does this change?
		            url: productUrl,
		            timeout: 60000,
		            headers: { 
			        	'Accept' : "application/json; charset=utf-8",
			        	'Content-Type' : "application/json"
			       		}
				});
	};

	atcService.getDeliveryAvailability = function(itemId, zipCode){
		//TODO: Move key to env
		var deliveryUrl = env.url.delivery +
						"?itemId=" + itemId+
						"&zipCode=" + zipCode +
						"&type=JSON&key=XZG1XWUGO90KKnt6Jb9Mc8Jce5Nb8Adj";
		return $.ajax({
			        dataType: "json",
			        url: deliveryUrl,
			        timeout: 60000,
			        xhrFields: {
		                withCredentials: true
		            },	
					headers: { 
			        	'Accept' : "application/json; charset=utf-8",
			        	'Content-Type' : "application/json"
			       	}
	       		});
	};

	atcService.getPartsAndServicesService = function(itemId, zipCode){
		var url = env.url.partsandservices + "/" + itemId + "?zipCode=" + zipCode;
		return $.ajax({
	            url: url,
	            dataType: "json",            
	            timeout: 60000,
	            itemId: itemId,
	            zipCode: zipCode,
	            xhrFields: { withCredentials: true },
				headers: { 
		        	'Accept' : "application/json; charset=utf-8",
		        	'Content-Type' : "application/json"
		       	}
			 });
	};

	atcService.getCurrentDeliveryZipCode = function(){
		return $.ajax({
	        url: env.url.cart,
	        timeout: 60000,
	        xhrFields: { withCredentials: true },
			headers: { 
	        	'Accept' : "application/json; charset=utf-8",
	        	'Content-Type' : "application/json"
	       	}
	 	}).then(function(resp){
			var zipCode = "";
			try{
				if(resp && resp.CartModel && resp.CartModel.itemModels){
					$.each(resp.CartModel.itemModels, function(index, item){
						if(item.lineItemType==="Appliance"){
							zipCode=item.fulfillmentModel[0].deliveryZipCode;
						}
					});				
				}
			}catch(e){
				console.error("Unable to get appliance zip code", e);
				zipCode="";
			}
			return zipCode;
	 	});
	};

	return atcService;
});
/**
 * Initializes the Cart single page app (SPA).
 * Orchestrates the loading of various components to maximize user experience
 *
 * TODO: Currently in a POC state, need to identify minimum set of dependencies (CSS & JS)
 */

define('shared/certona/certonaController',
	[	"jquery",
		"cart/env",
		"require",
		"thd.certona",
		"cookie-utils"
	], 
function($, env, require,certona,cookieUtils){

	var formatHostName = function(){
          url = env.host;
          if (url.indexOf("www") === 0 || url.indexOf("secure2") === 0) {
            url = ".homedepot.com";
          }
          else if (url.indexOf("secure") === 0 || url.indexOf("hd") === 0) {
            url = url.replace("secure.", "").replace("hd", "");
          }
          return url;
    };

   // var thdCart = thdCart || THD.Utility.Namespace.createNamespace('THD.Checkout.Cart');
    var thdCart = {};
   
   thdCart.loadCertona = function(options){ 
   		require(['/HFApp/static/global/scripts/desktop/thirdparty/resxclsx.js'], function(){   
   			if(typeof resx === "undefined"){
	   			resx ={
					appid: "HOMEDEPOT01",
					links: "",
					levels: ""
				}; 
			}

			 _loadCertona(options);
   		});
  };
 function _loadCertona(options){
	    var hostname = "";
	    var apiKeyBasedOnHost = "";
		//var scheme = schemeName;
	    var currentStore = cookieUtils.readCookie('THD-LOC-STORE');
	    hostname = formatHostName();
	    if(hostname === ".homedepot.com"){
	      apiKeyBasedOnHost= "qgAdid5UhtbqdNy9wggswMZn1T0By0RC";
	    }
	    else{
	      apiKeyBasedOnHost=  "1IjpJxh5T6cINCGOYHsTuKsm9IoGeZQN"; 
	    }
	    
    options.appid = "HOMEDEPOT01";
    options.storeId = currentStore;
    options.apiKey = apiKeyBasedOnHost;

    // console.debug(options)
	    if (typeof resx !== "undefined"){
	    	resx = options;
	    }
	    certonaResx.getURL();
	    certona.refresh(resx);
   }

  return thdCart;
});


;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('thdOnlineCommon', [], function(){
        return factory(root);
    });
  } else {
    root.thdOnlineCommon = factory(root);
  }
}(this, function (root, undef) {
    var thdOnlineCommon = {};

    //Need to set this gobally while partially AMD
    root.thdOnlineCommon = thdOnlineCommon;


    thdOnlineCommon.cookie = {};

    thdOnlineCommon.cookie.channel = {
            
        cookieexpiry : 1,
        elementAppAlias : "E1",
        elementOSType : "E2",
        elementOSVersion : "E3",
        elementAppType : "E4",
        elementAppVersion : "E5",

        appAlias_Other : "S1",
        appAlias_mobileWeb : "S2",
        appAlias_Tablet : "S3",
        appAlias_WCS : "S4",
        appAlias_kiosk : "S5",
        appAlias_PIP2_APP : "S6",
        appAlias_PLP_APP : "S7",

        elementDelimiter : "::",
        elementKeySeperator : "=",
        channelCookieName : "THD_ONLINE_CHANNEL",
        persistCookieName : "THD_PERSIST",
        persistCookie_Crumb40 : "C40",
        channelCookieValue : "",
        channelValueDelimiter : ":",

        clientApp_proNative : "PNative",
        clientApp_consumerNative : "CNative",
        clientApp_kiosk : "kiosk",

        osAndroid : "Android",
        osIOS : "IOS",
        osWP : "WP",

        proTablet : "PRO_tabletWeb",
        proMobile : "PRO_mobileWeb",
        proDesktop : "PRO_DesktopWeb",
        tabletWeb : "Tablet Web",
        proAndroid : "PRO_Android",
        proIphone : "PRO_iPhone",
        mobileWeb : "Mobile Web",
        mobileWP7 : "Mobile - WP7",
        mobileAndroid : "Mobile - Android",
        mobileIphone : "Mobile - iPhone",
        httpDevice : "Http Device",
        b2bExternal : "B2B External",
        telesales : "telesales",
        kiosk : "kiosk",
        physicalStore : "Physical Store",
        webChannel : "Web Channel",

        HDP : "P",

        CreateChannelCookie: function(appAlias, osType, osVersion, appType, appVersion){
            this.channelCookieValue = this.generateChannelCookieValue(appAlias,osType,osVersion,appType,appVersion);
            var currentChannelCookieValue = this.getCookie(this.channelCookieName);
            if(currentChannelCookieValue == ""){
                this.channelCookieValue = this.channelCookieValue.replace(new RegExp(this.elementDelimiter + '$'), '');
                this.CreateCookie(this.channelCookieName, this.channelCookieValue, this.cookieexpiry, THD_TOUCH_GLOBALS.cookie_domain);
            } else {
                this.channelCookieValue = "";
                var currentAppAlias = null;
                var currentOSType = null;
                var currentOSVersion = null;
                var currentAppType = null;
                var currentAppVersion = null;
                var cookieValues = currentChannelCookieValue.split(this.elementDelimiter);
                for (var i = 0; i < cookieValues.length; i++) {
                    var elements = cookieValues[i].split(this.elementKeySeperator);
                    if(elements[0] == this.elementAppAlias){
                        currentAppAlias = elements[1];
                    }else if(elements[0] == this.elementOSType){
                        currentOSType = elements[1];
                    }else if(elements[0] == this.elementOSVersion){
                        currentOSVersion = elements[1];
                    }else if(elements[0] == this.elementAppType){
                        currentAppType = elements[1];
                    }else if(elements[0] == this.elementAppType){
                        currentAppVersion = elements[1];
                    }
                }
                if((currentAppAlias == null || currentAppAlias != appAlias) && appAlias != undefined && appAlias != ""){
                    currentAppAlias = appAlias;
                }
                if((currentOSType == null || currentOSType != osType) && osType != undefined && osType != ""){
                    currentOSType = osType;
                }
                if((currentOSVersion == null || currentOSVersion != osVersion) && osVersion != undefined && osVersion != ""){
                    currentOSVersion = osVersion;
                }
                if((currentAppType == null || currentAppType != appType) && appType != undefined && appType != ""){
                    currentAppType = appType;
                }
                if((currentAppVersion == null || currentAppVersion != appVersion) && appVersion != undefined && appVersion != ""){
                    currentAppVersion = appVersion;
                }
                this.channelCookieValue = this.generateChannelCookieValue(currentAppAlias,currentOSType,currentOSVersion,currentAppType,currentAppVersion);
                if(this.channelCookieValue != ""){
                    this.channelCookieValue = this.channelCookieValue.replace(new RegExp(this.elementDelimiter + '$'), '');
                    this.CreateCookie(this.channelCookieName, this.channelCookieValue, this.cookieexpiry, THD_TOUCH_GLOBALS.cookie_domain);
                }
            }
        },
        generateChannelCookieValue: function(appAlias,osType,osVersion,appType,appVersion){
            this.channelCookieValue = "";
            if(appAlias != undefined && appAlias != ""){
                this.channelCookieValue += this.elementAppAlias+this.elementKeySeperator+appAlias+this.elementDelimiter;
            }
            if(osType != undefined && osType != ""){
                this.channelCookieValue += this.elementOSType+this.elementKeySeperator+osType+this.elementDelimiter;
            }
            if(osVersion != undefined && osVersion != ""){
                this.channelCookieValue += this.elementOSVersion+this.elementKeySeperator+osVersion+this.elementDelimiter;
            }
            if(appType != undefined && appType != ""){
                this.channelCookieValue += this.elementAppType+this.elementKeySeperator+appType+this.elementDelimiter;
            }
            if(appVersion != undefined && appVersion != ""){
                this.channelCookieValue += this.elementAppVersion+this.elementKeySeperator+appVersion;
            }
            return this.channelCookieValue;
        },
        CreateCookie: function(cookieName, cookieValue, expirationDays, domain){
            var expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + expirationDays);
            var cookieString = cookieName + "=" + escape(cookieValue) + "; expires=" + ((expirationDays == null) ? "" : expirationDate.toUTCString()) + '; path=/; domain=' + domain;
            document.cookie = cookieString;
        },
        getCookie: function(cookieName){
            if (document.cookie.length > 0) {
                cookieStart = document.cookie.indexOf(cookieName + this.elementKeySeperator);
                if (cookieStart != -1) {
                    cookieStart = cookieStart + cookieName.length + 1;
                    cookieEnd = document.cookie.indexOf(";", cookieStart);
                    if (cookieEnd == -1) {
                        cookieEnd = document.cookie.length;
                    }
                    cookieValue = unescape(document.cookie.substring(cookieStart, cookieEnd));
                    return cookieValue;
                }
            }
            return "";
        },
        getCookieCrumb: function(cookie, name){
            var nameEquals = name + "=";
            var crumbs=cookie.split(':;');
            for (var i = 0; i<crumbs.length; i++) {
                var crumb = crumbs [i];
                if (crumb.indexOf(nameEquals) == 0) {
                    return unescape (crumb.substring(nameEquals.length, crumb.length));
                }
            }
            return null;
        },
        getBusinessChannelName: function() {
            var systemAlias="";
            var osType = "";
            var osVersion = "";
            var clientApp  = "";
            var clientAppVersion = "";
            var currentChannelCookieValue = this.getCookie(this.channelCookieName);
            var persistCookie = this.getCookie(this.persistCookieName);
            var persistCookie_Crumb40_Value = this.getCookieCrumb(persistCookie,this.persistCookie_Crumb40);
            if(currentChannelCookieValue != null)
            {
                var channelCookievalues = currentChannelCookieValue.split(this.elementDelimiter);
                if(channelCookievalues != null)
                {
                    var channelCookieValueMap = {};
                    for(var i=0;i<channelCookievalues.length;i++)
                    {
                        var channelCookieArray = channelCookievalues[i].split(this.elementKeySeperator);
                        if(channelCookieArray[0] != "" && channelCookieArray[1] != ""){
                            channelCookieValueMap[channelCookieArray[0]] = channelCookieArray[1];
                        }
                    }
                    if(channelCookieValueMap != null)
                    {
                        if(this.elementAppAlias in channelCookieValueMap)
                        {
                            systemAlias = channelCookieValueMap[this.elementAppAlias];
                        }
                        if(this.elementOSType in channelCookieValueMap)
                        {
                            osType = channelCookieValueMap[this.elementOSType];
                        }
                        if(this.elementOSVersion in channelCookieValueMap)
                        {
                            osVersion = channelCookieValueMap[this.elementOSVersion];
                        }
                        if(this.elementAppType in channelCookieValueMap)
                        {
                            clientApp = channelCookieValueMap[this.elementAppType];
                        }
                        if(this.elementAppVersion in channelCookieValueMap)
                        {
                            clientAppVersion = channelCookieValueMap[this.elementAppVersion];
                        }
                    }
                    if (clientApp.toLowerCase() == this.clientApp_proNative.toLowerCase()
                            && osType.toLowerCase() == this.osAndroid.toLowerCase()) {
                        return this.proAndroid;
                    } else if (clientApp.toLowerCase() == this.clientApp_proNative.toLowerCase()
                            && osType.toLowerCase() == this.osIOS.toLowerCase()) {
                        return this.proIphone;
                    } else if (clientApp.toLowerCase() == this.clientApp_consumerNative.toLowerCase()
                            && osType.toLowerCase() == this.osWP.toLowerCase()) {
                        return this.mobileWP7;
                    } else if (clientApp.toLowerCase() == this.clientApp_consumerNative.toLowerCase()
                            && osType.toLowerCase() == this.osAndroid.toLowerCase()) {
                        return this.mobileAndroid;
                    } else if (clientApp.toLowerCase() == this.clientApp_consumerNative.toLowerCase()
                            && osType.toLowerCase() == this.osIOS.toLowerCase()) {
                        return this.mobileIphone;
                    } else if (clientApp.toLowerCase() == this.clientApp_kiosk.toLowerCase()) {
                        return this.kiosk;
                    } else if (systemAlias.toLowerCase() == this.appAlias_mobileWeb.toLowerCase() && persistCookie_Crumb40_Value != null && persistCookie_Crumb40_Value.toLowerCase() == this.HDP.toLowerCase()) {
                        return this.proMobile;
                    } else if (systemAlias.toLowerCase() == this.appAlias_mobileWeb.toLowerCase()) {
                        return this.mobileWeb;
                    } else if (systemAlias.toLowerCase() == this.appAlias_Tablet.toLowerCase() && persistCookie_Crumb40_Value != null && persistCookie_Crumb40_Value.toLowerCase() == this.HDP.toLowerCase()) {
                        return this.proTablet;
                    } else if (systemAlias == this.appAlias_Tablet) {
                        return this.tabletWeb;
                    } else if (systemAlias != ""
                            && systemAlias.toLowerCase() != this.appAlias_mobileWeb.toLowerCase()
                            && systemAlias.toLowerCase() != this.appAlias_Tablet.toLowerCase() 
                            && persistCookie_Crumb40_Value != null && persistCookie_Crumb40_Value.toLowerCase() == this.HDP.toLowerCase()) {
                        return this.proDesktop;
                    } else if (systemAlias != ""
                        && systemAlias.toLowerCase() != this.appAlias_mobileWeb.toLowerCase()
                        && systemAlias.toLowerCase() != this.appAlias_Tablet.toLowerCase()
                        ){
                        return this.webChannel;
                    } else {
                        return this.physicalStore;
                    }
                }
            }
        }
    };


    return thdOnlineCommon;
}));

/**
 * Provide single location of formatting for values to be displayed in tablet front end
 */

;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('checkout/FormatHelper', 
    		['jquery'], 
    			factory);
  } else {
  	root.TABCOM = root.TABCOM || {};
    root.TABCOM.FormatHelper = factory(jQuery);
  }
}(this, function ($, errorMessages) {

	String.prototype.toFormattedCase = function () {
		return this.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	var datepicker; //instantiated at bottom

	var formatHelper = {};

	formatHelper.formatDate = function(format, date){
		if(!datepicker){
			datepicker = new _DateFormatter();
		}
		return datepicker.formatDate(format, date);
	};

	/**
	 * Convert a number to price in dollars with 2 decimal places
	 * e.g. "9.542" -> "$9.54"
	 */
	formatHelper.price = function(price){
		if(price==="0" || price==="0.00"){
			return false
		}else{
			return "$" + Number(price).toFixed(2);	
		}
	};

	formatHelper.priceOrFree = function(value){
		value = formatHelper.price(value);
		if(value==="$0.00" || value ===false){
			value = "Free";
		}
		return value;
	};

	/**
	 * Convert date format
	 *e.g.  2014-10-15 -> OCT 15
	 */
	formatHelper.date = function(dateString){
		var months = ["", "JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT", "NOV", "DEC"]; 
		//2014-10-15
		try {
			return months[Number(dateString.substring(5,7))] + " " + dateString.substring(8,10);
		} catch(e) {
			console.error("Unable to format " + dateString, e);
			return dateString;
		}
	};

	formatHelper.GetMonthName = function(monthNumber) {
		  var months = ['January', 'February', 'March', 'April', 'May', 'June',
		  'July', 'August', 'September', 'October', 'November', 'December'];
		  return months[monthNumber-1];
	};

	formatHelper.dateMonthFormattor = function(date){
		try {
			var dateSplit=date.split("-");
			var date= parseInt(dateSplit[2]);
			var d=new Date(dateSplit[0] + "/" + dateSplit[1] + "/" + date);
			var getDayNames = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
			var day=getDayNames[d.getDay()];
			var month=formatHelper.GetMonthName(dateSplit[1]);
			var date=dateSplit[2];
			var year=dateSplit[0];
			var formattedDate= day+", "+month+" "+date+", "+year;
			return formattedDate;
		} catch(e) {
			console.error("Unable to format " + date, e);
			return date;
		}
	};



	/**
	 * Convert time format
	 *e.g.  06:00:00 - > 06:00
	 */
	formatHelper.time = function(timeString){
		try	{
			var hours	=	timeString.substring(11,13);
			var mins	=	timeString.substring(13,16);
			if(hours > 12)	{
				hours	=	Number(hours) - 12;
				hours	=	hours < 10 ? "0"+hours : hours;
			}
			return hours+mins;
		} catch(e){
			console.error("Unable to format " + timeString, e);
			return timeString;
		}
	};

	/**
	 * Format xxxyyyzzzz to:
	 *        (xxx) yyy-zzzz
	 * return as-is for all non-10 digit values
	 */
	formatHelper.phone = function(number){
		try{
			var strNumber = (number+"").replace(/-/g, '');//make sure number is a string and remove dashes added by autofill plugins
			if(!number || number==="" || (strNumber && strNumber.length!==10)){
				//do nothing, return original
				return number;
			}

			return "("+strNumber.substring(0,3)+") " +
					  strNumber.substring(3,6) + "-" +
					  strNumber.substring(6,10);
		}catch(e){
			console.error("Unable to format " + number, e);
			return number;
		}
	};

	/**
	 * Pull phone from (xxx) xxx-xxxx format
	 * Otherwise, return as-is
	 */
	formatHelper.unformatPhone = function(phone){
		if(!phone || phone===""){
			//do nothing
			return phone;
		}

		if(phone && phone.length>13){
			return parseInt(phone.substring(1,4) + 
					 		phone.substring(6,9) + 
					 		phone.substring(10,14));
		}else{
			return phone;
		}
	};
	
	/**
	 * To parse Date and form a new Date object. This will prevent further
	 * formatting of Dates [if any] to display "day" as previous "day"
	 */
	
	formatHelper.parseDate =function(date){
		try{
			if(!date || typeof(date) === "object"){
				//do nothing, return original
				return date;
			}
			var parts = date.match(/(\d+)/g);
			// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
			return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
		} catch(e)	{
			console.error("Unable to format date - " + date, e);
			return date;
		}
	};
	
	/**
	 * This is a comparison function that will result in dates being sorted in ASCENDING order
	 */
	
	formatHelper.date_sort_asc =function (date1, date2) {
	  if (date1 > date2) return 1;
	  if (date1 < date2) return -1;
	  return 0;
	};
	
	/**
	 * This is a comparison function that will result in dates being sorted in DESCENDING order
	 */
	
	formatHelper.date_sort_desc =function (date1, date2) {
	  if (date1 > date2) return -1;
	  if (date1 < date2) return 1;
	  return 0;
	};

	//To sort an array object 
	formatHelper.dynamicSort =function (property,sortorder) {
		if(sortorder==='D'){
			 return function(a, b) {
			       return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
			   }
		}else{
			 return function(a, b) {
			       return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			   }
		}	  
	};

	formatHelper.convertHtmlEntities = function(str) {
		return String(str).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g,'>').replace(/&quot;/g, '"');
	};

	var PROP_NAME = "datepicker",
		instActive;

	/* Date picker manager.
	   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
	   Settings for (groups of) date pickers are maintained in an instance object,
	   allowing multiple different settings on the same page. */

	function _DateFormatter() {
		this._curInst = null; // The current instance in use
		this._keyEvent = false; // If the last event was a key event
		this._disabledInputs = []; // List of date picker inputs that have been disabled
		this._datepickerShowing = false; // True if the popup picker is showing , false if not
		this._inDialog = false; // True if showing within a "dialog", false if not
		this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
		this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
		this._appendClass = "ui-datepicker-append"; // The name of the append marker class
		this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
		this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
		this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
		this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
		this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
		this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[""] = { // Default regional settings
			closeText: "Done", // Display text for close link
			prevText: "Prev", // Display text for previous month link
			nextText: "Next", // Display text for next month link
			currentText: "Today", // Display text for current month link
			monthNames: ["January","February","March","April","May","June",
				"July","August","September","October","November","December"], // Names of months for drop-down and formatting
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
			dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
			weekHeader: "Wk", // Column header for week of the year
			dateFormat: "mm/dd/yy", // See format options on parseDate
			firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
			isRTL: false, // True if right-to-left language, false if left-to-right
			showMonthAfterYear: false, // True if the year select precedes month, false for month then year
			yearSuffix: "" // Additional text to append to the year in the month headers
		};
		this._defaults = { // Global defaults for all the date picker instances
			showOn: "focus", // "focus" for popup on focus,
				// "button" for trigger button, or "both" for either
			showAnim: "fadeIn", // Name of jQuery animation for popup
			showOptions: {}, // Options for enhanced animations
			defaultDate: null, // Used when field is blank: actual date,
				// +/-number for offset from today, null for today
			appendText: "", // Display text following the input box, e.g. showing the format
			buttonText: "...", // Text for trigger button
			buttonImage: "", // URL for trigger button image
			buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
			hideIfNoPrevNext: false, // True to hide next/previous month links
				// if not applicable, false to just disable them
			navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
			gotoCurrent: false, // True if today link goes back to current selection instead
			changeMonth: false, // True if month can be selected directly, false if only prev/next
			changeYear: false, // True if year can be selected directly, false if only prev/next
			yearRange: "c-10:c+10", // Range of years to display in drop-down,
				// either relative to today's year (-nn:+nn), relative to currently displayed year
				// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
			showOtherMonths: false, // True to show dates in other months, false to leave blank
			selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
			showWeek: false, // True to show week of the year, false to not show it
			calculateWeek: this.iso8601Week, // How to calculate the week of the year,
				// takes a Date and returns the number of the week for it
			shortYearCutoff: "+10", // Short year values < this are in the current century,
				// > this are in the previous century,
				// string value starting with "+" for current year + value
			minDate: null, // The earliest selectable date, or null for no limit
			maxDate: null, // The latest selectable date, or null for no limit
			duration: "fast", // Duration of display/closure
			beforeShowDay: null, // Function that takes a date and returns an array with
				// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
				// [2] = cell title (optional), e.g. $.datepicker.noWeekends
			beforeShow: null, // Function that takes an input field and
				// returns a set of custom settings for the date picker
			onSelect: null, // Define a callback function when a date is selected
			onChangeMonthYear: null, // Define a callback function when the month or year is changed
			onClose: null, // Define a callback function when the datepicker is closed
			numberOfMonths: 1, // Number of months to show at a time
			showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
			stepMonths: 1, // Number of months to step back/forward
			stepBigMonths: 12, // Number of months to step back/forward for the big links
			altField: "", // Selector for an alternate field to store selected dates into
			altFormat: "", // The date format to use for the alternate field
			constrainInput: true, // The input is constrained by the current date format
			showButtonPanel: false, // True to show button panel, false to not show it
			autoSize: false, // True to size the input for the date format, false to leave as is
			disabled: false // The initial disabled state
		};
		$.extend(this._defaults, this.regional[""]);
	}

	$.extend(_DateFormatter.prototype, {
		/* Class name added to elements to indicate already configured with a date picker. */
		markerClassName: "hasDatepicker",

		//Keep track of the maximum number of rows displayed (see #7043)
		maxRows: 4,

		// TODO rename to "widget" when switching to widget factory
		_widgetDatepicker: function() {
			return this.dpDiv;
		},

		/* Override the default settings for all instances of the date picker.
		 * @param  settings  object - the new settings to use as defaults (anonymous object)
		 * @return the manager object
		 */
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/* Attach the date picker to a jQuery selection.
		 * @param  target	element - the target input field or division or span
		 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
		 */
		_attachDatepicker: function(target, settings) {
			var nodeName, inline, inst;
			nodeName = target.nodeName.toLowerCase();
			inline = (nodeName === "div" || nodeName === "span");
			if (!target.id) {
				this.uuid += 1;
				target.id = "dp" + this.uuid;
			}
			inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {});
			if (nodeName === "input") {
				this._connectDatepicker(target, inst);
			} else if (inline) {
				this._inlineDatepicker(target, inst);
			}
		},

		/* Create a new instance object. */
		_newInst: function(target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
			return {id: id, input: target, // associated target
				selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
				drawMonth: 0, drawYear: 0, // month being drawn
				inline: inline, // is datepicker inline or not
				dpDiv: (!inline ? this.dpDiv : // presentation div
				bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
		},

		/* Attach the date picker to an input field. */
		_connectDatepicker: function(target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName)) {
				return;
			}
			this._attachments(input, inst);
			input.addClass(this.markerClassName).keydown(this._doKeyDown).
				keypress(this._doKeyPress).keyup(this._doKeyUp);
			this._autoSize(inst);
			$.data(target, PROP_NAME, inst);
			//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
			if( inst.settings.disabled ) {
				this._disableDatepicker( target );
			}
		},

		/* Make attachments based on settings. */
		_attachments: function(input, inst) {
			var showOn, buttonText, buttonImage,
				appendText = this._get(inst, "appendText"),
				isRTL = this._get(inst, "isRTL");

			if (inst.append) {
				inst.append.remove();
			}
			if (appendText) {
				inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
				input[isRTL ? "before" : "after"](inst.append);
			}

			input.unbind("focus", this._showDatepicker);

			if (inst.trigger) {
				inst.trigger.remove();
			}

			showOn = this._get(inst, "showOn");
			if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
				input.focus(this._showDatepicker);
			}
			if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
				buttonText = this._get(inst, "buttonText");
				buttonImage = this._get(inst, "buttonImage");
				inst.trigger = $(this._get(inst, "buttonImageOnly") ?
					$("<img/>").addClass(this._triggerClass).
						attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
					$("<button type='button'></button>").addClass(this._triggerClass).
						html(!buttonImage ? buttonText : $("<img/>").attr(
						{ src:buttonImage, alt:buttonText, title:buttonText })));
				input[isRTL ? "before" : "after"](inst.trigger);
				inst.trigger.click(function() {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
						$.datepicker._hideDatepicker();
					} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
						$.datepicker._hideDatepicker();
						$.datepicker._showDatepicker(input[0]);
					} else {
						$.datepicker._showDatepicker(input[0]);
					}
					return false;
				});
			}
		},

		/* Apply the maximum length for the date format. */
		_autoSize: function(inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var findMax, max, maxI, i,
					date = new Date(2009, 12 - 1, 20), // Ensure double digits
					dateFormat = this._get(inst, "dateFormat");

				if (dateFormat.match(/[DM]/)) {
					findMax = function(names) {
						max = 0;
						maxI = 0;
						for (i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
						"monthNames" : "monthNamesShort"))));
					date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
						"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
				}
				inst.input.attr("size", this._formatDate(inst, date).length);
			}
		},

		/* Attach an inline date picker to a div. */
		_inlineDatepicker: function(target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName)) {
				return;
			}
			divSpan.addClass(this.markerClassName).append(inst.dpDiv);
			$.data(target, PROP_NAME, inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
			//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
			if( inst.settings.disabled ) {
				this._disableDatepicker( target );
			}
			// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
			// http://bugs.jqueryui.com/ticket/7552 - A DateFormatter created on a detached div has zero height
			inst.dpDiv.css( "display", "block" );
		},

		/* Pop-up the date picker in a "dialog" box.
		 * @param  input element - ignored
		 * @param  date	string or Date - the initial date to display
		 * @param  onSelect  function - the function to call when a date is selected
		 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
		 * @param  pos int[2] - coordinates for the dialog's position within the screen or
		 *					event - with x/y coordinates or
		 *					leave empty for default (screen centre)
		 * @return the manager object
		 */
		_dialogDatepicker: function(input, date, onSelect, settings, pos) {
			var id, browserWidth, browserHeight, scrollX, scrollY,
				inst = this._dialogInst; // internal instance

			if (!inst) {
				this.uuid += 1;
				id = "dp" + this.uuid;
				this._dialogInput = $("<input type='text' id='" + id +
					"' style='position: absolute; top: -100px; width: 0px;'/>");
				this._dialogInput.keydown(this._doKeyDown);
				$("body").append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], PROP_NAME, inst);
			}
			extendRemove(inst.settings, settings || {});
			date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
			this._dialogInput.val(date);

			this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
			if (!this._pos) {
				browserWidth = document.documentElement.clientWidth;
				browserHeight = document.documentElement.clientHeight;
				scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = // should use actual width/height below
					[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
			}

			// move input on screen for focus, but hidden behind dialog
			this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI) {
				$.blockUI(this.dpDiv);
			}
			$.data(this._dialogInput[0], PROP_NAME, inst);
			return this;
		},

		/* Detach a datepicker from its control.
		 * @param  target	element - the target input field or division or span
		 */
		_destroyDatepicker: function(target) {
			var nodeName,
				$target = $(target),
				inst = $.data(target, PROP_NAME);

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			$.removeData(target, PROP_NAME);
			if (nodeName === "input") {
				inst.append.remove();
				inst.trigger.remove();
				$target.removeClass(this.markerClassName).
					unbind("focus", this._showDatepicker).
					unbind("keydown", this._doKeyDown).
					unbind("keypress", this._doKeyPress).
					unbind("keyup", this._doKeyUp);
			} else if (nodeName === "div" || nodeName === "span") {
				$target.removeClass(this.markerClassName).empty();
			}
		},

		/* Enable the date picker to a jQuery selection.
		 * @param  target	element - the target input field or division or span
		 */
		_enableDatepicker: function(target) {
			var nodeName, inline,
				$target = $(target),
				inst = $.data(target, PROP_NAME);

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = false;
				inst.trigger.filter("button").
					each(function() { this.disabled = false; }).end().
					filter("img").css({opacity: "1.0", cursor: ""});
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().removeClass("ui-state-disabled");
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
					prop("disabled", false);
			}
			this._disabledInputs = $.map(this._disabledInputs,
				function(value) { return (value === target ? null : value); }); // delete entry
		},

		/* Disable the date picker to a jQuery selection.
		 * @param  target	element - the target input field or division or span
		 */
		_disableDatepicker: function(target) {
			var nodeName, inline,
				$target = $(target),
				inst = $.data(target, PROP_NAME);

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = true;
				inst.trigger.filter("button").
					each(function() { this.disabled = true; }).end().
					filter("img").css({opacity: "0.5", cursor: "default"});
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().addClass("ui-state-disabled");
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
					prop("disabled", true);
			}
			this._disabledInputs = $.map(this._disabledInputs,
				function(value) { return (value === target ? null : value); }); // delete entry
			this._disabledInputs[this._disabledInputs.length] = target;
		},

		/* Is the first field in a jQuery collection disabled as a datepicker?
		 * @param  target	element - the target input field or division or span
		 * @return boolean - true if disabled, false if enabled
		 */
		_isDisabledDatepicker: function(target) {
			if (!target) {
				return false;
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] === target) {
					return true;
				}
			}
			return false;
		},

		/* Retrieve the instance data for the target control.
		 * @param  target  element - the target input field or division or span
		 * @return  object - the associated instance data
		 * @throws  error if a jQuery problem getting data
		 */
		_getInst: function(target) {
			try {
				return $.data(target, PROP_NAME);
			}
			catch (err) {
				throw "Missing instance data for this datepicker";
			}
		},

		/* Update or retrieve the settings for a date picker attached to an input field or division.
		 * @param  target  element - the target input field or division or span
		 * @param  name	object - the new settings to update or
		 *				string - the name of the setting to change or retrieve,
		 *				when retrieving also "all" for all instance settings or
		 *				"defaults" for all global defaults
		 * @param  value   any - the new value for the setting
		 *				(omit if above is an object or to retrieve a value)
		 */
		_optionDatepicker: function(target, name, value) {
			var settings, date, minDate, maxDate,
				inst = this._getInst(target);

			if (arguments.length === 2 && typeof name === "string") {
				return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
					(inst ? (name === "all" ? $.extend({}, inst.settings) :
					this._get(inst, name)) : null));
			}

			settings = name || {};
			if (typeof name === "string") {
				settings = {};
				settings[name] = value;
			}

			if (inst) {
				if (this._curInst === inst) {
					this._hideDatepicker();
				}

				date = this._getDateDatepicker(target, true);
				minDate = this._getMinMaxDate(inst, "min");
				maxDate = this._getMinMaxDate(inst, "max");
				extendRemove(inst.settings, settings);
				// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
				if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
					inst.settings.minDate = this._formatDate(inst, minDate);
				}
				if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
					inst.settings.maxDate = this._formatDate(inst, maxDate);
				}
				if ( "disabled" in settings ) {
					if ( settings.disabled ) {
						this._disableDatepicker(target);
					} else {
						this._enableDatepicker(target);
					}
				}
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst);
			}
		},

		// change method deprecated
		_changeDatepicker: function(target, name, value) {
			this._optionDatepicker(target, name, value);
		},

		/* Redraw the date picker attached to an input field or division.
		 * @param  target  element - the target input field or division or span
		 */
		_refreshDatepicker: function(target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst);
			}
		},

		/* Set the dates for a jQuery selection.
		 * @param  target element - the target input field or division or span
		 * @param  date	Date - the new date
		 */
		_setDateDatepicker: function(target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst);
			}
		},

		/* Get the date(s) for the first entry in a jQuery selection.
		 * @param  target element - the target input field or division or span
		 * @param  noDefault boolean - true if no default date is to be used
		 * @return Date - the current date
		 */
		_getDateDatepicker: function(target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline) {
				this._setDateFromField(inst, noDefault);
			}
			return (inst ? this._getDate(inst) : null);
		},

		/* Handle keystrokes. */
		_doKeyDown: function(event) {
			var onSelect, dateStr, sel,
				inst = $.datepicker._getInst(event.target),
				handled = true,
				isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing) {
				switch (event.which) {
					case 9: $.datepicker._hideDatepicker();
							handled = false;
							break; // hide on tab out
					case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
										$.datepicker._currentClass + ")", inst.dpDiv);
							if (sel[0]) {
								$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
							}

							onSelect = $.datepicker._get(inst, "onSelect");
							if (onSelect) {
								dateStr = $.datepicker._formatDate(inst);

								// trigger custom callback
								onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
							} else {
								$.datepicker._hideDatepicker();
							}

							return false; // don't submit the form
					case 27: $.datepicker._hideDatepicker();
							break; // hide on escape
					case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
							break; // previous month/year on page up/+ ctrl
					case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
							break; // next month/year on page down/+ ctrl
					case 35: if (event.ctrlKey || event.metaKey) {
								$.datepicker._clearDate(event.target);
							}
							handled = event.ctrlKey || event.metaKey;
							break; // clear on ctrl or command +end
					case 36: if (event.ctrlKey || event.metaKey) {
								$.datepicker._gotoToday(event.target);
							}
							handled = event.ctrlKey || event.metaKey;
							break; // current on ctrl or command +home
					case 37: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
							}
							handled = event.ctrlKey || event.metaKey;
							// -1 day on ctrl or command +left
							if (event.originalEvent.altKey) {
								$.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, "stepBigMonths") :
									-$.datepicker._get(inst, "stepMonths")), "M");
							}
							// next month/year on alt +left on Mac
							break;
					case 38: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, -7, "D");
							}
							handled = event.ctrlKey || event.metaKey;
							break; // -1 week on ctrl or command +up
					case 39: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
							}
							handled = event.ctrlKey || event.metaKey;
							// +1 day on ctrl or command +right
							if (event.originalEvent.altKey) {
								$.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, "stepBigMonths") :
									+$.datepicker._get(inst, "stepMonths")), "M");
							}
							// next month/year on alt +right
							break;
					case 40: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, +7, "D");
							}
							handled = event.ctrlKey || event.metaKey;
							break; // +1 week on ctrl or command +down
					default: handled = false;
				}
			} else if (event.which === 36 && event.ctrlKey) { // display the date picker on ctrl+home
				$.datepicker._showDatepicker(this);
			} else {
				handled = false;
			}

			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
		},

		/* Filter entered characters - based on date format. */
		_doKeyPress: function(event) {
			var chars, chr,
				inst = $.datepicker._getInst(event.target);

			if ($.datepicker._get(inst, "constrainInput")) {
				chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
				chr = String.fromCharCode(event.charCode == null ? event.which : event.charCode);
				return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
			}
		},

		/* Synchronise manual entry and field/alternate field. */
		_doKeyUp: function(event) {
			var date,
				inst = $.datepicker._getInst(event.target);

			if (inst.input.val() !== inst.lastVal) {
				try {
					date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						(inst.input ? inst.input.val() : null),
						$.datepicker._getFormatConfig(inst));

					if (date) { // only if valid
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst);
					}
				}
				catch (err) {
				}
			}
			return true;
		},

		/* Pop-up the date picker for a given input field.
		 * If false returned from beforeShow event handler do not show.
		 * @param  input  element - the input field attached to the date picker or
		 *					event - if triggered by focus
		 */
		_showDatepicker: function(input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
				input = $("input", input.parentNode)[0];
			}

			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
				return;
			}

			var inst, beforeShow, beforeShowSettings, isFixed,
				offset, showAnim, duration;

			inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if ( inst && $.datepicker._datepickerShowing ) {
					$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
				}
			}

			beforeShow = $.datepicker._get(inst, "beforeShow");
			beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
			if(beforeShowSettings === false){
				return;
			}
			extendRemove(inst.settings, beforeShowSettings);

			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);

			if ($.datepicker._inDialog) { // hide cursor
				input.value = "";
			}
			if (!$.datepicker._pos) { // position below input
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight; // add the height
			}

			isFixed = false;
			$(input).parents().each(function() {
				isFixed |= $(this).css("position") === "fixed";
				return !isFixed;
			});

			offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
			$.datepicker._pos = null;
			//to avoid flashes on Firefox
			inst.dpDiv.empty();
			// determine sizing offscreen
			inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
			$.datepicker._updateDatepicker(inst);
			// fix width for dynamic number of date pickers
			// and adjust position before showing
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
				"static" : (isFixed ? "fixed" : "absolute")), display: "none",
				left: offset.left + "px", top: offset.top + "px"});

			if (!inst.inline) {
				showAnim = $.datepicker._get(inst, "showAnim");
				duration = $.datepicker._get(inst, "duration");
				inst.dpDiv.zIndex($(input).zIndex()+1);
				$.datepicker._datepickerShowing = true;

				if ( $.effects && $.effects.effect[ showAnim ] ) {
					inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
				} else {
					inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
				}

				if ( $.datepicker._shouldFocusInput( inst ) ) {
					inst.input.focus();
				}

				$.datepicker._curInst = inst;
			}
		},

		/* Generate the date picker content. */
		_updateDatepicker: function(inst) {
			this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
			instActive = inst; // for delegate hover events
			inst.dpDiv.empty().append(this._generateHTML(inst));
			this._attachHandlers(inst);
			inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();

			var origyearshtml,
				numMonths = this._getNumberOfMonths(inst),
				cols = numMonths[1],
				width = 17;

			inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			if (cols > 1) {
				inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
			}
			inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
				"Class"]("ui-datepicker-multi");
			inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
				"Class"]("ui-datepicker-rtl");

			if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			// deffered render of the years select (to avoid flashes on Firefox)
			if( inst.yearshtml ){
				origyearshtml = inst.yearshtml;
				setTimeout(function(){
					//assure that inst.yearshtml didn't change.
					if( origyearshtml === inst.yearshtml && inst.yearshtml ){
						inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
					}
					origyearshtml = inst.yearshtml = null;
				}, 0);
			}
		},

		// #6694 - don't focus the input if it's already focused
		// this breaks the change event in IE
		// Support: IE and jQuery <1.9
		_shouldFocusInput: function( inst ) {
			return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
		},

		/* Check positioning to remain on screen. */
		_checkOffset: function(inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth(),
				dpHeight = inst.dpDiv.outerHeight(),
				inputWidth = inst.input ? inst.input.outerWidth() : 0,
				inputHeight = inst.input ? inst.input.outerHeight() : 0,
				viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
				viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

			offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
			offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
			offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

			// now check if datepicker is showing outside window viewport - move to a better place if so.
			offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
				Math.abs(offset.left + dpWidth - viewWidth) : 0);
			offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
				Math.abs(dpHeight + inputHeight) : 0);

			return offset;
		},

		/* Find an object's position on the screen. */
		_findPos: function(obj) {
			var position,
				inst = this._getInst(obj),
				isRTL = this._get(inst, "isRTL");

			while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
				obj = obj[isRTL ? "previousSibling" : "nextSibling"];
			}

			position = $(obj).offset();
			return [position.left, position.top];
		},

		/* Hide the date picker from view.
		 * @param  input  element - the input field attached to the date picker
		 */
		_hideDatepicker: function(input) {
			var showAnim, duration, postProcess, onClose,
				inst = this._curInst;

			if (!inst || (input && inst !== $.data(input, PROP_NAME))) {
				return;
			}

			if (this._datepickerShowing) {
				showAnim = this._get(inst, "showAnim");
				duration = this._get(inst, "duration");
				postProcess = function() {
					$.datepicker._tidyDialog(inst);
				};

				// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
				if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
					inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
				} else {
					inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
						(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
				}

				if (!showAnim) {
					postProcess();
				}
				this._datepickerShowing = false;

				onClose = this._get(inst, "onClose");
				if (onClose) {
					onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
				}

				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
					if ($.blockUI) {
						$.unblockUI();
						$("body").append(this.dpDiv);
					}
				}
				this._inDialog = false;
			}
		},

		/* Tidy up after a dialog display. */
		_tidyDialog: function(inst) {
			inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
		},

		/* Close date picker if clicked elsewhere. */
		_checkExternalClick: function(event) {
			if (!$.datepicker._curInst) {
				return;
			}

			var $target = $(event.target),
				inst = $.datepicker._getInst($target[0]);

			if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
					$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
					!$target.hasClass($.datepicker.markerClassName) &&
					!$target.closest("." + $.datepicker._triggerClass).length &&
					$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
				( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
					$.datepicker._hideDatepicker();
			}
		},

		/* Adjust one of the date sub-fields. */
		_adjustDate: function(id, offset, period) {
			var target = $(id),
				inst = this._getInst(target[0]);

			if (this._isDisabledDatepicker(target[0])) {
				return;
			}
			this._adjustInstDate(inst, offset +
				(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
				period);
			this._updateDatepicker(inst);
		},

		/* Action for current link. */
		_gotoToday: function(id) {
			var date,
				target = $(id),
				inst = this._getInst(target[0]);

			if (this._get(inst, "gotoCurrent") && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear;
			} else {
				date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
			}
			this._notifyChange(inst);
			this._adjustDate(target);
		},

		/* Action for selecting a new month/year. */
		_selectMonthYear: function(id, select, period) {
			var target = $(id),
				inst = this._getInst(target[0]);

			inst["selected" + (period === "M" ? "Month" : "Year")] =
			inst["draw" + (period === "M" ? "Month" : "Year")] =
				parseInt(select.options[select.selectedIndex].value,10);

			this._notifyChange(inst);
			this._adjustDate(target);
		},

		/* Action for selecting a day. */
		_selectDay: function(id, month, year, td) {
			var inst,
				target = $(id);

			if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
				return;
			}

			inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = $("a", td).html();
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(id, this._formatDate(inst,
				inst.currentDay, inst.currentMonth, inst.currentYear));
		},

		/* Erase the input field and hide the date picker. */
		_clearDate: function(id) {
			var target = $(id);
			this._selectDate(target, "");
		},

		/* Update the input field with the selected date. */
		_selectDate: function(id, dateStr) {
			var onSelect,
				target = $(id),
				inst = this._getInst(target[0]);

			dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
			if (inst.input) {
				inst.input.val(dateStr);
			}
			this._updateAlternate(inst);

			onSelect = this._get(inst, "onSelect");
			if (onSelect) {
				onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
			} else if (inst.input) {
				inst.input.trigger("change"); // fire the change event
			}

			if (inst.inline){
				this._updateDatepicker(inst);
			} else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof(inst.input[0]) !== "object") {
					inst.input.focus(); // restore focus
				}
				this._lastInput = null;
			}
		},

		/* Update any alternate field to synchronise with the main field. */
		_updateAlternate: function(inst) {
			var altFormat, date, dateStr,
				altField = this._get(inst, "altField");

			if (altField) { // update alternate field too
				altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
				date = this._getDate(inst);
				dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(altField).each(function() { $(this).val(dateStr); });
			}
		},

		/* Set as beforeShowDay function to prevent selection of weekends.
		 * @param  date  Date - the date to customise
		 * @return [boolean, string] - is this date selectable?, what is its CSS class?
		 */
		noWeekends: function(date) {
			var day = date.getDay();
			return [(day > 0 && day < 6), ""];
		},

		/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
		 * @param  date  Date - the date to get the week for
		 * @return  number - the number of the week within the year that contains this date
		 */
		iso8601Week: function(date) {
			var time,
				checkDate = new Date(date.getTime());

			// Find Thursday of this week starting on Monday
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

			time = checkDate.getTime();
			checkDate.setMonth(0); // Compare with Jan 1
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		},

		/* Parse a string value into a date object.
		 * See formatDate below for the possible formats.
		 *
		 * @param  format string - the expected format of the date
		 * @param  value string - the date in the above format
		 * @param  settings Object - attributes include:
		 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
		 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
		 *					dayNames		string[7] - names of the days from Sunday (optional)
		 *					monthNamesShort string[12] - abbreviated names of the months (optional)
		 *					monthNames		string[12] - names of the months (optional)
		 * @return  Date - the extracted date value or null if value is blank
		 */
		parseDate: function (format, value, settings) {
			if (format == null || value == null) {
				throw "Invalid arguments";
			}

			value = (typeof value === "object" ? value.toString() : value + "");
			if (value === "") {
				return null;
			}

			var iFormat, dim, extra,
				iValue = 0,
				shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
					new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
				dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				year = -1,
				month = -1,
				day = -1,
				doy = -1,
				literal = false,
				date,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Extract a number from the string value
				getNumber = function(match) {
					var isDoubled = lookAhead(match),
						size = (match === "@" ? 14 : (match === "!" ? 20 :
						(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
						digits = new RegExp("^\\d{1," + size + "}"),
						num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue;
					}
					iValue += num[0].length;
					return parseInt(num[0], 10);
				},
				// Extract a name from the string value and convert to an index
				getName = function(match, shortNames, longNames) {
					var index = -1,
						names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
							return [ [k, v] ];
						}).sort(function (a, b) {
							return -(a[1].length - b[1].length);
						});

					$.each(names, function (i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false;
						}
					});
					if (index !== -1) {
						return index + 1;
					} else {
						throw "Unknown name at position " + iValue;
					}
				},
				// Confirm that a literal character matches the string value
				checkLiteral = function() {
					if (value.charAt(iValue) !== format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue;
					}
					iValue++;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						checkLiteral();
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							day = getNumber("d");
							break;
						case "D":
							getName("D", dayNamesShort, dayNames);
							break;
						case "o":
							doy = getNumber("o");
							break;
						case "m":
							month = getNumber("m");
							break;
						case "M":
							month = getName("M", monthNamesShort, monthNames);
							break;
						case "y":
							year = getNumber("y");
							break;
						case "@":
							date = new Date(getNumber("@"));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "!":
							date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "'":
							if (lookAhead("'")){
								checkLiteral();
							} else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}

			if (iValue < value.length){
				extra = value.substr(iValue);
				if (!/^\s+/.test(extra)) {
					throw "Extra/unparsed characters found in date: " + extra;
				}
			}

			if (year === -1) {
				year = new Date().getFullYear();
			} else if (year < 100) {
				year += new Date().getFullYear() - new Date().getFullYear() % 100 +
					(year <= shortYearCutoff ? 0 : -100);
			}

			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break;
					}
					month++;
					day -= dim;
				} while (true);
			}

			date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
				throw "Invalid date"; // E.g. 31/02/00
			}
			return date;
		},

		/* Standard date formats. */
		ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y", // RFC 822
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd", // ISO 8601

		_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
			Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

		/* Format a date object into a string value.
		 * The format can be combinations of the following:
		 * d  - day of month (no leading zero)
		 * dd - day of month (two digit)
		 * o  - day of year (no leading zeros)
		 * oo - day of year (three digit)
		 * D  - day name short
		 * DD - day name long
		 * m  - month of year (no leading zero)
		 * mm - month of year (two digit)
		 * M  - month name short
		 * MM - month name long
		 * y  - year (two digit)
		 * yy - year (four digit)
		 * @ - Unix timestamp (ms since 01/01/1970)
		 * ! - Windows ticks (100ns since 01/01/0001)
		 * "..." - literal text
		 * '' - single quote
		 *
		 * @param  format string - the desired format of the date
		 * @param  date Date - the date value to format
		 * @param  settings Object - attributes include:
		 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
		 *					dayNames		string[7] - names of the days from Sunday (optional)
		 *					monthNamesShort string[12] - abbreviated names of the months (optional)
		 *					monthNames		string[12] - names of the months (optional)
		 * @return  string - the date in the above format
		 */
		formatDate: function (format, date, settings) {
			if (!date) {
				return "";
			}

			var iFormat,
				dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Format a number, with leading zero if necessary
				formatNumber = function(match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num;
						}
					}
					return num;
				},
				// Format a name, short or long as requested
				formatName = function(match, value, shortNames, longNames) {
					return (lookAhead(match) ? longNames[value] : shortNames[value]);
				},
				output = "",
				literal = false;

			if (date) {
				for (iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
							literal = false;
						} else {
							output += format.charAt(iFormat);
						}
					} else {
						date = new Date(formatHelper.parseDate(date));
						switch (format.charAt(iFormat)) {
							case "d":
								output += formatNumber("d", date.getDate(), 2);
								break;
							case "D":
								output += formatName("D", date.getDay(), dayNamesShort, dayNames);
								break;
							case "o":
								output += formatNumber("o",
									Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
								break;
							case "m":
								output += formatNumber("m", date.getMonth() + 1, 2);
								break;
							case "M":
								output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
								break;
							case "y":
								output += (lookAhead("y") ? date.getFullYear() :
									(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
								break;
							case "@":
								output += date.getTime();
								break;
							case "!":
								output += date.getTime() * 10000 + this._ticksTo1970;
								break;
							case "'":
								if (lookAhead("'")) {
									output += "'";
								} else {
									literal = true;
								}
								break;
							default:
								output += format.charAt(iFormat);
						}
					}
				}
			}
			return output;
		},

		/* Extract all possible characters from the date format. */
		_possibleChars: function (format) {
			var iFormat,
				chars = "",
				literal = false,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						chars += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d": case "m": case "y": case "@":
							chars += "0123456789";
							break;
						case "D": case "M":
							return null; // Accept anything
						case "'":
							if (lookAhead("'")) {
								chars += "'";
							} else {
								literal = true;
							}
							break;
						default:
							chars += format.charAt(iFormat);
					}
				}
			}
			return chars;
		},

		/* Get a setting value, defaulting if necessary. */
		_get: function(inst, name) {
			return inst.settings[name] !== undefined ?
				inst.settings[name] : this._defaults[name];
		},

		/* Parse existing date and initialise date picker. */
		_setDateFromField: function(inst, noDefault) {
			if (inst.input.val() === inst.lastVal) {
				return;
			}

			var dateFormat = this._get(inst, "dateFormat"),
				dates = inst.lastVal = inst.input ? inst.input.val() : null,
				defaultDate = this._getDefaultDate(inst),
				date = defaultDate,
				settings = this._getFormatConfig(inst);

			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate;
			} catch (event) {
				dates = (noDefault ? "" : dates);
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = (dates ? date.getDate() : 0);
			inst.currentMonth = (dates ? date.getMonth() : 0);
			inst.currentYear = (dates ? date.getFullYear() : 0);
			this._adjustInstDate(inst);
		},

		/* Retrieve the default date shown on opening. */
		_getDefaultDate: function(inst) {
			return this._restrictMinMax(inst,
				this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
		},

		/* A date may be specified as an exact value or a relative one. */
		_determineDate: function(inst, date, defaultDate) {
			var offsetNumeric = function(offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date;
				},
				offsetString = function(offset) {
					try {
						return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
							offset, $.datepicker._getFormatConfig(inst));
					}
					catch (e) {
						// Ignore
					}

					var date = (offset.toLowerCase().match(/^c/) ?
						$.datepicker._getDate(inst) : null) || new Date(),
						year = date.getFullYear(),
						month = date.getMonth(),
						day = date.getDate(),
						pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
						matches = pattern.exec(offset);

					while (matches) {
						switch (matches[2] || "d") {
							case "d" : case "D" :
								day += parseInt(matches[1],10); break;
							case "w" : case "W" :
								day += parseInt(matches[1],10) * 7; break;
							case "m" : case "M" :
								month += parseInt(matches[1],10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
							case "y": case "Y" :
								year += parseInt(matches[1],10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
						}
						matches = pattern.exec(offset);
					}
					return new Date(year, month, day);
				},
				newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
					(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

			newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0);
			}
			return this._daylightSavingAdjust(newDate);
		},

		/* Handle switch to/from daylight saving.
		 * Hours may be non-zero on daylight saving cut-over:
		 * > 12 when midnight changeover, but then cannot generate
		 * midnight datetime, so jump to 1AM, otherwise reset.
		 * @param  date  (Date) the date to check
		 * @return  (Date) the corrected date
		 */
		_daylightSavingAdjust: function(date) {
			if (!date) {
				return null;
			}
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date;
		},

		/* Set the date(s) directly. */
		_setDate: function(inst, date, noChange) {
			var clear = !date,
				origMonth = inst.selectedMonth,
				origYear = inst.selectedYear,
				newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
			inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
			if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
				this._notifyChange(inst);
			}
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? "" : this._formatDate(inst));
			}
		},

		/* Retrieve the date(s) directly. */
		_getDate: function(inst) {
			var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
				this._daylightSavingAdjust(new Date(
				inst.currentYear, inst.currentMonth, inst.currentDay)));
				return startDate;
		},

		/* Attach the onxxx handlers.  These are declared statically so
		 * they work with static code transformers like Caja.
		 */
		_attachHandlers: function(inst) {
			var stepMonths = this._get(inst, "stepMonths"),
				id = "#" + inst.id.replace( /\\\\/g, "\\" );
			inst.dpDiv.find("[data-handler]").map(function () {
				var handler = {
					prev: function () {
						$.datepicker._adjustDate(id, -stepMonths, "M");
					},
					next: function () {
						$.datepicker._adjustDate(id, +stepMonths, "M");
					},
					hide: function () {
						$.datepicker._hideDatepicker();
					},
					today: function () {
						$.datepicker._gotoToday(id);
					},
					selectDay: function () {
						$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
						return false;
					},
					selectMonth: function () {
						$.datepicker._selectMonthYear(id, this, "M");
						return false;
					},
					selectYear: function () {
						$.datepicker._selectMonthYear(id, this, "Y");
						return false;
					}
				};
				$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
			});
		},

		/* Generate the HTML for the current state of the date picker. */
		_generateHTML: function(inst) {
			var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
				controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
				monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
				selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
				cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
				printDate, dRow, tbody, daySettings, otherMonth, unselectable,
				tempDate = new Date(),
				today = this._daylightSavingAdjust(
					new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
				isRTL = this._get(inst, "isRTL"),
				showButtonPanel = this._get(inst, "showButtonPanel"),
				hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
				navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
				numMonths = this._getNumberOfMonths(inst),
				showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
				stepMonths = this._get(inst, "stepMonths"),
				isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
				currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
					new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				drawMonth = inst.drawMonth - showCurrentAtPos,
				drawYear = inst.drawYear;

			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--;
			}
			if (maxDate) {
				maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
					maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
				maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
				while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--;
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;

			prevText = this._get(inst, "prevText");
			prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
				this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
				this._getFormatConfig(inst)));

			prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
				"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
				" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
				(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

			nextText = this._get(inst, "nextText");
			nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
				this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
				this._getFormatConfig(inst)));

			next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
				"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
				" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
				(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

			currentText = this._get(inst, "currentText");
			gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
			currentText = (!navigationAsDateFormat ? currentText :
				this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

			controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
				this._get(inst, "closeText") + "</button>" : "");

			buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
				(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
				">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

			firstDay = parseInt(this._get(inst, "firstDay"),10);
			firstDay = (isNaN(firstDay) ? 0 : firstDay);

			showWeek = this._get(inst, "showWeek");
			dayNames = this._get(inst, "dayNames");
			dayNamesMin = this._get(inst, "dayNamesMin");
			monthNames = this._get(inst, "monthNames");
			monthNamesShort = this._get(inst, "monthNamesShort");
			beforeShowDay = this._get(inst, "beforeShowDay");
			showOtherMonths = this._get(inst, "showOtherMonths");
			selectOtherMonths = this._get(inst, "selectOtherMonths");
			defaultDate = this._getDefaultDate(inst);
			html = "";
			dow;
			for (row = 0; row < numMonths[0]; row++) {
				group = "";
				this.maxRows = 4;
				for (col = 0; col < numMonths[1]; col++) {
					selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
					cornerClass = " ui-corner-all";
					calender = "";
					if (isMultiMonth) {
						calender += "<div class='ui-datepicker-group";
						if (numMonths[1] > 1) {
							switch (col) {
								case 0: calender += " ui-datepicker-group-first";
									cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
								case numMonths[1]-1: calender += " ui-datepicker-group-last";
									cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
								default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
							}
						}
						calender += "'>";
					}
					calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
						(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
						(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
						this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
						row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
						"</div><table class='ui-datepicker-calendar'><thead>" +
						"<tr>";
					thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
					for (dow = 0; dow < 7; dow++) { // days of the week
						day = (dow + firstDay) % 7;
						thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
							"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
					}
					calender += thead + "</tr></thead><tbody>";
					daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
					}
					leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
					numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
					this.maxRows = numRows;
					printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
					for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
						calender += "<tr>";
						tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
							this._get(inst, "calculateWeek")(printDate) + "</td>");
						for (dow = 0; dow < 7; dow++) { // create date picker days
							daySettings = (beforeShowDay ?
								beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
							otherMonth = (printDate.getMonth() !== drawMonth);
							unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
								(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
							tbody += "<td class='" +
								((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
								(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
								((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
								(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
								// or defaultDate is current printedDate and defaultDate is selectedDate
								" " + this._dayOverClass : "") + // highlight selected day
								(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
								(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
								(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
								(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
								((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
								(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
								(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
								(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
								(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
								(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
								(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
								"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate);
						}
						calender += tbody + "</tr>";
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++;
					}
					calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
								((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
					group += calender;
				}
				html += group;
			}
			html += buttonPanel;
			inst._keyEvent = false;
			return html;
		},

		/* Generate the month and year header. */
		_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
				secondary, monthNames, monthNamesShort) {

			var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
				changeMonth = this._get(inst, "changeMonth"),
				changeYear = this._get(inst, "changeYear"),
				showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
				html = "<div class='ui-datepicker-title'>",
				monthHtml = "";

			// month selection
			if (secondary || !changeMonth) {
				monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
			} else {
				inMinYear = (minDate && minDate.getFullYear() === drawYear);
				inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
				monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
				for ( month = 0; month < 12; month++) {
					if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
						monthHtml += "<option value='" + month + "'" +
							(month === drawMonth ? " selected='selected'" : "") +
							">" + monthNamesShort[month] + "</option>";
					}
				}
				monthHtml += "</select>";
			}

			if (!showMonthAfterYear) {
				html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
			}

			// year selection
			if ( !inst.yearshtml ) {
				inst.yearshtml = "";
				if (secondary || !changeYear) {
					html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
				} else {
					// determine range of years to display
					years = this._get(inst, "yearRange").split(":");
					thisYear = new Date().getFullYear();
					determineYear = function(value) {
						var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
							(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
							parseInt(value, 10)));
						return (isNaN(year) ? thisYear : year);
					};
					year = determineYear(years[0]);
					endYear = Math.max(year, determineYear(years[1] || ""));
					year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
					endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
					inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
					for (; year <= endYear; year++) {
						inst.yearshtml += "<option value='" + year + "'" +
							(year === drawYear ? " selected='selected'" : "") +
							">" + year + "</option>";
					}
					inst.yearshtml += "</select>";

					html += inst.yearshtml;
					inst.yearshtml = null;
				}
			}

			html += this._get(inst, "yearSuffix");
			if (showMonthAfterYear) {
				html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
			}
			html += "</div>"; // Close datepicker_header
			return html;
		},

		/* Adjust one of the date sub-fields. */
		_adjustInstDate: function(inst, offset, period) {
			var year = inst.drawYear + (period === "Y" ? offset : 0),
				month = inst.drawMonth + (period === "M" ? offset : 0),
				day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
				date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period === "M" || period === "Y") {
				this._notifyChange(inst);
			}
		},

		/* Ensure a date is within any min/max bounds. */
		_restrictMinMax: function(inst, date) {
			var minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				newDate = (minDate && date < minDate ? minDate : date);
			return (maxDate && newDate > maxDate ? maxDate : newDate);
		},

		/* Notify change of month/year. */
		_notifyChange: function(inst) {
			var onChange = this._get(inst, "onChangeMonthYear");
			if (onChange) {
				onChange.apply((inst.input ? inst.input[0] : null),
					[inst.selectedYear, inst.selectedMonth + 1, inst]);
			}
		},

		/* Determine the number of months to show. */
		_getNumberOfMonths: function(inst) {
			var numMonths = this._get(inst, "numberOfMonths");
			return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
		},

		/* Determine the current maximum date - ensure no time components are set. */
		_getMinMaxDate: function(inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
		},

		/* Find the number of days in a given month. */
		_getDaysInMonth: function(year, month) {
			return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
		},

		/* Find the day of the week of the first of a month. */
		_getFirstDayOfMonth: function(year, month) {
			return new Date(year, month, 1).getDay();
		},

		/* Determines if we should allow a "next/prev" month display change. */
		_canAdjustMonth: function(inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst),
				date = this._daylightSavingAdjust(new Date(curYear,
				curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

			if (offset < 0) {
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
			}
			return this._isInRange(inst, date);
		},

		/* Is the given date in the accepted range? */
		_isInRange: function(inst, date) {
			var yearSplit, currentYear,
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				minYear = null,
				maxYear = null,
				years = this._get(inst, "yearRange");
				if (years){
					yearSplit = years.split(":");
					currentYear = new Date().getFullYear();
					minYear = parseInt(yearSplit[0], 10);
					maxYear = parseInt(yearSplit[1], 10);
					if ( yearSplit[0].match(/[+\-].*/) ) {
						minYear += currentYear;
					}
					if ( yearSplit[1].match(/[+\-].*/) ) {
						maxYear += currentYear;
					}
				}

			return ((!minDate || date.getTime() >= minDate.getTime()) &&
				(!maxDate || date.getTime() <= maxDate.getTime()) &&
				(!minYear || date.getFullYear() >= minYear) &&
				(!maxYear || date.getFullYear() <= maxYear));
		},

		/* Provide the configuration settings for formatting/parsing. */
		_getFormatConfig: function(inst) {
			var shortYearCutoff = this._get(inst, "shortYearCutoff");
			shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			return {shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
				monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
		},

		/* Format the given date for display. */
		_formatDate: function(inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear;
			}
			var date = (day ? (typeof day === "object" ? day :
				this._daylightSavingAdjust(new Date(year, month, day))) :
				this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
		}
	});

	formatHelper.DateFormatter = _DateFormatter;
	
	return formatHelper;
}));


/**
 * Single point of access to the CheckoutModel.
 * - Ensures consistency of changes to the model.
 * - Provides view-friendly conversions of the model for use by templates.
 */
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('checkout/CheckoutModel',
    		['jquery',
    		'checkout/FormatHelper'], 
    			factory);
  } else {
  	window.TABCOM = window.TABCOM || {};
    window.TABCOM.CheckoutModel = 
  		factory(
  			jQuery, 
  			TABCOM.FormatHelper);
  }
}(this, 
	function (
		$, 
		formatHelper
	) {

	var CHECKOUT_MODEL;
	var STH_DISPLAY_ITEMS, APP_DISPLAY_ITEMS, BOPIS_DISPLAY_ITEMS, BOSS_DISPLAY_ITEMS, BODFS_DISPLAY_ITEMS;
	var DELIVERY_ZIP ="";
	var applianceSelectedDate;			

	var checkoutModel = {};
	/**
	 * Set the model initially
	 */
	function setModel(model){
		CHECKOUT_MODEL = model.checkoutModel||model;

		//massage data for display
		if (CHECKOUT_MODEL.orderModel && CHECKOUT_MODEL.itemModels && CHECKOUT_MODEL.itemModels.length > 0) {
			CHECKOUT_MODEL.orderModel.quantity = getItemQuantityCount();
		}
		CHECKOUT_MODEL.orderModel = prepareOrderSummary(CHECKOUT_MODEL.orderModel);

		//if(CHECKOUT_MODEL.hasOwnProperty("orderConfirmationModel")) { // && CHECKOUT_MODEL.paymentMode != "PayPalConfirmation"
		//	return CHECKOUT_MODEL;
		//}
		
		STH_DISPLAY_ITEMS = _generateShipToHomeItemsForDisplay();
		APP_DISPLAY_ITEMS = _generateItemsForDisplay("Appliance");
		BOPIS_DISPLAY_ITEMS = _generateItemsForDisplay("BOPIS");
		BOSS_DISPLAY_ITEMS = _generateItemsForDisplay("BOSS");
		BODFS_DISPLAY_ITEMS = _generateItemsForDisplay("BODFS");
		
		/*if(CHECKOUT_MODEL.addressModels){
			_updateAddressModelWithUPSValidatedFlag(CHECKOUT_MODEL.addressModels);
		}*/
		return CHECKOUT_MODEL;
	}

	function updateModel(updatedModel){
        //When updating the model, sometimes we will need to directly update a field
        //to avoid newly null values from being retained by the mergeObjects function
        if(updatedModel){
            var updModel = updatedModel.checkoutModel||updatedModel;
            //itemModels may contain update/removed shipping options if merged
            //the outdated options will be retained. So set directly before merge.
            if(updModel.itemModels && updModel.itemModels.length > 0){
                //CHECKOUT_MODEL.itemModels.shipmentTypeModel = updModel.itemModels.shipmentTypeModel; 
            	var lineItemsCollect = {};
				$.each(updModel.itemModels, function(index2, itemModel){
					if(itemModel.shipmentTypeModel){
						CHECKOUT_MODEL.itemModels[index2].shipmentTypeModel = itemModel.shipmentTypeModel;         
					}
					lineItemsCollect[itemModel.lineItemId] = true;
					CHECKOUT_MODEL.itemModels[index2].specialOfferPrice=itemModel.specialOfferPrice;
					CHECKOUT_MODEL.itemModels[index2].unitPrice=itemModel.unitPrice;
					CHECKOUT_MODEL.itemModels[index2].totalItemPrice=itemModel.totalItemPrice;					
				});	
				
				//remove merged lineitems after Smart pickup update
				if (CHECKOUT_MODEL.itemModels.length != updModel.itemModels.length) {
					for(var i=0; i < CHECKOUT_MODEL.itemModels.length; i++) {
						var lineItemId = CHECKOUT_MODEL.itemModels[i].lineItemId;
                		if(!lineItemsCollect[lineItemId]) {
                			removeModel(lineItemId);
                			i--;
                		}
                	}
				}
            	
            }
            //Keep the new order model if PLCC_CODE is in place
            if(PLCC_CODE){
                if(updModel.orderModel){
                    CHECKOUT_MODEL.orderModel = updModel.orderModel;
                }
			}
            
          /*Check the PromotionsModel and update the orderModel.promotionsModel with the latest promotionsModel */        
            if(updModel.orderModel){
            	if(CHECKOUT_MODEL.orderModel && CHECKOUT_MODEL.orderModel.promotionsModel){
            		CHECKOUT_MODEL.orderModel = updModel.orderModel;
            	}
            	if(CHECKOUT_MODEL.orderModel.discount){
            		CHECKOUT_MODEL.orderModel.discount=updModel.orderModel.discount;
            	}            	
            }
        }
        
        var updatedModel = mergeObjects(
            true, //deep clone
            {}, //returns a new object
            CHECKOUT_MODEL, 
            updatedModel.checkoutModel||updatedModel);
        return setModel(updatedModel);
    }


	function removeModel(reqLineDataItemId){
		//To find the itemId and remove from existing modal			
			if(CHECKOUT_MODEL.itemModels != null){
				var isRemoveItemKeyFound = "";
				$.each(CHECKOUT_MODEL.itemModels, function(index2, itemModel){
					if(itemModel.lineItemId === reqLineDataItemId){
						isRemoveItemKeyFound = index2;
					}
				});
				if(isRemoveItemKeyFound >= 0 ){
					CHECKOUT_MODEL.itemModels.splice(isRemoveItemKeyFound,1);
				}
			}
			if(CHECKOUT_MODEL.orderModel != null && CHECKOUT_MODEL.orderModel.orderRef && CHECKOUT_MODEL.orderModel.orderRef.itemIdRefs){
				var isItemRemoveIDRefFound = "";
				$.each(CHECKOUT_MODEL.orderModel.orderRef.itemIdRefs, function(i, orderRef){
					if(orderRef.lineItemId === reqLineDataItemId){
						isItemRemoveIDRefFound = i;
					}
				});
				if(isItemRemoveIDRefFound >= 0){
					CHECKOUT_MODEL.orderModel.orderRef.itemIdRefs.splice(isItemRemoveIDRefFound, 1);
					var totalItems = CHECKOUT_MODEL.orderModel.quantity;
					totalItems = (totalItems)?parseInt(totalItems):0;
					if(totalItems > 0){
						CHECKOUT_MODEL.orderModel.quantity = parseInt(totalItems) - 1;
					}
				}
			}			
		//return setModel(c);
	}

	// Added for UPS address Validation
	function _updateAddressModelWithUPSValidatedFlag(addressModels){
		$.each(addressModels,function(i,address){
			address.isUpsAddressValidated = false;
		});
	}

	function setUpdateAddressIdCheckoutItemsModel(prevAddressId, updateAddrId){
		if(CHECKOUT_MODEL.itemModels != null){
			$.each(CHECKOUT_MODEL.itemModels, function(index, item) {
				if(item.addressIdentifier && item.addressIdentifier === prevAddressId){
					item.previousAddressId = prevAddressId;
					item.addressIdentifier = updateAddrId;
				}else if(item.selectedAddressIdentifier && item.selectedAddressIdentifier && item.selectedAddressIdentifier === prevAddressId){					
					item.previousAddressId = prevAddressId;
					item.selectedAddressIdentifier = updateAddrId;
				}
			//Setting the updated model with addressIdentifier
			item = item;
			});
		}
	}

	function setManualUpdateShipModeToCheckoutItemsModel(userSelectedItemID, usrSelectedShipModeCode, sharedShipModel){
		if(CHECKOUT_MODEL.itemModels != null){
			$.each(CHECKOUT_MODEL.itemModels, function(index, item) {
					if(sharedShipModel){
						item.selectedShipmentMode = usrSelectedShipModeCode;
					}else{
						if(item.itemId === userSelectedItemID){
							item.selectedShipmentMode = usrSelectedShipModeCode;
						}
					}
					
			});
		}
	}

	function getModel(){
		return CHECKOUT_MODEL;
	}

	function getOrderId(){
		return CHECKOUT_MODEL.orderModel.orderId;
	}

	function getOrderModel(){
		return CHECKOUT_MODEL.orderModel;
	}

	function getOrderConfirmation(){
		return CHECKOUT_MODEL.orderConfirmationModel;
	}

	function getItemCount(){
		return CHECKOUT_MODEL.itemModels.length;
	}

	function getItemQuantityCount(){
		var TotalCount = 0 ;
		var getItemModels = CHECKOUT_MODEL.itemModels ? 
	              CHECKOUT_MODEL.itemModels : CHECKOUT_MODEL.orderConfirmationModel.itemModels;
		$.each(getItemModels, function(i,item){
			TotalCount += Number(item.quantity);
		});
		return TotalCount;
	}

	function getEmailAddress(){
		var emailValue = null;
		try{
			var cookieUtil = thdOnlineCommon.cookie.channel;
			emailValue = cookieUtil.getCookieCrumb(cookieUtil.getCookie("THD_PERSIST"), "C46");
			if(emailValue == "guest")	{
				emailValue = cookieUtil.getCookieCrumb(cookieUtil.getCookie("THD_PERSIST"), "C12");
			}					
		}catch(e){
			console.warn("Unable to get email from cookie", e);
		}
		return (emailValue||CHECKOUT_MODEL.email);
	}

	function getEmailSubscribed(){
		var emailSubscribe = 'false';
		if (CHECKOUT_MODEL.emailSubscribed) {
			emailSubscribe = CHECKOUT_MODEL.emailSubscribed.toString();
		}
		return emailSubscribe;
	}

	function isGuest(){
		try{
			var cookieUtil = thdOnlineCommon.cookie.channel;
			return cookieUtil.getCookieCrumb(cookieUtil.getCookie("THD_PERSIST"), "C46") == "guest";	
		}catch(e){
			console.warn("Unable to get guest user status from cookie. Default to true", e);
			return true;
		}
	}

	function directPayment(paymentMode) {
		return paymentMode === "expressCheckout" || paymentMode === "returnFromPaypal";
	}
	
	function directPayment(paymentMode) {
		return paymentMode === "expressCheckout" || paymentMode === "returnFromPaypal";
	}

	function inStore(){
		try{
			return CHECKOUT_MODEL.orderModel.inStore;	
		}catch(e){
			console.warn("Unable to get myApron user status from modal. Default to false", e);
			return false;
		}
	}
	
	//Check if the order is applied with a PLCC promotion.
	//TODO: Will need to validate based on the promotions array if/when multiples are allowed.
	function isPLCCOrder(){
		var isPLCC = false;
		try{
			if(CHECKOUT_MODEL.orderModel && CHECKOUT_MODEL.orderModel.promotionsModel)
			{
				$.each(CHECKOUT_MODEL.orderModel.promotionsModel,function(i,promotion){
					if(promotion.promoType === 'PLCC'){
						isPLCC = promotion.validCreditCardTypes;
					}
				});
			}
			
		}catch(e){
			console.warn("Unable to get guest user status from cookie. Default to true", e);
			return isPLCC;
		}
		
		return isPLCC;
	}
	
	/**
	 * e.g. "PSG" -> "Standard Shipping"
	 */
	function getShipmentTypeDescriptionFromCode(code){
		var typeDescription="";
		var shipItems = getItemsByType("STH");
		$.each(shipItems, function(index, item){
			var shipTypeModel = item.shipmentTypeModel;
			$.each(shipTypeModel.shipmentModels, function(index, shipModel){					
		 		if(shipModel.shipmentModeCode===code){
		 			typeDescription=shipModel.description;
		 		}
			});					
		});
		return typeDescription;
	}

	/**
	 * Look at item shipping options, if timeLeftHours/timeLeftMinutes
	 * this has DETA options, return true
	 */ 
	function hasDETAShippingOption(){
		var hasDeta = false;
		var shipItems = getItemsByType("STH");
		$.each(shipItems, function(index, item){
			var shipTypeModel = item.shipmentTypeModel;
			$.each(shipTypeModel.shipmentModels, function(index, shipModel){					
		 		if(shipModel.timeLeftHrs || shipModel.timeLeftMins){
		 			hasDeta=true;
		 		}
			});					
		});
 	
	 	return hasDeta;
	}

	function getPaymentType() {
		return CHECKOUT_MODEL.buttonClicked;
	}



	/**
	 * Massage some data elements to display correctly:
	 *  - set promo applied on orderSummary
	 */
	function prepareOrderSummary(orderModel){
		if (orderModel) {
			var autoOrderCompletion = orderModel.automatedOrderCompletion;
			orderModel['applianceDeliverySection'] = (!autoOrderCompletion || (autoOrderCompletion && autoOrderCompletion === "N" && !orderModel.applianceDeliveryCharge)) ? false : true;
		}

		if(typeof orderModel !== "undefined" && orderModel !== null){
			orderModel.promotionList = [];
		}			
		if(orderModel && orderModel.promotionsModel){				
			//assuming a single promotion is applied. 
			//TODO: Will need to add promotions if/when multiples are allowed.
			$.each(orderModel.promotionsModel, function(i,promotion){
				if(promotion.promoType && promotion.promoType.toLowerCase().indexOf('item level')<0){
					var promotionItem = {};
					promotionItem.promoCode = promotion.promoCode?
								(promotion.promoCode.length>10?promotion.promoCode.substr(0,10)+'...':promotion.promoCode):
								"PROMO";
					promotionItem.deferred = false;
					promotionItem.isFreeShippingPromo = false;
					if(promotion.promoType === 'PLCC'
						&& promotion.promotionCategories && promotion.promotionCategories.toLowerCase().indexOf('deferred')>-1){						
							promotionItem.promoCodeDiscount = 'APPLIED';
							promotionItem.deferred = true;
						}else{
							promotionItem.promoCodeDiscount = promotion.appliedDiscount;
						}
					// Not to show PROMO Applied if the product has FREE Shipping. 
					if(promotion.promotionSubType && promotion.promotionSubType === "Shipping") {
						promotionItem.isFreeShippingPromo = true;
						promotionItem.description = promotion.description.length>10?promotion.description.substr(0,10)+'...':promotion.description;
					}
					orderModel.promotionList.push(promotionItem);
				}
				
			});
		}
		var currentStep = $(".current-step .progress-bar-step").html();
		if(currentStep && currentStep.indexOf("PAYMENT") > -1)	{
			// push it for display if applied PLCC code is available after removed
			if(PLCC_CODE && !isPLCCOrder())	{
				orderModel.promotionList.push({
					promoCode	:	PLCC_CODE,
					deferred	:	true,
					isFreeShippingPromo : false,
					promoCodeDiscount : 'NOT APPLIED'
				});
			}
		}
		return orderModel;
	}
	
	function prepareOrderSummaryForDesktop(orderModel) {
		
		/* for Desktop, we should show the PLCC promo as well as order level promo if we have
		 * based on payment card */
		if(typeof orderModel !== "undefined" && orderModel !== null){
			orderModel.promotionList = [];
		}			
		if(orderModel && orderModel.promotionsModel){				
			//assuming a single promotion is applied. 
			//TODO: Will need to add promotions if/when multiples are allowed.
			$.each(orderModel.promotionsModel, function(i,promotion){
				if(promotion.promoType && promotion.promoType.toLowerCase().indexOf('item level')<0){
					var promotionItem = {};
					promotionItem.promoCode = promotion.promoCode?
								(promotion.promoCode.length>10?promotion.promoCode.substr(0,10)+'...':promotion.promoCode):
								"PROMO";
					promotionItem.deferred = false;
					promotionItem.isFreeShippingPromo = false;
					if(promotion.promoType === 'PLCC'
						&& promotion.promotionCategories && promotion.promotionCategories.toLowerCase().indexOf('deferred')>-1){						
							promotionItem.promoCodeDiscount = 'APPLIED';
							promotionItem.deferred = true;
						}else{
							promotionItem.promoCodeDiscount = promotion.appliedDiscount;
						}
					// Not to show PROMO Applied if the product has FREE Shipping. 
					if(promotion.promotionSubType && promotion.promotionSubType === "Shipping") {
						promotionItem.isFreeShippingPromo = true;
						promotionItem.description = promotion.description.length>10?promotion.description.substr(0,10)+'...':promotion.description;
					}
					orderModel.promotionList.push(promotionItem);
				}
				
			});
		}
		var currentStep = $(".current-step .progress-bar-step").html();
		if(currentStep && currentStep.indexOf("PAYMENT") > -1)	{
			// push it for display if applied PLCC code is available after removed
			if(PLCC_CODE && !isPLCCOrder())	{
				orderModel.promotionList.push({
					promoCode	:	PLCC_CODE,
					deferred	:	true,
					isFreeShippingPromo : false,
					promoCodeDiscount : 'NOT APPLIED'
				});
			}
		}
		return orderModel;
	}

	/**
	 * Determine available item types
	 * "STH" <- "Merchandize"
	 * "Appliance"
	 * "BOPIS" <- "Buy Online Pickup In Store"
	 * "BOSS" <- "Buy Online Ship To Store"
	 * @return Object with item types ["Merchandize"|"Appliance"|"BOPIS"|"BOSS"]
	 */
	function getItemTypes(){
		var itemTypes = {};
		for(var i=0; i<CHECKOUT_MODEL.itemModels.length; i++){
			var type = CHECKOUT_MODEL.itemModels[i].lineItemType;
			if(type==="Buy Online Deliver From Store"){
				type = "BODFS";
			}else if (type==="Buy Online Pickup In Store"){
				type = "BOPIS";
			}else if(type==="Buy Online Ship To Store"){
				type = "BOSS";
			}else if(type==="Merchandize"){
				type = "STH";
			}
			//leave "Appliance" as-is
			itemTypes[type]=true;
		}
		return itemTypes;
	}

	/**
	 * Get all items by type 
	 * @param type "STH"|"Appliance"|"BOPIS"|"BOSS"
	 */
	function getItemsByType(type){
		var items = [];
		try{
			for(var i=0; i<CHECKOUT_MODEL.itemModels.length; i++){
				var item = CHECKOUT_MODEL.itemModels[i];
				if(type==="BOPIS" && item.lineItemType==="Buy Online Pickup In Store"){
					items.push(item);
				}else if(type==="BOSS" && item.lineItemType==="Buy Online Ship To Store"){
					items.push(item);
				}else if(type==="STH" && item.lineItemType==="Merchandize"){
					items.push(item);
				}else if(type==="Appliance" && item.lineItemType==="Appliance"){
					items.push(item);
				}else if(type==="Pickup" && 
							(item.lineItemType==="Buy Online Pickup In Store" || 
							 item.lineItemType==="Buy Online Ship To Store")){
					items.push(item);
				}else if(type==="BODFS" && item.lineItemType==="Buy Online Deliver From Store"){ //TODO: Get correct type string from BED
					items.push(item);
				}
			}
		}catch(e){
			console.error("Unable to get items for ", type);
		}
		return items;
	}


	/**
	 * Transform ship-to-home items ("Merchandize") in model for display
	 * in UI.
	 */
	function getShipToHomeItemsForDisplay(){
		return STH_DISPLAY_ITEMS;
	}
	
	function isShipToMultiple(){
		var firstAddress, shipToMulti=false;
		if(STH_DISPLAY_ITEMS && STH_DISPLAY_ITEMS.length>1){
			//Get all addresses from the addressModel which is not P.O BOX address
			var addresses = filterPoBoxAddresses(getModel().addressModels);
							
			if(addresses && addresses.length > 0) {
				var addressArray = [];					
				$.each(addresses, function(index, address){							
					addressArray.push(address.addressIdentifier);							
				});
				
				$.each(STH_DISPLAY_ITEMS, function(index, item){
					if($.inArray(item.addressId,addressArray)> -1){
						if(!firstAddress){
							firstAddress = item.addressId;
						}
						if(firstAddress != item.addressId){
							shipToMulti=true;
							return false; //exit loop
						}
					}						
				});
			}
		}
		return shipToMulti;
	}

	//Create Pickup Options Items list, grouped by store
	function getPickupItemsFromModel(){
	
		var storePickups = {};
        
        if(window.IS_ONEPAGE){
            //This section is to get around issues of the pickup model not  always being available on first call. 
            //This is so the summary state for the user will be displayed, will not affect update.do 
            var summaryPickUpEmail = CHECKOUT_MODEL.email;
            var summaryPickUpDesk = $(".pickup-location-radio:checked").attr("location");
            var summaryPickUpMobile = $("#pickup-mobile-phone").val();
            var summaryPickUpDate = $(".pickupDateTime .pickup-date").text();
            var summaryPickUpTime = $(".pickupDateTime .pickup-time").text();
                if(summaryPickUpEmail){
        	$("#panelSlider .pickup-inperson-email").append(
                       summaryPickUpEmail
			);
                }
                if(summaryPickUpDesk){
                    $(".pickup-location").append(
                        summaryPickUpDesk
                    );
                }
                if(summaryPickUpMobile){
                    $(".pickup-person-selfphone").empty().append(
                        summaryPickUpMobile
                    );
                }
            if($(".pickupOptionDateTimeRadio:checked").attr("data-val") == "pickup-first-avail"){
                if(summaryPickUpDate && summaryPickUpTime){
                   $(".summary-pickupDateTime").empty().append(
                       "Your item(s) will be available for pickup within 3 hours at the "
                    );                        
                }
            }
            else if($(".pickupOptionDateTimeRadio:checked").attr("data-val") == "pickup-time"){
                if(summaryPickUpDate && summaryPickUpTime){
                   $(".summary-pickupDateTime").empty().append(
                        summaryPickUpDate +  " " + summaryPickUpTime + " at the " 
                    );                        
                }
            }
        }

		//filter list to get only BOSS/BOPIS items
		var itemModels = $.grep(CHECKOUT_MODEL.itemModels, function(item, index){
								return (item.lineItemType==="Buy Online Pickup In Store") || 
										(item.lineItemType==="Buy Online Ship To Store");
							});

		//give up if no BOSS/BOPIS items
		if(!itemModels || (itemModels.length && itemModels.length===0)){
			return null;
		}

		 // Logic implemented with new  model
        $.each(itemModels, function(index,item){
            var itemStoreRelnObj = _getStore(item.lineItemId,item.lineItemType);
            var key = itemStoreRelnObj.storeId;
            if(!(key in storePickups)){
                storePickups[key] = {store: key, items: []};
                var store = _getStoreAddressById(key);
                storePickups[key].storeDetails = store;
                storePickups[key].BOPIS = false;
                storePickups[key].BOSS = false;
                storePickups[key].MIXED = false;
            }
            //pushing item to pickup from that store
            storePickups[key].items.push(item);

            //Setting flag for BOSS/BOPIS/MIXED
            if(!storePickups[key].BOPIS) 
            {
                storePickups[key].BOPIS = (item.lineItemType==="Buy Online Pickup In Store");
            }
            if(!storePickups[key].BOSS) 
            {
                storePickups[key].BOSS = (item.lineItemType==="Buy Online Ship To Store");
            }
            storePickups[key].MIXED = (storePickups[key].BOSS && storePickups[key].BOPIS)?true:false;


            //Setting flag for Pickup Person, Date, Time details, if any.
            if(CHECKOUT_MODEL.pickUpOptionModels){
				$.each(CHECKOUT_MODEL.pickUpOptionModels, function(index, item){
                    if(item.storeId===key){
                    		if(item.pickUpPersonModel && typeof(item.pickUpPersonModel.phone) !== "undefined"){
                    			item.pickUpPersonModel.phone = formatHelper.phone(item.pickUpPersonModel.phone);
                    		}
                        	storePickups[key].pickupPerson=item.pickUpPersonModel;
                        	storePickups[key].pickUpDate=item.pickUpDate;
                        	storePickups[key].pickUpTime=item.pickUpTime;
                        	if(item.estStartDeliveryDate) {
                        		storePickups[key].estStartDeliveryDate=formatHelper.date(item.estStartDeliveryDate).split(" ")[0]+" "+formatHelper.date(item.estStartDeliveryDate).split(" ")[1];
                        		var estStartDate = formatHelper.date(item.estStartDeliveryDate).split(" ")[0]+" "+formatHelper.date(item.estStartDeliveryDate).split(" ")[1];
                        		var estEndDate = null;
                        		if(item.estEndDeliveryDate){
                        			estEndDate = formatHelper.date(item.estEndDeliveryDate).split(" ")[0]+" "+formatHelper.date(item.estEndDeliveryDate).split(" ")[1];
                        		}
	    						storePickups[key].availableDate = (estStartDate===estEndDate? estStartDate:estStartDate + " - " + estEndDate);
                        	} else {
                        		storePickups[key].estStartDeliveryDate = item.estStartDeliveryDate;
                        	}
                        	
                        	return false;
                    }
                });
            }
        });
        
        //mixed stores will be displayed as BOSS ("we will notify you when all items ready")
        $.each(storePickups, function(key, store){
        	if(store.MIXED){
                store.BOPIS = false;
                store.BOSS = false;
            }
        });

        //add smart stores if available
        var ssp = getSingleStorePickupOptions();
        if(ssp){

        	//mark as BOPIS, only if all orig storePickups are BOPIS            	
            var allBOPIS = true;
        	$.each(storePickups, function(key, store){
	        	if(store.MIXED || store.BOSS){
	        		allBOPIS=false;
	        	}
        	});

			//TODO: until pickup schedule is populated for smart stores, mark so that pickup is not shown
			allBOPIS = false;

        	$.each(ssp, function(key, store){
                if(!storePickups[key]){
                	storePickups[key] = {
                		BOPIS: allBOPIS, //only mark if all stores are BOPIS
                		BOSS: false,
                		MIXED: false,
                		newSingleStoreOption: true,
                		items: [],
                		pickUpDate: null,
                		pickUpTime: null,
                		pickUpPerson: null,
                		store: key,
                		storeDetails: store
                	}
                }
            });
        }
		return storePickups;
	}

	function setApplianceSelectedDate(selectedDate){
		applianceSelectedDate = selectedDate;
	}

	function _getApplianceSelectedDate(){
		return applianceSelectedDate;
	}

	//used to retrieve the items linked to a particular addressIdentifier.
	function getItemsLinkedToAddressId(addrId){
		var itemIds = [];
		var STHItems = getItemsByType("STH");
		$.each(STHItems, function(index, item){
			if(item.selectedAddressIdentifier === addrId ){
				itemIds.push(item.itemId);
			}
			
		});
		return itemIds;
	}

	//used to prepare the address model from checkout model
	function getAddressesFromModel(){
		var addressModel = [];
		if(CHECKOUT_MODEL.addressModels){
			$.each(CHECKOUT_MODEL.addressModels, function(index, address){
				if(address.zipCode){
					var displayAddress = convertAddressModelForDisplay(address);
					addressModel.push(displayAddress);
				}						
				});
		}
		return addressModel;
	}

	function addAddress(address){
		if(address){
			if(address.address1){
				//convert address from display to model format
				address = restoreAddressModel(address);
			}
			//add new address to top of array
			CHECKOUT_MODEL.addressModels.unshift(address);				
		}
	}

	function replaceAddress(originalId, newAddress){
		if(CHECKOUT_MODEL.addressModels && newAddress){
			if(newAddress.address1){
				//convert address from display to model format
				newAddress = restoreAddressModel(newAddress);
			}

			$.each(CHECKOUT_MODEL.addressModels, function(index, address){
					if(address.addressIdentifier===originalId){
						CHECKOUT_MODEL.addressModels[index]=newAddress;
						CHECKOUT_MODEL.addressModels[index].previousAddressId = originalId;
						return false;
					}
			});
		}
	}

	function getNewAddressIdFromOld(addressId){
		$.each(CHECKOUT_MODEL.addressModels, function(index, address){
			if(addressId && (addressId===address.previousAddressId)){
				addressId = address.addressIdentifier;
				return false;//exit each
			}
		});
		return addressId;
	}
	
	// retrieve the suggested Address returned from server.
	function _getSuggestedAddress(addressModels){
		if(typeof(addressModels) !== 'undefined')	{
			return addressModels.postalDetails;
		}
	}

	/**
	 *Transform ship-to-home items ("STH" aka "Merchandize") in model for display
	 * in UI.
	 */
	function _generateShipToHomeItemsForDisplay(){
		var checkoutModelItems = [];
		//By default false
		checkoutModelItems.isMixedShipTypeMode = false;
		checkoutModelItems.displayMultipleShipMode = false
	
		//filter list to get only BOSH items
		var itemModels = $.grep(CHECKOUT_MODEL.itemModels||[], function(item, index){
								return (item.lineItemType==="Merchandize");
							});

		//give up if no BOSH items
		if(itemModels.length===0){
			return null;
		}

		//grab first ship type to compare later for shared ship
		var shipTypeCheck = itemModels[0].shipmentTypeModel.shipmentTypeId;
		var sharedShipType = true;
		var price = 0;
		$.each(itemModels, function(index, item){
	        if(item.shipmentTypeModel.shipmentTypeId !== shipTypeCheck || CHECKOUT_MODEL.useMultipleShippingMethods){
	        	sharedShipType = false;
	        }

			var displayItem =
				{
					"sku" : item.itemId,
					"title": item.description,
					"price": item.totalItemPrice,
					"discountPrice": item.specialOfferPrice,
					"quantity": item.quantity,
					"imageUrl": item.image,
					"brandName": item.brandName,
					"line1": item.line1,
					"line2": item.line2,
					"line3": item.line3,
					"line4": item.line4,
					"options": _getOptions(item, 
										   item.itemId, 
										   getSelectedShipMode(item)),
					//Added for the item list grouping based on address.
					"addressId": item.selectedAddressIdentifier || _getDefaultAddressId(),
					"shipMode": getSelectedShipMode(item),
					"lineItemId":item.lineItemId
				}

			displayItem = _getBlindsDetails(item, displayItem);
			if(CHECKOUT_MODEL.paymentMode == "expressCheckout")	{
				displayItem.addressId = displayItem.addressId?displayItem.addressId:_getDefaultAddressId();
			}
			/*if(CHECKOUT_MODEL.paymentMode == "expressCheckout")	{
				displayItem.addressId = _getDefaultAddressId();
			}*/
	        checkoutModelItems.push(displayItem);
		});

		// capture if there are multiple ship types among the items
		if(sharedShipType && checkoutModelItems.length>1){				
			//clone options to use as shared options
			checkoutModelItems.sharedShipOptions=$.parseJSON(JSON.stringify(checkoutModelItems[0].options));
			
			// Multiple Shipping Method Check
			checkoutModelItems.isMultipleEligible = _checkEligibleForMultiple(checkoutModelItems);
			
			// Calculate shipping charge for all items by adding up individual each option
			if($(".radio-btns-wrapper").length == 2) { // Execute for single shipping methods
				$.each(checkoutModelItems, function(index, option){
					$.each(checkoutModelItems[index].options, function(index1, option){
						if(checkoutModelItems[index].options[index1].selected == true) {
							if(checkoutModelItems[index].options[index1].price != false) {
								price = price + parseFloat(checkoutModelItems[index].options[index1].price.split("$")[1]);
								getOrderModel().totalShippingCharge = price.toFixed(2);
							}
						}							
					});					
				});
			}
			/*} else { // Execute for single shipping method
					$.each(checkoutModelItems, function(index, option){
						$.each(checkoutModelItems[index].options, function(index1, option){
							if(checkoutModelItems[index].options[index1].selected == true) {
								if(checkoutModelItems[index].options[index1].price != false) {
									price = price + parseFloat(checkoutModelItems[index].options[index1].price.split("$")[1]);
									getOrderModel().totalShippingCharge = price.toFixed(2);
								} else {
									getOrderModel().totalShippingCharge = "FREE";
								}
							}
							
						});					
					});
			}*/
			
			//Single shipping method adding all the shipment method values
			var shipmentMethodValues = _getSharedShipOption(checkoutModelItems);
			
			$.each(checkoutModelItems.sharedShipOptions, function(index, option){
				//removes associated sku for shared options
				if(shipmentMethodValues !== null && Object.keys(shipmentMethodValues).length > 0){
					$.each(Object.keys(shipmentMethodValues), function(index, sModeObj) {
						if(typeof sModeObj !== "undefined" && typeof shipmentMethodValues[sModeObj] !== "undefined" && sModeObj == option.id && shipmentMethodValues[sModeObj]){
							option.price = "$"+shipmentMethodValues[sModeObj].toFixed(2);		
						}
					});
			   }
				delete option.sku;	
			});
		}
		if(!sharedShipType){
		 checkoutModelItems.isMixedShipTypeMode = _checkEligibleForMultiple(checkoutModelItems);
		 }
		return checkoutModelItems;
	}
	
	function _checkEligibleForMultiple(itemsModel) {			
		var skuArray = [];				
		if(itemsModel) {
			$.each(itemsModel, function(index, item) {
				// check for multiple eligible
				if($.inArray(item.sku, skuArray) == -1) 	{
					// push sku to array
					skuArray.push(item.sku);
				}
			});
		}			
		return (skuArray.length > 1);
	}

	/**
	 *Transform appliance items in model for display
	 * in UI.
	 */
	function _generateItemsForDisplay(type){
		var checkoutModelItems = [];
	
		//filter list to get only BOSH items
		var itemModels = getItemsByType(type);

		//give up if no BOSH items
		if(itemModels.length===0){
			return null;
		}
		
		$.each(getItemsByType(type), function(index, item){
			if(item.deliveryZipCode){
				DELIVERY_ZIP = item.deliveryZipCode;
			}
		});
		$.each(itemModels, function(index, item){
			var addressId;
			if(item.selectedAddressIdentifier) {
				addressId = item.selectedAddressIdentifier;
			} else if(DELIVERY_ZIP) {
				addressId = _getDefaultAddressWithZipCode(DELIVERY_ZIP);//_getDefaultAddressId()
			}
			
			var displayItem =
				{
					"sku" : item.itemId,
					"title": item.description,
					"price": item.totalItemPrice,
					"discountPrice": item.specialOfferPrice,
					"quantity": item.quantity,
					"imageUrl": item.image,
					"brandName": item.brandName,
					"line1": item.line1,
					"line2": item.line2,
					"line3": item.line3,
					"line4": item.line4,
					//Added for the item list grouping based on address.
					"addressId": addressId,
					"lineItemId":item.lineItemId
				};
			
			if (item.deliveryZipCode) {
				displayItem.zipcode = item.deliveryZipCode;
			}

			displayItem = _getBlindsDetails(item, displayItem);
			
			if(type === "Appliance") {
				_getApplianceDisplayDetails(item, displayItem);
			}

	        checkoutModelItems.push(displayItem);
		});
		
		return checkoutModelItems;
	}

	function getDeliveryZipCode(){
		return DELIVERY_ZIP;
	}

	function getItemsGroupedByDestination(){
		var itemList = [];
		//delivery items
		getSTHItemsGroupedByAddress(itemList, STH_DISPLAY_ITEMS);
		getApplianceItemsGroupedByAddress(itemList, APP_DISPLAY_ITEMS);
		getBodfsItemsGroupedByAddress(itemList, BODFS_DISPLAY_ITEMS);
		
		//pickup store list
		var pickupStores = getPickupItemsFromModel();
		for(var storeNum in pickupStores){
			var store = pickupStores[storeNum];
			//convert items for display in summary
			var items = [];

			//keep track of same items to consolidate by destination (e.g. single store smartoverlay)
			var itemIndex = {};
			$.each(store.items, function(index, item){
				try{
					if(itemIndex[item.itemId]){
						var quantity = parseInt(itemIndex[item.itemId].quantity);
						var newQuantity = parseInt(item.quantity);
						itemIndex[item.itemId].quantity = (quantity + newQuantity) + "";
					}else{
						var displayItem = {
							"sku": item.lineItemId,
					        "title": item.description,
					        "price": item.totalItemPrice,
					        "discountPrice": item.specialOfferPrice ? item.specialOfferPrice : "",
					        "quantity": item.quantity,
					        "imageUrl": item.image,
					        "brandName": item.brandName,
					        "lineItemId":item.lineItemId
						};
						itemIndex[item.itemId]=displayItem;						
					}
				}catch(e){
					console.error("Error grouping items by destination", e);
				}
			});

			$.each(itemIndex, function(key, displayItem){
				items.push(displayItem);	
			});

			store.items = items;
			itemList.push(store);
		}
		//_setPromotionsToItemOnCheckout(itemList);
		console.debug(itemList);
		return itemList;
	}
	
	function _setPromotionsToItemOnCheckout(itemList){
		try{
			var promoModel = getModel().orderModel.promotionsModel;
			var ItemPromoRelation = {};
			if(promoModel){
				$.each(promoModel,function(i,promo){			
					if(promo.lineItemPromotion){
						$.each(promo.lineItemPromotion,function(i,lineItem){
							if(!(lineItem.appliedOn in ItemPromoRelation)){
								ItemPromoRelation[lineItem.appliedOn] = {lineItem: lineItem.appliedOn, promos: []};		                    
			                }
							ItemPromoRelation[lineItem.appliedOn].promos.push({"promoCode":promo.promoCode?(promo.promoCode.length>20?promo.promoCode.substr(0,20)+'...':promo.promoCode):
																											(promo.description.length>20?promo.description.substr(0,20)+'...':promo.description),
																				"promoCodeStatus":(promo.attached?"Not Applied":"Applied"),
																				"isItemLevel":(promo.promoType==="Item Level"?true:false),
																				"description":promo.longDescription||promo.description});
						});
					}
				});
			}
			
			$.each(itemList,function(i,groupedItem){	
				$.each(groupedItem.items,function(i,item){ 
					item.promotions = [];
					$.each(ItemPromoRelation, function(i,itemRel){
						if(itemRel.lineItem === item.lineItemId ){							
							item.promotions = itemRel.promos;
						}
					});
				});
				
			});
			
		}catch(e){
			console.error("Error from _setPromotionsToItemOnCheckout " + e );
		}
		
		return itemList;
		
	}


	/**
	 * Get items from model for display on right rail checkout item summary
	 * Items are grouped by ship-to address and the address details are applied
	 *
	 * returns 
	 * 	[{
	 *		addressId:"123545454",
	 *		items: [],
	 *		addressDetails:{
	 *						addressIdentifier:
	 *						firstName:
	 *						lastName:
	 *						....
	 *	         			}
	 *	  },
	 *  {
	 *	   .....
	 *    }
	 * ]
	 */
	function getSTHItemsGroupedByAddress(shipToList, shipDisplayItems){
		shipToList = shipToList || [];
	    try{
		    var addressList = {}, addressIdHash = [];

		    if(shipDisplayItems && shipDisplayItems.length){
			    for (var i = 0; i<shipDisplayItems.length; i++) {
			        var item = shipDisplayItems[i];
			        if (!(item.addressId in addressList)) {
			        	//create new ship-to address "bucket"
			            addressList[item.addressId] = 
			            	{
			            		STH: true, 
			            		addressId: item.addressId, 
								addressDetails: getAddressById(item.addressId),
			            		items: []
			            	};
			            shipToList.push(addressList[item.addressId]);
			            
			            if($.inArray(item.addressId, addressIdHash) == -1) {
			            	addressIdHash.push(item.addressId);
			            }
			        }
			        //add item to bucket
			        addressList[item.addressId].items.push(item);
			    }
			}
		    
		    $.each(shipToList, function(index, ItemsBasedOnDestination){
		    	ItemsBasedOnDestination.estArrivalDate = getSelectedEstArrivalDate(ItemsBasedOnDestination.items, addressIdHash);
		    	
		    });
	    }catch(e){
	    	console.error("Error grouping STH items by address", e);
	    }

	    return shipToList;
	}

	function getApplianceItemsGroupedByAddress(shipToList, shipDisplayItems){
		shipToList = shipToList || [];
		try{
		    var addressList = {},
		    	customAddressId,
		    	addressModels = getAddressesFromModel();

		    if(shipDisplayItems && shipDisplayItems.length){
			    for (var i = 0; i<shipDisplayItems.length; i++) {
			        var item = shipDisplayItems[i];
			        if (!(item.addressId in addressList)) {
			        	//create new ship-to address "bucket"
			        	customAddressId = $.grep(addressModels, function(value, index) {return value.zipcode === item.zipcode});
			        	if (customAddressId.length > 0) {
			        		customAddressId = customAddressId[0].addressIdentifier;
			        	}
			            addressList[item.addressId] = 
			            	{
			            		APPLIANCE: true,
			            		addressId: item.addressId,
								addressDetails: getAddressById(item.addressId) || getAddressById(customAddressId),
			            		items: []
			            	};
			            
			            var deliveryDate = null;
			            // get the date value from the selected radio button if it exists 
			            if($('.appliance-delivery-radios').is(':visible')) {
			            	var $selectedDateRadio = $(".appliance-delivery-radios").find("input:checked");
			            	var selectedDateRadio = $selectedDateRadio.attr("selecteddate") || $selectedDateRadio.val();
			            	deliveryDate = (selectedDateRadio.length > 0) ? selectedDateRadio : _getApplianceSelectedDate();
			            } else {
			            	if(item.deliveryDate) {
				            	deliveryDate = item.deliveryDate;
				            } else {
				            	var APPLIANCE_DATA = getApplianceDeliveryDates();
				            	if(APPLIANCE_DATA && APPLIANCE_DATA.earliestDeliveryDate) {
				            		deliveryDate = APPLIANCE_DATA.earliestDeliveryDate;
					            }
				            }
			            }
			            
			            if(deliveryDate) {
			            	var dateObj = new Date(deliveryDate);
			            	var dayNames = new formatHelper.DateFormatter().regional[""].dayNames;
			            	var dayNumber = new Date(dateObj.getTime() + dateObj.getTimezoneOffset()*60000).getDay();
			            	var dateString = dayNames[dayNumber] + " " + formatHelper.date(deliveryDate).toFormattedCase();
			            	addressList[item.addressId].deliveryDate = dateString;
			            }
			            
			            shipToList.push(addressList[item.addressId]);
			        }
			        //add item to bucket
			        addressList[item.addressId].items.push(item);
			    }
			}
		}catch(e){
			console.error("Error grouping appliances by address", e);
		}

		return shipToList;
	}

	function getBopisItemsGroupedByAddress(shipToList, shipDisplayItems){
		shipToList = shipToList || [];
	    try{
		    var addressList = {};

		    if(shipDisplayItems && shipDisplayItems.length){
			    for (var i = 0; i<shipDisplayItems.length; i++) {
			        var item = shipDisplayItems[i];
			        if (!(item.addressId in addressList)) {
			        	//create new ship-to address "bucket"
			            addressList[item.addressId] = 
			            	{
			            		BOPIS: true, 
			            		addressId: item.addressId, 
								addressDetails: getAddressById(item.addressId),
			            		items: []
			            	};
			            
			            shipToList.push(addressList[item.addressId]);
			        }
			        //add item to bucket
			        addressList[item.addressId].items.push(item);
			    }
			}
		}catch(e){
			console.error("Error grouping bopis items by address", e);
		}

	    return shipToList;
	}

	function getBossItemsGroupedByAddress(shipToList, shipDisplayItems){
		shipToList = shipToList || [];
	    try{
		    var addressList = {};

		    if(shipDisplayItems && shipDisplayItems.length){
			    for (var i = 0; i<shipDisplayItems.length; i++) {
			        var item = shipDisplayItems[i];
			        if (!(item.addressId in addressList)) {
			        	//create new ship-to address "bucket"
			            addressList[item.addressId] = 
			            	{
			            		BOSS: true, 
			            		addressId: item.addressId, 
								addressDetails: getAddressById(item.addressId),
			            		items: []
			            	};
			            
			            shipToList.push(addressList[item.addressId]);
			        }
			        //add item to bucket
			        addressList[item.addressId].items.push(item);
			    }
			}
	    }catch(e){
	    	console.error("Error grouping BOSS items by address", e);
	    }

	    return shipToList;
	}

	function getBodfsItemsGroupedByAddress(shipToList, shipDisplayItems){
		shipToList = shipToList || [];
	    try{
		    var addressList = {};

		    if(shipDisplayItems && shipDisplayItems.length){
			    for (var i = 0; i<shipDisplayItems.length; i++) {
			        var item = shipDisplayItems[i];
			        if (!(item.addressId in addressList)) {
			        	//create new ship-to address "bucket"
			            addressList[item.addressId] = 
			            	{
			            		BODFS: true, 
			            		addressId: item.addressId, 
								addressDetails: getAddressById(item.addressId),
			            		items: []
			            	};
			            
			            shipToList.push(addressList[item.addressId]);
			        }
			        //add item to bucket
			        addressList[item.addressId].items.push(item);
			    }
			}
	    }catch(e){
	    	console.error("Error grouping BODFS items by address", e);
	    }

	    return shipToList;
	}

	/**
	 * Get all items by type 
	 * @param type "Merchandize"|"Appliance"|"BOPIS"|"BOSS"
	 */
	function getItemRefsByType(typeArray){
		var items = [];
		var modelItemRefs = CHECKOUT_MODEL.orderModel.orderRef.itemIdRefs;
		try{
			for(var j=0; j<typeArray.length; j++){
				var type=typeArray[j];
				for(var i=0; i<modelItemRefs.length; i++){
					var item = modelItemRefs[i];
					if(type==="BOPIS" && item.itemType==="Buy Online Pickup In Store"){
						items.push(item);
					}else if(type==="BOSS" && item.itemType==="Buy Online Ship To Store"){
						items.push(item);
					}else if(type==="STH" && item.itemType==="Merchandize"){
						items.push(item);
					}else if(type==="Appliance" && item.itemType==="Appliance"){
						items.push(item);
					}
				}
			}
		}catch(e){
			console.error("Unable to get items refs for ", typeArray);
		}
		return items;
	}

	function getPaymentMode(){
		return CHECKOUT_MODEL.paymentMode;
	}

	function getPayPalModel(){
		return CHECKOUT_MODEL.paypalModel;
	}

	/**
	 * Returns an array of available pickup days with available hours per day
	 */
	function getPickupSlotsForStore(storeId){
		var storeSlots= [];

		if(CHECKOUT_MODEL.pickUpTime){//old model
			 $.each(CHECKOUT_MODEL.pickUpTime.store||[], function(index, entry){
			 	//convert store number to 4-char string
			 	if(typeof entry.storeNumber === "number"){
			 		entry.storeNumber += "";
			 		//prepend "0" if less than 4 digits
			 		for(var i=entry.storeNumber.length;i<4;i=entry.storeNumber.length){
			 			entry.storeNumber = "0" + entry.storeNumber;
			 		}
			 	}

			 	if(entry.storeNumber ===storeId){
			 		storeSlots = entry.pickupSchedule.pickupDay;
			 	}
			 });
		}else{
			$.each(CHECKOUT_MODEL.storeSearchModel, function(index, store){
				if(storeId===store.storeID){
					storeSlots = store.pickupSchedule.pickupDay;
					return false;
				}
			});
		}
		 
		return storeSlots;
	}

	function getPickUpOptionModels(){
		return CHECKOUT_MODEL.pickUpOptionModels || [];
	}

	function setPickUpOptionModels(newModel){
		CHECKOUT_MODEL.pickUpOptionModels = newModel;
		return newModel;
	}

	/**
	 * If single store pickup ("smart pickup") is available, applicable
	 * store id array will be returned.
	 * e.g. ["0564","6557","0563"]
	 */
	function getSingleStorePickupOptions(){
		var singlePickupStores = null;
		if(CHECKOUT_MODEL.orderModel.singleStorePickup){
			$.each(CHECKOUT_MODEL.orderModel.singleStorePickup, function(index, storeId){
				var store = _getStoreAddressById(storeId);
				if(store){
					if(!singlePickupStores){
						singlePickupStores = {};
					}
					singlePickupStores[storeId]=store;
				}
			});
		}
		return singlePickupStores;
	}

	function getApplianceDeliveryDates(){
		return CHECKOUT_MODEL.deliveryInfoModel || null;
	}

	function getAddressById (id){
		var match=null;
		if (CHECKOUT_MODEL.addressModels) {
			$.each(CHECKOUT_MODEL.addressModels, function(index, address){
				if(address.addressIdentifier===id){
					match=address;
					return false;
				}
			});
		}
		return match;
	}
	
	function getDefautAddress(){
		var selectedBillingAddress;
		if(checkoutModelAddresses && checkoutModelAddresses.length > 0){
    		$.each(checkoutModelAddresses,function(i,address){
    			if(address.selected){
    				selectedBillingAddress = address.addressIdentifier;
    			}
    		});
    		selectedBillingAddress = selectedBillingAddress?selectedBillingAddress:checkoutModelAddresses[0].addressIdentifier;
    	}
		return selectedBillingAddress;
	}
	
	
	function getSelectedEstArrivalDate(items, addressIdHash){
		var	estFromDate,
			estToDate;
		var selectedOptions = [];
		
		try{
			$.each(items, function(index, item){
				var options = item.options;
				$.each(options, function(i,option){
					if(option.selected){
						selectedOptions.push(option);
					}
				});
			});
			
			if (selectedOptions.length ){
				var estFromDateArr = [];
				var	estToDateArr = [];
				
				for (var i=0; i<selectedOptions.length; i++){
					estFromDateArr.push(formatHelper.parseDate(selectedOptions[i].estStartDeliveryDate));
					estToDateArr.push(formatHelper.parseDate(selectedOptions[i].estEndDeliveryDate));
				}
				
				estFromDateArr.sort(formatHelper.date_sort_asc);
				estToDateArr.sort(formatHelper.date_sort_desc);
				
				estFromDate = estFromDateArr[0]?formatHelper.date(formatHelper.formatDate('yy-mm-dd',estFromDateArr[0])):null;
				estToDate = estToDateArr[0]?formatHelper.date(formatHelper.formatDate('yy-mm-dd',estToDateArr[0])):null;
				// Code to find difference between two dates
				var estFromDateFormatted = new Date(formatHelper.formatDate('yy-mm-dd',estFromDateArr[0]));
				var estToDateFormatted = new Date(formatHelper.formatDate('yy-mm-dd',estToDateArr[0]));
				var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
				var days = Math.round(Math.abs((estToDateFormatted.getTime() - estFromDateFormatted.getTime())/(oneDay)));
				if(days > 7 && (addressIdHash.length == 1 
									&& addressIdHash[0] != null)){
					return null;
				}
			}			
			return (estFromDate===estToDate? estFromDate:estFromDate + " - " + estToDate );
		}catch(e){
			console.error("Unable to determine arrival date CheckoutModel.getSelectedEstArrivalDate", e);
			return false;
		}	
	}

	function getItemByField (field, value){
		var match=null;
		$.each(CHECKOUT_MODEL.itemModels, function(index, item){
				if(item[field]===value){
					match=item;
					return false;
				}
			})
		return match;
	}

	//Return the selected ship mode or default, if none selected
	function getSelectedShipMode(item){
		// makes an array of available shipmentCodes for the item.
		/*var shipModeCodesArray = $.grep(item.shipmentTypeModel.shipmentModels, function(shipMode, index){
			return (shipMode.shipmentModeCode);
		});*/
		var shipModeCodesArray = [];
		if(item.shipmentTypeModel && item.shipmentTypeModel.shipmentModels){
			$.each(item.shipmentTypeModel.shipmentModels, function(index, shipMode){
				shipModeCodesArray.push(shipMode.shipmentModeCode);
			});
		}
		
		var defaultShipMode = null;
		var selectedShipMode = null;
		$.each(item.shipmentTypeModel.shipmentModels, function(index, shipMode){
			if(shipMode.selected){
				selectedShipMode = shipMode.shipmentModeCode;	
			}
			if(shipMode.defaultShipMode){
				defaultShipMode = shipMode.shipmentModeCode;	
			}
		});			
		
		if(item.selectedShipmentMode){					
			if($.inArray(item.selectedShipmentMode, shipModeCodesArray) > -1 ){
				selectedShipMode = item.selectedShipmentMode;
			}
		}			
		return selectedShipMode||defaultShipMode||item.shipmentTypeModel.shipmentModels[0].shipmentModeCode;
	}

	//Set the selected ship mode or default, if none selected
	function setSelectedShipMode(mode, itemId){
		var item = getItemByField("itemId", itemId);
		$.each(item.shipmentTypeModel.shipmentModels, function(index, shipMode){
			if(mode===shipMode.shipmentModeCode){
				shipMode.selected = true;
			}else{
				shipMode.selected = false;
			}
		});
	}
	
	/**
	 * Retunrs the selected Address Identifier from the model
	 *
	 */
	function getSelectedAddressIdentifier(item){
		var previouslySelectedAddressId  = null,
			userSelAddressIdentifier = null;
		//[ in case of single item, multiple items having same shipgroups, multiple items having multiple shipgroups ] 
		// if shared Address & single Address, $(".shared-address-form .address-form::visible .addressIdentifier")
		// if shared Address & multiple Address, $(".shared-address-form .address-form::visible .address-select option:selected")
		// if ship to multiple Address & single Address Saved, $(".multiple-shipping-item-wrapper .address-form-placeholder[sku='123'] .addressIdentifier" ) 
		// if ship to multiple Address & multiple Address Saved, $(".multiple-shipping-item-wrapper .address-form-placeholder[sku='123'] .address-select option:selected" )
		
		var sharedAddressForm = $(".shared-address-form .address-form:visible");
		var multipleShippingForm = $(".multiple-shipping-item-wrapper .address-form-placeholder[sku="+item.itemId+"]");
		
		//work around for inStore flag thru update.do call issue . Remove paypal express if block when backend send instore flag on page load
		if(paymentMode === "expressPaypal" && item.selectedAddressIdentifier){
			userSelAddressIdentifier = item.selectedAddressIdentifier;
		}
		else if(sharedAddressForm.length > 0){
			userSelAddressIdentifier = $(sharedAddressForm).find(".addressIdentifier").length>0?
						$(sharedAddressForm).find(".addressIdentifier").val():$(sharedAddressForm).find(".address-select option:selected").attr("address-id");
		}else if(multipleShippingForm.length > 0){
			userSelAddressIdentifier = $(multipleShippingForm).find(".addressIdentifier").length>0?
						$(multipleShippingForm).find(".addressIdentifier").val():$(multipleShippingForm).find(".address-select option:selected").attr("address-id") ;
		}
		
		/*var addressArray = $.grep(CHECKOUT_MODEL.addressModels, function(address, index){
			return (address.addressIdentifier);
		});*/
		var addressArray = [];
		if(CHECKOUT_MODEL.addressModels){
			$.each(CHECKOUT_MODEL.addressModels, function(index, address){
				//Filtering P O Box addresses.
				if(!addressCheckForPoBox(address)){
					addressArray.push(address.addressIdentifier);
				}
			});
		}

		//get previously selected id in case user selected is undefined.
		if(item.selectedAddressIdentifier){
			if($.inArray(item.selectedAddressIdentifier, addressArray) > -1 ){
				previouslySelectedAddressId  = item.selectedAddressIdentifier;
			}
		}
		
		return userSelAddressIdentifier || previouslySelectedAddressId ;
	}

	/**
	 * Convert model address to display format
	 *
	 */
	function convertAddressModelForDisplay(address){
		var viewAddress = {};
		viewAddress.addressIdentifier = address.addressIdentifier;
		viewAddress.firstName = address.firstName;
	    viewAddress.lastName = address.lastName;
	    viewAddress.address1 = address.line1; 
	    viewAddress.address2 = address.line2;
	    viewAddress.city =  formatHelper.convertHtmlEntities(address.city);
	    viewAddress.state =  address.state;
	    viewAddress.zipcode =  address.zipCode;
	    viewAddress.country = address.country;
	    viewAddress.phone = formatHelper.phone(address.phone);
	    viewAddress.addressType = address.addressType;
	    viewAddress.selected = address["default"];
	    
	    return viewAddress;
	}

	/**
	 * Convert a display address to the model format
	 */
	function restoreAddressModel(address){
		var model = {}
		model.addressIdentifier = address.addressIdentifier;
		model.firstName = address.firstName;
		model.lastName = address.lastName;
		model.line1 = address.address1;
		model.line2 = address.address2;			
		model.city = formatHelper.convertHtmlEntities(address.city);			
		model.state = address.state;
		model.zipCode = address.zipcode;
		model.country = address.country||"US";
		model.phone = formatHelper.unformatPhone(address.phone);			
		model.addressType = address.addressType||"SB";
		model["default"] = address.selected||false;
		//model.isUpsAddressValidated = address.isUPSAddressValidated||false;

	    return model;
	}
	
	/*Update checkout Model with Suggested Address */
	
	function updateWithSuggestedAddress(suggestedAddress,address){
		var address = address.city?address:getAddressById(address);
		
		var suggestedAddressModel = {};
		suggestedAddressModel.addressIdentifier = address.addressIdentifier;
		suggestedAddressModel.firstName = address.firstName;
		suggestedAddressModel.lastName = address.lastName;
		suggestedAddressModel.address1 = suggestedAddress&&suggestedAddress.line1?suggestedAddress.line1:address.line1;
		suggestedAddressModel.address2 = suggestedAddress&&suggestedAddress.line2?suggestedAddress.line2:address.line2;			
		suggestedAddressModel.city = suggestedAddress&&suggestedAddress.city?suggestedAddress.city:address.city;			
		suggestedAddressModel.state = suggestedAddress&&suggestedAddress.state?suggestedAddress.state:address.state;
		suggestedAddressModel.zipcode = suggestedAddress&&suggestedAddress.zipCode?suggestedAddress.zipCode:address.zipCode;
		suggestedAddressModel.country = suggestedAddress&&suggestedAddress.country||"US";
		suggestedAddressModel.phone = formatHelper.unformatPhone(suggestedAddress&&suggestedAddress.phone?suggestedAddress.phone:address.phone);			
		suggestedAddressModel.addressType = address.addressType||"SB";
		suggestedAddressModel["default"] = address.selected||false;
		
		return suggestedAddressModel;
	}

	
	function createConfirmationItemList(orderConfirmationModel){
		console.debug("createConfirmationItemListModel()", orderConfirmationModel);
		var APPLIANCE="Appliance Delivery", BOPIS="Pick Up In Store", BOSH="Ship To Home", BOSS="Ship To Store", BODFS= "Express Delivery from Store";

		var orderTypeIndex = {
			APPLIANCE: createAPPLBuckets(orderConfirmationModel.itemModels),
			BOPIS: createBOPISBuckets(orderConfirmationModel.pickUpOptionModels),
			BOSH: createBOSHBuckets(//BOSH added based on address
						orderConfirmationModel.itemModels, 
						((orderConfirmationModel.addressModels && orderConfirmationModel.addressModels.length>0)
							||CHECKOUT_MODEL.addressModels)
					), 
			BOSS: createBOSSBuckets(orderConfirmationModel.pickUpOptionModels),
			BODFS: createBODFSBuckets(orderConfirmationModel.itemModels),
		};

		//sum up quantity of all items
		orderConfirmationModel.quantity = 0;

		//group items by order type (Ship To Home, BOPIS, Appliance, etc)
		$.each(orderConfirmationModel.itemModels, function(index, itemModel){
			var item = {
				itemType : itemModel.lineItemType,
				sku: itemModel.itemId,
				lineItemId: itemModel.lineItemId,
				title: itemModel.description,
				price: itemModel.unitPrice,
				itemTotal: itemModel.totalItemPrice,
				discountPrice: itemModel.specialOfferPrice,
				quantity: itemModel.quantity,
				imageUrl: itemModel.image,
				line1: itemModel.modelNumber,
				line2: itemModel.storeSku,
				line3: itemModel.itemId,
				productUrl: itemModel.webUrl,
				discounts: _checkLineItemPromo(itemModel.lineItemId,orderConfirmationModel.promotionsModel)
			}
			if(item.discountPrice)	{
				item.percent = getPercent(itemModel.unitPrice, itemModel.specialOfferPrice);
			}

			item = _getBlindsDetails(itemModel, item);

			orderConfirmationModel.orderModel.quantity+=parseInt(itemModel.quantity);

			switch(itemModel.lineItemType){
				case "Merchandize": //BOSH
					var bucket = getBucketByItemId(itemModel.itemId, orderTypeIndex.BOSH);
					bucket.items.push(item);
					bucket.estFromDate.push(formatHelper.parseDate(itemModel.fulfillmentModel.estStartDeliveryDate));
					bucket.estToDate.push(formatHelper.parseDate(itemModel.fulfillmentModel.estEndDeliveryDate));
					bucket.pickupPerson=itemModel.fulfillmentModel.firstName + " " + itemModel.fulfillmentModel.lastName;
					bucket.address1=itemModel.fulfillmentModel.addressLine1;
					bucket.address2=itemModel.fulfillmentModel.addressLine2;
					bucket.city=itemModel.fulfillmentModel.city;
					bucket.state=itemModel.fulfillmentModel.state;
					bucket.zip=itemModel.fulfillmentModel.zipCode;
					bucket.phone=itemModel.fulfillmentModel.primaryPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
					
					break;

				case "Buy Online Pickup In Store":
					var itemStoreReln = _getStoreFromConfirmation(itemModel.lineItemId,"Buy Online Pickup In Store",orderConfirmationModel);
					orderTypeIndex.BOPIS[itemStoreReln.storeId].items.push(item);
					break;

				case "Buy Online Ship To Store":
					var itemStoreReln = _getStoreFromConfirmation(itemModel.lineItemId,"Buy Online Ship To Store",orderConfirmationModel);
					orderTypeIndex.BOSS[itemStoreReln.storeId].items.push(item);
					break;

				case "Appliance":
					item.parts	=	_getPartsAndServices(itemModel);
					orderTypeIndex.APPLIANCE.items.push(item);
					break;
					
				case "Buy Online Deliver From Store":
					orderTypeIndex.BODFS.items.push(item);
					break;
					
				default:
					console.warn("Unrecognized order type:" + itemModel.lineItemType)
			}
		});
		
		var orderTypes = [];
		//STH/BOSH (one bucket per address id)
		for(var id in orderTypeIndex.BOSH){
			var orderType = orderTypeIndex.BOSH[id];
			//orderType.count = orderType.items.length == 1?orderType.items.length:null;
			try{
				if(!orderType.available){
					orderType.estFromDate.sort(formatHelper.date_sort_asc);
					orderType.estToDate.sort(formatHelper.date_sort_desc);
					
					var estFromDate = formatHelper.date(formatHelper.formatDate('yy-mm-dd',orderType.estFromDate[0]));
					var estToDate = formatHelper.date(formatHelper.formatDate('yy-mm-dd',orderType.estToDate[0]));
					orderType.available = (estFromDate===estToDate? estFromDate:estFromDate + " - " + estToDate )
				}
			}catch(e){
					console.error("Unable to determine arrival date", e);
					bucket.available =  "";
				}
			orderTypes.push(orderType);
		}

		//Appliance
		if(orderTypeIndex.APPLIANCE.items && orderTypeIndex.APPLIANCE.items.length>0){
			orderTypes.push(orderTypeIndex.APPLIANCE);	
		}
		for(var id in orderTypeIndex.BOPIS){
			var orderType = orderTypeIndex.BOPIS[id];
			orderTypes.push(orderType);
		}
		for(var id in orderTypeIndex.BOSS){
			var orderType = orderTypeIndex.BOSS[id];
			orderTypes.push(orderType);
		}
		if(orderTypeIndex.BODFS.items && orderTypeIndex.BODFS.items.length>0){
			orderTypes.push(orderTypeIndex.BODFS);	
		}

		return orderTypes;
	}

	function getErrors(){
		return CHECKOUT_MODEL.errorModel;
	}
	
	function poRegExp() {			
		return new RegExp("\\b[Pp]*([O0o][Ss][Tt])*\\.*\\s*[Oo0]*([Ff][Ff][Ii][Cc][Ee])*\\.*\\s*[Bb][Oo0][Xx]\\b");
	}
	
	function addressCheckForPoBox(addressList) {
		
		var addressPOCheck = false;
		if(addressList && addressList.length > 0)	{
			
			$.each(addressList, function(index, address) {
				// pattern to check P.O Box
				var pattern	 =	poRegExp(),
					address1 =	address.address1 || address.line1,
					address2 =	address.address2 || address.line2;
				
				if((address1 && address1.match(pattern))
						|| (address2 && address2.match(pattern))) {
					addressPOCheck = true;
				} else {
					addressPOCheck = false;
					return false;
				}
			});
		}
		return addressPOCheck;
	}
	
	function filterPoBoxAddresses(addressList){
		try{
			if(addressList && addressList.length > 0)	{
				var filteredAddressList = [] ;
				$.each(addressList, function(index, address) {
					// pattern to check P.O Box
					var pattern	 =	poRegExp(),
						address1 =	address.address1 || address.line1,
						address2 =	address.address2 || address.line2;
					
					if(!((address1 && address1.match(pattern))
							|| (address2 && address2.match(pattern)))) {
						filteredAddressList.push(address);
					} 
				});
				addressList = filteredAddressList;
			}				
		}catch(e){
			console.error("Error trying to filterPoBoxAddresses. ", e);
		}			
		return addressList;
	}

	function filterNonUSAddressesFromList(addressList){
		try{
			if(addressList && addressList.length > 0)	{
				var filteredAddressList = [] ;
				$.each(addressList, function(index, address) {												
					if(address.country === "US") {
						filteredAddressList.push(address);
					} 
				});
				addressList = filteredAddressList;
			}				
		}catch(e){
			console.error("Error trying to filterNonUSAddressesFromList. ", e);
		}			
		return addressList;
	}
	
	function compareObjects(obj1,obj2){
		function _compareObjects(obj1, obj2) {
	        return JSON.stringify(obj1)
	            === JSON.stringify($.extend(true, {}, obj1, obj2));
	    }
	    return _compareObjects(obj1, obj2) && _compareObjects(obj2, obj1);
	}

	

	function _getBlindsDetails(itemModel, item){
		var blinds = itemModel.configurationModel;
		if(blinds){
			//get blinds custom details
			var imageDir ="/MCCCheckout/static/TabletWebCheckout/tablet/images/";
			try{
				imageDir = IMG_DIR;
			}catch(e){
				console.error("Error setting image dir. Use default", e);
			}
			
			item.customTag = [
				{	
					"tagImage": imageDir + "CustomTag_65PX.png"
				}];
			item.configurationId = blinds.configurationId;
			var attributes = blinds.attributeModel;
			if(attributes){
				var displayAttributes = {};
				$.each(attributes, function(index, attr){
					if(attr.name==="Window Name" && attr.value){
						displayAttributes["blindsWindowName"]=attr.value;
					}else if(attr.name==="Width" && attr.value){
						displayAttributes["blindsWidth"]=attr.value.replace(' 0/0', 'in');
					}else if(attr.name==="Height" && attr.value){
						displayAttributes["blindsHeight"]=attr.value.replace(' 0/0', 'in');
					}else if(attr.name==="Color" && attr.value){
						displayAttributes["blindsColor"]=attr.value;
						if(attr.mediaUrl){
							item.colorSwatch = [{
								"colorSwatch": attr.mediaUrl
							}];	
						}
					}
				});
				
				item.blinds = [displayAttributes];
			}
		}
		return item;
	}
	
	/*
	 * Checks if a date is in deliveryCalendarModels
	 */
	function _isInApplianceDeliveryDates(deliveryDate, dates) {
		try{
			if ((dates.earliestDeliveryDate && dates.earliestDeliveryDate === deliveryDate) 
				|| (dates.earliestWeekendDate && dates.earliestWeekendDate === deliveryDate)) {
					return true;
			}
			if (dates.deliveryCalendarModels) {
				for (var i = 0; i < dates.deliveryCalendarModels.length; i++) {
					if (dates.deliveryCalendarModels[i].date === deliveryDate) {
						return true;
					}
				}
			}
		}catch(e){
			console.error("Error checking for the date in deliveryCalendarModels", e);
		}	
		return false;
	}
	
	/*
	 * Appends custom attributes to the displayItem model for Appliance items
	 */
	function _getApplianceDisplayDetails(item, displayItem) {
		try{
			if (item.fulfillmentModel && item.fulfillmentModel.deliveryDate) {
				var dates = getApplianceDeliveryDates();
				if (!_isInApplianceDeliveryDates(item.fulfillmentModel.deliveryDate, dates)) {
					displayItem.deliveryDate = null;
				} else {
					displayItem.deliveryDate = item.fulfillmentModel.deliveryDate;
				}
			}
			var requiredLineItem = item.partsAndServicesModel.requiredLineItems;
			if (requiredLineItem && typeof requiredLineItem.lineItem !== "undefined") {
				$.each(requiredLineItem.lineItem, function(i, lineItem) {
					if (requiredLineItem.lineItem[i].twoStepInstallation) {
						displayItem.twoStepInstall = true;
					}
				});
			}
		}catch(e){
			console.error("Error setting appliance specific display attributes", e);
		}
		return displayItem;
	}

	function getPercent(unitPrice, specialPrice) {
		var percent	 =	(unitPrice-specialPrice)/unitPrice;
		var roundOff =	Math.round(percent * 100); 
		return (roundOff < 1 ? 0 : roundOff);
	}
	
	function getBucketByItemId(itemId, buckets){
		for(var addressId in buckets){
			var bucket = buckets[addressId];
			if(bucket.itemIndex[itemId]){
				return bucket;
			}
		}
	}
	
	// Creating STH Bucket
	function createBOSHBuckets(items, addresses){
		var buckets = null;
		$.each(items, function(index, item){
			if(item.lineItemType==="Merchandize"){
				if(!buckets){
					buckets = {};
				}
				if(!buckets[item.selectedAddressIdentifier]){
					//create bucket
					var newEntry = {
						type: "Ship to Home",
						BOSH: true,
						available: null,//get from item est. start/end value			
						items: [],
						estFromDate: [],
						estToDate: [],
						itemIndex: {},
						
					}
					buckets[item.selectedAddressIdentifier]	= newEntry;
				}
				buckets[item.selectedAddressIdentifier].itemIndex[item.itemId]=item.itemId;	
			}
		});
		return buckets;
	}
	
	// Creating BOPIS Bucket
	function createBOPISBuckets(pickUpModel){

		var bopis = {};
		if(pickUpModel !== null)	{
			$.each(pickUpModel, function(index, pickup)	{				
				if(!pickup.shipToStore)	{
					pickup.storeNumber=pickup.storeId;
					if(!bopis[pickup.storeNumber]){
						bopis[pickup.storeNumber] = {};
						bopis[pickup.storeNumber].items			=	[];
						bopis[pickup.storeNumber].type					=	"Pick Up In Store";
						bopis[pickup.storeNumber].BOPIS					=	true;
						
						if(pickup.pickUpDate != null) {
							bopis[pickup.storeNumber].available	        =   pickup.pickUpDate; 
						} else {
							bopis[pickup.storeNumber].available			=	"Today";
						}
						bopis[pickup.storeNumber].storeNumber			=	"#"+pickup.storeId;
						bopis[pickup.storeNumber].pickupPerson			=	pickup.pickUpPersonModel?pickup.pickUpPersonModel.firstName+" "+pickup.pickUpPersonModel.lastName:"";
						bopis[pickup.storeNumber].pickupLocation		=	pickup.pickUpDesk;
						bopis[pickup.storeNumber].storeName				=	pickup.pickUpStoreNickName;
						if(pickup.pickUpStoreAddressModel && pickup.pickUpStoreAddressModel !== null)	{						
							if(pickup.pickUpStoreAddressModel.postalDetailsModel !== null)	{
								bopis[pickup.storeNumber].address1		=	pickup.pickUpStoreAddressModel.postalDetailsModel.addressLine1;
								bopis[pickup.storeNumber].address2		=	pickup.pickUpStoreAddressModel.postalDetailsModel.addressLine2;
								bopis[pickup.storeNumber].city			=	pickup.pickUpStoreAddressModel.postalDetailsModel.city;
								bopis[pickup.storeNumber].state			=	pickup.pickUpStoreAddressModel.postalDetailsModel.state;
								bopis[pickup.storeNumber].zip			=	pickup.pickUpStoreAddressModel.postalDetailsModel.zipCode;
							}
							if(pickup.pickUpStoreAddressModel.primaryPhoneModel !== null)	{
								bopis[pickup.storeNumber].phone			=	pickup.pickUpStoreAddressModel.primaryPhoneModel.number;
							}
						}
					}
				
				}				
			});
		}		
		return bopis;
	}
	
	// Creating BOSS Bucket
	function createBOSSBuckets(pickUpModel){

		var boss = {};
		if(pickUpModel !== null)	{
			
			$.each(pickUpModel, function(index, pickup)	{			
				if(pickup.shipToStore)	{
					pickup.shipToStore=pickup.storeId;
					if(!boss[pickup.shipToStore]){
						boss[pickup.shipToStore] = {};
						boss[pickup.shipToStore].items = [];
						boss[pickup.shipToStore].type					=	"Ship to Store";
						boss[pickup.shipToStore].BOSS					=	true;
						boss[pickup.shipToStore].available				=	formatHelper.date(pickup.estStartDeliveryDate) + " - " +
														formatHelper.date(pickup.estEndDeliveryDate);
						boss[pickup.shipToStore].storeNumber			=	"#"+pickup.storeId;
						boss[pickup.shipToStore].pickupPerson			=	pickup.pickUpPersonModel?pickup.pickUpPersonModel.firstName+" "+pickup.pickUpPersonModel.lastName:"";
						boss[pickup.shipToStore].pickupLocation			=	pickup.pickUpDesk;
						boss[pickup.shipToStore].storeName				=	pickup.pickUpStoreNickName;
						if(pickup.pickUpStoreAddressModel && pickup.pickUpStoreAddressModel !== null)	{
							if(pickup.pickUpStoreAddressModel.postalDetailsModel !== null)	{
								boss[pickup.shipToStore].address1		=	pickup.pickUpStoreAddressModel.postalDetailsModel.addressLine1;
								boss[pickup.shipToStore].address2		=	pickup.pickUpStoreAddressModel.postalDetailsModel.addressLine2;
								boss[pickup.shipToStore].city			=	pickup.pickUpStoreAddressModel.postalDetailsModel.city;
								boss[pickup.shipToStore].state			=	pickup.pickUpStoreAddressModel.postalDetailsModel.state;
								boss[pickup.shipToStore].zip			=	pickup.pickUpStoreAddressModel.postalDetailsModel.zipCode;
							}
							if(pickup.pickUpStoreAddressModel.primaryPhoneModel !== null)	{
								boss[pickup.shipToStore].phone			=	pickup.pickUpStoreAddressModel.primaryPhoneModel.number;
							}
						}
					}
					
				}			
			});
		}		
		return boss;
	}
	
	// Appliance Buckets
	function createAPPLBuckets(itemModels){

		var appliance = {};
		if(itemModels !== null)	{
			appliance.type			=	"Appliance Delivery";
			appliance.APPLIANCE		=	true;
			appliance.items			=	[];			
			$.each(itemModels, function(index, itemModel){
				if(itemModel.lineItemType === "Appliance")	{
					appliance.available				=	itemModel.fulfillmentModel.deliveryDate?
															formatHelper.dateMonthFormattor(itemModel.fulfillmentModel.deliveryDate):"";
					appliance.addressIdentifier 	=	itemModel.fulfillmentModel.addrIdentifier;
					appliance.deliveryPerson		=	itemModel.fulfillmentModel.firstName + " " + itemModel.fulfillmentModel.lastName;
					appliance.address1				=	itemModel.fulfillmentModel.addressLine1;
					appliance.address2				=	itemModel.fulfillmentModel.addressLine2;
					appliance.city					=	itemModel.fulfillmentModel.city;
					appliance.state					=	itemModel.fulfillmentModel.state;
					appliance.zip					=	itemModel.fulfillmentModel.zipCode;
					appliance.phone					=	itemModel.fulfillmentModel.primaryPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
					appliance.message           	=	itemModel.fulfillmentModel.deliveryInstruction;
					appliance.contactNumber			=	itemModel.fulfillmentModel.contactNumber;
				}
			});
		}		
		return appliance;
	}
	
	// get lineitem promotions
	function _checkLineItemPromo(lineItemId,promotionsModel){
		var discounts = [];
		if(promotionsModel){
			$.each(promotionsModel,function(index,promotionModel){
				if(promotionModel.lineItemPromotion){
					$.each(promotionModel.lineItemPromotion,function(index,lineItemPromotion){
						if(lineItemPromotion.appliedOn == lineItemId){
							var discount ={
									description		:	promotionModel.description,
									longDescription	:	promotionModel.longDescription,
									promoCode		:	promotionModel.promoCode,
									promotionType	:	promotionModel.promotionType
							};
							discounts.push(discount);
						}
					});
				}
			});
		}
		return discounts;
	}
	
	// get parts and services
	function _getPartsAndServices(itemModel) {
		
		var	partsAndServices=	[];
		try	{
			if(_propCheck(itemModel.partsAndServicesModel))	{
										
				// Required Details				
				if(_propCheck(itemModel.partsAndServicesModel.requiredLineItems))	{
					
					var requiredModel	=	itemModel.partsAndServicesModel.requiredLineItems;
					if(_propCheck(requiredModel.lineItem))	{
						
						$.each(requiredModel.lineItem, function(line, item){
							var partsItem =	{
								title		:	"Required Parts & Services",
								unitPrice	:	item.unitPrice ? item.unitPrice : "$0.00",
								totalPrice	:	item.totalItemPrice ? item.totalItemPrice : "$0.00",
								discountPrice: 	item.specialOfferPrice ? item.specialOfferPrice : "",
								quantity	:	item.quantity,
								line1		:	item.description
							};								
							partsAndServices.push(partsItem);
						});
					}
				}				
				// Optional Details
				if(_propCheck(itemModel.partsAndServicesModel.optionalLineItems))	{
					
					var optionalModel	=	itemModel.partsAndServicesModel.optionalLineItems;
					if(_propCheck(optionalModel.lineItem))	{
						
						$.each(optionalModel.lineItem, function(line, item){
							var partsItem =	{
								title		:	"Optional Parts & Services",
								unitPrice	:	item.unitPrice ? item.unitPrice : "$0.00",
								totalPrice	:	item.totalItemPrice ? item.totalItemPrice : "$0.00",
								discountPrice: 	item.specialOfferPrice ? item.specialOfferPrice : "",
								quantity	:	item.quantity,
								line1		:	item.description
							};								
							partsAndServices.push(partsItem);
						});
					}
				}				
				// Warranty Details
				if(_propCheck(itemModel.partsAndServicesModel.warrantyLineItems))	{
					
					var warrantyModel	=	itemModel.partsAndServicesModel.warrantyLineItems;					
					var partsItem		=	{};
					partsItem.title		=	"The Home Depot Protection Plan";
					
					if(_propCheck(warrantyModel.lineItem))	{
						partsItem.unitPrice		=	warrantyModel.lineItem.unitPrice ? warrantyModel.lineItem.unitPrice : "$0.00";
						partsItem.totalPrice	=	warrantyModel.lineItem.totalItemPrice ? warrantyModel.lineItem.totalItemPrice : "$0.00";
						partsItem.discountPrice	=	warrantyModel.lineItem.specialOfferPrice ? warrantyModel.lineItem.specialOfferPrice : "";
						partsItem.quantity		=	warrantyModel.lineItem.quantity;
						partsItem.line1			=	warrantyModel.lineItem.description;
					} 
					if(_propCheck(warrantyModel.message))	{
						partsItem.unitPrice		=	partsItem.unitPrice ? partsItem.unitPrice : "Included";
						partsItem.totalPrice	=	partsItem.totalPrice ? partsItem.totalPrice : "Included";
						partsItem.line2			=	warrantyModel.message.shortDescription;
						partsItem.quantity		=	"1";
					}
					partsAndServices.push(partsItem);
				}
			}
		} catch(e){
			console.error("Unable to build the parts and services object", e);
		}
		return partsAndServices;
	}
	
	// BODFS Buckets
	function createBODFSBuckets(itemModels){

		var bodfs = {};
		if(itemModels !== null)	{
			bodfs.type			=	"Express Delivery from Store";
			bodfs.BODFS		=	true;
			bodfs.items			=	[];			
			$.each(itemModels, function(index, itemModel){
				if(itemModel.lineItemType === "Buy Online Deliver From Store")	{
					bodfs.available				=	itemModel.fulfillmentModel.deliveryStartTime?formatHelper.date(itemModel.fulfillmentModel.deliveryStartTime):"";
					if(itemModel.fulfillmentModel.deliveryStartTime && itemModel.fulfillmentModel.deliveryEndTime) {
						bodfs.time					=	formatHelper.time(itemModel.fulfillmentModel.deliveryStartTime) + " AM - " +
						formatHelper.time(itemModel.fulfillmentModel.deliveryEndTime) + " PM";
					}
					bodfs.addressIdentifier 	=	itemModel.fulfillmentModel.addrIdentifier;
					bodfs.deliveryPerson		=	itemModel.fulfillmentModel.firstName + " " + itemModel.fulfillmentModel.lastName;
					bodfs.address1				=	itemModel.fulfillmentModel.addressLine1;
					bodfs.address2				=	itemModel.fulfillmentModel.addressLine2;
					bodfs.city					=	itemModel.fulfillmentModel.city;
					bodfs.state					=	itemModel.fulfillmentModel.state;
					bodfs.zip					=	itemModel.fulfillmentModel.zipCode;
					bodfs.phone					=	itemModel.fulfillmentModel.primaryPhone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
					bodfs.message				=	itemModel.fulfillmentModel.deliveryInstruction;
					bodfs.contactNumber			=	itemModel.fulfillmentModel.contactNumber;
				}
			});
		}		
		return bodfs;
	}

	//private functions

	/**
	 * Create options for an item based on ship type model
	 */
	function _getOptions(item, itemId, selectedShipmentMode){
		var shipTypeModel = item.shipmentTypeModel;
		var fulfillmentModel = item.fulfillmentModel;
		var options = [];
		var optionNotSelected = true;
		var atLeastOneSelected = false;
		//Defect #51706 added shipLengthOptions and showRadioOptions @nxk8802
		var shipLengthOptions = (shipTypeModel.shipmentModels.length === 1) ? false : true;
		$.each(shipTypeModel.shipmentModels, function(index, shipModel){
			var option = {
			        "sku": itemId,
			        "id": shipModel.shipmentModeCode,
			        "shipType": shipModel.description,
			        "estimatedDeliveryTime": shipModel.estimatedDeliveryTime,
			        "estEndDeliveryDate": shipModel.estEndDeliveryDate,
			        "estStartDeliveryDate": shipModel.estStartDeliveryDate,
					/*"timeLeftHrs": (fulfillmentModel && fulfillmentModel.timeLeftHrs)?fulfillmentModel.timeLeftHrs:shipModel.timeLeftHrs,
					"timeLeftMins": (fulfillmentModel && fulfillmentModel.timeLeftMins)?fulfillmentModel.timeLeftMins:shipModel.timeLeftMins,*/
					"timeLeftHrs": shipModel.timeLeftHrs,
					"timeLeftMins": shipModel.timeLeftMins,
			        "price": formatHelper.price(shipModel.charge),
			        "origPrice": parseFloat(shipModel.charge),
			        "selected": selectedShipmentMode?
			        					(shipModel.shipmentModeCode===selectedShipmentMode):
			        						shipModel.defaultShipMode,
			        "showRadioOptions": shipLengthOptions
			        };
			// keep track if any option is selected.
			atLeastOneSelected = atLeastOneSelected ||option.selected;

			try{
				if(shipModel.estStartDeliveryDate == shipModel.estEndDeliveryDate) {
					option.estArrivalDate = (shipModel.estStartDeliveryDate) ?
						formatHelper.date(shipModel.estStartDeliveryDate) : "";
				} else {
					var  startDate = (shipModel.estStartDeliveryDate) ? formatHelper.date(shipModel.estStartDeliveryDate) : "",
						 endDate = 	(shipModel.estEndDeliveryDate) ?formatHelper.date(shipModel.estEndDeliveryDate) : "",
						 appender = (shipModel.estStartDeliveryDate && shipModel.estEndDeliveryDate) ? " - " : "" ;
					option.estArrivalDate = startDate  + appender + endDate;
				}
			}catch(e){
				console.error("Unable to determine arrival date", e);
				option.estArrivalDate = "";
			}

			_addDescriptions(option,shipModel);
			options.push(option);
		});
		// if none of the object has 'selected' as 'true', default the options[0]'s 'selected' to true.
		if(!atLeastOneSelected){
			options[0].selected = true;
		}
		return options;
	}

	/**
	 * Apply descriptions for shipping options, if applicable
	 */
	 function _addDescriptions(option,shipModel){
		 try {
			 if(shipModel.shipmentModeLongDesc && (shipModel.shipmentModeLongDesc).trim()){
				 option.instructions = [];
				 var instructions = shipModel.shipmentModeLongDesc.split("||")
				 $.each(instructions,function(i,instruction){
					 option.instructions.push(instruction);
				 });
			 }
		} 
		catch(e) {
			console.error("There is no description to trim", e);
		}
		/*switch(option.shipType){
			case "Basic Home Shipping":
				option.line1 = "Delivered to your doorstep or first dry area";
				option.line2 = "Does not require a signature";
				option.line3 = "Does not include unpacking or removal";
				break;

			case "Threshold Home Shipping":
				option.line1 = "Delivered to your doorstep or first dry area";
				option.line2 = "Does not require a signature";
				option.line3 = "Does not include unpacking or removal";
				break;

			case "White Glove Home Shipping":
				option.line1 = "Delivered to the room of your choice";
				option.line2 = "Requires a signature of someone 18+";
				option.line3 = "Includes unpacking or removal";	
				break;

			case "Curb Side Home Shipping":
				option.line1 = "Delivered to the curb";
				option.line2 = "Does not require a signature";
				option.line3 = "Does not include unpacking or removal";
				break;
		}*/
	}

	function _getDefaultAddressWithZipCode(zipCode) {
		
		var match=null;
		if(CHECKOUT_MODEL.addressModels) {
			$.each(CHECKOUT_MODEL.addressModels, function(index, address){
				if(address.zipCode === zipCode){
					match=address.addressIdentifier;
					return false;
				}
			});
		}
		return match;
	}

	function _getDefaultAddressId(){
		var defaultAddressId = null;
		var addresses = CHECKOUT_MODEL.addressModels;
		if(addresses && addresses.length && addresses.length ===1){
			defaultAddressId = addresses[0].addressIdentifier;
		}else{
			$.each(addresses, function(index, address){
				if(address["default"]){
					defaultAddressId = address.addressIdentifier;
					return false;
				}
			})
			if(!defaultAddressId && addresses.length>0){
				//in case no address is marked as default, use the first
				defaultAddressId = addresses[0].addressIdentifier;
			}	
		}
		if(addressCheckForPoBox(CHECKOUT_MODEL.addressModels))	{
			defaultAddressId = "";
		}
		return defaultAddressId;
	}

	/**
	 * Determine if STH items all have same shipping options, if so
	 * mark as such, sum up shipping prices, and display single set 
	 * of ship options.
	 */
	function _getSharedShipOption(checkoutModelItems){
		var tempModel = {}, price=0;
		$.each(checkoutModelItems, function(index, option){
			$.each(checkoutModelItems[index].options, function(index1, option){
				var indexPrice = 0;
				if(option.price == false) {
					indexPrice = 0;
				}else{
					indexPrice = option.price;
					indexPrice = indexPrice.replace("$","");
					if(typeof indexPrice === "undefined" && indexPrice === ""){
						indexPrice=0;
					}
				}
				if(!tempModel[option.id]) tempModel[option.id] = 0;
				tempModel[option.id] += parseFloat(indexPrice);									 						
			});					
		});
		return tempModel;
	}


	//get Store Address.
	function _getStoreAddressById(id){
		var foundAddress;
		if(CHECKOUT_MODEL.storeSearchModel){
			$.each(CHECKOUT_MODEL.storeSearchModel, function(index, storeAddress){
					if(storeAddress.storeID===id){
						foundAddress=storeAddress;
					}
				})					
		}

		return foundAddress;
	}
	
	// get Pickup/Shipto Store from the ItemIdRefs object
    function _getStore(id,lineItemType){
        var itemStoreRelnObj = [];
        try{
        $.each(CHECKOUT_MODEL.orderModel.orderRef.itemIdRefs, function(index, item){
                if( (item.lineItemId===id) && (item.itemType === lineItemType) ){
                    itemStoreRelnObj=item;
                }
            });
        }
        catch(e){
        	console.log("Exception in getStore"+e);
        }
        return itemStoreRelnObj;
    }
    
 // get Pickup/Shipto Store from the ItemIdRefs object
    function _getStoreFromConfirmation(id,lineItemType,orderConfirmationModel){
        var itemStoreRelnObj = [];
        $.each(orderConfirmationModel.orderModel.orderRef.itemIdRefs, function(index, item){
                if( (item.lineItemId===id) && (item.itemType === lineItemType) ){
                    itemStoreRelnObj=item;
                }
            });
        return itemStoreRelnObj;
    }

	/**
	 * Used to merge CheckoutModel with Update response, it is almost identical
	 * to Jquery "extend()", but in addition to ignore undefined fields, it also
	 * ignores null fields (which can wipe out needed data)
	 *
	 * Two ways to use:
	 * //will update origObject
	 * 		_mergeObjects(origObject, newObject); 
	 * //this will create and return a new object without changing the originals
	 *		var differentNewObject = _mergeObjects({}, origObject, newObject);
	 */
	function mergeObjects(alwaysUpdateList) {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = true; //change to deep by default

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values, and value is not in alwaysUpdate list
			// function shouldAlwaysUpdate(obj){
			// 	if(alwaysUpdateList){
			// 		for(var j=0; j<alwaysUpdateList.length; j++){
			// 			if
			// 		}
			// 	}else{

			// 	}
				
			// }
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = mergeObjects( deep, clone, copy );

					// Don't bring in undefined or null values
					} else if ( copy !== undefined && copy !== null) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	}
	
	function _propCheck(value)	{
		return typeof(value) !== "undefined" && value !== null;
	}


	checkoutModel.setModel = setModel;
	checkoutModel.updateModel = updateModel;
	checkoutModel.removeModel = removeModel;
	checkoutModel.setUpdateAddressIdCheckoutItemsModel = setUpdateAddressIdCheckoutItemsModel;
	checkoutModel.setManualUpdateShipModeToCheckoutItemsModel = setManualUpdateShipModeToCheckoutItemsModel;
	checkoutModel.getModel = getModel;
	checkoutModel.getOrderId = getOrderId;
	checkoutModel.getOrderModel = getOrderModel;
	checkoutModel.getOrderConfirmation = getOrderConfirmation;
	checkoutModel.getItemCount = getItemCount;
	checkoutModel.getItemQuantityCount = getItemQuantityCount;
	checkoutModel.getEmailAddress = getEmailAddress;
	checkoutModel.getEmailSubscribed = getEmailSubscribed;
	checkoutModel.isGuest = isGuest;
	checkoutModel.directPayment = directPayment;
	checkoutModel.setApplianceSelectedDate = setApplianceSelectedDate;
	checkoutModel.inStore = inStore;
	checkoutModel.isPLCCOrder = isPLCCOrder;
	checkoutModel.getShipmentTypeDescriptionFromCode = getShipmentTypeDescriptionFromCode;
	checkoutModel.hasDETAShippingOption = hasDETAShippingOption;
	checkoutModel.getPaymentType = getPaymentType;
	checkoutModel.prepareOrderSummary = prepareOrderSummary;
	checkoutModel.prepareOrderSummaryForDesktop = prepareOrderSummaryForDesktop;
	checkoutModel.getItemTypes = getItemTypes;
	checkoutModel.getItemsByType = getItemsByType;
	checkoutModel.getShipToHomeItemsForDisplay = getShipToHomeItemsForDisplay;
	checkoutModel.isShipToMultiple = isShipToMultiple;
	checkoutModel.getPickupItemsFromModel = getPickupItemsFromModel;
	checkoutModel.getItemsLinkedToAddressId = getItemsLinkedToAddressId;
	checkoutModel.getAddressesFromModel = getAddressesFromModel;
	checkoutModel.addAddress = addAddress;
	checkoutModel.replaceAddress = replaceAddress;
	checkoutModel.getNewAddressIdFromOld = getNewAddressIdFromOld;
	checkoutModel.getDeliveryZipCode = getDeliveryZipCode;
	checkoutModel.getItemsGroupedByDestination = getItemsGroupedByDestination;
	checkoutModel.getSTHItemsGroupedByAddress = getSTHItemsGroupedByAddress;
	checkoutModel.getApplianceItemsGroupedByAddress = getApplianceItemsGroupedByAddress;
	checkoutModel.getBopisItemsGroupedByAddress = getBopisItemsGroupedByAddress;
	checkoutModel.getBossItemsGroupedByAddress = getBossItemsGroupedByAddress;
	checkoutModel.getBodfsItemsGroupedByAddress = getBodfsItemsGroupedByAddress;
	checkoutModel.getItemRefsByType = getItemRefsByType;
	checkoutModel.getPaymentMode = getPaymentMode;
	checkoutModel.getPayPalModel = getPayPalModel;
	checkoutModel.getPickupSlotsForStore = getPickupSlotsForStore;
	checkoutModel.getPickUpOptionModels = getPickUpOptionModels;
	checkoutModel.setPickUpOptionModels = setPickUpOptionModels;
	checkoutModel.getSingleStorePickupOptions = getSingleStorePickupOptions;
	checkoutModel.getApplianceDeliveryDates = getApplianceDeliveryDates;
	checkoutModel.getAddressById = getAddressById;
	checkoutModel.getDefautAddress = getDefautAddress;
	checkoutModel.getSelectedEstArrivalDate = getSelectedEstArrivalDate;
	checkoutModel.getItemByField = getItemByField;
	checkoutModel.getSelectedShipMode =getSelectedShipMode ;
	checkoutModel.setSelectedShipMode = setSelectedShipMode;
	checkoutModel.getSelectedAddressIdentifier = getSelectedAddressIdentifier;
	checkoutModel.convertAddressModelForDisplay = convertAddressModelForDisplay;
	checkoutModel.restoreAddressModel = restoreAddressModel;
	checkoutModel.updateWithSuggestedAddress = updateWithSuggestedAddress;
	checkoutModel.createConfirmationItemList = createConfirmationItemList;
	checkoutModel.getErrors = getErrors;
	checkoutModel.poRegExp = poRegExp;
	checkoutModel.addressCheckForPoBox = addressCheckForPoBox;
	checkoutModel.filterPoBoxAddresses = filterPoBoxAddresses;
	checkoutModel.filterNonUSAddressesFromList = filterNonUSAddressesFromList;
	checkoutModel.compareObjects = compareObjects;
 
	checkoutModel._generateItemsForDisplay	 = _generateItemsForDisplay;
	checkoutModel._generateShipToHomeItemsForDisplay = _generateShipToHomeItemsForDisplay;
	checkoutModel.setPromotionsToItemOnCheckout = _setPromotionsToItemOnCheckout;
	checkoutModel.getOptions= _getOptions;

	// _getSuggestedAddress	
	// _checkEligibleForMultiple
	// _getBlindsDetails
	// _isInApplianceDeliveryDates



	return checkoutModel;

}));
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {   
    // factory;
    define('analytics', ['jquery', 'thdOnlineCommon', 'checkout/CheckoutModel'], factory);
  } else {
    root.analytics = factory(jQuery, thdOnlineCommon, TABCOM.CheckoutModel);
  }
}(this, function ($, thdOnlineCommon, checkoutModel) {

	window.digitalData = window.digitalData||{};
	window._T = window._T||{};

var analytics						=	analytics || {},
	cookieUtil 						= 	thdOnlineCommon.cookie.channel,
	isGuest 						= 	cookieUtil.getCookieCrumb(cookieUtil.getCookie("THD_PERSIST"), "C46") == "guest",
	dcMccThrottle				=	cookieUtil.getCookie("MCC_THROTTLE"),
	PAGENAME_HASH			=	["checkout","shopping cart"],
	DELIVERY_OPT_HASH		=	["ShipToHome","DirectDelivery","DeliverFromStore"],
	MCC_THROTTLE_HASH	=	["throttle:mcc:dw:sept 2015"];

analytics = {
		
	pageAction : this.pageAction || {},
	init : function() {
		this.pageName = pageName();
		if(this.pageName !== "checkout")	{
			this.setPageData();
		}
		this.setPageLoadError();
		if($.inArray(this.pageName,PAGENAME_HASH) == -1)	{
			this.dataReady();
		}
		digitalData.cart = digitalData.cart || {};
		digitalData.cart.price = digitalData.cart.price || {};
	},
	
	setPageData : function() {
		digitalData.page	=	{
			pageInfo :	{
				pageName	:	siteName + ">" + this.pageName,
				pageType	:	siteName,
				abTest		:	""
			},
			category : {
				primaryCategory	:	siteName
			}
		}
		
		//pageLoadEvent not to be set on MAML pages
		if (siteName != MAML_SITE_NAME) {
			// for cart
			if(this.pageName == "shopping cart")	{
				digitalData.page.pageInfo.pageLoadEvent	=	"cart view";
			} else {
				digitalData.page.pageInfo.pageLoadEvent	= 	(this.pageName === "sign in" && siteName === "checkout" ? siteName+" "+this.pageName : siteName);
			}
			// for fullsite feature
			var dcVariant = "";
			if(typeof MCC_FULLSITE_FEATURE != 'undefined' && MCC_FULLSITE_FEATURE && (dcMccThrottle && dcMccThrottle != ""))	{
				dcVariant	=	MCC_THROTTLE_HASH[0];
			}
			digitalData.page.pageInfo.variant	=	dcVariant;
		}
		
		if (this.pageName == "sign in" && siteName !== "checkout") {
			digitalData.page.category.subCategory1 	= siteName;
		} else {
			var pageName = this.pageName.contains("orders & purchases") || this.pageName.contains("my lists") ? this.pageName.split(">")[0] : this.pageName;
			digitalData.page.category.subCategory1 = siteName + ">" + pageName;
		}
		digitalData.page.category.subCategory2 = siteName + ">" + this.pageName;
	},
	
	dataReady : function() {
		try {
			if(typeof require !== "undefined"){
				require(['digitalData'], function(globalDDO){
					globalDDO.init();
				});				
			}else{
				THD.Analytics.GlobalDDO.init();
			}

			
		} catch(e) {
			console.error("digitalData GlobalDDO error");
		}
	},
	
	eventReady : function(obj) {
		try {
			digitalData.eventDataReady(digitalData.event.push(obj));
		} catch(e) {}
	},
	
	// Page Load Errors
	setPageLoadError : function(errorMessage) {
		
		if(analytics.pageName === 'registration' || analytics.pageName === 'checkout' || analytics.pageName === 'sign in') {	
			
			if(errorMessage){
				var error =errorMessage;
			}
			else{
				var error = analytics.pageName === 'checkout' ? $(".pod-errors .checkout-error-message").text().trim() : $(".pod-errors h3").text().trim();
			}
			
			if(typeof error == 'string' && error != "") {
				digitalData.page.error				=	digitalData.page.error || {};
				digitalData.page.error.errorMessage	=	error;
				if(errorMessage){
					digitalData.page.error.errorType="advisory";
				}
			}
		}
	},
	
	setBasicDC : function(loadEvent, pageName) {
		
		digitalData.page	=	{
			pageInfo :	{
				pageName			:	siteName + ">" + pageName,
				pageLoadEvent	:	loadEvent,
				pageType			:	siteName,
				abTest				:	""
			},
			category : {
				primaryCategory:	siteName,
				subCategory1		:	siteName + ">" + pageName,
				subCategory2		:	siteName + ">" + pageName,
			}
		}
		// for fullsite feature
		var dcVariant = "";
		if(MCC_FULLSITE_FEATURE && (dcMccThrottle && dcMccThrottle != ""))	{
			dcVariant	=	MCC_THROTTLE_HASH[0];
		}
		digitalData.page.pageInfo.variant	=	dcVariant;
		
		// call dataReady()
		analytics.dataReady();
	},
	
	setEvent : function(eventCategory, eventName) {		
		var eventObject = {
			category : {
				primaryCategory : (eventCategory == "btn" ? "button submission" : eventCategory)
			},
			eventInfo : {
				eventName : eventName
			}
		};
		if(eventCategory == "type ahead")	{
			eventObject.eventInfo.eventName 		=	"type ahead selection";
			eventObject.eventInfo.eventMessage 	=	analytics._typeAheadEvent(eventName);
		}
		// call eventReady()
		analytics.eventReady(eventObject);
	},
	
	event : {
		signIn : function() {
			var validSignIn = {
				category : {
					primaryCategory : "authentication"
				},
				eventInfo : {
					eventName : siteName + " login",
					user : {
						profile : {
							action : "login"
						}
					}
				}
			};
			analytics.eventReady(validSignIn);
		},
		
		register : function(event) {
			var validRegister = {
				category : {
					primaryCategory : "authentication"
				},
				eventInfo : {
					eventName : (event == "confirmation" ? "order confirmation registration" : "action registered"),
					user : {
						profile : {
							action : "register"
						}
					}
				}
			};
			analytics.eventReady(validRegister);
		},
		
		setAccountEvents:function(){
	        var regBtnSub ={};
	        regBtnSub.category = {};
	        regBtnSub.category.primaryCategory = "button submission";
	        regBtnSub.eventInfo = {};
	        regBtnSub.eventInfo.eventName ="registration";
	        regBtnSub.user = {};
	        regBtnSub.user.profile = {};
	        regBtnSub.user.profile.action ="register";
	        analytics.eventReady(regBtnSub);
		},
		
		 // set payment method event
		 paymentMethodEvent : function(requestObj) {
			// payment method as standard paypal
			digitalData.cart = digitalData.cart || {};
			digitalData.cart.price = digitalData.cart.price || {};
			if(requestObj === "ppl")	{
				digitalData.cart.price.paymentMethod = requestObj;
			}
			// payment method as gift card
			else if(requestObj.giftCards != null && requestObj.giftCards.length > 0)	{
				digitalData.cart.price.paymentMethod = "gift card";
			} 
			// Payment Card Type
			else if(requestObj.paymentCard != null && requestObj.paymentCard.paymentType != null)	{
				digitalData.cart.price.paymentMethod = requestObj.paymentCard.paymentType;
			}
			// Analytics - To Register
			if(requestObj.emailId != null && requestObj.password != null && requestObj.confirmPassword != null) {
				digitalData.user.profile.action = "register";
			}
		}
	},
	
	// capturing page level info for analytics
	checkoutPageAnalytics : function() {
		
		if($(".shipping-option-pane").parent().hasClass("slick-active")) {
			// For STH
			analytics.setBasicDC("shipping info", "shipping information");
		} 
		else if($(".pickup-pane").parent().hasClass("slick-active")) {
			// For BOSS / BOPIS
			analytics.setBasicDC("boss/bopis pickup options", "boss/bopis pickup options");
		} 
		else if($(".appliance-pane").parent().hasClass("slick-active")) {
			// For Appliance
			analytics.setBasicDC("appliance delivery", "appliance delivery address");
		} 
		else if($(".schedule-delivery-pane").parent().hasClass("slick-active")) {
			// For BODFS
			analytics.setBasicDC("bodfs schedule delivery", "bodfs schedule delivery");
		} 
		else if($(".payment-pane").parent().hasClass("slick-active")) {
			// For Payment
			analytics.setBasicDC("payment method", "payment method");
			// Payment page init errors
			if(analytics.pageAction.payment && analytics.pageAction.payment.length > 0) {
				$.each(analytics.pageAction.payment, function(index, error) {
					analytics.setError(error);
				});
			}
		}	
	},
	
	setError : function(error,primaryCategory) {
		var errorNoPageLoad = {
			category : {
				primaryCategory : primaryCategory? primaryCategory:"error"
			},
			eventInfo : {
				eventName : "error",
				errorMessage : error
			}
		};
		if(primaryCategory){
			errorNoPageLoad.eventInfo.errorType="error";
		}
		analytics.eventReady(errorNoPageLoad);
	},
	
	setAdvisory : function(advisoryMessage) {
		var advisoryNoPageLoad = {
			category : {
				primaryCategory : "sys msg"
			},
			eventInfo : {
				eventName : "advisory",
				errorMessage : advisoryMessage,
				errorType :"advisory"
			}
		};		
		analytics.eventReady(advisoryNoPageLoad);
	},
	
	setPrimaryErrorEvent : function(evt, error) {
		if(digitalData.event)	{
			analytics.setError(error);
		}
	},
	
	setTransactionInfo : function(orderDetails, paymentDetails) {
		
		if(!paymentDetails) {
			return;
		}
		
		var baseAmount = "";
		if(orderDetails.applianceItemGrandTotal && orderDetails.merchandiseItemsGrandTotal)	{
			baseAmount	=	Number(orderDetails.merchandiseItemsGrandTotal) + Number(orderDetails.applianceItemGrandTotal);
		} else {
			baseAmount	=	(orderDetails.applianceItemGrandTotal ? orderDetails.applianceItemGrandTotal : orderDetails.merchandiseItemsGrandTotal);
		}
		
		digitalData.transaction	=	{			
			// Order Id
			transactionID		:	orderDetails.orderId,	
			// Price & Total
			price : {
				basePrice			:	baseAmount,
				shipping			:	orderDetails.totalShippingCharge && orderDetails.totalShippingCharge != "0" ? orderDetails.totalShippingCharge : "",
				tax					:	orderDetails.totalSalesTax ? orderDetails.totalSalesTax : orderDetails.salesTax,
				transactionTotal:	orderDetails.orderAmount
			},
			// Billing Address
			profile : {
				address : {
					line1				:	paymentDetails.addressLine1,
					line2				:	paymentDetails.addressLine2,
					city				:	paymentDetails.city,
					stateProvince:	paymentDetails.state,
					postalCode	:	paymentDetails.zipCode,
					country			:	paymentDetails.country
				}
			}
		};

		// Item Details
		digitalData.transaction.item = [];
		var orderModel = checkoutModel.getModel();
		
		if(orderModel != null && orderModel.itemModels != null)	{
			
			$.each(orderModel.itemModels, function(index, item) {
				// Push to Item Array
				digitalData.transaction.item.push(analytics._setItem('checkout', item));
			});
		}
	},

	// Cart - items in page
	setCartItems : function(cartModel) {
		
		var hdppEligible, hdppDisplayPlan = false;
		if(typeof(cartModel) != "undefined" && cartModel != null)	{
			
			digitalData.cart = {				
				cartID : cartModel.orderId,					
				price : {
					cartTotal : cartModel.cartTotal
				}
			};		
			// Item Details 
			digitalData.cart.item = [];	
			if(typeof(cartModel.itemModels) != "undefined" 
							&& cartModel.itemModels != null)	{
				
				$.each(cartModel.itemModels, function(index, item) {			
					// Push to Item Array	
					digitalData.cart.item.push(analytics._setItem('cart', item));
					
					// push hdpp item if eligible and added
					if(item.hdppEligible) {
						hdppEligible = true;
						if(item.showConfirmation)	{
							var hdppItem				=	item.warrantyLineItems.lineItem[0];
							hdppItem.superSKU 	=	item.itemId;
							digitalData.cart.item.push(analytics._setItem('cart', hdppItem));
						} else {
							hdppDisplayPlan = true;
						}
					}
				});
				
				// hdpp display event
				if(hdppEligible) {
					analytics.hdppDisplayEvent("", hdppDisplayPlan);
				}
			}
			analytics.firstLoad = true;
			// call dataReady()
			if(!cartModel.isATC) { analytics.dataReady(); }
		}
	},
	
	// Cart - update / remove/ fulfillment change
	setCartModification : function(itemObject) {
		
		if(itemObject)	{
			var eventObject = {
				category : {
					primaryCategory : "cart view modification"
				},
				eventInfo : {
					eventName : itemObject.type == "partsUpdate" ? "cart add" : itemObject.type 
				},
				item : []
			};
			eventObject.item.push(analytics._buildCartItem(itemObject));
			// call eventReady()
			analytics.eventReady(eventObject);
		}
	},
	
	setButtonEvent : function(evt, action) {
		var eventObject = {
			category : {
				primaryCategory : "button submission"
			},
			eventInfo : {
				eventName : analytics._buttonEvent(action)
			}
		};
		// call eventReady()
		analytics.eventReady(eventObject);
	},
	
	setAddToCartEvent : function(evt, items, cartModel) {
		if(digitalData.event)	{
			var addToCart = {
				category : {
					primaryCategory : "add to cart click"
				},
				eventInfo : {
					eventName	:	"cart add"
				},
				item :	[]
			};
			$.each(items, function(index, eachItem){
				if(eachItem) {
					var atcItem = analytics._buildCartItem(eachItem);
					// pushing atcLocation using flag
					if(analytics.bssOverlayFlag)	{
						atcItem.atcLocation = []; 
						atcItem.atcLocation.push("bss");
						analytics.bssOverlayFlag = false;
					}
					addToCart.item.push(atcItem);
				}
			});
			// cart model from ATC
			cartModel.isATC = true;
			analytics.setCartItems(cartModel);
			
			// call eventReady()
			analytics.eventReady(addToCart);
		}
	},
	
	setRemoveEvent : function(evt, removeItem){
		if(digitalData.event)	{
			analytics.setCartModification(analytics._buildForModify(2, removeItem));
		}
	},
	
	setPartsOverlayEvent : function(evt, eventAction, itemId)	{
		if(digitalData.event)	{
			var activeTab = $(".parts-services-tabs").find("input[name=tabs]:checked").attr("id");
			if(activeTab == "tab1")	{
				eventAction	=	"appliance required parts and services";
			} else if(activeTab == "tab2")	{
				eventAction	=	"appliance optional parts";
			} else if(activeTab == "tab3")	{
				eventAction	=	"appliance protection plan";
			}
			if(eventAction)	{
				var eventObject = {
					category : {primaryCategory : "overlay"},
					eventInfo : {eventName : eventAction}
				};
				if(itemId)	{
					eventObject.item = [itemId];
				}
				// call eventReady()
				analytics.eventReady(eventObject);
			}
		}
	},
	
	setPartsAndServicesOptOut : function(evt) {
		if(digitalData.pageDataReady)	{
			digitalData.pageDataReady("parts and services optout");
		}
	},
	
	setPartsAndServicesChangeEvent : function(evt, request, cartModel) {
		if(digitalData.event && cartModel.itemModels)	{
			var itemModel = analytics.getCartItemModel(cartModel, request.lineItemId);
			var itemObject	=	{
				type 						: 	analytics._modifyEvent(5),
				sku 						:	itemModel.itemId,
				quantity				:	itemModel.quantity,
				price						:	itemModel.totalItemPrice,
				fulfillmentMethod 	:	request.ffm,
				fulfillmentLocation	:	request.ffl,
				action					:	"ATC"
			};
			analytics.setCartModification(itemObject);
		}
	},
	
	setApplianceOverlayUpdateEvent : function(evt, cartModel, lineItemId){
		if(digitalData.event)	{
			var itemModel = analytics.getCartItemModel(cartModel, lineItemId);
			analytics.setCartModification(analytics._buildForModify(1, itemModel));
		}
	},
	
	_setItem : function(type, item) {
		
		var newItem	=	{
			quantity	:	item.quantity,
			price		:	{
				basePrice	:	typeof(item.specialOfferPrice) != "undefined" ? item.specialOfferPrice : item.totalItemPrice
			},
			// Product Info
			productInfo	:	{
				sku						:	item.itemId,
				superSKU				:	item.partNumber || item.superSKU,
				productName			:	item.productLabel || item.description,
			},
		};
		if(type === 'checkout') {
			
			newItem.productInfo.fulfillmentMethod	=	analytics.getItemTypes(item.lineItemType);				
			//analytics for IR on confirmation page
			if(item.priceDescriptionModel){
				$.each(item.priceDescriptionModel, function(index, priceDescription) {
					if(priceDescription.shortDescription==="IR"){
						newItem.price.priceType="price displayed: instant rebate strike through";
						return false;
					}
				});
			}			
			
			if(item.shipmentTypeModel)	{
				newItem.price.shippingMethod	=	item.shipmentTypeModel['shipmentTypeDescription'];
			}
		} else if(type === 'cart')	{
			
			$.each(item.fulfillmentModel, function(index, fulfillment) {
				// check selected is true
				if(fulfillment.selected)	{
					
					if($.inArray(fulfillment.fulfillmentMethod, DELIVERY_OPT_HASH) > -1)	{							
						var estDate;
						if(fulfillment.fulfillmentMethod == "ShipToHome")	{
							estDate	=	fulfillment.estEndDeliveryDate ? fulfillment.estEndDeliveryDate : "";
						}
						else if(fulfillment.fulfillmentMethod == "DirectDelivery")	{
							estDate	=	fulfillment.earliestAvailableDate ? fulfillment.earliestAvailableDate : "";
						} 
						else if(fulfillment.fulfillmentMethod == "DeliverFromStore")	{
							estDate	=	fulfillment.estStartDeliveryDate ? fulfillment.estStartDeliveryDate : "";
						}
						newItem.fulfillment = analytics._buildFulfillmentOpt(estDate);
					}
					newItem.fulfillment				=	newItem.fulfillment || {}
					newItem.fulfillment.method	=	analytics.getItemTypes(item.lineItemType);
					// store and zip fulfillment check 
					newItem 								=	analytics._fulfillmentCheck(newItem, fulfillment);
				}
			});
		}
		return newItem;
	},
	
	_buildForModify : function(action, itemObject) {
		itemObject.type = this._modifyEvent(action);
		return itemObject;
	},
	
	_buildCartItem : function(item) {
		var itemObject = {
			quantity : item.quantity,
			productInfo : {
				sku :	item.itemId || item.sku
			},
			price :	{
				basePrice : analytics._getItemPrice(item),
			},
			fulfillment : {
				method	: analytics.getItemTypes(item.fulfillmentMethod || item.lineItemType)
			}
		};
		
		if(item.isIRApplied){
			itemObject.price.priceType = "price displayed: instant rebate strike through";
		}
		
		//handle fulfillment's
		if(item.fulfillmentModel 
				&& $.isArray(item.fulfillmentModel) && item.fulfillmentModel.length > 0)	{
			
			$.each(item.fulfillmentModel, function(index, fulfillment) {
				if(fulfillment.selected)	{
					itemObject = analytics._fulfillmentCheck(itemObject, fulfillment);
				}
			});
		} else if(item.fulfillmentLocation)	{
			itemObject = analytics._fulfillmentCheck(itemObject, item);
		}
		return itemObject;
	},
	
	_fulfillmentCheck: function(itemObject, fulfillment) {
		try {
			if(itemObject.fulfillment.method == "bopis" || itemObject.fulfillment.method == "boss")	{
				itemObject.fulfillment.store = (fulfillment.pickUpStoreAddress ? fulfillment.pickUpStoreAddress.split("#")[1] : fulfillment.fulfillmentLocation);
			} 
			else if(itemObject.fulfillment.method == "bodfs" || itemObject.fulfillment.method == "appl") {
				itemObject.fulfillment.zip = fulfillment.deliveryZipCode  || fulfillment.fulfillmentLocation;
			}
		} catch(e) { }
		return itemObject;
	},
	
	_getItemPrice: function(item) {
		return (item.specialOfferPrice ? item.specialOfferPrice : 
						(item.price || (item.type == this._modifyEvent(2) ? item.totalItemPrice : item.unitPrice)));
	},
	
	_buildFulfillmentOpt : function(estDate) {
		return {
			serviceLevel		:	"outside delivery",
			deliveryWindow	:	"all day",
			deliveryDate		:	estDate
		};
	},
	
	_modifyEvent : function(type) {
		switch(type) {
			case 1:return "cart add";break;
			case 2:return "cart remove";break;
			case 3:return "add to list";break;
			case 4:return "cart fulfillment change";break;
			case 5:return "partsUpdate";break;
		}
	},
	
	_buttonEvent : function(event) {
		switch(event) {
			case "regularCheckout":return "cart checkout";break;
			case "expressCheckout":return "express checkout";break;
			case "paypalCheckout":return "paypal express";break;
		}
	},
	
	_typeAheadEvent : function(event) {
		switch(event) {
			case "appear"	:	return "suggestion displayed"; 	break;
			case "select"		:	return "suggestion tapped"; 		break;
			case "dismiss"	:	return "suggestion dismissed"; 	break;
		}
	},
	
	getCartItemModel : function(cartModel, id) {
		var itemMatch = {};
		if(cartModel)	{
    		$.each(cartModel.itemModels, function(index, item){
    			if(id === item.lineItemId || id === item.itemId){
    				itemMatch=item;
    			}
    		});
		}
		return itemMatch;
	},
	
	getItemTypes : function(itemType) {
		
		var returnLabel = "";
		switch(itemType){
			case "Buy Online Pickup In Store": //BOPIS
			case "BOPIS":
				returnLabel = "bopis";
				break;
			case "Buy Online Ship To Store": //BOSS
			case "ShipToStore":
				returnLabel = "boss";
				break;
			case "Buy Online Deliver From Store": //BODFS
			case "DeliverFromStore":
				returnLabel = "bodfs";
				break;
			case "Appliance": //APPL
			case "DirectDelivery":
				returnLabel = "appl";
				break;	
			default:  //BOSH & HDPP
				returnLabel = "sth";
				break;
		}
		return returnLabel;
	},
	
	// HDPP Analytics
	hdppDisplayEvent: function(evt, displayPlan) {
		
		var eventObject = {
				eventMode : "preload",
				category : {
					primaryCategory : "hdpp content"
				},
				eventInfo : {
					eventName : "hdpp display"	
				},
				componentInfo : {
					displayedProtectionPlan : displayPlan
				}
			}
		// call eventReady()
		analytics.eventReady(eventObject);
	},
};

//Set  up Cart triggers
$( document ).ready(function() {
    	$(document).on("ATC_ANALYTICS_EVENT", $.proxy(analytics.setAddToCartEvent, this));
    	$(document).on("REMOVE_ANALYTICS_EVENT", $.proxy(analytics.setRemoveEvent, this));
    	$(document).on("PARTS_SERVICES_OVERLAY_EVENT", $.proxy(analytics.setPartsOverlayEvent, this));
    	$(document).on("PARTS_SERVICES_OVERLAY_CHANGE_EVENT", $.proxy(analytics.setPartsAndServicesChangeEvent, this));
    	$(document).on("APPLIANCE_OVERLAY_CHANGE_EVENT", $.proxy(analytics.setApplianceOverlayUpdateEvent, this));
    	$(document).on("ANALYTICS_PRIMARY_ERROR_EVENT", $.proxy(analytics.setPrimaryErrorEvent, this));        	
    	$(document).on("HDPP_ATC_ANALYTICS_DISP_EVENT", $.proxy(analytics.hdppDisplayEvent, this));
    	$(document).on("ANALYTICS_BUTTON_EVENT", $.proxy(analytics.setButtonEvent, this));
});

function getUserStatus() {
	var userAuthStatusCookie = cookieUtil.getCookieCrumb(cookieUtil.getCookie("THD_PERSIST"), "C46");
	var status = "";
	
	if(userAuthStatusCookie == "") {
		status = "persisted";
	} else if(userAuthStatusCookie == "guest") {
		status = "guest";
	} else if(typeof userAuthStatusCookie == "string" && userAuthStatusCookie.length > 0) {
		status = "authenticated";
	} else {
		status = "persisted";
	}
	return status;
}

function pageName() {
	var fileName = "",
		name = "";
	
	if(typeof filePath == 'string' && filePath.indexOf("/") != -1) {
		var path = filePath.split("/");
		fileName = path[path.length - 1];
	}
	
	switch(fileName) {
	
		case 'LogonView.jsp':
		case 'CheckoutLogon.jsp':
		case 'PersistantLogon.jsp':
			name = 'sign in';
			break;
		case 'UserRegistrationAddForm.jsp':
			name = 'registration';
			break;
		case 'AccountProfile.jsp':
			name = 'account information';
			break;
		case 'ForgotPassword.jsp':
			name = 'forgot your password';
			break;
		case 'ResetPassword.jsp':
			name = 'change your password';
			break;
		case 'OrderStatus.jsp':
			name = $(".pod-order-list-item").length ? "orders & purchases>online orders" : "orders & purchases>no orders";
			break;
		case 'ReceiptStatus.jsp':
			name = $(".pod-order-list-item").length ? "orders & purchases>in-store orders" : "orders & purchases>no orders";
			break;
		case 'PurchaseHistory.jsp':
			name = $(".pod-order-list-item").length ? "orders & purchases>all orders" : "orders & purchases>no orders";
			break;
		case 'CheckGuestOrderStatus.jsp':
			name = 'check your order status';
			break;
		case 'GuestOrderDetails.jsp':
			name = 'order information';
			break;
		case 'MyLists.jsp':
			name = 'my lists';
			break;
		case 'MyListDetails.jsp':
			name = 'my lists>my list details';
			break;
		case 'CreditCenter.jsp':
			name = 'credit & gift cards';
			break;
		case 'Checkout.jsp':
		case 'ThankYou.jsp':
			name = 'checkout';
			break;
		case 'Cart.jsp':
		case 'ShoppingCart.jsp':
			name = 'shopping cart';
			break;
		default:
			name = '';
	}
	return name;
}

String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

	return analytics;

}));
define('templates-precompiled-atc',['handlebars'], function(Handlebars) {

this["atcTemplates"] = this["atcTemplates"] || {};

this["atcTemplates"]["thd.mcc.atcGmOverlay.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                         <!--  Was Price information should be displayed only when there is a was price-->\n                       		<p class='text-info'>Was $<span class='strike-through'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> <span class='text-success'>Save "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.percentOff)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</span></p>\n                         	<p class='bold'><span class='xlarge'>$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " each</span></p>\n                         ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                          	<p class='bold'><span class='xlarge'>$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " each</span></p>\n                         		";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-->\n								";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.messagesModel), {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							<!--";
  return buffer;
  }
function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n									";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.correlationId), ((stack1 = (depth1 && depth1.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.lineItemId), options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.correlationId), ((stack1 = (depth1 && depth1.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.lineItemId), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n									<div class=\"atc-item-message\">\n									<i class=\"icon-caution-yellow text-warning m-left-xsmall large left\"></i>\n									<p class=\"bold m-top-xsmall small m-left-large\">"
    + escapeExpression(((stack1 = (depth0 && depth0.shortDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n									</div>\n									";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<div id=\"merchHDPPCntr\">\n							<div id=\"hdppErrCntr\" class=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.showHDPPErrCntr), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span><i class=\"icon-error text-danger\"></i><div id=\"hdppErrSec\" class=\"m-left-xsmall\">We're sorry. There was an error adding the Plan.</div></span></div>\n							<div id=\"HDPPdesc\" class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.showHDPPErrCntr), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n								<span id=\"HDPPDecSec\">";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.showConfirmation), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.warrantyLineItems)),stack1 == null || stack1 === false ? stack1 : stack1.lineItem)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.duration)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " Home Depot Protection Plan for </span><span id=\"hdppPrice\">$"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.warrantyLineItems)),stack1 == null || stack1 === false ? stack1 : stack1.lineItem)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n							</div>							\n							<div id=\"addHDPPSec\" class=\"right\">\n								<div id=\"addedToCartHDPP\" class=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.showConfirmation), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n									<i class=\"icon-checkmark-success text-success xlarge m-right-xsmall\"></i>\n  									<div id=\"addedToCartLbl\">ADDED TO CART</div>\n  								</div>\n							  	<a id=\"addHDPPBtn\" data-parentWarrantyItem=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.lineItemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-warrantyItem=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.warrantyLineItems)),stack1 == null || stack1 === false ? stack1 : stack1.lineItem)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.itemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"add-plan ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.showConfirmation), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.showHDPPErrCntr), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></div>\n					   </div>			\n					  ";
  return buffer;
  }
function program10(depth0,data) {
  
  
  return "hide";
  }

function program12(depth0,data) {
  
  
  return "Include a ";
  }

function program14(depth0,data) {
  
  
  return "Try Again";
  }

function program16(depth0,data) {
  
  
  return "Add Plan";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.paypalExpress), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n						<a id=\"atcCheckoutPP\" href=\"";
  if (helper = helpers.ppUrl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ppUrl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"class=\"btn thdTablet-btn-flat-lightGray bold text-info text-center\"></a>\n						";
  return buffer;
  }

  buffer += "<!-- BEGIN ATC MODAL CONTENTS */}}-->\n<aside class='atc-overlay-gm module-normal'>\n    <!-- BEGIN ATC CONFIRMATION-->\n    <section id='temp' class='modal-wrapper'>\n        <!-- show the brand and the title */}}-->\n          <section class='width-100'>\n            <!-- the product image, title and price -->\n            <section class='left'>\n                <a class='m-right-normal no-shrink m-top-small left' id=\"productImgMccAtc\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.canonicalUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                    <img height='85' width='85' src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                </a>\n                <div class=\"cartModelProductModelMCC m-top-small right\">\n					<div class=\"cartModelBody2LinkMCC\">\n							<a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.canonicalUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n							<div class=\"cartModelBody2LinkGryMCC m-top-small\">\n							 	Model #<span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.modelNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n							</div>\n							<div class=\"offerprice\">\n							 ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n							</div>\n							<!--";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.messagesModel), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n					</div>\n					<div class=\"vp-map-remove m-top-large hide\">\n							<i class=\"icon-close-symbol\"></i>\n							<span><a lineItem-Id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.lineItemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.canonicalUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Remove from cart</a></span>\n					</div>\n				</div>               \n            </section>\n            <section id='cartModelSummaryCntrMCC' class=\"overflow-auto\"> \n            	<div class=\"cartModelCurrentSummaryMCC overflow-auto\">\n						<div class=\"left atcPricingSec\">\n							<div class=\"left\">\n								<h3 class=\"m-bottom-xsmall\">Qty:</h3>\n								<h3>Price:</h3>\n							</div>\n  							<div class=\"right m-left-xsmall\">\n  								<h3 class=\"m-bottom-xsmall\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.totalQuantity)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n								<h3 id=\"atcGMUnitPrice\" data-unit-price=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.totalItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"> $"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.totalItemPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n							</div>\n						</div>\n						<div class=\"atcPricingSec right\">\n							<div class=\"overflow-auto\">\n								<a id=\"hdppViewCart\" class=\"right add-plan m-bottom-xsmall\">View Cart (";
  if (helper = helpers.totalItemCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalItemCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ")</a>\n							</div>\n  							<div>\n  								<h4>Subtotal:<span id=\"atcGMSubTotal\"> $";
  if (helper = helpers.cartTotal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cartTotal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></h4>								\n							</div>\n						</div>\n						";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.hdppEligible), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </section>            \n            <div class='text-danger hide'>\n                <i class='icon-attention'> </i> </div>\n        </section>\n        <section class=\"m-top-small right\">\n            <div class=\"pricechkoutMCC\">			\n		      <div id=\"atcGmBtnsCntr\">\n				<!-- if there is no appliance item and paypalexpress is true pp button replaces the continue shopping button -->\n                ";
  stack1 = (helper = helpers.IfEmptyElement || (depth0 && depth0.IfEmptyElement),options={hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.applianceItemsSubTotal), options) : helperMissing.call(depth0, "IfEmptyElement", (depth0 && depth0.applianceItemsSubTotal), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				<!-- SHOW EDIT CART WHEN > 12 PRODUCTS IN CART - GO TO CART ON TAP-->\n               	<a id=\"editCartBtn\" href=\"#\" class=\"btn btn-primary bold right m-bottom-normal text-center\">Checkout Now</a>  \n                <!-- CONTINUE SHOPPING - CLOSE OVERLAY -->\n                \n                </div>\n			</div> 			\n            </section>\n            <!--BEGIN RECOMMENDED PRODUCTS -->\n        <div class=\"clear\"></div>\n        <div id='atcmodal_rr'></div>\n        <div id='mccCertonaApplError' class='hide'>\n        <i class='icon-error'></i>\n        <span class='text-danger b'></span>\n        </div>\n    <!--END RECOMMENDED PRODUCTS -->\n    </section>\n\n</aside>\n<!-- / END ATC MODAL CONTENTS -->\n\n";
  return buffer;
  });

this["atcTemplates"]["thd.mcc.atcApplOverlay.template.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						    <div class=\"map-price m-bottom-small map-data-default\">\n								<p class=\"value-price\">See Final price In Cart</p>\n						    </div>\n							<div class=\"map-price m-bottom-small hide map-data-shwprice\">\n									<p class=\"bold current-special-price\"><span class=\"xlarge\">$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> each</p>\n							</div>\n					    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n							";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice), ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice), options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice), ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice), options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								<div class=\"map-price m-bottom-small\">\n									<p class=\"bold current-special-price\"><span class=\"xlarge\">$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> each</p>\n								</div>\n							";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								<div class=\"map-price m-bottom-small map-data-default\">\n									<p class=\"bold\"><span class=\"xlarge strike-through was-unit-price\">$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> each</p>\n									<p class=\"value-price\">See Final price In Cart</p>\n								</div>								\n								<div class=\"map-price m-bottom-small hide map-data-shwprice\">\n									<p class='text-info was-unit-price'>Was $<span class='strike-through'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> <span class='text-success'>Save "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.percentOff)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</span></p>\n									<p class='bold'><span class='xlarge current-special-price'>$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>\n								</div>\n								\n							";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							<div class='m-bottom-small'>\n								 ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "						   \n							</div>\n					    ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								 <!--  Was Price information should be displayed only when there is a was price-->\n									<p class='text-info was-unit-price'>Was $<span class='strike-through'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> <span class='text-success'>Save "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.percentOff)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</span></p>\n									<p class='bold'><span class='xlarge current-special-price'>$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.specialOfferPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>\n								 ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n									<p class='bold'><span class='xlarge current-unit-price'>$"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.unitPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span></p>\n								 ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            <p class=\"bold text-info\"><span class=\"text-success uppercase\">Free</span> ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.shippingMessage), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n                        ";
  return buffer;
  }
function program14(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.shippingMessage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program16(depth0,data) {
  
  
  return "Delivery";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isOrdLvlPromoAvl), {hash:{},inverse:self.program(21, program21, data),fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                           <p class=\"bold text-info p-top-normal p-right-small\">\n                               ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.applianceDeliverySection), {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                           </p>\n                        ";
  return buffer;
  }
function program19(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                            	<div class=\"display-promo\">\n	                            	<p class='bold text-info'> Cart(";
  if (helper = helpers.totalItemCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalItemCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Items)</p>\n	                            	<p class=\"bold text-info uppercase\">\n										<span class=\"text-success\">";
  if (helper = helpers.OrdLvlPrmoDesc) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.OrdLvlPrmoDesc); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> \n									</p>\n								</div>\n								<div class=\"display-amt\">\n									<p id=\"mccAtcCartTotal\">\n										$<span>";
  if (helper = helpers.cartTotal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cartTotal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n									</p>\n									<p>\n										<span class=\"text-success\">-$"
    + escapeExpression((helper = helpers.removeNegativeDiscount || (depth0 && depth0.removeNegativeDiscount),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.appliedDiscount), options) : helperMissing.call(depth0, "removeNegativeDiscount", (depth0 && depth0.appliedDiscount), options)))
    + "</span>\n									</p>\n								</div>\n                           ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            	<p id=\"mccAtcCartTotal\" class='bold text-info'> Cart(";
  if (helper = helpers.totalItemCount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.totalItemCount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " Items) | $<span>";
  if (helper = helpers.cartTotal) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cartTotal); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></p>\n                           ";
  return buffer;
  }

function program23(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                   <span class=\"text-success uppercase\">Free</span> ";
  if (helper = helpers.applianceDeliverySection) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.applianceDeliverySection); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                               ";
  return buffer;
  }

function program25(depth0,data) {
  
  
  return "\n                                   <span class=\"text-success uppercase\">Free</span> Delivery\n                               ";
  }

function program27(depth0,data) {
  
  
  return "\n                        <div id=\"enterZipMsg\" class=\"uppercase bold zipCheckerElements hide\">\n                            <p>Enter Zip Code to check availability</p>\n                        </div>\n                        ";
  }

function program29(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <!-- EARLIEST AVAILABLE DATE -->\n                        <div class=\"uppercase bold\">\n                            <p>Earliest Available:</p>\n                            <p class=\"text-muted\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.earliestAvailableDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n                        </div>\n                        ";
  return buffer;
  }

function program31(depth0,data) {
  
  
  return "\n                <div id=\"checkAvailableZip\" class=\" m-bottom-normal zipCheckerElements hide\">\n                    <input type=\"tel\" maxlength=\"5\" placeholder=\"Enter Zip Code\" class=\"module-small sborder border-all border-secondary check-available-input\" value=\"\">\n                </div>\n                <!-- CHECK AVAILABILITY - TRIGGER CHECK AVAILABIITY CALL -->\n                <a id=\"checkAvailableBtn_MCC\" href=\"#\" class=\"btn btn-primary bold m-bottom-normal text-center zipCheckerElements hide\">Check Availability</a>\n                <!-- FOR BACK ORDER START -->\n                <div id=\"backOrdBtnSec\" class=\" hide\">\n                	<a id='addToListBtn' href='#' class='add-to-list btn  thdTablet-btn-flat-lightGray bold text-center addtolist_act dual-sign-in-pop-up'>+ Add to my List </a>\n                	<a id='addToCart' href='#' class='btn btn-primary bold  text-center'>+ Add To Cart </a>\n                </div>\n                <!-- FOR BACK ORDER END -->\n                ";
  }

function program33(depth0,data) {
  
  
  return "\n             <section id=\"atcErrBtn\" class=\"hide\">\n                <!-- SHOW EDIT CART WHEN > 12 PRODUCTS IN CART - GO TO CART ON TAP -->\n                <a id='editCartBtn' href='/MCCCheckout/Cart/ViewCart.do' class='btn thdTablet-btn-flat-lightGray bold m-bottom-normal text-center'> Edit Cart </a>\n              </section>\n            ";
  }

  buffer += "<!-- BEGIN ATC MODAL CONTENTS */}}-->\n<aside class='atc-overlay module-normal'>\n    <!-- BEGIN ATC CONFIRMATION-->\n    <section id='temp' class='modal-wrapper'>\n        <!-- show the brand and the title */}}-->\n        <section class='text-secondary m-bottom-large'>\n            <div class='font-secondary'>\n                <span class='bold normal georgia'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.brandName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                <span class='m-left-xsmall m-right-xsmall'> | </span>\n                <span class='model-number georgia' data-productid='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.itemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>Model #: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.modelNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n            </div>\n            <h2 class='xxlarge bold'>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n        </section>\n        <section class='width-100 overflow-auto'>\n            <!-- the product image, title and price -->\n            <section class='m-right-large left'>\n                <a class='m-right-normal no-shrink left' href='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.canonicalUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                    <img height='110' width='120' src='"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'>\n                </a>\n                <div class=\"atc-price-info-section-container right\">\n                    <div class=\"atc-price-info-section\">\n                        ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.isValuePricingDisp), true, options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.isValuePricingDisp), true, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					    ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.isValuePricingDisp), false, options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.isValuePricingDisp), false, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n						";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.isValuePricingDisp), "nv", options) : helperMissing.call(depth0, "ifCond", ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.isValuePricingDisp), "nv", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</div>\n                    <div class='m-bottom-small'>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkZipCode), {hash:{},inverse:self.program(18, program18, data),fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                    <p class='bold text-info'>\n                        <span class='text-success uppercase'></span>\n                    </p>\n					<div class=\"vp-map-remove p-top-normal hide\">\n										<i class=\"icon-close-symbol\"></i>\n										<span><a lineItem-Id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.lineItemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" href=\"#\">Remove from cart</a></span>\n					</div>\n                    <input id='quantity' name='quantity' value='{1}' type='hidden' />\n                </div>\n            </section>\n            \n            <section class=\"zip-column right\">            	\n                <div class=\"m-bottom-normal align-right\">\n                    <!-- RED ERRORS -->\n                    <!--    1. checkAvailable.error.zipfail - ZIP VALIDATION\n                            2. checkAvailable.error.qtyerror - ONLY 2 OF SAME ITEM PER ORDER - ALSO, HIDE THE INPUT AND BUTTON\n                            3. checkAvailable.error.qtymax - Only 12 items per order, show EDIT CART button hide input\n                     -->\n                    <div id=\"checkAvailableError\" class=\" m-bottom-normal text-danger hide flex\">\n                        <i class=\"icon-attention m-right-xsmall xxlarge no-shrink\"></i> \n                        <div class=\"bold\">\n                            <p>Please enter a valid ZIP code</p>\n                        </div>\n                    </div>\n                    \n                    <div id=\"changeZipErrCntr\" class=\" m-bottom-normal text-danger hide\">\n                        <i class=\"icon-attention m-right-xsmall xxlarge no-shrink\"></i> \n                        <div class=\"bold\">\n                            <p></p>\n                        </div>\n                    </div>\n                    \n                    <!-- GRAY ERRORS -->\n                    <!--    1. checkAvailable.error.contact - ZIP VALIDATION\n                            2. checkAvailable.error.contactText - ONLY 2 OF SAME ITEM PER ORDER - ALSO, HIDE THE INPUT AND BUTTON\n                            3. checkAvailable.error.qtymax - Only 12 items per order, show EDIT CART button hide input\n                     -->\n                    \n                    <!-- CONTACT YOUR STORE -->\n                    <div id=\"checkAvailableMessage\" class=\" m-bottom-normal text-muted hide\">\n                        <div class=\"bold\">\n                            <div class=\"m-bottom-small store-attention\" style=\"display: table;\">\n                                <i class=\"icon-caution-yellow text-warning large middle no-shrink\" style=\"display: table-cell; vertical-align: middle;\"></i>\n                                <p class=\"uppercase info-details\" style=\"display: table-cell; vertical-align: middle;\"></p>\n                            </div>\n                            <p id=\"contactLocalStr\" class=\"m-bottom-small hide\">Please contact your local store to order and arrange delivery</p>\n                            <p  id=\"myDeleiveryLocationCntr\" class=\"truncate hide\"><span class=\"text-normal\">My Delivery location:</span> <span id=\"myDeleiveryLocationZip\"></span> <a href=\"#\" class=\"text-primary\">(change)</a></p>\n                        </div>\n                    </div>\n                    \n                    <!-- CHECK AVAILABLE ENTER ZIP -->\n                    <div id=\"zipChecker\" class=\"flex\">\n                    	<div id=\"sameZipCodeMsg\" class=\"bold hide\">\n							<i class=\"icon-caution text-warning m-right-xsmall xxlarge no-shrink\"></i>\n							<p>All appliances must be delivered to the same ZIP code.</p>\n						</div>\n                        <i class=\"icon-calendar m-right-xsmall text-muted xxlarge no-shrink zipCheckerElements hide\"></i> \n                        <!-- ENTER ZIP MESSAGE -->\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkZipCode), {hash:{},inverse:self.program(29, program29, data),fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </div>\n                </div>\n                \n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkZipCode), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 <!-- SHOW EDIT CART WHEN > 12 PRODUCTS IN CART - GO TO CART ON TAP -->\n                <div class=\" hide\" id=\"applATCErrCntr\"><a id=\"editCartBtn\" href=\"#\" class=\"btn btn-primary bold m-bottom-normal text-center\">Edit Cart</a></div>\n              \n                <div class=\"hide\" id=\"applATCBtnsCntr\">                \n                <a id='editCartBtn' href='/MCCCheckout/Cart/ViewCart.do' class='btn thdTablet-btn-flat-lightGray bold m-bottom-normal text-center'> Edit Cart </a>                \n                <!-- CONTINUE SHOPPING - CLOSE OVERLAY-->\n                <a id='selectParts' class='btn btn-primary bold text-info text-center'> Select Parts </a>\n                 </div>\n                 <div class=\"hide\" id=\"applATCBtnsDDErr\">  \n                	<a id='goToCartBtn' href='/MCCCheckout/Cart/ViewCart.do' class='btn btn-primary bold text-info text-center'>GO TO CART</a>\n                 </div>\n                 <div class=\"hide\" id=\"changeZipBtnDDErr\">  \n                	<a id='retunToCartBtn' href='/MCCCheckout/Cart/ViewCart.do' class='btn btn-primary bold text-info text-center'>RETURN TO CART</a>\n                 </div>\n                 <!-- FOR ADD TO LIST CALL -->\n              	 <div id=\"addToListResponse\"></div>\n					<input type=\"hidden\" value=\"quickView\" name=\"fromPage\" id=\"fromPage\" />\n					<input type=\"hidden\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.addedItem)),stack1 == null || stack1 === false ? stack1 : stack1.itemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"productId_1\" id=\"productId_1\" />\n					<input type=\"hidden\" value=\"\" name=\"quantity_1\" id=\"quantity_1\" />\n					<input type=\"hidden\" value=\"\" name=\"orderId\" id=\"orderId\" />\n				 <!-- FOR ADD TO LIST CALL END-->\n            </section>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.checkZipCode), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class='text-danger hide'>\n                <i class='icon-attention'> </i> </div>\n        </section>\n            <!--BEGIN RECOMMENDED PRODUCTS -->\n        <div id='ma_atcmodal_rr'></div>\n        <div id='mccCertonaApplError' class='hide'>\n        <i class='icon-error'></i>\n        <span class='text-danger b'></span>\n        </div>\n    <!--END RECOMMENDED PRODUCTS -->\n    </section>\n\n</aside>\n<!-- / END ATC MODAL CONTENTS -->";
  return buffer;
  });

this["atcTemplates"]["appliance-parts-services-config.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n			<section id=\"pnsDownSectionMCC\" class=\"\">\n				<div id=\"pnsDownCntrMCC\" class=\"bold\">\n					<i class=\"icon-caution text-warning m-right-xsmall xxlarge no-shrink\"></i>\n					<p>Parts and Services are currently unavailable. You can try again later, or close and continue to checkout.</p>\n				</div>\n			</section>\n	";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<section id=\"parts-services-selector\" class=\"align-items parts-services-selector appliance-parts-services-config\">\n			<ul class=\"parts-services-tabs flex\">\n			";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.requiredLineItems), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.optionalLineItems), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	\n				";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.warrantyLineItems), {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n			</ul>\n	</section>\n	\n	<input type=\"hidden\" id=\"lineItemIdBrowse\" value=\"876427185\">\n	<input type=\"hidden\" id=\"lineItemId\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.parentLineItemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		<input type=\"hidden\" id=\"zipcode\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.zipCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		<input type=\"hidden\" id=\"localStoreId\" value=\"\">\n		<input type=\"hidden\" id=\"quantity\" value=\"1\">\n		<input type=\"hidden\" id=\"applianceSubTotal\" value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.appliancePrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n	\n\n		<!--  Parts and Services Totals -->\n		<section id=\"parts-services-selector-total\" class=\"m-left-normal m-right-normal float-clear\">\n			<div class=\"right\">\n				<div class=\"left bold\">Updated Subtotal: </div>\n				<div id=\"updatedSubtotal\" class=\"price left large bold text-right\">$</div>\n			</div>\n			<p id=\"pnsSaveChangeText\" class=\"right float-clear p-top-small hide\">Save changes and...</p>\n		</section>\n		<!--  Parts and Services Totals End -->\n	";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li>\n					<input type=\"radio\" name=\"tabs\" id=\"tab1\" checked=\"\">\n					<label for=\"tab1\" class=\"text-secondary bold\"><i class=\"text-secondary large v-align-middle\"></i> REQUIRED PARTS &amp; SERVICES </label>\n					<div id=\"tab-content1\" class=\"parts-services-tab-content\">	\n					";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.installationOrHookup), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	\n					 ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.twoStepInstallation), {hash:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "		\n						<div id=\"parts-services-selector-required\" class=\"parts-service-selector flex\">\n							<!-- Required Parts and Services List -->\n						    <ul class=\"left m-right-large\">\n									";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.requiredLineItems)),stack1 == null || stack1 === false ? stack1 : stack1.lineItem), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</ul>	\n							<!--  Required Parts and Services List End -->\n						</div>\n					</div>\n				</li>\n				";
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n					<div id=\"installHookUpCntr\" class=\"flex m-bottom-small align-items-center\">\n							<span class=\"bold text-secondary m-right-small line-height-large\">Do you want us to ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.hookup), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " this appliance for ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.hookup), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ?</span>\n							<a  id=\"yesInstall\" \n								data-cost=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.installationPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" \n								data-storeSKU=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.installStoreSku)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" \n								data-productid=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.installLineItemId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" \n								";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.hookup), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								class=\"sborder flex border-light m-right-normal align-items-center installBtn active\">\n								<span class=\"radio-btn\"></span>\n								<span class=\"text-secondary line-height-large\">Yes</span>\n							</a>\n							<a id=\"noInstall\" data-cost=\"0\" class=\"flex align-items-center installBtn\">\n								<span class=\"radio-btn\"></span>\n								<span class=\"text-secondary line-height-large\">No</span>\n							</a>\n						</div>\n					 ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "hook up ";
  }

function program8(depth0,data) {
  
  
  return "install";
  }

function program10(depth0,data) {
  
  
  return " Free ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " $"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.installationPrice)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "data-hookup=\"true\"";
  }

function program16(depth0,data) {
  
  
  return "\n						 <div id=\"twoStepInstallMsgMCC\"class=\"m-bottom-small m-right-small\">\n							<ul>\n								<span class=\"bold\"> Note: </span>\n								Installation and delivery are handled separately, since a local licensed installer is needed. \n								Your delivery agent will schedule your installation when you receive your product.\n							</ul>\n						 </div>\n						 <p class=\"text-secondary m-bottom-normal\">These pre-selected parts are needed for proper installation of your appliance. Existing parts cannot be reused.\n						</p>\n					 ";
  }

function program18(depth0,data) {
  
  
  return "\n						<p class=\"text-secondary m-bottom-normal\">These parts and services are optional but are recommended for proper installation.\n						</p>\n					 ";
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n										<li class=\"m-bottom-normal flex align-items-center\">\n											<input type=\"checkbox\" name=\"reqPart\" value=\"";
  if (helper = helpers.itemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.itemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-parentlineItemId=\"203578178\" data-productid=\"";
  if (helper = helpers.itemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.itemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-storeSKU=\"";
  if (helper = helpers.storeSKU) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.storeSKU); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-cost=\"";
  if (helper = helpers.unitPrice) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unitPrice); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">												\n											\n											<div class=\"label text-secondary m-right-large left\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n											<div class=\"price text-secondary m-right-large left\">$"
    + escapeExpression((helper = helpers.replaceNumberWithCommasFixed || (depth0 && depth0.replaceNumberWithCommasFixed),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitPrice), options) : helperMissing.call(depth0, "replaceNumberWithCommasFixed", (depth0 && depth0.unitPrice), options)))
    + "</div>\n										</li>\n									";
  return buffer;
  }
function program21(depth0,data) {
  
  
  return "checked=\"checked\"";
  }

function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				  <li>\n					<input type=\"radio\" name=\"tabs\" id=\"tab2\">\n					<label for=\"tab2\" class=\"text-secondary bold\"><i class=\"text-secondary large v-align-middle\"></i> OPTIONAL PARTS</label>\n					<div id=\"tab-content2\" class=\"parts-services-tab-content\">\n						<p class=\"bold text-secondary m-bottom-normal\">Choose from premium accessories and services recommended specifically for your appliance.</p>\n						<div id=\"parts-services-selector-optional\" class=\"parts-service-selector flex\">\n							<!-- Optional Parts & Plans -->\n							<ul class=\"left m-right-large\">\n								";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.optionalLineItems)),stack1 == null || stack1 === false ? stack1 : stack1.lineItem), {hash:{},inverse:self.noop,fn:self.program(24, program24, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	\n							</ul>\n						</div>\n					</div>\n				  </li>\n				";
  return buffer;
  }
function program24(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n									<li class=\"m-bottom-normal flex align-items-center\">\n										<input type=\"checkbox\" name=\"optPart\" value=\"";
  if (helper = helpers.itemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.itemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " data-parentitemid=\"203578178\" data-productid=\"";
  if (helper = helpers.itemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.itemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-cost=\"";
  if (helper = helpers.unitPrice) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unitPrice); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n										<div class=\"label text-secondary m-right-large left\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n										<div class=\"price text-secondary m-right-large left\">$"
    + escapeExpression((helper = helpers.replaceNumberWithCommasFixed || (depth0 && depth0.replaceNumberWithCommasFixed),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitPrice), options) : helperMissing.call(depth0, "replaceNumberWithCommasFixed", (depth0 && depth0.unitPrice), options)))
    + "</div>\n									</li>\n								";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<li>\n					<input type=\"radio\" name=\"tabs\" id=\"tab3\">\n					<label for=\"tab3\" class=\"text-secondary bold\"><i class=\"text-secondary large v-align-middle\"></i> PROTECTION PLAN</label>\n					<div id=\"tab-content3\" class=\"parts-services-tab-content\">\n						<p class=\"bold text-secondary m-bottom-normal\">Protect your investment beyond the terms of your original warranty.</p>\n						<div id=\"parts-services-selector-warranty\" class=\"parts-service-selector flex\">\n							<!--  Warranty List -->\n							<ul id=\"warrantyList\" class=\"left\">\n								";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.warrantyLineItems)),stack1 == null || stack1 === false ? stack1 : stack1.lineItem), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "	\n									        <li class=\"m-bottom-normal flex align-items-center\">\n										             <a data-cost=\"0\" data-parentitemid=\"203578178\" id=\"noThanksRadioMCC\" data-productid=\"\" class=\"sborder border-light left warrantyBtn\">\n												         <span class=\"radio-btn\"></span>\n										              </a>\n										              <div class=\"label text-secondary left\">No thanks, I'm declining additional protection.</div>\n										              <div class=\"price text-secondary left\">$000.00</div>\n									        </li>	\n										    <li class=\"m-bottom-normal flex align-items-center\">\n												<div id=\"maufacture_warranty\"  class=\"label text-secondary left\" style=\"margin-left: 39px;\">Manufacturer's Warranty</div>\n												<div class=\"price text-secondary left\">Included</div>\n										    </li>						\n							</ul>\n							<!--  Warranty List End-->\n\n							\n							<!--  Static Warranty Info Start -->\n							\n							<div id=\"hdpp_info_wrapper\">\n		                      <div id=\"hdpp_info_cart_left\">\n		                        <div class=\"applPnSImage\">\n		                          <img src=\"/MCCCheckout/static/global/images/hdpp_logo_2.png\" id=\"hdpp_info_cart_banner\" alt=\"Home Depot Protection Plan\" title=\"Home Depot Protection Plan\">\n		                        </div>\n		                      </div>\n		                      <div id=\"hdpp_info_cart_right\">\n		                        <div class=\"applPnSImgDesc\">\n		                          <h4 id=\"hdpp_info_cart_tagline\">If we can't repair it,<br>we'll replace it</h4>\n		                          <ul id=\"hdpp_info_cart_list\">\n		                            <li id=\"hdpp_li_no-fees\"><p>No deductibles, no additional fees</p></li>\n		                            <li id=\"hdpp_li_parts-labor\"><p>Parts and labor costs included</p></li>\n		                            <li id=\"hdpp_li_in-home\"><p>In-home service by authorized technicians</p></li>\n		                            <li id=\"hdpp_li_24-7\"><p>24/7 support</p></li>\n		                          </ul>\n		                          <p id=\"hdpp_protection_plan_link\"><a target=\"blank\" href=\"http://www.protection-plans.com/content/thd/en/MajorAppliances/Index\" id=\"hdpp_info_cart_more_info\">Click here for more information</a></p>\n		                        </div>\n		                      </div>\n		                      <div id=\"hdpp_cart_exclusions\" class=\"clear-all\">\n		                        <p>\n		                          *Limitations & exclusions may apply. See\n		                          <a href=\"http://www.homedepot.com/hdus/en_US/DTCCOM/HomePage/Superfeatures/Miscellaneous/Protection_Plans/Docs/THD_HDPP_Appliance.pdf\" target=\"_blank\"> Terms & Conditions </a>\n		                          for full details\n		                        </p>\n		                      </div>\n		                    </div>\n\n							<!--  Static Warranty Info End -->\n							\n						</div>\n					</div>\n				</li>\n				";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n											<li class=\"m-bottom-normal flex align-items-center\">\n												<a  data-cost=\"";
  if (helper = helpers.unitPrice) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unitPrice); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" \n													data-parentitemid=\"203578178\" \n													data-productid=\"";
  if (helper = helpers.itemId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.itemId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" \n													data-storesku=\"";
  if (helper = helpers.storeSKU) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.storeSKU); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"\n													class=\"sborder border-light left warrantyBtn ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n																<span class=\"radio-btn\"></span>\n												</a>\n												<div class=\"label text-secondary left\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n												<div class=\"price text-secondary left\">$"
    + escapeExpression((helper = helpers.replaceNumberWithCommasFixed || (depth0 && depth0.replaceNumberWithCommasFixed),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.unitPrice), options) : helperMissing.call(depth0, "replaceNumberWithCommasFixed", (depth0 && depth0.unitPrice), options)))
    + "</div>\n											</li>	\n								  ";
  return buffer;
  }
function program28(depth0,data) {
  
  
  return "active";
  }

  buffer += "<!-- show parts-services section -->\n	<section id=\"pnsResetErr\" class=\"hide\">\n		<div id=\"cartApsErrSec\">\n			<i class=\"icon-attention m-right-xsmall xxlarge no-shrink\"></i>\n        	<span class=\"text-danger\">Sorry, we reset parts and services because they can vary by zip code. Please make your selections again.</span>\n		</div>\n	</section>\n	<section id=\"cartApplOvrl\" class=\"\" style=\"overflow:hidden;\">\n			<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.productImage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" border=\"0\">\n		<div id=\"cartApplHeader\">\n			<div class=\"product-details\">\n				\n					<span class=\"prod-name b georgia\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.brandName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> |\n				\n				 <span class=\" model-number georgia\">Model #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.modelNumber)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>  \n			</div>\n			<div class=\"product-info b\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.productDescription)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n		</div>\n	</section>\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.data)),stack1 == null || stack1 === false ? stack1 : stack1.pnsDownErr), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<!-- Parts and Services Controls  -->\n		<section id=\"parts-services-selector-controls\" class=\"module-normal\">\n			<div id=\"back\" class=\"left hide\">\n				<a data-url=\"#\" class=\"btn thdTablet-btn-flat-lightGray text-center block uppercase bold medium-small m-top-small backBtnMCC\">Back</a>\n			</div>\n			<div id=\"next\" class=\"right\">\n				<a data-url=\"#\" class=\"btn btn-primary text-center block uppercase bold medium-small m-top-small nextBtnMCC\">Next</a>\n			</div>\n			<div id=\"completeParts\" class=\"right hide\">\n				<a id=\"continueBtn\" class=\"btn thdTablet-btn-flat-lightGray text-center block uppercase bold medium-small m-top-small m-right-normal hide\">Continue Shopping</a>\n				<a id=\"goToCartBtnMCC\" data-url=\"#\" class=\"btn btn-primary hide text-center block uppercase bold medium-small m-top-small\">Go to cart</a>\n				<a id=\"savePNSMCC\" data-url=\"#\" class=\"btn btn-primary text-center block uppercase bold medium-small m-top-small\">Save Changes</a>\n			</div>\n			<div id=\"pnsDownBtnCntrMCC\" class=\"hide\">				\n				<a id=\"pnsDownBtn\" data-url=\"#\" class=\"btn btn-primary text-center block uppercase bold medium-small m-top-small m-right-normal\">Close and Continue</a>\n			</div>\n		</section>\n		<!-- Parts and Services Controls End -->";
  return buffer;
  });

return this["atcTemplates"];

});
/**
 * Handle MCC version of Add To Cart(ATC) clicks for non-Appliance items
 * 
 * 
 */
define('shared/atc/thd.mcc.atcOverlay', ['jquery',
        'cart/env',
        'cart/CartModel',
        'shared/cartMessageModel',
        'shared/atc/thd.mcc.atcOverlayModal',
        'shared/atc/thd.mcc.atc.Services',
        'shared/certona/certonaController',
        'shared/utils/LoadingCoverUp',
        'analytics',
        'templates-precompiled-atc',
        'cookie-utils'
    ],
    function(
        $,
        env,
        cartModel,
        cartMessageModel,
        atcModal,
        atcService,
        certonaController,
        loading,
        analytics,
        atcTemplates,
        cookieUtils) {

        var mccAtcOverlay = mccAtcOverlay || {};

        /**
         * Launch overlay in response to ATC click.
         * 
         * atcRequestList will have only 1 entry for GM, 
         * possibly multiple for BOPIS items 
         *
         * @params atcRequestList []
         *  itemId
         *  quantity
         *  fulfillmentLocation
         *  fulfillmentMethod
         *  onComplete (optional - first item only)
         *  onClosed (optional - first item only)
         */
        mccAtcOverlay.showOverlay = function(atcRequestList) {
            var atcPromise = new $.Deferred();
            if (BOSS_BOPIS_UPDATE_ITEM) {
                $.event.trigger("CART_PAGE_LOADING_COVERUP_START");
                //Look for and remove update item if present. If present, 
                atcRequestList = _handleBossBopisUpdateItem(atcRequestList);
                //update item found, add to cart from cart
                _doATCFromCart(atcRequestList);
            } else {
                //Construct update request
                var data = mccAtcOverlay.buildRequest(atcRequestList);
                atcModal.launchModal();

                //Call ATC service
                atcService.addToCart(data).done(function(resp) {
                    if (_hasError(resp, data)) {
                        //Analytics - ATC from bss flag
                        analytics.bssOverlayFlag = false;
                        atcPromise.resolve(resp);
                        return; //give up, show error msg
                    }

                    //use first item for id(alway will be same itemId's)
                    var itemId = atcRequestList[0].itemId;
                    var modalHtml = mccAtcOverlay.createOverlayContent(resp, itemId, atcRequestList);
                    cartModel.setModel(resp);
                    var dynamicATCTitle = "1 Item(s) Added in Cart";
                    atcModal.loadModalContent(modalHtml, dynamicATCTitle);
                    $('#merchHDPPCntr').on("click", "#addHDPPBtn", function() {
                        mccAtcOverlay.addHDPPToCart(resp.CartModel.addedItem);
                    });
                    $("#hdppViewCart").attr("href", env.url.viewCart);
                    $(".md-modal-atc .md-title .icon-checkmark-success").removeClass('hide');

                    // Analytics - add to cart event(STH/BOPIS/BOSS)
                    mccAtcOverlay.cartData = resp.CartModel;

                    var hdppAddedItem = resp.CartModel.addedItem;
                    if (hdppAddedItem.hdppEligible) {
                        if (hdppAddedItem.showConfirmation) {
                            data.CartRequest.itemDetails.push(hdppAddedItem.warrantyLineItems.lineItem[0]);
                        }
                        if (hdppAddedItem.showHDPPErrCntr) {
                            // hdpp error event
                            $.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", $('#hdppErrSec').text());
                        }
                        // hdpp display event
                        $.event.trigger("HDPP_ATC_ANALYTICS_DISP_EVENT", [!hdppAddedItem.showConfirmation]);
                    }

                    data.CartRequest.itemDetails[0].price = $("#atcGMUnitPrice").data("unit-price");
                    data.CartRequest.itemDetails[0].isIRApplied = hdppAddedItem.isIRApplied;
                    $.event.trigger("ATC_ANALYTICS_EVENT", [data.CartRequest.itemDetails, resp.CartModel]);

                    if (atcRequestList[0].valuepricing && atcRequestList[0].valuepricing === "true") {
                        mccAtcOverlay.isMapValuePricing = "true";
                    }

                    _bindMapValuePricing();

                    _loadCertona(itemId);

                    //callbacks applied to first item only
                    _handleCallbacks(atcRequestList[0]);

                    // TODO: Always update minicart count?
                    mccAtcOverlay.updateMiniCart(resp.CartModel.totalItemCount);
                    atcModal.customPositionModal();
                    // thdTablet.showCartBlock();
                    atcPromise.resolve(resp);

                }).fail(function(err) {
                    console.error("Error during add to cart. CartRequest=", data);
                    console.error("Error:", err);
                    atcModal.showModalError();
                    atcPromise.reject();
                });
            }
            return atcPromise.promise();
        };
        mccAtcOverlay.addHDPPToCart = function(addedItem) {
            loading.start();
            mccAtcOverlay.addHDPPToCartService(addedItem).done(function(resp) {
                // set the model
                cartModel.setModel(resp);
                var parentWarrantyItem = $("#addHDPPBtn").attr("data-parentWarrantyItem"),
                    warrantyItem = $("#addHDPPBtn").attr("data-warrantyItem");
                if (!resp || !resp.CartModel || resp.CartModel.errorModel) {
                    $.each(resp.CartModel.errorModel, function(index, error) {
                        var id = error.correlationId;
                        if (id === parentWarrantyItem || id === warrantyItem || error.errorCode === "CART_GEN_ERR") {
                            $("#HDPPdesc").addClass('hide');
                            $("#hdppErrCntr").removeClass('hide');
                            $("#addHDPPBtn").text("Try Again");
                            // hdpp error event
                            $.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [error.description]);
                            return false;
                        }
                    });
                }
                if (resp.CartModel.itemModels) {
                    $.each(resp.CartModel.itemModels, function(idx, item) {
                        if (item.lineItemId === parentWarrantyItem) {
                            var warrntyLineItem = item.warrantyLineItems;
                            if (warrntyLineItem != undefined && warrntyLineItem.lineItem[0] != undefined) {
                                if (warrntyLineItem.lineItem[0].quantity === item.quantity) {
                                    var HDPPdesc = warrntyLineItem.lineItem[0].duration + " Home Depot Protection Plan for ";
                                    $("#hdppPrice").text("$" + warrntyLineItem.lineItem[0].unitPrice);
                                    $("#HDPPdesc, #addedToCartHDPP").removeClass('hide');
                                    $("#hdppErrCntr, #addHDPPBtn").addClass('hide');
                                    $("#HDPPDecSec").text(HDPPdesc);
                                    //Update view cart and subtotal info on the overlay 
                                    $("#hdppViewCart").html("View Cart (" + resp.CartModel.totalItemCount + ")");
                                    $("#atcGMSubTotal").html(" $" + resp.CartModel.cartTotal);
                                    mccAtcOverlay.updateMiniCart(resp.CartModel.totalItemCount);

                                    // hdpp add to cart event
                                    $.event.trigger("ATC_ANALYTICS_EVENT", [warrntyLineItem.lineItem, resp.CartModel]);
                                }
                            } else {
                                $("#merchHDPPCntr").addClass('hide');
                            }
                        }
                    });
                }
            }).fail(function(error) {
                $("#HDPPdesc").addClass('hide');
                $("#hdppErrCntr").removeClass('hide');
                $("#addHDPPBtn").text("Try Again");
            }).always(function() {
                loading.stop();
            });
        };

        mccAtcOverlay.addHDPPToCartService = function(addedItem) {
            var data = {
                    CartRequest: {
                        itemDetails: [{}]
                    }
                },
                itemDetails = {};
            var fulfilmentInfo = mccAtcOverlay.getFulfilmentInfo(addedItem);
            itemDetails = {
                lineItemId: addedItem.lineItemId,
                quantity: addedItem.quantity,
                fulfillmentLocation: fulfilmentInfo.fulfillmentLocation,
                fulfillmentMethod: fulfilmentInfo.fulfillmentMethod
            };

            var warrantItem = {
                'itemId': addedItem.warrantyLineItems.lineItem[0].itemId
            }
            itemDetails['warrantyItem'] = warrantItem;
            data.CartRequest.itemDetails[0] = itemDetails;


            return $.ajax({
                type: "POST",
                data: JSON.stringify(data),
                url: env.url.cartUpdate,
                xhrFields: {
                    withCredentials: true
                },
                timeout: 60000,
                headers: {
                    'Accept': "application/json; charset=utf-8",
                    'Content-Type': "application/json"
                }
            });
        };

        mccAtcOverlay.getFulfilmentInfo = function(addedItem) {
            try {
                var fulfilmentInfo = {
                    "fulfillmentLocation": "",
                    "fulfillmentMethod": ""
                };
                $.each(addedItem.fulfillmentModel, function(index, ffm) {
                    if (ffm.selected) {
                        fulfilmentInfo.fulfillmentMethod = ffm.fulfillmentMethod;
                        if (ffm.pickUpStore) {
                            fulfilmentInfo.fulfillmentLocation = ffm.pickUpStore;
                        } else if (ffm.pickUpStoreAddress) {
                            fulfilmentInfo.fulfillmentLocation = ffm.pickUpStoreAddress.split("#")[1];
                        } else if (ffm.deliveryZipCode || ffm.fulfillmentMethod == "DeliverFromStore") {
                            fulfilmentInfo.fulfillmentLocation = ffm.deliveryZipCode ? ffm.deliveryZipCode : "00000";
                        } else if (ffm.fulfillmentMethod === "ShipToHome") {
                            fulfilmentInfo.fulfillmentLocation = "DirectShip";
                        }
                    }

                });

            } catch (e) {
                console.error("_getFulFillmentLocation:" + e);
            }
            return fulfilmentInfo;
        };

        mccAtcOverlay.payPalExpress = function(atcRequestList) {
            try {
                //Call ATC service
                loading.start();
                var data = mccAtcOverlay.buildRequest(atcRequestList);
                atcService.addToCart(data).done(function(resp) {
                    if (_hasError(resp, data)) {
                        loading.stop();
                        atcModal.launchModal();
                        atcModal.showModalError();
                        return; //give up, show error msg
                    } else {
                        //proceed to PayPalExpress
                        var lineItemType = resp.CartModel.itemModels[0].lineItemType;
                        if (lineItemType === "Buy Online Pickup In Store" ||
                            lineItemType === "Buy Online Ship To Store") {
                            lineItemType = "BopisBoss";
                        }
                        window.location.href = env.url.paypal +
                            "&orderId=" + resp.CartModel.orderId +
                            "&itemType=" + lineItemType;
                    }
                });
            } catch (e) {
                console.error("Error in ATC for PayPalExpress", e);
                loading.stop();
                atcModal.launchModal();
                atcModal.showModalError();
            }
        };

        mccAtcOverlay.multiAddFromPIP = function(atcRequestList, onSuccess) {
            try {
                //Call ATC service
                loading.start();
                var data = mccAtcOverlay.buildRequest(atcRequestList);
                atcService.addToCart(data).done(function(resp) {
                    if (_hasError(resp, data)) {
                        atcModal.launchModal();
                        atcModal.showModalError();
                        return; //give up, show error msg
                    } else {
                        mccAtcOverlay.updateMiniCart(resp.CartModel.totalItemCount);
                        //show PIP custom multi add success modal
                        if (typeof onSuccess === "function") {
                            onSuccess(resp);
                        }
                    }
                }).always(function() {
                    loading.stop();
                });
            } catch (e) {
                console.error("Error in ATC for MultiAdd from PIP", e);
                loading.stop();
                atcModal.launchModal();
                atcModal.showModalError();
            }
        };

        /**
         *  Update MiniCart
         *  - update cookie (crumb: THD_MINICART, key: "I1")
         *  - call update function
         */
        mccAtcOverlay.updateMiniCart = function(countText) {
            try {
                var countInt = parseInt(countText);
                var numItems = cookieUtils.getTHDNumberItemsInCart();
                if (!numItems || parseInt(numItems) < countInt) {
                    //cookie has not been updated, use ATC count by overriding this
                    getTHDNumberItemsInCart = function getTHDNumberItemsInCart() {
                        try {
                            // The number of items in the shopping cart
                            return countText;
                        } catch (e) {
                            console.error("Error in getTHDNumberItemsInCart override", e);
                            return "";
                        }
                    };
                    numItems = countText;
                }
                //handle fullsite
                _refeshMiniCartFullsite(numItems);
            } catch (e) {
                console.error("Error trying to update minicart cookie", e);
            }
        };

        function _refeshMiniCartFullsite(itemsInCart) {
            if (itemsInCart !== '0' && itemsInCart !== '') {
                if (itemsInCart > 99) {
                    $(".headerCart__itemCount").text("99+");
                } else {
                    $(".headerCart__itemCount").text(itemsInCart);
                }
            }
        }

        function _handleCallbacks(atcRequest) {
            //execute callback on close
            if (typeof atcRequest.onComplete === 'function') {
                //call immediately (onComplete of ATC)
                $.call(atcRequest.onComplete());
            }
            if (typeof atcRequest.onClosed === 'function') {
                //call when modal is closed        
                $(document).one("ATC_MODAL_CLOSED", function() {
                    $.call(atcRequest.onClosed());
                });
            }
        }

        //Check for and handle error from ATC service call
        function _hasError(resp, data) {
            var hasError = false;
            try {
                if (!resp || !resp.CartModel) {
                    console.error("Error during add to cart. CartRequest, resp", data, resp);
                    atcModal.showModalError();
                    hasError = true;
                } else if (resp.CartModel.errorModel && !resp.CartModel.itemModels) {
                    console.error("Error during add to cart. CartRequest, resp", data, resp);
                    var errorDisplayMessage = _getMessageFromErrorModel(resp.CartModel.errorModel);
                    atcModal.showModalError(errorDisplayMessage);
                    hasError = true;
                }
            } catch (e) {
                console.error("Error trying to handle error in ATC (Geez!)", e);
                hasError = true;
            }
            return hasError;
        }

        function _getMessageFromErrorModel(errorModel) {
            //only handle first error
            var error = errorModel[0];
            if (error.errorCode === "ORD_ERR_2008" ||
                error.errorCode === "CART_ERR_139" ||
                error.errorCode === "CART_ERR_152" ||
                error.errorCode === "CART_ERR_136"
            ) {
                return error.description;
            }
            if (error.errorCode === "CART_ERR_108") {
                return "There was a problem with the chosen fulfillment. Please try again, or try another option.";
            }
            if (error.errorCode === "CART_ERR_169") {
                if (error.inventory && error.inventory > 0) {
                    return "Only " + error.inventory + " in stock. Please reduce the quantity of this item.";
                }
                return "There are not enough items available to meet your order. Please reduce the number of items you are requesting or select another item.";
            };
        }

        //Load certona section
        function _loadCertona(itemId) {
            if (typeof MCCMerchATCCertonaServicesFeature !== "undefined" && MCCMerchATCCertonaServicesFeature) {
                try {
                    var options = {
                        levels: "",
                        exItems: itemId,
                        itemid: itemId,
                        event: "shopping cart",
                        certonaSchema: "atcmodal_rr",
                        products: itemId
                    };

                    certonaController.loadCertona(options);
                    //TODO: Can this be done in router based on $(document).off/on?
                    $('body').off("click", "#atcmodal_rr .addCartConfirmBtn").
                    on("click", "#atcmodal_rr .addCartConfirmBtn",
                        mccAtcOverlay.certonaAddItem);
                    atcModal.customPositionModal();
                    //Moved this to tablet/fullsite routers...
                    // $('body').off("click", ".triggerATCAppliOverlayRecom").
                    //    on("click", ".triggerATCAppliOverlayRecom", 
                    //        _certonaAddItem);

                } catch (e) {
                    console.error("Error loading certona from ATC", e);
                }
            }
        }

        //Create Request
        mccAtcOverlay.buildRequest = function(atcRequestList) {
            var data = {
                "CartRequest": {
                    "itemDetails": atcRequestList
                }
            };
            if (mccAtcOverlay.BLINDS_CONFIG_ID != "") {
                data.CartRequest.copyGUIDRequired = "true";

            }
            return data;
        };

        /**
         * 
         */
        mccAtcOverlay.createOverlayContent = function(context, itemId, atcRequestList) {
            try {
                //pull out added item and create new field for template to use
                var totalQuantity = 0;
                var totalPrice = 0;
                var price;
                $.each(context.CartModel.itemModels, function(idx, item) {
                    if (item.itemId === itemId) {
                        // var itemQuantity = parseInt(item.quantity); 
                        // totalQuantity+=itemQuantity;
                        price = item.specialOfferPrice || item.unitPrice;
                        // if(item.specialOfferPrice){
                        //     price = (itemQuantity * Number(item.specialOfferPrice));
                        // }else{
                        //     price = Number(item.totalItemPrice);
                        // }
                        // totalPrice+=price;
                        context.CartModel.addedItem = item;
                        return false;
                    }
                });

                //trimming the product description to fit into the ATC overlay new design
                var description = context.CartModel.addedItem.description;
                if (description.length > 56) {
                    description = description.substring(0, 56) + "...";
                    context.CartModel.addedItem.description = description;
                }

                //update the added item with HDPP info            
                context.CartModel.addedItem = cartModel.hdppEligibleCheck(context.CartModel.addedItem);

                //check for HDPP errors from PIP ATC
                if (context.CartModel.addedItem.hdppEligible) {
                    var errorModel = context.CartModel.errorModel;
                    if (errorModel) {
                        $.each(errorModel, function(index, error) {
                            var id = error.correlationId;
                            if (id === context.CartModel.addedItem.warrantyLineItems.lineItem[0].itemId || id === context.CartModel.addedItem.lineItemId) {
                                context.CartModel.addedItem.showConfirmation = false;
                                context.CartModel.addedItem.showHDPPErrCntr = true;
                                return false;
                            }
                        });
                    }
                }

                //analytics for IR 
                context.CartModel.addedItem.isIRApplied = false;
                var priceDescriptionModel = context.CartModel.addedItem.priceDescriptionModel;
                if (priceDescriptionModel) {
                    $.each(priceDescriptionModel, function(index, priceDescription) {
                        if (priceDescription.shortDescription === "IR") {
                            context.CartModel.addedItem.isIRApplied = true;
                            return false;
                        }
                    });
                }
                //Update the IR message for ATC overlay. 
                if (context.CartModel.messagesModel) {
                    $.each(context.CartModel.messagesModel, function(index, messagesModel) {
                        if (messagesModel.correlationId === context.CartModel.addedItem.lineItemId) {
                            var name = messagesModel.name,
                                IRMessage = "";
                            if (name.indexOf('InstantRebate_Applied') >= 0) {
                                IRMessage = "Good news! An instant rebate is available in your area.";
                            } else if (name.indexOf('InstantRebate_Removed') >= 0) {
                                IRMessage = "The instant rebate is not available in your area.";
                            }
                            context.CartModel.messagesModel[index].shortDescription = IRMessage;
                            analytics.setError(IRMessage, "sys msg");
                        }
                    });
                }


                //calculate transaction quantity/price (the totals returned by ATC include
                //everything in the cart, we need to display only what was added in this call)
                $.each(atcRequestList, function(idx, item) {
                    totalQuantity += parseInt(item.quantity);
                });
                totalPrice = (totalQuantity * Number(price));

                context.CartModel.addedItem.totalQuantity = totalQuantity;
                context.CartModel.addedItem.totalItemPrice = Number(totalPrice).toFixed(2);

                var lineItemType = context.CartModel.itemModels[0].lineItemType;
                if (lineItemType === "Buy Online Pickup In Store" ||
                    lineItemType === "Buy Online Ship To Store") {
                    lineItemType = "BopisBoss";
                }
                context.CartModel.ppUrl = env.url.atcPaypal +
                    "&orderId=" + context.CartModel.orderId +
                    "&itemType=" + lineItemType +
                    "&itemCount=" + context.CartModel.totalItemCount;
            } catch (e) {
                console.error("Error calculating ATC totals", e);
            }
            var atcOverlayHtml = atcTemplates["thd.mcc.atcGmOverlay.template.hbs"](context.CartModel);
            return atcOverlayHtml;
        };

        /**
         *  Handle removal for value pricing item
         */
        function _bindMapValuePricing() {
            if (mccAtcOverlay.isMapValuePricing === "true") {
                $('.vp-map-remove').removeClass('hide');
                $(document).on('click', '.vp-map-remove a', function(e) {
                    e.preventDefault();
                    var dataItemId = $(this).attr('lineItem-Id');
                    // get cart item from cartModel for remove
                    mccAtcOverlay.cartData = analytics.getCartItemModel(mccAtcOverlay.cartData, dataItemId);
                    $.ajax({
                            url: env.url.cartRemove + "/" + dataItemId,
                            type: "POST",
                            xhrFields: {
                                withCredentials: true
                            },
                            headers: {
                                Accept: "application/json; charset=utf-8"
                            }
                        }).done(function(response) {
                            if (response) {
                                if (response && response.CartModel && !response.CartModel.errorModel) {
                                    var atcModal = $('.vp-map-remove').closest('.md-modal');
                                    atcModal.find('.md-title').html('<i class="vp-map-title-icon xlarge"></i>Removed from Cart');
                                    $('.vp-map-remove').addClass('hide');
                                    if (response.CartModel.totalItemCount) {
                                        mccAtcOverlay.updateMiniCart(response.CartModel.totalItemCount);
                                    } else {
                                        mccAtcOverlay.updateMiniCart(0);
                                    }

                                    //analytics - cart modification(remove from ATC overlay)
                                    $.event.trigger("REMOVE_ANALYTICS_EVENT", [mccAtcOverlay.cartData]);
                                }
                            }
                        })
                        .fail(function(error) {
                            console.log("Error - " + error);
                        });
                });
            }
        }

        //move to certona? using load Certona function from certonaController.js


        var atcCertonaRePos, atcCertonTimer = 0;

        //TODO: Move to certonaController?
        //Trigger ATC button from Certona in ATC overlay
        mccAtcOverlay.certonaAddItem = function(e) {
            e.preventDefault();
            var $this = $(this);
            var $addedToCartLabel = $('.addedTocartLabel', $this.parent());
            var href = $this.attr('href');
            var $errorAddToCart = $('#errorAddToCart');

            var data = mccAtcOverlay.getRequestData(href);
            $('#mccCertonaApplError').addClass('hide');

            loading.start($(".md-body"));
            atcService.addToCart(data).done(function(resp) {
                try {
                    loading.stop();
                    if (!resp || !resp.CartModel || resp.CartModel.errorModel) {
                        console.error("Error during add to cart. CartRequest=", data);
                        console.error("Response:", resp);
                        atcModal.showModalError(resp.CartModel.errorModel);
                    } else {
                        /*$('.innerValuesCartDetailTotalMCC span').html("$" + resp.CartModel.cartTotal);
                    $('#innerValuesCartDetailHeadMCC').html('Your Cart ('+resp.CartModel.totalItemCount+' Items)');*/
                        //updating the total item count and subtotal value on ATC GM overlay
                        cartModel.setModel(resp);
                        $("#hdppViewCart").html("View Cart (" + resp.CartModel.totalItemCount + ")");
                        $("#atcGMSubTotal").html(" $" + resp.CartModel.cartTotal);
                        $('#mccAtcCartTotal').html('Cart(' + resp.CartModel.totalItemCount + ' Items) | <span>$' + resp.CartModel.cartTotal + '<span>');
                        $this.hide();
                        $addedToCartLabel.css({
                            'visibility': 'visible',
                            'display': 'inline-block'
                        });
                        setTimeout(function() {
                            $addedToCartLabel.css({
                                'visibility': 'hidden',
                                'display': 'none'
                            });
                            $this.show();
                            $errorAddToCart.hide();
                        }, 3000);
                        mccAtcOverlay.updateMiniCart(resp.CartModel.totalItemCount);

                        //Analytics - ATC Certona Item 
                        var cartItem = [analytics.getCartItemModel(resp.CartModel, data.CartRequest.itemDetails[0].itemId)];
                        $.event.trigger("ATC_ANALYTICS_EVENT", [cartItem, resp.CartModel]);
                    }
                } catch (e) {
                    console.error("Error adding Certona item to cart", e);
                    $errorAddToCart.show();
                    atcModal.showModalError();
                }
            }).fail(function() {
                $errorAddToCart.show();
                atcModal.showModalError();
            });
        };

        /**
         * BOSS/BOPIS items updated via the SmartOverlay in Cart will be captured
         * in order to adjust the ATC logic (update this item, add any others)
         * TODO: need to remove this if user closes overlay without updating!
         */
        var BOSS_BOPIS_UPDATE_ITEM;
        mccAtcOverlay.BLINDS_CONFIG_ID = "";
        mccAtcOverlay.setBossBopisUpdateWatch = function(updateItem) {
            // {
            //  itemId: 
            //  quantity: 
            //  fulfillmentMethod: "BOPIS"|"ShipToStore"
            //  fulfillmentLocation:
            // }

            //trim leading zero from fulfillmentLocation (store) 
            //to ensure match with ATCrequestList entries
            try {
                var storeId = updateItem.fulfillmentLocation;
                if (updateItem.configurationId) {
                    mccAtcOverlay.BLINDS_CONFIG_ID = updateItem.configurationId;
                }
                if (storeId.indexOf("0") === 0) {
                    updateItem.fulfillmentLocation = storeId.slice(1);
                }
            } catch (e) {
                console.error("Error trimming leading zero from BOSS_BOPIS_UPDATE_ITEM", e);
            }

            BOSS_BOPIS_UPDATE_ITEM = updateItem;
        };

        function _doATCFromCart(atcRequestList) {
            try {
                //Serialize the add and update due to apparent WCS thread issues, occasionally
                //get errors when add and update sent simultaneously.
                //perform ATC for items in cart
                if (atcRequestList.length > 0) {
                    var data = mccAtcOverlay.buildRequest(atcRequestList);
                    atcService.addToCart(data, true /*flag to suppress cart refresh on add*/ ).fail(function(e) {
                        console.error("Error adding item(s) to cart, from cart", e);
                    }).done(function(resp) {
                        if (resp && resp.CartModel && !resp.CartModel.errorModel) {
                            cartMessageModel.setMessageModal(resp.CartModel);
                            _doUpdateFromCart();
                        } else {
                            //Something went wrong, at least we will keep the original item intact
                            _reloadCartAfterSmartoverlayUpdate();
                            atcModal.showModalError();
                        }
                    });
                } else {
                    _doUpdateFromCart();
                }
                //perform update for update item
            } catch (e) {
                console.error("Error doing Add/Update from BossBopis Overlay", e);
                _reloadCartAfterSmartoverlayUpdate();
            }
        }

        function _doUpdateFromCart() {
            atcService.updateItem(BOSS_BOPIS_UPDATE_ITEM)
                .fail(function(e) {
                    console.error("Error updating existing BOSS/BOPIS item from smart overlay", e);
                })
                .always(_reloadCartAfterSmartoverlayUpdate);
        }

        function _reloadCartAfterSmartoverlayUpdate(resp) {
            $.event.trigger('CART_RELOAD_CART_CONTENT', [resp]);

            //Analytics - BOSS/BOPIS update from cart 
            var cartItem = [analytics.getCartItemModel(resp.CartModel, BOSS_BOPIS_UPDATE_ITEM.lineItemId)];
            $.event.trigger("ATC_ANALYTICS_EVENT", [cartItem, resp.CartModel]);

            //reset
            BOSS_BOPIS_UPDATE_ITEM = null;
            mccAtcOverlay.BLINDS_CONFIG_ID = "";
        }

        /**
         * Check for a BOSS/BOPIS update item (from Cart)
         * If found set BOSS_BOPIS_UPDATE_ITEM details to first item in request list, remove from list
         * Return indicator of item present
         */
        function _handleBossBopisUpdateItem(atcRequestList) {
            try {
                if (BOSS_BOPIS_UPDATE_ITEM) {
                    var itemIndex = -1;
                    //look for the watch item in the atc list, 
                    //if found, remove it.
                    $.each(atcRequestList, function(index, item) {
                        if (this.itemId === BOSS_BOPIS_UPDATE_ITEM.itemId &&
                            this.fulfillmentLocation === BOSS_BOPIS_UPDATE_ITEM.fulfillmentLocation &&
                            this.fulfillmentMethod === BOSS_BOPIS_UPDATE_ITEM.fulfillmentMethod || (item.updateVal)) {
                            itemIndex = index;

                            BOSS_BOPIS_UPDATE_ITEM.quantity = this.quantity;
                            BOSS_BOPIS_UPDATE_ITEM.fulfillmentLocation = this.fulfillmentLocation;
                            BOSS_BOPIS_UPDATE_ITEM.fulfillmentMethod = this.fulfillmentMethod;
                        }
                    });
                    if (itemIndex > -1) {
                        //remove from data
                        atcRequestList.splice(itemIndex, 1);
                    } else {
                        //if not in list, this means the location for the item in smartoverlay was
                        //not selected, so set the BOSS_BOPIS_UPDATE_ITEM to the first item in atcRequest
                        var firstItem = atcRequestList.pop();
                        if (firstItem) {
                            BOSS_BOPIS_UPDATE_ITEM.quantity = firstItem.quantity;
                            BOSS_BOPIS_UPDATE_ITEM.fulfillmentLocation = firstItem.fulfillmentLocation;
                            BOSS_BOPIS_UPDATE_ITEM.fulfillmentMethod = firstItem.fulfillmentMethod;
                        } else {
                            //hmm, fall back on original logic to remove the item
                            BOSS_BOPIS_UPDATE_ITEM.quantity = 0;
                        }

                    }
                }
            } catch (e) {
                console.error("Error trying to get boss/bopis update item during ATC", e);
            }

            return atcRequestList;
        }

        //Allow update item to be reset (cancel from BOSS/BOPIS)
        mccAtcOverlay.clearBossBopisUpdateWatch = function() {
            BOSS_BOPIS_UPDATE_ITEM = null;
        };

        /*
         * Build request data object (used only by Certona ATC now)
         *###################################
         * Carryover of old logic...
         * TODO: need to refactor Certona into same flow as other types.
         *###################################
         */
        mccAtcOverlay.getRequestData = function(url) {
            var params = env.getParams(url);
            var itemId = params.catEntryId || params.catId || params.catEntryId_2 || params.catId_1;
            var quantity = params.quantity || params.quantity_2 || params.quantity_1 || "1";

            var data = {
                "CartRequest": {
                    "itemDetails": []
                }
            };

            data.CartRequest.itemDetails.push({
                "itemId": itemId,
                "quantity": quantity //,
                    // Will use backend to determine available fulfillment
                    // "fulfillmentLocation": "DirectShip",
                    // "fulfillmentMethod": "ShipToHome"
            });

            return data;
        };

        require(['shared/atc/thd.mcc.AddToCart'], function(mccAtc) {

            mccAtc.init();
        });

        return mccAtcOverlay;
    });

$(document).on('submit', '.bopis-selector #bopisSearchOverlayForm', function() {
    $('.smtOvbtnStoreFinder').click();
    return false;
});
$(document).on('submit', '.bopis-selector #bopisOverlayForm, .bopis-selector #bopisOverlayFormOther', function() {
    $('.bopis-selector .btn-bopis').click();
    return false;
});

// PARTS & SERVICES OVERLAY

define('shared/atc/thd.mcc.parts.services',
    [ 'jquery',
      'cart/env'
    ],
function($, env) {
	var mccPartsAndServicesOverlay = {};

	mccPartsAndServicesOverlay.partsServicesOverlay = function(){	
		checkChecks();
		calculateSubTotal();
		var shieldImgUrl=env.protocol + env.host +"/MCCCheckout/static/MCC/scripts/global/images/hdppShield_fullsite.jpg";
		$("#warrantySheildImg").attr("src",shieldImgUrl);
		var isReqPresent ,isOptionalPresent ,isWarrantyPresent=false;
		var fromPage = $('#fromPage').val();
		// BACK/NEXT NAV BUTTONS
		if($("#tab1").length>0){
			isReqPresent=true;
		}
		if($("#tab2").length>0){
			isOptionalPresent=true;
		}
		if($("#tab3").length>0){
			isWarrantyPresent=true;
		}
		
		// allows the user to select any tab without using the buttons and retains checkbox on the last tab
		var lastSelectedTab = $('.parts-services-tabs > li > #tab1');
		lastSelectedTab.data("prev", lastSelectedTab.prop("id"));
		$( ".parts-services-tabs  > li " ).change(function() {
			var lastTab = lastSelectedTab.data("prev");
			if (typeof lastTab !== 'undefined') {
				$("label[for='" + lastTab + "']").find("i").addClass("icon-verified-symbol");
			}
			lastSelectedTab.data("prev", $(this).find("input").prop("id"));
		});
		
		$('.backBtnMCC').on('click', function() {
			
			var id = $('input[name=tabs]:checked').prop('id');
			$("#completeParts").addClass("hide");
			$("#pnsSaveChangeText").addClass('hide');
			if (id == "tab2") {
				$('input#tab1').prop('checked', true);
				$("#back").addClass("hide");
				$("#next").removeClass("hide");
				$('.parts-services-tabs > li > label[for="' + id + '"] > i').addClass('icon-verified-symbol');
			}
			if (id == "tab3") {
				if(isOptionalPresent){
					$('input#tab2').prop('checked', true);
					$("#next").removeClass("hide");
				}
				else if(!isOptionalPresent && isReqPresent){
					$('input#tab1').prop('checked', true);
					$("#next").removeClass("hide");
				}
				$('.parts-services-tabs > li > label[for="' + id + '"] > i').addClass('icon-verified-symbol');
			}
			//analytics - parts and services overlay
			$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", [null, null]);
		});
		
		$('.nextBtnMCC').on('click', function() {
			var id = $('input[name=tabs]:checked').prop('id');
			$("#back").removeClass("hide");
			if (id == "tab1") {
				if(isOptionalPresent&&isWarrantyPresent){				
					$('input#tab2').prop('checked', true);
				}
				else if(isOptionalPresent&&!isWarrantyPresent){
					$('input#tab2').prop('checked', true);
					$("#next").addClass("hide");
				    if(fromPage!="shoppingCart"){
				    	$("#pnsSaveChangeText").removeClass('hide');	
				    }	
					$("#completeParts").removeClass("hide");
				}
				else if(!isOptionalPresent&&isWarrantyPresent){
					$('input#tab3').prop('checked', true);
					$("#next").addClass("hide");
					$("#completeParts").removeClass("hide");
					if(fromPage!="shoppingCart"){
				    	$("#pnsSaveChangeText").removeClass('hide');	
				    }
				}
				$('.parts-services-tabs > li > label[for="' + id + '"] > i').addClass('icon-verified-symbol');
			}
			if (id == "tab2") {
				$('input#tab3').prop('checked', true);
				$("#next").addClass("hide");
				$("#completeParts").removeClass("hide");
				$('.parts-services-tabs > li > label[for="' + id + '"] > i').addClass('icon-verified-symbol');
				if(fromPage!="shoppingCart"){
			    	$("#pnsSaveChangeText").removeClass('hide');	
			    }
			}
			//analytics - parts and services overlay
			$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", [null, null]);
		});	
		if(!isReqPresent){
			if(isOptionalPresent && isWarrantyPresent){
				$('input#tab2').prop('checked', true);
				$("#next").removeClass("hide");
				$("#completeParts").addClass("hide");
				$("#pnsSaveChangeText").addClass('hide');
				
			}
			else if(!isOptionalPresent && isWarrantyPresent){
				$('input#tab3').prop('checked', true);
				$("#next").addClass("hide");
				$("#back").addClass("hide");
				$("#completeParts").removeClass("hide");
				if(fromPage!="shoppingCart"){
			    	$("#pnsSaveChangeText").removeClass('hide');	
			    }
			}
			else if(isOptionalPresent && !isWarrantyPresent){
				$('input#tab2').prop('checked', true);
				$("#next").addClass("hide");
				$("#back").addClass("hide");
				$("#completeParts").removeClass("hide");
				if(fromPage!="shoppingCart"){
			    	$("#pnsSaveChangeText").removeClass('hide');	
			    }
			}
		}
		else if(isReqPresent&&!isOptionalPresent&&!isWarrantyPresent){
			$("#next").addClass("hide");
			$("#back").addClass("hide");
			$("#completeParts").removeClass("hide");
			if(fromPage!="shoppingCart"){
		    	$("#pnsSaveChangeText").removeClass('hide');	
		    }
		}
		
		
		// TABS NAVIGATION
		$('#tab3').on('click', function(e) {
			e.stopPropagation();
			$("#next").addClass("hide");
			$("#completeParts").removeClass("hide");
			if(fromPage!="shoppingCart"){
		    	$("#pnsSaveChangeText").removeClass('hide');	
		    }
			if(!isReqPresent&&!isOptionalPresent){
				$("#back").addClass("hide");
			}else{
				$("#back").removeClass("hide");
			}
			
		});
		
		$('#tab1').on('click', function(e) {
			e.stopPropagation();
			$("#back").addClass("hide");
			if(!isOptionalPresent&&!isWarrantyPresent){
				$("#back").addClass("hide");
				$("#next").addClass("hide");
				$("#completeParts").removeClass("hide");
				if(fromPage!="shoppingCart"){
			    	$("#pnsSaveChangeText").removeClass('hide');	
			    }
			}
			else{
				$("#completeParts").addClass("hide");
				$("#pnsSaveChangeText").addClass('hide');
				$("#next").removeClass("hide");
			}
			//analytics - parts and services overlay
			$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", [null, null]);
		});
		$('#tab2').on('click', function(e) {
			e.stopPropagation();
			$('input#tab2').prop('checked', true);	
			if(isWarrantyPresent&&isReqPresent){
				$("#back").removeClass("hide");
				$("#next").removeClass("hide");
				$("#completeParts").addClass("hide");
				$("#pnsSaveChangeText").addClass('hide');
			}
			else if(isWarrantyPresent&&!isReqPresent){
				$("#back").addClass("hide");
				$("#next").removeClass("hide");
				$("#completeParts").addClass("hide");
				$("#pnsSaveChangeText").addClass('hide');
			}
			else if(!isWarrantyPresent&&isReqPresent){
				$("#next").addClass("hide");
				$("#completeParts").removeClass("hide");
				if(fromPage!="shoppingCart"){
			    	$("#pnsSaveChangeText").removeClass('hide');	
			    }
				$("#back").removeClass("hide");
			}
			//analytics - parts and services overlay
			$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", [null, null]);
		});
		
		// Install radio buttons
		$("a.installBtn").on("click", function(e) {
			e.preventDefault();
			$('.installBtn').removeClass('active');
			$(this).addClass('active');
			checkChecks();
			calculateSubTotal();
		});
		
		// Warranty radio button
		$("a.warrantyBtn").on("click", function(e) {		
			if(!$(this).hasClass('active')){
				e.preventDefault();			
				$('.warrantyBtn').removeClass('active');
				$(this).addClass('active');
				
			}
			calculateSubTotal();
		});
		
		//Check Box Change Event
		$(document).on('change','#parts-services-selector input[type=checkbox]', function(){
			calculateSubTotal();
		});

		// If install selected, check required parts and disable the buttons
		// This prevents user from deselecting parts required for installation.
		function checkChecks() {
			partsServicesTextHookup = $("#tab-content1 > .text-secondary");
			if ($('#yesInstall').hasClass('active')) {
				$('#parts-services-selector-required input').prop('checked', true).addClass('disabled-mcc');
				$('#parts-services-selector-required input').prop('disabled', true);
				partsServicesTextHookup.text("These pre-selected parts are needed for proper installation of your appliance. Existing parts cannot be reused.");
			}
			else if ($('#noInstall').hasClass('active')) {
				$('#parts-services-selector-required input').prop('checked', false).removeClass('disabled-mcc');
				$('#parts-services-selector-required input').prop('disabled', false);
				partsServicesTextHookup.text("These parts and services are optional but are recommended for proper installation.");
			}
		}


		// Keep track of items selected, add the numbers together, create array of items
		// Create URL with items to add to cart
		function calculateSubTotal() {
				var cost_for_selected_items=calaculateRqdPartsCost()+calaculateOptnlPartsCost()+calaculateWarrantyCost()+calaculateinstallationsCost();
				var $updatedSubtotal = parseFloat($("#applianceSubTotal").val());
				$updatedSubtotal+=cost_for_selected_items;
				$updatedSubtotal=$updatedSubtotal.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
				$('#updatedSubtotal').html('$'+ $updatedSubtotal);
		}

		function calaculateRqdPartsCost(){
			var rqd_parts_cost = 0.00;
			$('#parts-services-selector-required input:checkbox:checked').map(function(i) {					
				rqd_parts_cost+= parseFloat($(this).attr('data-cost')); 
			});
			return rqd_parts_cost;
		}

		function calaculateOptnlPartsCost(){			
			var opt_parts_cost = 0.00;
			$('#parts-services-selector-optional input:checkbox:checked').map(function(i) {					
				opt_parts_cost+= parseFloat($(this).attr('data-cost')); 
			});	
			return opt_parts_cost;			
		}

		function calaculateWarrantyCost(){		
			var warrantyCost=0.00;
			$.each($('#parts-services-selector-warranty #warrantyList a'), function( key, value ) {
				if($(this).hasClass('active')){
					warrantyCost = parseFloat($(this).attr('data-cost'));
				}
			});
			return warrantyCost;
		}
		
		function calaculateinstallationsCost(){			
			var install_cost = 0.00;
			$.each($('#installHookUpCntr a'), function( key, value ) {
				if($(this).hasClass('active')){					
					install_cost = parseFloat($(this).attr('data-cost'));
				}
			});	
			return install_cost;			
		}
	};
	
	return mccPartsAndServicesOverlay;
});
/**
This File Porpose is to Triggert Appliances ATC button in Appliances Overlay in Certona 
 */

define("shared/certona/certonaInAppOverlay", [
        "jquery",
        "cart/env",
        "require",
        'shared/atc/thd.mcc.atc.Services',
        "shared/atc/thd.mcc.atcOverlayAppliance"

    ],
    function($, env, require, atcService, atcOverlayAppliance) {
        var certonaApp = {},
            zipCode,
            itemId,
            deliveryAvailability,
            statusCode,
            serverErrorCode = "",
            etaDate = "",
            avlDates = "",
            $this,

            addApplToCart = function(data) {

                deliveryAvailability = data.deliveryAvailabilityResponse.deliveryAvailability;
                if (deliveryAvailability && deliveryAvailability.availability && deliveryAvailability.availability.status) {
                    statusCode = deliveryAvailability.availability.status;
                } else if (data.deliveryAvailabilityResponse.errorData &&
                    data.deliveryAvailabilityResponse.errorData.errors.error) {
                    serverErrorCode = data.deliveryAvailabilityResponse.errorData.errors.error.errorCode;
                }

                if (statusCode === "AVAILABLE") {
                    //invoke second call
                    avlDates = data.deliveryAvailabilityResponse.deliveryAvailability.deliveryInfo;
                    if ($.isArray(avlDates)) {
                        etaDate = formatDate(avlDates[0].date);
                    } else {
                        etaDate = formatDate(avlDates.date);
                    }
                    require(['shared/atc/thd.mcc.atcOverlayAppliance'],
                        function(atcOverlayAppliance) {
                            var data = atcOverlayAppliance.getRequestData(itemId, zipCode, etaDate);

                            var additemPromise = atcOverlayAppliance.callATCService(data, atcService.getMccAtcServiceURL());

                            additemPromise.done(function(resp) {
                                console.log('itemAdded'+resp)
                                var cartTotal = resp.CartModel.cartTotal;
                                var cartItemTotal = resp.CartModel.totalItemCount;
                                var $addedTocartLabel = $('.addedTocartLabel', $this.parent());
                                $('#mccAtcCartTotal').html('Cart('+cartItemTotal+' Items) | <span>$'+cartTotal+'<span>')
                                $this.hide();
                                $addedTocartLabel.css({
                                    'display': 'inline-block'
                                });
                                setTimeout(function() {
                                    $addedTocartLabel.css({
                                        'display': 'none'
                                    });
                                    $this.show();
                                }, 3000);
                            });
                        }
                    );
                };
            },


            formatDate = function(timestamp) {
                if (timestamp.length >= 10) {
                    return timestamp.substring(5, 7) + "/" + timestamp.substring(8, 10) + "/" + timestamp.substring(0, 4);
                }
            };

        certonaApp.certonaAddAppl = function() {
            zipCode = readCookie("THD_AOL").split(",")[0];
            //zipCode = zipCode;
            $this = $(this);
            itemId = $this.attr('data-prodid');
            //console.log(zipCode)
            //console.log(itemId);
            require(['shared/atc/thd.mcc.atcOverlayAppliance'],
                function(atcOverlayAppliance) {
                    //certonaController.loadCertona(options);

                    var deliveryDatePromise = atcOverlayAppliance.getDeliveryDateService(zipCode, itemId);
                    deliveryDatePromise.done(function(resp) {
                       // console.log('success___');
                       // console.log(resp);
                        addApplToCart(resp);
                        // atcOverlayAppliance.handleDeliveryDateResponse(resp, zipCode, itemId);
                    }).fail(function(e) {
                      // console.log('fail')
                            // var errResponse = e.responseText;
                            //if (errResponse) {
                            // try {
                            //  errResponse = jQuery.parseJSON(errResponse);
                            // mccAtcOverlayAppl.handleDeliveryDateResponse(errResponse, zipCode, itemId);
                            //}
                            //  }
                    });
                });

        };

        return certonaApp;
    });

/**
 * Handle MCC version of Add To Cart clicks for Appliances
 * Orchestrates logic need to:
 *  - Check delivery availibility
 *	  - use persisted zip to automatically check 
 *		-(zipcode from previous ATC operation or cookie (THD-AOL))
 *	  - if no zip, prompt user to check availability
 *		- perform product detail lookup to populate overlay
 *	- Perform Add To Cart if available
 *		- if unavailable, display errors and allow user to provide new zip 
 *	- Initiate Edit Parts & Service (P&S)
 *		- populate P&S overlay
 *		- allow save, continue shopping
 */

define('shared/atc/thd.mcc.atcOverlayAppliance',
[ 
  'jquery',
  'cart/env',
  'cart/CartModel',
  'shared/atc/thd.mcc.atcOverlayModal',
  'shared/atc/thd.mcc.atcOverlay',
  'shared/atc/thd.mcc.atc.Services',
  'shared/atc/thd.mcc.parts.services',
  'shared/certona/certonaInAppOverlay',
  'shared/certona/certonaController',
  'shared/utils/LoadingCoverUp',
  'analytics',
  'templates-precompiled-atc'
],
function(
	$, 
	env, 
	cartModel,
	atcModal,
	mccAtcOverlay,
	atcService,
	mccPartsAndServicesOverlay,
	certonaInAppOverlay,
	certonaController,
	loading,
	analytics,
	atcTemplates
	) {
	
	var mccAtcOverlayAppl = {};

    var itemId = null;
	var directATCFlow = false;
	var prodInfoHTML = "";
	var backOrdATC=false;


	var changeZipcodeUrl;
	
	mccAtcOverlayAppl.DDdown1 =false;
	mccAtcOverlayAppl.DDdown2 =false;
	mccAtcOverlayAppl.noSlotsAvail=false;

	mccAtcOverlayAppl.mapAboveOriginalPrice = "";
	mccAtcOverlayAppl.map2VPRemoveLink = "";

	/**
	 * Preserve zipcode prefilled value between add-to-cart operations
	 */
	mccAtcOverlayAppl.zipCodePreFillVal = "";
	

	mccAtcOverlayAppl.cartModelWithAddedItem = null;

    /**
     * Display overlay for zipcode lookup, or go directly to Added To Cart 
     *
     * @param atcRequest (should be a single appliance item)
     *			itemId: 				"prodId"
     *			quanitity: 				1
     *			fulfillmentLocation: 	zipcode|null
     *			fulfillmentMethod: 		"DirectDelivery"
     * @param applConfig   
     *			prodStatus: 			config.prodStatus
     *			delvDate: 				config.delvDate
     */

	//Add Appliance to cart
	mccAtcOverlayAppl.invokeATCService= function(atcRequest, etaDate, isCertona){
		var itemId = atcRequest.itemId;
		var zipCode = atcRequest.fulfillmentLocation;
		mccAtcOverlayAppl.zipCodePreFillVal=zipCode;
		
		console.debug("Service call to add to cart: ", atcRequest, etaDate, isCertona);
		var data = _getRequestData(atcRequest, etaDate);      
        var atcPromise = atcService.addToCart(data);
        
        atcPromise.done(function(resp){
        	if(resp && resp.CartModel && resp.CartModel.itemModels){
        		try{
        			// set the model
                	cartModel.setModel(resp);
        			mccAtcOverlay.updateMiniCart(resp.CartModel.totalItemCount);
        			if(!isCertona){
		        		//notify Cart to update (if on Cart page)
		                $.event.trigger('CART_RELOAD_CART_CONTENT');
		        		
		        		//if no error load P&S details
		            	var partServicePromise = atcService.getPartsAndServicesService(itemId, zipCode);
		                var modalHtml = mccAtcOverlayAppl.createOverlayContent(resp, itemId, etaDate);

		    			var modal = atcModal.loadModalContent(modalHtml, "Added to Cart");
		    			
		    			// Analytics - add to cart event(APPL)
		    			mccAtcOverlayAppl.cartData	=	resp.CartModel;
		    			_handleAtcEvent(resp.CartModel, itemId);
		    			
						_updateModalAfterAddToCart(modal, etaDate);
					    			
						_handlePartsAndServices(modal, partServicePromise);

		    			_handleDeferredPartsAndServices(modal,itemId, zipCode, mccAtcOverlayAppl.cartModelWithAddedItem, partServicePromise);
						
		    			atcModal.updateMapAtcModal();
		    			
						if(mccAtcOverlayAppl.map2VPRemoveLink === "true"){
							$('.atc-price-info-section .map-data-default').remove();
							$('.atc-price-info-section .map-data-shwprice').removeClass('hide');
							_handleVpMap(modal);
						}
						if(mccAtcOverlayAppl.map2VPRemoveLink === "false"){
							$('.atc-price-info-section .map-data-default').remove();
							$('.atc-price-info-section .map-data-shwprice').removeClass('hide');
							_handleVpMap(modal);
						}
						

                            _handleCertonaRecommendations(itemId);
                    } else {
                        _handleCertonaSuccess(resp.CartModel, itemId);
                    }

                } catch (e) {
                    if (!isCertona) {
                        console.error("Error handling Appliance ATC response after success", e);
                        $(".md-modal-atc .md-title .icon-checkmark-success").removeClass('hide');
                        atcModal.loadModalContent("Your item was added to the Cart", "Added to Cart");
                    } else {
                        // System Error for Certona
                        mccAtcOverlayAppl.handleATCErrorScenariosCertona(resp.CartModel.errorModel[0].errorCode,itemId);
                    }
                }

            } else {
                console.warn("Appliance ATC Error: ", resp.CartModel.errorModel[0], zipCode);

                if (!isCertona) {
                	_handleATCErrorScenarios(resp.CartModel.errorModel[0].errorCode, zipCode);
   
                } else {
                    mccAtcOverlayAppl.handleATCErrorScenariosCertona(resp.CartModel.errorModel[0].errorCode,itemId);
                }
            }
            }).fail(function(e) {
                console.error("Error adding item to cart", e);
                backOrdATC = false;
                $("#checkAvailableMessage,#zipChecker,#checkAvailableZip,#checkAvailableBtn_MCC").addClass('hide');
                $("#checkAvailableError").removeClass('hide');
                $("#checkAvailableError").addClass('more-than-two-appl-error');
                $("#checkAvailableError p").html("Sorry, but we were unable to add this item to the cart due to a system error.<br><br> Please try again.");
				// analytics - primary error capture
				$.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [$("#checkAvailableError p").text()]);

            }).always(function() {
                loading.stop();
            });
        };

	/**
	 * Handle Certona success differently (change button label and cart/item counts);
	 */
	function _handleCertonaSuccess(cartModel, itemId){
            console.debug('_handleCertonaSuccess()', cartModel);
      		var certonaButton = $("#ma_atcmodal_rr a[data-prodid='" + itemId + "']");
            var cartTotal = cartModel.cartTotal;
            var cartItemTotal = cartModel.totalItemCount;
            var $addedTocartLabel = $('.addedTocartLabel', certonaButton.parent());
            //$('#mccAtcCartTotal').html('Cart('+ cartItemTotal +' Items) | <span>$'+ cartTotal +'<span>');
            $('#mccAtcCartTotal').html('Cart('+ cartItemTotal +' Items) | <span>$'+ cartTotal +'<span>');
            // analytics - overlay change event(certona)
	 		$.event.trigger("APPLIANCE_OVERLAY_CHANGE_EVENT", [cartModel, itemId]);
			certonaButton.hide();
            $addedTocartLabel.css({
                'display': 'inline-block',
                'visibility':'visible'
            });
            setTimeout(function() {
                $addedTocartLabel.css({
                    'display': 'none'
                });
                certonaButton.show();
            }, 3000);
            
            //Analytics - Appl ATC Certona Item 
            _handleAtcEvent(cartModel, itemId);
	}

	function _updateModalAfterAddToCart(modal, etaDate){
		// TODO: move to func
		$(".md-modal-atc .md-title .icon-checkmark-success").removeClass('hide');
		$(".zipCheckerElements").addClass("hide");
		$(".icon-calendar").removeClass("hide");

		if(backOrdATC){
			backOrdATC=false;
			$("#checkAvailableMessage").removeClass('hide');
			$("#zipChecker").addClass('hide');		
			$("#checkAvailableMessage .uppercase").html("On BackOrder Until: <br>"+ etaDate);    				
		}
	}

	function _handleDeferredPartsAndServices(modal,itemId, zipCode, cartModel, partServicePromise){
		if((cartModel.automatedOrderCompletion && cartModel.automatedOrderCompletion==="N")  || 
				cartModel.addedItem.shipType==="30" || (mccAtcOverlayAppl.noSlotsAvail && cartModel.automatedOrderCompletion==="Y")){
			mccAtcOverlayAppl.noSlotsAvail=false;
			$("#checkAvailableMessage,#backOrdBtnSec,#sameZipCodeMsg,#contactLocalStr,#checkAvailableError,#myDeleiveryLocationCntr").addClass('hide');
			$("#zipChecker,#checkAvailableZip,#checkAvailableBtn_MCC,.icon-calendar,enterZipMsg,#addToCart").addClass('hide');
			$("#checkAvailableMessage").removeClass('hide');
			$("#checkAvailableMessage").addClass('dd-dwon-atc-err');
			$("#checkAvailableMessage .uppercase").html("Delivery dates are currently unavailable for review. You can still continue shopping and check availability during checkout.");
			// analytics - primary error capture
			$.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [$("#checkAvailableMessage .uppercase").text()]);
			$("#checkAvailableMessage .uppercase").removeClass('uppercase');
			if(cartModel.addedItem.shipType==="30" ){
				$("#applATCBtnsDDErr").removeClass('hide');
				$("#applATCBtnsCntr").addClass('hide');
				$("#applATCBtnsDDErr #goToCartBtn").attr("href",env.url.viewCart);
			}
			else if(mccAtcOverlayAppl.DDdown1){
				mccAtcOverlayAppl.DDdown1=false;
				$("#applATCBtnsCntr").removeClass('hide');
				//partServicePromise = atcService.getPartsAndServicesService(itemId, zipCode);
				modal.find("#selectParts").click(function(){
    				//show P&S overlay
    				mccAtcOverlayAppl.displayPartsAndServices(partServicePromise, cartModel);
    			}); 
			}
			else if(mccAtcOverlayAppl.DDdown2){
				mccAtcOverlayAppl.DDdown2=false;
				$("#applATCBtnsDDErr").removeClass('hide');
				$("#applATCBtnsCntr").addClass('hide');
				$("#applATCBtnsDDErr #goToCartBtn").attr("href", env.url.viewCart);
			}   
		}
	}
	
	// analytics - ATC appliance
	function _handleAtcEvent(cartModel, itemId) {
		var cartItem = [analytics.getCartItemModel(cartModel, itemId)];
        $.event.trigger("ATC_ANALYTICS_EVENT", [cartItem, cartModel]);
	}

	//TODO: move service call to atc.services
	function _handleVpMap(modal){
		modal.find(".vp-map-remove").removeClass('hide');
		modal.find(".vp-map-remove a").click(function(e){
			e.preventDefault();
			var dataItemId = $(this).attr('lineItem-Id');
			// get cart item from cartModel for remove
			mccAtcOverlayAppl.cartData = analytics.getCartItemModel(mccAtcOverlayAppl.cartData, dataItemId);
			$.ajax({		
			url		:	 env.url.cartRemove + "/" + dataItemId,
			type 	:	"POST",
			xhrFields: { withCredentials: true },
					headers: { 
			        	Accept : "application/json; charset=utf-8"
			}
			})
			.done(function(response) {
				if(response != null && response != undefined)	{
					if(response && response.CartModel && !response.CartModel.errorModel){  
						// console.log('Appliance overlay item removed from back-end n cart');
						var atcModal = $('.vp-map-remove').closest('.md-modal');
						atcModal.find('.md-title').html('<i class="vp-map-title-icon xlarge "></i>Removed from Cart');
						modal.find('.vp-map-remove').addClass('hide');
						modal.find('#selectParts').addClass('hide');
						if(response.CartModel.totalItemCount){
							mccAtcOverlay.updateMiniCart(response.CartModel.totalItemCount);
						}else{
							mccAtcOverlay.updateMiniCart(0);
						}
						//analytics - cart modification(remove from ATC overlay)
						$.event.trigger("REMOVE_ANALYTICS_EVENT", [mccAtcOverlayAppl.cartData]);
					}
				}
			})
			.fail(function(error) {
				console.log("Error - "+ error);
			});
		});
	}

	function _handlePartsAndServices(modal, partServicePromise){
        //bind "Select Parts" button
		$("#applATCBtnsCntr").removeClass('hide');
		$("#applATCBtnsCntr #editCartBtn").attr("href",env.url.viewCart);
		// analytics - no parts and services action capture
		$("#applATCBtnsCntr #editCartBtn, .md-modal .md-close").click(function() {
			analytics.setPartsAndServicesOptOut();		
		});
		modal.find("#selectParts").click(function(){
			//show P&S overlay
			mccAtcOverlayAppl.displayPartsAndServices(partServicePromise, mccAtcOverlayAppl.cartModelWithAddedItem);
		});
	}

	function _handleATCErrorScenarios(errCode, zipCode){
		try{			
			if(errCode =="CART_ERR_125"){
				//TODO: what should the title be for error messages?
				$('.md-title').text('Check Availability');
				$("#checkAvailableError").removeClass('hide');
				$("#checkAvailableError").addClass('more-than-two-appl-error');
				$("#checkAvailableError p").text("Sorry, but only two of the same appliance may be purchased per order.");
				// analytics - primary error capture
				$.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [$("#checkAvailableError p").text()]);
			}
			else if(errCode =="CART_ERR_124"){
				//more than 12 items in cart         			
				// $("#checkAvailableMessage,#zipChecker,#checkAvailableZip,#checkAvailableBtn_MCC").addClass('hide');
				$("#checkAvailableError,#applATCErrCntr").removeClass('hide');
				$("#checkAvailableError").addClass('more-than-twelve-appl-error');
				$("#editCartBtn").attr('href', env.url.viewCart);
				$("#checkAvailableError p").text("Sorry, but a maximum of 12 appliances may be purchased per order. To add this appliance to the cart, you must first remove another item.");
				// analytics - primary error capture
				$.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [$("#checkAvailableError p").text()]);
			}  
			else if(errCode =="CART_ERR_100"){
				//description: "All major appliances must be shipped to the same ZIP code.
				//Restore original zipcode and disable field
				try{
					//Cookie may be a bad zipcode! 
					//var cookieZip = readCookie("THD_AOL").split(",")[0];
		    		//validate store zipcode
					// if (cookieZip && (cookieZip.length === 5) && (/^\d{5}$/.test(cookieZip))) {
					// 	mccAtcOverlayAppl.zipCodePreFillVal=cookieZip;
					// }else{
					// 	mccAtcOverlayAppl.zipCodePreFillVal="";
					// }
				$('.md-title').text('Check Availability');
				$("#checkAvailableZip,#checkAvailableBtn_MCC").removeClass("hide");
				$(".icon-calendar,#enterZipMsg").addClass('hide');
				$("#sameZipCodeMsg").removeClass('hide');
					atcService.getCurrentDeliveryZipCode().done(function(savedZipCode){
						if(savedZipCode){
							$(".check-available-input").val(savedZipCode);
					$(".check-available-input").attr("disabled","disabled"); 	
							mccAtcOverlayAppl.zipCodePreFillVal=savedZipCode;
				}
					});
				}catch(e){
					console.error("Error reading zipcode from cookie.", e);
				}
			}
			else if(errCode =="CART_ERR_157" || errCode =="CART_ERR_170"){
				$('.md-title').text('Check Availability');
				mccAtcOverlayAppl.displayContacLocalStr(zipCode);
			}
			else if(errCode =="CART_ERR_133"){
				atcModal.showModalError();
			}else{
				atcModal.showModalError();
			}
		}catch(e){
			console.error("Error handling Appliance ATC error", e);
			atcModal.showModalError();
            }
        }

        mccAtcOverlayAppl.handleATCErrorScenariosCertona = function(errCode,itemId) {
        	var $certonaButton = $("#ma_atcmodal_rr a[data-prodid='" + itemId + "']");
        	$certonaButton.hide();
        	var $itemNotAddedLabel = $('.itemNotAddedLabel', $certonaButton.parent());
				$itemNotAddedLabel.css({'display':'inline-block', 'visibility':'visible'});
            try {
                if (errCode === "CART_ERR_125") {
                    //More than 2 same appliances in Cart
                    $("#mccCertonaApplError").removeClass('hide');
                    $("#mccCertonaApplError span").text("Sorry, but only two of the same appliance may be purchased per order.");
                } else if (errCode === "CART_ERR_124") {
                    //more than 12 applinaces in cart         			
                    $("#mccCertonaApplError").removeClass('hide');
                    $("#mccCertonaApplError span").text("Sorry, but a maximum of 12 appliances may be purchased per order. To add this appliance to the cart, you must first remove another item.");
                } else if (errCode === 'OOS_ALT_MODEL' || errCode === 'ETA_UNAVAILABLE' || errCode === 'OOS_ETA_UNAVAILABLE'){
                	$("#mccCertonaApplError").removeClass('hide');
                    $("#mccCertonaApplError span").text("Out Of Stock.");
                }else{	
                    //System Error
                    $("#mccCertonaApplError").removeClass('hide');
                    $("#mccCertonaApplError span").text("Sorry, but we were unable to add this item to the cart due to a system error.");
                }
				// analytics - primary error capture
				$.event.trigger("ANALYTICS_PRIMARY_ERROR_EVENT", [$("#mccCertonaApplError span").text()]);
            } catch (e) {
                console.error("Error handling Appliance ATC error", e);
            }
        }

	function _handleCertonaRecommendations(itemId){
         if(MCCApplATCCertonaAPIServiceFeature===true){
                try{
                    var options = {                         
                             levels: "",
                             exItems: itemId,
                             itemid : itemId,
                             event : "shopping cart",
                             certonaSchema: "ma_atcmodal_rr",
                             products:   itemId
                        };
                             certonaController.loadCertona(options);
                             $('body').off("click", "#ma_atcmodal_rr .addCartConfirmBtn").
                            		on("click", "#ma_atcmodal_rr .addCartConfirmBtn", 
                               mccAtcOverlay.certonaAddItem);
                }catch(e){
                    console.error("Error loading certona", e);
                }
         }
	}

    mccAtcOverlayAppl.createOverlayContent = function(context, itemId, etaDate) {
    	//TODO: move this to separate func
    	//pull out added item and create new field for template to use
    	var found=false;
    	$.each(context.CartModel.itemModels, function(idx, item){
    		if(!found){
    		if(item.itemId===itemId){
    			context.CartModel.addedItem = item;
    			if(etaDate){ 
    				context.CartModel.addedItem.earliestAvailableDate=etaDate;
    			}
	    			//mark as found so, in the case of >1 items with same id,
	    			// we won't set added item to the last instance (wrong one)
	    			found=true;
    		}
	    	}
    	});
		
    	if (context.CartModel.messagesModel) {
        	var applianceDeliverySection = jQuery.grep(context.CartModel.messagesModel, function( messages ) { return messages.name === 'APLNC_DLVRY_MSG'; });
        	if (applianceDeliverySection.length > 0) {
				var deliveryChargeMsg = applianceDeliverySection[0].shortDescription.replace(/free /gi, '');
				if(/delivery on/i.test(deliveryChargeMsg)){
					var deliveryChargeMsgArr = deliveryChargeMsg.split(' ');
					deliveryChargeMsg = deliveryChargeMsgArr.splice(0,2).join(' ') +'<br/>'+ deliveryChargeMsgArr.splice(0,deliveryChargeMsgArr.length).join(' ');
				}
        		context.CartModel['applianceDeliverySection'] = deliveryChargeMsg;
        	}
    		
    	}
    	
		if(mccAtcOverlayAppl.mapAboveOriginalPrice !== ""){
			context.CartModel.addedItem.isValuePricingDisp = mccAtcOverlayAppl.mapAboveOriginalPrice;
		}

    	//set model for re-use
    	mccAtcOverlayAppl.cartModelWithAddedItem=context.CartModel;
		
		

    	//logic to read and display the order level promotion in ATC 
    	context.CartModel.isOrdLvlPromoAvl=false;
    	if(context.CartModel.promotionsModel){
    		$.each(context.CartModel.promotionsModel, function(idx, promotion){
        		if(promotion.promotionType==="Order Level"){  
        			// $.each(promotion.lineItemPromotion, function(index, lineItemPromotion){
        				// if(lineItemPromotion.appliedOn==context.CartModel.addedItem.lineItemId){
        					context.CartModel.isOrdLvlPromoAvl = true;
        					// return false;
        				// }        				
        			// });
        			if(context.CartModel.isOrdLvlPromoAvl){
        				if(promotion.promoCode){
            				context.CartModel.OrdLvlPrmoDesc = promotion.promoCode;
            			}
            			else if(promotion.description){
            				var promoDescription = promotion.description;
            				if(promoDescription.length >9){
            					promoDescription = promoDescription.substring(0,10)+"...";
            				}
            				context.CartModel.OrdLvlPrmoDesc = promoDescription;
            			}
            			context.CartModel.appliedDiscount= promotion.appliedDiscount;
            			return false;
        			}        			
        		}
        	});
    	}  	
    	
        var atcOverlayHtml = atcTemplates["thd.mcc.atcApplOverlay.template.hbs"](context.CartModel);
        return atcOverlayHtml;
    };
	
	mccAtcOverlayAppl.clearErrMsg = function(){
		$("#checkAvailableMessage,#backOrdBtnSec,#sameZipCodeMsg,#contactLocalStr,#checkAvailableError,#myDeleiveryLocationCntr").addClass('hide');
		$("#backOrdBtnSec").removeClass('contact-local-str');
		$('.check-available-input').removeClass('invalid-zip');
		$("#checkAvailableMessage").removeClass('out-of-stock-err');
		$("#zipChecker,#checkAvailableZip,#checkAvailableBtn_MCC,.icon-calendar,enterZipMsg,#addToCart").removeClass('hide');
	};
	

	/**
	 * 
	 */
	mccAtcOverlayAppl.displayContacLocalStr = function (zipCode){
		mccAtcOverlayAppl.clearErrMsg();		
		$("#checkAvailableMessage,#myDeleiveryLocationCntr,#backOrdBtnSec,#contactLocalStr").removeClass('hide');		
		$("#zipChecker,#checkAvailableZip,#checkAvailableBtn_MCC,#backOrdBtnSec #addToCart").addClass('hide');	
		$("#backOrdBtnSec").addClass('contact-local-str');
		$("#checkAvailableMessage .uppercase").html("Contact your store");
		$("#checkAvailableMessage #myDeleiveryLocationZip").text(zipCode);
		$("#myDeleiveryLocationCntr a").click(function(){
			_changeEnteredZip(zipCode);
		});
		$(".md-modal-atc #addToListBtn").click(function(){
			setTimeout(function() {
				$(".md-close").trigger('click');
            }, 100);
		});
	};

	mccAtcOverlayAppl.displayPartsAndServices = function(partServicePromise, cartModel){
		//launch a fresh modal
		// launchModal();		
		partServicePromise.done(function(resp){
			var psModel = resp.PartsAndServicesModel;	
			
			psModel.productImage = cartModel.addedItem.image;
			psModel.brandName = cartModel.addedItem.brandName;
			psModel.modelNumber = cartModel.addedItem.modelNumber;
			psModel.productDescription = cartModel.addedItem.description;
			psModel.zipCode = cartModel.addedItem.fulfillmentModel[0].deliveryZipCode;
			psModel.parentLineItemId = cartModel.addedItem.lineItemId;
			//set the appliance Price either to offcer Price if present or unit price
			if(cartModel.addedItem.specialOfferPrice){
				psModel.appliancePrice = cartModel.addedItem.specialOfferPrice;
			}
			else{
				psModel.appliancePrice = cartModel.addedItem.unitPrice;
			}
			
			if(psModel.requiredLineItems){
				//mark install item for removal after loop
				var installationItemIndex = -1;
				$.each(psModel.requiredLineItems.lineItem, function(index, requiredLineItem){
					if(requiredLineItem.installation){
						psModel.installationOrHookup = true;

						psModel.installationPrice=requiredLineItem.unitPrice;
						psModel.installStoreSku=requiredLineItem.storeSKU;
						psModel.installLineItemId=requiredLineItem.itemId;

						//For installation, the install is listed as a sku,
						//so don't show this install item in required parts tab
						//Must remove after completing loop!
						installationItemIndex=index;
						// psModel.requiredLineItems.lineItem.splice(index,1);
						//return false;						
					}
					else if(requiredLineItem.hookup){
						psModel.installationOrHookup = true;
						psModel.hookup=true;
						
						//hookup items are different from install, the required items marked .hookup,
						// *DO* need to be listed.
						// psModel.requiredLineItems.lineItem.splice(index,1);
						psModel.installationPrice=0;
						psModel.installStoreSku=requiredLineItem.storeSKU;
						psModel.installLineItemId=requiredLineItem.itemId;

						// return false;
					}
					else{
						//always pre select all required line items on load for unconfiguered items
						requiredLineItem.selected=true;
					}
					//always check for two step installation to display informational text  
					if(requiredLineItem.twoStepInstallation){
						psModel.twoStepInstallation=true;
					}
				});
				//remove installation req'd item, as it has been captured as a Yes/No option
				if(installationItemIndex>-1){
					psModel.requiredLineItems.lineItem.splice(installationItemIndex,1);
				}
			}
			/*psModel.productImage = "http://hd-st73.homedepotdev.com/catalog/productImages/100/e6/e685392f-7857-4a4b-9ac9-582da9444df7_100.jpg";
			psModel.brandName = "GE";
			psModel.modelNumber = "GTUP240EMWW";
			psModel.productDescription = "Unitized Spacemaker Washer and Electric Dryer";
			psModel.appliancePrice = "1299";*/
			
		    var modalHtml = atcTemplates["appliance-parts-services-config.hbs"]({data: psModel});
		    var modal = atcModal.loadModalContent(modalHtml, "Select Parts and Services");
			
			//analytics - parts and services overlay
			$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", [null, null]);
			
		    //init P&S overlay
		    mccPartsAndServicesOverlay.partsServicesOverlay();
		    var fromPage = $('#fromPage').val();
		    if(fromPage!="shoppingCart"){
		    	$("#continueBtn,#goToCartBtnMCC").removeClass('hide');	
		    	$("#savePNSMCC").addClass('hide');	
		    }		    
		    $("#noThanksRadioMCC").addClass('active');
			//re-bind save selections button

			modal.find('#goToCartBtnMCC, #continueBtn, #savePNSMCC').off('click').on('click', function(e){
				e.preventDefault();				
				var request = mccAtcOverlayAppl.buildPartsAndServicesUpdateRequest(cartModel, psModel);
				mccAtcOverlayAppl.cartData	=	request;
				loading.start($("#parts-services-selector"));
				var button = this;
				mccAtcOverlayAppl.savePartsAndServicesService(request).done(function(resp){
					$.event.trigger('CART_RELOAD_CART_CONTENT');
					// Analytics - parts and services change capture
					$.event.trigger("PARTS_SERVICES_OVERLAY_CHANGE_EVENT", [mccAtcOverlayAppl.cartData, resp.CartModel]);
					
					if(button.id==="goToCartBtnMCC"){
						window.location.href = env.url.viewCart;
					}else{
						$('.md-close').trigger('click');
					}
				}).fail(function(error){
					console.error("Error during save parts and services", e);
					atcModal.showModalError();
				}).always(function(){
					loading.stop();
				});
			});


		}).fail(function(){
			console.debug("PNS is down");
			resp={};
			resp.pnsDownErr=true;
			resp.productImage = cartModel.addedItem.image;
			resp.brandName = cartModel.addedItem.brandName;
			resp.modelNumber = cartModel.addedItem.modelNumber;
			resp.productDescription = cartModel.addedItem.description;
			//set the appliance Price either to offcer Price if present or unit price
			if(cartModel.addedItem.specialOfferPrice){
				resp.appliancePrice = cartModel.addedItem.specialOfferPrice;
			}
			else{
				resp.appliancePrice = cartModel.addedItem.unitPrice;
			}	
			var modalHtml = atcTemplates["appliance-parts-services-config.hbs"]({data: resp});
		    var modalPS = atcModal.loadModalContent(modalHtml, "Select Parts and Services");

		    modalPS.find("#pnsDownBtn").on("click", function(e) {
                e.preventDefault();
                $('.md-close').trigger('click');
            });
		    
			$("#back,#next,#completeParts").addClass('hide');
			$("#pnsDownBtnCntrMCC").removeClass('hide');
		});    
	};

	mccAtcOverlayAppl.buildPartsAndServicesUpdateRequest = function(cartModel, partsAndServicesModel){
		var partsServicesSelector,
		skusReq = [],
		skusOpt = [],
		skusEsp = {},
		updateParams,
		serviceParams,
		applianceConfig="Configured";
	
	// REQUIRED PARTS and INSTALL/HOOKUP
	partsServicesSelector = $('#parts-services-selector-required input[type=checkbox]:checked');
	$.each(partsServicesSelector, function (index, item) {
		if($(item).data('productid')){			
			skusReq.push( {'storeSKU': $(item).data('storesku'), 'itemId': $(item).data('productid'), 'quantity': '1'});
		}
	});

	//INSTALL (has install as a sku item)
	//HOOKUP (no sku item, just use selection to set applianceConfig value)
	partsServicesSelector = $('#installHookUpCntr a.active');
	//if yes is selected, set Hookup or Install, otherwise, leave as "Configured"
	if($(partsServicesSelector).attr("id")==="yesInstall"){
		if($(partsServicesSelector).attr("data-hookup")==="true"){
			applianceConfig="Hookup";
		}else{
			applianceConfig="Install";
			$.each(partsServicesSelector, function (index, item) {
				if($(item).data('productid')){
					skusReq.push( {'storeSKU': $(item).data('storesku'), 'itemId': $(item).data('productid'), 'quantity': '1'});  
				}
			});
		}			
	}


	
	// OPTIONAL PARTS
	partsServicesSelector = $('#parts-services-selector-optional input[type=checkbox]:checked');
	$.each(partsServicesSelector, function (index, item) {
		skusOpt.push( {'storeSKU': $(item).data('storesku'), 'itemId': $(item).data('productid'), 'quantity': '1'});  
	});
	
	// WARRANTY
	partsServicesSelector = $('#parts-services-selector-warranty a.active');
	$.each(partsServicesSelector, function (index, item) {
		if($(item).data('productid')){
			skusEsp = {'storeSKU': $(item).data('storesku'), 'itemId': $(item).data('productid')};  
		}
	});

	updateParams = {
		'requiredItems': {'lineItem': skusReq},
		'optionalItems': {'lineItem': skusOpt}
	};
	if(!$.isEmptyObject(skusEsp)) {
		updateParams['warrantyItem'] = skusEsp;
	}		
	
	if(applianceConfig){
		updateParams['applianceConfig'] = applianceConfig;
	}

	serviceParams = {
			'lineItemId': cartModel.addedItem.lineItemId,
			'quantity': '1',
			'ffm': 'DirectDelivery',
			'ffl': $("#zipcode").val(),
			'updateParams': updateParams
	};	
	return serviceParams;
	};
 	
	mccAtcOverlayAppl.savePartsAndServicesService = function(partsData){
		
		var data = {CartRequest: {itemDetails: [{}]}},
		itemDetails = {};

		itemDetails = {
		      lineItemId: partsData.lineItemId,
		      quantity: partsData.quantity,				      
		      fulfillmentLocation: partsData.ffl,
		      fulfillmentMethod: partsData.ffm
			 };
		if(partsData.updateParams.optionalItems) {
			itemDetails['optionalItems'] = partsData.updateParams.optionalItems;
		}
		if (partsData.updateParams.requiredItems) {
			itemDetails['requiredItems'] = partsData.updateParams.requiredItems;
		}
		if (partsData.updateParams.warrantyItem) {
			itemDetails['warrantyItem'] = partsData.updateParams.warrantyItem;
		}

		//always set to true when configured
		itemDetails.configured="true";
		itemDetails.applianceConfig = partsData.updateParams.applianceConfig||"Configured";

		data.CartRequest.itemDetails[0] = itemDetails;
		
		return $.ajax({
		            type: "POST",
		            data: JSON.stringify(data),
		            url: env.url.cartUpdate,
					xhrFields: {
		                withCredentials: true
		            },		            
		            timeout: 60000,
					headers: { 
			        	'Accept' : "application/json; charset=utf-8",
			        	'Content-Type' : "application/json"
			       	}
				});
	};
	
	/**
	 * Restore check availability input/button
	 */
	 function _changeEnteredZip(zipCode){
	 	mccAtcOverlayAppl.clearErrMsg();
	 	$(".zipCheckerElements").removeClass("hide");
		$("#checkAvailableZip input").focus().select();
	 }

    /**
     * Construct request data from details
     */
    function _getRequestData(atcRequest, etaDate) {
        var data = {"CartRequest":
        			{
                 		"itemDetails":[atcRequest]
            		}
            	   };

        return data;
    }

	return mccAtcOverlayAppl;
});
/**
 *  Appliance Check Availability Modal by Zipcode Overlay
 *  - always executed before Appliance ATC to populate modal
 *		and check availability
 *  - show zipcode input/button if no zipcode or launched via
 *      Cart for Appliance update/edit Zipcode
 */

define('shared/atc/thd.mcc.atcOverlayApplianceAvailability',
[ 
  'jquery',
  'cart/env',
  'shared/atc/thd.mcc.atcOverlayModal',
  'shared/atc/thd.mcc.atc.Services',
  'shared/atc/thd.mcc.atcOverlayAppliance',
  'shared/utils/LoadingCoverUp',
  'templates-precompiled-atc',
],
function(
	$, 
	env, 
	atcModal,
	atcService,
	mccAtcOverlayAppl,
	loading,
	atcTemplates) {

	var checkAvailability = {};

	//ATC from within an overlay require
	//that some modal changes not be made
	var isCertona=false;
	
	//keep reference to map of product info
	// {itemId: productInfo{}}
	checkAvailability.productInfoMap = [];

	checkAvailability.zipCodePreFillVal=null;

	/**
	 * Launch overlay for check delivery availability for zip code
	 * (only required if zip is empty? confirm this)
	 */
	checkAvailability.showOverlay = function(atcRequest, applConfig, cartModel){
	    var applAtcPromise = new $.Deferred();
	    console.debug("Appliance: checkAvailability.showOverlay()", atcRequest);
	    var itemId = atcRequest.itemId;
	    var zipCode = atcRequest.fulfillmentLocation;
	    mccAtcOverlayAppl.zipCodePreFillVal = zipCode;

	    isCertona=false;
		atcModal.launchModal();		

	    var productDetailsPromise = checkAvailability.getProductDetails(itemId, cartModel);
		productDetailsPromise.done(function(cartModelResp){
			var modalHtml = _createCheckZipCodeContent(cartModelResp);
			var modal = atcModal.loadModalContent(modalHtml);
			loading.start($(".md-body"));
			//init hidden elements
			_initCheckAvailabilityOverlay(atcRequest);
			atcModal.updateMapAtcModal();
			if(!zipCode){
				//handle no-zip, show input/button, title
				$(".zipCheckerElements").removeClass("hide");
				atcModal.setModalTitle("Check Availability");
				loading.stop();
				
				// analytics - check availability overlay
				$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", ["appliance availability", atcRequest.itemId]);
			}else{
				//proceed with check availability using provided zip
				//TODO: if we have applConfig(prodStatus/deliveryDate) then
				//	    we can bypass this and invokeATC (see thd.applAtcOverlay.js#996)
				checkAvailability.getDeliveryAvailability(atcRequest);
			}
			applAtcPromise.resolve(cartModelResp);
	    });	
	    return applAtcPromise.promise();
	};

	checkAvailability.addCertonaAppliance = function(atcRequest, applConfig){
	    console.debug("Appliance Certona: checkAvailability.addCertonaAppliance()", atcRequest);
	    var itemId = atcRequest.itemId;
	    var zipCode = atcRequest.fulfillmentLocation;
	    mccAtcOverlayAppl.zipCodePreFillVal = zipCode;
	    isCertona=true;
	    if(zipCode){
	    	loading.start($(".md-body"));
			checkAvailability.getDeliveryAvailability(atcRequest);
	    }else{
	    	console.error("No zipcode for Certona Appliance Add To Cart");
	    }
	};

	checkAvailability.getDeliveryAvailability = function(atcRequest){
		try{
			var itemId = atcRequest.itemId;
		    var zipCode = atcRequest.fulfillmentLocation;
			//check availability for provided zip
			var deliveryDatePromise = atcService.getDeliveryAvailability(itemId, zipCode);
			deliveryDatePromise.done(function(resp){
				var errorCode = _getDeliveryAvailabilityErrorCode(resp);
				if(errorCode){
					proceedWithCheckout = checkAvailability.handleDeliveryErrorResponse(errorCode, zipCode, itemId);
					if(proceedWithCheckout){
						mccAtcOverlayAppl.invokeATCService(atcRequest, "", isCertona);	
					}else{
						loading.stop();
					}
				}
				else{
					var etaDate = checkAvailability.handleDeliveryAvailibilityCheck(resp, atcRequest);
					if(etaDate){
						mccAtcOverlayAppl.invokeATCService(atcRequest, etaDate, isCertona);
					}else{
						loading.stop();
					}
				}				
			}).fail(function(errorResponse){
				var proceedWithCheckout = checkAvailability.handleDeliveryAvailibilityCheckError(errorResponse, itemId, zipCode);
				if(proceedWithCheckout){
					mccAtcOverlayAppl.invokeATCService(atcRequest, "", isCertona);	
				}else{
					loading.stop();
				}
				
			});		
		}catch(e){
			console.error("Error getting delivery availability", e);
			loading.stop();
			atcModal.showModalError();
		}
	};

	//Product details may be from a ProductInfo call (ATC) or from a 
	//provided model (Cart)
	checkAvailability.getProductDetails = function(itemId, cartModel){
		var promise = new $.Deferred();
		if(cartModel || checkAvailability.productInfoMap[itemId]){
			//TODO: Convert CartModel to have "addedItem" field (like ATC response)
			if(cartModel){
				//store cart model, will need to set as "added Item"
				checkAvailability.productInfoMap[itemId]=cartModel;
			}
			//use stored product info
			promise.resolve(checkAvailability.productInfoMap[itemId]);
		}else{
			atcService.getProductDetails(itemId).done(function(resp){
		    	var skuModel = resp.products.product.skus.sku;
    			var cartModel = checkAvailability.convertProductInfoToCartModel(skuModel);
				checkAvailability.productInfoMap[itemId]=cartModel;
				promise.resolve(cartModel);
			});
		}
		return promise;
	}; 

	function _createCheckZipCodeContent(cartModel){
		return atcTemplates["thd.mcc.atcApplOverlay.template.hbs"](cartModel);
	}

	function _setInPIP(zipCode){
		try{
			$("#zipCodeTxt").val(zipCode);
		}catch(e){
			console.error("Could not set zipCode in PIP");
		}
	}

    checkAvailability.handleZipCodeCheck = function(atcRequest){
    	var itemId = atcRequest.itemId;
    	var zipCode = atcRequest.fulfillmentLocation;
    	console.debug("Handle zip check", zipCode, itemId);
		 if(isValid(zipCode)){
		 	checkAvailability.zipCodePreFillVal=zipCode;
		 	_setInPIP(zipCode);
		 	//call delivery availability service
		 	atcRequest.fulfillmentLocation=zipCode;
		 	loading.start($(".md-body"));
		 	checkAvailability.getDeliveryAvailability(atcRequest);
		 }else{
		 	_invalidZipError();
		 }
    };

    checkAvailability.handleDeliveryAvailibilityCheck = function(resp, atcRequest){
		//handle response
		var itemId = atcRequest.itemId;
    	var zipCode = atcRequest.fulfillmentLocation;
		var errorCode = _getDeliveryAvailabilityErrorCode(resp);
		if(errorCode){
			checkAvailability.handleDeliveryErrorResponse(errorCode, zipCode, itemId);
		}else{
			var etaDate = checkAvailability.handleDeliveryDateResponse(resp, atcRequest);
			if(etaDate!==false){
				return etaDate;//finished here
			}					
		}
		return false;
    };

	checkAvailability.handleDeliveryAvailibilityCheckError = function(errorResponse, itemId, zipCode){			
		 	 //delivery service will respond with a 500, plus a valid json error response
		 	 var proceedWithCheckout = false;
			 try{
			 	 errorResponse = jQuery.parseJSON(errorResponse.responseText);			 	 
				 var errorCode = _getDeliveryAvailabilityErrorCode(errorResponse);
				 proceedWithCheckout = checkAvailability.handleDeliveryErrorResponse(errorCode, zipCode, itemId); 
			 }
			 catch(err){
				 //DD down 
				 console.error("Error retrieving delivery avail. for ", zipCode);
				 if(!isCertona){
					 $("#checkAvailableError").removeClass('hide');
					 $("#checkAvailableZip,#checkAvailableBtn_MCC,#zipChecker,#checkAvailableMessage").addClass('hide');
				 	 $('.check-available-input').addClass('invalid-zip');
				 	 $("#checkAvailableError p").text("Error retrieving delivery date for " +zipCode);
				 }else{
				 	//display error in Certona area?
				 	console.warn("Need to display delivery availability error in Certona area");
				 }
			 }
			 return proceedWithCheckout;
	};

    function _getDeliveryAvailabilityErrorCode(resp){
		var serverErrorCode;
		var errorData = resp.deliveryAvailabilityResponse.errorData;
		if(errorData && errorData.errors.error) {
			serverErrorCode = errorData.errors.error.errorCode;
		}
		return serverErrorCode;
    }

	checkAvailability.handleDeliveryDateResponse = function(data, atcRequest){
		var itemId=atcRequest.itemId;
		var zipCode=atcRequest.fulfillmentLocation;
	 	console.debug("checkAvailability.handleDeliveryDateResponse()", data, atcRequest);
	 	
			var statusCode;
			var etaDate="";
			
		try{	
			var deliveryAvailability = data.deliveryAvailabilityResponse.deliveryAvailability;
			if( deliveryAvailability && 
				deliveryAvailability.availability && 
				deliveryAvailability.availability.status){
				
				statusCode = deliveryAvailability.availability.status;
			}
			
			//var updateZipAPIUrl = changeZipcodeUrl ;
			if(statusCode === "AVAILABLE"){				
				try{
					var avlDates = deliveryAvailability.deliveryInfo;
					if($.isArray(avlDates)){
						etaDate =formatDate(avlDates[0].date);
					}
					else{
						etaDate =formatDate(avlDates.date);
					}			
				}catch(e){
					console.warn("Error getting date from available status", e);
					etaDate="Please check Cart";
				}
			}
			else if(statusCode === "BACK_ORDERED"){
				etaDate = formatDate(deliveryAvailability.availability.etaDate.substring(0,10));
				if(!isCertona){
					$(".md-modal-atc #addToListBtn").click(function(){
						$(".md-close").trigger('click');
					});
					atcModal.setModalTitle("Check Availability");
					checkAvailability.displayBackOrderedMsg(atcRequest, etaDate);					
					// analytics - check availability overlay
					$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", ["appliance availability", atcRequest.itemId]);
				}else{
					//Certona System Error
					mccAtcOverlayAppl.handleATCErrorScenariosCertona(statusCode,itemId);
				}
				return false;//don't call add to cart
			}
			else if(statusCode === "OOS_ALT_MODEL" || statusCode === "OOS_ETA_UNAVAILABLE"){
				if(!isCertona){
					atcModal.setModalTitle("Check Availability");
					checkAvailability.displayOOSMsg(zipCode);
					// analytics - check availability overlay
					$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", ["appliance availability", atcRequest.itemId]);
				}else{
					//handle as Certona in-overlay error;
					//Certona OOS Stock Error
					mccAtcOverlayAppl.handleATCErrorScenariosCertona(statusCode,itemId);
				}
				return false;//don't call add to cart
			}else{
				if(!isCertona){
					mccAtcOverlayAppl.displayContacLocalStr(zipCode);	
				}else{
					//Certona System Error
					mccAtcOverlayAppl.handleATCErrorScenariosCertona(statusCode,itemId);
				}
				
				return false; //don't call add to cart
			}

		}catch(e){
			console.error("Error handling delivery service response", e);
			return false;
		}
		//proceed to ATC
		return etaDate;
	};

	checkAvailability.handleDeliveryErrorResponse = function(serverErrorCode, zipCode, itemId){
	 	console.debug("checkAvailability.handleDeliveryDateResponse()", serverErrorCode, zipCode, itemId);
	 	var proceedWithCheckout = true;
	 	try{
			if (serverErrorCode === "DLVRY_AVAIL_ERR_1003" || 
				serverErrorCode === "DLVRY_AVAIL_ERR_1015" || 
				serverErrorCode === "DLVRY_AVAIL_ERR_1016"){
				//Depot Direct may be temporarily down,
				//proceed with ATC and try again to get P&S after
				mccAtcOverlayAppl.DDdown1=true;
				if(serverErrorCode === "DLVRY_AVAIL_ERR_1003"){
					mccAtcOverlayAppl.noSlotsAvail=true;
				}
			}
			else if(serverErrorCode === "DLVRY_AVAIL_ERR_1000" ||  
					serverErrorCode === "DLVRY_AVAIL_ERR_1013" || 
					serverErrorCode === "DLVRY_AVAIL_ERR_1014" ){
				//Depot Direct is really down (or not avail. for this item),
				//proceed with ATC and do not try to get P&S
				mccAtcOverlayAppl.DDdown2=true;
			}
			else{
				if(serverErrorCode === "DLVRY_AVAIL_ERR_1007" ){
					checkAvailability.zipCodePreFillVal=null;
				}
				if(!isCertona){
					atcModal.setModalTitle("Check Availability");
					mccAtcOverlayAppl.displayContacLocalStr(zipCode);
					// analytics - check availability overlay
					$.event.trigger("PARTS_SERVICES_OVERLAY_EVENT", ["appliance availability", itemId]);
				}
				proceedWithCheckout = false; //don't call add to cart
			}
		}catch(e){
			console.error("Error handling delivery service response", e);
			proceedWithCheckout = false;
		}
		//proceed to ATC
		return proceedWithCheckout;
	};


	function formatDate(timestamp){
		if(timestamp.length>=10){
			return timestamp.substring(5,7)+"/"+timestamp.substring(8,10)+"/"+timestamp.substring(0,4);
		}
	}

	/**
	 * Convert and populate the response from Product Info Service
	 */
	function _initCheckAvailabilityOverlay(atcRequest){
		//bind zip check handler
		$("#checkAvailableBtn_MCC").click(function(evt){
			checkAvailability.clearErrMsg();
			var zipCode = $(".check-available-input").val();
			// remove disabled property if present
			$(".check-available-input").removeAttr('disabled');
			if(isValid(zipCode)){
				atcRequest.fulfillmentLocation = zipCode;
				checkAvailability.handleZipCodeCheck(atcRequest);	
			}else{
				_invalidZipError();
			}
			
		});

		$(".check-available-input").keypress(function(e){
			var zipCode = $(".check-available-input").val();
			// remove disabled property if present
			$(".check-available-input").removeAttr('disabled');
			evt = (e) ? e : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if(evt.keyCode == 13){
				e.preventDefault();
				checkAvailability.clearErrMsg();
				if(isValid(zipCode)){
					atcRequest.fulfillmentLocation = zipCode;
					checkAvailability.handleZipCodeCheck(atcRequest);
				}
			}
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			   return false;
			}
				return true;	 				
		});	 				
		$("#myDeleiveryLocationCntr a").click(function(){
			checkAvailability.clearErrMsg();
			$(".zipCheckerElements").removeClass("hide");
		});
	}		

    /**
     * Convert the model returned by the Product Info call into a Cartmodel for
     * use with the shared template
     */
    checkAvailability.convertProductInfoToCartModel = function(skuModel){
    	var info = skuModel.info;
    	var pricing = skuModel.storeSkus.storeSku.pricing;

    	//clear the special price if no offer since the HBS depends on special price
    	if(pricing.specialPrice===pricing.originalPrice){
    		pricing.specialPrice="";
    	}
    	//format the price to 2 decimal point
    	if(pricing.originalPrice){
    		pricing.originalPrice=parseFloat(pricing.originalPrice).toFixed(2);
    	}
    	if(pricing.specialPrice && pricing.specialPrice!=""){
    		pricing.specialPrice=parseFloat(pricing.specialPrice).toFixed(2);
    	}
    	var cartModel =
    	{
		  	"checkZipCode": true, //mark so template will show check zip code fields
		    "addedItem": //This field is created for ATC overlays to highlight the specific item
		      {
		        "itemId": skuModel.itemId,
		        "description": info.productLabel,
		        "unitPrice": pricing.originalPrice,
		        "specialOfferPrice": pricing.specialPrice,
		        "percentOff": pricing.percentageOff,
		        // "image": [set below]
		        "modelNumber": info.modelNumber,
		        "partNumber": skuModel.partNumber,
		        "brandName": info.brandName,
		        "productLabel": info.brandName,
		        "canonicalUrl": skuModel.canonicalURL,
		        "shippingMessage": (skuModel.shipping && skuModel.shipping.freeShippingMessage) ? skuModel.shipping.freeShippingMessage.replace(/free /gi, '') : ''
			//	"pricingMessage": (pricing.pricingMessage)?pricing.pricingMessage:""
		      }
		};
		
		if(typeof pricing.mapAboveOriginalPrice != "undefined" && pricing.mapAboveOriginalPrice === true){
			cartModel.addedItem.isValuePricingDisp = pricing.mapAboveOriginalPrice;
			mccAtcOverlayAppl.mapAboveOriginalPrice = pricing.mapAboveOriginalPrice;
			mccAtcOverlayAppl.map2VPRemoveLink = "true";
		}else if(typeof pricing.mapAboveOriginalPrice != "undefined" && pricing.mapAboveOriginalPrice === false){
			cartModel.addedItem.isValuePricingDisp = pricing.mapAboveOriginalPrice;
			mccAtcOverlayAppl.mapAboveOriginalPrice = pricing.mapAboveOriginalPrice;
			mccAtcOverlayAppl.map2VPRemoveLink = "false";
		}else{
			cartModel.addedItem.isValuePricingDisp = "nv";
			mccAtcOverlayAppl.mapAboveOriginalPrice = "nv";
			mccAtcOverlayAppl.map2VPRemoveLink = "";
		}

		//get image url for a 100px 
		var reqMedia = skuModel.media.mediaEntry;
		 for(var key =0;key<reqMedia.length;key++){
			if (reqMedia.hasOwnProperty(key) ){
				if(reqMedia[key].height=== 100 && reqMedia[key].mediaType==="IMAGE"){
					var srcUrl = reqMedia[key].location;
					cartModel.addedItem.image=srcUrl;
				}
			}
		}

		return cartModel;
    };

	checkAvailability.displayOOSMsg = function (zipCode){
		checkAvailability.clearErrMsg();
		$(".zipCheckerElements").removeClass("hide");
		$("#checkAvailableMessage").removeClass('hide');
		$("#checkAvailableMessage").addClass('out-of-stock-err');
		$("#checkAvailableMessage .uppercase").html("Out of stock for <br>"+ zipCode);
	};
	
	checkAvailability.displayBackOrderedMsg = function (atcRequest, etaDate){
		checkAvailability.clearErrMsg();
		$("#checkAvailableMessage,#myDeleiveryLocationCntr,#backOrdBtnSec").removeClass('hide');
		$("#zipChecker,#checkAvailableZip,#checkAvailableBtn_MCC").addClass('hide');		
		$("#checkAvailableMessage .uppercase").html("On BackOrder Until: <br>"+ etaDate);
		$("#checkAvailableMessage #myDeleiveryLocationZip").text(atcRequest.fulfillmentLocation);		
		//Bind ATC button
		$("#addToCart").click(function(){
			$("#checkAvailableMessage,#backOrdBtnSec").addClass('hide');			
			loading.start($(".md-body"));
			mccAtcOverlayAppl.invokeATCService(atcRequest, etaDate);
 		});
	};

	/**
	 * Restore check availability input/button
	 */
	 function _changeEnteredZip(zipCode){
	 	checkAvailability.clearErrMsg();
		$("#checkAvailableZip input").focus().select();
	 }

	checkAvailability.clearErrMsg = function(){
		//re-use clearErrMsg from here:
		mccAtcOverlayAppl.clearErrMsg();
	};

	function _invalidZipError(){
		//TODO: show error? 
 		$("#checkAvailableError").removeClass('hide');
 		$('.check-available-input').addClass('invalid-zip');
	}
	//check that zip code is exactly 5 numbers only
	function isValid(zipCode){
		return (zipCode && (zipCode.length === 5) && (/^\d{5}$/.test(zipCode)));
	}
	return checkAvailability;
		
});
/*global $, window, document, setTimeout*/
/* =============================================================
* thd.quicktip.js v.1.0
* This plugin creates a Quick tip that allows you to
* put just about any content type inside.
*
* Markup
********************************
* See THD FED Workbench for details
===============================================================*/

var TABCOM = TABCOM || {};
TABCOM.quickTip = TABCOM.quickTip || {};
TABCOM.quickTip = function () {
    return {
        updateQuickTipPosition: function () {
            if ($('.quick-tip-mcc').length === 0) {
                return;
            }
            var $quickTip = $('.quick-tip-mcc'),
                $addArrow = $('.quick-tip-mcc .add-arrow-mcc'),
                $tipOpener = $('.tip-opener-mcc.active'),
                $tipHeader = $('.tip-header-mcc'),
                getTipOpenerPos = $tipOpener.offset(),
                getTipPos = {},
                notchAlignment = ($quickTip.width() - $addArrow.outerWidth(true)) / 2;
            if ($addArrow.hasClass('arrow-right-top-mcc')) {
                getTipPos = {'left': getTipOpenerPos.left + $tipOpener.outerWidth() + $addArrow.outerWidth(true), 'top': getTipOpenerPos.top - $tipHeader.height()};
                $quickTip.offset({
                    left: getTipPos.left,
                    top: getTipPos.top
                });
                $addArrow.offset({
                    left: getTipPos.left - $addArrow.width(),
                    top: getTipPos.top
                });
            } else if ($addArrow.hasClass('arrow-left-top-mcc')) {
                getTipPos = {'left': getTipOpenerPos.left - ($quickTip.width() + $addArrow.outerWidth(true)), 'top': getTipOpenerPos.top - $tipHeader.height()};
                $quickTip.offset({
                    left: getTipPos.left,
                    top: getTipPos.top
                });
                $addArrow.offset({
                    left: getTipPos.left + $quickTip.width(),
                    top: getTipPos.top
                });
            } else if ($addArrow.hasClass('arrow-right-bottom-mcc')) {
                getTipPos = {'left': getTipOpenerPos.left + $tipOpener.outerWidth() + $addArrow.outerWidth(true), 'top': getTipOpenerPos.top + (($tipOpener.outerHeight() + $addArrow.height()) / 2) - ($quickTip.height())};
                $quickTip.offset({
                    left: getTipPos.left,
                    top: getTipPos.top
                });
                $addArrow.offset({
                    left: getTipPos.left - $addArrow.width(),
                    top: getTipPos.top + $quickTip.height() - ($addArrow.outerHeight(true))
                });
            } else if ($addArrow.hasClass('arrow-left-bottom-mcc')) {
                getTipPos = {'left': getTipOpenerPos.left - ($quickTip.width() + $addArrow.outerWidth(true)), 'top': getTipOpenerPos.top + (($tipOpener.outerHeight() + $addArrow.height()) / 2) - ($quickTip.height())};
                $quickTip.offset({
                    left: getTipPos.left,
                    top: getTipPos.top
                });
                $addArrow.offset({
                    left: getTipPos.left + $quickTip.width(),
                    top: getTipPos.top + $quickTip.height() - ($addArrow.outerHeight(true))
                });
            } else if ($addArrow.hasClass('arrow-bottom-center-mcc')) {
                getTipPos = {'left': getTipOpenerPos.left + ($tipOpener.outerWidth() / 2) - ($quickTip.width() / 2), 'top': getTipOpenerPos.top - ($quickTip.height() + $addArrow.outerHeight(true))};
                $quickTip.offset({
                    left: getTipPos.left,
                    top: getTipPos.top
                });
                $addArrow.offset({
                    left: getTipPos.left + notchAlignment,
                    top: getTipPos.top + $quickTip.height()
                });
            } else {
                getTipPos = {'left': getTipOpenerPos.left + ($tipOpener.outerWidth() / 2) - ($quickTip.width() / 2), 'top': getTipOpenerPos.top + $tipOpener.outerHeight() + $addArrow.outerHeight(true)};
                $quickTip.offset({
                    left: getTipPos.left,
                    top: getTipPos.top
                });
                $addArrow.offset({
                    left: getTipPos.left + notchAlignment,
                    top: getTipPos.top - $addArrow.height()
                });
            }
        }
    };
}();
$(function () {
    var $body = $('body');
    var closeQuickTip = function () {
        $('div.tip-holder-mcc').html('');
        $('.tip-opener-mcc.active').removeClass('active');
    };
    var openQuickTip = function (domElement) {
        domElement.preventDefault();
        $('div.tip-holder-mcc').html('');
        var $this = $(domElement.currentTarget),
            tipTitle = $this.attr('data-modal-title'),
            $quickTip,
            tipWidth = $this.attr('data-modal-width'),
            tipData = "",
            positionValue = '',
            detectTopCheck = 0,
            toolTipHeight = 0,
            toolTipWidth = 0,
            notchHeight = 0,
            detectLeftCheck = 0,
            windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            newWidth = 0;
        $('.tip-opener-mcc.active').removeClass('active');
        $this.addClass('active');
        if ($this.attr('data-modal-content').indexOf('#') === 0) {
            tipData = $($this.attr('data-modal-content')).html();
        } else {
            tipData = $('<div />').html($this.attr('data-modal-content'));
        }
        $('.tip-holder-mcc').remove();
        $body.append($('<div class="tip-holder-mcc"/>'));
        if ($this.parents('.md-modal').length > 0) {
            $('.tip-holder-mcc').addClass('tip-holder-child-mcc');
        }
        $('.tip-holder-mcc').html('<div class="quick-tip-mcc add-shadow-mcc"><b class="add-arrow-mcc"></b><div class="tip-header-mcc"><div class="tip-title-mcc">' + tipTitle + '</div><h3 class="tip-close-mcc btn-icon"><a class="md-close"><a></h3></div><div class="tip-content-mcc"></div></div>');
        $('.tip-content-mcc').html(tipData);

        if ($this.attr('data-custom-fit')) {
            $this.attr('data-modal-width', $this.attr('data-custom-fit'));
            $this.removeAttr('data-custom-fit');
        }
        $quickTip = $('.quick-tip-mcc');
        var findTooltipLocation = function(autoCheck) {
            tipWidth = $this.attr('data-modal-width')
	        if (parseInt(tipWidth) > 0) {
	        	$quickTip.css('width', tipWidth);
	        }
	        detectTopCheck = $this.offset().top - $(document).scrollTop();
	        detectLeftCheck = $this.offset().left - $(document).scrollLeft();
	        notchHeight = $('.quick-tip-mcc .add-arrow-mcc').outerHeight(true);
	        toolTipHeight = $(".quick-tip-mcc").height();
	        toolTipWidth = $(".quick-tip-mcc").width() + ($('.quick-tip-mcc .add-arrow-mcc').outerWidth(true) / 2);
	        if ((detectTopCheck + toolTipHeight + notchHeight) < windowHeight && ((detectLeftCheck - ((toolTipWidth - $this.outerWidth()) / 2)) > 0) && ((detectLeftCheck + ((toolTipWidth - $this.outerWidth()) / 2)) < windowWidth)) {
	            $this.attr('data-modal-temp-position', 'top-center');
	        } else if (((detectTopCheck - (toolTipHeight + notchHeight)) > 0) && (detectLeftCheck - ((toolTipWidth - $this.outerWidth()) / 2) > 0) && ((detectLeftCheck + ((toolTipWidth - $this.outerWidth()) / 2)) < windowWidth)) {
	            $this.attr('data-modal-temp-position', 'bottom-center');
	        } else if ((detectTopCheck - toolTipHeight) > 0 && (detectLeftCheck - toolTipWidth) > 0) {
	            $this.attr('data-modal-temp-position', 'left-bottom');
	        } else if ((detectTopCheck + toolTipHeight) < windowHeight && ((detectLeftCheck + toolTipWidth + $this.width()) < windowWidth)) {
	            $this.attr('data-modal-temp-position', 'right-top');
	        } else if ((detectTopCheck - toolTipHeight) > -(notchHeight) && ((detectLeftCheck + toolTipWidth + $this.width()) < windowWidth)) {
	            $this.attr('data-modal-temp-position', 'right-bottom');
	        } else if ((detectTopCheck + toolTipHeight < windowHeight) && ((detectLeftCheck - $(".quick-tip-mcc").width()) > 0)) {
	            $this.attr('data-modal-temp-position', 'left-top');
	        } else {
	            if (autoCheck) {
		            $this.attr('data-custom-fit', $this.attr('data-modal-width'));
	            }
	            if ($quickTip.width() > 300 && $quickTip.width() < windowWidth) {
	            	if (windowHeight > windowWidth) {
	            		newWidth = $quickTip.width() - 50;
		            } else { 
		            	newWidth = $quickTip.width() + 50;
		            }
	            	$this.attr('data-modal-width', newWidth);
		            findTooltipLocation(false);
	            }
	        }
        }
        findTooltipLocation(true);
        if ($.trim($this.attr('data-modal-position')) !== '' || $.trim($this.attr('data-modal-temp-position')) !== '') {
            positionValue = ($.trim($this.attr('data-modal-temp-position')) !== "") ? $.trim($this.attr('data-modal-temp-position')) : $.trim($this.attr('data-modal-position'));
            $('.quick-tip-mcc .add-arrow-mcc').addClass('arrow-' + positionValue + '-mcc');
        }
        TABCOM.quickTip.updateQuickTipPosition();
        $.event.trigger("QUICKTIP_OPEN", [$this]);
    };
    $body.on('click', '.tip-opener-mcc', openQuickTip)
        .on("click", ".tip-close-mcc", closeQuickTip);
    $(document).on('click touchstart', function (event) {
        if (!$(event.target).closest('.tip-holder-mcc,.tip-opener-mcc').length) {
            closeQuickTip();
        }
    }).on('blur', '.md-modal input, .md-modal textarea', function() {
        setTimeout('TABCOM.quickTip.updateQuickTipPosition()', 300);
    });
    $(window).resize(function () {
        if ($('.quick-tip-mcc').length > 0) {
            setTimeout('TABCOM.quickTip.updateQuickTipPosition()', 300);
        }
    }).bind('orientationchange', function(event) {
        if ($('.quick-tip-mcc').length > 0) {
            $('.tip-opener-mcc.active').click();
        }
    });
});


define("thd-quicktip", function(){});

/**
 * MCC Add-To-Cart(ATC) override router for all channels
 * - Will override bindings for all common ATC originations
 */
define('shared/TrendingItems', [
        'jquery',
        'cart/env',
        'thd-quicktip'
    ],
    function(
        $,
        env,
        quickTip
    ){
    	var chartist, _ctAxisTitle;
        //map of chart creation functions
        var CHART_FX = {};
        var CURRENT_HOUR;

        var trendingItems = {};

        trendingItems.load = function(){
            try{
            	requirejs(
            		['/MCCCheckout/static/MCC/scripts/libs/chartist.min.js'],
            		 function(_chartist){
            		 	console.debug("Loaded Chartist", _chartist);
						chartist=_chartist;
		            	requirejs(
		            		['/MCCCheckout/static/MCC/scripts/libs/chartist-plugin-axistitle.min.js'],
		            		 function(_ctAxisTitle){
		            		 	console.debug("Loaded chartist-plugin-axistitle");
								_ctAxisTitle=_ctAxisTitle;
		            	});
            	});
               //load trend data
                CURRENT_HOUR = (new Date()).getHours();
               //PIP send single sku,  PLP/Cart array of skus
               //PLP
               var idArray = [];
               try{
                    // console.debug("++++++++++++++++++++++ PLP ++++++++++++++++++++");
                    var urls = $("a.item_description").each(function(index, url){
                        var href = $(url).attr("href");
                        var id = href.substr(href.lastIndexOf('/') + 1);
                        idArray.push(id);
                    }); 
                    
               }catch(e){
               	console.warn("Error getting skus", e);
               }
               if(idArray.length===0){
                    // console.debug("++++++++++++++++++++++ PIP ++++++++++++++++++++");
                    var id = $("span[itemprop='sku']").html();
                    idArray.push(id);
                    

               }

               console.debug(idArray);    
               
               //load CSS
               _loadCSS();


               // - call trend service               
               
                  
//http://104.197.254.187:8080/ProdTrend/sku/205386270
// {"response":[{"productId":205386270,"cartCount":1090,"orderCount":64,"cartTrend":{"11":"52","22":"128","12":"22","23":"118","13":"34","14":"44","15":"12","16":"38","17":"68","18":"88","19":"108","0":"16","1":"0","2":"2","3":"5","4":"18","5":"8","6":"10","7":"15","8":"18","9":"28","20":"128","10":"2","21":"128"},"orderTrend":{"0":"11","1":"11","2":"21","3":"21"}}]}


              // $.get("http://104.197.240.190/ProdTrend/sku/" + )
              //   });

              var USE_MOCK_DATA_FILE = (document.cookie.indexOf("USE_MOCK_DATA")>-1);
              var trendServiceUrl = "http://104.197.240.190/ProdTrend/sku/";
              try{
                var urlFromCookie = readCookie("TREND_SERVICE_URL");
                if(urlFromCookie){
                  trendServiceUrl = urlFromCookie;
                }
              }catch(e){
                console.warn("Error getting trend service URL from cookie", e);
              }

              if(USE_MOCK_DATA_FILE){
                $.getJSON( "/MCCCheckout/static/MCC/dist/test.json", function(data){
                    $.each(data, function(key, trendingItem) {
                      _handleTrendingData(trendingItem);
                    });
                });
              }else{
                $.each(idArray, function(index, sku){
                  $.ajax(trendServiceUrl + sku).done(function(resp){
                    _handleTrendingData(resp.response[0]);
                  }).fail(function(e){
                    console.error("Error getting trending data for ", sku);
                  });
                });
              }

               //   - determine trending items
               //   - display trending badge/numbers
                $(document).on("QUICKTIP_OPEN", function(evt, element){
                    // console.debug("QUICKTIP_OPEN", element, evt);
                    var sku = element.attr("data-modal-sku");
                    CHART_FX[sku]();
                    //style bottom line
                    setTimeout(function(){
                        $(".ct-grids line.ct-vertical").first().css(
                            {"visibility":"visible",
                             "stroke-width": "1px",
                             "stroke-dasharray": "0"});
                    }, 10);

                });
            } catch (e) {
                console.error("Error loading trending items", e);
            }
        };
    
    function _handleTrendingData(trendingItem){
          $(".product-image a[href$=" + trendingItem.productId + "]").each(function(index, node){ 
          	  if(trendingItem.cartCount>0 && trendingItem.orderCount>0){
              _addTrendingBadge(node, trendingItem);
          	  }
          });
    }

               function _addTrendingBadge(node, trendingItem){
                    var id = "trend-tooltip_" + trendingItem.productId;
                    $(node).prepend(
                        '<a href="#" class="tip-opener-mcc trending-tip-opener" ' +
                          'data-modal-title="Top Trending" data-modal-content="#' + id + '" data-modal-width="250" data-modal-sku="'+ trendingItem.productId + '">' +
                          '<span class="dwarf-newLowPrice40" title="Trending Item" z-index="9999"></span>' + 
                        '</a>');

                    //tooltip
                    $("body").append(
                        '<div id="' + id + '" style="display: none; text-align: center;" class="item">' +
                            '<div class="trending-item-info">' +
                                '<h4>People looking at this today:</h4>' +
                                '<div class="trend-count-cart">' + 
                                    '<img src="/MCCCheckout/static/MCC/images/3heads.png"><span class="trend-count">' + trendingItem.cartCount + '</span>' + 
                                '</div>' +
                                '<div><span></span></div>' +
                                '<h4>Purchased Today:</h4>' +
                                '<div class="trend-count-order">' + 
                                    '<img src="/MCCCheckout/static/MCC/images/cart.png"><span class="trend-count">' + trendingItem.orderCount + '</span>' + 
                                '</div>' +
                            '</div>' +
                        '</div>');
               
                    CHART_FX[trendingItem.productId] = (function(_trendingItem){
                        return function(){
                            _makeChart(_trendingItem);
                        };
                    })(trendingItem);
               }

               function _makeChart(trendingItem){
                    var sku = trendingItem.productId;
                    var idContainer = "graph-container-trend-tooltip_" + sku;
                    var id = "graph-trend-tooltip_" + sku;
                    // $("#" + idContainer).append(
                    $(".tip-content-mcc").append(
                        '<div id="' + id + '" class="ct-chart ct-perfect-fourth graph-container-trend-tooltip"></div>'
                        );
                    
                    var cartTrendData = {labels: [], series: []};
                    // $.each(trendingItem.cartTrend, function(key, count){
                    var cartData = [];

                    for(var hour=0;hour<24;hour++){
                        var hourlabel = " ";
                        if(hour===0 || hour===12 || hour===23){
                            hourlabel = _getHourLabel(hour);
                        }
                        cartTrendData.labels.push(hourlabel);
                        cartData.push(trendingItem.cartTrend[hour]);
                    }

                    cartTrendData.series.push(cartData);

                    // var xdata = {
                    //   // A labels array that can contain any sort of values
                    //   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                    //   // Our series array that contains series objects or in this case series data arrays
                    //   series: [
                    //     [5, 2, 4, 2, 0]
                    //   ]
                    // };

                    // Create a new line chart object where as first parameter we pass in a selector
                    // that is resolving to our chart container element. The Second parameter
                    // is the actual data object.
                    new Chartist.Line("#" + id, cartTrendData,
                        {
                          chartPadding: {
                            top: 0,
                            right: 20,
                            bottom: 0,
                            left: 0
                          },
                          axisY: {
                            		onlyInteger: true
                          		}
                        });
                        //   }
                        // });

                    //add label
                    $(".ct-chart").prepend('<div class="units-sold-label"></div>');
               }
    
    function _getHourLabel(hour){
        var label = hour>11?"PM":"AM";
        hour = (hour%12 || 12) + label;
        if(hour==="12PM"){
            hour = "NOON";
        }
        return hour;
    }

    function _loadCSS(){
        $("<link/>", {
           rel: "stylesheet",
           type: "text/css",
           href: "/MCCCheckout/static/MCC/scripts/global/styles/thd.plugins.css"
        }).appendTo("head");

        $("<link/>", {
           rel: "stylesheet",
           type: "text/css",
           href: "/MCCCheckout/static/MCC/styles/trending.css"
        }).appendTo("head");

        $("<link/>", {
           rel: "stylesheet",
           type: "text/css",
           href: "/MCCCheckout/static/MCC/styles/chartist.min.css"
        }).appendTo("head");
    }

    return trendingItems;
});
/**
 * Rediredt Header My Links to Tablet My Account fro Tablet User.

 	env.url.logout = 			https + env.host + "/MCCAccount/User/Logout";
	env.url.register = 			https + env.host + "/MCCAccount/User/Register";
	env.url.orderHistory = 		https + env.host + "/MCCAccount/Order/orderhistory?action=receipt";
	env.url.account = 			https + env.host + "/MCCAccount/User/AccountInfo";
	env.url.myLists = 			https + env.host + "/MCCAccount/MyList/ListAll";
	env.url.findList = 			https + env.host + "/MCCAccount/MyList/ListAll";
	env.url.creditCenter = 		https + env.host + "/MCCAccount/Auth/CreditCenter";

	
 */

define('shared/redirectToTabletMyAccount', ['jquery',
        'cart/env',
        'shared/utils/LoadingCoverUp'
    ],
    function($, env, loading) {


        var _redirectToTabletMyAccount = function() {

            // - Register
            $("a[isregisterlink=true]").removeClass("dual-sign-in-pop-up").mousedown(function() {
            	console.log("env.url.register")
                $(this).attr("href", env.url.register);
                $(this).attr("data-myaccountauth", "false");
                loading.start();
                document.location.href = env.url.register;
            });

            // - Orders & Purchases
            $("#headerMyAccountOrders").removeClass("dual-sign-in-pop-up");
            $(document).on('click touchend', '#headerMyAccountOrders', function(event) {
            	console.log("env.url.orderHistory")
                event.preventDefault();
                event.stopImmediatePropagation();
                loading.start();
                document.location.href = env.url.orderHistory;
            });

            // - Find a List
            $("a[title='Order Status']").click(function(event) {
            	console.log("env.url.orderHistory")
                event.preventDefault();
                event.stopImmediatePropagation();
                loading.start();
                document.location.href = env.url.orderHistory;
            });


            // - Account Profile
            $(".accountProfile.headerMyAccount__link").removeClass("dual-sign-in-pop-up").click(function(evt) {
            	console.log("env.url.account")
                evt.preventDefault();
                evt.stopImmediatePropagation();
                loading.start();
                document.location.href = env.url.account;
            });
            $(document).on('click', '.accountProfile.headerMyAccount__link', function(event) {
            	console.log("env.url.account")
                event.preventDefault();
                event.stopImmediatePropagation();
                loading.start();
                document.location.href = env.url.account;
            });


            // - My Lists
            $(".myList.headerMyAccount__link").removeClass("dual-sign-in-pop-up").click(function() {
            	console.log("env.url.myLists")
                event.preventDefault();
                event.stopImmediatePropagation();
                loading.start();
                featureSwitchPromise.done(function(){
    				if(MCMListDesktopFeature == false){
    					document.location.href = env.url.myLists;
    				}
    			});
            });
            $(".myList.headerMyAccount__link").removeClass("dual-sign-in-pop-up");
            $(document).on('click', '.myList.headerMyAccount__link', function(event) {
            	console.log("env.url.myLists")
                event.preventDefault();
                event.stopImmediatePropagation();
                loading.start();
                document.location.href = env.url.myLists;
            });

            // - Find a List
            $(".headerMyAccount__link[title='Find a List']").removeClass("dual-sign-in-pop-up").click(function() {
            	console.log("env.url.findList")
                $(this).attr("href", env.url.findList);
            });

  
            $(".creditCenter.headerMyAccount__link").removeClass("dual-sign-in-pop-up");
            $(document).on('click', '.creditCenter.headerMyAccount__link', function(event) {
            	console.log("env.url.creditCenter")
                event.preventDefault();
                event.stopImmediatePropagation();
                loading.start();
                document.location.href = env.url.creditCenter;
            });
        }

        if (window.IS_TABLET || navigator.userAgent.match(/iPad/i)) {
        	console.log("window.IS_TABLET")
            _redirectToTabletMyAccount();
        }

        return;
    });

/**
 * MCC Add-To-Cart(ATC) override router for all channels
 * - Will override bindings for all common ATC originations
 */
define('shared/atc/thd.mcc.atcOverlayRouter', [
        'jquery',
        'cart/env',
        'shared/atc/thd.mcc.atcOverlay',
        'shared/atc/thd.mcc.atcOverlayModal',
        'shared/atc/thd.mcc.atcOverlayAppliance',
        'shared/atc/thd.mcc.atcOverlayApplianceAvailability',
        'shared/TrendingItems',
        'cookie-utils',
        'shared/redirectToTabletMyAccount'
    ],
    function(
        $,
        env,
        mccAtcOverlay,
        mccAtcOverlayModal,
        mccAtcOverlayAppl,
        checkAvailability,
        trendingItems,
        cookieUtils,
        redirectToTabletMyAccount
    ){

    function init() {

        $(document).ready(function() {
            try {               
            	$(document).bind("MCC_ATC_PIP_PAYPALEXRPRESS", function(evt, url) {
			        _handleATCFromPIPPayPalExpress(url);
			    });
            	// mini cart override for certain scenarios
            	overrideMiniCartLink();
                
               //load trend data
               if(document.cookie.indexOf("HACKATHON_DEMO")>-1){
                    trendingItems.load();
               }
            } catch (e) {
                console.error("Error binding ATC overlays in the common router", e);
            }
        });
    } //end init
    
    /*
     * Override link in the header to go to ViewCart.do
     */
    function overrideMiniCartLink() {
    	try{
		   	var $headerCart = $("#headerCart");
		   	var href = $headerCart.attr("href");
		   	// hack for LLCs to not include the www. in the mini cart override
		   	if (env.host.indexOf("homedepotdev.com")>-1) {
		   		return $headerCart.attr("href", env.url.viewCart);
		   	}
		   	// in prod only override url if url does not contain blinds or MCCCheckout
			if(href && (href.indexOf("blinds.") === -1 || href.indexOf("MCCCheckout") === -1)){
				$headerCart.attr("href", env.url.viewCart.slice(0, 7) +"www."+ env.url.viewCart.slice(7));
				$headerCart.click(function(){
					$headerCart.attr("href", env.url.viewCart.slice(0, 7) +"www."+ env.url.viewCart.slice(7));
				});
			}
    	}catch(e){
			console.warn("Error overriding the mini cart link", e);  
		}
    }


    //MLTC-1341 Common channel handler for Paypal Express PIP
    function _handleATCFromPIPPayPalExpress(url) {
        var params = env.getParams(url);
        var atcRequestList = mccAtcOverlayRouter.getATCRequestFromPIPandPLP(params);
        mccAtcOverlay.payPalExpress(atcRequestList);
    }
    
    /**
     * Determine itemType by "only" attribute (if single ffm type)
     * or radio selection active, if multiple options
     * @returns boolean
     */
    function _isItemTypeForPIP(id, attr) {
        return (
            ($('#bbox' + id).find('.radio-custom').hasClass('radio-custom-active')) ||
            ($('.addToList_btn').attr(attr))
        );
    }
    
    function _getFulfillmentLocationForSTH(detaFFL){
    	
    	if(detaFFL !== undefined && detaFFL !== ""){
    		return detaFFL;
    	}
    	else{
	    	var cookieUtil = thdOnlineCommon.cookie.channel,
	    		ffl = "";
	    	if ((cookieUtils.readCookie('DETA_ZIP') !== "undefined") && (cookieUtils.readCookie('DETA_ZIP') !== "")){
	    		ffl=cookieUtils.readCookie('DETA_ZIP');
	    	}
	    	else{
	    		ffl = "DirectShip";
	    	}
	    	return ffl;
    	}
    }
    
    var mccAtcOverlayRouter = {
        init: init,
        getFulfillmentMethod: function() {
            var ffm;
            if ($("#fromPage").val() === "productDetail") { //or, params.prevURL==="ProductDisplay"
                if (_isItemTypeForPIP("PickUpStore", "onlybopis")) {
                    ffm = "BOPIS";
                } else if (_isItemTypeForPIP("ShipToStore", "onlyboss")) {
                    ffm = "ShipToStore";
                } else if (_isItemTypeForPIP("Delivery", "onlydelivery")) {
                    ffm = "DeliverFromStore";
                } else { //ShipToMe, onlysth
                    ffm = "ShipToHome"; //default
                }
            } else { //PLP
                ffm = "ShipToHome";
            }
            return ffm;
        },
        getFulfillmentLocation: function(ffm, storeNumber, zipCode, detaFFL) {
            var ffl;
            switch(ffm) {
            	case "BOPIS":
            		ffl = storeNumber;
            		break;
            	case "ShipToStore":
            		ffl = storeNumber;
            		break;
            	case "DeliverFromStore":
            		ffl = zipCode;
            		break;
            	case "ShipToHome":
            		ffl = _getFulfillmentLocationForSTH(detaFFL);
            		break;
            }
            return ffl;
        },
       
        getATCRequestFromPIPandPLP: function(params, callbacks) {
            var atcRequestList = [];
            try {
                var itemId				=	params.catEntryId,
                	quantity 			=	params.quantity || 1, //Default to one
                	fulfillmentMethod 	=	this.getFulfillmentMethod(),
                	fulfillmentLocation =	this.getFulfillmentLocation(fulfillmentMethod,params.str_nbr,params.bodfsZipCode,params.fulfillmentLocation);

                var atcRequest = {
                    itemId: itemId,
                    quantity: quantity,
                    fulfillmentLocation: fulfillmentLocation,
                    fulfillmentMethod: fulfillmentMethod,
                    // onStart: 
                    onComplete: callbacks ? callbacks.onComplete : null,
                    onClosed: callbacks ? callbacks.onClosed : null
                };
                //When user opt in for HDPP from PIP
                var warrantyCheckBox=$("#buyBox-hdpp .checkbox-custom-active");
                if(warrantyCheckBox.length>0){
                	var warrantyItem ={
                    		itemId:warrantyCheckBox.data("hdpp-item-id")
                    }
                    atcRequest.warrantyItem = warrantyItem;
                }
                atcRequestList.push(atcRequest);

            } catch (e) {
                console.error("Error getting ATC STH request details", e);
            }
            return atcRequestList;
        }
    };
    return mccAtcOverlayRouter;
});
/**
 * MCC Add-To-Cart(ATC) wrapper
 */
define('shared/atc/thd.mcc.AtcFromBSS', [
        'jquery',
        'cart/env',
        'shared/atc/thd.mcc.atcOverlay',
        'shared/atc/thd.mcc.atcOverlayRouter',
        'checkout/CheckoutModel',
        'analytics',
        'cookie-utils',

    ],
    function(
        $,
        env,
        mccAtcOverlay,
        mccAtcOverlayRouter,
        checkoutModel,
        analytics,
        cookieUtils
    ) {



        var atcFromBSS = {};



        function _getMapValuePricingFlag(url) {
            var params = env.getParams(url);
            return params.valuepricing;
        }

        function _getATCRequestFromModalConfig(modalConfig) {
            var atcRequestList = [];
            try {
                //determine if STH or BossBopis
                var url = modalConfig.href;
                var params = env.getParams(url);

                var isBossBopisOverlayATC = false;
                //only way to distinguish boss/bopis from sth
                //is by the url parameters (need to confirm)
                $.each(params, function(key, value) {
                    if (key.indexOf("str_nbr_") > -1) {
                        isBossBopisOverlayATC = true;
                    }
                });

                var callbacks = {
                    onComplete: modalConfig.onComplete,
                    onClosed: modalConfig.onClosed
                };

                if (isBossBopisOverlayATC) {
                    atcRequestList = _getATCRequestFromBossBopisOverlay(params, callbacks);
                } else {
                    atcRequestList = mccAtcOverlayRouter.getATCRequestFromPIPandPLP(params, callbacks);
                }
                //Analytics - ATC from bss flag
                analytics.bssOverlayFlag = isBossBopisOverlayATC;
            } catch (e) {
                console.error("Error getting ATC request details from modalconfig", e);
            }

            return atcRequestList;
        }


        function _getATCRequestFromBossBopisOverlay(params, callbacks) {
            var atcRequestList = [];
            try {
                console.debug("ATC FancyBox - SMARTOVERLAY BOSS/BOPIS");

                //if coming from Cart, we need to know that the overlay was not cancelled
                SMARTOVERLAY_CANCELLED = false;

                //Need to pull out item info from url params, but we don't know the number of items
                //or the indices. So, loop from 1 to 30 and find any matches.
                //TODO: find a better way to know when we have all of the items
                //When user opt in for HDPP from PIP
                var warrantyCheckBox = $("#buyBox-hdpp .checkbox-custom-active");
                if (warrantyCheckBox.length > 0) {
                    var warrantyItem = {
                        itemId: warrantyCheckBox.data("hdpp-item-id")
                    }
                }
                for (var index = 1; index < 30; index++) {
                    var storeId = params["str_nbr_" + index];
                    var itemId = params["catEntryId_" + index];
                    if (itemId) { // the _1 may map to store row..so need to account for all?
                        var req = {
                            itemId: itemId,
                            quantity: params["quantity_" + index],
                            fulfillmentLocation: storeId,
                            fulfillmentMethod: _getFulfillmentMethodFromBossBopisOverlay(storeId)
                        };
                        if (mccAtcOverlay.BLINDS_CONFIG_ID != "") {
                            req.configurationId = mccAtcOverlay.BLINDS_CONFIG_ID;;
                        }
                        //When user opt in for HDPP from PIP
                        if (warrantyCheckBox.length > 0) {
                            req.warrantyItem = warrantyItem;
                        }
                        atcRequestList.push(req);
                    }
                }
            } catch (e) {
                console.error("Error getting ATC request details from modalconfig", e);
            }

            return atcRequestList;
        }

            /**
     * Re-use fulfillment method check for PIP. If we are not on PIP page,
     * this will always be BOPIS. If on PIP, it may be BOSS ("ShipToStore")
     * Use labels on SmartOverlay to determine BOSS or BOPIS
     */
    function _getFulfillmentMethodFromBossBopisOverlay(storeId) {
        try {
            if (storeId) {
                var storeLabel = $(".quantFull-Cntnr, .otherStore-Row").has("input[value=" + storeId + "]").find(".storeInfo-ColHead").html();
                if (storeLabel.indexOf("Pick Up In Store") > -1) {
                    return "BOPIS";
                } else if (storeLabel.indexOf("Ship To Store") > -1) {
                    return "ShipToStore";
                }
            }
            /*
             *  TODO: If above logic does not return fullfillment type then
             *  fallback on original logic for now but this can probably be removed in the future
             */
            // Sets fulfillment type to "Ship To Store" if storeLables contains one instance of "Ship To Store" (seems brittle!)
            var storeLabels = $("#smartOverlay #bssStores .store-Fullfillment .storeInfo-ColHead");
            if (storeLabels.length > 0) {
                if (storeLabels.text().indexOf("Ship To Store") > -1) {
                    return "ShipToStore";
                }
            } 
            var ffm = mccAtcOverlayRouter.getFulfillmentMethod();
            if (ffm !== "BOPIS" && ffm !== "ShipToStore") {
                //default to BOPIS
                return "BOPIS";
            }
        } catch (e) {
            console.error("_getFulfillmentMethodFromBossBopisOverlay()", e);
        }
        return "BOPIS";
    }


        atcFromBSS.getATCRequestFromModalConfig = _getATCRequestFromModalConfig;
        atcFromBSS.getMapValuePricingFlag = _getMapValuePricingFlag;
        //atcFromBSS.handleAddToCartPIPandPLP: _handleAddToCartPIPandPLP,
        //atcFromBSS.handleAddToCartAppliance: _handleAddToCartAppliance,
        return atcFromBSS;
    });

/**
 * MCC Add-To-Cart(ATC) wrapper
 */
define('shared/atc/thd.mcc.AddToCart', [
        'jquery',
        'cart/env',
        'shared/atc/thd.mcc.atcOverlay',
        'shared/atc/thd.mcc.atcOverlayModal',
        'shared/atc/thd.mcc.atcOverlayAppliance',
        'shared/atc/thd.mcc.atcOverlayApplianceAvailability',
        'shared/atc/thd.mcc.AtcFromBSS',
        'checkout/CheckoutModel',
        'analytics',
        'cookie-utils',
        'shared/atc/thd.mcc.atcOverlayRouter'

    ],
    function(
        $,
        env,
        mccAtcOverlay,
        mccAtcOverlayModal,
        mccAtcOverlayAppl,
        checkAvailability,
        atcFromBSS,
        checkoutModel,
        analytics,
        cookieUtils,
        atcOverlayRouter
    ) {

        var _options = {
            successModal: true,
            errorModal: true,
            loadingCoverUp: true
        };

        var mcc = {};

        mcc.addToCart = function(atcRequestList, options) {
            var promise = new $.Deferred(),
                ffm = '';
            try {
                options = _setOptions(options);
                if (!$.isArray(atcRequestList)) {
                    ffm = atcRequestList.fulfillmentMethod;
                    atcRequestList = [atcRequestList];
                }

                //Ensure request is well-formed
                atcRequestList = _sanitizeRequest(atcRequestList);
                if (ffm && ffm == 'DirectDelivery') {
                    promise = _handleAddToCartAppliance(atcRequestList[0]);
                } else {
                    promise = mccAtcOverlay.showOverlay(atcRequestList, options);
                }
            } catch (e) {
                console.error("Error invoking addToCart()", atcRequestList, e);
                promise.reject(e);
            }
            return promise;
        };

        function _sanitizeRequest(atcRequestList) {
            $.each(atcRequestList, function(index, request) {
                //Ensure quanity is present and > 0
                if (!request.quantity || request.quantity < 1) {
                    request.quantity = "1";
                }
                //Remove fulfillmentMethod if empty, null, or undefined
                var ffm = request.fulfillmentMethod;
                if (typeof ffm === "undefined" || ffm === "" || ffm === null) {
                    delete request.fulfillmentMethod;
                    //also, remove location as it won't be valid
                    delete request.fulfillmentLocation;
                } else if (ffm && ffm === "ShipToHome") {
                    request.fulfillmentLocation = _getFulfillmentLocationForSTH();
                } else {
                    var ffl = request.fulfillmentLocation;
                    if (!ffl && ffm !== "DirectDelivery") {
                        //only appliance should have an empty location (zipcode)
                        delete request.fulfillmentLocation;
                    }
                }
            });

            return atcRequestList;
        }
        
        /**
         *  DETA_ZIP cookie to set as fulfillmentLocation for STH items if present in href/cookie for STH from PIP page.
         */
        
        function _getFulfillmentLocationForSTH(detaFFL){
            var cookieUtil = thdOnlineCommon.cookie.channel,
                ffl = "";
            if ((cookieUtils.readCookie('DETA_ZIP') !== "undefined") && (cookieUtils.readCookie('DETA_ZIP') !== "")){
                ffl=cookieUtils.readCookie('DETA_ZIP');
            }
            else{
                ffl = "DirectShip";
            }
            return ffl;         
        }
        
        function _handleAddToCartAppliance(atcRequest) {
            var zipCode = _getApplianceZipCode(atcRequest.fulfillmentLocation);
            atcRequest.fulfillmentLocation = zipCode;
            var applConfig = {
                prodStatus: atcRequest.prodStatus,
                delvDate: atcRequest.delvDate
            };

            //launch modal via check avail (even if going to ATC)
            return checkAvailability.showOverlay(atcRequest, applConfig);
        }

        function _getApplianceZipCode(configZipCode) {
            //if no config zip, use prefilled
            var zipCode = configZipCode ||
                $("#zipCodeTxt").find('input').val()||
                checkAvailability.zipCodePreFillVal;
            try {
                if (!zipCode) {
                    var cookieZip = cookieUtils.readCookie("THD_AOL").split(",")[0];
                    //validate store zipcode
                    if (cookieZip && (cookieZip.length === 5) && (/^\d{5}$/.test(cookieZip))) {
                        zipCode = cookieZip;
                    }
                }
                //in Checkout, cookie is not available. 
                //If still not set, try to get from CheckoutModel
                if (!zipCode &&
                    (typeof TABCOM !== "undefined") &&
                    (typeof checkoutModel !== "undefined")
                ) {
                    zipCode = checkoutModel.getDeliveryZipCode();
                }

            } catch (e) {
                console.error("Error trying to get zipcode for appliance ATC", e);
            }
            mccAtcOverlayAppl.zipCodePreFillVal = zipCode;
            return zipCode;
        }
        //add to object for testing
        mcc._sanitizeRequest = _sanitizeRequest;

        function _setOptions(options) {
            if (typeof options === "object") {
                _options = $.extend(_options, options);
            }
            return _options;
        }

        function _getMapValuePricingFlag(url) {
            var params = env.getParams(url);
            return params.valuepricing;
        }

        function _getATCRequestFromModalConfig(modalConfig) {
            var atcRequestList = [];
            try {
                //determine if STH or BossBopis
                var url = modalConfig.href;
                var params = env.getParams(url);

                var isBossBopisOverlayATC = false;
                //only way to distinguish boss/bopis from sth
                //is by the url parameters (need to confirm)
                $.each(params, function(key, value) {
                    if (key.indexOf("str_nbr_") > -1) {
                        isBossBopisOverlayATC = true;
                    }
                });

                var callbacks = {
                    onComplete: modalConfig.onComplete,
                    onClosed: modalConfig.onClosed
                };

                if (isBossBopisOverlayATC) {
                    atcRequestList = _getATCRequestFromBossBopisOverlay(params, callbacks);
                } else {
                    atcRequestList = mccAtcOverlayRouter.getATCRequestFromPIPandPLP(params, callbacks);
                }
                //Analytics - ATC from bss flag
                analytics.bssOverlayFlag = isBossBopisOverlayATC;
            } catch (e) {
                console.error("Error getting ATC request details from modalconfig", e);
            }

            return atcRequestList;
        }


        function _getATCRequestFromBossBopisOverlay(params, callbacks) {
            var atcRequestList = [];
            try {
                console.debug("ATC FancyBox - SMARTOVERLAY BOSS/BOPIS");

                //if coming from Cart, we need to know that the overlay was not cancelled
                SMARTOVERLAY_CANCELLED = false;

                //Need to pull out item info from url params, but we don't know the number of items
                //or the indices. So, loop from 1 to 30 and find any matches.
                //TODO: find a better way to know when we have all of the items
                //When user opt in for HDPP from PIP
                var warrantyCheckBox = $("#buyBox-hdpp .checkbox-custom-active");
                if (warrantyCheckBox.length > 0) {
                    var warrantyItem = {
                        itemId: warrantyCheckBox.data("hdpp-item-id")
                    }
                }
                for (var index = 1; index < 30; index++) {
                    var storeId = params["str_nbr_" + index];
                    var itemId = params["catEntryId_" + index];
                    if (itemId) { // the _1 may map to store row..so need to account for all?
                        var req = {
                            itemId: itemId,
                            quantity: params["quantity_" + index],
                            fulfillmentLocation: storeId,
                            fulfillmentMethod: _getFulfillmentMethodFromBossBopisOverlay(storeId)
                        };
                        if (mccAtcOverlay.BLINDS_CONFIG_ID != "") {
                            req.configurationId = mccAtcOverlay.BLINDS_CONFIG_ID;;
                        }
                        //When user opt in for HDPP from PIP
                        if (warrantyCheckBox.length > 0) {
                            req.warrantyItem = warrantyItem;
                        }
                        atcRequestList.push(req);
                    }
                }
            } catch (e) {
                console.error("Error getting ATC request details from modalconfig", e);
            }

            return atcRequestList;
        }

        function _getAtcRequestAppliance(elem, sku){
            var zipCode = _getApplianceZipCode(elem.attr("data-zip"));          
            var atcRequest = {
                itemId: elem.attr("data-prodid"),
                quantity: "1",
                fulfillmentMethod: "DirectDelivery",
                fulfillmentLocation: zipCode
            };
            return atcRequest;
        }

        mcc.options = function(options) {
            return _setOptions(options);
        };


        mcc.init = function() {
            $('body').on("click", ".overlayCartTrigger,.triggerATCAppliOverlay,.triggerApplChangeZipOverlay", function(e) {
                e.preventDefault();
                var getItemId;
                var ffMethod;
                var $this = $(this)
                    //desktop: href
                    //tablet: data-url
                    //appliance:data-prodid
                if ($this.attr('data-prodid')) {
                    getItemId = $(this).attr('data-prodid');
                    ffMethod = 'DirectDelivery';
                } else if ($this.attr('href')) {
                    getItemId = env.getParams($(this).attr('href'));
                    getItemId = getItemId['catEntryId'];
                    ffMethod = 'ShipToHome'
                } else if ($this.attr('data-url')) {
                    getItemId = env.getParams($(this).attr('href'));
                    getItemId = getItemId['catEntryId'];
                    ffMethod = 'ShipToHome'

                }

                var atcRequest = { "itemId": getItemId, "quantity": "1", "fulfillmentLocation": "", "fulfillmentMethod": ffMethod };
                mcc.addToCart(atcRequest);
                //overlayCartTrigger(e,this);
            });

            //binding event for appliance add to cart from certona
            $('body').on("click", ".triggerATCAppliOverlayRecom", function(evt) {
                evt.preventDefault();
                evt.stopImmediatePropagation();
                var _this = this;           
                //Handle as Appliance
                $("#mccCertonaApplError").addClass('hide');
                var atcRequest = _getAtcRequestAppliance($(_this));             
                //launch modal via check avail (even if going to ATC)
                checkAvailability.addCertonaAppliance(atcRequest);
            });

            /*EVENT FROM BSS SMART OVARLAY*/
            if ($("#fromPage").val() === "shoppingCart") {
                var SMARTOVERLAY_CANCELLED;
                $(document).on('BSS_OVERLAY_OPENED', function() {
                    console.log('BSS_OVERLAY_OPENED');
                    $("#cartContainer").remove();
                    SMARTOVERLAY_CANCELLED = true;
                });

                $(document).on('BSS_OVERLAY_CLOSED', function() {
                    console.log('BSS_OVERLAY_CLOSED');
                    $("body").append('<div id="cartContainer"></div>');

                    if (SMARTOVERLAY_CANCELLED) {
                        $.event.trigger("SMART_OVERLAY_CANCELLED_FULLSITE");
                    };
                });
            }

            $(document).on('BSS_OVERLAY_ATC', function(event, modalConfig) {
                console.log('BSS_OVERLAY_ATC');
                var atcRequestList = atcFromBSS.getATCRequestFromModalConfig(modalConfig);

                var hasMapValuePricing = atcFromBSS.getMapValuePricingFlag(modalConfig.href);
                if (hasMapValuePricing) {
                    atcRequestList[0].valuepricing = hasMapValuePricing;
                }
                mcc.addToCart(atcRequestList);
                $('#bss_overlay #fancybox-close').trigger('click');

            });

            atcOverlayRouter.init();


        }



        //console.log(AddToCart)


        return mcc;
    });

/**
 * MCC Add-To-Cart(ATC) override router for Fullsite
 * - Will override bindings for all tablet ATC originations
 */
define('shared/atc/thd.mcc.atcOverlayRouterFullsite', [
        'jquery',
        'cart/env',
        'shared/atc/thd.mcc.atcOverlay',
        'shared/atc/thd.mcc.atcOverlayRouter',
        'shared/atc/thd.mcc.atcOverlayModal',
        'shared/atc/thd.mcc.atcOverlayAppliance',
        'shared/atc/thd.mcc.atcOverlayApplianceAvailability',
        'checkout/CheckoutModel',
        'analytics'
    ],
    function(
        $,
        env,
        mccAtcOverlay,
        mccAtcOverlayRouter,
        mccAtcOverlayModal,
        mccAtcOverlayAppl,
        checkAvailability,
        checkoutModel,
        analytics
    ){



    /**
     * Item added with PayPal Express button
    	 URL: "OrderItemDisplay"
    	calculationUsageId: "-1"
    	catEntryId: "100049838"
    	contractId: "2081191"
    	errorViewName: "ProductDisplayErrorView"
    	orderId: "."
    	paymentType: "PPEX"
    	prevURL: "ProductDisplay"
    	quantity: "1"
     */

    function _handleMultiATCFromPIP(elem) {
        console.debug("Multi-ATC (IRG/FBT from PIP)");
        var atcRequestList = [];

        var container = $(elem).parent().parent();
        container.find("input[type='checkbox'].selected").each(function(index, item) {
            var itemId = $(item).attr("data-itemid");
            var atcRequest = {
                itemId: $(item).attr("data-itemid"),
                quantity: 1 //,
                    // fulfillmentLocation: fulfillmentLocation,
                    // fulfillmentMethod: fulfillmentMethod,
                    // onComplete: callbacks?callbacks.onComplete:null,
                    // onClosed: callbacks?callbacks.onClosed:null
            };
            atcRequestList.push(atcRequest);
        });

        if (atcRequestList.length > 0) {
            mccAtcOverlay.multiAddFromPIP(atcRequestList, function(resp) {
                try {
                    //on success
                    THD.PIP.buyBox.updatePayPalEligibility();
                    //show success modal
                    //create confirmation object
                    var confirmation = {
                        "ItemsAdded": [],
                        "ItemsAddFailure": [],
                        "items": atcRequestList.length
                    };

                    //{"ItemsAdded":[{"CatEntryId":"202522273","Quantity":"1"},{"CatEntryId":"202088292","Quantity":"1"}],"ItemsAddFailure":[],"items":2}
                    $.each(atcRequestList, function(index, item) {
                        confirmation.ItemsAdded.push({
                            "CatEntryId": item.itemId,
                            "Quantity": "1"
                        });
                    });

                    THD.PIP.overlays.fbtIrgAtcConfirmation.display(confirmation);
                    //redirect "Checkout Now" button to MCC
                    $("#CartOverlayCheckoutId1").attr("href", env.url.viewCart);
                } catch (e) {
                    console.error("Error handling response from multi-ATC from PIP", e);
                }
            });
        }
    }

    function _handleAddToCartPIPandPLP(modalConfig) {
        var atcRequestList = _getATCRequestFromModalConfig(modalConfig);

        var hasMapValuePricing = _getMapValuePricingFlag(modalConfig.href);
        if (hasMapValuePricing) {
            atcRequestList[0].valuepricing = hasMapValuePricing;
        }
        mccAtcOverlay.showOverlay(atcRequestList);
    }

    function _getMapValuePricingFlag(url) {
        var params = env.getParams(url);
        return params.valuepricing;
    }

    function _getATCRequestFromModalConfig(modalConfig) {
        var atcRequestList = [];
        try {
            //determine if STH or BossBopis
            var url = modalConfig.href;
            var params = env.getParams(url);

            var isBossBopisOverlayATC = false;
            //only way to distinguish boss/bopis from sth
            //is by the url parameters (need to confirm)
            $.each(params, function(key, value) {
                if (key.indexOf("str_nbr_") > -1) {
                    isBossBopisOverlayATC = true;
                }
            });

            var callbacks = {
                onComplete: modalConfig.onComplete,
                onClosed: modalConfig.onClosed
            };

            if (isBossBopisOverlayATC) {
                atcRequestList = _getATCRequestFromBossBopisOverlay(params, callbacks);
            } else {
                atcRequestList = mccAtcOverlayRouter.getATCRequestFromPIPandPLP(params, callbacks);
            }
          //Analytics - ATC from bss flag
            analytics.bssOverlayFlag = isBossBopisOverlayATC;
        } catch (e) {
            console.error("Error getting ATC request details from modalconfig", e);
        }

        return atcRequestList;
    }


    function _getATCRequestFromBossBopisOverlay(params, callbacks) {
        var atcRequestList = [];
        try {
            console.debug("ATC FancyBox - SMARTOVERLAY BOSS/BOPIS");

            //if coming from Cart, we need to know that the overlay was not cancelled
            SMARTOVERLAY_CANCELLED = false;

            //Need to pull out item info from url params, but we don't know the number of items
            //or the indices. So, loop from 1 to 30 and find any matches.
            //TODO: find a better way to know when we have all of the items
            //When user opt in for HDPP from PIP
            var warrantyCheckBox=$("#buyBox-hdpp .checkbox-custom-active");
            if(warrantyCheckBox.length>0){
            	var warrantyItem ={
                	itemId:warrantyCheckBox.data("hdpp-item-id")
                }            
            }
            for (var index = 1; index < 30; index++) {
            var storeId = params["str_nbr_" + index];
                var itemId = params["catEntryId_" + index];
                if (itemId) { // the _1 may map to store row..so need to account for all?
                    var req = {
                        itemId: itemId,
                        quantity: params["quantity_" + index],
                        fulfillmentLocation: storeId,
                        fulfillmentMethod: _getFulfillmentMethodFromBossBopisOverlay(storeId)
                    };
                    if (mccAtcOverlay.BLINDS_CONFIG_ID != "") {
                        req.configurationId = mccAtcOverlay.BLINDS_CONFIG_ID;;
                    }
                    //When user opt in for HDPP from PIP
                    if(warrantyCheckBox.length>0){                	
                    	req.warrantyItem = warrantyItem;
                    }
                    atcRequestList.push(req);
                }
            }
        } catch (e) {
            console.error("Error getting ATC request details from modalconfig", e);
        }

        return atcRequestList;
    }

    /**
     * Re-use fulfillment method check for PIP. If we are not on PIP page,
     * this will always be BOPIS. If on PIP, it may be BOSS ("ShipToStore")
     * Use labels on SmartOverlay to determine BOSS or BOPIS
     */
    function _getFulfillmentMethodFromBossBopisOverlay(storeId) {
    	try {
		    if (storeId) {
		    	var storeLabel = $(".quantFull-Cntnr, .otherStore-Row").has("input[value=" + storeId + "]").find(".storeInfo-ColHead").html();
			    if (storeLabel.indexOf("Pick Up In Store") > -1) {
			    	return "BOPIS";
			    } else if (storeLabel.indexOf("Ship To Store") > -1) {
			    	return "ShipToStore";
			    }
		    }
		    /*
			 *  TODO: If above logic does not return fullfillment type then
			 *  fallback on original logic for now but this can probably be removed in the future
			 */
	        // Sets fulfillment type to "Ship To Store" if storeLables contains one instance of "Ship To Store" (seems brittle!)
	        var storeLabels = $("#smartOverlay #bssStores .store-Fullfillment .storeInfo-ColHead");
	        if (storeLabels.length > 0) {
	            if (storeLabels.text().indexOf("Ship To Store") > -1) {
	                return "ShipToStore";
	            }
	        } 
	        var ffm = mccAtcOverlayRouter.getFulfillmentMethod();
            if (ffm !== "BOPIS" && ffm !== "ShipToStore") {
                //default to BOPIS
                return "BOPIS";
            }
        } catch (e) {
            console.error("_getFulfillmentMethodFromBossBopisOverlay()", e);
        }
        return "BOPIS";
    }



    //This scenario should not happen as the button click is intercepted
    //before fancybox launch...but just in case, let's also handle fancybox
    function _handleAddToCartAppliance() {
        var config = THD.Global.ApplATCOverlay.config;
        var zipCode = _getApplianceZipCode(config.zipCode);
        var atcRequest = {
            itemId: config.prodId,
            quantity: "1",
            fulfillmentMethod: "DirectDelivery",
            fulfillmentLocation: zipCode
        };
        var applConfig = {
            prodStatus: config.prodStatus,
            delvDate: config.delvDate
        };

        //launch modal via check avail (even if going to ATC)
        checkAvailability.showOverlay(atcRequest, applConfig);
    }


    return {
        handleMultiATCFromPIP:      _handleMultiATCFromPIP,
        handleAddToCartPIPandPLP:   _handleAddToCartPIPandPLP,
        handleAddToCartAppliance: _handleAddToCartAppliance
    };
});
/**
 * MCC Add-To-Cart(ATC) override router for Tablet
 * - Will override bindings for all tablet ATC originations
 *
 */
define('shared/atc/thd.mcc.atcOverlayRouterTablet', [	
	    'jquery',
		'cart/env',
		'shared/atc/thd.mcc.atcOverlay',
		'shared/atc/thd.mcc.atcOverlayModal',
		'shared/atc/thd.mcc.atcOverlayAppliance',
		'shared/atc/thd.mcc.atcOverlayApplianceAvailability',
        'shared/utils/LoadingCoverUp',
        'checkout/CheckoutModel',
        'analytics',
        'cookie-utils'
	],
	function(
		$,
	    env,
	    mccAtcOverlay,
	    mccAtcOverlayModal,
	    mccAtcOverlayAppl,
	    checkAvailability,
        loading,
        checkoutModel,
        analytics,
        cookieUtils
	){

	
	try{
		if(IS_TABLET) {
			THDModuleLoader.$includeCSS("/MCCCheckout/static/MCC/dist/tablet-modal-scoped.css");
		}
	}catch(e){
	    console.error("Unable to load CSS for tablet modals", e);
	}
		
    // TABLET - PLP STH
    //	GM:
    //  	/MCCCheckout/Cart/AddToCart.do?catId=202711717&quantity=1&localStoreID=6557&itemType=DirectShip
    //	Appliance:
    //	  	/MCCCheckout/Cart/AddToCart.do?catId=202520650&quantity=1&localStoreID=6557&itemType=DirectDelivery
    function _triggerATCOverlayFromTabletPLP(args, elem) {
        console.debug("launch ATC from Tablet PLP");
        

        var url = $(elem).data("url") || args.url;
        var params = _getParams(url);

        console.debug("ATC original url:" + url, params);

        var itemId = params.catId /*GM,Appl*/ ;
        var quantity = params.quantity || 1; //should always be 1 from PLP
        var fulfillmentMethod = _getPLPFulfillmentMethod(params.itemType);
        var fulfillmentLocation = _getPLPFulfillmentLocation(params, fulfillmentMethod);

        $('.plp-grid.addToCartActive').removeClass('addToCartActive');
        $(elem).parents('.product.pod.plp-grid').addClass('addToCartActive');

        var atcRequest = {
            itemId: itemId,
            quantity: quantity,
            fulfillmentLocation: fulfillmentLocation,
            fulfillmentMethod: fulfillmentMethod
        };
        //Setting map value pricing
        if (params.valuepricing && params.valuepricing === "true") {
            atcRequest.valuepricing = "true";
        }
        if (fulfillmentMethod === "DirectDelivery") {
            checkAvailability.showOverlay(atcRequest);
        } else {

            mccAtcOverlay.showOverlay([atcRequest]);
        }
    }

    // TABLET - PLP STH
    //	GM:
    //  	AddToCart.do?catId=205351547&quantity=1&localStoreID=121&itemType=DirectShip"
    //	Appliance:
    //	  	???
    function _triggerATCOverlayFromSBOTD(url) {
        console.debug("launch ATC from Tablet SBOTD");
        var params = _getParams(url);

        var itemId = params.catId /*GM,Appl*/ ;
        var quantity = params.quantity || 1; //should always be 1 from SBOTD
        var fulfillmentMethod = (params.itemType === "DirectShip") ? "ShipToHome" : "DirectDelivery"; // DirectDelivery | DirectShip
        var fulfillmentLocation = (fulfillmentMethod === "ShipToHome") ? "DirectShip" : _getApplianceZipCode(null);


        var atcRequest = {
            itemId: itemId,
            quantity: quantity,
            fulfillmentLocation: fulfillmentLocation,
            fulfillmentMethod: fulfillmentMethod
        };

        if (fulfillmentMethod === "DirectDelivery") {
            checkAvailability.showOverlay(atcRequest);
        } else {
            mccAtcOverlay.showOverlay([atcRequest]);
        }
    }


    /**
     * Appliance -> "DirectDelivery"
     * STH       -> "ShipToHome"
     *
     * Note: PLP has a mismatch between itemType and fulfillmentMethod.
     *		 It mixes up the method/location for STH, so we have to flip it.
     */
    function _getPLPFulfillmentMethod(itemType) {
        if (itemType === "DirectShip") {
            itemType = "ShipToHome";
        } else if (itemType === "BOSS") {
            itemType = "ShipToStore";
        } else if (itemType === "BODFS") {
            itemType = "DeliverFromStore";
        }
        return itemType;
    }

    /**
     *  "ShipToHome"       -> "DirectShip"
     *  "DirectDelivery"   -> "30286"
     */
    function _getPLPFulfillmentLocation(params, fulfillmentMethod) {
        console.debug("_getPLPFulfillmentLocation() ffm=" + fulfillmentMethod);
        var ffl = null;
        if (fulfillmentMethod === "DirectDelivery") {
            //check for zip code in cookie, or from previous ATC
            ffl = _getApplianceZipCode();
        } else if (fulfillmentMethod === "DeliverFromStore") {
            ffl = params.zipcode || _getApplianceZipCode();
        } else if (fulfillmentMethod === "BOPIS" || fulfillmentMethod === "ShipToStore") { //this is from PIP, PLP will go through BOPIS ATC logic
            ffl = params.localStoreID;
        } else {
            ffl = "DirectShip";
        }
        return ffl;
    }

    // TABLET - BOPIS from within overlay
    //  BOPIS:
    //	    /MCCCheckout/Cart/AddToCart.do?action=mStore&itemType_1=bopis&storeId_1=550&quantity_1=2&catId_1=202183856&storeCnt=1
    //	*Potentially multiple stores, quantities
    function _triggerATCOverlayFromTabletBOPIS(args, elem) {
        console.debug("launch ATC from Tablet BOPIS/Smartoverlay");

        var url = $(elem).data("url") || args.url;
        var params = _getParams(url);

        var atcRequestList = [];
        //get all items
        var atEnd = false;
        var index = 1;
        //When user opt in for HDPP from PIP
        var warrantyCheckBox=$("#buyBox-hdpp .checkbox-custom-active");
        if(warrantyCheckBox.length>0){
        	var warrantyItem ={
            		itemId:warrantyCheckBox.data("hdpp-item-id")
            };
        }
        while (!atEnd) {
            var itemId = params["catId_" + index];
            if (itemId) {
                var req = {
                    itemId: itemId,
                    quantity: params["quantity_" + index],
                    fulfillmentLocation: params["storeId_" + index],
                    fulfillmentMethod: (((params["itemType_" + index]) === "boss") ? "ShipToStore" : "BOPIS")
                };
                if (mccAtcOverlay.BLINDS_CONFIG_ID != "") {
                    req.configurationId = mccAtcOverlay.BLINDS_CONFIG_ID;
                }
                //When user opt in for HDPP from PIP
                if(warrantyCheckBox.length>0){                	
                	req.warrantyItem = warrantyItem;
                }
                atcRequestList.push(req);
                index++;
            } else {
                atEnd = true;
            }
        }

        
       if(atcRequestList.length>0){
        	//add callbacks to first item only
        atcRequestList[0].onClosed = function() {
                console.debug("ATC BOPIS onClosed()...");
            };
        atcRequestList[0].onComplete = function() {
                console.debug("ATC BOPIS onComplete()...");
            };
       }
     //Analytics - ATC from bss flag
       analytics.bssOverlayFlag = true;
        mccAtcOverlay.showOverlay(atcRequestList);
    }


    // TABLET - PIP - All types
    function _triggerATCOverlayFromTabletPIP(elem) {
        console.debug("_triggerATCOverlayFromTabletPIP() - Tablet PIP - all types");
        //Appliance:
        //  <a  class="dynamic_btn c addToCartTablet" 
        // 		data-prodstatus 
        // 		data-zip 
        // 		data-delvdate 
        // 		data-prodid="202336986" id="tabletATC">
        // 	  Add to Cart
        //	</a>
        //
        //GM:
        //  <a class="dynamic_btn c addToCartTablet" 
        // 		href=".../OrderItemAdd?URL=OrderItemDisplay&amp;prevURL=ProductDisplay&amp;orderId=.&amp;
        // 			errorViewName=ProductDisplayErrorView&amp;
        // 			contractId=2081191&amp;calculationUsageId=-1&amp;catEntryId=100351734&amp;quantity=1" 
        // 		sthaddtocarturl="" 
        // 		bossaddtocart="" 
        // 		bopisaddtocart="&amp;str_nbr=6557" 
        // 		deliveryaddtocarturl="" 
        // 		localstore="6557" 
        // 		id="tabletATC">Add To Cart</a>

        var isAppliance = false;
        if ($(elem).attr("data-prodid")) {
            isAppliance=true;
            _handleApplianceFromPIP(elem);
        } else {
            //All other types
            var itemId = _getParams($(elem).attr("href")).catEntryId;            
            var quantity = $('#buybox_quantity_field').val() || 1;
            var fulfillmentMethod = isAppliance?"DirectDelivery":_getPIPFulfillmentMethod($(elem));
            var valuePricing = _getValuePricing($(elem));

            var fulfillmentLocation = _getPIPFulfillmentLocation(fulfillmentMethod, $(elem));

            var atcRequest = {
                itemId: itemId,
                quantity: quantity,
                fulfillmentLocation: fulfillmentLocation,
                fulfillmentMethod: fulfillmentMethod,
                valuepricing: valuePricing,
                onClosed: function() {
                    console.debug("ATC PIP onClosed()...");
                },
                onComplete: function() {
                    console.debug("ATC PIP onComplete()...");
                }
            };
            //When user opt in for HDPP from PIP 
            var warrantyCheckBox=$("#buyBox-hdpp .checkbox-custom-active");
            if(warrantyCheckBox.length>0){
            	var warrantyItem ={
                		itemId:warrantyCheckBox.data("hdpp-item-id")
                };
                atcRequest.warrantyItem = warrantyItem;
            }
            mccAtcOverlay.showOverlay([atcRequest]);
        }
    }

    /**
     *  Appliance has a different flow...
     */
    function _handleApplianceFromPIP(atcButtonSrc) {
        //Handle as Appliance
        var _this = $(atcButtonSrc);
        var zipCode = _getApplianceZipCode(_this.attr("data-zip"));


        var atcRequest = {
            itemId: _this.attr("data-prodid"),
            quantity: "1",
            fulfillmentMethod: "DirectDelivery",
            fulfillmentLocation: zipCode
        };
        var applConfig = {
            prodStatus: _this.attr("data-prodstatus"),
            delvDate: _this.attr("data-delvdate")
        };

        //launch modal via check avail (even if going to ATC)
        checkAvailability.showOverlay(atcRequest, applConfig);
    }

    function _getApplianceZipCode(configZipCode) {
        //if no config zip, use prefilled
        var zipCode = configZipCode ||
            //$("#zipCodeTxt").val()||
            checkAvailability.zipCodePreFillVal;
        try {
            if (!zipCode) {
                var cookieZip = cookieUtils.readCookie("THD_AOL").split(",")[0];
                //validate store zipcode
                if (cookieZip && (cookieZip.length === 5) && (/^\d{5}$/.test(cookieZip))) {
                    zipCode = cookieZip;
                }
            }

            //in Checkout, cookie is not available. 
            //If still not set, try to get from CheckoutModel
            if (!zipCode &&
                (typeof TABCOM !== "undefined") &&
                (typeof checkoutModel !== "undefined")
            ) {
                zipCode = checkoutModel.getDeliveryZipCode();
            }

        } catch (e) {
            console.error("Error trying to get zipcode for appliance ATC", e);
        }
        mccAtcOverlayAppl.zipCodePreFillVal = zipCode;
        return zipCode;
    }
    /**
     * "ShipToHome"|"BOPIS"|"ShipToStore"|"DeliverFromStore"|"DirectDelivery"
     */
    function _getPIPFulfillmentMethod(button) {

        var fulfillmentMethod =
                //check radio button (may not be present if only one ffm type)
                $('.radio-custom-active').closest('.radio').find('input').data('fulfillment-type') ||
                $('.radio-custom-active').closest('.fulfillment-separator').attr('data-fulfillment-type') ||
                $('.fulfillment-separator').attr('data-fulfillment-type');
        if (!fulfillmentMethod) { //single fulfillment type, no radio
            if (button.attr("deliveryaddtocarturl").indexOf("bodfs") > -1) {
                //deliveryaddtocarturl="&bodfsZipCode="
                fulfillmentMethod = "DeliverFromStore";
            } else if (button.attr("bopisaddtocart")) {
                fulfillmentMethod = "BOPIS";
            } else {
                console.warn("Unable to determine fulfillment method for PIP item.");
                //fall back on Ship to home
                fulfillmentMethod = "ShipToHome";
            }

        }
        

        //map BODFS to correct method name
        if (fulfillmentMethod === "BODFS") {
            fulfillmentMethod = "DeliverFromStore";
        } else if (fulfillmentMethod === "BOSS") {
            fulfillmentMethod = "ShipToStore";
        } else if (fulfillmentMethod === "DirectShip") {
            //this is named incorrectly in PIP
            fulfillmentMethod = "ShipToHome";
        }

        if (!fulfillmentMethod) {
            fulfillmentMethod = "ShipToHome";
            console.warn("Could not determine PIP fulfillmentMethod, defaulting to STH", button);
        }

        return fulfillmentMethod;
    }

    function _getValuePricing(urlData) {
        var isMapValuePricing = "",
            selButtonData = urlData.attr("href");
        if (selButtonData && selButtonData.indexOf('valuepricing') > -1) {
            isMapValuePricing = "true";
        }
        return isMapValuePricing;
    }

    /**
     *  "ShipToHome"       -> "DirectShip"
     *  "BOPIS"		       -> "0121"
     *  "ShipToStore"      -> "0121"
     *  "DeliverFromStore" -> "30286"
     *  "DirectDelivery"   -> "30286"
     */
    function _getPIPFulfillmentLocation(fulfillmentMethod, elem) {
        var fulfillmentLocation;
        if (fulfillmentMethod === "DirectDelivery" || fulfillmentMethod === "DeliverFromStore") {
            fulfillmentLocation = $('#deliveryZipCodeText').text();
        } else if (fulfillmentMethod === "BOPIS" || fulfillmentMethod === "ShipToStore") {
            fulfillmentLocation = $(elem).attr("localstore") || cookieUtils.readCookie("THD-LOC-STORE");
        } else { //STH
            fulfillmentLocation = "DirectShip";
        }

        return fulfillmentLocation;
    }
    /*
     * Trigger ATC from tablet mylist
     */

    function _triggerATCfromTabletMyList(elem) {
        console.debug("Trigger single atc mylist");

        var itemId = $(elem).closest('.tpl-content').find("#quantity").attr("itemid");
        var quantity = $(elem).closest('.tpl-content').find("#quantity").val() || 1;
        var configid = $(elem).closest('.tpl-content').find("#quantity").attr("configid");
        var fulfillmentMethod = $(elem).closest('article').find("input").val();
        var valuePricing = $(elem).closest('.tpl-content').find("h3").val();

        function passATCfromMyList(data) {
            return $.ajax({
                type: "POST",
                data: JSON.stringify(data),
                url: env.url.cart,
                xhrFields: {
                    withCredentials: true
                },
                timeout: 60000,
                headers: {
                    'Accept': "application/json; charset=utf-8",
                    'Content-Type': "application/json"
                }
            }).done(function(resp) {
                if (typeof resp.CartModel.orderId !== "undefined") {
                    $(".addCart_" + itemId).html("view cart");
                    $(".addCart_" + itemId).off('click').on("click", function() {
                        $(location).attr("href", "http://" + nonSecureHostName + MY_LIST.ViewCartUrl);
                    });
                    mccAtcOverlay.updateMiniCart(resp.CartModel.totalItemCount);
                    
                    // Analytics - Single item add from list
                    var addedItem = [analytics.getCartItemModel(resp.CartModel, itemId)];
                    $.event.trigger("ATC_ANALYTICS_EVENT", [addedItem, resp.CartModel]);
                } 
                else if (typeof resp.CartModel.orderId == "undefined") {
                    console.error("Error adding items to cart. Respone:", resp);
                    $(".pod-errors").append("<h3><i class='icon-attention left m-right-xsmall text-primary'></i>Unable to add item " + itemId + ". Please try again later.</h3>");

                }
            });
        };

        var data = {
            "CartRequest": {
                "itemDetails": []
            }
        },        
        request = {
        		"itemId": itemId,
               "quantity": quantity
        };
        
        if(configid != "")	{
        	request.configurationId	=	configid;
        }
        data.CartRequest.itemDetails.push(request);

        return passATCfromMyList(data);
    }



    /*
     *  Add all items to cart
     */
    function _triggerATCaddAllMyList() {
        console.debug("trigger add all to cart");
        function passAllATCfromMyList(data) {
            return $.ajax({
                type: "POST",
                data: JSON.stringify(data),
                url: env.url.cart,
                xhrFields: {
                    withCredentials: true
                },
                timeout: 60000,
                headers: {
                    'Accept': "application/json; charset=utf-8",
                    'Content-Type': "application/json"
                }
            }).done(function(resp) {

                if (typeof resp.CartModel.orderId !== "undefined") {

                    $("#list-action-section").addClass("md-show").css("width", "400");
                    $("#list-action-section h3").html("Add List");
                    $("#list-action-section #list-action-content").html("All items have been added to cart");

                    $("#add-all-items-to-cart-btn").html("view cart");
                    $("#add-all-items-to-cart-btn").on("click", function() {
                        $(location).attr("href", "http://" + nonSecureHostName + MY_LIST.ViewCartUrl);
                    });
                    
                    // Analytics - Multiple item add from list
                    var multipleItemHash = [];
                    $.each(data.CartRequest.itemDetails, function(index, item) {
                    	multipleItemHash.push(analytics.getCartItemModel(resp.CartModel, item.itemId))
                    });
                    $.event.trigger("ATC_ANALYTICS_EVENT", [multipleItemHash, resp.CartModel]);
                } 
                else if (typeof resp.CartModel.orderId == "undefined") {
                    console.error("Error adding items to cart", e);
                    $(".pod-errors").append("<h3><i class='icon-attention left m-right-xsmall text-primary'></i>Unable to add items to cart. Please try again later.</h3>");

                }

            });
        };

        var arry_skus = $("#addableItems").val().substring(1).split(","),
    	data = {
        	"CartRequest": {
        		"itemDetails": []
        	}
    	};
        $.each(arry_skus, function(index, value) {

            var splitSkus	=	value.split("_"),
        	request 	=	{
            	"itemId": splitSkus[0],
            	"quantity": splitSkus[1]
        	};
            // for blinds
            if(splitSkus[2] != "") {
            	request.configurationId=splitSkus[2];
            }
            data.CartRequest.itemDetails.push(request);
        });
        return passAllATCfromMyList(data);
    }
    /**
     * Handle Certona ATC - Tablet (same for fullsite)
     *  /webapp/wcs/stores/servlet/OrderItemAdd?storeId=10051&langId=-1&
     *    catalogId=10053&catEntryId=100530091&quantity=1&URL=OrderItemDisplay&
     *    contractId=2081191&addToCartConfirmation=true"
     */
    function _triggerATCOverlayFromTabletCertona(elem) {
        console.debug("_triggerATCOverlayFromTabletCertona()");

        var fName = $('#fromPage').val();
        if (fName === 'mylistdetails') {
            window.resx.event = "addtocart_opr";
            window.resx.itemid = $(elem.parentNode).children("input#catEntryId").val();
            window.resx.pageid = "";
            window.resx.links = "";
            window.certonaResx.run();
        }

        var url = $(elem).attr('href') + '&addToCartConfirmation=true';
        var params = _getParams(url);

        console.debug("Certona ATC original url:" + url, params);

        var itemId = params.catEntryId;
        var quantity = params.quantity || 1; //should always be 1 from PLP
        var fulfillmentLocation = "DirectShip";
        var fulfillmentMethod = "ShipToHome";

        var atcRequest = {
            itemId: itemId,
            quantity: quantity,
            fulfillmentLocation: fulfillmentLocation,
            fulfillmentMethod: fulfillmentMethod,
            onClosed: function() {
                console.debug("ATC onClosed()...");
            },
            onComplete: function() {
                console.debug("ATC onComplete()...");
            }
        };
        mccAtcOverlay.showOverlay([atcRequest]);
    }




    /**
     * Return map of parameters, or empty object
     */
    function _getParams(url) {
        var paramMap = {};
        url = url || document.location.search; //use provide url, or get from current location
        try {
            if (url.indexOf("?") > -1) {
                var query = url.substr(url.indexOf("?") + 1); //Get query - everything after "?"
                query.split("&").forEach(function(n) {
                    n = n.split("=");
                    paramMap[n[0]] = n[1].trim();
                });
            }
        } catch (e) {
            console.error("Error getting params from URL", e);
        }
        return paramMap;
    }
    

    return {
        triggerATCOverlayFromTabletPLP:     _triggerATCOverlayFromTabletPLP,
        triggerATCOverlayFromSBOTD:         _triggerATCOverlayFromSBOTD,
        triggerATCOverlayFromTabletBOPIS:   _triggerATCOverlayFromTabletBOPIS,
        triggerATCOverlayFromTabletPIP:     _triggerATCOverlayFromTabletPIP,
        triggerATCfromTabletMyList:         _triggerATCfromTabletMyList,
        triggerATCaddAllMyList:             _triggerATCaddAllMyList,
        triggerATCOverlayFromTabletCertona: _triggerATCOverlayFromTabletCertona
    };
});

if(!require.defined('jquery')){
    define('jquery', function() { return jQuery; });
}
if(!require.defined('handlebars')){
    define('handlebars', function() { return Handlebars; });
}
if(typeof window.loadMCCPromise === 'undefined'){
   window.loadMCCPromise = new $.Deferred();
}
requirejs([ 'shared/utils/LoadingCoverUp',
            'shared/atc/thd.mcc.atcOverlayApplianceAvailability',
            'checkout/CheckoutModel',
            'shared/atc/thd.mcc.atcOverlayRouterFullsite',
            'shared/atc/thd.mcc.atcOverlayRouterTablet'],
            window.loadMCCPromise.resolve);
