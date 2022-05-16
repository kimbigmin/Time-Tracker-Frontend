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
import { getData } from "../../utils/getData";
import { getLastMondays } from "../../utils/getLastMondays";
import { getLastSunday } from "../../utils/getLastSunday";
import { OneDay } from "../../type";
import { getMainSumTimes, getDetailSumTimes } from "../../utils/getSumTimesObj";
import { getEntireTimes } from "../../utils/getEntireTimes";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  const standardTime = new Date().toDateString();
  const monday = getLastMondays(standardTime, 0);
  const lastMonday = getLastMondays(standardTime, -1);
  const sunday = getLastSunday(monday);
  const lastSunday = getLastSunday(lastMonday);

  const thisWeekList: OneDay[] | undefined = data.filter((item: OneDay) => {
    const date = new Date(item.date).getTime();
    return date >= monday && date <= sunday;
  });
  const lastWeekList: OneDay[] | undefined = data.filter((item: OneDay) => {
    const date = new Date(item.date).getTime();
    return date >= lastMonday && date <= lastSunday;
  });

  const entireTimes = getEntireTimes(thisWeekList);
  const lastEntireTimes = getEntireTimes(lastWeekList);

  // 주간
  const weekStatusData = {
    sumTimes: getMainSumTimes(entireTimes),
    lastSumTimes: getMainSumTimes(lastEntireTimes),
    sumDetailTimes: getDetailSumTimes(thisWeekList),
    lastSumDetailTimes: getDetailSumTimes(lastWeekList),
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
