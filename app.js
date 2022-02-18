const showChamp = document.getElementById('champPickElement');

const champs = [
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",


];

function randomChampion(){
    const randomPick = Math.floor(Math.random() * 8);
    showChamp.innerText = champs[randomPick];
    // return champs[randomPick];
}