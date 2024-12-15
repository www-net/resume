import EducationComponent from '../components/bottom/education';
import EducationCardComponent from '../components/bottom/education-card';
import InterestsComponent from '../components/bottom/interests';
import ContactsComponent from '../components/bottom/contacts';
import { render, RenderPosition } from '../utils/render';

const EDUCATION_CARDS_COUNT = 3;

export default class BottomController {
  constructor(container) {
    this._container = container;
  }

  render(){
    const container = this._container.getElement();

    render(container, new EducationComponent(), RenderPosition.AFTERBEGIN);

    const education = this._container.getElement().querySelector(`.education__list`);
    
    const renderEducationCard = (cardListElement, place) => {
      const cardComponent = new EducationCardComponent();
      cardComponent.setLikeButtonClickHandler((evt) => {
        const button = evt.target
        button.classList.toggle(`education__like--yellow`);
        cardComponent.getElement().classList.toggle(`education__card--most-recent`);
      });
    
      render(cardListElement, cardComponent, place);
    }
    
    for (let i = 0; i < EDUCATION_CARDS_COUNT; i++) {
      renderEducationCard(education);
    }
    
    const resumeBottomBox = this._container.getElement().querySelector(`.bottom-box`);
    render(resumeBottomBox, new InterestsComponent());
    render(resumeBottomBox, new ContactsComponent());
  }
}