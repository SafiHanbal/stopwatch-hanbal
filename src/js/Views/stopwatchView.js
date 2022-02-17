import { checkDoubleDigit } from "../helper";

class StopwatchCl {
  #min = document.querySelector('.time__min');
  #sec = document.querySelector('.time__sec');
  #ms = document.querySelector('.time__ms');

  #btnStart = document.querySelector('.btn__start');
  #btnStop = document.querySelector('.btn__stop');
  #btnReset = document.querySelector('.btn__reset');

  #clear(element) {
    element.innerHTML = '00';
  }

  changeStartOnStop() {
    this.#btnStart.innerHTML = 'Resume';
  }

  changeStartOnReset() {
    this.#btnStart.innerHTML = 'Start';
  }

  renderTime(min, sec, ms) {
    // Render milliseconds
    this.#ms.innerHTML = ms;

    // Render seconds
    this.#sec.innerHTML = checkDoubleDigit(sec);

    // Render min
    this.#min.innerHTML = checkDoubleDigit(min);
  }

  addHandlerStart(handler) {
    this.#clear(this.#min);
    this.#clear(this.#sec);
    this.#clear(this.#ms);
    this.#btnStart.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerStop(handler) {
    this.#btnStop.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerReset(handler) {
    this.#btnReset.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new StopwatchCl();
