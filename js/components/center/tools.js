import AbstractComponent from "../abstract-component";

const createToolsMarkup = (src) => {
  return (
    `<li class="tools__icon">
      <img src=${src} alt="иконка рабочего инструмента">
    </li>`
  )
}

const createToolsListMarkup = (title, sources) => {

  const toolMarkup = sources.map((icon) => createToolsMarkup(icon)).join('\n');

  return (`
    <li class="tools__list-item">
      <h3 class="tools__item-title" contentEditable="true">${title}</h3>
      <ul class="tools__inner-item-list">
        ${toolMarkup}
      </ul>
    </li>
    `)
}

const createToolsTemplate = (toolIcons) => {

  const toolMarkups = toolIcons.map((section) => {
    const { title, sources } = section;
    return createToolsListMarkup(title, sources)
  }).join(`\n`);


  return (
    `<section class="tools">
      <h2 class="tools__title" contentEditable="true">Tools</h2>
      <ul class="tools__list">

        ${toolMarkups}

      </ul>
    </section>`
  )
}

export default class Tools extends AbstractComponent {
  constructor(icons) {
    super();
    this._icons = icons
  }

  getTemplate() {
    return createToolsTemplate(this._icons)
  }
}