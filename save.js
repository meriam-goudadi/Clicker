function load() {
    const savedState = localStorage.getItem('diamondGameState');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        parsedDiamond = gameState.diamond;
        parsedClickerCost = gameState.clickerCost;
        clickerLevel.innerHTML = gameState.clickerLevel;
        parsedPickaxeCost = gameState.pickaxeCost;
        pickaxeLevel.innerHTML = gameState.pickaxeLevel;
        parsedMinerCost = gameState.minerCost;
        minerLevel.innerHTML = gameState.minerLevel;
        dpc = gameState.dpc;
        gps = gameState.gps;

        // Update displayed values
        diamond.innerHTML = Math.round(parsedDiamond);
        clickerCost.innerHTML = Math.round(parsedClickerCost);
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost);
        minerCost.innerHTML = Math.round(parsedMinerCost);
    }
}
// Call load when the page loads
window.onload = load;

// Call save after any significant change in the game state
function buyClick() {
    if (parsedDiamond >= parsedClickerCost) {
        parsedDiamond -= parsedClickerCost;
        diamond.innerHTML = Math.round(parsedDiamond);
        clickerLevel.innerHTML++;
        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost);
        save(); // Save the game state
    }
}
