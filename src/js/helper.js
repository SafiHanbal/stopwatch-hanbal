export const checkDoubleDigit = function(num) {
  return String(num).length !== 2 ? `0${num}` : `${num}`;
}