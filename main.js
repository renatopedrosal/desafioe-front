var btnEnviar = document.getElementById('btn-fechar-true');
const btnSubmit = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', () => {
  console.log('Clicado');
});

// Pegando dados GitHub

axios
  .get('https://api.github.com/users/renatopedrosal')
  .then(function (response) {
    console.log(response.data);
    console.log(response.data.login);
    console.log(response.data.name);
  })
  .catch(function (error) {
    console.log(error);
  });
