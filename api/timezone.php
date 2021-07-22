<?php
$tz = 'Asia/Jakarta';
$dt = new DateTime("now", new DateTimeZone($tz));
$time = $dt->format('d F Y G:i:s');

$tz = 'Asia/Makassar';
$dt = new DateTime("now", new DateTimeZone($tz));
$time2 = $dt->format('d F Y G:i:s');

$tz = 'Asia/Jayapura';
$dt = new DateTime("now", new DateTimeZone($tz));
$time3 = $dt->format('d F Y G:i:s');
$img= array('jkrt' => "https://i.ibb.co/DfQVqf2/jakarta.png",'mksr' => "https://i.ibb.co/wLyrCWm/makasar.png",'jypr' => "https://i.ibb.co/9TS1RGq/jayapura.png" );
$sapa= array('wib' => "$time",'wita' => "$time2",'wit' => "$time3" );
$khyaa= array('result' => $sapa, 'img' => $img);
echo json_encode($khyaa);

?>