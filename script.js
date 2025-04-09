let diamond = document.querySelector(".diamondCost")
let parsedDiamond = parseFloat(diamond.innerHTML)

// parse convertis les chaine de charactere en nombre pour faire des calcules
let clickerCost = document.querySelector(".clickerCost")
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

//  variable pour pickaxe

 let pickaxeCost = document.querySelector(".pickaxeCost")
 let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML)
 let pickaxeLevel = document.querySelector(".pickaxe-level")
 let pickaxeIncrease = document.querySelector(".pickaxe-increase")
 let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

 

let dpc = 1

// fonction incrémental quand on click cela ajout un nombre au compteur

function incrementDiamond() {

    
    diamond.innerHTML = Math.round(parsedDiamond += dpc) 
}

// fonction qui permet d'acheter une amélioration quand on achete une amélioration le prix est déduit du score de diamant 

function buyClick() {
    if (parsedDiamond >= parsedClickerCost) {
    diamond.innerHTML = Math.round(parsedDiamond -= parsedClickerCost)


    clickerLevel.innerHTML ++

    parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
    clickerIncrease.innerHTML = parsedClickerIncrease 
    dpc += parsedClickerIncrease

    parsedClickerCost *= 1.18
    clickerCost.innerHTML = Math.round(parsedClickerCost)
    }


    
}


//  fonction permet d'acheter des pioche 

function buyPickaxe() {
    if (parsedDiamond >= parsedPickaxeCost) {
    diamond.innerHTML = Math.round(parsedDiamond -= parsedPickaxeCost)


    pickaxeLevel.innerHTML ++

    parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))
    pickaxeIncrease.innerHTML = parsedPickaxeIncrease 
    dpc += parsedPickaxeIncrease

    parsedPickaxeCost *= 1.18
    pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }


    
}