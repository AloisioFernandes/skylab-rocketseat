let nomes = ['Diego', 'Gabriel', 'Lucas']

function preecher() {
    for(let dev of nomes){
        pessoa = document.createElement('li')
        pessoa.innerHTML = dev
        document.getElementById('lista').appendChild(pessoa)
    }
}

preecher()