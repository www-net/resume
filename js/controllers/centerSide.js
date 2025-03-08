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
  }

  render() {
    const container = this._container.getElement();
    const cardsData = this._store.getData().experience.cards

    render(container, new ExperienceComponent());

    const renderExperienceCard = (cardListElement, data, idx, place) => {
      const experienceCardComponent = new ExperienceCardComponent(data, idx);
      
      experienceCardComponent.setMostRecentButtonClickHandler((evt) => {
        const button = evt.target
        button.classList.toggle(`most-recent--active`);
        experienceCardComponent.getElement().classList.toggle(`experience__item--most-recent`);
      })
      render(cardListElement, experienceCardComponent, place);
    }

    const experienceListElement = container.querySelector(`.experience__list`);
    cardsData.forEach((data, idx) => renderExperienceCard(experienceListElement, data, idx));

    render(container, new ToolsComponent(toolIcons));
  }
}