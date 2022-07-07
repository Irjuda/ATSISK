/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function calcWeightLb(weight) {

    let weightLb = weight * 2.2046
    let weightG = weight / 0.0010000
    let weightOz = weight * 35.274

    return [`${weightLb} Lb`, 
            ` ${weightG} g`, 
            ` ${weightOz} OZ`]
}

let form = document.querySelector('form')

// @ts-ignore
form.addEventListener('submit', () => {
    // @ts-ignore
    event.preventDefault()

    // @ts-ignore
    let weight = document.querySelector('input[id="search"]').value 

    let output = document.querySelector('#output')
            
    // @ts-ignore
    output.innerHTML = calcWeightLb(weight)
    // @ts-ignore
    output.style.textAlign = 'center'
    // @ts-ignore
    output.style.fontSize = '35px'
})