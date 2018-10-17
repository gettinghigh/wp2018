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
	if($data_d->$ID == NULL){
		echo "No such ID in the list";
	}
	else{
		echo "Hello, {$data_d->$ID}"; 
	}
}
?>
