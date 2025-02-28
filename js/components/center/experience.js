import AbstractComponent from '../abstract-component'

const createExperienceTemplate = () => {
  return (
    `<section class="experience">
      <h2 class="experience__title" contentEditable="true">Experience</h2>
      <ul class="experience__list">

      <!-- cards -->

      </ul>
    </section>`
  )
}

export default class Experience extends AbstractComponent {
  getTemplate() {
    return createExperienceTemplate()
  }
}