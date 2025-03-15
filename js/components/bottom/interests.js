import AbstractComponent from "../abstract-component"

const createInterestsTemplate = (store) => {

  const {sectionName, items } = store.getData().interests

  const itemsToString = items.map(item => {
    return (`
        <li class="interests__list-item" contentEditable="true" id="interest"><span>${item}</span></li>
      `)
  }).join('\n')

  return (
    `<section class="interests">
            <h2 class="interests__title" contentEditable="true" id="sectionName">${sectionName}</h2>
            <ul class="interests__list" >

            ${itemsToString}

            </ul>
          </section>`
  )
}

export default class Interests extends AbstractComponent {
  constructor(store) {
    super(),
    this._store = store
  }

  getTemplate() {
    return createInterestsTemplate(this._store)
  }
}
