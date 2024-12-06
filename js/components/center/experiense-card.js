import { MONTHS } from "../../const";
import AbstractComponent from "../abstract-component";

const desctiptionMarkup = (tasks) => {
  return tasks.map(el => {
    return (`
      <li>${el}</li>
      `)
  }).join(`\n`)
};

const createExperienceCardTemplate = (data, idx) => {
  const { date, profession, organisation, clockLoad, tasks } = data;

  const mostRecent = idx === 0 ? `experience__item--most-recent` : ``;
  const dateStart = `${MONTHS[date.start.getMonth()].slice(0, 3)}.${date.start.getFullYear()}`;
  const dateEnd = date.end ? `${MONTHS[date.end.getMonth()].slice(0, 3)}.${date.end.getFullYear()}` : `Present`;
  const workForm = organisation ? `<p class="experience__further">${organisation}</p>` : ``;
  const description = desctiptionMarkup(tasks);

  return (
    `<li class="experience__item ${mostRecent}">
            <div class="experience__item-head">
              <p class="experience__time-wrapper"><time class="experience__item_date">${dateStart}</time> - <time class="experience__item_date">${dateEnd}</time></p>
              ${idx === 0 ? `<b class="most-recent most-recent--active">most recent</b>` : `<b class="most-recent">most recent</b>`}
            </div>
            <div class="experience__item-main">
              <div>
                <h3 class="experience__item-name">${profession}</h3>
                <div class="experience__item-box">
                  ${workForm}
                  <p class="experience__further">${clockLoad}</p>
                </div>
              </div>
              <div class=experience__item-information>
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
    this._toggle = null
  }

  getTemplate() {
    return createExperienceCardTemplate(this._data, this._idx)
  }

  // Устанавливает обработчик событий на кнопку
  setMostRecentButtonClickHandler(handler) {
    this.getElement().querySelector(`.most-recent`).addEventListener(`click`, handler);

  }


  removeButtonClickToggle() {
    const button = this.getElement().querySelector(`.most-recent`);

    button.removeEventListener(`click`, this._toggle);
  }
}