import { MSEC_RANGE, SEC_RANGE } from './config';

export const state = {
  time: 0,
  formattedTime: [0, 0, 0],
  markIndex: 1,
};

export const startStopwatch = function () {
  // Updating time
  state.time += 1;

  // Updating milliseconds in formattedTime
  state.formattedTime[2] = state.time % MSEC_RANGE;

  // Updating seconds in formattedTime
  state.formattedTime[1] = Math.trunc(state.time / MSEC_RANGE) % SEC_RANGE;

  // Updating minutes in formattedTime
  state.formattedTime[0] = Math.trunc(state.time / (MSEC_RANGE * SEC_RANGE));
};

export const resetStopwatch = function () {
  state.time = 0;
  state.formattedTime = [0, 0, 0];
};

export const getMarkIndex = function () {
  const markIndex = state.markIndex;
  state.markIndex++;
  return markIndex;
};

export const resetMarkIndex = function () {
  state.markIndex = 1;
};
