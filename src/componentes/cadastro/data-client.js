import validaCPF from '../valida/validaCPF';
import { createClient } from '../../api/cliente';

const submitEvent = (form) => {

  form.addEventListener("submit",
    event => {
      event.preventDefault();

      const name = event.target.querySelector("[data-nome]").value
      const cpf = event.target.querySelector("[data-cpf]").value

      if (validaCPF(cpf)) {
        createClient(name, cpf);
      } else {
        alert('O CPF não é válido');
      }



    }
  )
}

export default submitEvent;