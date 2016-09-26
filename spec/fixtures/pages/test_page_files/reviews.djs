$BV.Internal.ajaxCallback(function(url,apiConfig){
if(!/(^|\.)(bazaarvoice\.com|homedepot\.com)(:\d+)?$/.test(location.hostname)){
throw "Bazaarvoice: Permission denied";
}
$BV.Internal.configureAppLoader("rr",false,{"cmn/1999/lightbox":"lightbox","cmn/1999m/analyticsInternalHooks":"analyticsHooks","cmn/1999redes/analyticsInternalHooks":"analyticsHooks"});
$BV.analytics = $BV.analytics || {};
$BV.analytics.piiRegion = 'US';
$BV.Internal.require(["rr/injection.rr","requester","feedback","domUtils","contentFocusingSupport","rr/analyticsInternalLegacyHooksRR","browserVersion","mediaGallery","rr/analyticsHooksRR","rr/contentFocusingSupportRR","contentDisplay","jquery.core","dropdown","parseUri","cookies","analyticsVersioning","analyticsHooks","cmn/1999m/analyticsInternalHooks","cmn/1999redes/analyticsInternalHooks","magpie","magpieTracking","analyticsAutoTagHooks","animationOptions","socialConnect","facebookConnect","facebookOpenGraph","jquery.effects.core","positioners","contentDispatcher","wrapperDivs"],function(Injection){
var materials={"BVRRRatingSummarySourceID":" <div class=\"BVRRRootElement\">\n<div class=\"BVRRRatingSummary BVRRPrimarySummary BVRRPrimaryRatingSummary\"><div class=\"BVRRRatingSummaryStyle2\"><div class=\"BVRRRatingSummaryNoReviews\"> <div id=\"BVRRRatingSummaryNoReviewsWriteImageLinkID\" class=\"BVRRRatingSummaryLink BVRRRatingSummaryNoReviewsWriteImageLink\">\n<a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_RATING_SUMMARY_ZERO_REVIEWS&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContent('PRR','1999aa','204766736','BVRRWidgetID');bvShowContentOnReturnPRR('1999aa', '204766736', 'BVRRWidgetID');\" name=\"BV_TrackingTag_Rating_Summary_1_WriteReview_204766736\" href=\"javascript://\" title=\"Write the first Review\"> <img src=\"http://homedepot.ugc.bazaarvoice.com/static/1999aa/translucent.gif\" alt=\"Write a review\" />\n<\/a> <\/div>\n <div id=\"BVRRRatingSummaryLinkWriteFirstID\" class=\"BVRRRatingSummaryLink BVRRRatingSummaryLinkWriteFirst\">\n <span class=\"BVRRRatingSummaryLinkWriteFirstPrefix\"><\/span>\n<a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_RATING_SUMMARY_ZERO_REVIEWS&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContent('PRR','1999aa','204766736','BVRRWidgetID');bvShowContentOnReturnPRR('1999aa', '204766736', 'BVRRWidgetID');\" name=\"BV_TrackingTag_Rating_Summary_1_WriteReview_204766736\" href=\"javascript://\">Write the first Review<\/a><span class=\"BVRRRatingSummaryLinkWriteFirstSuffix\"><\/span> <\/div>\n<\/div><\/div> <\/div>\n<a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_SUBMISSIONLINK&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContent('PRR','1999aa','204766736','');bvShowContentOnReturnPRR('1999aa', '204766736', '');\" style=\"display: none;\" href=\"javascript://\" id=\"BVSubmissionLink\"><\/a>\n <\/div>\n","BVRRSecondaryRatingSummarySourceID":" <div class=\"BVRRRootElement\">\n <div class=\"BVRRRatingSummary BVRRSecondaryRatingSummary\">\n\n\n<div class=\"BVRRRatingSummary BVRRPrimaryRatingSummary\"><div class=\"BVRRRatingSummaryStyle2\"><div class=\"BVRRRatingSummaryNoReviews\"> <div id=\"BVRRRatingSummaryNoReviewsWriteImageLinkID\" class=\"BVRRRatingSummaryLink BVRRRatingSummaryNoReviewsWriteImageLink\">\n<a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_RATING_SUMMARY_ZERO_REVIEWS&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContent('PRR','1999aa','204766736','BVRRWidgetID');bvShowContentOnReturnPRR('1999aa', '204766736', 'BVRRWidgetID');\" name=\"BV_TrackingTag_Rating_Summary_2_WriteReview_204766736\" href=\"javascript://\" title=\"Write the first Review\"> <img src=\"http://homedepot.ugc.bazaarvoice.com/static/1999aa/translucent.gif\" alt=\"Write a review\" />\n<\/a> <\/div>\n <div id=\"BVRRRatingSummaryLinkWriteFirstID\" class=\"BVRRRatingSummaryLink BVRRRatingSummaryLinkWriteFirst\">\n <span class=\"BVRRRatingSummaryLinkWriteFirstPrefix\"><\/span>\n<a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_RATING_SUMMARY_ZERO_REVIEWS&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContent('PRR','1999aa','204766736','BVRRWidgetID');bvShowContentOnReturnPRR('1999aa', '204766736', 'BVRRWidgetID');\" name=\"BV_TrackingTag_Rating_Summary_2_WriteReview_204766736\" href=\"javascript://\">Write the first Review<\/a><span class=\"BVRRRatingSummaryLinkWriteFirstSuffix\"><\/span> <\/div>\n<\/div><\/div> <\/div>\n <\/div>\n <\/div>\n","BVRRSourceID":" <div id=\"BVRRWidgetID\" class=\"BVRRRootElement BVRRWidget\">\n <div id=\"BVRRContentContainerID\" class=\"BVRRContainer\">\n\n\n\n\n\n\n<div id=\"BVRRDisplayContentID\" class=\"BVRRDisplayContent BVRRNoContent\">Do you own this product? Be the first to rate it. Your feedback will help users like you to make informed decisions and will help us to improve our product offerings! <div id=\"BVRRDisplayContentNoReviewsImageID\" class=\"BVRRDisplayContentNoReviewsImage\"><a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_REVIEW_DISPLAY_ZERO_REVIEWS&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContentOnReturnPRR('1999aa', '204766736', '');\" name=\"BV_TrackingTag_Review_Display_WriteReview\" href=\"javascript://\" title=\"Write a Review\"><img src=\"http://homedepot.ugc.bazaarvoice.com/static/1999aa/translucent.gif\" alt=\"Write a Review\" /><\/a><\/div>\n<div id=\"BVRRDisplayContentNoReviewsID\" class=\"BVRRDisplayContentNoReviews\"><a data-bvjsref=\"http://homedepot.ugc.bazaarvoice.com/submit/1999aa/204766736/writereview.djs?authsourcetype=__AUTHTYPE__&amp;campaignid=BV_REVIEW_DISPLAY_ZERO_REVIEWS&amp;format=embeddedhtml&amp;innerreturn=http%3A%2F%2Fhomedepot.ugc.bazaarvoice.com%2F1999aa%2F204766736%2Freviews.djs%3Fformat%3Dembeddedhtml&amp;return=__RETURN__&amp;sessionparams=__BVSESSIONPARAMS__&amp;submissionparams=__BVSUBMISSIONPARAMETERS__&amp;submissionurl=__BVSUBMISSIONURL__&amp;user=__USERID__\" data-bvcfg=\"__CONFIGKEY__\" onclick=\"bvShowContentOnReturnPRR('1999aa', '204766736', '');\" name=\"BV_TrackingTag_Review_Display_WriteReview\" href=\"javascript://\" title=\"Write a Review\"><span class=\"arrow\">Write a Review<\/span><\/a> <ul id=\"BVSEO_meta\" style=\"display:none!important\">\n <li data-bvseo=\"bvDateModified\">2016-09-25 T12:15:32.610-05:00<\/li>\n <li data-bvseo=\"ps\">bvseo_pps, prod_bvrr, vn_prr_5.6<\/li>\n <li data-bvseo=\"cp\">cp-1, bvpage1<\/li>\n <li data-bvseo=\"co\">co_noreviews, tv_0, tr_0<\/li>\n <li data-bvseo=\"cf\">loc_en_US, sid_204766736, prod, sort_default<\/li>\n <\/ul>\n<\/div>If you have questions or comments regarding the customer service you received please <a href=\"http://www.homedepot.com/webapp/catalog/servlet/ContentView?pn=Contact_Us&langId=-1&storeId=10051&catalogId=10053\" class=\"BVRRLinkToContactUs\">contact us.<\/a> <\/div>\n<div id=\"BVRRFilteringBusyOverlayHighlightID\" class=\"BVDI_FBOverlayHighlight BVDIOverlay BVDIHidden\"><div class=\"BVDI_FBImage\"><img src=\"http://homedepot.ugc.bazaarvoice.com/static/1999aa/filteringBusy.gif\" alt=\"Filtering is in progress. Please wait until it completes.\" title=\"Filtering is in progress. Please wait until it completes.\"/><\/div><\/div> <\/div>\n\n <\/div>\n"},
initializers={"BVRRRatingSummarySourceID":[{"init":"bindJsLinks","data":{},"module":"requester"}],"BVRRSecondaryRatingSummarySourceID":[{"init":"bindJsLinks","data":{},"module":"requester"}],"BVRRSourceID":[{"init":"bindJsLinks","data":{},"module":"requester"}]},
widgets={};
widgets["content"]={"sourceId":"BVRRSourceID","handledContentTypes":["Review","Comment"],"containerId":"BVRRContainer"};
if((typeof(window['BVRR_204766736_MediaGalleryObject']) != 'object') || !window['BVRR_204766736_MediaGalleryObject'].isRendered()){
widgets["mediaGallery"]={"sourceId":"BVRRMediaGallerySourceID","containerId":"BVRRMediaGalleryContainer"};
}
widgets["secondarySummary"]={"sourceId":"BVRRSecondaryRatingSummarySourceID","containerId":"BVRRSecondarySummaryContainer"};
widgets["summary"]={"sourceId":"BVRRRatingSummarySourceID","containerId":"BVRRSummaryContainer"};
var injectionData={
apiConfig:apiConfig,
bvstateInfo:"p/204766736",
canonicalTags:false,
containerInitializer:false,
cookiePath:"/",
crossDomainUrl:"http://homedepot.ugc.bazaarvoice.com/1999aa/crossdomain.htm?format=embedded",
embeddedUrl:url,
globalInitializers:[{"module":"browserVersion","init":"initialize","data":{"useBodyTag":false,"containerId":"BVRRSummaryContainer"}},{"module":"browserVersion","init":"initialize","data":{"useBodyTag":false,"containerId":"BVRRSecondarySummaryContainer"}},{"module":"browserVersion","init":"initialize","data":{"useBodyTag":false,"containerId":"BVRRContainer"}},{"module":"dropdown","init":"addSelectHandlers","data":{"dropdownsName":"BV_TrackingTag_Review_Display_Sort"}},{"module":"feedback","init":"onInjection","data":{"options":{"cookiePrefixes":{"Voting":"pfv"},"contentFocusing":{"args":["1999aa","204766736"],"fn":"bvShowContentOnReturnPRR"},"cookiePath":"/"},"id":"Product_m235w4kp5m8p00md6vhbnzw78"}},{"module":"feedback","init":"onInjection","data":{"options":{"cookiePrefixes":{"Voting":"rfv","Inappropriate":"rif"},"contentFocusing":{"args":["1999aa","204766736"],"fn":"bvShowContentOnReturnPRR"},"cookiePath":"/"},"id":"Review_m235w4kp5m8p00md6vhbnzw78"}},{"module":"feedback","init":"onInjection","data":{"options":{"cookiePrefixes":{"Voting":"cfv","Inappropriate":"cif"},"contentFocusing":{"args":["1999aa","204766736"],"fn":"bvShowContentOnReturnPRR"},"cookiePath":"/"},"id":"ReviewComment_m235w4kp5m8p00md6vhbnzw78"}},{"module":"rr/contentFocusingSupportRR","init":"postInjection","data":{"application":"PRR","defaultContentContainerId":"BVRRContainer","displayCode":"1999aa","tabSwitcher":"bvShowTab","source":"readLink"}}],
gotoCookieRegexp:/^https?:\/\/[^/?#]+(\/[^?#]*)\//,
inFrameSubmissionEnabled:true,
pageIdPrefix:"BVRR",
pageTrackers:["http://homedepot.ugc.bazaarvoice.com/static/1999aa/r_0_ispacer.gif"],
postInjectionFunction:function(Inject){
window.bvScrollToElement();
(function() {
if (typeof(window['BVRR_204766736_MediaGalleryObject']) == 'object') {
window['BVRR_204766736_MediaGalleryObject'].sync();
} else {
window['BVRR_204766736_MediaGalleryObject'] = window.newBVMediaGallery('BVRR_204766736_MediaGallery', 0,
0, true, 'http://homedepot.ugc.bazaarvoice.com/1999aa/204766736/mediagallery.djs?format=embeddedhtml',
true, { name : 'centerWithinAnchor', args : ['<POPIN_ID>', 'BVRRWidgetID', 10] }
,
[]);
}
})();
var envName = 'prod';
var clientName = 'homedepot';
var productId = '204766736';
if (window.document.getElementById('BVCurationsEnabled')) {
curationsEnabled = 1;
}
else
{
curationsEnabled = 0;
}
if (envName && clientName && productId && curationsEnabled) {
var curationsLoaderURL = "//curations-static.feedmagnet.com/gallery/" + clientName + "/" + envName + "/loader.js";
// Load the javascript and call the display method
if (curationsLoaderURL) {
var carouselConfig = {
client: clientName,
productId: productId,
environment: envName
};
window.$bv.ajax({
url: curationsLoaderURL,
success: function() { BVWidgets.display(carouselConfig); },
type: "GET",
dataType: "script",
cache: true
});
}
window.$bv('.BVRRQuickTakeSummary .BVRRSummarySecondaryContentWrapper').css('padding-top', '125px');
window.$bv('.BVRRContainer .BVDI_QT .BVDI_MW').css('display', 'none');
}
},
productId:"204766736",
replaceDisplayTokens:true,
replacementsPrefix:"BVRR",
replaceSessionParameters:false,
returnURLFixedValue:"",
returnURLForceRelativeToRoot:true,
setWindowTitle:false,
soiContainerID:"BVRRContentValidationID_204766736",
soiContentIDs:[],
sviParameterName:"bvrrp",
sviRedirectBaseUrl:"http://homedepot.ugc.bazaarvoice.com/1999aa/",
webAnalyticsConfig:{"customTrackedObjectsSelector":"","jsonData":{"bvDisplayCode":"1999aa","autoTagAnalyticsConfiguration":{"trackSubmissionPageLoads":true,"trackFormActions":false,"autoTagAnalyticsVersion":"4.8","vendors":[{"vendorName":"magpie","anonymous":false,"brandDomain":"false","defaultClassesOnly":false},{"vendorName":"omniture","eventNum":11,"eVarNum":54,"trackerReference":"s","brandVoiceTrackingType":null,"brandVoiceTrackingEVarNum":0}],"productTracking":{"tracking":true,"initialProductDisplay":false}},"productId":"204766736","eType":"Read","subjectType":"Product","bvAnalyticsVersion":"5.0","rootCategoryId":"8424077c-aaaf-42b7-9fd5-6cb789847448","analyticsWhitespaceTrackingEnabled":true,"bvProduct":"RatingsAndReviews","attributes":{"numReviews":0,"avgRating":0E-12,"numRatingsOnlyReviews":0,"percentRecommend":0},"ciTrackingEnabled":false,"bvClientName":"HomeDepot","brand":"Universal Tubs","leafCategoryId":"88708aee-eee0-4b50-8e21-370dc6db9a78","bvExtension":{}},"customizersName":"BVRRAnalyticsCustomizers","SIWZeroDeployEnabled":false,"conversionTracking":{"conversionTrackingElementSelector":null,"conversionTrackingMetadataSelector":null,"conversionTrackingParseRegexp":null,"conversionTrackingName":"AddToCart"},"maxTrackingTagTraversalDepth":3,"customContainersFnName":"BVRRAnalyticsCustomContainers","customTrackedObjects":[{"selector":"#productTabsMenu a.b[href='#customer_reviews']"}]},
widgetInitializers:initializers,
widgetLimit:-1,
widgetMaterials:materials,
widgetMetadata:widgets,
windowTitle:null};
Injection.newInstance().apiInjection(injectionData);
});
});