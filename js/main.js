import '../css/style.css'
import '../css/fonts.css'

import { render } from './util'

import { createTopSection } from './components/top/top';
import { createProfileImage } from './components/top/profile-img'
import { createNameСandidate } from './components/top/name';
import { createLanguageBar } from './components/top/languages';

const siteMain = document.querySelector(`main`);

render(siteMain, createTopSection())

const resumeTop = document.querySelector(`.top`);

render(resumeTop, createProfileImage())
render(resumeTop, createNameСandidate())
render(resumeTop, createLanguageBar())

render(siteMain, createLanguageBar())

