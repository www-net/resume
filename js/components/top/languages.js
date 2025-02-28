import AbstractComponent from "../abstract-component"

export const createLanguageBar = () => {
  return (
    `<section class="languages">
      <h2 class="languages__title" contentEditable="true">Languages</h2>
      <ul class="languages__list">
        <li class="languages__progress">
          <span contentEditable="true">English</span>
          <input class="languages__range-control" tabindex="0"
            type="range"
            value="10"
            min="1"
            max="10"
          ></input>
        </li>
        <li class="languages__progress">
          <span contentEditable="true">Malayalam</span>
          <input class="languages__range-control" tabindex="0"
            type="range"
            value="10"
            min="1"
            max="10"
          ></input>
        </li>
        <li class="languages__progress">
          <span contentEditable="true">Hindi</span>
          <input class="languages__range-control" tabindex="0"
            type="range"
            value="10"
            min="1"
            max="10"
          ></input>
        </li>
      </ul>
    </section>`
  )
}

export default class LanguageBar extends AbstractComponent {
  getTemplate() {
    return createLanguageBar()
  }
}
