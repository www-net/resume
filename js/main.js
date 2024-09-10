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
experienceDate.forEach((data, idx) => render(experience, new ExperienceCardComponent(data, idx).getElement()))

render(resumeCenter, new ToolsComponent(toolIcons).getElement());


render(siteMain, new BottomComponent().getElement());
const resumeBottom = document.querySelector(`.bottom`);
const resumeBottomBox = resumeBottom.querySelector(`.bottom-box`);

render(resumeBottom, new EducationComponent().getElement(), RenderPosition.AFTERBEGIN );
const education = resumeBottom.querySelector(`.education__list`);

for (let i = 0; i < EDUCATION_CARDS_COUNT; i++) {
  render(education, new EducationCardComponent().getElement())
}

render(resumeBottomBox, new InterestsComponent().getElement());
render(resumeBottomBox, new ContactsComponent().getElement());



