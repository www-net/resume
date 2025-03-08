import AbstractComponent from "../abstract-component";

const createNameСandidate = (store) => {

const {salutation, name, profession} = store.getData();

  return (
    `<section class="name-box">
      <p class="name-box__sub" contentEditable="true">${salutation}</p>
      <div>
        <h2 class="name-box__name" contentEditable="true">${name}</h2>
        <p class="name-box__profession" contentEditable="true">${profession}</p>
      </div>
    </section>`
  )
}

export default class NameCandidate extends AbstractComponent {

constructor(store) {
  super()
  this._store = store
}

  getTemplate() {
    return createNameСandidate(this._store);
  }
}