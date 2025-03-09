import AbstractComponent from "../abstract-component";

const desctiptionMarkup = (tasks) => {
  return tasks.map((task, idx) => {
    return (`
      <li contentEditable="true" id="task-${idx}">${task}</li>
      `)
  }).join(`\n`)
};

const createExperienceCardTemplate = (data, idx) => {
  const { date, profession, organisation, clockLoad, tasks } = data;

  const mostRecent = idx === 0 ? `experience__item--most-recent` : ``;
  const dateStart = date.start;
  const dateEnd = date.end ? date.end : `Present`;
  const workForm = organisation ? `<p class="experience__further" contentEditable="true" id="organisation">${organisation}</p>` : ``;
  const description = desctiptionMarkup(tasks);

  return (
    `<li class="experience__item ${mostRecent}">
            <div class="experience__item-head">
              <p class="experience__time-wrapper">
                <time class="experience__item_date" contentEditable="true" id="dateStart">${dateStart}</time> - <time class="experience__item_date" contentEditable="true" id="dateEnd">${dateEnd}</time>
              </p>
              ${idx === 0 ? `<button class="most-recent most-recent--active">most recent</button>` : `<button class="most-recent">most recent</button>`}
            </div>
            <div class="experience__item-main">
              <div>
                <h3 class="experience__item-name" contentEditable="true" id="profession">${profession}</h3>
                <div class="experience__item-box">
                  ${workForm}
                  <p class="experience__further" contentEditable="true" id="clockLoad">${clockLoad}</p>
                </div>
              </div>
              <div class=experience__item-information >
                <ul class="experience__item-list">
                ${description}
                </ul>
              </div>
            </div>
          </li>\n`
  )
};

export default class ExperienceCard extends AbstractComponent {
  constructor(data, idx) {
    super()
    this._data = data
    this._idx = idx
    // this._toggle = null
  }

  getTemplate() {
    return createExperienceCardTemplate(this._data, this._idx)
  }

  // Устанавливает обработчик событий на кнопку
  setMostRecentButtonClickHandler(handler) {
    this.getElement().querySelector(`.most-recent`).addEventListener(`click`, handler);
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
  //   const button = this.getElement().querySelector(`.most-recent`);

  //   button.removeEventListener(`click`, this._toggle);
  // }
}