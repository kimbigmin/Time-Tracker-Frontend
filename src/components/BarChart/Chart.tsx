import * as React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getMainSumTimes, getDetailSumTimes } from "../../utils/getSumTimesObj";
import { getEntireTimes } from "../../utils/getEntireTimes";
import { convertMinToTime } from "../../utils/convertMinToTime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart({
  thisList,
  lastList,
  pageType,
  restList = "undefined",
  selectedDate,
}: any) {
  const year = Number(selectedDate.current.year);
  const month = Number(selectedDate.current.month);

  const { twoMonthAgo, threeMonthAgo, fourMonthAgo, fiveMonthAgo } = restList;

  const monthList =
    pageType[2] !== "Month"
      ? []
      : [
          {
            beforeMonth: 5,
            sumTimes: {
              ...getMainSumTimes(getEntireTimes(fiveMonthAgo)),
              ...getDetailSumTimes(fiveMonthAgo),
            },
          },
          {
            beforeMonth: 4,
            sumTimes: {
              ...getMainSumTimes(getEntireTimes(fourMonthAgo)),
              ...getDetailSumTimes(fourMonthAgo),
            },
          },
          {
            beforeMonth: 3,
            sumTimes: {
              ...getMainSumTimes(getEntireTimes(threeMonthAgo)),
              ...getDetailSumTimes(threeMonthAgo),
            },
          },
          {
            beforeMonth: 2,
            sumTimes: {
              ...getMainSumTimes(getEntireTimes(twoMonthAgo)),
              ...getDetailSumTimes(twoMonthAgo),
            },
          },
          {
            beforeMonth: 1,
            sumTimes: {
              ...getMainSumTimes(getEntireTimes(lastList)),
              ...getDetailSumTimes(lastList),
            },
          },
          {
            beforeMonth: 0,
            sumTimes: {
              ...getMainSumTimes(getEntireTimes(thisList)),
              ...getDetailSumTimes(thisList),
            },
          },
        ];
  console.log(monthList);
  const [selectedList, setSelectedList] = useState({
    list: "IMPROVE_TIME",
    title: "자기계발",
  });

  const getChartData = (dayData: any) => {
    const improveArr = dayData.entireTime.entireImprove.split(":");
    const privateArr = dayData.entireTime.entirePrivate.split(":");
    const sleepArr = dayData.entireTime.entireSleep.split(":");
    const worksArr = dayData.entireTime.entireWorks.split(":");
    const studyArr = dayData.improve.study.split(":");
    const readingArr = dayData.improve.reading.split(":");

    switch (selectedList.list) {
      case "IMPROVE_TIME":
        return Number(improveArr[0]) + Number(improveArr[1] * 0.016);
      case "PRIVATE_TIME":
        return Number(privateArr[0]) + Number(privateArr[1] * 0.016);

      case "SLEEP_TIME":
        return Number(sleepArr[0]) + Number(sleepArr[1] * 0.016);
      case "WORK_TIME":
        return Number(worksArr[0]) + Number(worksArr[1] * 0.016);
      case "STUDY_TIME":
        return Number(studyArr[0]) + Number(studyArr[1] * 0.016);
      case "READING_TIME":
        return Number(readingArr[0]) + Number(readingArr[1] * 0.016);
    }
  };

  const getMonthChartData = (monthData: any) => {
    switch (selectedList.list) {
      case "IMPROVE_TIME":
        return Number(
          convertMinToTime(monthData.sumTimes.sumImprove).split("시간")[0]
        );
      case "PRIVATE_TIME":
        return Number(
          convertMinToTime(monthData.sumTimes.sumPrivate).split("시간")[0]
        );
      case "SLEEP_TIME":
        return Number(
          convertMinToTime(monthData.sumTimes.sumSleep).split("시간")[0]
        );
      case "WORK_TIME":
        return Number(
          convertMinToTime(monthData.sumTimes.sumWorks).split("시간")[0]
        );
      case "STUDY_TIME":
        return Number(
          convertMinToTime(monthData.sumTimes.sumStudy).split("시간")[0]
        );
      case "READING_TIME":
        return Number(
          convertMinToTime(monthData.sumTimes.sumReading).split("시간")[0]
        );
    }
  };

  const weekDataSets = [
    {
      label: `지난${pageType[1]}`,
      data: lastList.map((day: any) => {
        return getChartData(day);
      }),
      backgroundColor: "rgba(71, 71, 71, 0.3)",
    },
    {
      label: `이번${pageType[1]}`,
      data: thisList.map((day: any) => {
        return getChartData(day);
      }),
      backgroundColor: () => {
        switch (selectedList.list) {
          case "IMPROVE_TIME":
            return "rgba(255, 187, 0, 0.6)";
          case "PRIVATE_TIME":
            return "rgba(241, 66, 43, 0.6)";
          case "SLEEP_TIME":
            return "rgba(107, 29, 195, 0.5)";
          case "WORK_TIME":
            return " rgba(74, 200, 190, 0.6)";
          case "STUDY_TIME":
            return "rgba(228, 130, 2, 0.7)";
          case "READING_TIME":
            return "rgba(1, 78, 5, 0.6)";
        }
      },
    },
  ];

  const monthDataSets = [
    {
      label: `${selectedList.title}`,
      data: monthList.map((month) => {
        return getMonthChartData(month);
      }),
      backgroundColor: () => {
        switch (selectedList.list) {
          case "IMPROVE_TIME":
            return "rgba(251, 184, 1, 0.8)";
          case "PRIVATE_TIME":
            return "rgba(241, 66, 43, 0.8)";
          case "SLEEP_TIME":
            return "rgba(107, 29, 195, 0.8)";
          case "WORK_TIME":
            return " rgba(0, 226, 207, 0.8)";
          case "STUDY_TIME":
            return "rgba(228, 130, 2, 0.8)";
          case "READING_TIME":
            return "rgba(49, 37, 2, 0.8)";
        }
      },
    },
  ];

  const monthLabels = Array(6)
    .fill("")
    .map((_, idx) => {
      const returnMonth = month - idx;
      switch (returnMonth) {
        case 0:
          return "12월";
        case -1:
          return "11월";
        case -2:
          return "10월";
        case -3:
          return "9월";
        case -4:
          return "8월";
        default:
          return `${returnMonth}월`;
      }
    })
    .reverse();

  const weekLabels = ["월", "화", "수", "목", "금", "토", "일"];

  const data = {
    labels:
      pageType[2] === "Week"
        ? weekLabels
        : pageType[2] === "Month"
        ? monthLabels
        : monthLabels,
    datasets:
      pageType[2] === "Week"
        ? weekDataSets
        : pageType[2] === "Month"
        ? monthDataSets
        : monthDataSets,
  };

  const options = {
    responsive: true,
    layout: {
      padding: 30,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 13,
          },
        },
      },
      title: {
        display: true,
        text: `${selectedList.title} 시간 통계`,
        font: {
          size: 15,
          weight: "bold",
        },
      },
      // "#36424F"
      datalabels: {
        color: "black",
        font: {
          size: 10,
        },
        formatter: (value: any, context: any) => {
          const hour = Math.floor(value);
          const minutes = Math.floor((value - hour) * 60);
          return `${hour}시간 ${minutes}분`;
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: any, index: any, ticks: any) => {
            return `${Math.floor(value)}시간`;
          },
        },
      },
    },
  };

  const listClickHandler = (e: any): void => {
    if (e.target.tagName === "LI") {
      const clickedLabel: string = e.target.dataset.labels;
      setSelectedList({
        ...selectedList,
        list: clickedLabel,
        title: e.target.textContent,
      });
    }
  };

  return (
    <>
      <TopBar onClick={listClickHandler}>
        <li data-labels="IMPROVE_TIME">자기계발</li>
        <li data-labels="PRIVATE_TIME">개인시간</li>
        <li data-labels="WORK_TIME">일</li>
        <li data-labels="SLEEP_TIME">취침</li>
        <li data-labels="STUDY_TIME">공부시간</li>
        <li data-labels="READING_TIME">독서 및 신문</li>
      </TopBar>
      <Bar options={options} data={data} />
    </>
  );
}

const TopBar = styled.ul`
  display: flex;
  position: relative;
  justify-content: space-around;
  margin-bottom: 2rem;
  li {
    width: 5rem;
    color: #36424f;
    text-align: center;
    font-weight: bold;
    font-size: 0.8rem;
    padding-bottom: 0.2rem;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  li:hover {
    border-bottom: 2px solid #1671cc;
    transition-property: border-bottom;
    transition-duration: 1s;
  }
`;

export default Chart;
