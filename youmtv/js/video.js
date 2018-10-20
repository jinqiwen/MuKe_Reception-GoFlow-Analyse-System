$(document).ready(function(){
	//分类搜索
	showsearch();
	//展示地区列表
	if($("#areahtml").length>0){
		showarea();
	}
	if($("#tab_tag_xdw").length>0){
		showtab_tag_xdw();
	}
	//展示字母列表
	if($("#letterhtml").length>0){
		showletter();
	}
		//展示顶部筛选
	if($("#topsearchhtml").length>0){
		showtopsearch();
	}
	//展示视频类型列表
	if($("#typehtml").length>0){
		showtype(type_str,typeid_str);
	}
	//展示年份列表
	if($("#yearhtml").length>0){
		showyear();
	}
	//内容页同类热门影视
	if($("#hot_video").length>0){
		$("#hot_video").load($("#hot_video").attr('href'));	
	}
	//内容页同类热门新闻
	if($("#hot_info").length>0){
		$("#hot_info").load($("#hot_info").attr('href'));	
	}
	//收起展开列表 <span id="detail_hot"></span>
	$("#plMore").click(function(){	
		$html = $(this).html();
		if($html=='展开列表'){
			$(this).html('收起列表');
			$("#pmoreContain").attr('class','play-list-right-c');
			$("#all-plist").show();
		}else{
			$(this).html('展开列表');
			$("#pmoreContain").attr('class','play-list-right');	
			$("#all-plist").hide();
		}
	});	
});

//<dd id="yearhtml"></dd>
function showyear(){
	var $html='';
	var $j_selected_area = $('#j_selected_area').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_letter = $('#j_selected_letter').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_order =  $('#j_selected_order').html().replace(/^\s+|\s+$/g,'');
	var $year = $('#yearhtml').html();
	if($year=='全部'){$html +='<a class="on">'+'全部'+'</a> ';}else{$html += '<a href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+$j_selected_area+'/year/0'+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'" >'+'全部'+'</a>';}
	for(i=2012;i>1998;i--){
		if(i == $year){
			$html +='<a class="on">'+i+'</a> ';
		}else{
			$html +='<a href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+$j_selected_area+'/year/'+i+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'"  >'+i+'</a> ';

		}
	}
	$('#yearhtml').html($html);
	$('#yearhtml').show();
}
//<dd id="areahtml"></dd>
function showarea(){
	var $html='';
var $j_selected_order =  $('#j_selected_order').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_year = $('#j_selected_year').html();
	var $j_selected_letter=$('#j_selected_letter').html().replace(/^\s+|\s+$/g,'');
	var $area=$('#areahtml').html().replace(/^\s+|\s+$/g,'');
	var area_str=areastr.split(",");
	for (var key in area_str){
		if($area == area_str[key]){
			$html +='<a "'+'" class="on">'+area_str[key]+'</a> ';
		}
else{ 
			$html +='<a href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+(('全部'==area_str[key])?'0':encodeURIComponent(area_str[key]))+'/year/'+$j_selected_year+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'"  >'+area_str[key]+'</a> ';
		}
	}
    
	$('#areahtml').html($html);
	$('#areahtml').show();
}
//<dd id="typehtml"></dd>
function showtype(type_str,typeid_str){
	var $html='';
var $j_selected_order =  $('#j_selected_order').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_year = $('#j_selected_year').html();
	var $j_selected_letter=$('#j_selected_letter').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_area=$('#j_selected_area').html().replace(/^\s+|\s+$/g,'');
	var $type=$('#typehtml').html().replace(/^\s+|\s+$/g,'');
	for (var key=0;key<type_str.length;key++){
		if($type == type_str[key]){
			$html +='<a "'+'" class="on">'+type_str[key]+'</a> ';
		}
else{ 
			$html +='<a href="'+SitePath+'video/lists_show/id/'+typeid_str[key]+'/area/'+$j_selected_area+'/year/'+$j_selected_year+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'"  >'+type_str[key]+'</a> ';
		}
	}
    
	$('#typehtml').html($html);
	$('#typehtml').show();
}
//<dd id="letterhtml"></dd>
function showletter(){
	var $html='';
var $j_selected_order =  $('#j_selected_order').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_year = $('#j_selected_year').html();
	var $j_selected_area=$('#j_selected_area').html().replace(/^\s+|\s+$/g,'');
	var $letter=$('#letterhtml').html().replace(/^\s+|\s+$/g,'');
	var letter_str = ['全部','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	for (var key in letter_str){
		if($letter == letter_str[key]){
			$html +='<a "'+'" class="on">'+letter_str[key]+'</a> ';
		}
else{ 
			$html +='<a href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+$j_selected_area+'/year/'+$j_selected_year+'/letter/'+(('全部'==letter_str[key])?'0':letter_str[key])+'/order/'+$j_selected_order+url_suffix+'"  >'+letter_str[key]+'</a> ';
		}
	}
   
	$('#letterhtml').html($html);
	$('#letterhtml').show();
}
//<h2 id="topsearchhtml"></dd>
function showtopsearch(){
	var $html='';
    var $j_selected_order =  $('#j_selected_order').html().replace(/^\s+|\s+$/g,'');
	var count0=0;
	var selected_typeid=0;	
	var $j_selected_type = $('#j_selected_type').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_area = $('#j_selected_area').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_year = $('#j_selected_year').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_letter = $('#j_selected_letter').html().replace(/^\s+|\s+$/g,'');
	var $j_Pname = $('#j_Pname').html().replace(/^\s+|\s+$/g,'');
	$html += '<span>'+$j_Pname+'</span>';
		if($j_selected_type!='0'){
			count0+=1;
			selected_typeid=retID($j_selected_type,typeid_str);
			//typeid_str[0]是父类id
			$html +=type_str[selected_typeid]+'<a style="cursor: pointer" class="Aclose" href="'+SitePath+'video/lists_show/id/'+typeid_str[0]+'/area/'+$j_selected_area+'/year/'+$j_selected_year+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'">&nbsp;&nbsp;&nbsp;</a>';}
		if($j_selected_area!='0'){
			if(count0>=1)$html +='+&nbsp;';
			count0+=1;
			$html +=decodeURIComponent($j_selected_area)+'<a style="cursor: pointer" class="Aclose" href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+'0'+'/year/'+$j_selected_year+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'">&nbsp;&nbsp;&nbsp;</a>';}
		if($j_selected_year!='0'){
			if(count0>=1)$html +='+&nbsp;';
			count0+=1;
		$html +=$j_selected_year+'<a style="cursor: pointer" class="Aclose" href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+$j_selected_area+'/year/'+'0'+'/letter/'+$j_selected_letter+'/order/'+$j_selected_order+url_suffix+'">&nbsp;&nbsp;&nbsp;</a>';}
		if($j_selected_letter!='0'){
			if(count0>=1)$html +='+&nbsp;';
			count0+=1;
			$html +=$j_selected_letter+'<a style="cursor: pointer"  class="Aclose"  href="'+SitePath+'video/lists_show/id/'+SiteCid+'/area/'+$j_selected_area+'/year/'+$j_selected_year+'/letter/'+'0'+'/order/'+$j_selected_order+url_suffix+'">&nbsp;&nbsp;&nbsp;</a>';}
	
		if(count0==0){$html += '温馨提示：您可以根据对影片的要求进行条件选择!';}
		//typeid_str[0]是父类id
		else{$html+='<a class="cz" href="'+SitePath+'video/lists_show/id/'+typeid_str[0]+url_suffix+'" title="重置筛选条件" class="act">重置筛选</a>'}
		$('#topsearchhtml').html($html);
	}
//showtab_tag_xdw()
function showtab_tag_xdw(){
	var $j_selected_type = $('#j_selected_type').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_area = $('#j_selected_area').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_year = $('#j_selected_year').html().replace(/^\s+|\s+$/g,'');
	var $j_selected_letter = $('#j_selected_letter').html().replace(/^\s+|\s+$/g,'');
	
	for(var i=0;i<3;i++){
		var $str=$('#tab_tag_'+i).attr('ordid').replace(/^\s+|\s+$/g,'');
		$('#tab_tag_'+i).attr('href',SitePath+'video/lists_show/id/'+SiteCid+'/area/'+$j_selected_area+'/year/'+$j_selected_year+'/letter/'+$j_selected_letter+'/order/'+$str+url_suffix);
//		$.('#tab_tag_1').attr('href','"'+localhref+'/order/'+$str[0]+url_suffix+'"');
		//$.('#tab_tag_1').attr('href','123');
		}
		//$('#tab_tag_1').attr('href','dd');
		
	}

//返回在数组中的位置
function retID(num,arraystr){
	  for (var i=0;i <arraystr.length ;i++ ) 
    { 
        if (num == arraystr[i]) 
        { return i;}
	 }
	 return 0;
}