var jumpurl;
var jump='';
if(jumpurl){
	jump = '<a href="'+jumpurl+'" style="color:#FF0000;font-weight:bold">上次有采集任务没有完成，是否接着采集?</a>'
}
document.write('<table width="98%" height="300" border="0" cellpadding="5" cellspacing="1" class="table">');
document.write('<tr class="table_title">');
document.write('<td colspan="7">资源库列表(均由其他网站提供，与本cms无关。增加采集点需修改根目录下的文件caiji.js) '+jump+'</td>');
document.write('</tr>');

/**
说明：可拷贝增加下面的<tr>块以多增加采集点。
如果资源站没有提供光线cms的采集文件，您可根据其提供的飞飞cms2.8的采集文件进行修改，方法为：

例如，资源站提供的飞飞cms采集文件xml_feifei2.8.js
<td class="l ct"><a href="index.php?s=Admin-Xml-Caijia-action-day-fid-1133-h-24-xmlurl-http:||www.avshida.com:8011|api|ffcms2.8|index.php?action=day-reurl-http:||www.avshida.com:8011|api|ffcms2.8|?"> 采集当天 </a></td>

将这里面的|换为@ ，替换根目录下caiji.js里的"采集当天"。采集本周及全部等也同理修改。
http:||www.avshida.com:8011|api|ffcms2.8|index.php?action=day-reurl-http:||www.avshida.com:8011|api|ffcms2.8|?

修改后的就是：
document.write('<td class="ct"><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/action/day/h/24/xmlurl/http:@@www.avshida.com:8011@api@ffcms2.8@index.php?action=day-reurl-http:@@www.avshida.com:8011@api@ffcms2.8@?">采集当天</a></td>');
需要清空浏览器缓存才能生效：
**/
document.write('<tr class="tr">');
document.write('<td >01、</td>');
document.write('<td ><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=list/reurl/http:@@api.jijizy.com@detail@?">www.jijizy.com 吉吉影音资源</a></td>');
document.write('<td class="ct"><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/action/day/h/24/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@detail@?">采集当天</a></td>');
document.write('<td class="ct"><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/action/day/h/98/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@detail@?">采集本周</a></td>');
document.write('<td class="ct"><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/action/all/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@detail@?">采集所有</a></td>');
document.write('<td class="ct"><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/action/all/pic/true/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@detail@?" title="包括片名,图片,主演,分类等">重采资料</a></td>');
document.write('<td class="ct"><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/1/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=list/reurl/http:@@api.jijizy.com@detail@?">绑定分类</a></td>');
document.write('</tr>');


document.write('</table>');