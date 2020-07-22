// executar index.html
let res = []
let lista = document.getElementById('repos')
let usuario = document.getElementsByName('user')[0].value

function buscar() {

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
        } catch(e) {
            reject(e)
        } 
}

function renderPage() {
    lista.innerHTML = ''
    res.forEach(item => {
        let nome = document.createElement('li')
        nome.innerText = item
        lista.appendChild(nome)
    })
}