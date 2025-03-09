// export const experienceDate = [
//   {
//     date: {
//       start: new Date(`2023 07`),
//       end: ''
//     },
//     profession: `Marketing Manager`,
//     organisation: `Pankayam`,
//     clockLoad: `Full-time`,
//     tasks: [
//       `Strategy development and planning of campaigns that promote the business and generate genuine traffic`,
//       `SEO Content Creation for Blogs, Website, Social media`
//     ]
//   },
//   {
//     date: {
//       start: new Date(`2017`),
//       end: ''
//     },
//     profession: `Graphic / Web designer`,
//     organisation: ``,
//     clockLoad: `Freelance`,
//     tasks: [
//       `Development of internal projects from scratch, product design of brands`,
//       `Landing page, webapps and hybrid apps`,
//       `Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.`
//     ]
//   },
//   {
//     date: {
//       start: new Date(`2021 09`),
//       end: new Date(`2023 06`)
//     },
//     profession: `Legal Assistant`,
//     organisation: `Law Firm`,
//     clockLoad: `Intern`,
//     tasks: [
//       `Provide administrative support to lawyer and enhance office effectiveness`,
//       `Handle communication with clients, witnesses etc.`,
//       `repare case briefs and summarize depositions, interrogatories and testimony`,
//     ]
//   },
// ]
// export const experienceDateJson = JSON.stringify(experienceDate); 

import { MONTHS } from "../const"



const resumeMock = {
  salutation: `Hello 👋🏻 I'm`,
  name: `Karthik SR`,
  profession: `UX/UI Designer`,
  languages: {
    sectionName: `Languages`,
    knowLanguages: [
      `English`,
      `Malayalam`,
      `Hindi`
    ]
  },
  experience: {
    sectionName: `Experience`,
    cards: [
      {
        date: {
          start: `${MONTHS[new Date(`2023 07`).getMonth()].slice(0, 3)}.${new Date(`2023 07`).getFullYear()}`,
          end: ''
        },
        profession: `Marketing Manager`,
        organisation: `Pankayam`,
        clockLoad: `Full-time`,
        tasks: [
          `Strategy development and planning of campaigns that promote the business and generate genuine traffic`,
          `SEO Content Creation for Blogs, Website, Social media`
        ]
      },
      {
        date: {
          start: `${MONTHS[new Date(`2017`).getMonth()].slice(0, 3)}.${new Date(`2023 07`).getFullYear()}`,
          end: ''
        },
        profession: `Graphic / Web designer`,
        organisation: ``,
        clockLoad: `Freelance`,
        tasks: [
          `Development of internal projects from scratch, product design of brands`,
          `Landing page, webapps and hybrid apps`,
          `Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.`
        ]
      },
      {
        date: {
          start: `${MONTHS[new Date(`2021 09`).getMonth()].slice(0, 3)}.${new Date(`2023 07`).getFullYear()}`,
          end: `${MONTHS[new Date(`2023 06`).getMonth()].slice(0, 3)}.${new Date(`2023 06`).getFullYear()}`,
        },
        profession: `Legal Assistant`,
        organisation: `Law Firm`,
        clockLoad: `Intern`,
        tasks: [
          `Provide administrative support to lawyer and enhance office effectiveness`,
          `Handle communication with clients, witnesses etc.`,
          `repare case briefs and summarize depositions, interrogatories and testimony`,
        ]
      },
    ]
  }
}

export const resumeMockJson = JSON.stringify(resumeMock)