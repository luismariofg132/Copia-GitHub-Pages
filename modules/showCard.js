

export const ShowCard = (data, container) => {

    data.forEach(item => {
        let {login} = item;
        container.innerHTML +=`
        <div id="card">
           <h1>${login}</h1>
           <a id=${login} href="./pages/detalle.html"><h2>Ver repositorios</h2></a>
        </div>
        `
    })
}