<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>影片采集管理</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel='stylesheet' type='text/css' href='./views/css/admin_style.css'>
<script language="JavaScript" charset="utf-8" type="text/javascript" src="./views/js/jquery.js"></script>
<script language="JavaScript">
$(document).ready(function(){	
	$('#xmllist').html($('#xml').html());
	$('#xml').html('');
});
var jumpurl = '<?php echo ($jumpurl); ?>';
</script>
</head>
<body>
<table>
<tr>
<td></td>
<td><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/8/action/day/h/24/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@inc@?detail=">采集当天</a></td>
<td><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/8/action/day/h/98/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@inc@?detail=">采集本周</a></td>
<td><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/8/action/all/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@inc@?detail=">采集所有</a></td>
<td><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/8/action/all/pic/true/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=videolist/reurl/http:@@api.jijizy.com@inc@?detail=" title="包括片名,图片,主演,分类等">重采资料</a></td>
<td><a href="?s=Admin/Collect/Gxcms/ziyuan/a/fid/8/xmlurl/http:@@api.jijizy.com@inc@api.asp?ac=list/reurl/http:@@api.jijizy.com@inc@?detail=">绑定分类</a></td>

</tr>
</table>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><span id="xmllist">资源列表载入中……</span></td>
  </tr>
</table>
<style>
#footer, #footer a:link, #footer a:visited {
	clear:both;
	color:#0072e3;
	font:12px/1.5 Arial;
	margin-top:10px;
	text-align:center;
	white-space:nowrap;
}
</style>
<div id="footer">程序版本：<?php echo C("cms_var");?>&nbsp;&nbsp;&nbsp;&nbsp;Copyright © 2010-2011 All rights reserved</div>
<div style="display:none"><a href="http://www.youmtv.com" target="_blank">优美电影网</a>商业模板认证</div>
<span id="xml"><script language="JavaScript" charset="utf-8" type="text/javascript" src="/caiji.js?20150918"></script></span>
</body>
</html>