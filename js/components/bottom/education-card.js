import AbstractComponent from "../abstract-component";

const createEducationCard = () => {

  const randomMostRecent = Math.random() > 0.5 ? `education__card--most-recent`: ``;
  const randomLike = randomMostRecent ? `<button class="education__like education__like--yellow"></button>`: `<button class="education__like"></button>`;

  return (
    `<li class="education__card ${randomMostRecent}">
        <p class="education__card-date">2023</p>
        <h3 class="education__card-title">UI/UX</h3>
        <ul class="education__card-list">
          <li><span>#UX</span></li>
          <li><span>#UI</span></li>
          <li><span>#research</span></li>
          <li><span>#research</span></li>
          <li><span>#DesignSystem</span></li>
          <li><span>#Ui</span></li>
          <li><span>#wireframing</span></li>
          <li><span>#figma</span></li>
          <li><span>#Ux</span></li>
        </ul>
        <p>Coursera</p>
        ${randomLike}
      </li>`
  )
};

export default class EducationCard extends AbstractComponent {
  getTemplate() {
    return createEducationCard()
  }
};
