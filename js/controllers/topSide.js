import ProfileImageComponent from '../components/top/profile-img';
import NameСandidateComponent from '../components/top/name';
import LanguageComponent from '../components/top/languages';
import { render } from '../utils/render';

export default class TopController {
  constructor(container, store) {
    this._container = container;
    this._store = store

    this._onNameTextChange = this._onNameTextChange.bind(this)
    this._onLanguageTextChange = this._onLanguageTextChange.bind(this)
  }

  render() {
    const container = this._container.getElement();
    render(container, new ProfileImageComponent());

    const nameCandidateComponent = new NameСandidateComponent(this._store)
    nameCandidateComponent.setContentEditableHandler(this._onNameTextChange)
    render(container, nameCandidateComponent);

    const languageComponent = new LanguageComponent(this._store)
    languageComponent.setContentEditableHandler(this._onLanguageTextChange)

    render(container, languageComponent);
  }

  _onNameTextChange(el) {
    const elId = el.id
    const data = this._store.getData()
    data[elId] = el.textContent
    this._store.setData(data)    
  }

  _onLanguageTextChange(el) {
    const elId = el.id
    const data = this._store.getData()
    if (elId === 'sectionName') {
      data.languages[elId] = el.textContent
    } else {
      const arrLanguages = data.languages.knowLanguages
      const idx = arrLanguages.find((item) => item === el.id)
      arrLanguages.splice(idx, 1, el.textContent)
      console.log(arrLanguages)
    }
    this._store.setData(data)
  }
}