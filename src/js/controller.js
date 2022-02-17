import * as model from './model.js';
import stopwatchView from './Views/stopwatchView.js';
import markedTimeView from './Views/markedTimeView';

let timer;

const controlStartStopwatch = function () {
  timer = setInterval(function () {
    // Updating state data
    model.startStopwatch();

    // Rendering time
    stopwatchView.renderTime(...model.state.formattedTime);

    // Display Mark Button
    markedTimeView.displayMarkButton();
  }, 100);
};

const controlStopStopwatch = function () {
  clearInterval(timer);
  clearInterval(timer);
  stopwatchView.changeStartOnStop();
};

const controlResetStopwatch = function () {
  clearInterval(timer);
  clearInterval(timer); // Guard Clause
  model.resetStopwatch();
  model.resetMarkIndex();
  stopwatchView.renderTime(...model.state.formattedTime);
  stopwatchView.changeStartOnReset();
  markedTimeView.clearParentEl();
  markedTimeView.hideMarkButton();
  markedTimeView.hideMarksSection();
};

const controlAddMark = function () {
  const markIndex = model.getMarkIndex();
  markedTimeView.renderMark(model.state.formattedTime, markIndex);
};

const controlDeleteMark = function() {
  markedTimeView.hideMarksSection()
}

const init = function () {
  stopwatchView.addHandlerStart(controlStartStopwatch);
  stopwatchView.addHandlerStop(controlStopStopwatch);
  stopwatchView.addHandlerReset(controlResetStopwatch);
  markedTimeView.addHandlerMark(controlAddMark);
  markedTimeView.addHandlerDeleteMark(controlDeleteMark)
};

init();
