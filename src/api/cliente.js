const getClients = () => {
  return fetch('http://localhost:4000/clientes')
    .then(resposta => {
      return resposta.json()
    })
    .then(json => {
      return json
    })
}

const createClient = (nome, cpf) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  })
  return fetch('http://localhost:4000/clientes/cliente', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: json
    })
    .then(resp => {
      return resp.body
    })
}

const deleteClient = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE",
  })
}


const getClientById = id => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
      method: 'GET'
    })
    .then(resposta => {
      return resposta.json()
    })
}

const updateClient = (id, cpf, nome) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  })
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: json
  })
}

export {
  getClients,
  createClient,
  deleteClient,
  getClientById,
  updateClient
}