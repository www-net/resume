import AbstractComponent from "../abstract-component";

const createSavePdfTemplate = () => {
  return (`
    <div class="save-wrapper"><button class="save-pdf">Скачать в PDF</button></div>
    `)
}

export default class SavePdf extends AbstractComponent {

  getTemplate() {
    return createSavePdfTemplate()
  }

  setSaveButtonClickHandler(handler) {
    this.getElement().querySelector('.save-pdf').addEventListener('click', (evt) => {
      evt.preventDefault()
      handler(evt)
    })
  }
}