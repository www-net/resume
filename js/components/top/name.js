import { createElement } from "../../util";

const createNameСandidate = () => {
  return (
    `<section class="name-box">
      <p class="name-box__sub">Hello 👋🏻 I'm</p>
      <div>
        <h2 class="name-box__name">Karthik SR</h2>
        <p class="name-box__profession">UX/UI Designer</p>
      </div>
    </section>`
  )
}

export default class NameCandidate {
  constructor() {
    this._element = null
  }

  getTemplate() {
    return createNameСandidate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate())
    }
    return this._element
  }

  removeElement() {
    this._element = null;
  }
}