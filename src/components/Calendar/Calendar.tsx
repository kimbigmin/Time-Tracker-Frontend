import { useEffect } from "react";
import { Container } from "./style";
import { OneDay } from "../../type";
import { useAppSelector, useAppDispatch } from "../../state/hooks";

import {
  moveNextMonth,
  movePrevMonth,
  setDate,
} from "../../state/reducers/calendar";
import { fetchOneDay } from "../../state/reducers/timeData";
import * as moment from "moment";
interface CalendarProps {
  finishedDay: string[];
  setFinishedDays: React.Dispatch<React.SetStateAction<string[]>>;
}

function Calendar({ finishedDay, setFinishedDays }: CalendarProps) {
  const data = useAppSelector((state) => state.timeData.data);
  const { yearAndMonth, selectedDate } = useAppSelector(
    (state) => state.calendar
  );
  const dispatch = useAppDispatch();

  const DAYS = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];

  const dayLists = DAYS.map((item, i) => (
    <li className="day" key={i}>
      {item}
    </li>
  ));

  const getId = (data: OneDay[] | null) => {
    if (data) {
      return data
        .map((item: OneDay) => {
          if (item.date === `${yearAndMonth}.${selectedDate}`) {
            return item.shortId;
          }
          return "";
        })
        .join("");
    }
  };

  const getFormInfo = (data: OneDay[]) => {
    const id = getId(data);
    if (id) {
      dispatch(fetchOneDay(id));
    } else {
      dispatch(fetchOneDay());
    }
  };

  useEffect(() => {
    async function getInputDoneDates() {
      const done = data
        .map((item: OneDay) => {
          if (item.date.includes(yearAndMonth)) {
            return item.date.split(".")[2];
          }
          return "";
        })
        .filter((el) => el !== "");
      setFinishedDays(done);
    }
    getInputDoneDates();
    getFormInfo(data);
  }, [data, selectedDate, yearAndMonth]);

  const dateClickColorHandler = (date: number) => {
    if (selectedDate === date) return "selected";
    if (finishedDay.includes(String(date))) return "doneDate";
    return "date";
  };

  // 월별에 따른 달력 데이터 불러오기
  let dateList = Array(37)
    .fill("")
    .map((_, idx) => {
      const DATE = moment(yearAndMonth.replace(".", "/") + "/1").format();
      const startDay: number =
        moment(DATE).day() !== 0 ? moment(DATE).day() : 7;
      const startMonth: number = moment(DATE).month() + 1;
      const thirtyDaysMonth: number[] = [4, 6, 9, 11];
      const date: number = idx + 2 - startDay;
      const isBlankDay = startDay - 1 > idx;
      const is31day = thirtyDaysMonth.includes(startMonth) && date > 30;
      const isLeapYearFeb =
        startMonth === 2 && moment(DATE).year() % 4 === 0 && date > 29;
      const isCommonYearFeb =
        startMonth === 2 && moment(DATE).year() % 4 !== 0 && date > 28;
      const isOver31Day = date > 31;

      if (isBlankDay) return <li></li>;
      if (is31day) return <li></li>;
      if (isLeapYearFeb) {
        return <li></li>;
      } else {
        if (isCommonYearFeb) return <li></li>;
      }
      if (isOver31Day) return <li></li>;

      return (
        <li
          key={date}
          className={dateClickColorHandler(date)}
          onClick={() => {
            dispatch(setDate(date));
          }}
        >
          {date}
        </li>
      );
    });

  return (
    <Container>
      <div className="header">
        <li className="move-Btn" onClick={() => dispatch(movePrevMonth())}>
          <i className="fas fa-chevron-left"></i>
        </li>
        <li className="yearAndMonth">{yearAndMonth}</li>
        <li className="move-Btn" onClick={() => dispatch(moveNextMonth())}>
          <i className="fas fa-chevron-right"></i>
        </li>
      </div>
      <div className="days">{dayLists}</div>
      <div className="dates">{dateList}</div>
    </Container>
  );
}

export default Calendar;
