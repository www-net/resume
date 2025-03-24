import AbstractComponent from "../abstract-component"

export const createLanguageBar = (store) => {
  const { sectionName, knowLanguages } = store.getData().languages

  const languages = () => {
    return knowLanguages.reduce((acc, lang) => {
      return acc + (`
        <li class="languages__progress">
          <span contentEditable="true" id="${lang}">${lang}</span>
          <input class="languages__range-control" tabindex="0"
            type="range"
            value="10"
            min="1"
            max="10"
          ></input>
        </li>\n
        `)
    }, ``)
  }

  return (
    `<section class="languages">
      <h2 class="languages__title" contentEditable="true" id="sectionName">${sectionName}</h2>
      <ul class="languages__list">
        ${languages()}
      </ul>
    </section>`
  )
}

export default class LanguageBar extends AbstractComponent {
  constructor(store) {
    super()
    this._store = store
  }

  getTemplate() {
    return createLanguageBar(this._store)
  }

  setWaveEffectHandler(handler) {
    this.getElement()
      .querySelectorAll('.languages__range-control')
      .forEach((el) => el.addEventListener('click', (evt) => {
        handler(evt)
      }))
  }
}
