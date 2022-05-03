import * as React from "react";
import { ContributionBox, Container } from "./style";

function Contribution({ data }: any) {
  const dayNum = 369;

  const thisYear = String(new Date().getFullYear());
  const today = new Date().toDateString();
  const MS_ONE_DAY = 86400000;

  const findWrittenDateIndex = data.map((el: any) => {
    if (el.date.includes(thisYear) || el.date.includes(Number(thisYear) - 1)) {
      const dayDiff = new Date(today).getTime() - new Date(el.date).getTime();
      const dayFromToday = dayDiff / MS_ONE_DAY;

      return dayNum - dayFromToday;
    }
  });

  const dateList = Array(dayNum)
    .fill("")
    .map((_, idx) => {
      return (
        <li
          className={findWrittenDateIndex.includes(idx + 1) ? "done" : ""}
          key={idx + 1}
        ></li>
      );
    });

  const monthList = Array(12)
    .fill("")
    .map((_, idx) => {
      const returnMonth = Number(new Date().getMonth() + 1) - idx;
      switch (returnMonth) {
        case 0:
          return <li>12월</li>;
        case -1:
          return <li>11월</li>;
        case -2:
          return <li>10월</li>;
        case -3:
          return <li>9월</li>;
        case -4:
          return <li>8월</li>;
        case -5:
          return <li>7월</li>;
        case -6:
          return <li>6월</li>;
        default:
          return <li>{`${returnMonth}월`}</li>;
      }
    })
    .reverse();

  return (
    <Container date={new Date().getDate()}>
      <h3>{thisYear}년 기록일 상황</h3>
      <ul className="month">{monthList}</ul>
      <ContributionBox>{dateList}</ContributionBox>
    </Container>
  );
}
export default Contribution;
