function msToTime(duration: number): string {
  let seconds = String(Math.floor((duration / 1000) % 60));
  let minutes = String(Math.floor((duration / (1000 * 60)) % 60));
  let hours = String(Math.floor((duration / (1000 * 60 * 60)) % 24));

  hours = Number(hours) < 10 ? "0" + hours : hours;
  minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
  seconds = Number(seconds) < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

export default msToTime;
