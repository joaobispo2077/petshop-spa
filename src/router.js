import initRegister from "./componentes/cadastro/create-client";
import initializeTable from "./componentes/lista/listagem-cliente";

const routes = {
  "/": initializeTable,
  "/cadastro": initRegister,
}

const rootDiv = document.querySelector('[data-container]');

const navigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = '';

  const initRoute = routes[window.location.pathname];

  rootDiv.appendChild(initRoute());
}

window.navigate = navigate;

window.onpopstate = () => {

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
}

export default navigate;