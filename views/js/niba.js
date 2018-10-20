var Player = {
    'Url': document.URL,
    'Width': player_width,
    'Height': player_height,
    'Buffer': player_buffer,
    'AdsCount': player_time,
    'Download': player_down,
    'Urllist': $playlist.split('+++'),
    'GxcmsUrl': function () {
        var array = new Array();
        array['lastwebpage'] = '';
        array['nextwebpage'] = '';
        array['nextcacheurl'] = '';
        //得到影片ID与集数ID
        var URL = Player.Url.match(/\d+.*/g)[0].match(/\d+/g);
        var Count = URL.length;
        array['id'] = URL[(Count - 2)];
        array['pid'] = URL[(Count - 1)] * 1;
        //得到当前播放地址与影片集数名称
        var UrlList = Player.Urllist;
        var UrlCount = UrlList.length;
        array['url'] = Player.Bdhdurl(UrlList[array['pid'] - 1]);
        //生成上一集与下一集播放链接
        if (UrlCount > 1) {
            if (array['pid'] != 1) {
                array['lastwebpage'] = Player.Url.replace(array['id'] + '-' + array['pid'], array['id'] + '-' + (array['pid'] - 1));
            }
            if (array['pid'] != UrlCount) {
                array['nextwebpage'] = Player.Url.replace(array['id'] + '-' + array['pid'], array['id'] + '-' + (array['pid'] + 1));
                array['nextcacheurl'] = Player.Bdhdurl(UrlList[array['pid']]);
            }
        }
        return array;
    },
    'Bdhdurl': function (url) {
        if (url.indexOf("$") > 0) {
            url = url.split('$')[1];
        }
        return url;
    }
}
var info = Player.GxcmsUrl();
$(function () {
    $(".play-area").css("width", "100%");
    $(".center").css("width", Player.Width);
    var wa = $(".left").css("width");
    var wb = $(".center").css("width");
    var wc = $(".right").css("width");
    $("#play-box").css("width", parseInt(wa) + parseInt(wb) + parseInt(wc));
    var frm = '<iframe src="/views/js/niba.html" scrolling="no" width="' + Player.Width + '" height="' + Player.Height + '" frameborder="0" marginheight="0" marginwidth="0" id="Gxbuffer" style="z-index:99;"></iframe>';
    $("#GxPlayer").html(frm);
})