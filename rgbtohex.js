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
