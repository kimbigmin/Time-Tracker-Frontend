import * as React from "react";
import getDay from "../../utils/getDay";
import { Gauge } from "./Gauge";
import { Record } from "./Record";
import { StyledTimeInput } from "./style";

type Props = {
  dataLength: number;
};

function TimeInput({ dataLength }: Props) {
  const today = new Date().toLocaleDateString();
  const day = getDay();
  const ONE_DAY_MS = 86400000;
  const tomorrow: number = new Date(today).getTime() + ONE_DAY_MS;
  const propsTime = tomorrow - Date.now();

  return (
    <StyledTimeInput time={propsTime}>
      <Gauge tomorrow={tomorrow}></Gauge>
      <Record dataLength={dataLength} today={today} day={day}></Record>
    </StyledTimeInput>
  );
}

export default TimeInput;
