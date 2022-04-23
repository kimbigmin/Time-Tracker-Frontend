import * as React from "react";
import { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { SaveButton, UpdateButton, Container, FormContainer } from "./style";
import getDay from "../../utils/getDay";

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
                value={improveTime ? improveTime.study : ""}
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
                value={improveTime ? improveTime.workout : ""}
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
                value={improveTime ? improveTime.reading : ""}
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
                value={improveTime ? improveTime.rest : ""}
              />
            </FormContainer>
          </Grid>
          <Grid item xs={6}>
            <FormContainer>
              <h3>
                개인시간:{" "}
                {entirePrivate !== "NaN:NaN" ? entirePrivate : "입력중"}
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
                value={privateTime ? privateTime.privates : ""}
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
                value={privateTime ? privateTime.game : ""}
              />
            </FormContainer>
          </Grid>

          <Grid item xs={6}>
            <FormContainer>
              <h3>일: {entireWorks !== "NaN:NaN" ? entireWorks : "입력중"}</h3>
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
                value={worksTime ? worksTime.works : ""}
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
                value={worksTime ? worksTime.houseWork : ""}
              />
            </FormContainer>
          </Grid>
          <Grid item xs={6}>
            <FormContainer>
              <h3>
                취침: {entireSleep !== "NaN:NaN" ? entireSleep : "입력중"}
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
                value={sleepTime ? sleepTime.night : ""}
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
                value={sleepTime ? sleepTime.nap : ""}
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
                value={sleepTime ? sleepTime.sleep : ""}
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
                value={sleepTime ? sleepTime.wake : ""}
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
