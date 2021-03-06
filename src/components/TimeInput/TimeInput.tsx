import TimeTool from "../../utils/TimeTool";
import TimeGauge from "./TimeGauge";
import { Record } from "./Record";
import { StyledTimeInput } from "./style";
import * as moment from "moment";

type TimeInputProps = {
  dataLength: number;
};

function TimeInput({ dataLength }: TimeInputProps) {
  const today = moment().format("YYYY-MM-DD");
  const day = TimeTool.getDay();
  const tomorrow = moment().add(1, "days").startOf("day");
  const propsTime = tomorrow.diff(moment().format());

  return (
    <StyledTimeInput time={propsTime}>
      <TimeGauge tomorrow={tomorrow}></TimeGauge>
      <Record dataLength={dataLength} today={today} day={day}></Record>
    </StyledTimeInput>
  );
}

export default TimeInput;
