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

let dpcText = document.getElementById("dpc-text");
let dpsText = document.getElementById("dps-text");

let diamondimgcontainer = document.querySelector(".diamond-img-container");

// dpc = diamand par clic
let dpc = 1;
let dps = 0;

// fonction incrémental quand on click cela ajout un nombre au compteur
function incrementDiamond(event) {
    parsedDiamond += dpc;
    diamond.innerHTML = Math.round(parsedDiamond);

    const x = event.offSetx
    const y = event.offSetY
    const diamondImg = document.createElement("img");
    diamondImg.src = "./Assets/vecteezy_diamond-cartoon-icon_10966305-removebg-preview.png"; // Use the correct image path
    diamondImg.style.cssText = `position: absolute; top: ${y}px; left: ${x}px; width: 50px; height: 50px; pointer-events: none;`;
    diamondImgContainer.appendChild(diamondImg);

    setTimeout(() => {
        diamondimg.remove();
    }, 1000);
    const div = document.createElement("div"); // Fixed typo
    div.innerHTML = `+${Math.round(dpc)}`;
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`;

    diamondImgContainer.appendChild(div);
    div.classList.add("fade-up"); // Fixed typo
    setTimeout(() => {
        div.remove();
    }, 1000);
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
        gps += parsedClickerIncrease;

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
        dps += parsedPickaxeIncrease;
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
        dps += parsedMinereIncrease;
        dps += parsedMinereIncrease;
        // dps += parsedMinereIncrease;

        parsedMinerCost *= 1.18;
        minerCost.innerHTML = Math.round(parsedMinerCost);
    }
}

setInterval(() => {
    parsedDiamond += dps / 10;
    diamond.innerHTML = Math.round(parsedDiamond);
    dpsText.innerHTML = Math.round(dps);
    dpcText.innerHTML = Math.round(dpc);
}, 100);

// Save game state to localStorage
function save() {
    const gameState = {
        diamond: parsedDiamond,
        clickerCost: parsedClickerCost,
        clickerLevel: parseInt(clickerLevel.innerHTML),
        clickerIncrease: parsedClickerIncrease,
        pickaxeCost: parsedPickaxeCost,
        pickaxeLevel: parseInt(pickaxeLevel.innerHTML),
        pickaxeIncrease: parsedPickaxeIncrease,
        minerCost: parsedMinerCost,
        minerLevel: parseInt(minerLevel.innerHTML),
        minerIncrease: parsedMinerIncrease,
        dpc: dpc,
        dps: dps
    };
    localStorage.setItem('diamondGameState', JSON.stringify(gameState));
}

// Load game state from localStorage
function load() {
    const savedState = localStorage.getItem('diamondGameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        parsedDiamond = gameState.diamond;
        parsedClickerCost = gameState.clickerCost;
        clickerLevel.innerHTML = gameState.clickerLevel;
        parsedClickerIncrease = gameState.clickerIncrease;
        clickerIncrease.innerHTML = parsedClickerIncrease;
        dpc = gameState.dpc;
        dps = gameState.dps;

        // Load pickaxe data
        parsedPickaxeCost = gameState.pickaxeCost;
        pickaxeLevel.innerHTML = gameState.pickaxeLevel;
        parsedPickaxeIncrease = gameState.pickaxeIncrease;
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease;

        // Load miner data
        parsedMinerCost = gameState.minerCost;
        minerLevel.innerHTML = gameState.minerLevel;
        parsedMinerIncrease = gameState.minerIncrease;
        minerIncrease.innerHTML = parsedMinerIncrease;

        // Update displayed values
        diamond.innerHTML = Math.round(parsedDiamond);
        clickerCost.innerHTML = Math.round(parsedClickerCost);
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost);
        minerCost.innerHTML = Math.round(parsedMinerCost);
        dpcText.innerHTML = Math.round(dpc);
        dpsText.innerHTML = Math.round(dps);
    }
}

// Call load when the page loads
window.onload = load;

