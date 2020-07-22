let skills = ['Javascript', 'ReactJS', 'React Native']
let JScoder = 0

function temHabilidades(skills){
    if(skills.indexOf('Javascript') != -1){
        JScoder = true
    } else {
        JScoder = false
    }
    console.log(JScoder)
}

temHabilidades(skills)