function gmpa() {
    fetch('https://viko-api.herokuapp.com/api/info/gempa?apikey=rxking')
    .then(response => response.json())
    .then(data => {
        console.log(data)


        let lock = data.result.Wilayah
        let keku = data.result.Magnitudo
        let lint = `Lintang: ${data.result.Lintang}<br>Bujur: ${data.result.Bujur}`
        let doiku = data.result.Waktu
        document.getElementById("lock").innerHTML = lock
        document.getElementById("keku").innerHTML = keku
        document.getElementById("budic").innerHTML = lint
        document.getElementById("doi").innerHTML = doiku
    })
    .catch(err => {
        alert(`kesalahan kemungkinan offline ${err}`)
        console.log(err)
        let tes = `Kesalahan adanya error ` + err
        document.getElementById("lock").innerHTML = tes
        document.getElementById("keku").innerHTML = tes
        document.getElementById("budic").innerHTML = tes
        document.getElementById("doi").innerHTML = tes
    });
}