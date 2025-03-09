import AbstractComponent from "../abstract-component";

const createToolsTemplate = (data) => {

  const sectionName = data.sectionName

  return (
    `<section class="tools">
      <h2 class="tools__title" contentEditable="true" id="sectionName">${sectionName}</h2>
      <ul class="tools__list">


      </ul>
    </section>`
  )
}
export default class Tools extends AbstractComponent {
  constructor(store) {
    super();
    this._data = store.getData().tools
  }

  getTemplate() {
    return createToolsTemplate(this._data)
  }
}