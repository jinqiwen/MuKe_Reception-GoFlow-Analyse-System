<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo ($webtitle); ?></title>
<meta name="keywords" content="<?php echo ($keywords); ?>">
<meta name="description" content="<?php echo ($description); ?>">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />
<script language="javascript">var SitePath='<?php echo ($webpath); ?>';var SiteMid='<?php echo ($mid); ?>';var SiteCid='<?php echo ($cid); ?>';var SiteId='<?php echo ($id); ?>';</script>
<script language="JavaScript" type="text/javascript" src="<?php echo ($webpath); ?>views/js/jquery.js"></script>
<script language="JavaScript" type="text/javascript" src="<?php echo ($webpath); ?>views/js/system.js"></script>
<script language="JavaScript" type="text/javascript" src="<?php echo ($webpath); ?>views/js/history.js"></script>
<link rel='stylesheet' type='text/css' href='<?php echo ($webpath); ?>views/css/system.css'>
<link rel='stylesheet' type='text/css' href='<?php echo ($tplpath); ?>template.css'>
<script language="javascript">
$(document).ready(function(){
	$('.top_nav>li:last').addClass('nobrd');
	$('.top_nav>li>a').click(function(){
		id = $(this).attr('id');
		$('.top_nav>li').removeClass('cur');
		$('#menu'+id).addClass('cur');
		$('.hot').hide();
		$('#hot'+id).show();
	});
});
</script>
</head>
<body>
<div id="wrapper">
<script language="JavaScript" type="text/javascript" src="<?php echo ($tplpath); ?>template.js"></script>
<div class="header">
  <div class="top">
    <div title="<?php echo ($webname); ?>" class="logo"></div>
    <?php if(C('user_register') == 1): ?><div id="Login" class="login"></div><?php endif; ?>
    <div class="control"><a href="<?php echo ($rssurl); ?>">RSS订阅</a>&nbsp;|&nbsp;<a href="javascript:void(0)" id="fav">收藏本站</a>&nbsp;|&nbsp;<a href="<?php echo ($guestbookurl); ?>">留言反馈</a>&nbsp;|&nbsp;<span class="his"  id="ggg" onmouseover="fnDisplayMenu(this,'mnuArtStyles');" onmouseout="fnHideMenu('mnuArtStyles'); fnRemoveHighlight('mnuArtStyles');" ><a class="headerMnuLink" id="mnuArtStylesLink" href="javascript:void(0);">播放记录</a></span></div>

    <div class="popup1" id="mnuArtStyles"  style="display:none" onmouseover="fnDisplayMenu2($('#mnuArtStylesLink'),'mnuArtStyles');" onmouseout="fnHideMenu('mnuArtStyles'); fnRemoveHighlight('mnuArtStyles');" >
      <div id="history">
      </div>
   </div>

  </div>
  <div class="nav"><a href="<?php echo ($webpath); ?>" <?php if($model == 'index'): ?>class="cur"<?php endif; ?>>首页</a>
    <?php $tag['name'] = 'menu'; $__LIST__ = get_tag_gxmenu($tag); if(is_array($__LIST__)): $i = 0;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): ++$i;$mod = ($i % 2 );?><a onfocus="this.blur();" href="<?php echo ($menu["showurl"]); ?>" <?php if(($menu['id'] == $cid) or ($menu['id'] == $pid)): ?>class="cur"<?php endif; ?>><?php echo ($menu["cname"]); ?></a><?php endforeach; endif; else: echo "" ;endif;unset($__LIST__);unset($tag);?><span>|</span>
    <a href="<?php echo ($topurl); ?>" <?php if(check_model('top10') == 1): ?>class="cur"<?php endif; ?>>排行</a>
    <a href="<?php echo ($specialurl); ?>" <?php if(check_model('special') == 1): ?>class="cur"<?php endif; ?>>专题</a>


   
  </div>
  <div class="query"> <span class="query_l"></span>
    <form action="<?php echo ($webpath); ?>index.php?s=video/search" method="post" name="search" id="search" >
      <input type="text" value="<?php echo (($keyword)?($keyword):'请输入关键字'); ?>" id="wd" name="wd" autocomplete="off" maxlength="35">
      <div id="search_sort"><span id="cur_txt">视频</span><ul class="sort" id="sort"><li><a href="javascript:void(0)">视频</a></li><li><a href="javascript:void(0)">新闻</a></li></ul></div>
      <button type="submit" class="search_bt"><span>搜索</span></button>
    </form>
    <div class="hot_kw">热门关键词：<?php echo ($hotkey); ?></div>
    <span class="query_r"></span> </div>
</div>
<div class="box">
<div class="left_col">
  <div class="topbrd"></div>
    <div class="bd"><div class="ct">
    <ul class="top_nav">
    	<?php $tag['name'] = 'menu'; $__LIST__ = get_tag_gxmenu($tag); if(is_array($__LIST__)): $i = 0;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): ++$i;$mod = ($i % 2 );?><?php if(($menu["mid"])  ==  "1"): ?><li id="menu<?php echo ($menu["id"]); ?>" <?php if(($i)  ==  "1"): ?>class="cur"<?php endif; ?>><a onfocus="this.blur();" href="javascript:void(0)" id="<?php echo ($menu["id"]); ?>"><?php echo ($menu["cname"]); ?></a></li><?php endif; ?><?php endforeach; endif; else: echo "" ;endif;unset($__LIST__);unset($tag);?>
    </ul>
    </div></div>
  <div class="btmbrd"></div> 
</div>
<div class="right_col">
    <div class="news_box bd">
    <span class="tl"></span><span class="tr"></span>
<?php $tag['name'] = 'menu'; $__LIST__ = get_tag_gxmenu($tag); if(is_array($__LIST__)): $i = 0;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$menu): ++$i;$mod = ($i % 2 );?><?php if(($menu["mid"])  ==  "1"): ?><div class="ct hot" id="hot<?php echo ($menu["id"]); ?>" <?php if(($i)  !=  "1"): ?>style="display:none"<?php endif; ?>>
        <div class="hd"><h3><?php echo get_channel_name($menu['id']);?>总人气排行榜</h3></div>
        <div class="top_table">
          <table width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <th>序号</th>
              <th class="name">电影名称</th>
              <th>点击数</th>
              <th>网友评分</th>
              <th class="nobrd">更新日期</th>
            </tr>
            <?php $tag['name'] = 'video';$tag['cid'] = ''.$menu['id'].'';$tag['limit'] = '50';$tag['order'] = 'hits desc'; $__LIST__ = get_tag_gxcms($tag); if(is_array($__LIST__)): $i = 0;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$video): ++$i;$mod = ($i % 2 );?><tr>
                <td><?php echo ($i); ?></td>
                <td class="name"><a href="<?php echo ($video["readurl"]); ?>" target="_blank"><?php echo (get_replace_html($video["title"],0,9)); ?></a></td>
                <td><?php echo (number_format($video["hits"])); ?></td>
                <td class="score"><?php echo ($video["score"]); ?></td>
                <td><?php echo (get_color_date('Y-m-d',$video["addtime"])); ?></td>
              </tr>
              <?php if($i != 50): ?><?php if($i%10 == 0): ?><td colspan="5" class="line">&nbsp;
                  </tr><?php endif; ?><?php endif; ?><?php endforeach; endif; else: echo "" ;endif;unset($__LIST__);unset($tag);?>
          </table>
        </div>
    </div><?php endif; ?><?php endforeach; endif; else: echo "" ;endif;unset($__LIST__);unset($tag);?>    
    <span class="bl"></span><span class="br"></span> 
    </div>
</div>
</div>
<div id="footer">
	<?php echo ($copyright); ?><br />
	Copyright © 2007 - 2011 <a href="<?php echo ($weburl); ?>"><?php echo ($webname); ?></a> Some Rights Reserved <?php echo ($icp); ?> <?php echo ($tongji); ?> <a href="<?php echo ($baidusitemap); ?>">sitemap</a> <a href="<?php echo ($googlesitemap); ?>">sitemap</a><br />
</div>
</div>
</body>
</html>