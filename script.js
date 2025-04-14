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
    diamond.innerHTML = Math.round(parsedDiamond += dpc)
    
    const x = event.offSetX
    const y = event.offSetY

    const div = document.createElement("div")
    div.innerHTML = `+${Math.round(dpc.toFixed(2))}` 
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    diamondImgContainer.appendChild(div)

    div.classList.add('fade-up')
}
 // Fixed typo
    setTimeout(() => {
        div.remove();
    }, 1000);
    function showClickValue(x, y) {
        // Créer un élément pour afficher le nombre
        const clickValueDisplay = document.createElement('div');
        clickValueDisplay.classList.add('click-value');
        clickValueDisplay.textContent = `+${dpc}`;
        
        // Positionner l'élément près du curseur
        clickValueDisplay.style.position = 'absolute';
        clickValueDisplay.style.left = `${x}px`;
        clickValueDisplay.style.top = `${y}px`;
        clickValueDisplay.style.color = '#43d1f5'; // Couleur bleue pour rappeler un diamant
        clickValueDisplay.style.fontSize = '20px';
        clickValueDisplay.style.fontWeight = 'bold';
        clickValueDisplay.style.pointerEvents = 'none'; // Pour ne pas interférer avec les clics
        clickValueDisplay.style.zIndex = '1000';
        clickValueDisplay.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.7)';
        
        // Ajouter l'élément au body
        document.body.appendChild(clickValueDisplay);
        
        // Animation : montée et disparition
        let opacity = 1;
        let top = parseFloat(clickValueDisplay.style.top);
        const interval = setInterval(() => {
            // Faire monter le texte
            top -= 1;
            clickValueDisplay.style.top = `${top}px`;
            
            // Faire disparaître progressivement
            opacity -= 0.02;
            clickValueDisplay.style.opacity = opacity;
            
            // Supprimer l'élément quand l'opacité atteint 0
            if (opacity <= 0) {
                clearInterval(interval);
                document.body.removeChild(clickValueDisplay);
            }
        }, 10);
    }
    
    // Modifier votre fonction incrementDiamond pour inclure l'affichage
    function incrementDiamond(event) {
        diamond.innerHTML = Math.round(parsedDiamond += dpc);
        
        // Afficher la valeur du clic à l'endroit où l'utilisateur a cliqué
        showClickValue(event.clientX, event.clientY);
    }
    
    // Assurez-vous que votre élément diamant a un gestionnaire d'événements 
    // qui transmet l'événement de clic à la fonction
    document.querySelector(".diamondCost").parentElement.addEventListener("click", function(event) {
        incrementDiamond(event);
    });
 
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
// Récupérer l'élément audio
const gameMusic = document.getElementById("game-music");

// Fonction pour démarrer la musique
document.getElementById("play-button").addEventListener("click", () => {
    gameMusic.play();
});

document.getElementById("pause-button").addEventListener("click", () => {
    gameMusic.pause();
});
function startMusic() {
    gameMusic.play();
}

// Appeler la fonction pour démarrer la musique lorsque le jeu commence
window.onload = function() {
    load(); // Charger l'état du jeu
    startMusic(); // Démarrer la musique
};
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
        minerIncrease: parsedMinereIncrease,
        dpc: dpc,
        dps: dps
    };
    localStorage.setItem('diamondGameState', JSON.stringify(gameState));
}



