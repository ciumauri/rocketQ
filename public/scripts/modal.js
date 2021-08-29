export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    //funcionalidade para atribuir a classe active para o modal
    modalWrapper.classList.add('active')
  }
  function close() {
    //funcionalidade para remover a classe active do modal
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
