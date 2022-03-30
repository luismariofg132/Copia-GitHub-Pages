import { getInfoUser } from "../helpers/getUsers.js"
import { ShowCard } from "../modules/showCard.js"
let contenedorTarjetas = document.getElementById('container-Cards');


document.addEventListener('DOMContentLoaded', async () => {
    let userInfoFetch = await Promise.all(getInfoUser())
    .then( res => res)

    ShowCard(userInfoFetch, contenedorTarjetas);
})


document.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('link')){
        localStorage.setItem('user', e.target.id)
    }
})
