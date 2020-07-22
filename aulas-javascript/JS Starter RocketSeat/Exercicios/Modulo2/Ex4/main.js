let elementoLista = document.querySelector('#lista')
let elementoInput = document.getElementById('nome')

let nomes = ['Diego', 'Gabriel', 'Lucas']

function preencher() {
    elementoLista.innerHTML = ''

    for(let dev of nomes){
        let pessoa = document.createElement('li')
        let pessoaTexto = document.createTextNode(dev)
        
        pessoa.appendChild(pessoaTexto)

        elementoLista.appendChild(pessoa)
    }
}

preencher()

function adicionar() {
    let nomeTexto = elementoInput.value

    nomes.push(nomeTexto)
    elementoInput.value = ''
    preencher()
}