import AbstractComponent from "../abstract-component"

const createTopSection = () => {
  return (
    `<div class="top"></div>`
  )
}

export default class Top extends AbstractComponent{
  getTemplate(){
    return createTopSection()
  }

}
