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
import { OneDay } from "../../type";
import * as moment from "moment";
import TimeTool from "../../utils/TimeTool";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  thisList: OneDay[];
  lastList: OneDay[];
  pageType: string[];
  restList: any;

  selectedDate: React.MutableRefObject<{
    year: string;
    month: string;
  }>;
};

type MonthDateType = {
  beforeMonth: number;
  sumTimes: {
    [key: string]: number;
  };
};

type YearDateType = {
  beforeYear: number;
  sumTimes: {
    [key: string]: number;
  };
};

type SelectedListType = {
  list: string | undefined;
  title: string | null;
};

function Chart({
  thisList,
  lastList,
  pageType,
  restList = "undefined",
  selectedDate,
}: ChartProps) {
  const month = Number(selectedDate.current.month);

  const { twoMonthAgo, threeMonthAgo, fourMonthAgo, fiveMonthAgo } = restList;

  const { threeYearAgo, fourYearAgo, fiveYearAgo } = restList;

  const getMonthSumtimes = (monthList: OneDay[]) => {
    return {
      ...TimeTool.getMainSumTimes(TimeTool.getEntireTimes(monthList!)!),
      ...TimeTool.getDetailSumTimes(monthList!),
    };
  };

  const monthData: MonthDateType[] = [
    thisList,
    lastList,
    twoMonthAgo,
    threeMonthAgo,
    fourMonthAgo,
    fiveMonthAgo,
  ]
    .map((el, idx) => {
      return {
        beforeMonth: idx,
        sumTimes: getMonthSumtimes(el),
      };
    })
    .reverse();

  const yearData: YearDateType[] = [
    thisList,
    lastList,
    threeYearAgo,
    fourYearAgo,
    fiveYearAgo,
  ]
    .map((el, idx) => {
      return {
        beforeYear: idx,
        sumTimes: getMonthSumtimes(el),
      };
    })
    .reverse();

  const monthList = pageType[2] !== "Month" ? [] : monthData;

  const yearList = pageType[2] !== "Year" ? [] : yearData;

  const [selectedList, setSelectedList] = useState<SelectedListType>({
    list: "IMPROVE_TIME",
    title: "자기계발",
  });

  const getChartData = (dayData: OneDay) => {
    const improveArr = dayData.entireTime.entireImprove.split(":");
    const privateArr = dayData.entireTime.entirePrivate.split(":");
    const sleepArr = dayData.entireTime.entireSleep.split(":");
    const worksArr = dayData.entireTime.entireWorks.split(":");
    const studyArr = dayData.improve.study.split(":");
    const readingArr = dayData.improve.reading.split(":");

    switch (selectedList.list) {
      case "IMPROVE_TIME":
        return Number(improveArr[0]) + Number(+improveArr[1] * 0.016);
      case "PRIVATE_TIME":
        return Number(privateArr[0]) + Number(+privateArr[1] * 0.016);
      case "SLEEP_TIME":
        return Number(sleepArr[0]) + Number(+sleepArr[1] * 0.016);
      case "WORK_TIME":
        return Number(worksArr[0]) + Number(+worksArr[1] * 0.016);
      case "STUDY_TIME":
        return Number(studyArr[0]) + Number(+studyArr[1] * 0.016);
      case "READING_TIME":
        return Number(readingArr[0]) + Number(+readingArr[1] * 0.016);
    }
  };

  const getMonthChartData = (monthData: MonthDateType) => {
    const { sumImprove, sumPrivate, sumSleep, sumWorks, sumStudy, sumReading } =
      monthData.sumTimes;

    const getMonthChartHour = (time: number): number => {
      return Number(TimeTool.convertMinToTime(time).split("시간")[0]);
    };
    switch (selectedList.list) {
      case "IMPROVE_TIME":
        return getMonthChartHour(sumImprove);
      case "PRIVATE_TIME":
        return getMonthChartHour(sumPrivate);
      case "SLEEP_TIME":
        return getMonthChartHour(sumSleep);
      case "WORK_TIME":
        return getMonthChartHour(sumWorks);
      case "STUDY_TIME":
        return getMonthChartHour(sumStudy);
      case "READING_TIME":
        return getMonthChartHour(sumReading);
    }
  };

  const getYearChartData = (yearData: YearDateType) => {
    const { sumImprove, sumPrivate, sumSleep, sumWorks, sumStudy, sumReading } =
      yearData.sumTimes;

    const getMonthChartHour = (time: number): number => {
      return Number(TimeTool.convertMinToTime(time).split("시간")[0]);
    };
    switch (selectedList.list) {
      case "IMPROVE_TIME":
        return getMonthChartHour(sumImprove);
      case "PRIVATE_TIME":
        return getMonthChartHour(sumPrivate);
      case "SLEEP_TIME":
        return getMonthChartHour(sumSleep);
      case "WORK_TIME":
        return getMonthChartHour(sumWorks);
      case "STUDY_TIME":
        return getMonthChartHour(sumStudy);
      case "READING_TIME":
        return getMonthChartHour(sumReading);
    }
  };

  const weekDataSets = [
    {
      label: `지난${pageType[1]}`,
      data: lastList.map((day: OneDay) => {
        return getChartData(day);
      }),
      backgroundColor: "rgba(71, 71, 71, 0.3)",
    },
    {
      label: `이번${pageType[1]}`,
      data: thisList.map((day: OneDay) => {
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

  const yearDataSets = [
    {
      label: `${selectedList.title}`,
      data: yearList.map((year) => {
        return getYearChartData(year);
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

  const yearLabels = Array(5)
    .fill(null)
    .map((_, idx) => {
      return `${moment().year() - idx}년`;
    })
    .reverse();

  const data = {
    labels:
      pageType[2] === "Week"
        ? weekLabels
        : pageType[2] === "Month"
        ? monthLabels
        : yearLabels,
    datasets:
      pageType[2] === "Week"
        ? weekDataSets
        : pageType[2] === "Month"
        ? monthDataSets
        : yearDataSets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        formatter: (value: number) => {
          const hour = Math.floor(value);
          const minutes = Math.round((value - hour) * 62);
          return `${hour}시간 ${minutes}분`;
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number | string): string => {
            return `${Math.floor(+value)}시간`;
          },
        },
      },
    },
  };

  const listClickHandler = (e: React.MouseEvent<HTMLUListElement>): void => {
    const target = e.target as HTMLUListElement;

    if (target.tagName === "LI") {
      const clickedLabel: string | undefined = target.dataset.labels;

      setSelectedList({
        ...selectedList,
        list: clickedLabel,
        title: target.textContent,
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
