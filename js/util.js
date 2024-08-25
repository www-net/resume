export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, template, place = RenderPosition.BEFOREEND) => {
  container.insertAdjacentHTML(place, template)
};

// export const generateCards = (count, template) => {
//   return new Array(count)
//     .fill(``)
//     .map(template)
// }