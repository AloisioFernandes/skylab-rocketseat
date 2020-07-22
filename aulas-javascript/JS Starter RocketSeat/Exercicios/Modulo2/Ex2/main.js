let sqr = 0

function quadrados() {
    sqr++
    let conteiner = document.getElementById('cont')
    let quadrado = document.createElement('div')

    quadrado.setAttribute('id', sqr).
    quadrado.setAttribute('onmouseover', 'changeColor(' + sqr + ')')

    quadrado.style.width = 100
    quadrado.style.height = 100
    quadrado.style.backgroundColor = '#f00'
    quadrado.style.margin = 5

    conteiner.appendChild(quadrado)
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function changeColor(id) {
    let newColor = getRandomColor()

    document.getElementById(id).style.backgroundColor = newColor
}