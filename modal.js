const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const modalTrue = document.querySelector('#modal-true');
const modalFalse = document.querySelector('#modal-false');

// Abrindo Modal
const botaoEl = document.getElementById('btn-enviar');
botaoEl.addEventListener('click', abreModal);

// function abreModal(e) {
// 	const modalEl = document.querySelector('.modal');
// 	modalEl.classList.add('visivel');
// }

function abreModal(e) {
  if (inputNome.value == '' || inputEmail.value == '') {
    modalFalse.classList.add('visivel');
  } else {
    modalTrue.classList.add('visivel');
  }
}

// Fechando Modal
const botoesDeFechar = document.querySelectorAll('.btn-fechar');
botoesDeFechar.forEach((fechaEl) =>
  fechaEl.addEventListener('click', fechaModal)
);

function fechaModal(e) {
  modalFalse.classList.remove('visivel');
  modalTrue.classList.remove('visivel');
}
