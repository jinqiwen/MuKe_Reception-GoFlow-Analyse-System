<?php
class DsxmlAction extends Action{
    public function show(){
		$this->display('./views/plus/ds_xml.html');
	}
    public function wait(){
		$listarr = F('_gxcms/channel');
		foreach($listarr as $key=>$value){
			$keynew = $value['mid'];
			$list[$keynew][$key] = $value['id'];
		}
		$this->assign($array);
		$this->assign('list_vod_all',implode(',',$list[1]));
		//
		$array = $_REQUEST['ds'];
		$array['min'] = $array['caiji']+$array['data'];
		$this->assign($array);
		$this->display('./views/plus/ds_wait.html');
	}
}
?>