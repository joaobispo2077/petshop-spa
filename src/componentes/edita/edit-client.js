import { getClientById, updateClient } from '../../api/client';
import validaCPF from '../valida/validaCPF';

const formEvent = form => {


  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')

  const inputCPF = document.querySelector('[data-cpf]')
  const inputNome = document.querySelector('[data-nome]')

  getClientById(id).then(dados => {
    inputCPF.value = dados[0].cpf
    inputNome.value = dados[0].nome
  })

  const alert = (classe, mensagem) => {
    const linha = document.createElement('section');

    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>
    
    `

    linha.innerHTML = conteudoLinha;
    return linha;
  }
  form.addEventListener('submit', event => {
    event.preventDefault()

    if (!validaCPF(inputCPF.value)) {
      alert("ESSE CPF NÃO EXISTE")
      return
    }

    updateClient(id, inputCPF.value, inputNome.value)
      .then(() => {
        form.appendChild(alert(
          "alert alert-success",
          "CLIENTE EDITADO COM SUCESSO !"
        ))
      })
      .catch(() => {
        form.appendChild(alert(
          "alert alert-warning",
          "O CLIENTE NÃO PODE SER EDITADO !"
        ))
      });
  })
}

export default formEvent;