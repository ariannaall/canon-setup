function initLoader()
{
    var curUrl = location.pathname;
	var path = curUrl.split("/");
	var c = path.length;
	if (c < 2) return;
	var curLang = path[c-3];
	var curUnit = path[c-2];
	
	var curModel = '';
	if(c > 3) curModel = path[c-4]; 

	var regLang = location.search.match(/lang=(.*?)(&|$)/);
	if(regLang)
	{
	    curLang = regLang[1].toUpperCase();
	}
    
    // Load Google Analytics Code
    /*
    if(curModel == 'TS8000%20series' || curModel == 'MG3000%20series')
    {
        Load_GA_Code(curLang, curUnit, location.hostname);
    }
    else
    {
        Add_GA_Code(location.hostname);
    }
    */
    
    //Google Tag Manager
	AddGoogleTagManager()
    
        
    // Load AC Cruiser Code
    Load_ACC_Code(curUrl, location.hostname);

    // Load STADIA Code
    Load_STADIA_Code(curUrl);
    
    // Load Yahoo!DMP code
    Load_YTM_Code(curUrl);    
}

//Google Tag Manager
function AddGoogleTagManager()
{
	try
	{
		(function(w,d,s,l,i){
			w[l]=w[l]||[];
			w[l].push(
				{'gtm.start':new Date().getTime(),event:'gtm.js'});
			var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),
			dl=l!='dataLayer'?'&l='+l:'';
			j.async=true;
			j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
			f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-N784T8K');
	}
	catch(e)
	{
	}
}

function Load_GA_Code(lang, unit, host)
{
    var ppText = new Object();
    ppText['JP'] = '本サイトの利用とクッキーについて';
    ppText['EN'] = 'Notes on Site Usage and Cookies';
    
    if(lang != 'EN' && lang != 'JP')
    {
        return;
    }

    try
    {    
        if(unit == 'ERR' || unit == 'TRL')
        {
            var navlist = document.getElementsByClassName('nav_list');

            if(!navlist)
            {
                return;
            }

            var new_a = document.createElement('a');                    
            new_a.href = '../../../../Others1/' + lang + '/INFO/info-caution.html';
	        new_a.innerHTML = '<span class=\"stc\">' + ppText[lang] + '</span>';
            new_a.target = '_blank';
                
            var new_li = document.createElement('li');
        	new_li.appendChild(new_a);
	
    	    if(unit == 'TRL')
	        {
	            new_li.style.marginLeft = '30px';
    	        navlist[0].insertBefore(new_li, navlist[0].firstChild);	   	    	        
    	        navlist[0].childNodes[2].style.marginLeft = '30px';
	        }
    	    else
	        {	            
    	        navlist[0].appendChild(new_li);	   	
	        }
        }
        
        Add_GA_Code(host);
    }
    catch(e)
    {
    }
}

function Add_GA_Code(hostname)
{
  // tracking code of Google Analytics
  try {
    var gaid = 'UA-79713253-1';
    
    if(hostname != 'ugp01.c-ij.com')
    {
        gaid = 'UA-79713253-2';
    }
      
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', gaid, 'auto', { anonymizeIp: true });
    ga('require', 'linkid', 'linkid.js');
    ga('send', 'pageview');
  } catch(e) {  
  }
  
  //Event tracking
  try {
    if(typeof ga === 'function') {
      var alinks = document.getElementsByTagName('a');
      var count = 0;
    
      for(var i=0; i<alinks.length; i++) {
        var href = alinks[i].getAttribute('href');
        
        if(href.indexOf('http') == 0) {
          alinks[i].setAttribute('onclick', 'ga("send", "event", "external", "click", "' + location.href + '&linknum=' + count.toString() + '", {nonInteraction: true});');
          count++;
        }
      }
    }
  } catch(e) {  
  }
}

function Load_ACC_Code(url)
{
    try {
      if(url.indexOf('/JP/UF/functions.html') != -1) {
        var _cid = 32004;
        var _login_id='';
        var _entry_js = '//tracer31.a-cast.jp/entry.js?cid='; 
        var _proto = window.location.protocol; 
        var _p = _login_id  != '' ? '&info=ac_login_id=' + _login_id : '';
        var _ac = document.createElement('script'); 
        _ac.type = 'text/javascript'; 
        _ac.async = true;
        _ac.src = _proto + _entry_js + _cid + _p;
        if (_proto == 'http:' || _proto == 'https:') { 
          var _tag = document.getElementsByTagName('script')[0]; 
          _tag.parentNode.insertBefore(_ac, _tag);
        }  
      }        
    }catch(e) {
    }
}

function Load_STADIA_Code(url)
{
  try {
    if(url.indexOf('/JP/UF/functions.html') != -1) {
      Add_STADIA_DNS_Code();
      Add_STADIA_DCM_Code('lphju0');
      Add_STADIA_DCM_Code('cvyld0');
      Add_STADIA_dPublic_Code();
    }        
  }catch(e) {
  }
}

function Add_STADIA_DNS_Code()
{
  try {
    conversionTag = "https://ad.doubleclick.net/ddm/adj/N9410.197812NSO.CODESRV/B10653804.142171415;sz=1x2;ord="

	var randomNumber = Math.floor((Math.random() * 1000000000000) + 1);
	var scriptTag = document.createElement("script");
	scriptTag.src = conversionTag + randomNumber + "?";
	scriptTag.language = "JavaScript1.1";

	var insertionNode = document.body.firstChild;
	insertionNode.parentNode.insertBefore(scriptTag, insertionNode);
  }catch(e) {
  }
}

function Add_STADIA_DCM_Code(type)
{
  try {
    var axel = Math.random() + "";
    var a = axel * 10000000000000;

    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');                       
    var i1 = document.createElement('iframe');
    i1.setAttribute('src', 'https://6078449.fls.doubleclick.net/activityi;src=6078449;type=' + type + ';cat=stadi0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"');            
    s.appendChild(i1);        
    document.body.appendChild(s);               

    var ns = document.createElement('noscript');
    var i2 = document.createElement('iframe');
    i2.setAttribute('src', 'https://6078449.fls.doubleclick.net/activityi;src=6078449;type=' + type + ';cat=stadi0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" frameborder="0" style="display:none"');    
    ns.appendChild(i2);        
    document.body.appendChild(ns);
  }catch(e) {
  }
}

function Add_STADIA_dPublic_Code()
{
  try {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');     
    s.innerHTML = '(function(w,d,s){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src=\'//dmp.im-apps.net/js/13570/0001/itm.js\';f.parentNode.insertBefore(j, f);})(window,document,\'script\');';
    document.body.appendChild(s);                     
  }catch(e) {
  }
}

function Load_YTM_Code(url)
{
  try {
    if(url.indexOf('/JP/UF/functions.html') != -1) {
      var tagjs = document.createElement("script");
      var s = document.getElementsByTagName("script")[0];
      tagjs.async = true;
      tagjs.src = "//s.yjtag.jp/tag.js#site=5hAPjvQ";
      s.parentNode.insertBefore(tagjs, s);  
    }        
  }catch(e) {
  }
}


// onload処理
if ( window.onload != null ) {
    var oldOnloadLoader = window.onload;
    window.onload = function ( e ) {
        oldOnloadLoader( e );
        initLoader();
    };
}
else
    window.onload = initLoader;
