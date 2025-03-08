import {resumeMockJson} from '../mock/resume-mock'

export default class Store {
  constructor() {
    this.CURRENT_RESUME = null
  }

  // fetchResume() {
  //   try {
  //     const response = fetch('/resume-default.json')
  //     const data = response.json()
  //     this.CURRENT_RESUME = data
  //     sessionStorage.setItem('resume', JSON.stringify(data))

  //   } catch (error) {
  //     console.error('Ошибочка. Error loading json', error)
  //   }
  // }


  getData() {
    if (sessionStorage.getItem('resume')) {
      this.CURRENT_RESUME = JSON.parse(sessionStorage.getItem('resume'));
      return this.CURRENT_RESUME
    } else {
      sessionStorage.setItem('resume', resumeMockJson)
      this.CURRENT_RESUME = JSON.parse(resumeMockJson)
      return this.CURRENT_RESUME
    }
  }
}
