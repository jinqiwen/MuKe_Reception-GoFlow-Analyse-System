function UpdownShow($ajaxurl,$ajaxtype){$.ajax({type:'get',url:$ajaxurl+'/ajax/'+$ajaxtype,timeout:300000,success:function($html){if($html!=0){$(".Up").html('顶('+$html.split(':')[0]+')');
$(".Down").html('踩('+$html.split(':')[1]+')');}else{alert('您已投过票了，感谢您的参与！');}}});}

function UpdownShow2($ajaxurl,$ajaxtype,id){$.ajax({type:'get',url:$ajaxurl+'/ajax/'+$ajaxtype,timeout:300000,success:function($html){if($html!=0){$("#cup"+id).html('顶('+$html.split(':')[0]+')');
$("#cdown"+id).html('踩('+$html.split(':')[1]+')');}else{alert('您已投过票了，感谢您的参与！');}}});}

function cup(id){UpdownShow2(SitePath+'index.php?s=comment/updown/id/'+id,'up',id);}
function cdown(id){UpdownShow2(SitePath+'index.php?s=comment/updown/id/'+id,'down',id)}

function CommentShow($ajaxurl){$("#commList").html('评论加载中...');$.ajax({type:'get',url:$ajaxurl,timeout:6000,error:function(){$("#commList").html('评论加载失败');},success:function($html){$("#Comments").html($html);}});}
function CommentPost(){if($("#comment_content").val()=='我来评论，最多200个字。'){alert('请发表您的评论观点！');return false;}
if($("#comment_content").val().length>200){$("#c_tips").html("亲爱的，字数太多了！请限制在200字以内。");return}
var $data="mid="+SiteMid+"&did="+SiteId+"&content="+$("#comment_content").val()+'&__gxcmsform__='+$("input[name='__gxcmsform__']").val();
$.ajax({type:'post',url:SitePath+'index.php?s=comment/insert',data:$data,dataType:'json',
success:function($string){if($string.info=='评论成功，感谢你的参与！'){$("#comment_content").val('我来评论，最多200个字。');$("#c_tips").html($string.info);CommentShow(SitePath+"index.php?s=comment/lists/mid/"+SiteMid+"/did/"+SiteId+"/p/1");}else{alert($string.info)}}});}
function showface(){if($("#faceBox").css("display")=='none'){$("#faceBox").css("display","block")}else{$("#faceBox").css("display","none")}
if($("#faceBox").html()==''){for(var i=48;i--;){$("#faceBox").prepend("<img width='24' height='24' src='../views/images/face/face"+(i+1)+".png' alt="+(i+1)+" />");}}
$("#faceBox img").mouseover(function(){this.src=this.src.replace('png','gif')})
$("#faceBox img").mouseout(function(){this.src=this.src.replace('gif','png')})
$("#faceBox img").click(function(){if($("#comment_content").val()!="我来评论，最多200个字。"){$("#comment_content").val($("#comment_content").val()+"<f>"+this.alt+"</f>")}
else{$("#comment_content").val("<f>"+this.alt+"</f>")}})}
function GetModel($mid){if($mid=='1')return'video';if($mid=='2')return'info';}
if($("#Score").length>0||$("#Scorenum").length>0){$.ajax({type:'get',url:SitePath+'index.php?s='+GetModel(SiteMid)+'/score/id/'+SiteId,success:PlusScore});}
if($(".Up").length>0||$(".Down").length>0){
	UpdownShow(SitePath+'index.php?s='+GetModel(SiteMid)+'/updown/id/'+SiteId,'');
	$('.Up').click(function(){UpdownShow(SitePath+'index.php?s='+GetModel(SiteMid)+'/updown/id/'+SiteId,'up');})
	$('.Down').click(function(){UpdownShow(SitePath+'index.php?s='+GetModel(SiteMid)+'/updown/id/'+SiteId,'down');})}
function GuestPost(){
var er0 = ($("#ber").attr("checked")==true)?"/百度影音错误":"",
 er1 = ($("#qer").attr("checked")==true)?"/快播错误":"",
er2 = ($("#fer").attr("checked")==true)?"/flash错误":"";
var con = ($("#gu_content").val()=="具体信息")?"":$("#gu_content").val();
var $data="errid="+SiteId+"&content="+con+er0+er1+er2;
$.ajax({type:'post',url:SitePath+'index.php?s=Guestbook/Insert',
data:$data,dataType:'json',success:function($string){if($string.info=="恭喜您,提交成功！"){alert("报错成功");$("#urlbox").addClass("display","none");}else{alert($string.info)}}});}

(function($) {
	$.fn.charCount = function(options){
		var defaults = {	
			allowed: 200,		
			warning: 20,
			css: 'counter',
			counterElement: 'span',
			counterEm: 'em',
			cssWarning: 'warning',
			cssExceeded: 'exceeded',
			counterText: '剩余字数:'	,
			counterText1: '个字'	
		}; 
		var options = $.extend(defaults, options); 
		function calculate(obj){
			var count = $(obj).val().length;
			var available = options.allowed - count;
			if(available <= options.warning && available >= 0){
				$(obj).next().addClass(options.cssWarning);
			} else {
				$(obj).next().removeClass(options.cssWarning);
			}
			if(available < 0){
				$(obj).next().addClass(options.cssExceeded);
			} else {
				$(obj).next().removeClass(options.cssExceeded);
			}
			$(obj).next().html(options.counterText + '<'+ options.counterEm +'>'+ available + '</'+ options.counterEm +'>' + options.counterText1);
		};		
		this.each(function() {  			
			$(this).after('<'+ options.counterElement +' class="' + options.css + '">'+ options.counterText +'</'+ options.counterElement +'>');
			calculate(this);
			$(this).keyup(function(){calculate(this)});
			$(this).change(function(){calculate(this)});
		});
	};
})(jQuery);

function boxopen(index){$(".operation .openbox").css("display","none");if(index==1){$("#sharebox").css("display","block");}if(index==2){$("#urlbox").css("display","block");}if(index==3){$("#errorbox").css("display","block");}$(".operation .off").click(function(){$(".operation .openbox").css("display","none");});}