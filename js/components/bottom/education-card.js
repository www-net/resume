import AbstractComponent from "../abstract-component";

const createEducationCardTemplate = () => {

  const randomMostRecent = Math.random() > 0.5 ? `education__card--most-recent`: ``;
  const randomLike = randomMostRecent ? `<button class="education__like education__like--yellow"></button>`: `<button class="education__like"></button>`;

  return (
    `<li class="education__card ${randomMostRecent}">
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
        ${randomLike}
      </li>`
  )
};

export default class EducationCard extends AbstractComponent {
  constructor(){
    super()
    // this._toggle = null
  }

  getTemplate() {
    return createEducationCardTemplate()
  }

  setLikeButtonClickHandler(handler) {
    this.getElement().querySelector(`.education__like`).addEventListener(`click`, handler)
  };

  setLikeButtonClickToggle() {
    const button = this.getElement().querySelector(`.education__like`);

    this._toggle = () => {
      button.classList.toggle(`education__like--yellow`);
      this.getElement().classList.toggle(`education__card--most-recent`);
    }

    button.addEventListener(`click`, this._toggle)
  }

  // removeButtonClickToggle() {
  //   const button = this.getElement().querySelector(`.education__like`);

  //   button.removeEventListener(`click`, this._toggle)
  // }
};
