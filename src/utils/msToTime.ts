function msToTime(duration: number): string {
  let seconds = ((duration / 1000) % 60).toFixed(0);
  let minutes = ((duration / (1000 * 60)) % 60).toFixed(0);
  let hours = ((duration / (1000 * 60 * 60)) % 24).toFixed(0);

  hours =
    Number(hours) < 10 ? "0" + hours : Number(hours) === 24 ? "23" : hours;
  minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
  seconds = Number(seconds) < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

export default msToTime;
