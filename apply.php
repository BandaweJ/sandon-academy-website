<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["q"], false);
$to = "sandonacademyinfo@gmail.com";
$subject = "Application for  ".$obj->level." from ".$obj->name;
$txt = "Application Form From Website<br>".
"I.D Number: ".$obj->idnum."<br>"
"Name: ".$obj->name."<br>"
"Surname: ".$obj->surname."<br>"
"Gender: ".$obj->sex."<br>"
"Date of Birth: ".$obj->dob."<br>"
"Cell: ".$obj->cell."<br>"
"Email: ".$obj->email."<br>"
"Address: ".$obj->address."<br>"
"Province: ".$obj->province."<br>"
"Level Applied For: ".$obj->level."<br>"
"Current School: ".$obj->school."<br>"
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