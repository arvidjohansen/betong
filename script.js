
var formEl = document.getElementById("form");
var volumYtreEl = document.getElementById("volumYtre")
var volumIndreEl = document.getElementById("volumIndre")
var volumTotalEl = document.getElementById("volumTotal")
var vektEl = document.getElementById("vekt")
var antallSekkerEl = document.getElementById("antallSekker")
var antallSekkerRoundedEl = document.getElementById("antallSekkerRounded");
var sumEl = document.getElementById("sum");
var resultatEl = document.getElementById("resultat");
var sekkStorrelse = 25 //kg
var prisPerSekk = 89;



function onSubmit(e){
    e.preventDefault();
    data = formEl.elements;
    console.log(data);

    var dmIndre = data['dmIndre'].value;
    var dmYtre = data['dmYtre'].value;
    var lengde = data['lengde'].value;

    var volYtre = getVolume(dmYtre/2,lengde)
    var volIndre = getVolume(dmIndre/2,lengde)
    var volTot = volYtre - volIndre;
    var vekt = getVektKg(volTot);
    var antallSekker = getAntallSekker(vekt);
    var antallSekkerRounded = getAntallSekkerRounded(vekt);
    var totalPrice = getTotalPrice(antallSekkerRounded);

    updateOutput(volYtre,volIndre,volTot,vekt,antallSekker,antallSekkerRounded,totalPrice);

    
}
formEl.addEventListener('submit',onSubmit);


function updateOutput(volYtre, 
    volIndre, 
    volTot,
    vekt,
    antallSekker,
    antallSekkerRounded,
    totalPrice)
    {
    volumYtreEl.value = volYtre;
    volumIndreEl.value = volIndre;
    volumTotalEl.value = volTot;
    vektEl.value = vekt;
    antallSekkerEl.value = antallSekker;
    antallSekkerRoundedEl.innerHTML = antallSekkerRounded;
    sumEl.innerHTML = totalPrice;
    resultatEl.classList.remove("hidden")
}

function getAntallSekker(vektKg){
    return vektKg / sekkStorrelse
}

function getAntallSekkerRounded(vektKg){
    return Math.ceil(vektKg/sekkStorrelse);
}

function getTotalPrice(sekker){
    return sekker * prisPerSekk;
}

function getVektKg(volCm3){
    //usikker
    var liter = volCm3 / 1000;
    return (liter / 12.5) * 2
}
function getVolume(r,l){
    return Math.PI*(r*r)*l
}