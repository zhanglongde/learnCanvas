(function(e,t){var n=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),r={handleEvent:function(t){t=t?t:e.event;switch(t.type){}}},i={},s=function(e){return{options:{dom:null,domscore:null,upsource:null,horizontal:0,vertical:0,w:10,h:10,point:{},arr1:[],arr2:[],score:[2,4,6,8,10,12,14],img:["http://www.sinaimg.cn/qc/2014/1.png","http://www.sinaimg.cn/qc/2014/2.png","http://www.sinaimg.cn/qc/2014/3.png","http://www.sinaimg.cn/qc/2014/4.png","http://www.sinaimg.cn/qc/2014/5.png","http://www.sinaimg.cn/qc/2014/6.png","http://www.sinaimg.cn/qc/2014/7.png","http://www.sinaimg.cn/qc/2014/8.png","http://www.sinaimg.cn/qc/2014/9.png","http://www.sinaimg.cn/qc/2014/10.png","http://www.sinaimg.cn/qc/2014/11.png"],code:["自行车","奥拓","桑塔纳","福克斯","迈腾","奥迪A4","宝马5系","特斯拉","保时捷","法拉利",'<span style="font-size:15px">兰博基尼</span>'],color:["#b1cce1","#5675cf","#0394d7","#02aec8","#34a392","#56c8bc","#8acc91","#60c86d","#97b56f","#afc397","#c7bf7e"]},init:function(e){var t=this.options;for(var n in t)t[n]=e[n]?e[n]:t[n]},setHTML:function(e,n){this.options.horizontal=e,this.options.vertical=n;var r=this.options.dom.clientWidth,i=this.options.dom.clientHeight,s=(r-(1+e)*this.options.w)/e,o=(i-(1+n)*this.options.h)/n,u;for(var a=0;a<e;a++)for(var f=0;f<n;f++)u=t.createElement("div"),u.style.width=s+"px",u.style.height=o+"px",u.style.top=f*o+this.options.w*(f+1)+"px",u.style.left=a*s+this.options.h*(a+1)+"px",u.setAttribute("class","game_list"),u.setAttribute("i",a),u.setAttribute("j",f),u.setAttribute("level","-1"),u.className="game_list",this.options.dom.appendChild(u);this.options.domscore.innerHTML=this.options.code[0],this.options.domscore.setAttribute("img",this.options.img[0])},resize:function(){var e=this.options.dom.clientWidth,t=this.options.dom.clientHeight,n=(e-(1+this.options.horizontal)*this.options.w)/this.options.horizontal,r=(t-(1+this.options.vertical)*this.options.h)/this.options.vertical;for(var i=0;i<this.options.horizontal;i++)for(var s=0;s<this.options.vertical;s++){var o=this.getDiv(i,s),u=this.getP(i,s);o!=null&&(o.style.width=n+"px",o.style.height=r+"px",o.style.top=s*r+this.options.w*(s+1)+"px",o.style.left=i*n+this.options.h*(i+1)+"px",u!=null&&(u.style.WebkitTransform="translate("+(i*n+this.options.h*(i+1))+"px,"+(s*r+this.options.w*(s+1))+"px)",u.style.MozTransform="translate("+(i*n+this.options.h*(i+1))+"px,"+(s*r+this.options.w*(s+1))+"px)",u.style.OTransform="translate("+(i*n+this.options.h*(i+1))+"px,"+(s*r+this.options.w*(s+1))+"px)",u.style.MsTransform="translate("+(i*n+this.options.h*(i+1))+"px,"+(s*r+this.options.w*(s+1))+"px)",u.style.Transform="translate("+(i*n+this.options.h*(i+1))+"px,"+(s*r+this.options.w*(s+1))+"px)",u.style.width=n+"px",u.style.height=r+"px",u.style.lineHeight=r+"px"))}},setRandom:function(e){var n=this.options.dom.getElementsByTagName("div"),r=[];for(var i=0;i<n.length;i++)n[i].getAttribute("level")=="-1"&&r.push(n[i]);if(r.length<=0)return;for(var i=0;i<e;i++){var s=parseInt(Math.random()*r.length);r[s].setAttribute("level","0");var o=t.createElement("p");o.style.background=this.options.color[0],o.innerHTML=this.options.code[0],o.style.WebkitTransform="translate("+r[s].style.left+","+r[s].style.top+")",o.style.MozTransform="translate("+r[s].style.left+","+r[s].style.top+")",o.style.OTransform="translate("+r[s].style.left+","+r[s].style.top+")",o.style.MsTransform="translate("+r[s].style.left+","+r[s].style.top+")",o.style.Transform="translate("+r[s].style.left+","+r[s].style.top+")",o.style.width=r[s].style.width,o.style.height=r[s].style.height,o.style.lineHeight=r[s].style.height,o.setAttribute("i",r[s].getAttribute("i")),o.setAttribute("j",r[s].getAttribute("j")),o.setAttribute("level",r[s].getAttribute("level")),this.options.dom.appendChild(o),r.splice(s,1);if(r.length<=0)break}},checkAdd:function(){var e=!0,t=this.options.dom.getElementsByTagName("div");for(var n=0;n<t.length;n++)if(t[n].getAttribute("level")=="-1"){e=!1;break}return e},move:function(e,t){var n=this.getP(e.getAttribute("i"),e.getAttribute("j"));t.setAttribute("level",e.getAttribute("level")),n.setAttribute("i",t.getAttribute("i")),n.setAttribute("j",t.getAttribute("j")),n.setAttribute("level",t.getAttribute("level")),n.style.WebkitTransform="translate("+t.style.left+","+t.style.top+")",n.style.MozTransform="translate("+t.style.left+","+t.style.top+")",n.style.OTransform="translate("+t.style.left+","+t.style.top+")",n.style.MsTransform="translate("+t.style.left+","+t.style.top+")",n.style.Transform="translate("+t.style.left+","+t.style.top+")",e.setAttribute("level","-1")},merge:function(e,t){var n=this.getP(e.getAttribute("i"),e.getAttribute("j")),r=this.getP(t.getAttribute("i"),t.getAttribute("j"));t.setAttribute("level",parseInt(e.getAttribute("level"))+1);var i=this.options.domscore.innerHTML;i||(this.options.domscore.innerHTML=this.options.code[0]),this.options.domscore.innerHTML=i,n.setAttribute("i",t.getAttribute("i")),n.setAttribute("j",t.getAttribute("j")),n.setAttribute("level",t.getAttribute("level")),n.style.WebkitTransform="translate("+t.style.left+","+t.style.top+")",n.style.MozTransform="translate("+t.style.left+","+t.style.top+")",n.style.OTransform="translate("+t.style.left+","+t.style.top+")",n.style.MsTransform="translate("+t.style.left+","+t.style.top+")",n.style.Transform="translate("+t.style.left+","+t.style.top+")",n.style.background=this.options.color[parseInt(t.getAttribute("level"))],n.innerHTML=this.options.code[parseInt(t.getAttribute("level"))],this.options.dom.removeChild(r),e.setAttribute("level","-1");var s=this.options.dom.getElementsByTagName("p"),o=0;for(var u=0;u<s.length;u++)parseInt(s[u].getAttribute("level"))>o&&(o=parseInt(s[u].getAttribute("level")));this.options.domscore.setAttribute("level",o),this.options.domscore.setAttribute("img",this.options.img[o]),this.options.domscore.innerHTML=this.options.code[o]},dd:function(e,t){t=typeof t=="undefined"?!1:!0;var n=0,r=0,i=this.options.dom.getElementsByTagName("div"),s=this.options.dom.getElementsByTagName("p"),o=this.options.horizontal,u="asc",a=1;if(e==3||e==4)o=this.options.vertical,a=0;if(e==2||e==3)u="desc";for(var f=0;f<o;f++){var l=this.getHorizontal(a,f,u);for(var c=0;c<l.length;c++)for(var h=c+1;h<l.length;h++)if(l[c].getAttribute("level")=="-1")l[h].getAttribute("level")!="-1"&&(t||(this.move(l[h],l[c]),r++),n++);else{if(l[c].getAttribute("level")==l[h].getAttribute("level")&&parseInt(l[c].getAttribute("level"))!=this.options.color.length-1){t||(this.merge(l[h],l[c]),r++),n++;break}if(l[h].getAttribute("level")!="-1")break}}var p=this;return t||(setTimeout(function(){var e=p.getContinue();if(p.dd(1,true)+p.dd(2,true)+p.dd(3,true)+p.dd(4,true)==0||e){document.getElementById("header").style.display="none",document.getElementById("game_body").style.display="none",document.getElementById("foot").style.position="fixed",document.getElementById("foot").style.display="block";var t=p.options.domscore.getAttribute("level");document.getElementById("resultname").innerHTML=p.options.code[t],document.getElementById("resultIMG").src=p.options.img[t],document.getElementById("result").style.display="block"}},600),r!=0&&setTimeout(function(){p.setRandom(1)},500)),n},getContinue:function(){var e=!1,t=this.options.dom.getElementsByTagName("p");for(var n=0;n<t.length;n++){if(parseInt(t[n].getAttribute("level"))==this.options.code.length-1){document.getElementById("result").getElementsByTagName("li")[0].innerHTML="您获胜了",e=!0;break}document.getElementById("result").getElementsByTagName("li")[0].innerHTML="GAME OVER"}return e},getP:function(e,t){var n=null,r=this.options.dom.getElementsByTagName("p");for(var i=0;i<r.length;i++)if(r[i].getAttribute("i")==e&&r[i].getAttribute("j")==t)return r[i];return n},getDiv:function(e,t){var n=null,r=this.options.dom.getElementsByTagName("div");for(var i=0;i<r.length;i++)if(r[i].getAttribute("i")==e&&r[i].getAttribute("j")==t)return r[i];return n},getHorizontal:function(e,t,n){var r="i",i="j";e==1&&(r="j",i="i");var s=[],o=this.options.dom.getElementsByTagName("div");for(var u=0;u<o.length;u++)o[u].getAttribute(r)==t&&s.push(o[u]);for(var a=0;a<s.length;a++)for(var f=a;f<s.length;f++){var l;n=="asc"?parseInt(s[a].getAttribute(i))>parseInt(s[f].getAttribute(i))&&(l=s[f],s[f]=s[a],s[a]=l):parseInt(s[a].getAttribute(i))<parseInt(s[f].getAttribute(i))&&(l=s[f],s[f]=s[a],s[a]=l)}return s},clear:function(){var e=this.options.dom.getElementsByTagName("div"),t=this.options.dom.getElementsByTagName("p");for(var n=0;n<e.length;n++)e[n].setAttribute("level","-1");for(var r=t.length-1;r>=0;r--)this.options.dom.removeChild(t[r])},reset:function(){this.clear(),this.setRandom(2),document.getElementById("header").style.display="block",document.getElementById("game_body").style.display="block",document.getElementById("result").style.display="none",document.getElementById("foot").style.position="static",document.getElementById("foot").style.display="none",this.options.domscore.innerHTML=this.options.code[0]},bind:function(e){var r=this;n?(this.options.dom.addEventListener("touchstart",function(e){var t=e.touches[0];return r.options.point.x1=Number(t.pageX),r.options.point.y1=Number(t.pageY),e.preventDefault(),!1},!1),this.options.dom.addEventListener("touchmove",function(e){var t=e.touches[0];return r.options.point.x2=Number(t.pageX),r.options.point.y2=Number(t.pageY),e.preventDefault(),!1},!1),this.options.dom.addEventListener("touchend",function(t){var n=t.touches[0];return Math.abs(r.options.point.x1-r.options.point.x2)>Math.abs(r.options.point.y1-r.options.point.y2)?Math.abs(r.options.point.x1-r.options.point.x2)>20&&(r.options.point.x1>r.options.point.x2?e.dd(1):e.dd(2)):Math.abs(r.options.point.y1-r.options.point.y2)>20&&(r.options.point.y1>r.options.point.y2?e.dd(4):e.dd(3)),!1},!1)):t.addEventListener?this.options.dom.addEventListener("mousedown",function(n){r.options.point.x1=n.clientX,r.options.point.y1=n.clientY,t.addEventListener("mousemove",function(n){r.options.point.x2=n.clientX,r.options.point.y2=n.clientY,Math.abs(r.options.point.x1-r.options.point.x2)>Math.abs(r.options.point.y1-r.options.point.y2)?Math.abs(r.options.point.x1-r.options.point.x2)>20&&(r.options.point.x1>r.options.point.x2?(e.dd(1),t.removeEventListener("mousemove",arguments.callee,!1)):(e.dd(2),t.removeEventListener("mousemove",arguments.callee,!1))):Math.abs(r.options.point.y1-r.options.point.y2)>20&&(r.options.point.y1>r.options.point.y2?(e.dd(4),t.removeEventListener("mousemove",arguments.callee,!1)):(e.dd(3),t.removeEventListener("mousemove",arguments.callee,!1)))},!1)},!1):t.attachEvent&&this.options.dom.attachEvent("onmousedown",function(n){r.options.point.x1=n.clientX,r.options.point.y1=n.clientY,t.attachEvent("onmousemove",function(n){r.options.point.x2=n.clientX,r.options.point.y2=n.clientY,Math.abs(r.options.point.x1-r.options.point.x2)>Math.abs(r.options.point.y1-r.options.point.y2)?Math.abs(r.options.point.x1-r.options.point.x2)>20&&(r.options.point.x1>r.options.point.x2?(e.dd(1),t.detachEvent("onmousemove",arguments.callee)):(e.dd(2),t.detachEvent("onmousemove",arguments.callee))):Math.abs(r.options.point.y1-r.options.point.y2)>20&&(r.options.point.y1>r.options.point.y2?(e.dd(4),t.detachEvent("onmousemove",arguments.callee)):(e.dd(3),t.detachEvent("onmousemove",arguments.callee)))})})}}},o=function(){var e=new s,n=document.body.getBoundingClientRect().width-20,r=t.getElementById("game_body"),i=t.getElementById("game_score"),o=t.getElementById("game_UPscore");e.init({dom:r,domscore:i,upsource:o}),e.setHTML(4,4),e.setRandom(2),e.bind(e),t.addEventListener?(t.getElementById("reset").addEventListener("click",function(){e.reset()},!1),window.addEventListener("resize",function(){e.resize()},!1)):(t.getElementById("reset").attachEvent("onclick",function(){e.reset()}),window.attachEvent("onresize",function(){e.resize()}))};t.body?o():t.addEventListener?t.addEventListener("DOMContentLoaded",function(){t.removeEventListener("DOMContentLoaded",arguments.callee,!1),o()},!1):t.attachEvent&&t.attachEvent("onreadystatechange",function(){t.detachEvent("onreadystatechange",arguments.callee),o()})})(window,document)