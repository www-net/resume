import AbstractComponent from "../abstract-component"

const createProfileImage = (src = "./images/profileImg.jpg") => {
  return (
    `<div class="profile-img">
      <img src=${src} alt="фото кандидата">
    </div>`
  )
}

export default class ProfileImage extends AbstractComponent {
  constructor(src) {
    super();
    this._src = src
  }

  getTemplate() {
    return createProfileImage(this._src)
  }

}