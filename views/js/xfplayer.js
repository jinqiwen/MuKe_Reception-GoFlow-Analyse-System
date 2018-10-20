
var $$ = function(value){
	return document.getElementById(value);
}
var Player = {
	'Url': document.URL,
	'Width': player_width,
	'Height': player_height,
	'Buffer': player_buffer,
	'AdsCount': player_time,
	'Download': player_down,
	'Urllist': $playlist.split('+++'),
	'Install': function() {
		$$("GxInstall").innerHTML='<iframe src="http://file.yinyinxianfeng.com/yingyin9/installXianFeng.html" scrolling="no" width="'+this.Width+'" height="'+this.Height+'" frameborder="0" marginheight="0" marginwidth="0"></iframe>';
	},
	'Navigate': function() {
		var array = this.GxcmsUrl();
		if (navigator.plugins) {
			 var Install = false;
				for (i=0; i < navigator.plugins.length; i++ ) 
				{
					var n = navigator.plugins[i].name;
					if( navigator.plugins[n][0]['type'] == 'application/xfplay-plugin')
					{
						Install = true; break;
					}		
				} 

		       if(Install){
				$$("GxPlayer").innerHTML = '<div style="width:'+this.Width+'px;height:'+this.Height+'px;overflow:hidden;position:relative"><iframe src="'+this.Buffer+'" scrolling="no" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" name="Gxbuffer" id="Gxbuffer" style="display:none;position:absolute;z-index:2;top:0px;left:0px"></iframe><embed id="Xfplay" name="Xfplay" type="application/xfplay-plugin" PARAM_URL="'+array["url"]+'" PARAM_Status="1" width="'+this.Width+'" height="'+this.Height+'" ></embed></div>';
				
				if(this.Buffer && this.AdsCount){
					setTimeout("onAdsEnd()",this.AdsCount*1000);
				}
				return false;
			}
		}
		this.Install();
	},
	'Msie': function() {
		var array = Player.GxcmsUrl();
		var html;
		html ='<iframe src="'+this.Buffer+'" scrolling="no" width="'+this.Width+'" height="'+this.Height+'" frameborder="0" marginheight="0" marginwidth="0" id="Gxbuffer" style="display:none;position:absolute;z-index:9;"></iframe><object classid="clsid:E38F2429-07FE-464A-9DF6-C14EF88117DD" width="'+this.Width+'" height="'+this.Height+'" id="Xfplay" name="Xfplay" onerror="Player.Install();" style="display:none"><param name="URL" value="'+array["url"]+'"/><param name="Status" value="1"/></object>';
		$$("GxPlayer").innerHTML = html;
		if(Xfplay.URL != undefined){
			Xfplay.style.display = 'block';
		}
		
		/*if(this.Buffer){
			try{
				var version = Number(BaiduPlayer.GetVersion().replace(/\./g,''));
				if(this.AdsCount){
					setTimeout("onAdsEnd()",this.AdsCount*1000);
				}
			}catch(e){
			}
		}*/
	},
	'GxcmsUrl': function() {
		var array = new Array();
		array['lastwebpage'] = '';
		array['nextwebpage'] = '';
		array['nextcacheurl'] = '';
		//得到影片ID与集数ID
		var URL = Player.Url.match(/\d+.*/g)[0].match(/\d+/g);
		var Count = URL.length;
		array['id'] = URL[(Count-2)];
		array['pid'] = URL[(Count-1)]*1;
		//得到当前播放地址与影片集数名称
		var UrlList = Player.Urllist;
		var UrlCount = UrlList.length;
		array['url'] = Player.Xfplayurl(UrlList[array['pid']-1]);
		//生成上一集与下一集播放链接
		if(UrlCount > 1){
			if(array['pid'] != 1){
				array['lastwebpage'] = Player.Url.replace(array['id']+'-'+array['pid'],array['id']+'-'+(array['pid']-1));
			}	
			if(array['pid'] != UrlCount){
				array['nextwebpage'] = Player.Url.replace(array['id']+'-'+array['pid'],array['id']+'-'+(array['pid']+1));
				array['nextcacheurl'] = Player.Xfplayurl(UrlList[array['pid']]);
			}
		}
		return array;
	},
	'Xfplayurl': function(url) {
		if(url.indexOf("$") > 0){
			url = url.split('$')[1];
		}
		return url;
	},
	'Xbdyy' : function() {
	    if(window.ActiveXObject || window.ActiveXObject !== undefined)
	         this.Msie();
	    else
	         this.Navigate();
	         
	},
	'Error' : function() {
	}
}

var onPlay = function(){
	
}
var onPause = function(){
	if(Player.Buffer){
		//$$("Gxbuffer").src = Player.Buffer+'#pause';
		$$("Gxbuffer").style.display = 'block';
	}
}
var onFirstBufferingStart = function(){
	if(Player.Buffer){
		$$("Gxbuffer").height = Player.Height-80;
		$$("Gxbuffer").style.display = 'block';
	}
}
var onFirstBufferingEnd = function(){
	if(Player.Buffer){
		$$("Gxbuffer").style.display = 'none';
	}
}
var onPlayBufferingStart = function(){
	if(Player.Buffer){
		$$("Gxbuffer").height = Player.Height-80;
		$$("Gxbuffer").style.display = 'block';
	}
}
var onPlayBufferingEnd = function(){
	if(Player.Buffer){
		$$("Gxbuffer").style.display = 'none';
	}
}
var Xf_Complete = function(){
	//播放完毕
}
var onAdsEnd = function(){
	
}
Player.Xbdyy();