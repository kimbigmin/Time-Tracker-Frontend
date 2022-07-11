import { ContributionBox, Container } from "./style";
import { OneDay } from "../../type";
import * as moment from "moment";

type ContributionProps = {
  data: OneDay[];
};

function Contribution({ data }: ContributionProps) {
  const dayNum = 369;

  const thisYear = moment().year().toString();
  const findWrittenDateIndex = data.map((el: OneDay) => {
    if (el.date.includes(thisYear) || el.date.includes(String(+thisYear - 1))) {
      const date = [...el.date]
        .map((el: string) => (el === "." ? "/" : el))
        .join("");

      const dayFromToday = moment().diff(moment(date), "days");

      return dayNum - dayFromToday;
    }
  });

  const dateList = Array(dayNum)
    .fill(null)
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
      const month = Number(moment().month() + 1) - idx;
      const returnMonth = month <= 0 ? 12 + month : month;
      return <li key={idx}>{returnMonth}월</li>;
    })
    .reverse();

  return (
    <Container date={moment().date()}>
      <h3>{thisYear}년 기록일 상황</h3>
      <ul className="month">{monthList}</ul>
      <ContributionBox>{dateList}</ContributionBox>
    </Container>
  );
}
export default Contribution;
