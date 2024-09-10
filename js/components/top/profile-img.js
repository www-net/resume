import { createElement } from "../../util"

const createProfileImage = (src = "./images/profileImg.jpg") => {
  return (
    `<div class="profile-img">
      <img src=${src} alt="фото кандидата">
    </div>`
  )
}

export default class ProfileImage {
  constructor(src) {
    this._src = src
    this._element = null
  }

  getTemplate() {
    return createProfileImage(this._src)
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate())
    }
    
    return this._element
  }

  removeElement() {
    this._element = null;
  }
}