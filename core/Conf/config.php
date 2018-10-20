<?php
/**
 * @name $config 系统配置文件
 */
$config = require './config.php';
$array = array(
	'APP_GROUP_LIST'      =>'Admin,Home,Plus',
	'TMPL_FILE_DEPR'      =>'_',//模板文件MODULE_NAME与ACTION_NAME之间的分割符，只对项目分组部署有效
	'USER_AUTH_KEY'       =>'gxcms',// 用户认证SESSION标记
	'NOT_AUTH_ACTION'     =>'index,show,add,top,left,main',// 默认无需认证操作
	'REQUIRE_AUTH_MODULE' =>'Config,Cache,Master,Channel,Video,Info,Special,Collect,User,Userview,Comment,Gbook,Tpl,Adsense,Link,Upload,Html,Data,Slide',// 默认需要认证模型
	'URL_CASE_INSENSITIVE'=>true,//URL是否不区分大小写 默认区分大小写
    'DB_FIELDTYPE_CHECK'  =>true, //是否进行字段类型检查
	'DATA_CACHE_SUBDIR'   =>true,//哈希子目录动态缓存的方式
	'DATA_PATH_LEVEL'     =>2,
    'TMPL_ACTION_ERROR'   => './views/tips/tips.html', // 默认错误跳转对应的模板文件
    'TMPL_ACTION_SUCCESS' => './views/tips/tips.html', // 默认成功跳转对应的模板文件
    //'ERROR_PAGE'          => './views/tips/error.html',
  	'url_model'           => 3,
	//'APP_DEBUG'         =>true,    // 是否开启调试模式
    //'SHOW_RUN_TIME'	  => true,   // 运行时间显示
    //'SHOW_ADV_TIME'	  => true,   // 显示详细的运行时间
    //'SHOW_DB_TIMES'	  => true,   // 显示数据库查询和写入次数
	'cms_admin'           =>'index.php',
	'cms_name'            =>'光线影视内容管理系统',
	'cms_var'             =>'1.7',
	'cms_url'             =>'http://www.gxcms.org/',
	'cms_urlvar'          =>'http://www.gxcms.org/version.js',
	'cms_exts'            =>'jpg,jpeg,gif,png',	
	'cms_col_content'     =>'[内容]',
  'player_list' =>
	array(
		array("<span class='tdbf'></span>高清播放<span class='tip'>(无需下载播放器直接播放)</span>","tudou.com","swf"),
		array("<span class='tdbf'></span>高清播放<span class='tip'>(无需下载播放器直接播放)</span>","tv189.cn","swf"),
		array("<span class='tdbf'></span>qiyi高清播放<span class='tip'>(无需下载播放器直接播放)</span>","qiyi.com","swf"),
		array("<span class='tdbf'></span>高清播放<span class='tip'>(无需下载播放器直接播放)</span>","56.com","swf"),
		array("<span class='tdbf'></span>高清播放<span class='tip'>(无需下载播放器直接播放)</span>","youku.com","swf"),
		array("<span class='tdbf'></span>TV189高清播放<span class='tip'>(无需下载播放器直接播放)</span>","tv189.com","tv189"),
		array("<span class='tdbf'></span>高清播放<span class='tip'>(无需下载播放器直接播放)</span>","letv.com","swf"),
		array("<span class='bdbf'></span>百度影音播放","bdhd://","player"),
		array("<span class='kbbf'></span>快播播放","qvod://","qvod"),
		array("<span class='tdbf'></span>高清播放<span class='tip'>(无需下载播放器直接播放)</span>","qq.com","swf")	
	),
);
return array_merge($config,$array);
?>