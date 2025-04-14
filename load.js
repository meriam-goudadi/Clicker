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