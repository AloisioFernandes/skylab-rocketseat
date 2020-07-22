const arr = [1, 2, 3, 4, 5]
console.log(arr.map(item => item + 10))

const usuario = { nome: 'Diego', idade: 23 }
const mostraIdade = usuario => usuario.idade
console.log(mostraIdade(usuario))

const nome = 'Diego'
const idade = 23
const mostraUsuario = (nome='Diego', idade=18) => {
    return {
        nome,
        idade
    }
}
console.log(mostraUsuario(nome, idade))
console.log(mostraUsuario(nome))

const promise = () => {
    return new Promise((resolve, reject) => resolve()
)} 