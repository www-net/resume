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


render(siteMain, new TopComponent());

const resumeTop = document.querySelector(`.top`);

render(resumeTop, new ProfileImageComponent());
render(resumeTop, new NameСandidateComponent());
render(resumeTop, new LanguageComponent());

render(siteMain, new CenterComponent());
const resumeCenter = document.querySelector(`.center`);

render(resumeCenter, new ExperienceComponent());
const experienceListElement = resumeCenter.querySelector(`.experience__list`);

const renderExperienceCard = (cardListElement, data, idx, place) => {
  const experienceCardComponent = new ExperienceCardComponent(data, idx)

  experienceCardComponent.setButtonClickToggle();

  render(cardListElement, experienceCardComponent, place)
}

experienceDate.forEach((data, idx) => renderExperienceCard(experienceListElement, data, idx))

render(resumeCenter, new ToolsComponent(toolIcons));

render(siteMain, new BottomComponent());
const resumeBottom = document.querySelector(`.bottom`);
const resumeBottomBox = resumeBottom.querySelector(`.bottom-box`);

render(resumeBottom, new EducationComponent(), RenderPosition.AFTERBEGIN );
const education = resumeBottom.querySelector(`.education__list`);

const renderEducationCard = (cardListElement, place) => {
  const cardComponent = new EducationCardComponent();

  cardComponent.setButtonClickToggle();

  render(cardListElement, cardComponent, place)
}

for (let i = 0; i < EDUCATION_CARDS_COUNT; i++) {
  renderEducationCard(education)
}

render(resumeBottomBox, new InterestsComponent());
render(resumeBottomBox, new ContactsComponent());



