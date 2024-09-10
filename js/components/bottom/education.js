import { createElement } from "../../util"

const createEducationTemplate = () => {
  return (
    `<section class="education">
        <h2 class="education__title">Education</h2>
        <ul class="education__list">

        </ul>
      </section>`
  )
}

export default class Education {
  constructor(){
    this._element = null
  }

  getTemplate() {
    return createEducationTemplate()
  }

  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate())
    }
    return this._element
  }

  removeElement() {
    this._element = null
  }
}