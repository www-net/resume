import AbstractComponent from "../abstract-component"

const createEducationTemplate = (store) => {
  const sectionName = store.getData().education.sectionName
  return (
    `<section class="education">
        <h2 class="education__title" contentEditable="true" id="sectionName">${sectionName}</h2>
        <ul class="education__list">

        </ul>
      </section>`
  )
}

export default class Education extends AbstractComponent {

  constructor(store){
    super()
    this._store = store
  }

  getTemplate() {
    return createEducationTemplate(this._store)
  }
}