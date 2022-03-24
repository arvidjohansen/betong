
var formEl = document.getElementById("form");
var volumYtreEl = document.getElementById("volumYtre")
var volumIndreEl = document.getElementById("volumIndre")
var volumTotalEl = document.getElementById("volumTotal")
var vektEl = document.getElementById("vekt");
var egenvektBetong = 2.4 // g/cm^3
var ccmBetongPerSekk = 12.5 * 1000; //ccm betong per sekk
var sekkStorrelse = 25 //kg



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

    updateOutput(volYtre,volIndre,volTot,vekt);

    
}
formEl.addEventListener('submit',onSubmit);


function updateOutput(volYtre,volIndre,volTot,vekt){
    volumYtreEl.value = volYtre;
    volumIndreEl.value = volIndre;
    volumTotalEl.value = volTot;
    vektEl.value = vekt;
}

function getAntallSekker(vekt){

}

function getVektKg(volCm3){
    return volCm3 * egenvektBetong/1000;
}
function getVolume(r,l){
    return Math.PI*(r*r)*l;
}