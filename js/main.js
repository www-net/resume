import '../css/style.css';
import '../css/fonts.css';

import { render, RenderPosition } from './util';

import TopComponent from './components/top/top';
import  ProfileImageComponent  from './components/top/profile-img'
import  NameСandidateComponent  from './components/top/name';
// import { createLanguageBar } from './components/top/languages';
// import { createCenterSection } from './components/center/center';
// import { createExperienceTemplate } from './components/center/experience';
// import { createToolsTemplate } from './components/center/tools';
// import { createBottomSection } from './components/bottom/bottom';
// import { createEducationTemplate } from './components/bottom/education';
// import { createInterestsTemplate } from './components/bottom/interests';
// import { createContactsTemplate } from './components/bottom/contacts';
// import { createExperienceCardTemplate } from './components/center/experiense-card';
// import { createEducationCard } from './components/bottom/education-card';

// import { experienceDate, toolIcons } from './mock/constants';

// const EDUCATION_CARDS_COUNT = 2;

const siteMain = document.querySelector(`main`);


render(siteMain, new TopComponent().getElement());

const resumeTop = document.querySelector(`.top`);

render(resumeTop, new  ProfileImageComponent().getElement());
render(resumeTop, new NameСandidateComponent().getElement());
render(resumeTop, createLanguageBar());

render(siteMain, createCenterSection());
const resumeCenter = document.querySelector(`.center`);

render(resumeCenter, createExperienceTemplate());
const experience = resumeCenter.querySelector(`.experience__list`);
render(experience, createExperienceCardTemplate(experienceDate));

render(resumeCenter, createToolsTemplate(toolIcons));


render(siteMain, createBottomSection());
const resumeBottom = document.querySelector(`.bottom`);
const resumeBottomBox = resumeBottom.querySelector(`.bottom-box`);

render(resumeBottom, createEducationTemplate(), RenderPosition.AFTERBEGIN );
const education = resumeBottom.querySelector(`.education__list`);

for (let i = 0; i < EDUCATION_CARDS_COUNT; i++) {
  render(education, createEducationCard())
}

render(resumeBottomBox, createInterestsTemplate());
render(resumeBottomBox, createContactsTemplate());



