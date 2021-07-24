function sayHi(){
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  let viko = " " + name
  fetch(`https://viko-api.herokuapp.com/api/f/simi?apikey=rxking&query=${viko}`)
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
    });
  } 