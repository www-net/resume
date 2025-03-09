import AbstractComponent from '../abstract-component'

const createExperienceTemplate = (store) => {

const sectionName = store.getData().experience.sectionName

  return (
    `<section class="experience">
      <h2 class="experience__title" contentEditable="true" id="sectionName">${sectionName}</h2>
      <ul class="experience__list">

      <!-- cards -->

      </ul>
    </section>`
  )
}

export default class Experience extends AbstractComponent {

  constructor(store) {
  super()
  this._store = store
}

getTemplate() {
  return createExperienceTemplate(this._store)
}
}
