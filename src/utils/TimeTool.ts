import * as moment from "moment";
import { OneDay } from "../type";
import { EachTime, SumTime } from "../type";

class TimeTool {
  static convertMinToTime(min: number) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    return `${hours}시간 ${minutes}분`;
  }

  static getAverageTime({
    time,
    dayNum,
  }: {
    time: number;
    dayNum: number | 0;
  }) {
    const hour = Math.floor(time / dayNum / 60);
    const minutes = Math.floor((time / dayNum) % 60);

    return `${isNaN(hour) ? 0 : hour}시 ${isNaN(minutes) ? 0 : minutes}분`;
  }

  static switchDay(day: number) {
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
  }

  static getDay(date: string = "") {
    date = [...date].map((el) => (el === "." ? "/" : el)).join("");
    const day = date === "" ? moment().day() : moment(date).day();
    return this.switchDay(day);
  }

  static getEntireTimes = (lists: OneDay[]) => {
    if (lists === undefined) {
      return;
    }
    return lists.map((item: OneDay) => item.entireTime);
  };

  static getLastMondays(date: string, week: number): string {
    const result =
      moment(date).day() !== 0
        ? moment(date)
            .subtract(week * 7 + (moment(date).day() - 1), "days")
            .format()
        : moment(date)
            .subtract(week * 7 + 6, "days")
            .format();
    return result;
  }

  static getLastSunday(monday: string): string {
    return moment(monday).add(6, "days").format();
  }

  static getPercentage(compare: number, standard: number): number {
    const result = Math.round(((compare - standard) / standard) * 100);
    return isNaN(result) || result === Infinity ? 0 : result;
  }

  static getSumTime(
    entire: EachTime[],
    time: string,
    detailTime: any = ""
  ): number {
    if (entire) {
      if (detailTime !== "") {
        return entire.reduce((acc: number, obj: EachTime) => {
          return acc + this.sumHoursMinutes(obj[time][detailTime]);
        }, 0);
      } else {
        return entire.reduce((acc: number, obj: EachTime) => {
          return acc + this.sumHoursMinutes(obj[time]);
        }, 0);
      }
    } else {
      return 0;
    }
  }

  static sumHoursMinutes(value: string) {
    if (value) {
      const time = value.split(":").map((item: string, i: number) => {
        if (i === 0) return parseInt(item) * 60;
        return parseInt(item);
      });

      return time[0] + time[1];
    } else {
      return 0;
    }
  }

  static getMainSumTimes(timeLists: EachTime[]): SumTime {
    return {
      sumImprove: this.getSumTime(timeLists, "entireImprove"),
      sumPrivate: this.getSumTime(timeLists, "entirePrivate"),
      sumWorks: this.getSumTime(timeLists, "entireWorks"),
      sumSleep: this.getSumTime(timeLists, "entireSleep"),
    };
  }

  static getDetailSumTimes(timeLists: any): SumTime {
    return {
      sumStudy: this.getSumTime(timeLists, "improve", "study"),
      sumGame: this.getSumTime(timeLists, "private", "game"),
      sumReading: this.getSumTime(timeLists, "improve", "reading"),
      sumWakeUp: this.getSumTime(timeLists, "sleeping", "wake"),
      sumNight: this.getSumTime(timeLists, "sleeping", "sleep"),
    };
  }

  static getMainTimesPercent(
    thisMainSumtimes: SumTime,
    lastMainSumTimes: SumTime
  ) {
    return {
      improvePercent: this.getPercentage(
        thisMainSumtimes.sumImprove,
        lastMainSumTimes.sumImprove
      ),
      privatePercent: this.getPercentage(
        thisMainSumtimes.sumPrivate,
        lastMainSumTimes.sumPrivate
      ),
      worksPercent: this.getPercentage(
        thisMainSumtimes.sumWorks,
        lastMainSumTimes.sumWorks
      ),
      sleepPercent: this.getPercentage(
        thisMainSumtimes.sumSleep,
        lastMainSumTimes.sumSleep
      ),
    };
  }

  static getDetailTimesPercent(
    thisDetailSumtimes: any,
    lastDetailSumTimes: any
  ) {
    return {
      studyPercent: this.getPercentage(
        thisDetailSumtimes.sumStudy,
        lastDetailSumTimes.sumStudy
      ),
      gamePercent: this.getPercentage(
        thisDetailSumtimes.sumGame,
        lastDetailSumTimes.sumGame
      ),
      readingPercent: this.getPercentage(
        thisDetailSumtimes.sumReading,
        lastDetailSumTimes.sumReading
      ),
      wakePercent: this.getPercentage(
        thisDetailSumtimes.sumWakeUp,
        lastDetailSumTimes.sumWakeUp
      ),
      nightPercent: this.getPercentage(
        thisDetailSumtimes.sumNight,
        lastDetailSumTimes.sumNight
      ),
    };
  }

  static minutesToHours(minutes: number) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    return `${hour}:${minute === 0 ? "00" : minute}`;
  }

  static msToTime(tomorrow: moment.Moment): string {
    const now = moment().format();

    let hours: string | number = tomorrow.diff(now, "hour");
    let minutes: string | number = tomorrow.diff(now, "minutes") % 60;
    let seconds: string | number = tomorrow.diff(now, "seconds") % 60;

    hours = hours >= 0 ? (hours < 10 ? "0" + hours : hours) : 23;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }
}

export default TimeTool;
