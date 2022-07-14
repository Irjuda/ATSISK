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

// @ts-ignore
btn.addEventListener('click', () => {
    // @ts-ignore
    message.innerHTML = null

    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            createUserCard(result)
        })
        .catch(error => console.log('klaida: ' + error))

    let users = []
    
    function createUserCard(data) {
        class User {
            constructor(login, avatar_url) {
                this.login = login
                this.avatar_url = avatar_url
            }
    
            getLogin() {
                return this.login
            }
        
            generateHtmlCard() {
                return `
                    <div class="users">
                    <div id="username">${this.getLogin()}</div>
                    <img src="${this.avatar_url}" alt="">
                    </div>
                    `
            }
        }
    
        let newData = []
    
        data.forEach(item => {
            let newUser = new User(item.login, item.avatar_url)
    
            newdata.push(newUser)
        })
    
        newData.forEach(user => {
            // @ts-ignore
            output.innerHTML += user.generateHtmlCard()
        })
    }
})