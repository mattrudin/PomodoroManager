export const formatTime = (time) => {
  let minutesNumber = Math.floor(time / 60);
  time -= minutesNumber * 60;
  let secondsNumber = parseInt(time % 60, 10);
  let minutes = minutesNumber < 10 ? `0${minutesNumber}` : `${minutesNumber}`;
  let seconds = secondsNumber < 10 ? `0${secondsNumber}` : `${secondsNumber}`;
  return `${minutes}:${seconds}`;
};