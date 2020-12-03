import { getClients, deleteClient, } from '../../api/cliente.js';

const removeClient = (id) => {
  if (confirm("Deseja deletar o cliente ?")) {
    debugger;
    deleteClient(id)
    window.location.reload()
  }
}

const bodyTable = document.querySelector("[data-conteudo-tabela]");

const showClient = (cpf, nome, id) => {
  const line = document.createElement('tr');

  const lineContent = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="./componentes/edita/edita-clientes.html?id=${id}">
    <button type=""button class="btn btn-info">Editar</button>
    </a>
    
    
`

  line.innerHTML = lineContent;
  return line;
};

getClients().then(exibe => {
    exibe.forEach(indice => {
      bodyTable.appendChild(showClient(indice.cpf, indice.nome, indice.id))
    })
  }

)