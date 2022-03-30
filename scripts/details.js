import { getRepoInfo } from "../helpers/getInfo.js";
import { showRepoInfo } from "../modules/showRepoInfo.js";
let contenedorRepos = document.getElementById('contenedor-repositorios');
const izquierda = document.getElementById('izquierda');

document.addEventListener('DOMContentLoaded', async () => {
  let userName = localStorage.getItem('user');

  let repos = await getRepoInfo(`https://api.github.com/users/${userName}/repos`)
    .then(res => res)

  let infoUser = await getRepoInfo(`https://api.github.com/users/${userName}`)
  showRepoInfo(repos, contenedorRepos);
  showUserInfo(infoUser);
})

const showUserInfo = (user) => {
  izquierda.innerHTML = ""
  izquierda.innerHTML += `
    <img src=${user.avatar_url} />
    <h2>${user.login}</h2>
    <h5>${user.name}</h5>
    <button>Follow</button>
    <button>Sponsor</button>
  `
}