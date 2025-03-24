import ProfileImageComponent from '../components/top/profile-img';
import NameСandidateComponent from '../components/top/name';
import LanguageComponent from '../components/top/languages';
import SavePdfComponent from '../components/top/save-pdf';
import { render } from '../utils/render';
import { waveAnimation } from '../animations/wave';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class TopController {
  constructor(container, store) {
    this._container = container;
    this._store = store

    this._onNameTextChange = this._onNameTextChange.bind(this)
    this._onLanguageTextChange = this._onLanguageTextChange.bind(this)
    this._onSaveButton = this._onSaveButton.bind(this)
    this._onLanguageBarClick = this._onLanguageBarClick.bind(this)
  }

  render() {
    const container = this._container.getElement();

    const savePdfComponent = new SavePdfComponent()
    savePdfComponent.setSaveButtonClickHandler(this._onSaveButton)
    render(container, savePdfComponent);

    render(container, new ProfileImageComponent());


    const nameCandidateComponent = new NameСandidateComponent(this._store)
    nameCandidateComponent.setContentEditableHandler(this._onNameTextChange)
    render(container, nameCandidateComponent);

    const languageComponent = new LanguageComponent(this._store)
    languageComponent.setContentEditableHandler(this._onLanguageTextChange)
    languageComponent.setWaveEffectHandler(this._onLanguageBarClick)

    render(container, languageComponent);
  }

  async _onSaveButton(evt) {
    const parentEl = evt.currentTarget.closest('div')
    parentEl.style = 'display: none'
    const element = document.querySelector(`main`)

    await html2canvas(element, {
      scale: 2,
      useCORS: true,
      windowWidth: 1200,
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: "a4",
        });

        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "JPEG", 10, 10, imgWidth - 20, imgHeight - 20);
        pdf.save("resume.pdf");
      })
      .catch((err) => {
        console.error("Error while generating PDF", err);
      });

    parentEl.style = 'display: block'
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
    }
    this._store.setData(data)
  }

  _onLanguageBarClick(evt) {
    waveAnimation(evt)
  }
}