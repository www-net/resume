import { MONTHS } from "../../mock/constants";

const desctiptionMarkup = (tasks) => {
  return tasks.map(el => {
    return (`
      <li>${el}</li>
      `)
  }).join(`\n`)
}

export const createExperienceCardTemplate = (dataList) => {
  return dataList.reduce((acc, current) => {
    const { date, profession, organisation, clockLoad, tasks } = current;

    console.log('cerr    ', current)

    const dateStart = `${MONTHS[date.start.getMonth()].slice(0,3)}.${date.start.getFullYear()}`
    const dateEnd = date.end ? `${MONTHS[date.end.getMonth()].slice(0,3)}.${date.end.getFullYear()}` : `Present`;
    const description = desctiptionMarkup(tasks);


    return acc + (
      `<li class="experience__item">
            <div class="experience__item-head">
              <p class="experience__item_date">${dateStart} - ${dateEnd}</p>
            </div>
            <div class="experience__item-main">
              <div>
                <h3 class="experience__item-name">${profession}</h3>
                <div class="experience__item-box">
                  ${organisation ? `<p class="experience__further">${organisation}</p>`: ``}
                  <p class="experience__further">${clockLoad}</p>
                </div>
              </div>
              <div class=experience__item-information>
                <ul class="experience__item-list">
                ${description}
                </ul>
              </div>
            </div>
          </li>\n`
    )
  },``);
}