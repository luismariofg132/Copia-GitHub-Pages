import { userName } from "../data/data.js";

export const getInfoUser = () => {

    let data = userName.map(async (user) => {
        let res = await fetch(`https://api.github.com/users/${user}`)
        let userInfo = await res.json();
        return userInfo
     })

     console.log("informacion dentro de la promesa", data)

    return data;
}


