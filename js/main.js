import '../css/style.css';
import '../css/fonts.css';

import { render, RenderPosition } from './util';

import TopComponent from './components/top/top';
import ProfileImageComponent  from './components/top/profile-img'
import NameСandidateComponent  from './components/top/name';
import LanguageComponent from './components/top/languages';
import CenterComponent  from './components/center/center';
import ExperienceComponent from './components/center/experience';
import ExperienceCardComponent  from './components/center/experiense-card';
import ToolsComponent from './components/center/tools';
import BottomComponent from './components/bottom/bottom';
import EducationComponent from './components/bottom/education';
import EducationCardComponent from './components/bottom/education-card';
import InterestsComponent from './components/bottom/interests';
import ContactsComponent from './components/bottom/contacts';

import { experienceDate, toolIcons } from './mock/constants';

const EDUCATION_CARDS_COUNT = 3;

const siteMain = document.querySelector(`main`);


render(siteMain, new TopComponent().getElement());

const resumeTop = document.querySelector(`.top`);

render(resumeTop, new ProfileImageComponent().getElement());
render(resumeTop, new NameСandidateComponent().getElement());
render(resumeTop, new LanguageComponent().getElement());

render(siteMain, new CenterComponent().getElement());
const resumeCenter = document.querySelector(`.center`);

render(resumeCenter, new ExperienceComponent().getElement());
const experience = resumeCenter.querySelector(`.experience__list`);

const renderExperienceCard = (cardListElement, data, idx, place) => {
  const experienceCardComponent = new ExperienceCardComponent(data, idx)
  const experienceCardElement = experienceCardComponent.getElement();
  const mostRecentButton = experienceCardElement.querySelector(`.most-recent`);

  mostRecentButton.addEventListener(`click`, onMostRecentButtonClick)

  function onMostRecentButtonClick(evt) {
    evt.preventDefault()

    mostRecentButton.classList.toggle(`most-recent--active`);
    experienceCardElement.classList.toggle(`experience__item--most-recent`);
  }

  render(cardListElement, experienceCardElement, place)
}

experienceDate.forEach((data, idx) => renderExperienceCard(experience, data, idx))

render(resumeCenter, new ToolsComponent(toolIcons).getElement());

render(siteMain, new BottomComponent().getElement());
const resumeBottom = document.querySelector(`.bottom`);
const resumeBottomBox = resumeBottom.querySelector(`.bottom-box`);

render(resumeBottom, new EducationComponent().getElement(), RenderPosition.AFTERBEGIN );
const education = resumeBottom.querySelector(`.education__list`);

const renderEducationCard = (cardListElement, place) => {
  const cardComponent = new EducationCardComponent();

  const cardElement = cardComponent.getElement()
  const likeButton = cardElement.querySelector(`.education__like`);
  
  likeButton.addEventListener(`click`, onLikeButtonClick);
  
  function onLikeButtonClick (evt) {
    evt.preventDefault();

    likeButton.classList.toggle(`education__like--yellow`);
    cardElement.classList.toggle(`education__card--most-recent`)
  }

  render(cardListElement, cardComponent.getElement(), place)
}

for (let i = 0; i < EDUCATION_CARDS_COUNT; i++) {
  renderEducationCard(education)
}

render(resumeBottomBox, new InterestsComponent().getElement());
render(resumeBottomBox, new ContactsComponent().getElement());



