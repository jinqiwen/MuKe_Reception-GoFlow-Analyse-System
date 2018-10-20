var Player = {
	Url: null,
	'Width': player_width,
	'Height': player_height,
	'Buffer': player_buffer,
	'AdsCount': player_time,
	'Download': player_down,
	'Urllist': $playlist.split('+++'),
	show: function() {
		$("#GxPlayer").html(this.getPlayerHtml());
		var isIE = true;
		var QvodIEFF;
		var Install = false;
		if (window.ActiveXObject) {
			QvodIEFF = document.getElementById("QvodPlayer")
		} else {
			isIE = false;
			QvodIEFF = document.getElementById("QvodPlayer2")
		}
		if (!isIE) {
			if (navigator.plugins) {
				for (i = 0; i < navigator.plugins.length; i++) {
					var n = navigator.plugins[i].name;
					if (navigator.plugins[n][0]['type'] == 'application/qvod-plugin') {
						Install = true;
						break
					}
				}
			}
			if (!Install) {
				QvodIEFF.style.display = 'none';
				document.getElementById('iframe_down').style.display = '';
				document.getElementById('iframe_down').src = 'http://error2.qvod.com/error4.htm'
			} else {
				QvodIEFF.style.display = 'block'
			}
		} else {
			$("#QvodPlayer2").hide();
			$("#QvodPlayer").show()
		}
	},
	GxcmsUrl: function() {
		var array = new Array();
		array['lastwebpage'] = '';
		array['nextwebpage'] = '';
		array['nextcacheurl'] = '';
		var URL = document.URL.match(/\d+.*/g)[0].match(/\d+/g);
		var Count = URL.length;
		array['id'] = URL[(Count - 2)];
		array['pid'] = URL[(Count - 1)] * 1;
		var UrlList = Player.Urllist;
		var UrlCount = UrlList.length;
		array['url'] = Player.getURL(UrlList[array['pid'] - 1]);
		if (UrlCount > 1) {
			if (array['pid'] != 1) {
				array['lastwebpage'] = document.URL.replace(array['id'] + '-' + array['pid'], array['id'] + '-' + (array['pid'] - 1))
			}
			if (array['pid'] != UrlCount) {
				array['nextwebpage'] = document.URL.replace(array['id'] + '-' + array['pid'], array['id'] + '-' + (array['pid'] + 1));
				array['nextcacheurl'] = this.getURL(UrlList[array['pid']])
			}
		}
		return array
	},
	getPlayerHtml: function() {
		var array = this.GxcmsUrl();
		Player.Url = array["url"];
		var player = '<iframe id="iframe_down" name="iframe_down" scrolling="no" frameborder="0" style="margin: 0; width: 100%; height: ' + Player.Height + 'px; display: none;" src=""></iframe>';
		player += '<object id="QvodPlayer" name="QvodPlayer" width="100%" height="' + Player.Height + '" classid="clsid:F3D0D36F-23F8-4682-A195-74C92B03D4AF" onError="document.getElementById(\'QvodPlayer\').style.display=\'none\';document.getElementById(\'iframe_down\').style.display=\'\';document.getElementById(\'iframe_down\').src=\'http://error2.qvod.com/error4.htm\';" style="display:none;">';
		player += '<PARAM NAME="URL" VALUE="' + Player.Url + '">';
		player += '<PARAM NAME="Autoplay" VALUE="1">';
		player += '<PARAM NAME="QvodAdUrl" VALUE="' + Player.Buffer + '">';
		player += '<PARAM NAME="NextWebPage" VALUE="' + array["nextwebpage"] + '">';
		player += '</object>';
		player += '<embed id="QvodPlayer2" name="QvodPlayer2" URL="' + Player.Url + '" type="application/qvod-plugin" Autoplay="1" QvodAdUrl="' + Player.Buffer + '" Showcontrol="1" width="100%" height="' + Player.Height + '"></embed>';
		return player
	},
	getURL: function(url) {
		if (url.indexOf("$") > 0) {
			url = url.split('$')[1]
		}
		return url
	}
};
$(document).ready(function() {
	try {
		Player.show()
	} catch(e) {
		alert(e.message)
	}
});