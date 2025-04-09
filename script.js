let diamond = document.querySelector(".diamondCost")  
let parsedDiamond = parseFloat(diamond.innerHTML)

// parse convertis les chaine de charactere en nombre pour faire des calcules
let pixkaxeCost = document.querySelector(".clickerCost")
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let PickaxeCost = document.querySelector(".pickaxeCost")
let parsedPickaxeCost = parseFloat(clickerCost.innerHTML)

let pickaxeLevel = document.querySelector(".pickaxe-level")
let pickaxeIncrease = document.querySelector(".pickaxe-increase")
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

// dpc = diamand par clic

let dpc = 1
let gps = 0

// fonction incrémental quand on click cela ajout un nombre au compteur

function incrementDiamond() {

    
    diamond.innerHTML = Math.round(parsedDiamond += dpc) 
}

// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant 

function buyClick() {
    if (parsedDiamond >= parsedPixkaxeCost) {
    diamond.innerHTML = Math.round(parsedDiamond -= parsedPixkaxeCost)


    pixkaxeLevel.innerHTML ++

    parsedPixkaxeIncrease = parseFloat((parsedPixkaxeIncrease * 1.03).toFixed(2))
    pixkaxeIncrease.innerHTML = parsedPixkaxeIncrease ;
    dpc += parsedPixkaxeIncrease;

    parsedPixkaxeCost *= 1.18 ;
    pixkaxeCost.innerHTML = Math.round(parsedPixkaxeCost);
    }


    
}
// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant

function buyPickaxe() {
    if (parsedDiamond >= parsedPickaxeCost) {
        diamond.innerHTML = Math.round(parsedDiamond -= parsedPickaxeCost)
    
        pickaxeLevel.innerHTML ++
    
        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease ;
        gps += parsedPickaxeIncrease;
    
        parsedPickaxeCost *= 1.18 ;
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost);
    }
}
setInterval(() => {
parsedDiamond += gps/10
diamond.innerHTML = Math.round(parsedDiamond)
}, 1000)
// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant
