import AbstractComponent from "../abstract-component"

export const createContactsTemplate = (store) => {

  const {welcome, mail } = store.getData().contacts

  return (
    `<section class="contacts">
        <h2 class="visually-hidden">Contacts</h2>
        <div class="contacts-box">
          <p class="contacts__text" contentEditable="true" id="welcome">${welcome}</p>

          <a class="contacts__link" href="" contentEditable="true" id="mail">${mail}</a>
        </div>
  
      </section>`
  )
}

export default class Contacts extends AbstractComponent {
constructor(store) {
  super()
  this._store = store
}

  getTemplate() {
    return createContactsTemplate(this._store)
  }
}