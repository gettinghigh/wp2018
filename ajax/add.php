<?php
$ID = $_GET["ID"];
$name = $_GET["name"];
//check if user input invalid format
$input= $ID.$name;
$Findl='(';
$FindL='{';

$checkl=strpos($input,$Findl);
$checkL=strpos($input,$FindL);

if($checkl != false || $checkL != false){
	echo 'Invalid input format,please check again';
}else{
	if($name&&$ID){
		$data = file_get_contents("student.json");
		$data_json = json_decode($data,true);
		$data_json[$ID]=$name;
		$new =json_encode($data_json);
		file_put_contents("student.json",$new);
		echo "Add new data, {$ID} : {$name}"; 
	}
	else{
		echo "Both ID and name can't be blank";
	}
}
?>
