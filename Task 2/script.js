/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let btn = document.querySelector('#btn__element')
let click = 0

// @ts-ignore
btn.addEventListener('click', () => {
    
    click += 1;

    // @ts-ignore
    document.querySelector('#btn__state').innerHTML = click;
    
})