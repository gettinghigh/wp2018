<?php
$ID = $_GET["ID"];
$input= $ID;
$Findl='(';
$FindL='{';

$checkl=strpos($input,$Findl);
$checkL=strpos($input,$FindL);

if($checkl != false || $checkL != false){
	echo 'Invalid input format,please check again';
}else{
	$data = file_get_contents("student.json");
	$data_d = json_decode($data);
	if($data_d->$ID==NULL){
		echo "There's no ID:{$ID} in the list.";
	}
	else{
		unset($data_d->$ID);
		$data_en=json_encode($data_d);
		file_put_contents("student.json",$data_en);
		echo "Successfully delete data : {$ID}";
	}
}
?>
