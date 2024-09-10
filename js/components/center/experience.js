import { createElement } from '../../util'

const createExperienceTemplate = () => {
  return (
    `<section class="experience">
      <h2 class="experience__title">Experience</h2>
      <ul class="experience__list">

      <!-- cards -->

      </ul>
    </section>`
  )
}

export default class Experience {
  constructor(){
    this._element = null
  }

  getTemplate() {
    return createExperienceTemplate()
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