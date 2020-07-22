async function getUserFromGithub(user) {
    try {
        const resp = await axios.get(`https://api.github.com/users/${user}`)
        console.log(resp.data)
    } catch(err) {
        console.log('Usuário não existe')
    }
}

getUserFromGithub('diego3g')
getUserFromGithub('diego3gg')