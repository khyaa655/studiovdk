function vikoberita() {
    fetch('https://viko-api.herokuapp.com/api/info/covidworld?apikey=rxking')
    .then(response => response.json())
    .then(data => {
        console.log(data)


        let sdss = data.result.totalCases
        let pulih = data.result.recovered
        let mati = data.result.deaths
        let aktip = data.result.activeCases
        let clos = data.result.closedCases
        let updt = data.result.lastUpdate
        document.getElementById("data-bs").innerHTML = sdss
        document.getElementById("data-pulih").innerHTML = pulih
        document.getElementById("data-ningoy").innerHTML = mati
        document.getElementById("data-upp").innerHTML = updt
    })
    .catch(err => {
        console.log(err)
    });
}
function igstalk() {
    fetch('https://viko-api.herokuapp.com/api/stalk/ig?apikey=rxking&query=vikodwik_rmx')
    .then(response => response.json())
    .then(data => {
        console.log(data)


        let ledalede = data.result.Username
        let ledal = data.result.Jumlah_Followers
        let polo = data.result.Jumlah_Following
        document.getElementById("followw").innerHTML = ledalede
        document.getElementById("foll").innerHTML = polo
        document.getElementById("beck").innerHTML = ledal
    })
    .catch(err => {
        console.log(err)
    });
}