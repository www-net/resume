import { createElement } from "../../util"

export const createLanguageBar = () => {
  return (
    `<section class="languages">
      <h2 class="languages__title">Languages</h2>
      <ul class="languages__list">
        <li class="languages__progress"><span>English</span>
          <div>bar</div>
        </li>
        <li class="languages__progress"><span>Malayalam</span>
          <div>bar</div>
        </li>
        <li class="languages__progress"><span>Hindi</span>
          <div>bar</div>
        </li>
      </ul>
    </section>`
  )
}

export default class LanguageBar {
  constructor(){
    this._element = null
  }

  getTemplate() {
    return createLanguageBar()
  }

  getElement() {
    if(!this._element) {
      this._element = createElement(this.getTemplate())
    }
    return this._element
  }

  removeElement() {
    this._element = null
  }
}
