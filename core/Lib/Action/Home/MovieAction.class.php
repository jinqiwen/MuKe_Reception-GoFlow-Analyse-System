<?php
class MovieAction extends HomeAction{
    public function index(){
		$this->lists();
	}
    public function lists(){
		if($url['id']){
			$list = list_search(F('_gxcms/channel'),'id='.$url['id']);
		}else{
			$list = F('_gxcms/channel');
		}
		$channel = $list[0];
		$this->assign('webtitle',$channel['ctitle'].' '.C('web_name'));
		$this->display('movie');
	}	
}
?>