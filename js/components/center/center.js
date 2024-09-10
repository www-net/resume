import { createElement } from '../../util'

const  createCenterSection = () => {
  return (
    `<div class="center"></div>`
  )
}

export default class CenterSection {
  constructor(){
    this._element = null
  }

  getTemplate() {
    return createCenterSection()
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