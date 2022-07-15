import { Container, Box } from "./style";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { OneDay } from "../../type";
import TimeTool from "../../utils/TimeTool";
import ChartDataLabels from "chartjs-plugin-datalabels";
import * as moment from "moment";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type DoughnutChartProps = {
  data: OneDay[];
};

function DoughnutChart({ data }: DoughnutChartProps) {
  const thisYear = moment().year();
  const thisMonth = moment().month() + 1;

  const thisMonthList = data.filter((item: OneDay) => {
    return item.date.includes(`${thisYear}.${thisMonth}`);
  });

  const entireTimes = TimeTool.getEntireTimes(thisMonthList);
  const sumTimes = TimeTool.getMainSumTimes(entireTimes!);

  const improveData = Number(
    TimeTool.minutesToHours(sumTimes.sumImprove).split(":")[0]
  );
  const privateData = Number(
    TimeTool.minutesToHours(sumTimes.sumPrivate).split(":")[0]
  );
  const worksData = Number(
    TimeTool.minutesToHours(sumTimes.sumWorks).split(":")[0]
  );
  const sleepData = Number(
    TimeTool.minutesToHours(sumTimes.sumSleep).split(":")[0]
  );

  const chartData = {
    labels: ["자기계발", "개인시간", "일", "취침"],
    datasets: [
      {
        label: "# of Votes",
        data: [improveData, privateData, worksData, sleepData],
        backgroundColor: [
          "rgba(251, 184, 1, 0.4)",
          "rgba(241, 66, 43, 0.4)",
          " rgba(74, 200, 190, 0.4)",
          "rgba(107, 29, 195, 0.4)",
        ],
        borderColor: ["#ffffff"],
        borderWidth: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: true,

        font: {
          size: 15,
          weight: "bold",
        },
      },
      datalabels: {
        color: "black",
        font: {
          size: 13,
        },
        formatter: (value: number, context: any) => {
          const sum = context.dataset.data.reduce(
            (acc: number, val: number) => {
              return acc + val;
            },
            0
          );
          const percent = ((value / sum) * 100).toFixed(1);

          return `${value}시간 (${percent}%)`;
        },
      },
    },
  };

  return (
    <Container>
      <h3>이번달 시간사용 차트</h3>
      <Box>
        <Doughnut data={chartData} options={options} />
      </Box>
    </Container>
  );
}

export default DoughnutChart;
