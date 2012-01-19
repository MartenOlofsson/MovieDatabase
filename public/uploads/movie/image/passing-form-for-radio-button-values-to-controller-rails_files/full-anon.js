"use strict";StackExchange.anonymous={};var gauth=function(){return{informStackAuth:function(g){if(!gauth.enabled()){return}var e=document.domain;if(e.substr(0,5)=="meta."){e=e.substr(4,e.length-4)}var d=$.cookie("gauth");if(d==null){$.cookie("gauth",null,{path:"/",domain:e});$.cookie("gauth",null,{path:"/",domain:document.domain});return}if(e.charAt(0)!="."){e="."+e}$.cookie("gauth",null,{path:"/",domain:e});$.cookie("gauth",null,{path:"/",domain:document.domain});var c=d.indexOf(":");var a=d.substr(0,c);var f=d.substr(c+1);var b=g+"/auth/global/write?authToken="+encodeURIComponent(a)+"&nonce="+encodeURIComponent(f);$(document).ready(function(){$("#footer").append("<iframe style='display:none' src='"+b+"'></iframe>")})},checkStackAuth:function(b){if(!gauth.enabled()){return}var a=$.cookie("gauthed");if(a!=null){return}$.cookie("gauthed","1",{path:"/"});var c=function(d){var f=d.origin;if(f!=b){return}if(d.data=="No Local Storage"){gauth.noGAuthStorage();return}if(d.data=="No Session"){gauth.noGAuthSession();return}var g=d.data.substr(0,d.data.indexOf(","));var h=d.data.substr(d.data.indexOf(",")+1);$.post("/users/login/global",{authToken:g,nonce:h},function(j,e,i){gauth.globallyAuthed(j)},"json")};if(window.attachEvent){window.attachEvent("onmessage",c)}else{window.addEventListener("message",c,false)}$.post("/users/login/global/request","",function(d,f,e){var g=b+"/auth/global/read?request="+encodeURIComponent(d.token)+"&nonce="+encodeURIComponent(d.nonce);$(document).ready(function(){$("#footer").append("<iframe id='global-auth-frame' style='display:none' src='"+g+"'></iframe>")})},"json")},enabled:function(){$.cookie("enabledCheck","1");if($.cookie("enabledCheck")==null){return false}$.cookie("enabledCheck",null);if(typeof(localStorage)=="undefined"){return false}return true},noGAuthStorage:function(){},noGAuthSession:function(){},globallyAuthed:function(b){if(!b||!b.Message){return}var c=b.Message+" ",d,a=false,e=""+window.location,g=e.indexOf("returnurl=");if(g!=-1){var f=e.indexOf("&",g);if(f==-1){f=e.length}d=decodeURIComponent(e.substring(g+"returnurl=".length,f));if(!/^(?:http:\/\/|\/)/.test(d)){d=null}else{d=d.replace(/[^-a-z0-9+&@#\/%?=~_|!:,.;()]/g,"")}}if(e.indexOf("/users/login")!=-1){a=true;d=d||"/"}if(a){c+="<br>You are being redirected..."}else{c+=d?"<a href=\"javascript:window.location='"+d+"'\">Click here</a> to return to your last location.":'<a href="javascript:location.reload(true)">Click here</a> to refresh the page.'}StackExchange.helpers.showFancyOverlay({message:c,showClose:!a,complete:function(){if(a){window.location=d}}})}}}();var genuwine=function(){var a;var l="";var m;var i=function(){return $(".genu").hasClass("genu-on")};var j=function(){var w=$(".genu");var y=$("#seWrapper");if(y.length==0){u();y=$("#seWrapper");var z;if(m>0){z=$("#seTabInbox");s(z)}else{z=$("#seTabHot");r(z)}z.addClass("seCurrent")}var x=w.hasClass("genu-on");if(x){$(".unreadCountTab").hide();$(".itemBoxNew").removeClass("itemBoxNew");y.fadeOut("fast")}else{y.fadeIn("fast");$(".unreadCount").hide()}w.toggleClass("genu-on",!x);if(m==-1){$(w).ready(function(){$("#seTabInbox").hide()})}};var u=function(){var y='<div id="seWrapper" style="position:absolute; display:none;"><div class="seIntro"><a href="'+l+'">Stack Exchange</a> is a network of free, community-driven Q&A sites.</div><div class="seNav"><ul class="seNavLinks"><li><a id="seTabHot">Hot Questions</a></li><li><a id="seTabSites">All Sites</a></li><li><a id="seTabInbox">Inbox</a></li></ul></div><div class="seContainer"></div><div class="seFooter">';if(StackExchange.options.enableAccountEmails){y+='<div id="seTabEmail" class="seEmailAccount"><a>email settings</a></div>'}y+='<a id="seClose">close</a></div></div>';var w=$("#hlinks");var x=w.height()+w.offset().top+5;$(y).appendTo("#portalLink").css({top:x}).find("ul.seNavLinks a, #seTabEmail").click(function(){f($(this))});$("#seClose").live("click",j)};var f=function(w){$(".seNavLinks a").removeClass("seCurrent");w.addClass("seCurrent");switch(w.attr("id")){case"seTabHot":r(w);$("#seContainerSites, #seContainerInbox, #seContainerEmail").hide();$("#seContainerHot").fadeIn("fast");break;case"seTabSites":g(w);$("#seContainerHot, #seContainerInbox, #seContainerEmail").hide();$("#seContainerSites").fadeIn("fast");break;case"seTabInbox":s(w);$("#seContainerHot, #seContainerSites, #seContainerEmail").hide();$("#seContainerInbox").fadeIn("fast");break;case"seTabEmail":k(w);$("#seContainerHot, #seContainerSites, #seContainerInbox").hide();$("#seContainerEmail").fadeIn("fast");break}};var r=function(w){if($("#seContainerHot").length==0){d(w)}};var k=function(w){if($("#seContainerEmail").length==0){c(w)}};var c=function(w){v(w,"/accounts/email-settings","json",function(z,A){var y='<div id="seContainerEmail" style="display:none; font-size:11px;"><div class="itemBox" style="border-bottom: 0px"><p>Would you like to receive unread inbox notifications via email?</p><div>Email: <input id="email-notify" name="email-notify" style="width:300px;" value="'+A.verifiedEmail+'"></input></div><div><input type="radio" name="optIn" value="true" id="email-enable"'+(A.optIn==true?'checked="checked"':"")+'"> <label for="email-enable">Email me my unread inbox messages </label> <select id="email-freq"><option value="3">every 3 hours</option><option value="24">daily</option><option value="168">weekly</option></select> </div><div><input type="radio" name="optIn" value="false" id="email-disable"'+(A.optIn!=true?'checked="checked"':"")+'"> <label for="email-disable">Do not email me inbox messages</label></input></div><div><input type="button" name="save" id="email-save" value="Save" disabled="disabled"></input></div><div id="email-confirmation" style="display:none;"></div></div></div>';q(z,y);$("#email-freq").val(A.freq).on("click focus",function(){$("#email-enable").prop("checked",true)});$("#email-notify").focus().keyup(x);$("#email-enable, #email-disable, #email-freq").change(x);function x(){$("#email-save").removeAttr("disabled");$("#email-confirmation").html("")}$("#email-save").click(function(){o();$.post("/accounts/verified-email-set",{email:$("#email-notify").val(),fkey:StackExchange.options.user.fkey,optin:$("input[name=optIn]:checked").val(),freq:$("#email-freq").val()},function(B){StackExchange.helpers.removeSpinner();$("#email-confirmation").html(B.message).fadeIn();if(B.success){$("#email-save").attr("disabled","disabled")}},"json")})},true)};var d=function(w){v(w,l+"/genuwine?callback=?","jsonp",e)};var e=function(y,E){var B=$("<div/>");var A='<div id="seContainerHot" style="display:none">';for(var D=0;D<E.length;D++){var z=E[D];var C=z.SiteId;var x='href="http://'+C+"/questions/"+z.Id+'"';var w=parseInt(z.DisplayScore,10);A+='<div class="itemBox"><a '+x+' class="seNumAnswer">'+w+'</a><div class="siteInfo"><p><a '+x+">"+B.text(z.Title).html()+'</a></p><a href="http://'+C+'" class="siteLink">'+C+"</a></div></div>"}A+="</div>";q(y,A)};var g=function(w){if($("#seContainerSites").length==0){t(w)}};var t=function(w){var x=document.location.host;v(w,l+"/genuwine/sites?callback=?&host="+x+(!!a?("&accountId="+a):""),"jsonp",b)};var b=function(y,x){var z='<div id="seContainerSites" style="display:none">';for(var B=0;B<x.length;B++){var C=x[B];var A=C.Name;var w='href="http://'+C.Id+'"';z+='<div class="itemBox"><a '+w+' class="siteFavicon"><img src="'+C.FaviconUrl+'" alt="'+A+'"></a><div class="siteInfo"><p><a '+w+">"+A+"</a></p><a "+w+' class="siteLink">'+C.Description+"</a></div></div>"}z+="</div>";q(y,z)};var s=function(w){if(m==-1){return}if($("#seContainerInbox").length==0){h(w)}if(m>0&&w.find(".unreadCountTab").length==0){w.prepend('<span class="unreadCountTab">'+m+"</span>")}};var h=function(w){v(w,"/inbox/genuwine","json",n,true)};var n=function(A,F){var B='<div id="seContainerInbox" style="display:none">';for(var E=0;E<F.length;E++){var z=F[E];var w='href="'+z.Url+'"';var D='title="'+z.CreationDate+'"';var y=z.Count;var G=z.IsNew?" itemBoxNew":"";B+='<div class="itemBox'+G+'"><a '+w+' class="siteLinkFavicon"><img src="'+z.FaviconUrl+'" alt="'+z.SiteUrl+'"></a><div class="siteInfo">';if(z.Type=="careers message"){B+="<p><a "+w+' style="font-weight:normal"><b>'+z.Title+"</b> wants to contact you on <b>Stack Overflow Careers</b></a></p>"}else{if(z.Type=="invitation"){var x=z.Count;var C="invitation"+(x>1?"s":"");B+="<p><a "+w+' style="font-weight:normal"><b>'+x+"</b> "+C+" awarded on <b>Stack Overflow Careers</b></a></p>"}else{B+="<p>"+(y>1?y+" ":"")+z.Type+" on <a "+w+" "+D+">"+z.Title+"</a></p>"}}B+='<p class="inboxSummary">'+(z.Summary||"")+"</p></div></div>"}if(!!a&&F.length>=5){B+='<div class="itemMoreContainer"><div class="seIntro"><a href="http://stackexchange.com/users/'+a+'?tab=inbox">more inbox messages &hellip;</a></div></div>'}B+="</div>";q(A,B)};var p={};var v=function(B,A,w,y,C){var z=B.attr("id");if(p[z]){o();return}p[z]=true;o();var x=function(){p[z]=false;StackExchange.helpers.showErrorPopup($(".seContainer"),"An error occurred while loading - please try again.")};$.ajax({type:"GET",url:A,dataType:w,success:function(D){if(D&&(D.length>0||C)){y(B,D)}else{x()}},error:x,complete:StackExchange.helpers.removeSpinner()})};var q=function(x,y){var w=$(y);w.appendTo(".seContainer");if(x.hasClass("seCurrent")){w.fadeIn("fast")}};var o=function(){StackExchange.helpers.removeSpinner();StackExchange.helpers.addSpinner(".seContainer",{position:"relative",left:"10px",top:"10px"})};return{isVisible:i,click:j,init:function(y,x){var w=$(".genu");if(w.length>=1){w[0].onclick=null}a=y;l=w.attr("href");m=x;w.removeAttr("href").add(".unreadCount").click(j);$(document).click(function(z){if(i()&&!$.contains($("#portalLink")[0],z.target)){j()}})}}}();StackExchange.notify=(function(){var n=0;var l=-1;var j="m";function m(o,q){var p=$("#dismissed-messages");p.val(p.val()+"~"+o+(q?" "+q:"")+"~")}function b(o,q){var p=$("#dismissed-messages").val();if(!p){return false}return new RegExp("~"+o+(q?" "+q:"")+"~").test(p)}function d(s,p,o){var q=parseInt($("body").css("margin-top").match(/\d+/));var r=p*q/s;if(o){$("body:not(.no-message-slide)").animate({marginTop:r+"px"},"fast","linear")}else{$("body:not(.no-message-slide)").css("marginTop",r+"px")}}var f=function(o,q){var p=$("#notify-"+o+(q?"-"+q:""));if(o==l){e()}else{if(o>l){$.post("/messages/mark-as-read",{messagetypeid:o,id:(q?q:null)})}}m(o,q);n--;p.fadeOut("fast",function(){d(n+1,n,true);p.remove()})};var a=function(q){n++;if(b(q.messageTypeId,q.id)){return false}var r="";if(q.messageTypeId){r=' id="notify-'+q.messageTypeId+(q.id?"-"+q.id:"")+'"'}var s="<div"+r+' style="display:none"><span class="notify-close"><a title="dismiss this notification">&times;</a></span><span class="notify-text">'+q.text+"</span>";if(q.showProfile){var o=encodeURIComponent("/users/"+q.userId+"?tab=activity");s+=' See your <a href="/messages/mark-as-read?messagetypeid='+q.messageTypeId+"&returnurl="+o+'">profile</a>.'}s+="</div>";var p=$(s);p.find(".notify-close").click(function(){if(q.close){q.close()}f(q.messageTypeId,q.id)});$("#notify-container").append(p);return true};var e=function(o){$.cookie(j,(o?o:"0"),{expires:90,path:"/"})};var i=function(){var o=parseInt($.cookie(j));if(isNaN(o)){o=0}if(o<5){g();e(++o)}};var k=function(){$("#notify-container div").fadeIn("slow")};var c=function(){$("body:not(.no-message-slide)").animate({marginTop:"2.5em"},"fast","linear")};var g=function(){$(".module.newuser:not(.sidebar-help)").show()};var h=function(q,o){var p=$('<div class="link-more"><a>view '+q+" more notification"+(q!=1?"s":"")+"</a></div>");$("#notify-container").append(p);p.click(function(){p.detach();for(var r=0;r<o.length;r++){a(o[r])}k()})};return{showFirstTime:function(o){if($.cookie(j)){i()}else{g();if(!/\/users\/(login|authenticate)/i.test(window.location)){c();a({messageTypeId:l,text:"Welcome to "+o+' &mdash; check out the <a onclick="StackExchange.notify.closeFirstTime(true); return false;" href="/faq">FAQ</a>!',close:function(){StackExchange.notify.closeFirstTime()}});k()}}},showMessages:function(r,q){var o=0;var p=q?2:r.length;for(var s=0;s<p&&s<r.length;s++){if(a(r[s])){o++}}d(n,o,false);k();if(q&&o<r.length){var t=r.slice(p);h(r.length-o,t)}},show:function(p,o){c();a({text:p,messageTypeId:o});k()},close:f,closeFirstTime:function(o){e();StackExchange.helpers.fireAndForget("/analytics/user/close-welcome"+(o?"?faq=1":""));if(o){document.location="/faq"}},getMessageText:function(o){return $("#notify-"+o+" .notify-text").text()}}})();function moveScroller(){var a=$("#scroller").width();var b=function(){var e=$(window).scrollTop();var d=$("#scroller-anchor").offset().top;var c=$("#scroller");if(e>d){if(c.height()>$(window).height()){c.css({position:"fixed",top:"",bottom:"0px",width:a})}else{c.css({position:"fixed",top:"0px",bottom:"",width:a})}}else{if(e<=d){c.css({position:"relative",top:"",bottom:""})}}};$(window).scroll(b).resize(b);b()}var styleCode=(function(){function a(b){var c=$("#prettify-lang").text();if(c!=""){b.addClass(c);return true}return false}return function(){if(typeof MathJax!="undefined"){MathJax.Hub.Queue(["Typeset",MathJax.Hub])}var b=false;$("pre code").parent().each(function(){if($(this).hasClass("prettyprint-override")){$(this).removeClass("prettyprint-override").addClass("prettyprint");b=true}if(!$(this).hasClass("prettyprint")){if(a($(this))){$(this).addClass("prettyprint");b=true}}});if(b){if(typeof jtab!="undefined"){jtab.renderimplicit();return}StackExchange.using("prettify",function(){StackExchange.prettify.applyCodeStyling()})}}})();StackExchange.helpers.MagicPopup=function(d){var a,f,b,g,c={};function h(j,l){var o=$("<div id='"+d.id+"'/>").html(l);var i=$("<div />").css({overflow:"hidden",position:"absolute",width:1,height:1,top:0,left:0}).append(o).appendTo("body");var k=d.showing(j,o);var m={left:k.left};if(k.hasOwnProperty("bottom")){m.bottom=k.bottom;m.top="auto"}else{m.top=k.top}var n;if(d.shown){n=function(){d.shown(j,o)}}i.css(m).animate({height:o.outerHeight()+8,width:o.outerWidth()+8},300,n);a=function(){i.stop().remove();if(d.removed){d.removed(j,o)}b=null;a=null};b=StackExchange.helpers.DelayedReaction(a,5);var p=i;if(k.additional){p=p.add(k.additional)}p.hover(b.cancel,b.trigger)}var e=StackExchange.helpers.DelayedReaction(function(j,i){if(g||!j){return}var k;if(d.cache&&("c_"+j in c)){k=$.Deferred().resolve(c["c_"+j])}else{k=$.ajax({type:"GET",url:j,dataType:"html"});if(d.cache){k.done(function(l){c["c_"+j]=l})}}k.done(function(l){if(a){a()}if(l==""){return}h(i,l)})},500);$(document).delegate(d.selector,{mouseenter:function(){if(b&&this===f){b.cancel();return}f=this;e.trigger(d.getUrl(this),this);g=false;return false},mouseleave:function(){g=true;e.cancel();if(b){b.trigger()}}})};StackExchange.tagmenu=(function(){var c,a;var b=function(f){c=f;if(a){return}a=true;if(StackExchange.options.isMobile){return}StackExchange.helpers.MagicPopup({selector:".post-tag:not(.user-tag)",id:"tag-menu",getUrl:d,showing:e,shown:function(h,g){if(c){c(g,$(h).text())}}});$("#interesting-tags .post-tag").addClass("user-tag")};return{init:b};function d(f){var g=$(f);var h=g.attr("href");if(!h||h.charAt(0)!="/"){return null}var i=g.text();if(i.indexOf("*")>-1){return null}g.attr("title","");return"/tags/"+encodeURIComponent(i)+"/subscriber-info"}function e(i,l){var j=$(i),f=j.offset(),g=j.outerHeight(),n={left:f.left},k=f.top+g,m=f.left+l.outerWidth();if(l.height()+k>$(window).height()+$(window).scrollTop()){n.bottom=$(window).height()-f.top-8}else{n.top=k}var h=Math.max(1024,$(window).width());if(m>h){n.left-=m-h}return n}})();StackExchange.usermenu=(function(){var a,d;var b=function(){if(a){return}a=true;if(StackExchange.options.isMobile){return}StackExchange.helpers.MagicPopup({selector:".user-hover .user-gravatar48, .user-hover .user-gravatar32",getUrl:f,cache:true,id:"user-menu",showing:e,removed:c});function f(i){var h=$(i),l=h.closest(".user-hover"),j=l.find(".user-details a").attr("href"),g=new RegExp("/users/([^/]+).*$"),k=g.exec(j);if(!k){return null}return"/users/user-info/"+k[1]}};return{init:b};function e(g,j){var k=$(g),m=k.find("img:first"),h=m.offset(),q=m.height(),o=m.width(),l=Math.max(o,q),r=64*q/l,i=64*o/l,p=j.find("img:first").css({width:i,height:r});var f=p.offset();p.css("visibility","hidden");d=m.clone().css({position:"absolute",zIndex:300,left:h.left,top:h.top,width:o,height:q}).appendTo("body");var n=function(){if(!p[0].complete){setTimeout(n,500);return}p.css("visibility","visible");d.fadeOutAndRemove()};d.animate({width:i,height:r,top:h.top+f.top},200,n);return{top:h.top,left:h.left-f.left,additional:d}}function c(g,f){d.remove()}})();StackExchange.chatAd=(function(){var a,m,q=180,e=30,d=480,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if(/^\/questions\/\d+/i.test(window.location.pathname)){d=0}return{init:function(s){a=s.chatUrl;m=s.reloadUrl;if(s.tagBased){var r=j();if(!r){return}m+=(/\?/.test(m)?"&":"?")+"tags="+encodeURIComponent(r)}if(s.preloadData===null){i()}else{c(s.preloadData,null,null)}}};function j(){var r=$(".question .post-taglist .post-tag");if(!r.length){return null}return r.map(function(s,t){return $(t).text()}).get().join(" ")}function g(r){return r<10?"0"+r:r}function f(r){var s=new Date();s.setTime(r*1000);return[s.getUTCFullYear(),"-",g(s.getUTCMonth()+1),"-",g(s.getUTCDate())," ",g(s.getUTCHours()),":",g(s.getUTCMinutes()),":",g(s.getUTCSeconds()),"Z"].join("")}function n(t){var w=Math.floor((new Date()).getTime()/1000);var u=w-t;var x=u%60;var s=Math.floor(u/60);var v=Math.floor(u/3600);if(u<1){return"just now"}if(u<60){return x==1?"1 sec ago":x+" secs ago"}if(u<3600){return s==1?"1 min ago":s+" mins ago"}if(u<86400){return v==1?"1 hour ago":v+" hours ago"}var r=Math.floor(u/86400);if(r==1){return"yesterday"}else{if(r<=2){return r+" days ago"}}var y=new Date(t*1000);return o[y.getMonth()]+" "+y.getDate()+" at "+y.getHours()+":"+g(y.getMinutes())}function p(s){var r=$("<div />");r.text(s);return r.html().replace('"',"&quot;")}function i(){$.get(m,null,function(t,r,s){c(t,r,s)})}function k(s){var r=$('<div class="ad502-users" />');for(var v=0;v<s.length&&v<7;v++){var w=s[v];var y=w.name;if(w.lastPost){y+=": "+n(w.lastPost)}var t=a+"/users/"+w.id;var x="http://www.gravatar.com/avatar/"+w.emailhash+"?s=23&d=identicon&r=PG";var u=$('<a href="'+t+'" />');$("<img />").attr("title",y).attr("src",x).appendTo(u);r.append(u)}return r}function h(r){return $('<div class="ad502-users"><img src="'+a+"/rooms/users/"+r+'.jpeg" /></div>')}function l(t){var r=t.user;var s=t.userid;if(s){return'<a href="'+a+"/users/"+s+'">'+p(r)+"</a>"}return p(r)}function b(){if(q<=d){window.setTimeout(i,q*1000)}q+=e}function c(u,s,w){var v=$("#ad502-rooms");if(u.error){b();return}v.html("");var t=u.rooms;for(var x=0;x<t.length&&x<2;x++){var y=t[x];var z=a+"/rooms/"+y.id;var r=$('<div class="ad502-room"></div>');r.append($('<h3 class="ad502-room-h3"><span class="ad502-room-title" title="'+p(y.name)+'"><a href="'+z+'">'+p(y.name)+"</a></span></h3>"));if(y.messages&&y.messages.length>0){r.append($('<span title="'+f(y.lastPost)+'" class="ad502-last-message">'+n(y.lastPost)+" - "+l(y.messages[0])+"</span><br>"))}if(y.singleImage){r.append(h(y.id))}else{r.append(k(y.users))}v.append(r)}if(u.activeUsers>1){$("#h-chat-link").text(u.activeUsers+" People Chatting")}else{$("#h-chat-link").text("Visit Chat")}$("#h-chat-link").attr("title",u.activeUsers+" users active in "+u.activeRooms+" rooms the last 60 minutes");b()}})();StackExchange.helpers.noDiacritics=(function(){var a={"àåáâäãåą":"a","èéêëę":"e","ìíîïı":"i","òóôõöøő":"o","ùúûü":"u","çćč":"c","żźž":"z","śşš":"s","ñń":"n","ýŸ":"y","ł":"l","đ":"d","ß":"ss","ğ":"g","Þ":"th"};return function(c){for(var b in a){if(a.hasOwnProperty(b)){c=c.replace(new RegExp("["+b+"]"),a[b])}}return c}})();function sanitizeAndSplitTags(a,e){a=$.trim(a).replace(/([A-Za-z0-9])\+(?=[A-Za-z0-9])/g,"$1 ");var b=a.split(/[\s|,;]+/);var f=[];for(var d=0;d<b.length;d++){var g=StackExchange.helpers.noDiacritics(b[d].toLowerCase()).replace(/_/g,"-");var c="[^a-z0-9.#+"+(e?"*":"")+"-]";g=g.replace(new RegExp(c,"g"),"");g=g.replace(/^[#+-]+/,"");g=g.replace(/[.-]+$/,"");if(g.length>0&&$.inArray(g,f)==-1){f.push(g)}}return f}StackExchange.question=(function(){var a=function(h){if(/^#comment/.test(window.location.hash)){var m=window.location.hash.indexOf("_");var j=+window.location.hash.substring(8,m);var l=+window.location.hash.substring(m+1);var k=$("#comments-link-"+l);var f="#comment-"+j;var g=$(f).length!=0;var i=function(){$(f).css({backgroundColor:h.highlightColor});$(f).animate({backgroundColor:h.backgroundColor},2000,"linear",function(){$(this).css("background-color","")});$(f)[0].scrollIntoView(true)};if(g){i()}else{StackExchange.comments.loadAll(k).done(i)}}};var d=function(){return $("div.share-tip a[id^='link-post-']")};var b=function(h,i){var l=h!=null;if(!h){h=$('div.question div.post-menu a:contains("link")')}var k=h.closest(".post-menu, .help-menu");if(h.hasClass("share-link")){k.find(".close-share-tip").click()}else{h.addClass("share-link");var f=h.attr("id").substring("link-post-".length);var j=h.closest(".col-section").length?"section":(h.closest("div.question").length?"question":"answer");var g=$('<div class="share-tip" style="display:none">share a link to this '+j+'<input type="text" value="http://'+document.location.host+h.attr("href")+'" style="display:block; width:292px;"><a class="close-share-tip" style="float:right">close</a></div>');if(i){g.find(".close-share-tip").before('<a id="link-post-'+f+'" style="float:left">cite</a>')}g.appendTo(k).fadeIn(l?"fast":0).bind("removing",function(){h.removeClass("share-link")}).find(".close-share-tip").click(function(){g.fadeOutAndRemove()}).end().find("input[type=text]").select()}};var c=function(j){var r=$("#post-form h2:first"),m=r.wrap("<div />").parent(),i=m.wrap("<div />").parent(),g=$("<div />").prependTo(i),k=i.height(),n=$("<div />"),h=$(j),p=parseInt(r.css("margin-bottom")),l=$("#content"),q=$("#wmd-input").outerWidth(),o=1000,f=l.offset().left>r.offset().left-5&&l.css("overflow-x")!="visible";n.css({height:0,overflowY:"hidden"}).appendTo(m).append(h);i.css({height:k,position:"relative"});m.css({position:"absolute",bottom:-p,width:q});g.addClass("answer-help-background").css({position:"absolute",bottom:-p,height:0,width:q});if(f){g.css("left",0);m.animate({paddingLeft:5},o)}n.animate({height:h.height()+p+10},o);g.animate({height:h.height()+p+10+k},o);$("<div style='float:right;margin-top:10px;'><a href='#'>ok</a></div>").hide().prependTo(m).fadeIn(1000).find("a").one("click",function(t){var s=$(this).parent();setTimeout(function(){s.remove()},1);n.animate({height:0},o,function(){n.add(g).remove();r.unwrap().unwrap()});g.animate({height:0},o);if(f){m.animate({paddingLeft:0},o)}t.preventDefault()})};var e=function(){$.get("/posts/answer-help").then(c)};return{showShareTip:b,init:function(i){if(StackExchange.question.fullInit){StackExchange.question.fullInit(i)}else{StackExchange.question.bindAnonymousVoteDisclaimers()}StackExchange.comments.init({autoShowCommentHelp:i.autoShowCommentHelp});if(i.showShareTip){b()}$("input.anon-vote").live("click",function(){var j=$(this);var k=j.postId();var l=j.parent();l.closest(".question,.answer").unbind("mouseenter.helpful").unbind("mouseleave.helpful");l.text("sending feedback ...");setTimeout(function(){l.text("Thank you for your feedback.")},500);$.ajax({type:"POST",url:"/vote/anon/"+k,data:{votetypeid:(j.val()=="Yes"?2:3)},complete:function(){}})});var f=$(".was-this-helpful");var g=f.css("color");var h=$(".post-text").css("color");f.each(function(){var j=$(this);var k=j.text();var l="Was this post useful to you? &nbsp;&nbsp;<input style='display:none;' class='anon-vote' type='button' value='Yes'/> &nbsp;<input style='display:none;' class='anon-vote' type='button' value='No'/>";var m=function(){j.html(l).animate({color:h},"fast","linear").find("input").fadeIn("fast")};var n=function(){j.text(k).animate({color:g},"fast","linear")};j.closest(".answer, .question").bind("mouseenter.helpful",m).bind("mouseleave.helpful",n)});$('.post-menu a:contains("link")').live("click",function(j){if(!j.ctrlKey&&!j.metaKey){b($(this),i.showCitation);return false}});if(i.showAnswerHelp){$("#wmd-input").one("focus",e)}if(i.showCitation){d().live("click",function(){var j=$(this).closest(".post-menu");j.find(".close-share-tip").click();citation.show($(this))})}$(function(){a(i)})}}})();StackExchange.question.bindAnonymousVoteDisclaimers=function(){function a(b){return function(c){var g='Please <a href="/users/login?returnurl='+escape(document.location)+'">login or register</a> to '+b+" this post.";StackExchange.helpers.showErrorPopup($(this).parent(),g);var d="",f=$(this).prop("className"),e=$(this).closest(".answer").length?"answer":"question";if(/vote-up/.test(f)){d="?vote=up&type="+e}else{if(/vote-down/.test(f)){d="?vote=down&type="+e}else{if(/star/.test(f)){d="?vote=favorite"}}}StackExchange.helpers.fireAndForget("/analytics/user/try-vote"+d);c.preventDefault()}}$(".vote-up-off, .vote-down-off").click(a("vote for"));$("div.post-menu a[id^='flag-post-']").unbind("click").click(a("flag"));$(".star-off:not(.disabled)").live("click",a("favorite"))};StackExchange.comments=(function(){var f={};function e(g,h){this.postId=g;this.jDiv=h;this.jCommentsLink=$("#comments-link-"+g)}var c=function(){};e.prototype={checkDiscussion:c,ensureInput:c,commentsShown:c,addShow:function(h){var g=this;this.loadAllComments().done(function(){g.jCommentsLink.hide();g.checkDiscussion()});var i=this.ensureInput();if(i&&!h){i.focus()}},ajax:function(k,h,j,i){if(j&&!i){StackExchange.helpers.addSpinner(j,{"margin-left":"10px"})}var g=this;return $.ajax(k).fail(function(l){$(".error-notification").fadeOut("fast",function(){$(this).remove()});var m=l.responseText;if(!m||m.length>=100){m="An error occured"+(h?" "+h:"")}StackExchange.helpers.showErrorPopup(j||g.jDiv,m);if(j&&!i){StackExchange.helpers.removeSpinner()}}).done(StackExchange.helpers.removeSpinner).promise()},showComments:function(g){this.jDiv.find(" > table > tbody").html(g);this.jCommentsLink.text("add comment");if(typeof MathJax!="undefined"){MathJax.Hub.Queue(["Typeset",MathJax.Hub])}this.commentsShown()},loadAllComments:function(h){this.jDiv.removeClass("dno");if(!h&&!/more comment/.test($("#comments-link-"+this.postId).text())){return $.Deferred().resolve().promise()}var g=this;return this.ajax({type:"GET",url:"/posts/"+this.postId+"/comments",dataType:"html"},"while fetching comments").done(function(i){g.showComments(i)}).promise()}};function a(k){var i=k.constructor===$?k:$(k);var h=i.closest(".question, .answer, div[id^='post-']").find(".comments");var j=h.attr("id").replace(/^comments-/,"");if(f[j]){return f[j]}var g=new e(j,h);f[j]=g;return g}function b(h){var g=(h&&h.post)||document;$("a[id^='comments-link-']",g).click(function(){a(this).addShow()})}function d(h){for(var g in h){if(h.hasOwnProperty(g)){e.prototype[g]=h[g]}}}return{init:b,loadAll:function(g){return a(g).loadAllComments(true)},extendPostUi:d,uiForPost:a}})();StackExchange.share=(function(){function a(d,b,c){if(!window.open(d,b,c)){window.location.href=d}}return{twitter:function(c,d,b){c.click(function(){a("http://twitter.com/share?url="+d+"&ref=twitbtn&text="+b,"sharetwitter","toolbar=1,status=1,resizable=1,scrollbars=1,width=800,height=526")})},facebook:function(c,d,b){c.click(function(){a("http://www.facebook.com/sharer.php?u="+d+"&ref=fbshare&t="+b,"sharefacebook","toolbar=1,status=1,resizable=1,scrollbars=1,width=626,height=436")})}}})();function initTagRenderer(b,a){if(window.tagRenderer){return}window.tagRendererRaw=function(d,f){f=f||"";var e="";if(!f){if(b&&$.inArray(d,b)>-1){e=" required-tag"}else{if(a&&$.inArray(d,a)>-1){e=" moderator-tag"}}}var c="<a class='post-tag"+e+"' href='"+f+"/questions/tagged/"+encodeURIComponent(d)+"' title=\"show questions tagged '"+d+"'\" rel='tag'>"+d+"</a>";return c};window.tagRenderer=function(c,d){return $(tagRendererRaw(c,d))}}function showFadingHelpText(a){a.wrap('<div class="dno" />').show().parent().fadeIn("slow",function(){$(this).children().unwrap()})}function initFadingHelpText(){var a={"wmd-input":"#how-to-format",tagnames:"#how-to-tag","tag-editor":"#how-to-tag",title:"#how-to-title"};var c=$("#wmd-input, #tagnames, #title, .tag-editor input");var b=function(d){var e=$(d);if(e.parent().hasClass("tag-editor")){return a["tag-editor"]}return a[$(d).attr("id")]};c.focus(function(){var d=b(this);c.each(function(){var f=b(this);if(f!=d){$(f).hide()}});var e=$(d);if(!e.is(":visible")){showFadingHelpText(e)}})}$.fn.extend({postId:function(){var a=this.first();if(!a.hasClass("answer")||!a.hasClass("question")){a=a.closest(".answer, .question")}return parseInt(a.find(".vote input")[0].value)}});StackExchange.newsletterAd=(function(){function a(e){var d=$('<div id="lightbox-panel" class="popup" style="display:block"></div>').append('<div class="popup-close"><a title="close this popup (or hit Esc)">&times;</a></div>').append(e);$('<div id="lightbox"></div>').appendTo($("body")).css("height",$(document).height()).fadeIn("fast");d.appendTo($("body")).center().fadeIn("fast").find(".popup-close").click(function(){$("#lightbox, #lightbox-panel").fadeOutAndRemove()})}function c(){var d=StackExchange.options.site.name;var e=$(['<div style="text-align: left;">','<h2 style="margin-bottom: 15px;">Subscribe to the '+d+" weekly newsletter</h2>",'<p><strong><a href="/users/login?returnurl=/newsletter/signup/redirect">Create an account on '+d+'</a> or <a href="/users/login?returnurl=/newsletter/signup/redirect">log in</a> if you already have one.</strong></p>','<form><label for="newsletter-email-input">Or, send newsletter emails to:</label> <input type="text" id="newsletter-email-input" maxlength="100" title="your email address" /> <input type="submit" value="Subscribe" id="newsletter-email-submit" /></form>',"</div>"].join(""));e.find("form").submit(function(){var g=$(this);var f=$.trim(e.find("#newsletter-email-input").val());if(f.length==0){return false}StackExchange.helpers.addSpinner(g);$.ajax({url:"/newsletter/signup/anon",type:"POST",dataType:"json",data:{email:f},success:function(j,h,i){if(j.status=="confirmed"&&!j.error){g.find("#newsletter-email-input").attr("disabled",true);g.find("#newsletter-email-submit").replaceWith('<span style="line-height: 120%; text-align: center;"><strong>Subscribed!</strong></span>');$("#newsletter-signup-container").replaceWith('<div style="line-height: 200%; text-align: center;"><strong>Subscribed!</strong></div>')}else{if(j.status=="unconfirmed"&&!j.error){g.find("#newsletter-email-input").attr("disabled",true);g.find("#newsletter-email-submit").replaceWith('<span style="line-height: 120%; text-align: center;"><strong>Subscribed!</strong></span>');g.append("<br /><br/><p><em>Please click the link in the confirmation email to activate your subscription.</em></p>");$("#newsletter-signup-container").replaceWith('<span style="line-height: 120%;"><strong>Success!</strong> Please click the link in the confirmation email to activate your subscription.</span>')}else{g.showErrorPopup(j.error||"there was a problem signing up for the newsletter<br />please try again later")}}},error:function(j,i,h){g.showErrorPopup("there was a problem signing up for the newsletter<br />please try again later")},complete:function(){StackExchange.helpers.removeSpinner(g)}});return false});a(e)}function b(){$("#newsletter-signup").click(function(){var d=$(this);if(StackExchange.options.user.isAnonymous){c();return false}StackExchange.helpers.addSpinner("#newsletter-signup-container");$.ajax({url:"/newsletter/signup",type:"POST",dataType:"json",success:function(g,e,f){if(g.url){window.location.href=g.url}else{if(g.status=="confirmed"){$("#newsletter-signup-container").replaceWith('<div style="line-height: 200%; text-align: center;"><strong>Subscribed!</strong></div>')}else{if(g.status=="unconfirmed"){$("#newsletter-signup-container").replaceWith('<span style="line-height: 120%;"><strong>Success!</strong> Please click the link in the confirmation email to activate your subscription.</span>')}else{d.parent().showErrorPopup("there was a problem signing up for the newsletter<br />please try again later")}}}},error:function(g,f,e){d.parent().showErrorPopup("there was a problem signing up for the newsletter<br />please try again later")},complete:function(){StackExchange.helpers.removeSpinner("#newsletter-signup-container")}})});$("#newsletter-preview").click(function(){var e=$(window).height();var d=Math.min(600,e-100);var f=['<div id="newsleter-preview-pane" style="overflow: hidden; width: 660px; height: ',d,'px;">','<iframe src="',$(this).attr("href"),'" width="660" height="',d,'" frameborder="0"></iframe>',"</div>"].join("");a(f);return false})}return{init:b}})();(function(b,a,c,d){b.fn.caret=function(e,p){var j,i,k=this[0],n=b.browser.msie;if(typeof e==="object"&&typeof e.start==="number"&&typeof e.end==="number"){j=e.start;i=e.end}else{if(typeof e==="number"&&typeof p==="number"){j=e;i=p}else{if(typeof e==="string"){if((j=k.value.indexOf(e))>-1){i=j+e[a]}else{j=null}}else{if(Object.prototype.toString.call(e)==="[object RegExp]"){e=e.exec(k.value);if(e!=null){j=e.index;i=j+e[0][a]}}}}}if(typeof j!="undefined"){if(n){n=this[0].createTextRange();n.collapse(true);n.moveStart("character",j);n.moveEnd("character",i-j);n.select()}else{this[0].selectionStart=j;this[0].selectionEnd=i}this[0].focus();return this}else{if(n){i=document.selection;if(this[0].tagName.toLowerCase()!="textarea"){n=this.val();j=i[c]()[d]();j.moveEnd("character",n[a]);var m=j.text==""?n[a]:n.lastIndexOf(j.text);j=i[c]()[d]();j.moveStart("character",-n[a]);var o=j.text[a]}else{j=i[c]();i=j[d]();i.moveToElementText(this[0]);i.setEndPoint("EndToEnd",j);m=i.text[a]-j.text[a];o=m+j.text[a]}}else{m=k.selectionStart;o=k.selectionEnd}j=k.value.substring(m,o);return{start:m,end:o,text:j,replace:function(f){return k.value.substring(0,m)+f+k.value.substring(o,k.value[a])}}}}})(jQuery,"length","createRange","duplicate");