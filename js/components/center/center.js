import AbstractComponent from '../abstract-component'

const  createCenterSection = () => {
  return (
    `<div class="center"></div>`
  )
}

export default class CenterSection extends AbstractComponent {
  getTemplate() {
    return createCenterSection()
  }
}