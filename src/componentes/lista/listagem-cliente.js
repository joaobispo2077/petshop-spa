import { getClients, deleteClient, } from '../../api/cliente.js';
import '../../assets/css/clientes.css';
import initRegister from '../cadastro/create-client';

const removeClient = (id) => {
  if (confirm("Deseja deletar o cliente ?")) {
    debugger;
    deleteClient(id)
    window.location.reload()
  }
}
const content = `
  <thead class="thead-dark">
    <tr>
    <th scope="col">Nome</th>
    <th scope="col">CPF</th>
    <th scope="col"></th>
    <th scope="col"><a class="btn btn-primary">Novo Cliente</a></th>
    </tr>
  </thead>
`;

const container = document.querySelector('[data-container]');
const table = document.createElement('table');

table.innerHTML = content;
table.classList.add("table");

container.appendChild(table);

const buttonNewClient = document.querySelector('.btn');

buttonNewClient.addEventListener('click', () => {
  initRegister();
});


const bodyTable = document.createElement('tbody');

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

table.appendChild(bodyTable);