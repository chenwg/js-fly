var start = function(){
	var cont = od.gd('cont');
	var sl = parseInt(od.gd('level').value);
	var slen = sl*sl;
	var str = '';
	var sq = Math.sqrt(slen);
	var dj = [0,sq-1,slen-sq,slen-1];
	cont.style.height = String((sq-2)*36)+'px';
	cont.style.width = String((sq-2)*36)+'px';
	for(var i=0;i<slen;i++){
		if(i>dj[0] && i<dj[1]){
			str += '<span name="'+String(i)+'" class="guan" style="display:none">'+'</span>';
		}else if(i>dj[2] && i<dj[3]){
			str += '<span name="'+String(i)+'" class="guan" style="display:none">'+'</span>';
		}else if(i%sq==0 || (i+1)%sq == 0){
			str += '<span name="'+String(i)+'" class="guan" style="display:none">'+'</span>';
		}else{
			str += '<span name="'+String(i)+'" class="guan">'+'</span>';
		}
		
	}
	cont.innerHTML = str;
	var sl = document.getElementsByTagName('span');
	for(var i=0;i<slen;i++){
		sl[i].addEventListener('click',function(e){
			var dn = parseInt(this.getAttribute('name'));
			var pn = [dn,dn-1,dn+1,dn+sq,dn-sq];
			for(var j=0;j<pn.length;j++){
				if(sl[pn[j]].className == 'guan'){
					sl[pn[j]].setAttribute('class','kai');
				}else{
					sl[pn[j]].setAttribute('class','guan');
				}
				
			}
		})
	}
}

start();
