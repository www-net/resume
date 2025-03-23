import {resumeMockJson} from '../mock/resume-mock'

export default class Store {
  constructor() {
    this.CURRENT_RESUME = null
  }

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

  setData(data) {
    sessionStorage.setItem('resume', JSON.stringify(data))
  }
}
