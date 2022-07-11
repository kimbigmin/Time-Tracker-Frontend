import * as React from "react";
import { useState, useEffect } from "react";
import Contribution from "../../components/Contribution/Contribution";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TimeInput from "../../components/TimeInput/TimeInput";
import { Link } from "react-router-dom";
import { AnalysisBox, WeekBox } from "./style";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Motivation from "../../components/Motivation/Motivation";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WeekStatus from "../../components/WeekStatus/WeekStatus";

import { getLastMondays } from "../../utils/getLastMondays";
import { getLastSunday } from "../../utils/getLastSunday";
import { OneDay } from "../../type";
import { getMainSumTimes, getDetailSumTimes } from "../../utils/getSumTimesObj";
import { getEntireTimes } from "../../utils/getEntireTimes";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { fetchAllTime } from "../../state/reducers/timeData";
import * as moment from "moment";

function Dashboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTime());
  }, []);

  const data = useAppSelector((state) => state.timeData.data);

  const standardTime = moment().startOf("day").format();
  const monday = getLastMondays(standardTime, 0);
  const lastMonday = getLastMondays(standardTime, 1);
  const sunday = getLastSunday(monday);
  const lastSunday = getLastSunday(lastMonday);

  const thisWeekList: OneDay[] | undefined = data.filter((item: OneDay) => {
    const date = [...item.date].map((el) => (el === "." ? "/" : el)).join("");
    return (
      moment(date).isSameOrAfter(moment(monday)) &&
      moment(date).isSameOrBefore(moment(sunday))
    );
  });
  const lastWeekList: OneDay[] | undefined = data.filter((item: OneDay) => {
    const date = [...item.date].map((el) => (el === "." ? "/" : el)).join("");
    return (
      moment(date).isSameOrAfter(moment(lastMonday)) &&
      moment(date).isSameOrBefore(moment(lastSunday))
    );
  });
  console.log(thisWeekList, lastWeekList);
  const entireTimes = getEntireTimes(thisWeekList);
  const lastEntireTimes = getEntireTimes(lastWeekList);

  console.log(entireTimes, lastEntireTimes);
  // 주간
  const weekStatusData = {
    sumTimes: getMainSumTimes(entireTimes!),
    lastSumTimes: getMainSumTimes(lastEntireTimes!),
    sumDetailTimes: getDetailSumTimes(thisWeekList!),
    lastSumDetailTimes: getDetailSumTimes(lastWeekList!),
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TimeInput dataLength={data.length} />
            <WeekStatus data={weekStatusData} />
            <DoughnutChart data={data}></DoughnutChart>
          </Grid>
          <Grid item xs={6}>
            <Motivation />
            <AnalysisBox>
              <h2>분석</h2>
              <div className="links">
                <Link
                  to="/main/analysis/week"
                  state={{ type: ["주간", "주", "Week"] }}
                >
                  <WeekBox>
                    <DateRangeIcon sx={{ fontSize: 50 }}></DateRangeIcon>
                    <h3>주간분석</h3>
                  </WeekBox>
                </Link>
                <Link
                  to="/main/analysis/month"
                  state={{ type: ["월간", "달", "Month"] }}
                >
                  <WeekBox>
                    <CalendarMonthIcon
                      sx={{ fontSize: 50 }}
                    ></CalendarMonthIcon>
                    <h3>월간분석</h3>
                  </WeekBox>
                </Link>
                <Link
                  to="/main/analysis/year"
                  state={{ type: ["연간", "년", "Year"] }}
                >
                  <WeekBox>
                    <CalendarTodayIcon
                      sx={{ fontSize: 50 }}
                    ></CalendarTodayIcon>
                    <h3>연간분석</h3>
                  </WeekBox>
                </Link>
              </div>
            </AnalysisBox>
            <Contribution data={data} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;
