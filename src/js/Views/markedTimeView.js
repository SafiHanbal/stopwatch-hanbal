import { checkDoubleDigit } from '../helper';

class MarkedTimeCl {
  #btnMark = document.querySelector('.btn__mark');
  #parentEl = document.querySelector('.mark__container');

  #generateMarkup(data, i) {
    return `
    <div class="mark__details" data-index="${i}">
      <p class="mark__serial">${i}</p>
      <p class="mark__timestamp">${checkDoubleDigit(
        data[0]
      )} : ${checkDoubleDigit(data[1])} : ${data[2]}</p>
      <a href="#" class="btn-delete">Delete</a>
    </div>
    `;
  }

  displayMarkButton() {
    this.#btnMark.style.display = 'block';
  }

  hideMarkButton() {
    this.#btnMark.style.display = 'none'
  }

  renderMark(data, i) {
    const sectionMarks = this.#parentEl.closest('.mark');
    if (!this.#parentEl.querySelector('.mark__details')) {
      sectionMarks.style.display = 'block';
      setTimeout(() => (sectionMarks.style.opacity = '1'), 100);
    }
    const markup = this.#generateMarkup(data, i);
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  clearParentEl() {
    this.#parentEl.innerHTML = '';
  }

  hideMarksSection() {
    if (!this.#parentEl.querySelectorAll('.mark__details').length) {
      const sectionMarks = this.#parentEl.closest('.mark');
      sectionMarks.style.opacity = '0';
      setTimeout(() => (sectionMarks.style.display = 'none'), 200);
    }

    // console.log(this.#parentEl.querySelectorAll('.mark__details').length);
  }

  addHandlerDeleteMark(handler) {
    this.#parentEl.addEventListener('click', function (e) {
      e.preventDefault();

      if (!e.target.classList.contains('btn-delete')) return;
      const markToDelete = e.target.closest('.mark__details');
      markToDelete.remove();

      handler();
    });
  }

  addHandlerMark(handler) {
    this.#btnMark.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new MarkedTimeCl();
