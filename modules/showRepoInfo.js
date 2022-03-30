export const showRepoInfo = (array, container) => {
    array.forEach(item => {

        const { name, visibility, description, topics, language, homepage, git_url } = item;


        let color = language == 'JavaScript' ? '#FCA708' : language == 'HTML' ? '#FC5608' : '#0864FC';
        let url = git_url.replace('git:', 'https:');

        if (language == 'JavaScript' || language == 'HTML') {
            container.innerHTML += `
    <div id="container-card">
    <hr>
    <div id="info-card">
        <h3>${name}</h3>
        <span id="tag-1">${visibility}</span>
        <p>${description ? description : "Repositorio sin descripcion"}</p>
        <div class="container-tag">
        ${topics.map(topic => {
                return `<span class="tag">${topic}</span>`
            })
                }
        </div>
        <div class="footer">
            <span style="background-color:${color}"></span>
            <h5>${language}</h5>

            ${homepage ?
                    `<a target="_blank" href="${homepage}">homepage</a> ` : ' '
                }
           
            <a target="_blank" href=${url}>ver repositorio</a>
        </div>
    </div>
    <hr>
</div>
    `
        }

    })
}