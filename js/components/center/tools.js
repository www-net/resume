const createToolsMarkup = (src) => {
  return (
    `<li class="tools__icon">
      <img src=${src} alt="иконка рабочего инструмента">
    </li>`
  )
}

export const createToolsListMarkup = (title, sources) => {

  const toolMarkup = sources.map((icon) => createToolsMarkup(icon)).join('\n');

  return (`
    <li class="tools__list-item">
      <h3 class="tools__item-title">${title}</h3>
      <ul class="tools__inner-item-list">
        ${toolMarkup}
      </ul>
    </li>
    `)
}

export const createToolsTemplate = (toolIcons) => {

  const toolMarkups = toolIcons.map((section) => {
    const { title, sources } = section;
    return createToolsListMarkup(title, sources)
  }).join(`\n`);


  return (
    `<section class="tools">
      <h2 class="tools__title">Tools</h2>
      <ul class="tools__list">

        ${toolMarkups}

      </ul>
    </section>`
  )
}
