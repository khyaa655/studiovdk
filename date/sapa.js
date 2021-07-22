//<![CDATA[
var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) document.writeln("<h1>SELAMAT PAGI (SUGENG ENJING)</h1>");
if (h >= 10 && h < 15) document.writeln("<h1>SELAMAT SIANG (SUGENG SIANG)</h1>");
if (h >= 15 && h < 18) document.writeln("<h1>SELAMAT SORE (SUGENG SONTEN)</h1>");
if (h >= 18 || h < 4) document.writeln("<h1>SELAMAT MALAM (SUGENG DALU)</h1>");
//]]>