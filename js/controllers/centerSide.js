import ExperienceComponent from '../components/center/experience';
import ExperienceCardComponent from '../components/center/experiense-card';
import ToolsComponent from '../components/center/tools';
import ToolTypeComponent from '../components/center/tool-type';
import { render } from '../utils/render';
import { waveAnimation } from '../animations/wave';

export default class CenterController {
  constructor(container, store) {
    this._container = container;
    this._store = store;

    this._onExperienceComponentTextChange = this._onExperienceComponentTextChange.bind(this)
    this._onExperienceCardTextChange = this._onExperienceCardTextChange.bind(this)
    this._onMostRecentButtonClick = this._onMostRecentButtonClick.bind(this)
    this._onToolsTextChange = this._onToolsTextChange.bind(this)
    this._onToolTypesTextChange = this._onToolTypesTextChange.bind(this)
  }

  render() {
    const container = this._container.getElement();
    const cardsData = this._store.getData().experience.cards
    const toolsData = this._store.getData().tools.types

// render Experience
    const experienceComponent = new ExperienceComponent(this._store)
    experienceComponent.setContentEditableHandler(this._onExperienceComponentTextChange)
    render(container, experienceComponent);

// render Experience-cards
    const renderExperienceCard = (cardListElement, data, idx, place) => {
      const experienceCardComponent = new ExperienceCardComponent(data, idx);

      experienceCardComponent.setMostRecentButtonClickHandler(this._onMostRecentButtonClick)
      experienceCardComponent.setContentEditableHandler(this._onExperienceCardTextChange, idx)
      
      render(cardListElement, experienceCardComponent, place);
    }

    const experienceListElement = container.querySelector(`.experience__list`);
    cardsData.forEach((data, idx) => renderExperienceCard(experienceListElement, data, idx));

// render Tools
    const toolsComponent = new ToolsComponent(this._store)
    toolsComponent.setContentEditableHandler(this._onToolsTextChange)
    render(container, toolsComponent)

// render Tools-types
    const renderToolTypes = (toolsContainer, data, idx) => {
      const toolTypeComponent = new ToolTypeComponent(data, idx)
      toolTypeComponent.setContentEditableHandler(this._onToolTypesTextChange, idx)

      render(toolsContainer, toolTypeComponent);
    }
    const toolsListElement = container.querySelector(`.tools__list`)
    toolsData.forEach((data, idx) => renderToolTypes(toolsListElement, data, idx))
  }

  _onExperienceComponentTextChange(el) {
    const data = this._store.getData()
    data.experience.sectionName = el.textContent
    this._store.setData(data)    
  }

  _onExperienceCardTextChange(el, idx) {
    const elId = el.id
    const data = this._store.getData()
    const card = data.experience.cards[idx]

    if (elId === 'dateStart' || elId === 'dateEnd') {
      const time = elId === 'dateStart' ? 'start' : 'end'
      card.date[time] = el.textContent
    } else if (elId.includes('task-')) {
      const taskIdx = elId.replace('task-', '')
      card.tasks[taskIdx] = el.textContent
    }

    card[elId] = el.textContent
    this._store.setData(data)
  }

  _onMostRecentButtonClick(evt) {
    const button = evt.target
    button.classList.toggle('most-recent--active');
    button.closest('.experience__item').classList.toggle(`experience__item--most-recent`);
    waveAnimation(evt)
  }

  _onToolsTextChange(el) {
    const elId = el.id
    const data = this._store.getData()
    const dataTools = data.tools

    dataTools[elId] = el.textContent
    this._store.setData(data)
  }

  _onToolTypesTextChange(el, idx) {
    const elId = el.id
    const data = this._store.getData()
    const dataToolType = data.tools.types[idx]

    dataToolType[elId] = el.textContent
    this._store.setData(data)
  }
}


