/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš ten atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

fetch('./cars.json')
    .then(response => response.json())
    .then(result => {
        console.log(result)
        getCars(result)
    })
    .catch(error => console.log('klaida: ' + error))

function getCars(data) {
    class Car {
        constructor(brand) {
            this.brand = brand
        }

        setModels(models) {
            this.models = models
        }

        getModelsList() {
            let models = this.models.map(item => {
                return `
                    <li>${item.models}</li>
                    `
            })
        }

        generateBrandCard() {
            return `
                <div class='cars'>
                <div id="brand">${this.brand}</div>
                <div id="models">${this.getModelsList()}</div>  
                </div>               
                `
        }
    }

    let newData = []
    let output = document.querySelector('#output')
    
    data.forEach(item => {
        let newCar = new Car(item.brand)
        newCar.setModels(item.models)
    
        newData.push(newCar)
    })
    
    newData.forEach(user => {
        // @ts-ignore
        output.innerHTML += user.generateBrandCard()
    })
}