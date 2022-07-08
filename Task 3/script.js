/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';

let btn = document.querySelector('#btn')

let message = document.querySelector('#message')

let output = document.querySelector('#output')

// @ts-ignore
btn.addEventListener('click', () => {
    // @ts-ignore
    message.innerHTML = null

    class User {
        constructor(login, avatar_url) {
            this.login = login
            this.avatar_url = avatar_url
        }

        getLogin() {
            return this.login
        }
    
        generateHtmlCard() {
            return `<div class="users">
                    <div id="username">${this.getLogin()}</div>
                    <img src="${this.avatar_url}" alt="">`
        }
    }

    let data = []

    githubUsers.forEach(item => {
        let newUser = new User(item.login, item.avatar_url)

        data.push(newUser)
    })

    data.forEach(user => {
        // @ts-ignore
        output.innerHTML += user.generateHtmlCard()
    })
})