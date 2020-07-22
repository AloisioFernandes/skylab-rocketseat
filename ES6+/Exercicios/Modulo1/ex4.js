const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
}

const { nome, endereco: { cidade }, endereco: { estado } } = empresa
console.log(nome)
console.log(cidade)
console.log(estado)

function mostraInfo(usuario) {
    const { nome, idade } = usuario
    return `${nome} tem ${idade} anos.`
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }))