import AbstractComponent from "../abstract-component"

const createInterestsTemplate = () => {
  return (
    `<section class="interests">
            <h2 class="interests__title">Interests</h2>
            <ul class="interests__list">
              <li class="interests__list-item"><span>branding</span></li>
              <li class="interests__list-item"><span>design</span></li>
              <li class="interests__list-item"><span>photography</span></li>
              <li class="interests__list-item"><span>artificial intelligence</span></li>
              <li class="interests__list-item"><span>illustration</span></li>
              <li class="interests__list-item"><span>typography</span></li>
              <li class="interests__list-item"><span>social networks</span></li>
              <li class="interests__list-item"><span>research</span></li>
              <li class="interests__list-item"><span>dron pilot</span></li>
              <li class="interests__list-item"><span>games</span></li>
            </ul>
          </section>`
  )
}

export default class Interests extends AbstractComponent {
  getTemplate() {
    return createInterestsTemplate()
  }
}
