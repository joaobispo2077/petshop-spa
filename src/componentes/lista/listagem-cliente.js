import { getClients, deleteClient, } from '../../api/cliente.js';
import '../../assets/css/clientes.css';


const removeClient = (id) => {
  if (confirm("Deseja deletar o cliente ?")) {
    debugger;
    deleteClient(id)
    window.location.reload()
  }
}
const createButtonRemove = (id) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.innerHTML = 'Excluir';

  button.addEventListener('click', () => {
    removeClient(id)
  })

  return button;
}

const createBodyTable = (table) => {
  const bodyTable = document.createElement('tbody');

  const showClient = (cpf, nome, id) => {
    const line = document.createElement('tr');

    const lineheader = `
      <td>${cpf}</td>
      <td>${nome}</td>
      
      <button type=""button class="btn btn-info" onclick="navigate('/edita?id=${id}'); return false;"">Editar</button>   
      `

    line.innerHTML = lineheader;
    line.appendChild(createButtonRemove(id));
    return line;
  };


  getClients().then(exibe => {
    exibe.forEach(indice => {
      bodyTable.appendChild(showClient(indice.cpf, indice.nome, indice.id))
    })
  });

  table.appendChild(bodyTable);
}

const initializeTable = () => {

  const header = `
    <thead class="thead-dark">
      <tr>
      <th scope="col">Nome</th>
      <th scope="col">CPF</th>
      <th scope="col"></th>
      <th scope="col"><a class="btn btn-primary" onclick="navigate('/cadastro'); return false;">Novo Cliente</a></th>
      </tr>
    </thead>
  `;

  const table = document.createElement('table');

  table.innerHTML = header;
  table.classList.add("table");

  createBodyTable(table);
  return table;
}

export default initializeTable;