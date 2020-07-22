const usuario = { nome: 'Diego' }

usuario.nome = 'Al'

console.log(usuario)

function teste(x) {
    let y = 2

    if(x > 5) {
        let y = 4

        console.log(x, y)
    }
}

//console.log(y) // pelo escopo não funciona

teste(10)