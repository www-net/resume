import '../css/style.css';
import '../css/fonts.css';

import { render, RenderPosition } from './util';

import { createTopSection } from './components/top/top';
import { createProfileImage } from './components/top/profile-img'
import { createNameСandidate } from './components/top/name';
import { createLanguageBar } from './components/top/languages';
import { createCenterSection } from './components/center/center';
import { createExperienceTemplate } from './components/center/experience';
import { createToolsTemplate } from './components/center/tools';
import { createBottomSection } from './components/bottom/bottom';
import { createEducationTemplate } from './components/bottom/education';
import { createInterestsTemplate } from './components/bottom/interests';
import { createContactsTemplate } from './components/bottom/contacts';
import { createExperienceCardTemplate } from './components/center/experiense-card';
import { createEducationCard } from './components/bottom/education-card';

const EXPERIENCE_CARDS_COUNT = 2;
const EDUCATION_CARDS_COUNT = 2;

const siteMain = document.querySelector(`main`);

render(siteMain, createTopSection());

const resumeTop = document.querySelector(`.top`);

render(resumeTop, createProfileImage());
render(resumeTop, createNameСandidate());
render(resumeTop, createLanguageBar());

render(siteMain, createCenterSection());
const resumeCenter = document.querySelector(`.center`);

render(resumeCenter, createExperienceTemplate());
const experience = resumeCenter.querySelector(`.experience__list`);

for (let i = 0; i < EXPERIENCE_CARDS_COUNT; i++){
  render(experience, createExperienceCardTemplate());
}

render(resumeCenter, createToolsTemplate());

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



