import { createElement } from "../../util"

const createBottomSection = () => {
  return (
    `<div class="bottom">
    <div class="bottom-box"></div >
  </div>`
  )
}

export default class Bottom {
  constructor(){
    this._element = null
  }

  getTemplate() {
    return createBottomSection()
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
