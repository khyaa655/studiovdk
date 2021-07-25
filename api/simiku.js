function sayHi(){
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  let viko = " " + name
  document.getElementById("statusd").innerHTML = `Pesan terkirim, dan tunggu simi merespon dengan pesan: ${viko}`
  fetch(`https://viko-api.herokuapp.com/api/f/botkuh?apikey=rxking&query=${viko}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let anjgg = data.result
		let onlen = data.status
		let onlenw = data.status
		document.getElementById("simikuu").innerHTML = anjgg
		document.getElementById("stats").innerHTML = onlen
		document.getElementById("stats").innerHTML = onlenw
    })
    .catch(err => {
        console.log(err)
		let anby = "Error Gagal mengirim pesan syntax:" + err
		document.getElementById("statusd").innerHTML = anby
    });
  } 
