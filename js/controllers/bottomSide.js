import EducationComponent from '../components/bottom/education';
import EducationCardComponent from '../components/bottom/education-card';
import InterestsComponent from '../components/bottom/interests';
import ContactsComponent from '../components/bottom/contacts';
import { render, RenderPosition } from '../utils/render';
import { waveAnimation } from '../animations/wave';

export default class BottomController {
  constructor(container, store) {
    this._container = container;
    this._store = store;

    this._onEducationComponentTitleChange = this._onEducationComponentTitleChange.bind(this)
    this._onEducationCardTextChange = this._onEducationCardTextChange.bind(this)
    this._onLikeButtonClick = this._onLikeButtonClick.bind(this)
    this._onInterestsTextChange = this._onInterestsTextChange.bind(this)
    this._onContactsChange = this._onContactsChange.bind(this)
  }

  render() {
    const container = this._container.getElement();

    const educationComponent = new EducationComponent(this._store)
    educationComponent.setContentEditableHandler(this._onEducationComponentTitleChange)
    render(container, educationComponent, RenderPosition.AFTERBEGIN);

    const education = this._container.getElement().querySelector(`.education__list`);

    const renderEducationCard = (cardListElement, data, idx, place) => {
      const cardComponent = new EducationCardComponent(data, idx);
      cardComponent.setLikeButtonClickHandler(this._onLikeButtonClick)

      cardComponent.setContentEditableHandler(this._onEducationCardTextChange)

      render(cardListElement, cardComponent, place);
    }

    this._store.getData().education.cards.forEach((data, idx) => {
      renderEducationCard(education, data, idx);
    })

    const resumeBottomBox = this._container.getElement().querySelector(`.bottom-box`);
    const interestsComponent = new InterestsComponent(this._store)
    interestsComponent.setContentEditableHandler(this._onInterestsTextChange)
    render(resumeBottomBox, interestsComponent);

    const contactsComponent = new ContactsComponent(this._store)
    contactsComponent.setContentEditableHandler(this._onContactsChange)
    render(resumeBottomBox, contactsComponent);
  }

  _onEducationComponentTitleChange(el) {
    const elId = el.id
    const data = this._store.getData()
    data.education[elId] = el.textContent
    this._store.setData(data)
  }

  _onEducationCardTextChange(el, idx) {
    const elId = el.id
    const data = this._store.getData()
    const dataCards = data.education.cards

    if (elId === 'skill') {
      const cardsSkills = Array.from(el.closest('ul')
        .querySelectorAll('span'))
        .map(el => {
          return el.textContent
        })
      dataCards[idx].skills = cardsSkills
      this._store.setData(data)
    } else {
      dataCards[idx][elId] = el.textContent
      this._store.setData(data)
    }
  }

  _onLikeButtonClick(evt) {
    const button = evt.target
    console.log(button)
    button.classList.toggle(`education__like--yellow`);
    button.closest(`.education__card`).classList.toggle(`education__card--most-recent`)

    waveAnimation(evt)
  }

  _onInterestsTextChange(el) {
    const elId = el.id
    const data = this._store.getData()

    if (elId === 'interest') {
      const dataInterests = Array.from(el.closest('ul')
        .querySelectorAll('span'))
        .map(el => {
          return el.textContent
        })
      data.interests.items = dataInterests
      this._store.setData(data)
    } else {
      data.interests[elId] = el.textContent
      this._store.setData(data)
    }
  }

  _onContactsChange(el) {
    const elId = el.id
    const data = this._store.getData()

    data.contacts[elId] = el.textContent
    this._store.setData(data)
  }
}