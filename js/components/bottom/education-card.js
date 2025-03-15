import AbstractComponent from "../abstract-component";

const createEducationCardTemplate = (data) => {

  const {date, title, institute, skills} = data

  const skillsToString = skills.map(skill => {
    return (
      `<li><span contentEditable="true" id="skill">${skill}</span></li>`
    )
  }).join('\n')
  const randomMostRecent = Math.random() > 0.5 ? `education__card--most-recent`: ``;
  const randomLike = randomMostRecent ? `<button class="education__like education__like--yellow"></button>`: `<button class="education__like"></button>`;

  return (
    `<li class="education__card ${randomMostRecent}">
        <p class="education__card-date" contentEditable="true" id="date">${date}</p>
        <h3 class="education__card-title" contentEditable="true" id="title">${title}</h3>
        <ul class="education__card-list">

          ${skillsToString}
          
        </ul>
        <p contentEditable="true" id="institute">${institute}</p>
        ${randomLike}
      </li>`
  )
};

export default class EducationCard extends AbstractComponent {
  constructor(data, idx){
    super()
    this._data = data
    this._idx = idx
    // this._toggle = null
  }

  getTemplate() {
    return createEducationCardTemplate(this._data)
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

  setContentEditableHandler(handler) {
    this.getElement()
    .querySelectorAll('[contentEditable]')
    .forEach((el) => el.addEventListener('input', (evt) => {
      evt.preventDefault();
      handler(evt.currentTarget, this._idx);
    }))
  }

  // removeButtonClickToggle() {
  //   const button = this.getElement().querySelector(`.education__like`);

  //   button.removeEventListener(`click`, this._toggle)
  // }
};
