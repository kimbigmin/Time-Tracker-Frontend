import Grid from "@mui/material/Grid";
import { SaveButton, UpdateButton, Container } from "./style";
import getDay from "../../utils/getDay";
import InputBox from "./InputBox";

type InputFormProps = {};

function InputForm({
  handlers,
  entireTime,
  submitHandler,
  selectedDate,
  calender,
  updateHandler,
  finishedDay,
  improveTime,
  privateTime,
  sleepTime,
  worksTime,
}: any) {
  const { worksHandler, improveHandler, privateHandler, sleepHandler } =
    handlers;
  const { entireImprove, entirePrivate, entireSleep, entireWorks } = entireTime;

  console.log(entireTime);

  const improve = [
    ["공부시간", "study"],
    ["운동시간", "workout"],
    ["독서 및 신문", "reading"],
    ["기타", "rest"],
  ];

  const privates = [
    ["휴식", "privates"],
    ["게임시간", "game"],
  ];

  const work = [
    ["일", "works"],
    ["집안일", "houseWork"],
  ];

  const sleep = [
    ["취침", "night"],
    ["낮잠", "nap"],
    ["취침시간", "sleep"],
    ["기상시간", "wake"],
  ];

  return (
    <>
      <Container>
        <h2>{`선택 날짜: ${calender}.${selectedDate} ${getDay(
          `${calender}.${selectedDate}`
        )}`}</h2>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <InputBox
            data={improve}
            handler={improveHandler}
            time={improveTime}
          ></InputBox>
          <InputBox
            data={privates}
            handler={privateHandler}
            time={privateTime}
          ></InputBox>
          <InputBox
            data={work}
            handler={worksHandler}
            time={worksTime}
          ></InputBox>
          <InputBox
            data={sleep}
            handler={sleepHandler}
            time={sleepTime}
          ></InputBox>
        </Grid>
        {finishedDay.includes(`${selectedDate}`) ? (
          <UpdateButton onClick={updateHandler}>수정하기</UpdateButton>
        ) : (
          <SaveButton onClick={submitHandler}>저장하기</SaveButton>
        )}
      </Container>
    </>
  );
}

export default InputForm;
