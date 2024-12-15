import ProfileImageComponent from '../components/top/profile-img';
import NameСandidateComponent from '../components/top/name';
import LanguageComponent from '../components/top/languages';
import { render } from '../utils/render';

export default class TopController {
  constructor(container) {
    this._container = container;
  }

  render() {
    const container = this._container.getElement();

    render(container, new ProfileImageComponent());
    render(container, new NameСandidateComponent());
    render(container, new LanguageComponent());

  }
}