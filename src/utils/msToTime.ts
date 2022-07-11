import * as moment from "moment";

function msToTime(tomorrow: moment.Moment): string {
  const now = moment().format();

  let hours: string | number = tomorrow.diff(now, "hour");
  let minutes: string | number = tomorrow.diff(now, "minutes") % 60;
  let seconds: string | number = tomorrow.diff(now, "seconds") % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`;
}

export default msToTime;
