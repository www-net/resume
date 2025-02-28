import AbstractComponent from "../abstract-component";

const createNameСandidate = () => {
  return (
    `<section class="name-box">
      <p class="name-box__sub" contentEditable="true">Hello 👋🏻 I'm</p>
      <div>
        <h2 class="name-box__name" contentEditable="true">Karthik SR</h2>
        <p class="name-box__profession" contentEditable="true">UX/UI Designer</p>
      </div>
    </section>`
  )
}

export default class NameCandidate extends AbstractComponent {

  getTemplate() {
    return createNameСandidate();
  }
}