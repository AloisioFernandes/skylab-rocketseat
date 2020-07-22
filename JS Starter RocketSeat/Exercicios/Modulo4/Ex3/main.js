// executar index.html
let res = []
let lista = document.getElementById('repos')

function buscar() {
    //res = res.slice(0,...res) 
    //res.forEach(item => res.pop())
    let usuario = document.getElementsByName('user')[0].value
    renderPage()
    res[0] = 'Carregando...'
    renderPage()

    try {
        axios.get(`https://api.github.com/users/${usuario}/repos`)
            .then(function(response){
                res = response.data.map(item => item.name)
                renderPage()
            })
            .catch(function(reject){
                res[0] = 'Erro 404: Nada encontrado'
                renderPage()
            })
    } catch {
        reject()
    }
}

function renderPage(){
    lista.innerHTML = ''
    res.forEach(item => {
        let nome = document.createElement('li')
        nome.innerText = item
        lista.appendChild(nome)
    })
}