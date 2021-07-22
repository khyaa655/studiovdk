function getDataIndonesia() {
    fetch('https://viko-api.herokuapp.com/api/info/covidworld?apikey=rxking')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let positif = data.result.totalCases
        let sembuh = data.result.recovered
        let meninggal = data.result.deaths
        let update = data.result.lastUpdate
		let aktif = data.result.activeCases
		
        document.getElementById("data-sembuh").innerHTML = sembuh
        document.getElementById("data-meninggal").innerHTML = meninggal 
        document.getElementById("data-positif").innerHTML = positif 
		document.getElementById("data-update").innerHTML = update
		document.getElementById("data-aktif").innerHTML = aktif
    })
    .catch(err => {
        console.log(err)
    });
}
function getgempa() {
    fetch('https://viko-api.herokuapp.com/api/info/gempa?apikey=rxking')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let lokasi = data.result.Wilayah
        let magnu = data.result.Magnitudo
		let kedalam = data.result.Kedalaman
		let wktu = data.result.Waktu
        document.getElementById("data-lokasi").innerHTML = lokasi
		document.getElementById("data-magnu").innerHTML = magnu
		document.getElementById("data-kedalam").innerHTML = kedalam
		document.getElementById("data-wktu").innerHTML = wktu
    })
    .catch(err => {
        console.log(err)
    });
}
function getberita() {
    fetch('https://viko-api.herokuapp.com/api/info/berita?apikey=rxking')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let pesan = data.result.link

        document.getElementById("data-berita").innerHTML = pesan
    })
    .catch(err => {
        console.log(err)
    });
}