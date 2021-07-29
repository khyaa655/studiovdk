function sayHi(){ 
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  let viko = " " + name
  fetch(`https://viko-api.herokuapp.com/api/yt/playmp3?query=${viko}&apikey=rxking`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let judul = data.title
		let cnl = data.channel
		let publ = data.published
		let viwer = data.views
		let tumb = data.thumb
		let aux = data.url
		let klor = 'Ytmp3'
		let yurl2 = data.url
		let yurl = `Note: jika pemutaran diatas tidak dapat diputar silahkan copy link pencarian anda ${viko}`
		document.getElementById("udin").innerHTML = judul
		document.getElementById("cnl").innerHTML = cnl
		document.getElementById("publis").innerHTML = publ
		document.getElementById("view").innerHTML = viwer
		document.getElementById("url").innerHTML = klor
	    document.getElementById("img").src = tumb
		document.getElementById("audio").innerHTML = aux
		document.getElementById("note").innerHTML = yurl
		document.getElementById("note2").innerHTML = yurl2
    })
    .catch(err => {
        console.log(err)
		let contlo = `Keyword: ${viko}`
		let status = navigator.onLine
		let anby = "error ditemukan " + err + ` Status Koneksi anda ${status}`
		document.getElementById("statusd").innerHTML = anby
		document.getElementById("statud").innerHTML = contlo
    });
  }