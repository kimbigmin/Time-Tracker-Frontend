import * as React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { SaveButton, UpdateButton, Container, FormContainer } from "./style";
import getDay from "../../utils/getDay";

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

  return (
    <>
      <Container>
        <h2>{`선택 날짜: ${calender}.${selectedDate} ${getDay(
          `${calender}.${selectedDate}`
        )}`}</h2>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid item xs={6}>
            <FormContainer>
              <h3 className={entireImprove !== "NaN:NaN" ? "" : "error"}>
                자기계발:{" "}
                {entireImprove !== "NaN:NaN"
                  ? entireImprove
                  : "올바른 형식을 입력해주세요."}
              </h3>
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-study"
                label="공부시간"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="warning"
                name="study"
                onChange={improveHandler}
                autoFocus
                value={improveTime ? improveTime.study : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-workout"
                label="운동시간"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="warning"
                name="workout"
                onChange={improveHandler}
                value={improveTime ? improveTime.workout : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-reading"
                label="독서 및 신문"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="warning"
                name="reading"
                onChange={improveHandler}
                value={improveTime ? improveTime.reading : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-rest"
                label="기타"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="warning"
                name="rest"
                onChange={improveHandler}
                value={improveTime ? improveTime.rest : "0:00"}
              />
            </FormContainer>
          </Grid>
          <Grid item xs={6}>
            <FormContainer>
              <h3 className={entirePrivate !== "NaN:NaN" ? "" : "error"}>
                개인시간:{" "}
                {entirePrivate !== "NaN:NaN"
                  ? entirePrivate
                  : "올바른 형식을 입력해주세요."}
              </h3>
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-private"
                label="휴식"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="error"
                name="privates"
                onChange={privateHandler}
                value={privateTime ? privateTime.privates : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-game"
                label="게임시간"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="error"
                name="game"
                onChange={privateHandler}
                value={privateTime ? privateTime.game : "0:00"}
              />
            </FormContainer>
          </Grid>

          <Grid item xs={6}>
            <FormContainer>
              <h3 className={entireWorks !== "NaN:NaN" ? "" : "error"}>
                일:{" "}
                {entireWorks !== "NaN:NaN"
                  ? entireWorks
                  : "올바른 형식을 입력해주세요."}
              </h3>
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-work"
                label="일"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                name="works"
                onChange={worksHandler}
                value={worksTime ? worksTime.works : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-housework"
                label="집안일"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                name="houseWork"
                onChange={worksHandler}
                value={worksTime ? worksTime.houseWork : "0:00"}
              />
            </FormContainer>
          </Grid>
          <Grid item xs={6}>
            <FormContainer>
              <h3 className={entireSleep !== "NaN:NaN" ? "" : "error"}>
                취침:{" "}
                {entireSleep !== "NaN:NaN"
                  ? entireSleep
                  : "올바른 형식을 입력해주세요."}
              </h3>
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-night"
                label="취침"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="secondary"
                name="night"
                onChange={sleepHandler}
                value={sleepTime ? sleepTime.night : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-nap"
                label="낮잠"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="secondary"
                name="nap"
                onChange={sleepHandler}
                value={sleepTime ? sleepTime.nap : "0:00"}
              />

              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-sleep"
                label="취침시간"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="secondary"
                name="sleep"
                onChange={sleepHandler}
                value={sleepTime ? sleepTime.sleep : "0:00"}
              />
              <TextField
                sx={{ margin: "0.5rem" }}
                id="text-wakeup"
                label="기상시간"
                variant="outlined"
                placeholder="8:10"
                required
                size="small"
                color="secondary"
                name="wake"
                onChange={sleepHandler}
                value={sleepTime ? sleepTime.wake : "0:00"}
              />
            </FormContainer>
          </Grid>
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
