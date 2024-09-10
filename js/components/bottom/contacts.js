import { createElement } from "../../util"

export const createContactsTemplate = () => {
  return (
    `<section class="contacts">
        <h2 class="visually-hidden">Contacts</h2>
        <div class="contacts-box">
          <p class="contacts__text">Let´s chat! I´m ready to work on excinting projects</p>

          <a class="contacts__link" href="">srkarthik.designscape@gmail.com</a>
        </div>
  
      </section>`
  )
}

export default class Contacts {
  constructor() {
    this._element = null
  }

  getTemplate() {
    return createContactsTemplate()
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate())
    }
    return this._element
  }

  removeElement() {
    this._element = null
  }
}