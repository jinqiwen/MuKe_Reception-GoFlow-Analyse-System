var jjvod_w = player_width;//播放器宽度
var jjvod_h = player_height;//播放器高度
var jjvod_adh = jjvod_h-50; //广告高度
var jjvod_ad = 'http://www.jiji-yingyin.com/waiting.html';//缓冲
var jjvod_c = 'baidu'; //推广渠道
var jjvod_install = 'http://file.jiji-yingyin.com/yingyin9/jjplayer_install.html?v=1&c='+jjvod_c;
var jjvod_weburl = unescape(window.location.href);

var url_arr = $playlist.split('+++');

var PageURL = document.URL.match(/\d+.*/g)[0].match(/\d+/g);
var Count = PageURL.length;
var vid = PageURL[(Count - 2)];//影片id
var pid = PageURL[(Count - 1)] * 1;//集数

var jjvod_nextpage = getJJnexturl(url_arr);
//var jjvod_url = url_arr[pid-1];
var urls = url_arr[pid-1];
var url = urls.split('$');
var jjvod_url = url[1];

addJJVod();

function jjvodstatus(offest){
    if(document.getElementById('jjvodPlayer').PlayState==3){
         document.getElementById('jjad').style.display='none';
    }else if(document.getElementById('jjvodPlayer').PlayState==2||document.getElementById('jjvodPlayer').PlayState==4){
         document.getElementById('jjad').style.display='block';
    }else if(document.getElementById('jjvodPlayer').PlayState==12){
		if(jjvod_nextpage!=''){
			window.location.href=jjvod_nextpage;
		}
	}
}


//调用JJVOD代码
function addJJVod(){
if(!!window.ActiveXObject || "ActiveXObject" in window){
		document.write("<div style='position:relative'>");
		document.write('<div id="jjad" style="position:absolute; z-index:1001"><iframe marginWidth="0" id="wdqad" name="wdqad" marginHeight="0" src="'+jjvod_ad+'" frameBorder="0" width="'+jjvod_w+'" scrolling="no" height="'+jjvod_adh+'"></iframe></div>');
		document.write("<object classid='clsid:C56A576C-CC4F-4414-8CB1-9AAC2F535837' width='"+jjvod_w+"' height='"+jjvod_h+"' id='jjvodPlayer' name='jjvodPlayer' onerror=\"document.getElementById('jjvodPlayer').style.display='none';document.getElementById('jjad').style.display='block';document.getElementById('wdqad').src='"+jjvod_install+"';\"><PARAM NAME='URL' VALUE='"+jjvod_url+"'><PARAM NAME='WEB_URL' VALUE='"+jjvod_weburl+"'><param name='Autoplay' value='1'></object>");
		document.write("</div>");
		var ver = chkJJActivexVer();
		setInterval('jjvodstatus()','1000');

}else{
	if (navigator.plugins) {
		var install = false;
		for (var i=0;i<navigator.plugins.length;i++) {
			if(navigator.plugins[i].name == 'JJvod Plugin'){//JJvod Plugin
				install = true;break;
			}
		}
		
		if(install){//已安装
			document.write('<div style="overflow:hidden;position:relative;left:0;top:0">');
			document.write('<div id="jjad" style="position:absolute;z-index:2;top:0px;left:0px"><iframe border="0" src="'+jjvod_ad+'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" width="'+jjvod_w+'" height="'+jjvod_adh+'" vspale="0"></iframe></div>');
			document.write('<object id="jjvodPlayer" name="jjvodPlayer" TYPE="application/x-itst-activex" ALIGN="baseline" BORDER="0" WIDTH="'+jjvod_w+'" HEIGHT="'+jjvod_h+'" progid="WEBPLAYER.WebPlayerCtrl.2" param_URL="'+jjvod_url+'" param_WEB_URL="'+jjvod_weburl+'"></object>');
			document.write("</div>");
			setInterval('jjvodstatus()','1000');
		}else{
			document.write('<div id="jjad"><iframe border="0" src="'+jjvod_install+'" marginWidth="0" frameSpacing="0" marginHeight="0" frameBorder="0" noResize scrolling="no" width="'+jjvod_w+'" height="'+jjvod_adh+'" vspale="0"></iframe></div>');
		}
	}
}
}

function killErrors(){return true;}window.onerror = killErrors;

function chkJJActivexVer(){
	var playerS = document.getElementById('jjvodPlayer');
	if(playerS.GetVer&&typeof(playerS.GetVer)=="number"){
		return ;
	}else{//老版本
		if(confirm("请下载升级最新吉吉影音播放器，以便更流畅播放影片！")){
			window.location.href="http://www.jiji-yingyin.com/";
		}else{
			return false;
		}
	}
}

function getJJnexturl(url_arr){
	var PageURL = document.URL.match(/\d+.*/g)[0].match(/\d+/g);
	var Count = PageURL.length;
	var vid = PageURL[(Count - 2)];//影片id
	var pid = PageURL[(Count - 1)] * 1;//集数
	var num = Number(pid)+1;
	var totallen = url_arr.length;

	var urlpars = location.search;
    var url = location.href;
    var cururl = "";
	
    if (num>totallen) {//没有下一集
        return ""
    }
    if (url.indexOf("?") == -1) {
            var b = url.split("/");
            var c = b.slice(b.length - 1, b.length).toString(String).split(".").slice(0, 1);
            urlpars = c + ".html";
            var d = c[0].split("-");
            cururl = d[0] + "-" + num + ".html"
    } else {
            if (urlpars.indexOf("-") > -1) {
                if (urlpars.indexOf('html') > -1) {
                    cururl = "?" + vid   + "-" + num + ".html"
                } else {
                    cururl = "?" + vid  + "-" + num
                }
            } else {
                cururl = "?id=" + vid + "&num=" + num
            }
    }
		
    url = url.replace(urlpars, "");
    return url + cururl
}
