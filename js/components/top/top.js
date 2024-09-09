import { createElement } from "../../util"

const createTopSection = () => {
  return (
    `<div class="top"></div>`
  )
}

export default class Top {
  constructor() {
    this._element = null
  }

  getTemplate(){
    return createTopSection()
  }

  getElement() {
    if(!this._element){
      this._element = createElement(this.getTemplate())
    }
    return this._element 
  }
  
  removeElement() {
    this._element = null
  }
}
