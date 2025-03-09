import AbstractComponent from "../abstract-component";

const createToolsMarkup = (iconSrc) => {
  return (
    `<li class="tools__icon">
      <img src=${iconSrc} alt="иконка рабочего инструмента">
    </li>`
  )
}

const createToolTypeTemplate = (data) => {

    const { title, sources } = data;
    const toolMarkup = sources.map((iconSrc) => createToolsMarkup(iconSrc)).join('\n');

    return (`
      <li class="tools__list-item">
        <h3 class="tools__item-title" contentEditable="true" id="title">${title}</h3>
        <ul class="tools__inner-item-list">
          ${toolMarkup}
        </ul>
      </li>
      `)
  }

export default class ToolType extends AbstractComponent {
  constructor(data, idx) {
    super(),
      this._data = data,
      this._idx = idx
  }

  getTemplate() {
    return createToolTypeTemplate(this._data)
  }

  setContentEditableHandler(handler) {
    this.getElement()
      .querySelectorAll('[contentEditable]')
      .forEach((el) => el.addEventListener('input', (evt) => {
        evt.preventDefault();
        handler(evt.currentTarget, this._idx);
      }))
  }

}