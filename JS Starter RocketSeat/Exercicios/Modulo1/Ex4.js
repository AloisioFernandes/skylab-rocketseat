let anosEstudo = 7
let categoria = ''

function experiencia(anos) {
    if(anos <= 1) categoria = 'Iniciante'
    else if(anos > 1 && anos <= 3) categoria = 'Intermediário'
    else if(anos > 3 && anos <= 6) categoria = 'Avançado'
    else categoria = 'Jedi Master'
    console.log(categoria)
}

experiencia(anosEstudo)