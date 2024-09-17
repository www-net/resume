import AbstractComponent from "../abstract-component"

const createBottomSection = () => {
  return (
    `<div class="bottom">
    <div class="bottom-box"></div >
  </div>`
  )
}

export default class Bottom extends AbstractComponent {
  getTemplate() {
    return createBottomSection()
  }
}
