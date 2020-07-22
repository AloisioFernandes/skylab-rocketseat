let usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
]

function skills(Arrayobj){
    for(let info of Arrayobj){
        console.log(`O ${info.nome} possui as habilidades: ${info.habilidades.join(', ')}`)
    }
}

skills(usuarios)