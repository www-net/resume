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
  },
  tools: {
    sectionName: `Tools`,
    types: [
      {
        title: 'design',
        sources: [
          "./icons/logo/logo-figma.svg",
          "./icons/logo/logo-adobe-photoshop.svg",
          "./icons/logo/logo-adobe-illustrator.svg",
          "./icons/logo/logo-adobe-premiere.svg",
          "./icons/logo/logo-notion.svg",
          "./icons/logo/logo-meet.svg",
        ]
      },
      {
        title: 'no-code',
        sources: [
          "./icons/logo/logo-zapìer.svg",
          "./icons/logo/logo-webflow.svg",
          "./icons/logo/logo-framer.svg",
          "./icons/logo/logo-wordpress.svg",
        ]
      },
      {
        title: 'artoficial intelligence',
        sources: [
          "./icons/logo/logo-chatGPT.svg",
          "./icons/logo/logo-copilot.svg",
          "./icons/logo/logo-midjourney.svg",
        ]
      }
    ]
  },
  education: {
    sectionName: 'Education',
    cards: [
      {
        date: '2023',
        title: 'UI/UX',
        institute: 'Coursera',
        skills: [
          '#UX',
          '#UI',
          '#research',
          '#research',
          '#Design',
          '#Ui',
          '#wireframing',
          '#figma',
          '#Ux'
        ]
      },
      {
        date: '2017 - 2022',
        title: 'Law',
        institute: 'University of Kerala',
        skills: [
          '#law',
          '#legalStudies',
          '#contracts',
          '#internationalLaws',
        ]
      },
      {
        date: '2017',
        title: 'Graphic design',
        institute: 'Coursera',
        skills: [
          '#branding',
          '#web',
          '#illustration',
          '#adobe',
        ]
      },
    ]

  },
  interests: {
    sectionName: 'Interests',
    items: [
      'branding',
      'design',
      'photography',
      'artificial',
      'illustration',
      'typography',
      'social',
      'research',
      'dron',
      'games',
    ]
  }
}

export const resumeMockJson = JSON.stringify(resumeMock)