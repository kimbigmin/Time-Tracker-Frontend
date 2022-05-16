import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chart from "../../components/BarChart/Chart";
import { getData } from "../../utils/getData";
import { getLastMondays } from "../../utils/getLastMondays";
import { getMainSumTimes, getDetailSumTimes } from "../../utils/getSumTimesObj";
import { convertMinToTime } from "../../utils/convertMinToTime";
import { getLastSunday } from "../../utils/getLastSunday";
import {
  getMainTimesPercent,
  getDetailTimesPercent,
} from "../../utils/getTimesPercent";
import { getSleepingAverage } from "../../utils/getSleepAverage";
import { OneDay } from "../../type";
import {
  Box,
  Time,
  Percent,
  TimeDiff,
  Container,
  BoxContainer,
  ChartBox,
  TopBox,
  Main,
} from "./style";
import { getEntireTimes } from "../../utils/getEntireTimes";

function Analysis() {
  // 데이터 불러오기
  useEffect(() => {
    getData(setData);
  }, []);

  const [data, setData] = useState([]);
  const { state }: any = useLocation();
  const pageType = useRef(state.type);

  const thisMonth = new Date().getMonth() + 1;
  const thisYear = new Date().getFullYear();
  const today = new Date().getDate();

  // 이번주 월요일 일요일, 저번주 월요일 일요일 구하기
  const [weekRange, setWeekRange] = useState(-1);

  const selectedDate = useRef({
    year: `${thisYear}`,
    month: `${thisMonth}`,
  });

  const [inputDate, setInputDate] = useState(
    `${selectedDate.current.year}.${selectedDate.current.month}.${today}`
  );

  const standardTime = new Date(inputDate).toDateString();
  const monday = getLastMondays(standardTime, weekRange);
  const lastMonday = getLastMondays(standardTime, weekRange - 1);
  const sunday = getLastSunday(monday);
  const lastSunday = getLastSunday(lastMonday);

  const isLastPage =
    sunday < new Date(`${thisYear}.${thisMonth}.${today}`).getTime();

  const getMonthList = (beforeMonth: number = 0): OneDay[] => {
    return data.filter((item: OneDay) => {
      let month = Number(selectedDate.current.month) - beforeMonth;
      let year = Number(selectedDate.current.year);

      if (month <= 0) {
        month = month + 12;
        year -= 1;
      }
      return item.date.includes(`${year}.${month}`);
    });
  };

  // 데이터에서 날짜리스트 뽑아오기
  const getDateList = (pageType: string, data: OneDay[]) => {
    if (pageType === "Week") {
      const thisList = data.filter((item: OneDay) => {
        const date = new Date(item.date).getTime();
        return date >= monday && date <= sunday;
      });

      const lastList = data.filter((item: OneDay) => {
        const date = new Date(item.date).getTime();
        return date >= lastMonday && date <= lastSunday;
      });

      return { thisList, lastList };
    } else if (pageType === "Month") {
      const thisList = getMonthList(0);
      const lastList = getMonthList(1);

      const restLastMonth = {
        twoMonthAgo: getMonthList(2),
        threeMonthAgo: getMonthList(3),
        fourMonthAgo: getMonthList(4),
        fiveMonthAgo: getMonthList(5),
      };

      return { thisList, lastList, restLastMonth };
    } else {
      const thisList = data.filter((item: OneDay) => {
        return item.date.includes(`${selectedDate.current.year}`);
      });

      const lastList = data.filter((item: OneDay) => {
        return item.date.includes(`${Number(selectedDate.current.year) - 1}`);
      });

      return { thisList, lastList };
    }
  };

  const { thisList, lastList, restLastMonth } = getDateList(
    pageType.current[2],
    data
  );

  // 날짜 정렬 sort
  thisList.sort((a: any, b: any) => {
    const aDay = new Date(a.date).getTime();
    const bDay = new Date(b.date).getTime();

    return aDay - bDay;
  });

  // 이번주, 저번주 전체 시간 가져오기
  const entireTimes = getEntireTimes(thisList);
  const lastEntireTimes = getEntireTimes(lastList);

  // 주간
  const sumTimes = getMainSumTimes(entireTimes);
  const lastSumTimes = getMainSumTimes(lastEntireTimes);
  const sumDetailTimes = getDetailSumTimes(thisList);
  const lastSumDetailTimes = getDetailSumTimes(lastList);

  const mainTimesPercent = getMainTimesPercent(sumTimes, lastSumTimes);
  const detailTimesPercent = getDetailTimesPercent(
    sumDetailTimes,
    lastSumDetailTimes
  );
  const isThisWeek = sunday + 86400000 > new Date().getTime();

  const sleepingAverage = getSleepingAverage(
    sumDetailTimes,
    lastSumDetailTimes,
    isThisWeek
  );
  // 기타 시간사용 통계 퍼센트

  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const selectHandler = (e: any) => {
    switch (e.target.name) {
      case "year":
        return (selectedDate.current.year = e.target.value);
      case "month":
        return (selectedDate.current.month = e.target.value);
    }
  };

  const searchDateHandler = () => {
    setWeekRange(0);
    setInputDate(
      `${selectedDate.current.year}.${selectedDate.current.month}.1`
    );
  };

  const buttonWeekHandler = (e: any) => {
    if (e.target.dataset.type === "before") {
      setWeekRange(weekRange - 1);
    } else if (e.target.dataset.type === "after") {
      setWeekRange(weekRange + 1);
    }
  };

  return (
    <>
      <Header />
      <Main>
        <TopBox>
          <h2 className="title">{pageType.current[0]} 분석 페이지</h2>

          <select name="year" className="select-input" onChange={selectHandler}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022" selected>
              2022
            </option>
          </select>
          <label htmlFor="year">년</label>
          {pageType.current[0] !== "연간" && (
            <>
              <select
                name="month"
                className="select-input"
                onChange={selectHandler}
              >
                {month.map((el) => {
                  return (
                    <option value={el} selected={thisMonth === el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="month">월</label>
            </>
          )}
          <button className="search-btn" onClick={searchDateHandler}>
            조회
          </button>

          {pageType.current[0] === "주간" && (
            <div className="week-page-toggle">
              <button data-type="before" onClick={buttonWeekHandler}>
                ◀️
              </button>
              <p>{`${new Date(monday).getFullYear()}.${
                new Date(monday).getMonth() + 1
              }.${new Date(monday).getDate()} (월) ~ ${new Date(
                sunday
              ).getFullYear()}.${new Date(sunday).getMonth() + 1}.${new Date(
                sunday
              ).getDate()} (일)`}</p>
              {isLastPage && (
                <button data-type="after" onClick={buttonWeekHandler}>
                  ▶️
                </button>
              )}
            </div>
          )}
        </TopBox>
        <Container>
          <BoxContainer>
            <Box>
              <h2>이번{pageType.current[1]} 시간사용 통계</h2>
              <h3>
                자기계발: <Time>{convertMinToTime(sumTimes.sumImprove)}</Time>
                <Percent data={mainTimesPercent.improvePercent}>
                  {mainTimesPercent.improvePercent}%
                </Percent>
              </h3>
              <h3>
                개인시간: <Time>{convertMinToTime(sumTimes.sumPrivate)}</Time>
                <Percent data={mainTimesPercent.privatePercent}>
                  {mainTimesPercent.privatePercent}%
                </Percent>
              </h3>

              <h3>
                일: <Time>{convertMinToTime(sumTimes.sumWorks)}</Time>
                <Percent data={mainTimesPercent.worksPercent}>
                  {mainTimesPercent.worksPercent}%
                </Percent>
              </h3>

              <h3>
                취침: <Time>{convertMinToTime(sumTimes.sumSleep)}</Time>
                <Percent data={mainTimesPercent.sleepPercent}>
                  {mainTimesPercent.sleepPercent}%
                </Percent>
              </h3>
            </Box>
            <Box>
              <h2>기타 시간사용 통계</h2>
              <h3>
                공부시간:{" "}
                <Time>{convertMinToTime(sumDetailTimes.sumStudy)}</Time>
                <Percent data={detailTimesPercent.studyPercent}>
                  {detailTimesPercent.studyPercent}%
                </Percent>
              </h3>
              <h3>
                게임시간:{" "}
                <Time>{convertMinToTime(sumDetailTimes.sumGame)}</Time>
                <Percent data={detailTimesPercent.gamePercent}>
                  {detailTimesPercent.gamePercent}%
                </Percent>
              </h3>
              <h3>
                독서 및 신문:{" "}
                <Time>{convertMinToTime(sumDetailTimes.sumReading)}</Time>
                <Percent data={detailTimesPercent.readingPercent}>
                  {detailTimesPercent.readingPercent}%
                </Percent>
              </h3>
              <h3>
                평균 기상시간: <Time>{sleepingAverage.thisWakeUp}</Time>
                <TimeDiff data={detailTimesPercent.wakePercent}>
                  {detailTimesPercent.wakePercent}%
                </TimeDiff>
              </h3>
              <h3>
                평균 취침시간: <Time>{sleepingAverage.thisNight}</Time>
                <TimeDiff data={detailTimesPercent.nightPercent}>
                  {detailTimesPercent.nightPercent}%
                </TimeDiff>
              </h3>
            </Box>
          </BoxContainer>
          <ChartBox>
            <Chart
              thisList={thisList}
              lastList={lastList}
              restList={restLastMonth}
              pageType={pageType.current}
              selectedDate={selectedDate}
            ></Chart>
          </ChartBox>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Analysis;
