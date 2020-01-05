const consulta = `{ olaMundoQry }`

const opcoes = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/JSON'
    },
    body: JSON.stringify({
        query: consulta
    })
}

const criaOlaMundo = (valor) => {
    const body = document.querySelector('body')
    body.innerHTML = valor
}

fetch('http://localhost:4000/graphql', opcoes)
    .then(resposta => resposta.json())
    .then(dados => criaOlaMundo(dados.data.olaMundoQry))