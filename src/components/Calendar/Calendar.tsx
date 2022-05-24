import { useEffect } from "react";
import { Container } from "./style";
import { OneDay } from "../../type";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import {
  moveNextMonth,
  movePrevMonth,
  setDate,
} from "../../state/reducers/calendar";

function Calender({ data, finishedDay, setFinishedDays, getFormInfo }: any) {
  const DAYS = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];
  const dayLists = DAYS.map((item, i) => {
    return (
      <li className="day" key={i}>
        {item}
      </li>
    );
  });

  const { yearAndMonth, selectedDate } = useAppSelector(
    (state) => state.calendar
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getInputDoneDates() {
      const response = await fetch("http://localhost:3000/time", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      const done = result
        .map((item: OneDay) => {
          if (item.date.includes(yearAndMonth)) {
            return item.date.split(".")[2];
          }
        })
        .filter((el: number) => el !== undefined);

      setFinishedDays(done);
    }
    getInputDoneDates();
  }, [data, yearAndMonth]);

  const dateClickColorHandler = (date: number) => {
    if (selectedDate === date) return "selected";
    if (finishedDay.includes(String(date))) {
      return "doneDate";
    } else {
      return "date";
    }
  };

  // 월별에 따른 달력 데이터 불러오기
  let dateLists = Array(37)
    .fill("")
    .map((_, idx) => {
      const DATE = new Date(yearAndMonth);
      const startDay: number = DATE.getDay() !== 0 ? DATE.getDay() : 7;
      const startMonth: number = DATE.getMonth() + 1;
      const thirtyDaysMonth: number[] = [4, 6, 9, 11];
      const date: number = idx + 2 - startDay;
      const isBlankDay = startDay - 1 > idx;
      const is31day = thirtyDaysMonth.includes(startMonth) && date > 30;
      const isLeapYearFeb =
        startMonth === 2 && DATE.getFullYear() % 4 === 0 && date > 29;
      const isCommonYearFeb =
        startMonth === 2 && DATE.getFullYear() % 4 !== 0 && date > 28;
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
            getFormInfo(data);
            // 바인딩 함수 추가
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
      <div className="dates">{dateLists}</div>
    </Container>
  );
}

export default Calender;
