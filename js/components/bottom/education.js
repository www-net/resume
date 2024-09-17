import AbstractComponent from "../abstract-component"

const createEducationTemplate = () => {
  return (
    `<section class="education">
        <h2 class="education__title">Education</h2>
        <ul class="education__list">

        </ul>
      </section>`
  )
}

export default class Education extends AbstractComponent {
  getTemplate() {
    return createEducationTemplate()
  }
}