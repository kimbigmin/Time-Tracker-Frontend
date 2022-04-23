import * as React from "react";
import { ContributionBox, Container } from "./style";

function Contribution({ data }: any) {
  const thisYear = String(new Date().getFullYear());
  const MS_ONE_DAY = 86400000;

  const findWrittenDateIndex = data.map((el: any) => {
    if (el.date.includes(thisYear)) {
      const dayDiff =
        new Date(el.date).getTime() - new Date(`${thisYear}.01.01`).getTime();
      const dayFromJanuary1st = dayDiff / MS_ONE_DAY;
      return dayFromJanuary1st + 1;
    }
  });

  const dateList = Array(365)
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
      return <li>{idx + 1}월</li>;
    });

  return (
    <Container>
      <h3>{thisYear}년 기록일 상황</h3>
      <ul className="month">{monthList}</ul>
      <ContributionBox>{dateList}</ContributionBox>
    </Container>
  );
}
export default Contribution;
