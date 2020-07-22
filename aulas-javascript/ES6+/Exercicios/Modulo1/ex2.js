const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
]

const idades = usuarios.map(idd => idd.idade)
console.log(idades)

const rocketMaior = usuarios.filter(pessoa => {
    return (pessoa.idade >= 18 && pessoa.empresa === 'Rocketseat')
} )
console.log(rocketMaior)

const GoogleDev = usuarios.find(dev => dev.empresa === 'Google')
console.log(GoogleDev)

const DobroCinq = usuarios.map(dob => {
    return {
        nome: dob.nome,
        idade: dob.idade * 2,
        empresa: dob.empresa
    }
}).filter(cinc => cinc.idade < 50)
console.log(DobroCinq)