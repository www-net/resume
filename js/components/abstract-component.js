import { createElement } from "../utils/render";

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

  setContentEditableHandler(handler) {
    this.getElement()
      .querySelectorAll('[contentEditable]')
      .forEach((el) => el.addEventListener('input', (evt) => {
        evt.preventDefault();

        const elem = evt.currentTarget
        elem.classList.add('input-active');

        elem.addEventListener('animationend', () => {
          elem.classList.remove('input-active');
        }, { once: true })

        handler(elem);
      }))
  }

  removeElement() {
    this._element = null;
  }
}
