<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["q"], false);
$to = "sandonacademyinfo@gmail.com";
$subject = " From ".$obj->name;
$txt = $obj->msg;
$from = $obj->email;
$headers = "From: $from" . "\r\n" .
"CC: sandonacademyit@gmail.com";

if(mail($to,$subject,$txt,$headers)){
    echo "y";
}
else{
    echo "n";
}
?>