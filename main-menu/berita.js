
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

function vikoapi() {
    fetch('https://viko-api.herokuapp.com/api/random/informasi?&apikey=rxking')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let intejer = data.result.infoku
        let inpo = data.result.bug
        document.getElementById("crito").innerHTML = inpo

        document.getElementById("informasi").innerHTML = intejer
    })
    .catch(err => {
        console.log(err)
    });
}
