import initRegister from "./componentes/cadastro/create-client";

const routes = {
  "/cadastro": initRegister()
}

const rootDiv = document.querySelector('[data-container]');

const navigate = path => {
  window.history.pushState({}, path, window.location.origin + path);

  rootDiv.innerHTML = '';

  const initRoute = routes[window.location.path];

  rootDiv.appendChild(initRoute());
}

export default { navigate };