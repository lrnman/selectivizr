(function(F,E){var f=F.PIE||(F.PIE={});f.la=function(b){var a,c,d,e,h=arguments;a=1;for(c=h.length;a<c;a++){e=h[a];for(d in e)if(e.hasOwnProperty(d))b[d]=e[d]}return b};f.la(f,{F:"-pie-",va:"Pie",Hc:"pie_",wc:{TD:1,TH:1},Ib:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},Rc:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},Uc:{submit:1,button:1,reset:1},Pb:function(){}});try{E.execCommand("BackgroundImageCache",false,true)}catch(Y){}(function(){for(var b=4,a=E.createElement("div"),
c=a.getElementsByTagName("i");a.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]--\>",c[0];);f.Ea=b;if(b===6)f.F=f.F.replace(/^-/,"");f.U=E.documentMode||f.Ea;a.innerHTML='<v:shape adj="1"/>';b=a.firstChild;b.style.behavior="url(#default#VML)";f.ib=typeof b.adj==="object"})();(function(){var b=0,a={};f.wa={$a:function(c){return c&&c._pieId||(c._pieId="_"+b++)},Dc:function(c,d,e){var h=a[c],k,j;if(h)Object.prototype.toString.call(h)==="[object Array]"?h.push([d,e]):d.call(e,h);else{j=a[c]=[[d,e]];
k=new Image;k.onload=function(){h=a[c]={g:k.width,f:k.height};for(var g=0,l=j.length;g<l;g++)j[g][0].call(j[g][1],h);k.onload=null};k.src=c}}}})();f.ta={yc:{top:0,right:90,bottom:180,left:270},Vb:function(b,a,c,d){b=d.O;d=d.ka;var e;if(b)b=b.Mb();else if(d)if(d[1]){b=d[0]=="top"||d[1]=="top"?a:-a;d=d[0]=="left"||d[1]=="left"?-c:c;b=Math.atan2(d,b)*180/Math.PI}else b=this.yc[d[0]];else b=180;for(;b<0;)b+=360;b%=360;e=f.ta.kc(a/2,c/2,b,b>=180?0:a,b<90||b>270?0:c);d=e[0];e=e[1];a=a-d;c=c-e;return{O:b,
Qb:d,Rb:e,tc:a,uc:c,dc:f.ta.Nb(a,c,d,e)}},kc:function(b,a,c,d,e){if(c===0||c===180)return[b,e];else if(c===90||c===270)return[d,a];else{c=Math.tan((c-90)*Math.PI/180);b=c*b-a;a=-1/c;d=a*d-e;e=a-c;return[(d-b)/e,(c*d-a*b)/e]}},Nb:function(b,a,c,d){b=c-b;a=d-a;return Math.abs(b===0?a:a===0?b:Math.sqrt(b*b+a*a))}};f.H=function(){this.eb=[];this.ac={}};f.H.prototype={db:function(b){var a=f.wa.$a(b),c=this.ac,d=this.eb;if(!(a in c)){c[a]=d.length;d.push(b)}},T:function(){for(var b=this.eb,a=b.length;a--;)b[a]&&
b[a]()}};f.sb=new f.H;f.sb.Zc=function(){var b=this,a;if(!b.qc){a=E.documentElement.currentStyle.getAttribute(f.F+"poll-interval")||250;(function c(){b.T();setTimeout(c,a)})();b.qc=1}};(function(){function b(){f.N.T();F.detachEvent("onunload",b);F.PIE=null}f.N=new f.H;F.attachEvent("onunload",b);f.N.za=function(a,c,d){a.attachEvent(c,d);this.db(function(){a.detachEvent(c,d)})}})();f.Oa=new f.H;f.N.za(F,"onresize",function(){f.Oa.T()});(function(){function b(){f.ub.T()}f.ub=new f.H;f.N.za(F,"onscroll",
b);f.Oa.db(b)})();f.tb=new f.H;f.N.za(E,"onmouseup",function(){f.tb.T()});f.Lc=function(){function b(g){this.o=g}var a=E.createElement("length-calc"),c=E.body||E.documentElement,d=a.style,e={},h=["mm","cm","in","pt","pc"],k=h.length,j={};d.position="absolute";d.top=d.left="-9999px";for(c.appendChild(a);k--;){d.width="100"+h[k];e[h[k]]=a.offsetWidth/100}c.removeChild(a);d.width="1em";b.prototype={Ka:/(px|em|ex|mm|cm|in|pt|pc|%)$/,Wb:function(){var g=this.hc;if(g===void 0)g=this.hc=parseFloat(this.o);
return g},Da:function(){var g=this.zc;if(!g)g=this.zc=(g=this.o.match(this.Ka))&&g[0]||"px";return g},c:function(g,l){var i=this.Wb(),m=this.Da();switch(m){case "px":return i;case "%":return i*(typeof l==="function"?l():l)/100;case "em":return i*this.Ca(g);case "ex":return i*this.Ca(g)/2;default:return i*e[m]}},Ca:function(g){var l=g.currentStyle.fontSize,i,m;if(l.indexOf("px")>0)return parseFloat(l);else if(g.tagName in f.Ib){m=this;i=g.parentNode;return f.j(l).c(i,function(){return m.Ca(i)})}else{g.appendChild(a);
l=a.offsetWidth;a.parentNode===g&&g.removeChild(a);return l}}};b.Yc=function(g){return g/e.pt};f.j=function(g){return j[g]||(j[g]=new b(g))};return b}();f.sa=function(){function b(a){this.D=a}f.j("50%");b.prototype={};return b}();f.Z=function(){function b(a,c){this.g=a;this.f=c}b.prototype={c:function(a,c,d,e,h){var k=this.g,j=this.f,g=c/d;e=e/h;if(k==="contain"){k=e>g?c:d*e;j=e>g?c/e:d}else if(k==="cover"){k=e<g?c:d*e;j=e<g?c/e:d}else if(k==="auto"){j=j==="auto"?h:j.c(a,d);k=j*e}else{k=k.c(a,c);
j=j==="auto"?k/e:j.c(a,d)}return{g:k,f:j}}};b.pb=new b("auto","auto");return b}();f.mb=function(){function b(a){this.o=a}b.prototype={Ka:/[a-z]+$/i,Da:function(){return this.Db||(this.Db=this.o.match(this.Ka)[0].toLowerCase())},Mb:function(){var a=this.yb,c;if(a===undefined){a=this.Da();c=parseFloat(this.o,10);a=this.yb=a==="deg"?c:a==="rad"?c/Math.PI*180:a==="grad"?c/400*360:a==="turn"?c*360:0}return a}};return b}();f.ob=function(){function b(g,l,i){if(i<0)i+=1;else if(i>1)i-=1;return 255*(6*i<1?
g+(l-g)*i*6:2*i<1?l:3*i<2?g+(l-g)*(2/3-i)*6:g)}function a(g){this.o=g}var c={};a.oc=/\s*rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(\d+|\d*\.\d+))?\s*\)\s*/;a.Zb=/\s*hsla?\(\s*(\d*\.?\d+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(,\s*(\d+|\d*\.\d+))?\s*\)\s*/;a.ma={};for(var d="black|0|navy|3k|darkblue|b|mediumblue|1u|blue|1e|darkgreen|jk1|green|5j4|teal|3k|darkcyan|26j|deepskyblue|ad0|darkturquoise|2xe|mediumspringgreen|8nd|lime|va|springgreen|3j|aqua|3k|cyan|0|midnightblue|xunl|dodgerblue|7ogf|lightseagreen|2zsb|forestgreen|2lbs|seagreen|guut|darkslategray|12pk|limegreen|4wkj|mediumseagreen|dwlb|turquoise|5v8f|royalblue|r2p|steelblue|75qr|darkslateblue|2fh3|mediumturquoise|ta9|indigo|32d2|darkolivegreen|emr1|cadetblue|ebu9|cornflowerblue|6z4d|mediumaquamarine|3459|dimgray|3nwf|slateblue|1bok|olivedrab|1opi|slategray|6y5p|lightslategray|9vk9|mediumslateblue|5g0l|lawngreen|27ma|chartreuse|48ao|aquamarine|5w|maroon|18|purple|3k|olive|p6o|gray|3k|lightslateblue|5j7j|skyblue|4q98|lightskyblue|f|blueviolet|3bhk|darkred|15we|darkmagenta|3v|saddlebrown|djc|darkseagreen|69vg|lightgreen|1og1|mediumpurple|3ivc|darkviolet|sfv|palegreen|6zt1|darkorchid|awk|yellowgreen|292e|sienna|7r3v|brown|6sxp|darkgray|6bgf|lightblue|5vlp|greenyellow|7k9|paleturquoise|2pxb|lightsteelblue|169c|powderblue|5jc|firebrick|1rgc|darkgoldenrod|8z55|mediumorchid|2jm0|rosybrown|34jg|darkkhaki|1mfw|silver|49jp|mediumvioletred|8w5h|indianred|8tef|peru|82r|violetred|3ntd|feldspar|212d|chocolate|16eh|tan|ewe|lightgrey|1kqv|palevioletred|6h8g|metle|fnp|orchid|2dj2|goldenrod|abu|crimson|20ik|gainsboro|13mo|plum|12pt|burlywood|1j8q|lightcyan|3794|lavender|8agr|darksalmon|3rsw|violet|6wz8|palegoldenrod|k3g|lightcoral|28k6|khaki|k5o|aliceblue|3n7|honeydew|1dd|azure|f|sandybrown|5469|wheat|1q37|beige|4kp|whitesmoke|p|mintcream|1z9|ghostwhite|46bp|salmon|25bn|antiquewhite|l7p|linen|zz|lightgoldenrodyellow|1yk|oldlace|46qc|red|1gka|magenta|73|fuchsia|0|deeppink|3v8|orangered|9kd|tomato|5zb|hotpink|19p|coral|49o|darkorange|2i8|lightsalmon|41m|orange|w6|lightpink|3i9|pink|1ze|gold|4dx|peachpuff|qh|navajowhite|s4|moccasin|16w|bisque|f|mistyrose|t|blanchedalmond|1d8|papayawhip|so|lavenderblush|80|seashell|zd|cornsilk|ku|lemonchiffon|dt|floralwhite|z|snow|a|yellow|sm|lightyellow|68|ivory|g|white|f".split("|"),
e=0,h=d.length,k=0,j;e<h;e+=2){k+=parseInt(d[e+1],36);j=k.toString(16);a.ma[d[e]]="#000000".slice(0,-j.length)+j}a.prototype={parse:function(){if(!this.ya){var g=this.o,l;if(l=g.match(a.oc)){g=this.hb(+l[1],+l[2],+l[3]);l=l[5]?+l[5]:1}else if(l=g.match(a.Zb)){var i=l[1],m=l[2],o=l[3],t,r;g=Math.round;m/=100;o/=100;if(m){m=o<=0.5?o*(m+1):o+m-o*m;t=o*2-m;i=i%360/360;o=b(t,m,i+1/3);r=b(t,m,i);i=b(t,m,i-1/3)}else o=r=i=o*255;g={nc:g(o),Sb:g(r),Fb:g(i)};g=this.hb(g.nc,g.Sb,g.Fb);l=l[5]?+l[5]:1}else{if(a.ma.hasOwnProperty(l=
g.toLowerCase()))g=a.ma[l];l=g==="transparent"?0:1}this.ya=g;this.Nc=l}},hb:function(g,l,i){return"#"+(g<16?"0":"")+g.toString(16)+(l<16?"0":"")+l.toString(16)+(i<16?"0":"")+i.toString(16)},Lb:function(g){this.parse();return this.ya==="currentColor"?f.I(g.currentStyle.color).Lb(g):this.ya}};f.I=function(g){return c[g]||(c[g]=new a(g))};return a}();f.n=function(){function b(c){this.ja=c;this.ch=0;this.D=[];this.V=0}var a=b.Qa={Y:1,Ma:2,h:4,qb:8,Na:16,L:32,m:64,M:128,ua:256,ba:512,xb:1024,URL:2048};
b.Pa=function(c,d){this.e=c;this.a=d};b.Pa.prototype={Ga:function(){return this.e&a.m||this.e&a.M&&this.a==="0"},C:function(){return this.Ga()||this.e&a.ba}};b.prototype={Cc:/\s/,ic:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,ab:/^\-?[_a-z][\w-]*/i,vc:/^("([^"]*)"|'([^']*)')/,Xb:/^#([\da-f]{6}|[\da-f]{3})/i,Ac:{px:a.m,em:a.m,ex:a.m,mm:a.m,cm:a.m,"in":a.m,pt:a.m,pc:a.m,deg:a.Y,rad:a.Y,grad:a.Y},Kb:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(c){function d(o,t){o=new b.Pa(o,
t);if(!c){l.D.push(o);l.V++}return o}function e(){l.V++;return null}var h,k,j,g,l=this;if(this.V<this.D.length)return this.D[this.V++];for(;this.Cc.test(this.ja.charAt(this.ch));)this.ch++;if(this.ch>=this.ja.length)return e();k=this.ch;h=this.ja.substring(this.ch);j=h.charAt(0);switch(j){case "#":if(g=h.match(this.Xb)){this.ch+=g[0].length;return d(a.h,g[0])}break;case '"':case "'":if(g=h.match(this.vc)){this.ch+=g[0].length;return d(a.xb,g[2]||g[3]||"")}break;case "/":case ",":this.ch++;return d(a.ua,
j);case "u":if(g=h.match(this.url)){this.ch+=g[0].length;return d(a.URL,g[2]||g[3]||g[4]||"")}}if(g=h.match(this.ic)){j=g[0];this.ch+=j.length;if(h.charAt(j.length)==="%"){this.ch++;return d(a.ba,j+"%")}if(g=h.substring(j.length).match(this.ab)){j+=g[0];this.ch+=g[0].length;return d(this.Ac[g[0].toLowerCase()]||a.qb,j)}return d(a.M,j)}if(g=h.match(this.ab)){j=g[0];this.ch+=j.length;if(j.toLowerCase()in f.ob.ma||j==="currentColor"||j==="transparent")return d(a.h,j);if(h.charAt(j.length)==="("){this.ch++;
if(j.toLowerCase()in this.Kb){h=function(o){return o&&o.e&a.M};g=function(o){return o&&o.e&(a.M|a.ba)};var i=function(o,t){return o&&o.a===t},m=function(){return l.next(1)};if((j.charAt(0)==="r"?g(m()):h(m()))&&i(m(),",")&&g(m())&&i(m(),",")&&g(m())&&(j==="rgb"||j==="hsa"||i(m(),",")&&h(m()))&&i(m(),")"))return d(a.h,this.ja.substring(k,this.ch));return e()}return d(a.Na,j)}return d(a.L,j)}this.ch++;return d(a.Ma,j)},k:function(){return this.D[this.V-- -2]},all:function(){for(;this.next(););return this.D},
W:function(c,d){for(var e=[],h,k;h=this.next();){if(c(h)){k=true;this.k();break}e.push(h)}return d&&!k?null:e}};return b}();f.nb=function(b){this.d=b};f.nb.prototype={z:0,Za:function(){var b=this.d,a=b.getBoundingClientRect(),c=f.U===9,d=f.Ea===7,e=a.right-a.left;return{x:a.left,y:a.top,g:c||d?b.offsetWidth:e,f:c||d?b.offsetHeight:a.bottom-a.top,Vc:d&&e?b.offsetWidth/e:1}},Ya:function(){return this.z?this.ea||(this.ea=this.Za()):this.Za()},ec:function(){++this.z},Bc:function(){if(!--this.z){if(this.ea)this.Oc=
this.ea;this.ea=null}}};(function(){function b(a){var c=f.wa.$a(a);return function(){if(this.z){var d=this.Sa||(this.Sa={});return c in d?d[c]:(d[c]=a.call(this))}else return a.call(this)}}f.i={z:0,na:function(a){function c(d){this.d=d;this.Ra=this.J()}f.la(c.prototype,f.i,a);c.Cb={};return c},s:function(){var a=this.J(),c=this.constructor.Cb;return a?a in c?c[a]:(c[a]=this.oa(a)):null},J:b(function(){var a=this.d,c=this.constructor,d=a.style;a=a.currentStyle;var e=this.Aa,h=this.Ja,k=c.Ab||(c.Ab=
f.F+e);c=c.Bb||(c.Bb=f.va+h.charAt(0).toUpperCase()+h.substring(1));return d[c]||a.getAttribute(k)||d[h]||a.getAttribute(e)}),v:b(function(){return!!this.s()}),Wa:b(function(){var a=this.J(),c=a!==this.Ra;this.Ra=a;return c}),R:b,ec:function(){++this.z},Bc:function(){--this.z||delete this.Sa}}})();f.Ec=f.i.na({Aa:f.F+"background",Ja:f.va+"Background",Eb:{scroll:1,fixed:1,local:1},qa:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},gb:{"padding-box":1,"border-box":1,"content-box":1},lc:{top:1,right:1,
bottom:1,left:1,center:1},sc:{contain:1,cover:1},xc:{top:1,bottom:1},fc:{left:1,right:1},pa:{$:"backgroundClip",h:"backgroundColor",G:"backgroundImage",aa:"backgroundOrigin",p:"backgroundPosition",q:"backgroundRepeat",da:"backgroundSize"},oa:function(b){function a(n){return n&&(n.C()&&f.j(n.a)||n.a==="auto"&&"auto")}var c=this.d.currentStyle,d,e,h,k=f.n.Qa,j=k.ua,g=k.L,l=k.h,i,m,o=0,t=this.lc,r,s,p,u,x={B:[]};if(this.Ba()){d=new f.n(b);for(h={};e=d.next();){i=e.e;m=e.a;if(!h.u&&i&k.Na&&m==="linear-gradient"){r=
{K:[],u:m};for(s={};e=d.next();){i=e.e;m=e.a;if(i&k.Ma&&m===")"){s.color&&r.K.push(s);r.K.length>1&&f.la(h,r);break}if(i&l){if(r.O||r.ka){e=d.k();if(e.e!==j)break;d.next()}s={color:f.I(m)};e=d.next();if(e.C())s.fb=f.j(e.a);else d.k()}else if(i&k.Y&&!r.O&&!r.ka&&!s.color&&!r.K.length)r.O=new f.mb(e.a);else if(i&k.L&&m==="to"&&!r.ka&&!r.O&&!s.color&&!r.K.length){p=this.xc;u=this.fc;e=d.W(function(n){return!(n&&n.e&k.L&&(n.a in p||n.a in u))});i=e.length;e=[e[0]&&e[0].a,e[1]&&e[1].a];if(i<1||i>2||i>
1&&(e[0]in p&&e[1]in p||e[0]in u&&e[1]in u))break;r.ka=e}else if(i&j&&m===","){if(s.color){r.K.push(s);s={}}}else break}}else if(!h.u&&i&k.URL){h.bb=m;h.u="image"}else if((e&&e.C()||e.e&g&&e.a in t)&&!h.Q){d.k();h.Q=new f.sa(d.W(function(n){return!(n&&n.C()||n.e&g&&n.a in t)},false))}else if(i&g)if(m in this.qa&&!h.Fa)h.Fa=m;else if(m in this.gb&&!h.ga){h.ga=m;if((e=d.next())&&e.e&g&&e.a in this.gb)h.fa=e.a;else{h.fa=m;d.k()}}else if(m in this.Eb&&!h.Ua)h.Ua=m;else return null;else if(i&l&&!x.color)x.color=
f.I(m);else if(i&j&&m==="/"&&!h.ha&&h.Q){e=d.next();if(e.e&g&&e.a in this.sc)h.ha=new f.Z(e.a);else if(r=a(e)){s=a(d.next());if(!s){s=r;d.k()}h.ha=new f.Z(r,s)}else return null}else if(i&j&&m===","&&h.u){h.Ia=b.substring(o,d.ch-1);o=d.ch;x.B.push(h);h={}}else return null}if(h.u){h.Ia=b.substring(o);x.B.push(h)}x.Jb=h.fa}else this.kb(f.U<9?function(){var n=this.pa,q=c[n.p+"X"],y=c[n.p+"Y"],v=c[n.G],w=c[n.h];if(w!=="transparent")x.color=f.I(w);if(v!=="none")x.B=[{u:"image",bb:(new f.n(v)).next().a,
Fa:c[n.q],Q:new f.sa((new f.n(q+" "+y)).all())}]}:function(){var n=this.pa,q=/\s*,\s*/,y=c[n.G].split(q),v=c[n.h],w,B,C,D,z,A;if(v!=="transparent")x.color=f.I(v);if((D=y.length)&&y[0]!=="none"){v=c[n.q].split(q);w=c[n.p].split(q);B=c[n.aa].split(q);C=c[n.$].split(q);n=c[n.da].split(q);x.B=[];for(q=0;q<D;q++)if((z=y[q])&&z!=="none"){A=n[q].split(" ");x.B.push({Ia:z+" "+v[q]+" "+w[q]+" / "+n[q]+" "+B[q]+" "+C[q],u:"image",bb:(new f.n(z)).next().a,Fa:v[q],Q:new f.sa((new f.n(w[q])).all()),ga:B[q],fa:C[q],
ha:new f.Z(A[0],A[1])})}}});return x.color||x.B[0]?x:null},kb:function(b){var a=f.U>8,c=this.pa,d=this.d.runtimeStyle,e=d[c.G],h=d[c.h],k=d[c.q],j,g,l,i;if(e)d[c.G]="";if(h)d[c.h]="";if(k)d[c.q]="";if(a){j=d[c.$];g=d[c.aa];i=d[c.p];l=d[c.da];if(j)d[c.$]="";if(g)d[c.aa]="";if(i)d[c.p]="";if(l)d[c.da]=""}b=b.call(this);if(e)d[c.G]=e;if(h)d[c.h]=h;if(k)d[c.q]=k;if(a){if(j)d[c.$]=j;if(g)d[c.aa]=g;if(i)d[c.p]=i;if(l)d[c.da]=l}return b},J:f.i.R(function(){return this.Ba()||this.kb(function(){var b=this.d.currentStyle,
a=this.pa;return b[a.h]+" "+b[a.G]+" "+b[a.q]+" "+b[a.p+"X"]+" "+b[a.p+"Y"]})}),Ba:f.i.R(function(){var b=this.d;return b.style[this.Ja]||b.currentStyle.getAttribute(this.Aa)}),Tb:function(b,a,c,d){var e=this.d,h=a.Ya();a=h.g;h=h.f;if(b!=="border-box")if((c=c.s())&&(c=c.X)){a-=c.l.c(e)+c.r.c(e);h-=c.t.c(e)+c.b.c(e)}if(b==="content-box")if(b=d.s()){a-=b.l.c(e)+b.r.c(e);h-=b.t.c(e)+b.b.c(e)}return{g:a,f:h}},cc:function(){var b=0;if(f.Ea<7){b=this.d;b=""+(b.style[f.va+"PngFix"]||b.currentStyle.getAttribute(f.F+
"png-fix"))==="true"}return b},v:f.i.R(function(){return(this.Ba()||this.cc())&&!!this.s()})});f.Gc=f.i.na({rc:["Top","Right","Bottom","Left"],gc:{thin:"1px",medium:"3px",thick:"5px"},oa:function(){var b={},a={},c={},d=false,e=true,h=true,k=true;this.lb(function(){for(var j=this.d.currentStyle,g=0,l,i,m,o,t,r,s;g<4;g++){m=this.rc[g];s=m.charAt(0).toLowerCase();l=a[s]=j["border"+m+"Style"];i=j["border"+m+"Color"];m=j["border"+m+"Width"];if(g>0){if(l!==o)h=false;if(i!==t)e=false;if(m!==r)k=false}o=
l;t=i;r=m;c[s]=f.I(i);m=b[s]=f.j(a[s]==="none"?"0":this.gc[m]||m);if(m.c(this.d)>0)d=true}});return d?{X:b,$c:a,Pc:c,bd:k,Qc:e,ad:h}:null},J:f.i.R(function(){var b=this.d,a=b.currentStyle,c;b.tagName in f.wc&&b.offsetParent.currentStyle.borderCollapse==="collapse"||this.lb(function(){c=a.borderWidth+"|"+a.borderStyle+"|"+a.borderColor});return c}),lb:function(b){var a=this.d.runtimeStyle,c=a.borderWidth,d=a.borderColor;if(c)a.borderWidth="";if(d)a.borderColor="";b=b.call(this);if(c)a.borderWidth=
c;if(d)a.borderColor=d;return b}});f.Fc=f.i.na({Aa:"border-image",Ja:"borderImage",qa:{stretch:1,round:1,repeat:1,space:1},oa:function(b){var a=null,c,d,e,h,k,j,g=0,l=f.n.Qa,i=l.L,m=l.M,o=l.ba;if(b){c=new f.n(b);a={};for(var t=function(p){return p&&p.e&l.ua&&p.a==="/"},r=function(p){return p&&p.e&i&&p.a==="fill"},s=function(){h=c.W(function(p){return!(p.e&(m|o))});if(r(c.next())&&!a.fill)a.fill=true;else c.k();if(t(c.next())){g++;k=c.W(function(p){return!p.C()&&!(p.e&i&&p.a==="auto")});if(t(c.next())){g++;
j=c.W(function(p){return!p.Ga()})}}else c.k()};b=c.next();){d=b.e;e=b.a;if(d&(m|o)&&!h){c.k();s()}else if(r(b)&&!a.fill){a.fill=true;s()}else if(d&i&&this.qa[e]&&!a.repeat){a.repeat={f:e};if(b=c.next())if(b.e&i&&this.qa[b.a])a.repeat.La=b.a;else c.k()}else if(d&l.URL&&!a.src)a.src=e;else return null}if(!a.src||!h||h.length<1||h.length>4||k&&k.length>4||g===1&&k.length<1||j&&j.length>4||g===2&&j.length<1)return null;if(!a.repeat)a.repeat={f:"stretch"};if(!a.repeat.La)a.repeat.La=a.repeat.f;b=function(p,
u){return{t:u(p[0]),r:u(p[1]||p[0]),b:u(p[2]||p[0]),l:u(p[3]||p[1]||p[0])}};a.slice=b(h,function(p){return f.j(p.e&m?p.a+"px":p.a)});if(k&&k[0])a.X=b(k,function(p){return p.C()?f.j(p.a):p.a});if(j&&j[0])a.Wc=b(j,function(p){return p.Ga()?f.j(p.a):p.a})}return a}});f.Mc=f.i.na({oa:function(b){b=new f.n(b);for(var a=[],c;(c=b.next())&&c.C();)a.push(f.j(c.a));return a.length>0&&a.length<5?{t:a[0],r:a[1]||a[0],b:a[2]||a[0],l:a[3]||a[1]||a[0]}:null},J:f.i.R(function(){var b=this.d,a=b.runtimeStyle,c=a.padding;
if(c)a.padding="";b=b.currentStyle.padding;if(c)a.padding=c;return b})});f.ca={Ha:function(b){function a(c,d,e,h){this.d=c;this.Va=d;this.w=e;this.parent=h}f.la(a.prototype,f.ca,b);return a},cb:function(){return false},mc:f.Pb,jb:function(){this.v()?this.Xa():this.S()},Yb:function(){this.d.runtimeStyle.borderColor="transparent"},S:function(){}};f.Kc=f.ca.Ha({jc:/^,+|,+$/g,bc:/,+/g,ra:function(b,a){(this.xa||(this.xa=[]))[b]=a||void 0},jb:function(){var b=this.xa,a;if(b&&(a=b.join(",").replace(this.jc,
"").replace(this.bc,","))!==this.zb)this.zb=this.d.runtimeStyle.background=a},S:function(){this.d.runtimeStyle.background="";delete this.xa}});f.Ic=f.ca.Ha({Ob:E.createElement("canvas"),P:1,cb:function(){return this.w.Ta.Wa()},v:function(){var b=this.w;return b.Ta.v()||b.ia.v()},Xa:function(){var b=this.w,a=b.Ta,c=a.s(),d,e,h=0,k,j;if(c){d=[];if(e=c.B)for(;k=e[h++];)if(k.u==="linear-gradient"){j=a.Tb(d.ga,this.Va,b.Hb,b.Xc);j=(k.ha||f.Z.pb).c(this.d,j.g,j.f,j.g,j.f);d.push("url("+this.Ub(k,j.g,j.f)+
") "+this.Gb(k.Q)+" / "+j.g+"px "+j.f+"px "+(k.Ua||"")+" "+(k.ga||"")+" "+(k.fa||""))}else d.push(k.Ia);if(c.color)d.push(c.color.o+" "+(c.Jb||""));this.parent.ra(this.P,d.join(","))}},Gb:function(b){return b?b.D.map(function(a){return a.a}).join(" "):"0 0"},Ub:function(b,a,c){var d=this.d,e=b.K,h=e.length,k=f.ta.Vb(d,a,c,b);b=k.dc;var j=this.Ob,g=j.getContext("2d");k=g.createLinearGradient(k.tc,k.uc,k.Qb,k.Rb);var l=[],i,m,o;for(i=0;i<h;i++)l.push(e[i].fb?e[i].fb.c(d,b):i===0?0:i===h-1?b:null);for(i=
1;i<h;i++)if(l[i]===null){m=l[i-1];d=i;do o=l[++d];while(o===null);l[i]=m+(o-m)/(d-i+1)}for(i=0;i<h;i++)k.addColorStop(l[i]/b,e[i].color.o);j.width=a;j.height=c;g.fillStyle=k;g.fillRect(0,0,a,c);return j.toDataURL()},S:function(){this.parent.ra(this.P)}});f.Jc=f.ca.Ha({q:"repeat",wb:"stretch",vb:"round",P:0,cb:function(){return this.w.ia.Wa()},v:function(){return this.w.ia.v()},Xa:function(){var b=this,a=b.w.ia.s(),c=b.w.Hb.s(),d=b.Va.Ya(),e=a.repeat,h=e.f,k=e.La,j=b.d,g=0;f.wa.Dc(a.src,function(l){function i(L,
M,Q,R,U,V,W,X,N,O){S.push('<pattern patternUnits="userSpaceOnUse" id="pattern'+P+'" x="'+(h===p?L+Q/2-N/2:L)+'" y="'+(k===p?M+R/2-O/2:M)+'" width="'+N+'" height="'+O+'"><svg width="'+N+'" height="'+O+'" viewBox="'+U+" "+V+" "+W+" "+X+'" preserveAspectRatio="none"><image xlink:href="'+s+'" x="0" y="0" width="'+t+'" height="'+r+'" /></svg></pattern>');T.push('<rect x="'+L+'" y="'+M+'" width="'+Q+'" height="'+R+'" fill="url(#pattern'+P+')" />');P++}var m=d.g,o=d.f,t=l.g,r=l.f,s=b.$b(a.src,t,r),p=b.q,
u=b.wb;l=b.vb;var x=Math.ceil,n=f.j("0"),q=a.X||(c?c.X:{t:n,r:n,b:n,l:n});n=q.t.c(j);var y=q.r.c(j),v=q.b.c(j);q=q.l.c(j);var w=a.slice,B=w.t.c(j),C=w.r.c(j),D=w.b.c(j);w=w.l.c(j);var z=m-q-y,A=o-n-v,J=t-w-C,K=r-B-D,G=h===u?z:J*n/B,H=k===u?A:K*y/C,I=h===u?z:J*v/D;u=k===u?A:K*q/w;var S=[],T=[],P=0;if(h===l){G-=(G-(z%G||G))/x(z/G);I-=(I-(z%I||I))/x(z/I)}if(k===l){H-=(H-(A%H||H))/x(A/H);u-=(u-(A%u||u))/x(A/u)}l=['<svg width="'+m+'" height="'+o+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'];
i(0,0,q,n,0,0,w,B,q,n);i(q,0,z,n,w,0,J,B,G,n);i(m-y,0,y,n,t-C,0,C,B,y,n);i(0,n,q,A,0,B,w,K,q,u);if(a.fill)i(q,n,z,A,w,B,J,K,G||I||J,u||H||K);i(m-y,n,y,A,t-C,B,C,K,y,H);i(0,o-v,q,v,0,r-D,w,D,q,v);i(q,o-v,z,v,w,r-D,J,D,I,v);i(m-y,o-v,y,v,t-C,r-D,C,D,y,v);l.push("<defs>"+S.join("\n")+"</defs>"+T.join("\n")+"</svg>");b.parent.ra(b.P,"url(data:image/svg+xml,"+escape(l.join(""))+") no-repeat border-box border-box");g&&b.parent.jb()},b);g=1},$b:function(){var b={};return function(a,c,d){var e=b[a],h;if(!e){e=
new Image;h=E.createElement("canvas");e.src=a;h.width=c;h.height=d;h.getContext("2d").drawImage(e,0,0);e=b[a]=h.toDataURL()}return e}}(),mc:function(){if(this.v()){var b=this.d,a=b.runtimeStyle,c=this.w.ia.s().X;a.borderStyle="solid";if(c){a.borderTopWidth=c.t.c(b)+"px";a.borderRightWidth=c.r.c(b)+"px";a.borderBottomWidth=c.b.c(b)+"px";a.borderLeftWidth=c.l.c(b)+"px"}this.Yb()}},S:function(){var b=this.d.runtimeStyle;this.parent.ra(this.P);b.borderColor=b.borderStyle=b.borderWidth=""}});f.version=
"2.0beta2-SNAPSHOT";f.supportsVML=f.ib;f.attach=function(b){if(f.U===9||f.U<9&&f.ib)f.rb.Sc(b).Tc()};f.detach=function(b){f.rb.S(b)}})(window,document);
