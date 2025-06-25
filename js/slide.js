export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    console.log(slide);
  }

  onstart(event) {
    event.preventDefault;
  }

  addslideEvent() {
    this.wrapper.addEventListerner("mousedow", this.onstart);
  }

  bindEvents() {
    this.onstart = this.onstart.bind(this);
  }
  ini() {
    this.addslideEvent();
    this.bindEvents();
    return this;
  }
}
