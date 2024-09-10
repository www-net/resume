import { createElement } from "../../util"

const createEducationCard = () => {
  return (
    `<li class="education__card">
        <p class="education__card-date">2023</p>
        <h3 class="education__card-title">UI/UX</h3>
        <ul class="education__card-list">
          <li><span>#UX</span></li>
          <li><span>#UI</span></li>
          <li><span>#research</span></li>
          <li><span>#research</span></li>
          <li><span>#DesignSystem</span></li>
          <li><span>#Ui</span></li>
          <li><span>#wireframing</span></li>
          <li><span>#figma</span></li>
          <li><span>#Ux</span></li>
        </ul>
        <p>Coursera</p>
      </li>`
  )
}


export default class EducationCard {
  constructor(){
    this._element = null
  }

  getTemplate() {
    return createEducationCard()
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
