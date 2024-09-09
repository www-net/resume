export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element)
      break;
  }
};

// export const generateCards = (count, template) => {
//   return new Array(count)
//     .fill(``)
//     .map(template)
// }

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template
  return newElement.firstElementChild
} 