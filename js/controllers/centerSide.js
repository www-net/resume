import ExperienceComponent from '../components/center/experience';
import ExperienceCardComponent from '../components/center/experiense-card';
import ToolsComponent from '../components/center/tools';
import { render } from '../utils/render';

import { experienceDate } from '../mock/experience';
import { toolIcons } from '../mock/toolIcon';

export default class CenterController {
  constructor(container) {
    this._container = container;
  }

  render() {
    const container = this._container.getElement();

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
    experienceDate.forEach((data, idx) => renderExperienceCard(experienceListElement, data, idx));
    render(container, new ToolsComponent(toolIcons));
  }
}