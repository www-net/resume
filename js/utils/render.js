export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement())
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

export const remove = (element) => {
  element.remove()
}