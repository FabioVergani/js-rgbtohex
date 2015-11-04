var rgb={
 rgx:/rgb(a?)\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i,
 tohex:function(s){
  var f,r,g,b,m=s.match(this.rgx);
  if(m!==null){
	m=m.slice(1);m[0]='#';r=m[1];g=m[2];b=m[3];
	f=function(s){return('0'+parseInt(s).toString(16)).slice(-2);};
	if(r===g && g===b){r=f(r);g=r.charAt(1);b=r.charAt(2);}else{r=f(r);g=f(g);b=f(b);};
	m[1]=r;m[2]=g;m[3]=b;
	return m.join('');
  };
 }
};
//console.log(rgb.tohex('rgb( 0, 0, 0)'));


window.log=console.log.bind(console);
//=========================================
var css={
	unit:{rgx:/0\s+|(\s*\d+\.?\d+\s*)(%|px|mm|cm|in|em|rem|en|ex|ch|vm|vw|vh)/i}
};


var rgb={
 rgx:/rgb(a?)\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3}),?\s*(0?\.\d+|[01])?\s*\)/i,
 matches2hex:function(a){
	var m=a,f=',';
	if(m[1]==='a'){
		m=m.slice(1,6);
		m[0]='rgba(';m[1]+=f;m[2]+=f;m[3]+=f;
		f=Number(m[4]);
		m[4]=String(f===0||f===1?f:f.toFixed(2));
		m[5]=')';
	}else{
	 f=function(s){return('0'+parseInt(s).toString(16)).slice(-2);};
	 m=a.slice(1,5),r=m[1],g=m[2],b=m[3],v=m[1]=f(r);
	 m[0]='#';
	 if(r===g && g===b){g=v.charAt(1);b=v.charAt(2);}else{g=f(g);b=f(b);};
	 m[2]=g;
	 m[3]=b;
	};
	return m.join('');
 }
};
//console.log(rgb.tohex('rgb( 0, 0, 0)'));


//=========================================
function getStyle(w,n){

 var pseudo=null;

 var property={prefixed:[],unprefixed:[]};

 var rgbExp=rgb.rgx, rgb2Hex=rgb.matches2hex;
 var unitExp=css.unit.rgx;


 for(var unitPattern=unitExp, rgbPattern=rgbExp, found, tohex=rgb2Hex, v,s,o=w.getComputedStyle(n,pseudo),l=o.length,i=0;i<l;i++){
	s=o[i];
	v=o.getPropertyValue(s);
	if(v.match(unitPattern)){
		//if
		//v=v.charAt(0)==='0'?0:;
	}else{
		if((found=v.match(rgbPattern))!==null){
			v=tohex(found);
		};
	};
	log(v);
 };
 //log(o);
 return o;
}



/*
	//log(s.charAt(0));
	//log(s);

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
*/





