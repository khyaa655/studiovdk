<?php
date_default_timezone_set('Asia/Jakarta');
$jam=date("G");
if($jam>=0&&$jam<=10)
$sapa= ("selamat pagi");
else if($jam>=11&&$jam<=13)
$sapa= ("selamat siang");
else if($jam>=14&&$jam<=17)
$sapa= ("selamat sore");
else if($jam>=18&&$jam<=23)
$sapa= ("selamat malam");

$sapa= array('infoku' => "selamat datang di situs studiovdk dan $sapa, kang ngoding kopas kami melayani free rest-api dan konten lainnya menyusul soalnya lagi update. WA wa.me/6281515958390 ", 'bug' => "perbaikan viko-api.herokuapp.com mengenai buffer gambar");
$str= array('result' => $sapa);
echo json_encode($str);
?>
