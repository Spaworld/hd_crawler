var btt_NA = navigator.userAgent;var btt_NP = navigator.platform; var btt_NV = navigator.vendor;   var bdkt={init: function(){this.browser=this.sstg(this.DBR)||"";this.version=this.VR(navigator.userAgent)||this.VR(navigator.appVersion)||"";this.OS=this.sstg(this.dataOS)||"";this.OSVersion=this.sstg(this.dataOSVersion)||"";},sstg: function(data){for(var i=0;i<data.length;i++){var dataString=data[i].T;var dataProp=data[i].prop;this.vstn=data[i].V||data[i].I;if(dataString){if(dataString.indexOf(data[i].S) != -1){return data[i].I;}}else if(dataProp){return data[i].I;}}},VR: function(dataString){var index=dataString.indexOf(this.vstn);if(index== -1)return;return parseFloat(dataString.substring(index+this.vstn.length+1));},DBR:[{T:btt_NA,S:"OmniWeb",V:"OmniWeb/",I:"OmniWeb"},{T:btt_NV,S:"Apple",I:"Safari",V:"Version"},{T:btt_NA,S:"Edge",I:"Edge"},{T:btt_NA,S:"Chrome",I:"Chrome"},{prop:window.opera,I:"Opera",V:"Version"},{T:btt_NV,S:"iCab",I:"iCab"},{T:btt_NV,S:"KDE",I:"Konqueror"},{T:btt_NA,S:"Firefox",I:"Firefox"},{T:btt_NV,S:"Camino",I:"Camino"},{T:btt_NA,S:"Netscape",I:"Netscape"},{T:btt_NA,S:"MSIE",I:"Explorer",V:"MSIE"},{T:btt_NA,S:"Trident",I:"MSIE",V:"rv"},{T:btt_NA,S:"Android",I:"Android",V:"SCH-"},{T:btt_NA,S:"Gecko",I:"Mozilla",V:"rv"},{T:btt_NA,S:"Mozilla",I:"Bot",V:"Mozilla"}],dataOS:[{T:btt_NP,S:"Win",I:"Windows"},{T:btt_NP,S:"Mac",I:"Mac"},{T: btt_NA,S: "CrOS",I: "Chrome OS"},{T: btt_NA,S: "Windows Phone",I: "Windows Phone"},{T:btt_NA,S:"iPhone",I:"iPhone"},{T:btt_NA,S:"iPad",I:"iPad"},{T:btt_NA,S:"Android",I:"Android"},{T:btt_NP,S:"Linux",I:"Linux"}],dataOSVersion: [{T: btt_NA,S: "Windows NT 10",I: "10"}, {T: btt_NA,S: "Windows NT 6.4",I: "10"}, {T: btt_NA,S: "Windows NT 6.3",I: "8.1"}, {T: btt_NA,S: "Windows NT 6.2",I: "8"}, {T: btt_NA,S: "Windows NT 6.1",I: "7"}, {T: btt_NA,S: "Windows NT 5.2",I: "XP x64"}, {T: btt_NA,S: "Windows NT 5.1",I: "XP"}, {T: btt_NA,S: "Windows NT 5.01",I: "2000 SP1"}, {T: btt_NA,S: "Windows NT 5.0",I: "2000"}, {T: btt_NA,S: "Windows NT 4.0",I: "NT 4.0"}, {T: btt_NA,S: "Windows 98",I: "98"}, {T: btt_NA,S: "Windows 95",I: "95"}, {T: btt_NA,S: "Windows CE",I: "CE"}, {T: btt_NA,S: "OS X 10_10",I: "OS X 10.10"}, {T: btt_NA,S: "OS X 10_9",I: "OS X 10.9"}, {T: btt_NA,S: "OS X 10_8",I: "OS X 10.8"}, {T: btt_NA,S: "OS X 10_7",I: "OS X 10.7"}, {T: btt_NA,S: "OS X 10_6",I: "OS X 10.6"}, {T: btt_NA,S: "OS X 10_5",I: "OS X 10.5"}, {T: btt_NA,S: "OS X 10_4",I: "OS X 10.4"}, {T: btt_NA,S: "OS X 10_3",I: "OS X 10.3"}, {T: btt_NA,S: "OS X 10_2",I: "OS X 10.2"}, {T: btt_NA,S: "OS X 10_1",I: "OS X 10.1"}, {T: btt_NA,S: "iPhone OS 9",I: "OS 9"}, {T: btt_NA,S: "iPhone OS 8",I: "OS 8"}, {T: btt_NA,S: "iPhone OS 7",I: "OS 7"}, {T: btt_NA,S: "iPhone OS 6",I: "OS 6"}, {T: btt_NA,S: "iPhone OS 5",I: "OS 5"}, {T: btt_NA,S: "CPU OS 9",I: "OS 9"}, {T: btt_NA,S: "CPU OS 8",I: "OS 8"}, {T: btt_NA,S: "CPU OS 7",I: "OS 7"}, {T: btt_NA,S: "CPU OS 6",I: "OS 6"}, {T: btt_NA,S: "CPU OS 5",I: "OS 5"}, {T: btt_NA,S: "Android 2.0",I: "2.0"}, {T: btt_NA,S: "Android 2.1",I: "2.1"},{T: btt_NA,S: "Android 2.3",I: "2.3"},{T: btt_NA,S: "Android 3.0",I: "3.0"},{T: btt_NA,S: "Android 3.1",I: "3.1"},{T: btt_NA,S: "Android 3.2",I: "3.2"},{T: btt_NA,S: "Android 4.0",I: "4.0"},{T: btt_NA,S: "Android 4.1",I: "4.1"},{T: btt_NA,S: "Android 4.2",I: "4.2"},{T: btt_NA,S: "Android 4.3",I: "4.3"},{T: btt_NA,S: "Android 4.4",I: "4.4"},{T: btt_NA,S: "Android 5.0",I: "5.0"},{T: btt_NA,S: "Android 5.1",I: "5.1"},{T: btt_NA,S: "Android 6.0",I: "6.0"}]};(function(){(function(){var TO=new Date(),LTM=TO.getTime(),HOD=TO.getHours(),TY=TO.getFullYear(),yyyydoy=TY+'',TULC='BTT_ULTM',SIDC="BTT_X0siD",tver="eRev4.0.1",t_ul=LTM,t_ul=0,bd=document.getElementsByTagName('BODY')[0],TxN="Unnamed_Pages",CVL='0',CSID='0',WCDp=0.05,WCDpt=10.00,WCDtas='on',WCDctt='Onload',WCDctv=0,WCDc='BTT_WCD_Collect',WCDs='off',wcd=0,WCDtt='c',cnm="BTT_Collect",BTT_CL='on',ECL=0,TYP="",PTDB="",PNM="Unnamed_Page",BVL=0,PGV=0,CV1='0',CV2='0',CV3='0',CV4='0',CV5='0',RTM=0,NTS=1,URL=window.location.href,URLq=GUtQ(URL),DM=GD(window.location.href);var ruleNo = 0;function RDM(){return Math.random()*100;}if(cku(TULC)!=0){t_ul=cku(TULC);}function RND(v){return Math.round(v);}var BTT_Perf=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};try{var PT=performance.timing||{},WP=window.performance||{};}catch(e){var PT={},WP={};}if ((PT)&&(PT.navigationStart)){var RCd='unset';try{RL=WP.getEntriesByType("resource");if((RL.length)>0){RTM=1;WP.setResourceTimingBufferSize(350);}}catch(err){}}else{NTS=0;var SIH=window.setInterval(function(){CKI(TULC)},2000);}function GD(s){var domain;if(s.match(/\:\/\//g) === null){d = "NoDomain";}else{if (s.indexOf("//") > -1){d = s.split('/')[2];}else{d = s.split('/')[0];}var nd = d;try{nd = nd.replace(/\./g,'');nd = nd.replace(/\:/g,'');if(isNaN(nd)){if((d.match(/\./g).length > 1 )){d = d.substring(d.indexOf(".") + 1);}else if((d.match(/\./g).length== 0)){d = "NoDomain";}}}catch(e){d = s.split('://')[0];}}return d;}function GUtQ(s){try{var u=s.split('?')[0];}catch(err){return "NoURLtoQMark";}return u;}PT.legacyNavigationStart=new Date().getTime();var TM=TO.getTime();var TMs=TM+''+Math.floor((Math.random()*99999999999)+10000000000);var BTT_X0siD=TMs.substring(1,20)+'';if(cku(SIDC)!=0){BTT_X0siD=cku(SIDC);}var EXP=TM + 1800000;TO.setTime(EXP);document.cookie=SIDC+"="+BTT_X0siD+";expires="+TO.toGMTString()+";path=/";window.BTTtag_ssI=BTT_X0siD;if(cku(cnm)!=0){BTT_CL=cku(cnm);}else{if((RDM())>100){BTT_CL='off';}document.cookie=cnm+"="+BTT_CL+";expires="+TO.toGMTString()+";path=/";}if(BTT_CL=='off'){return;}function NA(){return navigator.userAgent;}function NP(){return navigator.platform;}function NV(){return navigator.vendor;}if(window.bttTag_Running == undefined){window.bttTag_Running = 'Running';if(document.readyState==="complete"){BTTGetTMGS();}else{if (window.addEventListener){window.addEventListener('load',BTTGetTMGS,false);}else if(window.attachEvent){window.attachEvent('onload',BTTGetTMGS);}}}function EUCi(s){return encodeURIComponent(s);}function CKI(c_nm){var TO=new Date();var TM=TO.getTime();document.cookie=c_nm+"="+TM+";expires=0;path=/";}function cku(c_name){var i,x,y,ARRc=document.cookie.split(";");for(i=0;i< ARRc.length;i++){x=ARRc[i].substr(0,ARRc[i].indexOf("="));y=ARRc[i].substr(ARRc[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){return unescape(y);}}return 0;}function BTTGetTMGS(){setTimeout(function(){var PMs=BG(1);if(PMs[0]!='none'){var SPTGR=[10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000];if(RTM==1){if(cku(WCDc)!=0){WCDs=cku(WCDc);}else{if((RDM())<=WCDp){WCDs='on';wcd=1;}else{WCDs='off';wcd=0;}}if(WCDs=='off'){WCDctv=PMs[4];if((SPTGR[HOD]>WCDctv)&&((RDM())<WCDpt)){WCDs='on';wcd=1;}}else{wcd=1;}document.cookie=WCDc+"="+WCDs+";expires="+TO.toGMTString()+";path=/";}var tU="//d.btttag.com/btt.gif",BV=NA();pNM=PMs[2];tU+='?'+PMs[0]+"&sessionID="+BTT_X0siD+"&CSID="+CSID+"&CV1="+CV1+"&CV2="+CV2+"&CV3="+CV3+"&CV4="+CV4+"&CV5="+CV5+"&wcd="+wcd+"&LTM="+LTM+"&WCDtt="+WCDtt+"&collectAt="+100;(function(pname){var i=document.createElement('iframe');i.style.display='none';i.height="0";i.width="0";i.style.visibility="hidden";i.src=tU;document.body.appendChild(i);var INCLU="y";var Sstr="";if(((WCDs=='on')||(WCDtt=='s')) &&(INCLU=="y")){var CtR = 0;var iVL = setInterval(function(){ECL=bcrs(ECL);CtR++;if(CtR === 10) {clearInterval(iVL);}}, 1500);}function bttcors(method, url){var bx = new XMLHttpRequest();if (bx!= null){bx.open(method, url, true);bx.withCredentials=true;bx.setRequestHeader("Content-Type", "application/json;charset=UTF-8");}else if (typeof XDomainRequest != "undefined"){bx = new XDomainRequest();bx.open(method, url);}else{bx = null;}return bx;}function bcrs(ECL){var url = '//d.btttag.com/wcdv02.rcv?siteID=homedepot&nStart='+PMs[1]+'&pageName='+PMs[2]+'&txnName='+PMs[3]+"&trig="+PMs[4]+"&sessionID="+BTT_X0siD;try{var RL=WP.getEntriesByType("resource");if((ECL+3)>=(RL.length)){return ECL;}var RSi=[],c1=0;var bx=bttcors('POST', url);if(ECL==0){var dm=GD(URL),b=GUtQ(URL),b_a=(b.indexOf('://')+3),b_b=b.indexOf('.',b_a),bLen = b.split('/').length,f=b.split('/')[bLen-1];c1++;RSi[0]={dmn:dm,f:EUCi(f),URL:EUCi(b),rdS:PMs[5],rdE:PMs[6],fS:PMs[7],dLS:PMs[8],dLE:PMs[9],cS:PMs[10],sCS:PMs[11],cE:PMs[12],rqS:PMs[13],rS:PMs[14],rE:PMs[15],d:PMs[16],sT:0,e:"document",i:"html",h:b.substring(b_a,b_b),dz:0,ez:0,xz:0};}for (i=ECL;i<RL.length-1;i++){ECL++;var b=GUtQ(RL[i].name);var b_a=(b.indexOf('://')+3),b_b=b.indexOf('.',b_a),z=GD(b),bLen = b.split('/').length,f=b.split('/')[bLen-1],jStr='',dsz=0,esz=0,xsz=0;if(f.length<1){f='...'+b.substring((b.length-125),b.length);}if(RL[i].decodedBodySize){dsz=RL[i].decodedBodySize;}if(RL[i].encodedBodySize){esz=RL[i].encodedBodySize;}if(RL[i].transferSize){xsz=RL[i].transferSize;}RSi[c1]={dmn:EUCi(z),f:EUCi(f),URL:EUCi(b),cE:RND(RL[i].connectEnd),cS:RND(RL[i].connectStart),dLE:RND(RL[i].domainLookupEnd),dLS:RND(RL[i].domainLookupStart),d:RND(RL[i].duration),fS:RND(RL[i].fetchStart),rdE:RND(RL[i].redirectEnd),rdS:RND(RL[i].redirectStart),rqS:RND(RL[i].requestStart),rE:RND(RL[i].responseEnd),rS:RND(RL[i].responseStart),sCS:RND(RL[i].secureConnectionStart),sT:RND(RL[i].startTime),e:RL[i].entryType,i:RL[i].initiatorType,h:b.substring(b_a,b_b),dz:dsz,ez:esz,xz:xsz};c1++;}jStr=JSON.stringify(RSi);var j=JSON.parse(jStr);var SnDStr='';if(Array.isArray(j)){SnDStr=jStr;}else{SnDStr=j;}var SnDENC=window.btoa(SnDStr);bx.send(SnDENC);}catch(err){}return ECL;}})(pNM);}},900);}function LIM(t){var l=120000;if(t<0){return 0;}if(t>l){return l;}else{return t;}}function BG(eT){var p11=undefined,p8=undefined,p16=undefined,p15=undefined,p17=undefined,p18=undefined,p19=undefined,p21=undefined,p14=undefined,p12=undefined,p20=undefined,p22=undefined,p23=undefined,p24=undefined,p25=undefined,p26=undefined,p27=undefined,p28=undefined;try{if((typeof (function(){return THD.Analytics._DDO.page.pageInfo.pageName=='checkout>purchase confirmation'?THD.Analytics._DDO.page.pageInfo.pageName.replace('>','_'):void 0})() != 'undefined')&&((function(){return THD.Analytics._DDO.page.pageInfo.pageName=='checkout>purchase confirmation'?THD.Analytics._DDO.page.pageInfo.pageName.replace('>','_'):void 0})() != null)){p11=(function(){return THD.Analytics._DDO.page.pageInfo.pageName=='checkout>purchase confirmation'?THD.Analytics._DDO.page.pageInfo.pageName.replace('>','_'):void 0})();}}catch(err){}try{if((typeof _hddata != 'undefined')&&(_hddata != null)){if((typeof _hddata.categoryName != 'undefined')&&(_hddata.categoryName != null)){p8=_hddata.categoryName;}}}catch(err){}try{if((typeof _hddata != 'undefined')&&(_hddata != null)){if((typeof _hddata.productView != 'undefined')&&(_hddata.productView != null)){p16=_hddata.productView;}}}catch(err){}try{if((typeof _hddata != 'undefined')&&(_hddata != null)){if((typeof _hddata.pageName != 'undefined')&&(_hddata.pageName != null)){p17=_hddata.pageName;}}}catch(err){}try{if((typeof THD != 'undefined')&&(THD != null)){if((typeof THD.Analytics != 'undefined')&&(THD.Analytics != null)){if((typeof THD.Analytics._DDO != 'undefined')&&(THD.Analytics._DDO != null)){if((typeof THD.Analytics._DDO.page != 'undefined')&&(THD.Analytics._DDO.page != null)){if((typeof THD.Analytics._DDO.page.pageInfo != 'undefined')&&(THD.Analytics._DDO.page.pageInfo != null)){if((typeof THD.Analytics._DDO.page.pageInfo.pageName != 'undefined')&&(THD.Analytics._DDO.page.pageInfo.pageName != null)){p20=THD.Analytics._DDO.page.pageInfo.pageName;}}}}}}}catch(err){}var PSA={"p11":{pS:"",PNM:"JSCode",txn:"eCommerce",pN:"auto",pT: p11,bV:"0"},"p8":{pS:"",PNM:"JSVariable",txn:"eCommerce",pN:"auto",pT: p8,bV:"0"},"p16":{pS:"",PNM:"JSVariable",txn:"eCommerce",pN:"auto",pT: p16,bV:"0"},"p15":{pS:"/StoreFinder",PNM:"url_search",txn:"eCommerce",pN:"StoreFinder",pT: p15,bV:"0"},"p17":{pS:"",PNM:"JSVariable",txn:"eCommerce",pN:"auto",pT: p17,bV:"0"},"p18":{pS:"blog.homedepot.com",PNM:"url_search",txn:"eCommerce",pN:"Blog",pT: p18,bV:"0"},"p19":{pS:"/search/",PNM:"url_search",txn:"eCommerce",pN:"search",pT: p19,bV:"0"},"p21":{pS:"pages.homedepot.com/HDOptdown",PNM:"url_search",txn:"eCommerce",pN:"HDOptdown",pT: p21,bV:"0"},"p14":{pS:"MCCCheckout/Cart",PNM:"url_search",txn:"eCommerce",pN:"MCCCheckout Cart",pT: p14,bV:"0"},"p12":{pS:"MCCCheckout",PNM:"url_search",txn:"eCommerce",pN:"MCCCheckout",pT: p12,bV:"0"},"p20":{pS:"",PNM:"JSVariable",txn:"eCommerce",pN:"auto",pT: p20,bV:"0"},"p22":{pS:"webapps.homedepot.com/CustRecogPortal/",PNM:"url_search",txn:"eCommerce",pN:"CustRecogPortal",pT: p22,bV:"0"},"p23":{pS:"secure2.homedepot.com/webapp/wcs",PNM:"url_search",txn:"eCommerce",pN:"webapp-wcs",pT: p23,bV:"0"},"p24":{pS:"www6.homedepot.com/used-tools",PNM:"url_search",txn:"eCommerce",pN:"used-tools",pT: p24,bV:"0"},"p25":{pS:"vanityselections.homedepot.com/",PNM:"url_search",txn:"eCommerce",pN:"vanityselections",pT: p25,bV:"0"},"p26":{pS:"homedepot.colorsmartbybehr.com/",PNM:"url_search",txn:"eCommerce",pN:"colorsmartbybehr",pT: p26,bV:"0"},"p27":{pS:"homedecoratorscabinetry",PNM:"url_search",txn:"eCommerce",pN:"homedecoratorscabinetry",pT: p27,bV:"0"},"p28":{pS:"/localad.homedepot.com/",PNM:"url_search",txn:"eCommerce",pN:"localad",pT: p28,bV:"0"}};var URL=window.location.href;for(aid in PSA){var pS=PSA[aid]["pS"];PTDB=PSA[aid]["pT"];if((PTDB != undefined)&&(PTDB.length>0)){var PNDB=PTDB;var TN=PSA[aid]["txn"];BVL=PSA[aid]["bV"];break;}if((pS.length>0)&&(URL.indexOf(pS)!= -1)){var PNDB=PSA[aid]["pN"];var TN=PSA[aid]["txn"];BVL=PSA[aid]["bV"];break;}}if(PNDB!=undefined){PNM=PNDB;}if (window.btttag_TxN==undefined){if(TN==undefined){}else{TxN=TN;}}else{TxN=window.btttag_TxN;}try{if ((function(){var btthstArr=location.hostname.split('.'),bttEnv=(btthstArr[0]!='www'||btthstArr[0]!='m')&&btthstArr[1]!='homedepot'?'NonProd':void 0,bttDvc=typeof _hddata!='undefined'?_hddata.experienceType!='consumer'?_hddata.experienceType:'desktop':void 0;return bttEnv&&bttDvc?bttEnv.concat('-',bttDvc):bttEnv?bttEnv:bttDvc?bttDvc:void 0})()!=undefined){TxN=TxN+'-'+(function(){var btthstArr=location.hostname.split('.'),bttEnv=(btthstArr[0]!='www'||btthstArr[0]!='m')&&btthstArr[1]!='homedepot'?'NonProd':void 0,bttDvc=typeof _hddata!='undefined'?_hddata.experienceType!='consumer'?_hddata.experienceType:'desktop':void 0;return bttEnv&&bttDvc?bttEnv.concat('-',bttDvc):bttEnv?bttEnv:bttDvc?bttDvc:void 0})();}}catch(err){}try{if ((function(){try{PTDB = THD.Analytics._DDO.page.category.primaryCategory;}catch(e){} return THD.Analytics._DDO.transaction.price.basePrice})() != undefined){CVL=(function(){try{PTDB = THD.Analytics._DDO.page.category.primaryCategory;}catch(e){} return THD.Analytics._DDO.transaction.price.basePrice})();}    }catch(err){}PNM=encodeURI(PNM);PTDB=encodeURI(PTDB);PNDB=encodeURI(PNDB);bdkt.init();var bvzn=bdkt.browser+"-"+bdkt.version;window.BTTtag_bvzn=bvzn;var EUOSVers=(bdkt.OSVersion!=undefined)?bdkt.OSVersion:'';var EUOS=(["Windows","Mac","iPhone","iPad","Android"].indexOf(bdkt.OS)!=-1)?bdkt.OS+" "+EUOSVers:bdkt.OS;EUOS=EUOS.trim();var params="",pgTm=0,RDs=0,RDe=0,btt_FS=0,Fs=0,DLs=0,DLe=0,CsT=0,SCsT=0,CeT=0,RqT=0,RsT=0,ReT=0,dU=0,eT=5,top=0,THR=0,fByte=0,nst=0,BPT=0,ssl=0;var today=new Date();var NTM=today.getTime();if(NTS==1){nst=PT.navigationStart,UST=PT.unloadEventStart,RDS=PT.redirectStart,RDs=RDS-nst,RE=PT.redirectEnd,RDe=RE-nst,btt_FS=PT.fetchStart,Fs=btt_FS-nst,DST=PT.domainLookupStart,DLs=DST-nst,DSE=PT.domainLookupEnd,DLe=DSE-nst,CST=PT.connectStart,CsT=CST-nst,btt_CE=PT.connectEnd,CeT=btt_CE-nst,SCS=PT.secureConnectionStart||0,SCsT=SCS-nst,RS=PT.requestStart,RqT=RS-nst,RES=PT.responseStart,RsT=RES-nst,REE=PT.responseEnd,ReT=REE-nst,dU=REE-nst;DL=PT.domLoading,DI=PT.domInteractive,DLS=PT.domContentLoadedEventStart,DLE=PT.domContentLoadedEventEnd,DC=PT.domComplete,LS=PT.loadEventStart,LE=PT.loadEventEnd,NT=1,RC=(BTT_Perf!=undefined&&BTT_Perf.navigation!=undefined)?BTT_Perf.navigation.redirectCount:0,totRD=LIM(RE-RDS),top=UST-LE,dns=LIM(DSE-DST),tcp=LIM(btt_CE-CST),ttDI=LIM(DI-DL),dom=LIM(DC-DL),pgTm=LIM(LS-nst);THR=pgTm;if((LS==0)&&(LE>LS)){pgTm=LIM(LE-nst);}if(SCS>0){ssl=LIM(RS-SCS);}fByte=LIM(RES-RS);BPT=LIM(REE-RES);params="pageName="+PNM+"&nst="+nst+"&unloadEventStart="+UST+"&redirectStart="+RDS+"&totRD="+totRD+"&fetchStart="+btt_FS+"&domainLookupStart="+DST+"&connectStart="+CST+"&secureConnectionStart="+SCS+"&requestStart="+RS+"&responseStart="+RES+"&REE="+REE+"&BPT="+BPT+"&domLoading="+DL+"&domInteractive="+DI+"&domContentLoadedStart="+DLS+"&domContentLoadedEnd="+DLE+"&loadEventStart="+LS+"&navigationType="+NT+"&redirectCount="+RC+"&pageType="+PTDB+"&pageValue="+PGV+"&pgTm="+pgTm+"&dns="+dns+"&tcp="+tcp+"&dom="+dom+"&fByte="+fByte+"&ssl="+ssl+"&cartValue="+CVL+"&eT="+eT+"&siteID=homedepot&txnName="+TxN+"&top="+top+"&bv="+BVL+"&bvzn="+bvzn+"&tul="+t_ul+"&EUOS="+EUOS;THR=pgTm;}else{pgTM=0;THR=pgTm;if (t_ul>0){pgTM=NTM-t_ul;}else{pgTM=NTM-LTM;}params="pageName="+PNM+"&nst="+t_ul+"&unloadEventStart="+t_ul+"&pageType="+PTDB+"&pageValue="+PGV+"&pgTm="+pgTM+"&navigationType=1"+"&cartValue="+CVL+"&eT="+eT+"&siteID=homedepot&txnName="+TxN+"&top="+top+"&bv="+BVL+"&bvzn="+bvzn+"&EUOS="+EUOS;}if(RDs<0){RDs=0;}if(RDe<0){RDe=0;}if(SCsT<0){SCsT=0;}return [params,nst,PNM,TxN,THR,RDs,RDe,Fs,DLs,DLe,CsT,SCsT,CeT,RqT,RsT,ReT,dU];}})();})();