<?php
include_once("func.php");

$data = $_POST["dt"];
$jdata = json_decode($data,true);
$name = $jdata["name"];
$male = $jdata["male"];

 if($male !=""){
 	vmale($male);
 }
// else{
//  	vfname();
//  }
?>