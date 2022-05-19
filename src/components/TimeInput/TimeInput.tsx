import getDay from "../../utils/getDay";
import TimeGauge from "./TimeGauge";
import { Record } from "./Record";
import { StyledTimeInput } from "./style";

type TimeInputProps = {
  dataLength: number;
};

function TimeInput({ dataLength }: TimeInputProps) {
  const today = new Date().toLocaleDateString();
  const day = getDay();
  const ONE_DAY_MS = 86400000;
  const tomorrow: number = new Date(today).getTime() + ONE_DAY_MS;
  const propsTime = tomorrow - Date.now();

  return (
    <StyledTimeInput time={propsTime}>
      <TimeGauge tomorrow={tomorrow}></TimeGauge>
      <Record dataLength={dataLength} today={today} day={day}></Record>
    </StyledTimeInput>
  );
}

export default TimeInput;
