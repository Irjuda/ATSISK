/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget
    }

    getWasExpensive() {
        return this.wasExpensive
    }

    wasExpensive() {
        if (this.budget > 100000000) {
                return this.isExpensive = true
            }
            else {
                return this.isExpensive = false
            }
    }
}


let data = []

let title = 'Vienas namuse'
let director = 'Chris Columbus'
let budget = 150000000

function pushNewMovie(title, director, budget) {
    data.forEach((item) =>{
        let newMovie = new Movie(item.title, item.director, item.budget, item.budget)

        data.push(newMovie)  
        
        return data
    })
}


console.log(data)