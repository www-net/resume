import { createElement } from "../util";

export default class AbstractComponent {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Невозможно использовать AbstractComponent, нужно создать конкретный экземпляр`)
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
