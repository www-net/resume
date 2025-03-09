import ExperienceComponent from '../components/center/experience';
import ExperienceCardComponent from '../components/center/experiense-card';
import ToolsComponent from '../components/center/tools';
import { render } from '../utils/render';

import { toolIcons } from '../mock/toolIcon';


// import Store from '../api/store'

export default class CenterController {
  constructor(container, store) {
    this._container = container;
    this._store = store;

    this._onExperienceComponentTextChange = this._onExperienceComponentTextChange.bind(this)
    this._onExperienceCardTextChange = this._onExperienceCardTextChange.bind(this)
    this._onMostRecentButtonActive = this._onMostRecentButtonActive.bind(this)
  }

  render() {
    const container = this._container.getElement();
    const cardsData = this._store.getData().experience.cards


    const experienceComponent = new ExperienceComponent(this._store)
    experienceComponent.setContentEditableHandler(this._onExperienceComponentTextChange)
    render(container, experienceComponent);

    const renderExperienceCard = (cardListElement, data, idx, place) => {
      const experienceCardComponent = new ExperienceCardComponent(data, idx);

      experienceCardComponent.setMostRecentButtonClickHandler(this._onMostRecentButtonActive)
      render(cardListElement, experienceCardComponent, place);

      experienceCardComponent.setContentEditableHandler(this._onExperienceCardTextChange, idx)
    }

    const experienceListElement = container.querySelector(`.experience__list`);
    cardsData.forEach((data, idx) => renderExperienceCard(experienceListElement, data, idx));

    render(container, new ToolsComponent(toolIcons));
  }

  _onExperienceComponentTextChange(el) {
    const data = this._store.getData()
    data.experience.sectionName = el.textContent
    sessionStorage.setItem('resume', JSON.stringify(data))
  }

  _onExperienceCardTextChange(el, idx) {
    const elId = el.id
    const data = this._store.getData()
    const card = data.experience.cards[idx]

    if(elId === 'dateStart' || elId === 'dateEnd') {
      const time = elId === 'dateStart' ?  'start': 'end'
      card.date[time] = el.textContent
    } else if (elId.includes('task-')) {
      const taskIdx = elId.replace('task-', '')
      card.tasks[taskIdx] = el.textContent
    }

    card[elId] = el.textContent
    sessionStorage.setItem('resume', JSON.stringify(data))
  }

  _onMostRecentButtonActive(evt) {
    const button = evt.target
    button.classList.toggle('most-recent--active');
    button.closest('.experience__item').classList.toggle(`experience__item--most-recent`);
  }
}


