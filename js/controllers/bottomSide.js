import EducationComponent from '../components/bottom/education';
import EducationCardComponent from '../components/bottom/education-card';
import InterestsComponent from '../components/bottom/interests';
import ContactsComponent from '../components/bottom/contacts';
import { render, RenderPosition } from '../utils/render';

export default class BottomController {
  constructor(container, store) {
    this._container = container;
    this._store = store;

    this._onEducationComponent = this._onEducationComponent.bind(this)
    this._onEducationCard = this._onEducationCard.bind(this)
  }

  render(){
    const container = this._container.getElement();

    const  educationComponent = new EducationComponent(this._store)
    educationComponent.setContentEditableHandler(this._onEducationComponent)
    render(container, educationComponent, RenderPosition.AFTERBEGIN);

    const education = this._container.getElement().querySelector(`.education__list`);
    
    const renderEducationCard = (cardListElement, data, idx, place) => {
      const cardComponent = new EducationCardComponent(data, idx);
      cardComponent.setLikeButtonClickHandler((evt) => {
        const button = evt.target
        button.classList.toggle(`education__like--yellow`);
        cardComponent.getElement().classList.toggle(`education__card--most-recent`);
      });

      cardComponent.setContentEditableHandler(this._onEducationCard)
    
      render(cardListElement, cardComponent, place);
    }
    
    this._store.getData().education.cards.forEach((data, idx) => {
      renderEducationCard(education, data, idx);
    })
    
    const resumeBottomBox = this._container.getElement().querySelector(`.bottom-box`);
    render(resumeBottomBox, new InterestsComponent());
    render(resumeBottomBox, new ContactsComponent());
  }

  _onEducationComponent(el) {
    const elId = el.id
    const data = this._store.getData()
    data.education[elId] = el.textContent
    this._store.setData(data)
  }

  _onEducationCard(el, idx) {
    const elId = el.id
    const data = this._store.getData()

    if(elId === 'skill') {
      const cardsSkills = Array.from(el.closest('ul')
      .querySelectorAll('span'))
      .map(el => {
        return el.textContent
      })
      data.education.cards[idx].skills = cardsSkills
      this._store.setData(data)
    } else {
      data.education.cards[idx][elId] = el.textContent
      this._store.setData(data)
    }
  }
}