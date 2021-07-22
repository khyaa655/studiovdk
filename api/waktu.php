<?php
date_default_timezone_set('Asia/Jakarta');
$jam=date("G");
if($jam>=0&&$jam<=10)
$sapa= array('waktu' => "selamat pagi", 'indo' => "pagi", 'image' => "https://i.ibb.co/HHDwL8F/pagi.jpg");
else if($jam>=11&&$jam<=13)
$sapa= array('waktu' => "selamat siang", 'indo' => "siang", 'image' => "https://i.ibb.co/87ksfhR/siang.jpg");
else if($jam>=14&&$jam<=17)
$sapa= array('waktu' => "selamat sore", 'indo' => "sore", 'image' => "https://i.ibb.co/hK1jSGR/sore.jpg");
else if($jam>=18&&$jam<=23)
$sapa= array('waktu' => "selamat malam", 'indo' => "malam", 'image' => "https://i.ibb.co/8DZpL9D/malam.jpg");
$str= array('result' => $sapa);
echo json_encode($str);
?>