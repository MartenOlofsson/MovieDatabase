 function cssLoad(css){var s=document.createElement('style');document.getElementsByTagName('head')[0].appendChild(s);if(!!window.ActiveXObject){document.styleSheets[document.styleSheets.length-1].cssText=css;}else{stylenode=document.createTextNode(css);s.appendChild(stylenode);}}function azHtmlLoad(div,content){var azDiv=document.getElementById(div);azDiv.innerHTML=content;}function azScriptSRCLoad(div,script){var newScript=document.createElement('script');newScript.type='text/javascript';newScript.src=script;var azDiv=document.getElementById(div);azDiv.appendChild(newScript);}function azScriptInlineLoad(div,script,interval){var newScript=document.createElement('script');newScript.type='text/javascript';if(/msie/.test(navigator.userAgent.toLowerCase())){newScript.text=script;}else{newScript.innerHTML=script;}var azDiv=document.getElementById(div);azDiv.appendChild(newScript);}function azLoad(div,code){var azDiv=document.getElementById(div);if(azDiv){code();}else {setTimeout(function(){azLoad(div,code)},100);}}var zItems=[];function zshow(div){if(zItems[div]){document.write(zItems[div]);}}var adzerk1code = '<a href="http://engine.adzerk.net/redirect/0/5924/2444/8277/cc9b43d1b488432ebad0235a5cdce0c6/43/1178/8810/634622227622307030?keywords=ruby-on-rails-3%2cradio-button%2cform-for" rel="nofollow" target="_blank" title=""><img src="http://static.adzerk.net/Advertisers/0a96cc99c1784d6abe3cae6b8c8bf013.png" title="" alt="" border="0" height="90" width="728" /></a>';var adzerk1func = function() { azHtmlLoad('adzerk1', adzerk1code); }; setTimeout(function() { azLoad('adzerk1', adzerk1func) }, 100);var adzerk2code = '<a href="http://engine.adzerk.net/redirect/0/2566/2444/8277/dfacadcb69b344b1b82ab611b7fface7/45/1178/12931/634622227622395370?keywords=ruby-on-rails-3%2cradio-button%2cform-for" rel="nofollow" target="_blank" title=""><img src="http://static.adzerk.net/Advertisers/2566.png" title="" alt="" border="0" height="250" width="220" /></a>';var adzerk2func = function() { azHtmlLoad('adzerk2', adzerk2code); }; setTimeout(function() { azLoad('adzerk2', adzerk2func) }, 100);