import ProfileImageComponent from '../components/top/profile-img';
import NameСandidateComponent from '../components/top/name';
import LanguageComponent from '../components/top/languages';
import { render } from '../utils/render';

export default class TopController {
  constructor(container, store) {
    this._container = container;
    this._store = store
  }

  render() {
    const container = this._container.getElement();

    render(container, new ProfileImageComponent());
    render(container, new NameСandidateComponent(this._store));
    render(container, new LanguageComponent(this._store));
  }
}