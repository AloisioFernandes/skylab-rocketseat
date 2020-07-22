const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    },
}

const { nome, idade, endereco: { cidade } } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({ nome, idade }) {
    console.log(nome, idade)
}

mostraNome(usuario)

// REST

const usuario2 = {
    nome2: 'Al',
    idade: 19,
    empresa: 'Nenhuma'
}

const { nome2, ...resto } = usuario2

console.log(nome2)
console.log(resto)

const arr = [1, 2, 3, 4]

const [ a, b, ...c ] = arr

console.log(a)
console.log(b)
console.log(c)

function soma(...params) {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 3, 4))

// SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [ ...arr1, ...arr2 ]
console.log(arr3)

const usuario3 = {
    nome3: 'Diego',
    idade3: 23,
    empresa3: 'Rocketseat',
}

const usuario4 = { ...usuario3, nome3: 'Gabriel' }
console.log(usuario4)