class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super() // chama contructor da classe pai

        this.usuario = 'Diego'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario()

class Matematica {
    static soma(a, b) { // executa função independente de outros valores da classe
        return a + b
    }
}

console.log(Matematica.soma(1, 2))