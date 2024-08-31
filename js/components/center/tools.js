import { toolDesignIcons, toolNoCodeIcons, toolOtherIcons } from "../../mock/constants";

const createToolsMarkup = (src) => {
  return (
    `<li class="tools__icon">
      <img src=${src} alt="иконка рабочего инструмента">
    </li>`
  )
}

export const createToolsTemplate = () => {



  const toolDesignMarkup = toolDesignIcons.map((icon) => createToolsMarkup(icon)).join('\n'); 
  const toolNoCodeMarkup = toolNoCodeIcons.map((icon) => createToolsMarkup(icon)).join('\n'); 
  const toolOtherMarkup = toolOtherIcons.map((icon) => createToolsMarkup(icon)).join('\n'); 


  return (
    `<section class="tools">
        <h2 class="tools__title">Tools</h2>
        <ul class="tools__list">
          <li class="tools__list-item">
            <h3 class="tools__item-title">design</h3>
            <ul class="tools__inner-item-list">
              ${toolDesignMarkup}
              </ul>
              </li>
              <li class="tools__list-item">
              <h3 class="tools__item-title">no-code</h3>
              <ul class="tools__inner-item-list">
              
              ${toolNoCodeMarkup}
              
              </ul>
              </li>
              <li class="tools__list-item">
              <h3 class="tools__item-title">artoficial intelligence</h3>
              <ul class="tools__inner-item-list">
              
              ${toolOtherMarkup}

            </ul>
          </li>
        </ul>
      </section>`
  )
}
