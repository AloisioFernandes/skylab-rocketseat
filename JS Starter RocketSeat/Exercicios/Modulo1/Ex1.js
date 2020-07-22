let endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

function infos(obj) {
        return `O usuário mora em ${obj.cidade} / ${obj.uf}, no bairro ${obj.bairro}, na rua "${obj.rua}" com n° ${obj.numero}`
}

const resultado = infos(endereco)
console.log(resultado)