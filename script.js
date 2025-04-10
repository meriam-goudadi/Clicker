let diamond = document.querySelector(".diamondCost");
let parsedDiamond = parseFloat(diamond.innerHTML);

let clickerCost = document.querySelector(".clickerCost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

let clickerLevel = document.querySelector(".clicker-level");
let clickerIncrease = document.querySelector(".clicker-increase");
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

let pickaxeCost = document.querySelector(".pickaxeCost");
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML);

let pickaxeLevel = document.querySelector(".pickaxe-level");
let pickaxeIncrease = document.querySelector(".pickaxe-increase");
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML);

let minerCost = document.querySelector(".minerCost");
let parsedMinerCost = parseFloat(minerCost.innerHTML);

let minerLevel = document.querySelector(".miner-level");
let minerIncrease = document.querySelector(".miner-increase");
let parsedMinereIncrease = parseFloat(minerIncrease.innerHTML);

letgpcText = document.getElementById(".gpc-text");
let gpsText = document.getElementById(".gps-text");

let diamondimgcontainer = document.querySelector(".diamond-img-container");

// dpc = diamand par clic
let dpc = 1;
let gps = 0;

// fonction incrémental quand on click cela ajout un nombre au compteur
function incrementDiamond(event) {
    parsedDiamond += dpc;
    diamond.innerHTML = Math.round(parsedDiamond);

    const x = event.offSetx
const y = event.offSetY

const div = docusent.createlement("div")
div.innerHTML = `+${Math.round(gpc)}`;
div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`;

    diamondimgcontainer.appendChild(div);
    div.lassList.add("fade-up");
    setTimeout(() => {
        div.remove();
    }
    , 1000);
}

// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant 
function buyClick() {
    if (parsedDiamond >= parsedClickerCost) {
        parsedDiamond -= parsedClickerCost;
        diamond.innerHTML = Math.round(parsedDiamond);

        clickerLevel.innerHTML++;
        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.10).toFixed(2));
        clickerIncrease.innerHTML = parsedClickerIncrease;
        dpc += parsedClickerIncrease;

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost);
    }
}

// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant
function buyPickaxe() {
    if (parsedDiamond >= parsedPickaxeCost) {
        parsedDiamond -= parsedPickaxeCost;
        diamond.innerHTML = Math.round(parsedDiamond);

        pickaxeLevel.innerHTML++;
        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.22).toFixed(2));
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease;
        gps += parsedPickaxeIncrease;

        parsedPickaxeCost *= 1.18;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost);
    }
}

// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant
function buyMiner() {
    if (parsedDiamond >= parsedMinerCost) {
        parsedDiamond -= parsedMinerCost;
        diamond.innerHTML = Math.round(parsedDiamond);

        minerLevel.innerHTML++;
        parsedMinereIncrease = parseFloat((parsedMinereIncrease * 1.03).toFixed(2));
        minerIncrease.innerHTML = parsedMinereIncrease;
        gps += parsedMinereIncrease;

        parsedMinerCost *= 1.18;
        minerCost.innerHTML = Math.round(parsedMinerCost);
    }
}

setInterval(() => {
    parsedDiamond += gps / 10;
    diamond.innerHTML = Math.round(parsedDiamond);
    gpsText.innerHTML = Math.round(gps);
    gpcText.innerHTML = Math.round(dpc);
}, 100);

function save() {
    localStorage.setItem('diamondGameState', JSON.stringify({
        diamond: parsedDiamond,
        clickerCost: parsedClickerCost,
        clickerLevel: parseInt(clickerLevel.innerHTML),
        pickaxeCost: parsedPickaxeCost,
        pickaxeLevel: parseInt(pickaxeLevel.innerHTML),
        minerCost: parsedMinerCost,
        minerLevel: parseInt(minerLevel.innerHTML),
        dpc: dpc,
        gps: gps
    }));
}

