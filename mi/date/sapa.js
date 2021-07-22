//<![CDATA[
var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) document.writeln("<p>SELAMAT PAGI (SUGENG ENJING)</p>");
if (h >= 10 && h < 15) document.writeln("<p>SELAMAT SIANG (SUGENG SIANG)</p>");
if (h >= 15 && h < 18) document.writeln("<p>SELAMAT SORE (SUGENG SONTEN)</p>");
if (h >= 18 || h < 4) document.writeln("<p>SELAMAT MALAM GES (SUGENG DALU DANG TURU)</p>");
//]]>