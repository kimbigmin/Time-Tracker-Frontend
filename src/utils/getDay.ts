import * as moment from "moment";

const getDay = (date: string = "") => {
  const day = date === "" ? moment().day() : moment(date).day();
  return switchDay(day);
};

const switchDay = (day: number) => {
  switch (day) {
    case 0:
      return " (일)";
    case 1:
      return " (월)";
    case 2:
      return " (화)";
    case 3:
      return " (수)";
    case 4:
      return " (목)";
    case 5:
      return " (금)";
    case 6:
      return " (토)";
    default:
      return;
  }
};

export default getDay;
